// class User{
//     public email:string
//     private name:string
//     readonly city:string=""
//     constructor(email:string,name:string){
//         this.email=email,
//         this.name=name
//     }
// }
// const shivam = new User("h.com", "ko");
class User{

     _courseCount = 1
    constructor(public email:string,public name:string){
    }
    get getAppleEmail():string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }
    set courseCount(coursename){
        if(this._courseCount<=1){
            throw new Error("Course count should be >1");
        }   
    }
}

class SubUser extends User{
    isFamily:boolean=true
    changeCourseContent(){
        this._courseCount=4
    }
}
const shivam = new User("h.com", "ko");
// shivam.city = "Jai";

