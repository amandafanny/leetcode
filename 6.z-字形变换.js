/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows===0)return ''
  if(numRows===1)return s
  const data = [...s];
  const map = new Map();
  const re = new Array(numRows);
  for (let i = 0; i < numRows; i ++) {
    re[i] = []
  }
  data.forEach((val, i) => {
    const key = 2 * numRows -2
    const rowKey = i % key;
    const notspaceLine = key - rowKey;
    if (notspaceLine < (numRows - 1) && notspaceLine !== 0) {
      re[notspaceLine].push(val);
    } else {
      re[rowKey].push(val)
    }
  });
  const r = re.map(val => val.join(''))
  console.log(r)
  return r.join('')
};
// @lc code=end

convert('LEETCODEISHIRING', 4)