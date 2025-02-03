function plusOne(digits: number[]): number[] {
  let currentIndex = digits.length - 1;

  while (digits[currentIndex] === 9 && currentIndex >= 0) {
    digits[currentIndex] = 0;
    currentIndex--;
  }

  if (currentIndex === -1) return [1, ...digits];
  else digits[currentIndex]++;

  return digits;
}

console.log(plusOne([9, 9, 9]));
