import 'package:web_page_poc/podo/departure.dart';

class Payload {
  String? source;
  List<Departure>? departures;

  Payload({this.source, this.departures});

  Payload.fromJson(Map<String, dynamic> json) {
    source = json['source'];
    if (json['departures'] != null) {
      departures = <Departure>[];
      json['departures'].forEach((v) {
        departures!.add(Departure.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['source'] = this.source;
    if (this.departures != null) {
      data['departures'] = this.departures!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}
