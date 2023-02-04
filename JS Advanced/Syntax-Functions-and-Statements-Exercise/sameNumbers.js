function sameNumbers(number) {
    let toArr = number.toString().split('').map(Number);
  
    const isEqual = toArr.filter(a => a !== toArr[0]).length ? false : true;
    const result = toArr.reduce((a, b) => a + b)
  
    console.log(isEqual);
    console.log(result);
  }

  sameNumbers(2222222);
  sameNumbers(1234)