/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var k = nums[0];
  var l = 1;
  for (var i = 1; i < nums.length; i ++) {
    if (nums[i] > k && i >= l) {
      k = nums[i];
      nums[i] = nums[l]
      nums[l] = k;
      l += 1;
    }
  }
  return l;
};
