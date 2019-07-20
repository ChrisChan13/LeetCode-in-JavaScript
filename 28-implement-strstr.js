/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  if (needle.length > haystack.length) return -1;
  for (var i = 0; i < haystack.length; i ++) {
    if (haystack[i] === needle[0] && haystack.slice(i, i + needle.length) === needle) break;
  }
  return i < haystack.length ? i : -1;
};
