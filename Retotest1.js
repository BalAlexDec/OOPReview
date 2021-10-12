"use strict";
exports.__esModule = true;
var retoRepaso2_1 = require("./retoRepaso2");
//Ex2 Con ts
var Nokia3210 = new retoRepaso2_1.Mobile("Nokia3210", "3210", "Nokia", 64, "blue", false, 1, 250);
var iPhone3G = new retoRepaso2_1.Mobile("iPhone3g", "5", "Apple", 32, "Greenfire", false, 2, 650);
var SamsungGalaxy10 = new retoRepaso2_1.Mobile("SamsungGalaxy10", "galaxy 10", "Samsung", 4, "Greyforze", true, 321312, 700);
console.log("Ex2" + Nokia3210.name + " " + Nokia3210.model + " " + Nokia3210.trademark + " " + Nokia3210.sdSize + " " + Nokia3210.color + " " + Nokia3210.is5G + " " + Nokia3210.cameraNumber + " " + Nokia3210.price);
