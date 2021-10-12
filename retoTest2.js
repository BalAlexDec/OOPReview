"use strict";
//Del ejercicio 4 esta al final habra que cambiar los atributos publico para probar la primera classe
exports.__esModule = true;
var retoRepaso2_1 = require("./retoRepaso2");
//Ex2 Con ts
var Nokia3210 = new retoRepaso2_1.Mobile("Nokia3210", "3210", "Nokia", 64, "blue", false, 1, 250);
var iPhone3G = new retoRepaso2_1.Mobile("iPhone3g", "5", "Apple", 32, "Greenfire", false, 2, 650);
var SamsungGalaxy10 = new retoRepaso2_1.Mobile("SamsungGalaxy10", "galaxy 10", "Samsung", 4, "Greyforze", true, 321312, 700);
Nokia3210.printall();
iPhone3G.printall();
SamsungGalaxy10.printall();
Nokia3210.setis5G(true);
Nokia3210.setCameraNumber(4);
Nokia3210.printall();
//Creamos el array
var arr = [Nokia3210, iPhone3G, SamsungGalaxy10];
//Recorremos para ver todos los atributos de todos los objetos
for (var i = 0; i < arr.length; i++) {
    for (var resultado in arr[i]) {
        console.log(arr[i][resultado]);
    }
}
