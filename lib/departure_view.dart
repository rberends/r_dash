import 'dart:async';

import 'package:flutter/material.dart';
import 'package:web_page_poc/podo/departure.dart';
import 'package:web_page_poc/r_dash_globals.dart';

class DepartureWidget extends StatefulWidget {
  DepartureWidget({super.key, required this.departure, this.light = false});

  final Departure departure;
  final bool light;

  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _DepartureWidgetState();
  }
}

class _DepartureWidgetState extends State<DepartureWidget> {
  // Step 2
  Timer? countdownTimer;
  Duration myDuration = Duration(days: 5);
  String departureString = "";

  @override
  void initState() {
    super.initState();
    updateDescriptionText();
    startTimer();
  }

  @override
  void dispose() {
    super.dispose();
    // TODO: implement dispose
    countdownTimer?.cancel();
  }

  /// Timer related methods ///
  // Step 3
  void startTimer() {
    countdownTimer = Timer.periodic(
        const Duration(seconds: 20), (_) => updateDescriptionText());
  }

  String getTimeLeft(DateTime actualDatetime) {
    int minutes = actualDatetime.difference(DateTime.now()).inMinutes;

    if (minutes == 0) {
      return "nu";
    }
    if (minutes < 0) {
      return "vertrokken";
    }
    if (minutes > 0) {}
    return "in ${actualDatetime.difference(DateTime.now())!.inMinutes} minuten";
  }

  // Step 6
  void updateDescriptionText() {
    setState(() {
      departureString = getTimeLeft(widget.departure.actualDateTime!);
    });
  }

  @override
  Widget build(BuildContext context) {
    return ColorFiltered(
        colorFilter: ColorFilter.mode(mainColor.shade900, BlendMode.color),
        child: Container(
            padding: EdgeInsets.all(10),
            color: widget.light ? mainColor.shade400 : mainColor.shade900,
            height: MediaQuery.of(context).size.height / 5 * 2 / 5,
            child: Row(
              children: [
                Expanded(
                    child: Container(
                        padding: const EdgeInsets.only(left:12),
                        child: Text(widget.departure.direction!,
                            style: const TextStyle(
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
                              fontSize: 16,
                            )))),
                Container(
                    padding: const EdgeInsets.all(14),
                    alignment: Alignment.centerLeft,
                    child: Text(departureString,
                        style: const TextStyle(
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                            fontSize: 14))),
                Container(
                    padding: const EdgeInsets.all(8),
                    child: Text(widget.departure.product!.longCategoryName!,
                        style: const TextStyle(
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                            fontSize: 12))),
                Container(
                    padding: const EdgeInsets.all(8),
                    child: Text("Sp " + widget.departure!.actualTrack!,
                        style: const TextStyle(
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                            fontSize: 12)))
              ],
            )));
  }
}
