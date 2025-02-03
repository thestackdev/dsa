function isPalindrome(x: number): boolean {
  const palindroneToCheck = x.toString();
  let front = 0,
    rear = palindroneToCheck.length - 1;

  while (front <= rear) {
    if (palindroneToCheck[front++] !== palindroneToCheck[rear--]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(121));
