import 'package:flutter/cupertino.dart';
import 'package:flutter_analog_clock/flutter_analog_clock.dart';
import 'r_dash_globals.dart';

class RDashClockWidget extends StatelessWidget {
  const RDashClockWidget({super.key});

  @override
  Widget build(BuildContext context) {
    var displayWidth = MediaQuery.of(context).size.width;
    var radarHeight = (MediaQuery.of(context).size.height / 5 * 3.5);

    // TODO: implement build
    return Container(
        margin: const EdgeInsets.only(left: 12),
        width: displayWidth / 2.5,
        height: radarHeight / 2.5,
        child: Opacity(
            opacity: 0.9,
            child:Transform.scale(
                scaleY: 0.92,
                child: AnalogClock.dark(
                  hourNumberColor: mainColor.shade100,
                  hourHandColor: mainColor.shade100,
                  minuteHandColor: mainColor.shade100,
                  secondHandColor: mainColor.shade100,
                  centerPointColor: mainColor.shade100,
                  markingColor: mainColor.shade900,
                  dialColor: mainColor.shade900,
                  dialBorderWidthFactor: 0.1,
                  markingWidthFactor: 0.0,
                  minuteHandLengthFactor: 0.70,
                  hourHandLengthFactor: 0.8,
                  secondHandLengthFactor: 0.6,
                  hourNumberSizeFactor: 1.1,
                  hourNumberRadiusFactor:0.97,
                  dialBorderColor: mainColor.shade100,
                ))));
  }
}
