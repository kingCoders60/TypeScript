interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}

// const hc = new TakePhoto("test","Test");


// class Instagram implements TakePhoto{
//     constructor(
//         public cameraMode:string,
//         public filter:string,
//         public burst:number
//     ){}
// }


abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}

    abstract getSepia():void
    getReelTime():number{
        return 9;
    }
}


class Insta extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter)
    }
    getSepia():void{
        console.log("Sepia");
    }
}

const hc = new Insta("test","on",90);