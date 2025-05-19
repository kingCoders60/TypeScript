const boys = ["Ramesh","Rajesh","Ram","Aditya"];
boys.forEach(function(s){
    console.log(s.toUpperCase());
});

type superboys={
    name:string
    isPaid?:boolean
}

const allboys:superboys[]=[]

allboys.push({name:"Russu",isPaid:true});
allboys.forEach(function(e){
    console.log(e);
})

export {}
