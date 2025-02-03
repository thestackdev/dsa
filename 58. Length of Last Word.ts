function lengthOfLastWord(s: string): number {
  let p = s.length - 1;
  let q = s.length - 1;

  s = s.trim();

  console.log(s);

  let answer = -1;

  while (p >= 0) {
    if (s[p] === " ") {
      answer = s.length - p - 1;
      break;
    } else if (p === 0) {
      answer = s.length - p;
      break;
    } else p--;
  }
  return answer;
}

console.log(lengthOfLastWord("hello world"));
