function outer()
{
    var x=10;
    function inner()
    {
        console.log(x);
    }

    return inner;
}

outer()() 
//Or

let call = outer();
call();

//-------------------------------------------------------------

function outer()
{
    function inner()
    {
        console.log(x);
    }
    var x=10;
    return inner;
}

// then also it a known to innner function


//If we change the keyword type then var to let (but still it behave like same way becoz at block scop
// it is again known to inner one)

function outer()
{
    let x=10;

    //becoz inner have the referece to x
    function inner()
    {
        console.log(x);
    }

    return inner;
}

//----------------------------------------------------------------------
//lets take the perimerter by the outer function
// it behave same way (nothing change)

function outer(name)
{
    var x=10;
    function inner()
    {
        console.log(x,name);
    }

    return inner;
}

// here name is also treated as same way as clouser becoz it is the parameter for the outer function
// and we have the refrence from inner to outer so it have same meaning
//-------------------------------------------------------------------------

// With nesting with other function
function outest()
{
    var z=100;
function outer(name)
{
    var x=10;
    function inner()
    {
        console.log(x,name,z);
    }

    return inner;
}
 return outer;
}

// let bahar = outest()("Shashwat");
// bahar()

/// conficting name as global variable

function outest()
{
    var z=100;
function outer(name)
{
    let x=10;
    function inner()
    {
        console.log(x,name,z);
    }

    return inner;
}
 return outer;
}

let x=100; //Now the inside it will be 10 // but outside it will be 100
let bahar = outest()("Shashwat");
bahar()
console.log(x);

//------------------------------------------------------

// Data hiding and Encapsulation Example (So, that other functions don't have access to that
// particular data)

var count =0;
function inCounter()
{
    count++;
    return count;
} 

// so here is the problem is that any one in program can able to change this value of counter variable

/// So we can encapsulate it so that noone can able to diratecly access the counter variable


function counter()
{
    var count=0;

    function inCounter()
    {
        count++;
        return count;
    }

    return inCounter;
}

var count1=counter();
 console.log(count1())
 console.log(count1())
 console.log(count1())

 // Now our count variable is hided and that data only can be incremented.

 var count2=counter(); // this will crete the new env now we are intilaizion again
 count2();  // 1
 count2();  // 2


 // that last code is not scalable in the sense lets we told us that you need to use the same
 // function as decrement also then ? (so here the role of constructor function then we can have seprate function for incc and decrement
 // roles comes into the picture)

 function Counter(startingPointing) //Constructor should be capital letter
 {
     let count=startingPointing; // Intialization
 
     this.inCounter = ()=>{
         count++; return count;
     }
     
     this.decCounter =()=>
     {
         count--; return count;
     }
 }
 
 let count1=new Counter(0);
 
 console.log(count1.inCounter());
 //console.log(count1.decCounter());
 console.log(count1.inCounter());
 console.log(count1.inCounter());
 
 console.log(count1.decCounter());