function x()
{
  let a=0;
  return function check()
  {
    if(!a++) 
    {
      console.log("This Function will execute Once.")
      return;
    }
    console.log("You Can't Execute it For the Second Time.")
    return;
  }
}

z=x()
z() //Op - This Function will exute once
z() //OP - You can't Execute it for the second time.
