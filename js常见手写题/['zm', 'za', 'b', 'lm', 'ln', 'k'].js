/**
实现一个函数，
把一个字符串数组（[‘zm’, ‘za’, ‘b’, ‘lm’, ‘ln’, ‘k’]） 格式化成一个对象 
{ ‘b’: [‘b’], ‘k’: [‘k’], ‘l’: [‘lm’, ‘ln’], ‘z’: [‘za’, ‘zm’] }
 */

const arr = ['zm', 'za', 'b', 'lm', 'ln', 'k']

function parse(arr){
  let obj = {}
  arr.forEach(item => {
    let key = item.slice(0,1)
    obj[key] = [];
  });
  for(let str of arr){
    for(let index in obj){
      if(str.slice(0,1) == index){
        obj[index].push(str);
      }
    }
  }
  return obj;
}
console.log(parse(arr))