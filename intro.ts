// let man:number=10;
// console.log(man);

// // man.toUpperCase()
// export {}

//Bad Practise...
let userId:number
userId=990.0
//
let isLoggedIn:boolean = false;
let rus= 10;
//hero
let hero:string;
// function getHero(){
//     return "true"
// }
// hero = getHero();

function getUpper(val:string){
    return val.toUpperCase();
}

getUpper("shivam")

function signUpUser(name:string,email:string,isPaid:boolean){

}

signUpUser("shivam","shi.dev",true);


var _loginUser = (name:string,email:string,isPaid:boolean=false):number=>{
    return 90
}

_loginUser("shivam","shivam.dev");

function addTwo(num:number){
    return num;
}
addTwo(10);


function getValue(myVal:number){
    if(myVal>5){
        return true;
    }
    return "200 OK"
}

const getHello=(s:string):string=>{
    return "";
}

const heros = ["thor","spider","ironman"]
const heros1 = ["thor",2,"ironman"]

heros.map(hero=>{
    return `hero is ${hero}`
})
heros1.map(hero=>{
    return `hero is ${hero}`
})

function consoleError(errmsg:string){
    console.log(errmsg);
    return 1;
}

function handleError(errmsg:string):never{
    throw new Error
}

