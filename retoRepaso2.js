"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    //Name
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.getName = function () {
        return this.name;
    };
    //model
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    //Trademark
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    //sdSize
    Mobile.prototype.setSdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    //color
    Mobile.prototype.setcolor = function (color) {
        this.color = color;
    };
    Mobile.prototype.getcolor = function () {
        return this.color;
    };
    //is5G
    Mobile.prototype.setis5G = function (is5G) {
        this.is5G = is5G;
    };
    Mobile.prototype.getis5G = function () {
        return this.is5G;
    };
    //cameraNumber
    Mobile.prototype.setCameraNumber = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    //price
    Mobile.prototype.setprice = function (price) {
        this.price = price;
    };
    Mobile.prototype.getprice = function () {
        return this.price;
    };
    Mobile.prototype.printall = function () {
        console.log("Name " + " " + this.name + " " + "Model " + " " + this.model + " " + "Trademark " + " " + this.trademark + " " + "Sd Size " + " " + this.sdSize + " " + "Color " + " " + this.color + " " + "is 5G? " + " " + this.is5G + " " + "CameraNumber " + " " + this.cameraNumber + " ");
    };
    return Mobile;
}());
exports.Mobile = Mobile;
