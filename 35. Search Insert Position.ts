function searchInsert(nums: number[], target: number): number {
  if (nums[nums.length - 1] < target) return nums.length;
  let pos = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      pos = i;
      break;
    } else if (nums[i] > target) {
      pos = i;
      break;
    }

    if (pos > -1) break;
  }
  return pos;
}

console.log(searchInsert([1, 3, 5, 6], 7));
