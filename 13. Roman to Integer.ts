function romanToInt(s: string): number {
  let tmp = s;
  const hashMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const cases = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let i = 0,
    j = 1,
    sum = 0;

  while (j <= tmp.length) {
    let toReplace = tmp[i] + tmp[j];
    // @ts-ignore
    if (cases[toReplace]) {
      tmp = tmp.replace(toReplace, "");
      // @ts-ignore
      sum = sum + parseInt(cases[toReplace]);
    } else {
      // @ts-ignore
      if (hashMap[tmp[i]]) sum = sum + hashMap[tmp[i]];
      i++;
      j++;
    }
  }

  return sum;
}

console.log(romanToInt("MCMXCIV"));
