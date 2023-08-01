import 'package:web_page_poc/podo/product.dart';
import 'package:web_page_poc/podo/route_stations.dart';

class Departure {
  String? direction;
  String? name;
  DateTime? plannedDateTime;
  int? plannedTimeZoneOffset;
  DateTime? actualDateTime;
  int? actualTimeZoneOffset;
  String? plannedTrack;
  String? actualTrack;
  Product? product;
  String? trainCategory;
  bool? cancelled;
  List<RouteStations>? routeStations;
  List<Null>? messages;
  String? departureStatus;

  Departure(
      {this.direction,
      this.name,
      this.plannedDateTime,
      this.plannedTimeZoneOffset,
      this.actualDateTime,
      this.actualTimeZoneOffset,
      this.plannedTrack,
      this.actualTrack,
      this.product,
      this.trainCategory,
      this.cancelled,
      this.routeStations,
      this.messages,
      this.departureStatus});

  Departure.fromJson(Map<String, dynamic> json) {
    direction = json['direction'];
    name = json['name'];
    plannedDateTime =  DateTime.parse(json['plannedDateTime']);
    plannedTimeZoneOffset = json['plannedTimeZoneOffset'];
    actualDateTime = DateTime.parse(json['actualDateTime']);
    actualTimeZoneOffset = json['actualTimeZoneOffset'];
    plannedTrack = json['plannedTrack'];
    actualTrack = json['actualTrack'];
    product =
        json['product'] != null ? new Product.fromJson(json['product']) : null;
    trainCategory = json['trainCategory'];
    cancelled = json['cancelled'];
    if (json['routeStations'] != null) {
      routeStations = <RouteStations>[];
      json['routeStations'].forEach((v) {
        routeStations!.add(new RouteStations.fromJson(v));
      });
    }
    if (json['messages'] != null) {
      messages = <Null>[];
      json['messages'].forEach((v) {
        //messages!.add(Null.fromJson(v));
      });
    }
    departureStatus = json['departureStatus'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['direction'] = this.direction;
    data['name'] = this.name;
    data['plannedDateTime'] = this.plannedDateTime;
    data['plannedTimeZoneOffset'] = this.plannedTimeZoneOffset;
    data['actualDateTime'] = this.actualDateTime;
    data['actualTimeZoneOffset'] = this.actualTimeZoneOffset;
    data['plannedTrack'] = this.plannedTrack;
    data['actualTrack'] = this.actualTrack;
    if (this.product != null) {
      data['product'] = this.product!.toJson();
    }
    data['trainCategory'] = this.trainCategory;
    data['cancelled'] = this.cancelled;
    if (this.routeStations != null) {
      data['routeStations'] =
          this.routeStations!.map((v) => v.toJson()).toList();
    }
    if (this.messages != null) {
      //data['messages'] = this.messages!.map((v) => v.toJson()).toList();
    }
    data['departureStatus'] = this.departureStatus;
    return data;
  }

  @override
  String toString() {
    return 'Departures{direction: $direction, actualDateTime, leaving in: ${actualDateTime!.difference(DateTime.now()).inMinutes} minutes, Track: $actualTrack, product: ${product!.longCategoryName}}';
  }
}
