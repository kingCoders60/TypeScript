interface User12{
    readonly dbId :number
    email:string,
    userId:number,
    googleId?:string
    startTrial():string
    getcoupon(couponname:string,value:number):number
}
const hitesh:User12 ={dbId:22,email:"h@.com",userId:2221,startTrial:()=>{
    return "shivam"
},
getcoupon:(name:"shivam",off:10)=>{
    return 89
}}