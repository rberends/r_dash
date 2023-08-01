class RouteStations {
  String? uicCode;
  String? mediumName;

  RouteStations({this.uicCode, this.mediumName});

  RouteStations.fromJson(Map<String, dynamic> json) {
    uicCode = json['uicCode'];
    mediumName = json['mediumName'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['uicCode'] = this.uicCode;
    data['mediumName'] = this.mediumName;
    return data;
  }
}