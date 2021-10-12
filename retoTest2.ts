//Del ejercicio 4 esta al final habra que cambiar los atributos publico para probar la primera classe

import {Mobile} from "./retoRepaso2";
//Ex2 Con ts

let Nokia3210 = new Mobile("Nokia3210","3210","Nokia",64,"blue",false,1,250);
let iPhone3G = new Mobile("iPhone3g","5","Apple",32,"Greenfire",false,2,650);
let SamsungGalaxy10 = new Mobile("SamsungGalaxy10","galaxy 10","Samsung",4,"Greyforze",true,321312,700);

Nokia3210.printall();
iPhone3G.printall();
SamsungGalaxy10.printall();
Nokia3210.setis5G(true);
Nokia3210.setCameraNumber(4);
Nokia3210.printall();

//Creamos el array
let arr = [Nokia3210,iPhone3G,SamsungGalaxy10];

//Recorremos para ver todos los atributos de todos los objetos
for(let i=0 ; i<arr.length;i++){
    for( let resultado in arr[i]){
        console.log(arr[i][resultado]);
    }
}
