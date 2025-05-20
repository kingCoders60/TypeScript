"use strict";
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
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(coursename) {
        if (this._courseCount <= 1) {
            throw new Error("Course count should be >1");
        }
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseContent() {
        this._courseCount = 4;
    }
}
const shivam = new User("h.com", "ko");
// shivam.city = "Jai";
