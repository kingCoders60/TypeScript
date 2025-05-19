

type User={
    readonly _id:string
    name:string
    email:string
    isActive:boolean
    creditCardDetails?:number //? means question mark
}

let myUser :User = {
    _id:"1234",
    name:"H",
    email:"e",
    isActive:false
}

myUser.email="h1";
// myUser._id="1223"




type cardNumber = {
    cardNumber : string
}

type cardDate={
    cardDate:string
}

type cardDetails = cardNumber & cardDate &{
    cvv:number
}



export {}