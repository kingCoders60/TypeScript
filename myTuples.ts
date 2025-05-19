// const user:(string|number)[]=[1,"he"]
let tuser:[string,number,boolean]
tuser=["he",90,true]  //order of array matters the most in tuple.

let rgb:[number,number,number]=[255,23,32]

type User89 = [number,string]
const newUser:User89=[112,"example@google.com"]

newUser[1]="he.com";
newUser.push(true)  