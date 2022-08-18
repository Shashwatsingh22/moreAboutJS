//Print the 1,2,3... after every 1,2,3... sec

//First way by using new variable
let print = ()=>{
    
    for(var i=1;i<=5;i++)
    {
        var j=1;
    setTimeout(function (){ 
        console.log(j++);
    },i*1000)
    }
    console.log("Shashwat");
}

print();

//Second By creating the new env for i 

//Print the 1,2,3... after every 1,2,3... sec

// let print = ()=>{
    
//     for(var i=1;i<=5;i++)
//     {
//     function newEnv(count){
//     setTimeout(function (){ 
//         console.log(count);
//     },count*1000)
//     }
//     newEnv(i)
//     }
    
// }

// print();