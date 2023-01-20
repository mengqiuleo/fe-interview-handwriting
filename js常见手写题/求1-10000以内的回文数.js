/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-20 01:51:16
 * @LastEditTime: 2023-01-20 01:52:55
 */
function getReverseNumber(num){
  const res = [];
  for(let i=10; i<=num; i++){
    let a = i.toString();
    let b = a.split('').reverse().join('');
    if(a == b){
      res.push(b);
    }
  }
  return res;
}

console.log(getReverseNumber(1000))