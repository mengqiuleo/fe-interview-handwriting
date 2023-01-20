/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-18 05:28:00
 * @LastEditTime: 2023-01-18 05:30:24
 */
// 参数 数组长度、最小范围、最大范围
function randomUniqueArr(len = 100, min = 0, max = 200) {
  if (max - min < len) {
    // 可生成数的范围小于数组长度
    return null;
  }
  const hash = [];
  while (hash.length < len) {
    let choice = max - min + 1;

    let num = Math.floor(Math.random() * choice + min);
    if (hash.indexOf(num) === -1) {
      hash.push(num);
    }
  }
  return hash;
}

console.log(randomUniqueArr());
console.log(randomUniqueArr(20, 10, 31));