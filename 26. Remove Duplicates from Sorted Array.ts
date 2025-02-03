function removeDuplicates(nums: number[]): number {
  let a = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[a] !== nums[i]) {
      a++;
      nums[a] = nums[i];
    }
  }

  return a + 1;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
