function strStr(haystack: string, needle: string): number {
  let index = -1;
  let found = -1;
  if (needle.length > haystack.length) return index;

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      found = 1;
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          found = 0;
          break;
        }
      }
      if (found === 1) {
        index = i;
        break;
      }
    }
    if (index > -1) break;
  }
  return index;
}

console.log(strStr("sadbutsad", "sad"));
