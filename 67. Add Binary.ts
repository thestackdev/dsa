function addBinary(a: string, b: string): string {
  let maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");

  let carry = 0;
  let result = [];

  for (let i = maxLength - 1; i >= 0; i--) {
    let sum = Number(a[i]) + Number(b[i]) + carry;
    result.unshift(sum % 2);
    carry = Math.floor(sum / 2);
  }

  if (carry) result.unshift(1);

  return result.join("");
}

console.log(addBinary("1", "111"));
