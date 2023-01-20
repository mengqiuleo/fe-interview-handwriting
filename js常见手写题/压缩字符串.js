/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-20 02:08:46
 * @LastEditTime: 2023-01-20 02:11:01
 */
//abbccccaaa->a1b2c4a3

function yasuoString(str) {
  if (str.length === 0 || str.length === 1) return str;
  let cur = str[0];
  let count = 1;
  let res = "";
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== cur) {
      res += `${cur}${count}`;
      cur = str[i];
      count = 1;
    } else {
      count++;
    }
  }
  res += `${cur}${count}`;
  return res;
}

console.log(yasuoString('abbccccaaa'))