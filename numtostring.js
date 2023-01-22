function numtostring(arry) {
    for (let x = 0; x < arry.length; x++) 
    {
      if (arry[x] < 0) 
      {
        arry[x] = 'Turing';
      }
    }
    return arry;
  }
  
  let y = [1, -5, 0, -8];
  console.log(numtostring(y));
  