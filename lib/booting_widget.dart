import 'package:flutter/cupertino.dart';
import 'r_dash_globals.dart';

class BootingWidget extends StatelessWidget {
  const BootingWidget({super.key});

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return  SizedBox(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        child: Center(
            child: Transform.scale(
                scale: 0.8, child: Image.asset("assets/info.png"))));
  }
}
