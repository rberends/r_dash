import 'package:flutter/cupertino.dart';
import 'r_dash_globals.dart';


/// Shows a single train icon above our departures list.
class TrainIconWidget extends StatelessWidget {
  const TrainIconWidget({super.key});

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return                 ClipRRect(
        borderRadius: const BorderRadius.only(
            topRight: Radius.circular(16)),
        child: ColorFiltered(
            colorFilter: ColorFilter.mode(
                mainColor.shade900,
                BlendMode.color),
            child: Container(
              height: MediaQuery.of(context)
                  .size
                  .height /
                  5 *
                  2 /
                  5,
              color: mainColor.shade900,
              padding: const EdgeInsets.only(
                  left: 16,
                  right: 16,
                  top: 16,
                  bottom: 26),
              alignment: Alignment.centerLeft,
              child: Image.asset(
                  "assets/train_icon.png"),
            )));
  }
}
