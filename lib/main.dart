import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();

  if (!kIsWeb && defaultTargetPlatform == TargetPlatform.android) {
    await InAppWebViewController.setWebContentsDebuggingEnabled(true);
  }

  runApp(MaterialApp(
    home: new MyApp(),
    color: Colors.brown.shade900,
    theme: ThemeData(
      scaffoldBackgroundColor: Colors.brown.shade900,
      canvasColor: Colors.brown.shade900,
    ),
  ));
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => new _MyAppState();
}

class _MyAppState extends State<MyApp> with TickerProviderStateMixin {
  final GlobalKey webViewKey = GlobalKey();
  final GlobalKey webViewKey2 = GlobalKey();

  InAppWebViewController? webViewController;
  InAppWebViewController? webViewController2;

  AnimationController? animationController;
  CurvedAnimation? animation;

  bool _first = true;
  bool _delay = true;

  InAppWebViewSettings settings = InAppWebViewSettings(
      useShouldOverrideUrlLoading: true,
      disallowOverScroll: true,
      verticalScrollBarEnabled: false,
      horizontalScrollBarEnabled: false,
      ignoresViewportScaleLimits: true,
      underPageBackgroundColor: Colors.brown.shade900,
      transparentBackground: true);

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
    Future.delayed(const Duration(seconds: 50), () {
      setState(() {
        _first = false;
      });
    });

    Future.delayed(const Duration(seconds: 5), () {
      setState(() {
        _delay = false;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
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
              Container(
                  color: Colors.brown.shade900,
                  height: MediaQuery.of(context).size.height / 5 * 3,
                  child: Column(children: <Widget>[
                    Center(
                        child: Transform.scale(
                            scale: 2,
                            child: Container(
                                color: Colors.brown.shade900,
                                height: 256,
                                width: 256,
                                child: FadeTransition(
                                  opacity: animation!,
                                  child: InAppWebView(
                                    key: webViewKey,
                                    initialUrlRequest: URLRequest(
                                        url: WebUri(
                                            "https://gadgets.buienradar.nl/gadget/zoommap/?lat=52.22277&lng=4.47992&overname=2&zoom=8&naam=2215el&size=2&voor=0")),
                                    initialSettings: settings,
                                    onWebViewCreated: (controller) {
                                      webViewController = controller;
                                    },
                                    onConsoleMessage:
                                        (controller, consoleMessage) {
                                      print(consoleMessage);
                                    },
                                    onLoadStop:
                                        (InAppWebViewController controller,
                                            WebUri? url) {
                                      Future.delayed(
                                          const Duration(milliseconds: 50), () {
                                        animationController!.forward();
                                      });
                                      Future.delayed(
                                          const Duration(seconds: 1800), () {
                                        controller.reload();
                                      });
                                      Future.delayed(const Duration(seconds: 5),
                                          () {
                                        setState(() {
                                          _first = false;
                                        });
                                      });
                                    },
                                  ),
                                )))),
                    Expanded(child: Container())
                  ])),
              Container(
                color: Colors.brown.shade900,
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
          :  Container(),
      crossFadeState:
          _first ? CrossFadeState.showFirst : CrossFadeState.showSecond,
    )));
  }
}
