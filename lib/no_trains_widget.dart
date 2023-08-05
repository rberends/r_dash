import 'package:flutter/cupertino.dart';
import 'r_dash_globals.dart';

class NoTrainsWidget extends StatelessWidget {
  const NoTrainsWidget({super.key});

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Container(
        color: mainColor.shade900,
        height: MediaQuery.of(context).size.height / 5 * 2 -
            MediaQuery.of(context).size.height / 5 * 2 / 5,
        child: Center(
            heightFactor: 2.7,
            child: Text(
              'No departing \n trains found',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                color: mainColor.shade100,
                fontSize: 36,
              ),
              textAlign: TextAlign.center,
            )));
  }
}
