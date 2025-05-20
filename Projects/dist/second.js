"use strict";
// const hc = new TakePhoto("test","Test");
// class Instagram implements TakePhoto{
//     constructor(
//         public cameraMode:string,
//         public filter:string,
//         public burst:number
//     ){}
// }
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 9;
    }
}
class Insta extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const hc = new Insta("test", "on", 90);
