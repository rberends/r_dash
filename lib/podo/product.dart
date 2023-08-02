class Product {
  String? number;
  String? categoryCode;
  String? shortCategoryName;
  String? longCategoryName;
  String? operatorCode;
  String? operatorName;
  String? type;

  Product(
      {this.number,
      this.categoryCode,
      this.shortCategoryName,
      this.longCategoryName,
      this.operatorCode,
      this.operatorName,
      this.type});

  Product.fromJson(Map<String, dynamic> json) {
    number = json['number'];
    categoryCode = json['categoryCode'];
    shortCategoryName = json['shortCategoryName'];
    longCategoryName = json['longCategoryName'];
    operatorCode = json['operatorCode'];
    operatorName = json['operatorName'];
    type = json['type'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['number'] = this.number;
    data['categoryCode'] = this.categoryCode;
    data['shortCategoryName'] = this.shortCategoryName;
    data['longCategoryName'] = this.longCategoryName;
    data['operatorCode'] = this.operatorCode;
    data['operatorName'] = this.operatorName;
    data['type'] = this.type;
    return data;
  }
}
