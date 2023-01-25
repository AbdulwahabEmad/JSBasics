function fizzBuzz() {
    let result = [];
    for (let i = 1; i <= 135; i++) {
      if (i % 15 === 0) {
        result.push("FizzBuzz");
      } else if (i % 3 === 0) {
        result.push("Fizz");
      } else if (i % 5 === 0) {
        result.push("Buzz");
      } else {
        result.push(i);
      }
    }
    for(let i=0;i<result.length;i++) {
      console.log(result[i])
    }
  }

  fizzBuzz();