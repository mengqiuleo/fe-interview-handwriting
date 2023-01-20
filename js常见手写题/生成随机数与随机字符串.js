/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-20 01:55:44
 * @LastEditTime: 2023-01-20 01:59:25
 */
function randomString(len){ //形参len, 需要生成的随机字符串的长度
  len = len || 32;
  const t = 'abcdefghigklmnopqrstuvwxyz123456798'; //模拟随机字符串库
  const tLen = t.length;
  let res = '';//存放最终生成的字符串
  for(let i=0; i<len; i++){
    res += t.charAt(Math.floor(Math.random()*tLen));
  }
  return res;
}
console.log(randomString(10));