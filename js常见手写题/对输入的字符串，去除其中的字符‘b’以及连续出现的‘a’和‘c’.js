/**
样例：

‘aacbd’ -> 'ad'

'aabcd' -> 'ad'

'aaabbccc' -> ''

不允许使用类似string.replace函数
对输入的字符串：去除其中的字符'b'；去除相邻的'a'和'c'。
 */

function removeStr(str){
  let stack = [];
  for(let ch of str){
    if(ch=='b') continue;
    if(ch!=='c'){
      stack.push(ch);
    }
    if(stack.length && stack[stack.length-1]=='a' && ch=='c'){
      stack.pop();
    }
  }
  return stack.join('');
}
console.log(removeStr('aaabbccc'))

