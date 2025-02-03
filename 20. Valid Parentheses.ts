function isValid(s: string): boolean {
  const stack = [];

  if (s.length === 1) return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      const top = stack[stack.length - 1];

      if (top === "(" && s[i] === ")") {
        stack.pop();
      } else if (top === "{" && s[i] === "}") {
        stack.pop();
      } else if (top === "[" && s[i] === "]") {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("(){}"));
