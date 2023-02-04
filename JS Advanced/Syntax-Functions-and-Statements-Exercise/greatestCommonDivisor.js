function greatesCommonDivisor(a, b) {
	aArr = [];
  	bArr = [];
  
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
	aArr.unshift(i);
  }
  }

  for (let i = 1; i <= b; i++) {
    if (b % i === 0) {
	 bArr.unshift(i);
  }
  }

    for (num1 of aArr) {
      for (num2 of bArr) {
        if (num1 === num2) {
          return num1;
        }
      }
    }
}

greatesCommonDivisor(2154, 458)