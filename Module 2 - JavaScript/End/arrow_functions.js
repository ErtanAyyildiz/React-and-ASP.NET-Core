let duplicate = function(value){
    return value * 2;
}

let duplicate_arrow=(value)=> value * 2;

let duplicate_arrow2=value=>{
    return value*2;
}

let printSomething=()=>console.log('somethink')

let addition=(value1,value2)=>value1+value2;

let complexFunction=()=>{
    // line 1
    // line 2
    // ...
}

//console.log(duplicate_arrow(3));

const obj={
    traditionalFunction: function(){
        console.log('traditional function',this);
    },
    arrowFunction:()=>{
        console.log('arrow function',this);
    },
    lastName:'Ertan'
};

const obj2={
    traditionalFunction: function(){
        console.log('traditional function2',this);
    },
    arrowFunction:()=>{
        console.log('arrow function2',this);
    },
    lastName:'Ertan2'
};

console.log('this environment',this);
obj.traditionalFunction();
obj.arrowFunction();
obj2.traditionalFunction();