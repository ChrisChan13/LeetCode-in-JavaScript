/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var idx_o = null, idx_i = null;
  for (var i = 0; i < nums.length - 1; i ++) {
    var diff = target - nums[i];
    for (var j = i + 1; j < nums.length; j ++) {
      if (nums[j] === diff) {
        idx_o = i;
        idx_i = j;
        break;
      }
    }
    if (j < nums.length) break;
  }
  return [idx_o, idx_i];
};
