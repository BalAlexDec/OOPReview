
class Mobile{
    public name :string;
    public  model: string;
    public trademark : string;
    public  sdSize : number;
    public  color : string;
    public is5G: boolean;
    public cameraNumber:number;
    public price:number;

    constructor(name:string,model:string,trademark:string,sdSize:number,color:string,is5G:boolean,cameraNumber:number,price:number){
        this.name=name
        this.model = model
        this.trademark = trademark
        this.sdSize=sdSize;
        this.color=color;
        this.is5G=is5G;
        this.cameraNumber=cameraNumber;
        this.price=price;
    }
    //Name
    public setName(name:string){
        this.name=name;
    }
    public getName():string{
        return this.name;
    }
    //model
    public setModel(model:string){
        this.model=model;
    }
    public getModel():string{
        return this.model;
    }
    //Trademark
    public setTrademark(trademark:string){
        this.trademark=trademark;
    }
    public getTrademark():string{
        return this.trademark;
    }
    //sdSize
    public setSdSize(sdSize:number){
        this.sdSize=sdSize;
    }
    public getSdSize():number{
        return this.sdSize;
    }
    //color
    public setcolor(color:string){
        this.color=color;
    }
    public getcolor():string{
        return this.color;
    }
    //is5G
    public setis5G(is5G:boolean):void{
        this.is5G=is5G;
    }
    public getis5G():boolean{
        return this.is5G;
    }
    //cameraNumber
    public setCameraNumber(cameraNumber:number){
        this.cameraNumber=cameraNumber;
    }
    public getCameraNumber():number{
        return this.cameraNumber;
    }
      //price
      public setprice(price:number){
        this.price=price;
    }
    public getprice():number{
        return this.price;
    }
    

    public printall():void{
        console.log("Name "+" "+this.name+" "+"Model "+" "+this.model+" "+"Trademark "+" "+this.trademark+" "+"Sd Size "+" "+this.sdSize+" "+"Color "+" "+this.color+" "+"is 5G? "+" "+this.is5G+" "+"CameraNumber "+" "+this.cameraNumber+" ");
    }

}
export{Mobile};