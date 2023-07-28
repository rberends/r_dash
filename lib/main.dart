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
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
          child: Column(children: <Widget>[
        Container(
            color: Colors.brown.shade900,
            height: MediaQuery.of(context).size.height / 2,
            child: Column(children: <Widget>[
              Transform.scale(
                  scale: 1.2,
                  origin: const Offset(420, -170),
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
                          onConsoleMessage: (controller, consoleMessage) {
                            print(consoleMessage);
                          },
                          onLoadStop:
                              (InAppWebViewController controller, WebUri? url) {
                            Future.delayed(const Duration(milliseconds: 50),
                                () {
                              animationController!.forward();
                            });
                            Future.delayed(const Duration(seconds: 1800), (){
                              controller.reload();
                            });
                          },
                        ),
                      ))),
              Expanded(child: Container())
            ])),
        Container(
          color: Colors.brown.shade900,
          height: MediaQuery.of(context).size.height / 2,
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
                      onLoadStop:
                          (InAppWebViewController controller, WebUri? url) {
                        Future.delayed(const Duration(milliseconds: 50), () {
                          animationController!.forward();
                        });
                        Future.delayed(const Duration(seconds: 1800), (){
                          controller.reload();
                        });
                      }))),
            ],
          ),
        ),
      ])),
    );
  }
}
