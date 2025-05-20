const score:Array<number> = []
const names:Array<string> = []


function identityOne(val:boolean|number):boolean|number{
    return val
}
function identityTwo(val:any):any
{
    return val;
}

function identityThree<Type>(val:Type):Type{
    return val;
}

function identityFour<T>(val:T):T{
    return val
}

interface Bottle{
    brand:string,
    type:number
}

identityFour<Bottle>({brand:"Ramd",type:12})


function getSearchProducts<T>(products:T[]):T{  //T should be one of the values from that array...
    //do some dB operation 
    const myIndex=3;
    return products[6]
}



const getMoreSearchProducts=<T,>(products: T[]): T=>{
    const myIndex =4;
    return products[myIndex]
}




interface Database{
    connection:string,
    username:string,
    password:string

}
function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}


anotherFunction(3,{connection:"russ",username:"dre",password:"lol"});


interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}


class sellable<T>{
    public cart:T[]=[]


    addToCart(products:T){
        this.cart.push(products)
    }
}

