/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-20 02:23:53
 * @LastEditTime: 2023-01-20 02:37:55
 */

//输入10a6we8y10x 输出50个a，6个we，8个y，20个x
function extendsString(str) {
  let num = 0;//重复次数
  let cur = "";//每次的字符串
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i]>='0' && str[i]<='9') {
      // console.log('debugger：', str[i]);
      if (cur) { // 如果字符串存在，那就重复字符串，当前的str[i]是下一次重复的次数
        res += cur.repeat(num); //当前字符串重复完毕后，清零
        cur = "";
        num = 0;
      }
      num = num * 10 + Number(str[i]); //如果不存在字符串那就说明这个数字应该是多位数，当前是前几位
    } else {
      cur += str[i];
    }
  }
  res += cur.repeat(num);
  return res;
}

console.log(extendsString('15a6we8y10x'))