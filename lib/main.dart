import 'dart:async';
import 'dart:convert';
import 'dart:developer' as developer;
import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart' as inapp;
import 'package:http/http.dart' as http;
import 'package:intl/intl.dart';
import 'package:web_page_poc/departure_view.dart';
import 'package:web_page_poc/podo/departure.dart';
import 'package:web_page_poc/podo/ns_response.dart';
import 'package:flutterpi_tool/flutterpi_tool.dart';

class MyHttpOverrides extends HttpOverrides {
  @override
  HttpClient createHttpClient(SecurityContext? context) {
    return super.createHttpClient(context)
      ..badCertificateCallback =
          (X509Certificate cert, String host, int port) => true;
  }
}

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();

  HttpOverrides.global = new MyHttpOverrides();
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
  if (!kIsWeb && defaultTargetPlatform == TargetPlatform.android) {
    await inapp.InAppWebViewController.setWebContentsDebuggingEnabled(true);
  }

  runApp(MaterialApp(
    home: new MyApp(),
    color: mainColor,
    theme: ThemeData(
      scaffoldBackgroundColor: mainColor,
      canvasColor: mainColor,
    ),
  ));
}

final mainColor = Colors.brown.shade900;

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => new _MyAppState();
}

class _MyAppState extends State<MyApp> with TickerProviderStateMixin {
  late Timer _updateNsTimer, _updateRadarTimer;

  final GlobalKey webViewKey = GlobalKey();
  final GlobalKey webViewKey2 = GlobalKey();

  var url = "";

  var _timeString = "";

  inapp.InAppWebViewController? webViewController;
  inapp.InAppWebViewController? webViewController2;

  AnimationController? animationController;
  CurvedAnimation? animation;

  bool _first = true;
  bool _delay = true;

  var buienRadarHeight = 0;
  var buienRadarWidth = 0;

  var departures = <Departure>[];

  inapp.InAppWebViewSettings settings = inapp.InAppWebViewSettings(
      useShouldOverrideUrlLoading: true,
      disallowOverScroll: true,
      verticalScrollBarEnabled: false,
      horizontalScrollBarEnabled: false,
      ignoresViewportScaleLimits: true,
      underPageBackgroundColor: mainColor,
      transparentBackground: true);

  @override
  Widget build(BuildContext context) {


    var radarHeight = (MediaQuery.of(context).size.height / 5 * 3);
    var radarWidth = (MediaQuery.of(context).size.width);

    buienRadarHeight = radarHeight.toInt();
    buienRadarWidth = radarWidth.toInt();

    url.isEmpty
        ? url = getNewBuienRadarUrl(buienRadarHeight, buienRadarWidth)
        : url;

    var scaffold = Scaffold(
        body: SafeArea(
            child: AnimatedCrossFade(
      duration: const Duration(seconds: 3),
      firstChild: SizedBox(
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height,
          child: Center(
              child: Transform.scale(
                  scale: 0.8, child: Image.asset("assets/info.png")))),
      secondChild: !_delay
          ? Column(children: <Widget>[
              SizedBox(
                  width: radarWidth,
                  height: radarHeight,
                  child: ColorFiltered(
                          colorFilter:
                              ColorFilter.mode(mainColor, BlendMode.color),
                          child: ColorFiltered(
                              colorFilter:
                                  ColorFilter.mode(mainColor, BlendMode.screen),
                              child: ColorFiltered(
                                  colorFilter: const ColorFilter.mode(
                                      Colors.black54, BlendMode.overlay),
                                  child: ColorFiltered(
                                    colorFilter: const ColorFilter.mode(
                                        Colors.grey, BlendMode.saturation),
                                    child: FadeInImage.assetNetwork(
                                      placeholder: 'assets/placeholder.jpeg',
                                      image:url,
                                      fit: BoxFit.cover,
                                      key: UniqueKey(),
                                    ),
                                  ))))),
              Container(
                height: MediaQuery.of(context).size.height / 5 * 2,
                color: mainColor,
                child:
                Column(
                  children:[
                    ColorFiltered(
                        colorFilter: ColorFilter.mode(mainColor, BlendMode.color),
                        child:
                        Row(
                          children: [
                        Container(height:  MediaQuery.of(context).size.height / 5 * 2 / 5, color: mainColor, padding: const EdgeInsets.all(8),
                            alignment: Alignment.centerLeft,
                            child: const Text("Treinen",
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
                              fontSize: 36,
                            ))),
                            Expanded(child: Container()),
                            Container(height:  MediaQuery.of(context).size.height / 5 * 2 / 5, color: mainColor, padding: const EdgeInsets.all(16),
                                alignment: Alignment.centerRight,
                                child: Text(_timeString,
                                    style: const TextStyle(
                                      fontWeight: FontWeight.bold,
                                      color: Colors.white,
                                      fontSize: 36,
                                    )))
                        ])),
                ListView.builder(
                  shrinkWrap: true,
                  padding: const EdgeInsets.all(0),
                  itemCount: departures.length,
                  itemBuilder: (BuildContext context, int index) {
                    return DepartureWidget(departure:departures[index], light:index.isEven);
                  },
                ),
              ])),
            ])
          : Container(),
      crossFadeState:
          _first ? CrossFadeState.showFirst : CrossFadeState.showSecond,
    )));
    return scaffold;
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    var string = getTravelInfo();
    _timeString = _formatTime(DateTime.now());


    Timer.periodic(const Duration(seconds: 5), (Timer t) => _getTimeString());

    animationController = AnimationController(
        duration: const Duration(milliseconds: 2500), vsync: this);
    animation = CurvedAnimation(
      parent: animationController!,
      curve: Curves.ease,
    );
    Future.delayed(const Duration(seconds: 2), () {
      setState(() {
        _first = false;
      });
    });

    Future.delayed(const Duration(seconds: 2), () {
      setState(() {
        _delay = false;
      });
    });

    // defines a timer
    _updateRadarTimer = Timer.periodic(const Duration(seconds: 500), (Timer t) {
      setState(() {
        PaintingBinding.instance.imageCache.clear();
        imageCache.clear();
        imageCache.clearLiveImages();
        url = getNewBuienRadarUrl(buienRadarHeight, buienRadarWidth);
      });
    }, );

    // defines a timer
    _updateNsTimer = Timer.periodic(const Duration(seconds: 30), (Timer t) {
      setState(() {
        getTravelInfo();
      });
    }, );
  }

  void _getTimeString() {
    final DateTime now = DateTime.now();
    final String formattedTime = _formatTime(now);

    setState(() {
      _timeString = formattedTime;
    });
  }

  String _formatTime(DateTime dateTime) {
    return DateFormat('hh:mm').format(dateTime);
  }

  String getNewBuienRadarUrl(buienRadarHeight, buienRadarWidth) {
    print("new buienradar url");
    return "https://image.buienradar.nl/2.0/image/animation/RadarMapRainWebMercatorNL?"
        "width=$buienRadarWidth"
        "&height=$buienRadarHeight"
        "&renderBackground=True"
        "&renderBranding=True"
        "&renderText=true";
  }

  Future<String> getTravelInfo() async {
    var headers = <String, String>{
      "Cache-Control": "no-cache",
      "Ocp-Apim-Subscription-Key": "294f9f36a196423c96e3c5b77b144aeb"
    };
    final response = await http.get(
        Uri.parse(
            'https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures?station=VH&maxJourneys=4'),
        headers: headers);
    final body = json.decode(response.body);
    setState(() {
      _first = false;
      departures = NSResponse.fromJson(body).payload!.departures!;
      print("ns state updated");
    });
    return response.body;
  }
}
