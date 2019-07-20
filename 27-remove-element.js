/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var q = 0;
  for (var i = 0; i < nums.length - q; i ++) {
    if (nums[i] === val) {
      var tp = nums[i];
      nums[i] = nums[nums.length - q - 1];
      nums[nums.length - q - 1] = tp;
      q ++;
      i -= 1;
      continue;
    }
  }
  return nums.length - q;
};
