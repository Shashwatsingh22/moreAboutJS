// sum(1)sum(2) -> 3

let summation = (data)=>{
    function sum(data){
       if(!data) return 0;
       return sum(data-1)+data;      
    }
    return sum(data);
}
console.log(summation(5))

// 2

let summation = (data)=>{
    if(!data) return 0;
    
    return summation(data-1)+data;
}
console.log(summation(5))

// But the question is different 

let sum = function(a){
    return function(b)
    {
        if(b) return sum(a+b)
        
        return a;
    }
}

console.log(sum(1)(2)(3)())

//More Sort

let sum = (a)=>{
    return (b)=>{
        return b?sum(a+b):a;
    }
}

console.log(sum(1)(2)());

// Single Line (more Sort)

let sum= a => b => b? sum(a+b):a;

console.log(sum(1)(5)());

