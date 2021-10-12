import {Mobile} from "./retoRepaso2";
//Ex2 Con ts

let Nokia3210 = new Mobile("Nokia3210","3210","Nokia",64,"blue",false,1,250);
let iPhone3G = new Mobile("iPhone3g","5","Apple",32,"Greenfire",false,2,650);
let SamsungGalaxy10 = new Mobile("SamsungGalaxy10","galaxy 10","Samsung",4,"Greyforze",true,321312,700);

console.log("Ex2 "+Nokia3210.name+" "+Nokia3210.model+" "+Nokia3210.trademark+" "+Nokia3210.sdSize+" "+Nokia3210.color+" "+Nokia3210.is5G+" "+Nokia3210.cameraNumber+" "+Nokia3210.price);

console.log("Ex2 "+iPhone3G.name+" "+iPhone3G.model+" "+iPhone3G.trademark+" "+iPhone3G.sdSize+" "+iPhone3G.color+" "+iPhone3G.is5G+" "+iPhone3G.cameraNumber+" "+iPhone3G.price);

console.log("Ex2 "+SamsungGalaxy10.name+" "+SamsungGalaxy10.model+" "+SamsungGalaxy10.trademark+" "+SamsungGalaxy10.sdSize+" "+SamsungGalaxy10.color+" "+SamsungGalaxy10.is5G+" "+SamsungGalaxy10.cameraNumber+" "+SamsungGalaxy10.price);

Nokia3210.is5G = true;
Nokia3210.cameraNumber=4;

console.log("Depues del cambio "+Nokia3210.name+" "+Nokia3210.model+" "+Nokia3210.trademark+" "+Nokia3210.sdSize+" "+Nokia3210.color+" "+Nokia3210.is5G+" "+Nokia3210.cameraNumber+" "+Nokia3210.price);