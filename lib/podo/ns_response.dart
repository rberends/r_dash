import 'package:web_page_poc/podo/payload.dart';

class NSResponse {
  Payload? payload;

  NSResponse({this.payload});

  NSResponse.fromJson(Map<String, dynamic> json) {
    payload =
        json['payload'] != null ? new Payload.fromJson(json['payload']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.payload != null) {
      data['payload'] = this.payload!.toJson();
    }
    return data;
  }
}
