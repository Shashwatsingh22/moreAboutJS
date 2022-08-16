let a=0;

function x()
{
  console.log(a);
     if(a) return;
     
     console.log("This Function Can Only Run Once");
     
     return function y()
     {
          a=1;
          return a;
     }
}

z=x();
z()
x();