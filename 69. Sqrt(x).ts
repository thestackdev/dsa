function mySqrt(x: number): number {
  if (x === 0 || x === 1) return x;

  let left = 1;
  let right = x;
  let answer = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sqrt = mid * mid;

    console.log(sqrt, mid);

    if (sqrt === x) return mid;

    if (sqrt < x) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}
// console.log("1", mySqrt(1));
// console.log("2", mySqrt(2));
// console.log("3", mySqrt(3));
// console.log("4", mySqrt(4));
// console.log("5", mySqrt(5));
// console.log("6", mySqrt(6));
// console.log("7", mySqrt(7));
// console.log("8", mySqrt(8));
// console.log("9", mySqrt(9));
// console.log("10", mySqrt(10));
console.log("36", mySqrt(36));
