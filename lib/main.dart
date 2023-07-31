import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:transparent_image/transparent_image.dart';
import 'dart:developer' as developer;

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();

  if (!kIsWeb && defaultTargetPlatform == TargetPlatform.android) {
    await InAppWebViewController.setWebContentsDebuggingEnabled(true);
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
  late Timer _everySecond;

  final GlobalKey webViewKey = GlobalKey();
  final GlobalKey webViewKey2 = GlobalKey();

  var url = "";

  InAppWebViewController? webViewController;
  InAppWebViewController? webViewController2;

  AnimationController? animationController;
  CurvedAnimation? animation;

  bool _first = true;
  bool _delay = true;

  var buienRadarHeight = 0;
  var buienRadarWidth = 0;

  InAppWebViewSettings settings = InAppWebViewSettings(
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

    url.isEmpty ? url =getNewBuienRadarUrl(buienRadarHeight, buienRadarWidth): url;
    print(url);


    var scaffold = Scaffold(
        body: SafeArea(
            child: AnimatedCrossFade(
      duration: const Duration(seconds: 1),
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
                      colorFilter: ColorFilter.mode(mainColor, BlendMode.color),
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
                                  placeholder: "assets/placeholder.jpeg",
                                  image:
                                    url,
                                  fit: BoxFit.cover,
                                  fadeInDuration: const Duration(milliseconds: 300),
                                ),
                              ))))),
              Container(
                color: mainColor,
                height: MediaQuery.of(context).size.height / 5 * 2,
                child: Stack(
                  children: [
                    FadeTransition(
                        opacity: animation!,
                        child: (InAppWebView(
                            key: webViewKey2,
                            initialUrlRequest: URLRequest(
                                url: WebUri(
                                    "https://www.ns.nl/reisinformatie/externe-schermen/treinen/vertrektijden?stationId=VH&columns=1&rows=4&header=Treinen&footer=&clock=false&headerLogo=false&footerLogo=false")),
                            initialSettings: settings,
                            onWebViewCreated: (controller) {
                              webViewController2 = controller;
                            },
                            onConsoleMessage: (controller, consoleMessage) {
                              print(consoleMessage);
                            },
                            onLoadStop: (InAppWebViewController controller,
                                WebUri? url) {
                              Future.delayed(const Duration(milliseconds: 50),
                                  () {
                                animationController!.forward();
                              });
                              Future.delayed(const Duration(seconds: 1800), () {
                                controller.reload();
                              });
                              Future.delayed(const Duration(seconds: 5), () {
                                setState(() {
                                  _first = false;
                                });
                              });
                            }))),
                  ],
                ),
              ),
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
    animationController = AnimationController(
        duration: const Duration(milliseconds: 1500), vsync: this);
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

      // defines a timer
      _everySecond = Timer.periodic(const Duration(seconds: 60), (Timer t) {
        setState(() {
          PaintingBinding.instance.imageCache.clear();
          url = getNewBuienRadarUrl(buienRadarHeight, buienRadarWidth);
        });
      });
    });
  }

  String getNewBuienRadarUrl(buienRadarHeight, buienRadarWidth) {
    return "https://image.buienradar.nl/2.0/image/animation/RadarMapRainWebMercatorNL?"
        "width=$buienRadarWidth"
        "&height=$buienRadarHeight"
        "&renderBackground=True"
        "&renderBranding=True"
        "&renderText=true";
  }

}
