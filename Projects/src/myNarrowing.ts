interface User{

    name:string,
    email:string
}

interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}
//in operator in narrowing...
function isAdminAccount(account:User|Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}



type Fish={swim:()=>void};
type Bird={fly:()=>void};


function isFish(pet:Fish|Bird):pet is Fish{
    return (pet as Fish).swim !== undefined
}


function getFood(pet:Fish|Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }else{
        pet
        return "bird food"
    }
}


//Descriminated Unions

