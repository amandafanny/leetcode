/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const data = [...x.toString().split('')]
  const number = Math.pow(2, 31)
  const [min, max] = [-number,  number -1]
  const flag = data[0] === '-'; 
  const reverseData = flag ? data.slice(1) : data;
  console.log(reverseData)
  const val = parseInt(`${flag ? '-': ''}${reverseData.reverse().join('')}`);
  if ( val < min || val > max) {
    return 0;
  }
  console.log(val)
  return val;
};
// @lc code=end
reverse (-123)
reverse (120)

