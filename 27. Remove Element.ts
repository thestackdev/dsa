function removeElement(nums: number[], val: number): number {
  let p1 = 0;
  let p2 = nums.length - 1;

  while (p1 < p2) {
    if (nums[p2] === val) p2--;
    else if (nums[p1] === val) {
      nums[p1] = nums[p2];
      nums[p2] = val;
      p1++;
      p2--;
    } else {
      p1++;
    }
  }

  if (nums[p1] !== val) p1++;

  return p1;
}

console.log(removeElement([3, 2, 2, 3], 2));
