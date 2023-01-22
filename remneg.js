function remneg(arry) {
    for (let x = 0; x < arry.length; x++) {
      if (arry[x] < 0) {
        arry[x] = 0;
      }
    }
    return arry;
  }
  console.log(remneg([-1, 6, -3, 7, -5])); 



