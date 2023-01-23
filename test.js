/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-15 20:01:37
 * @LastEditTime: 2023-01-23 23:52:25
 */
const dailyTemperatures = function(temperatures) {
  let len = temperatures.length;
  let ans = new Array(len).fill(0);
  let stack = [];
  for(let i=0; i<len; i++){
    while(stack.length && temperatures[i]>temperatures[stack[stack.length-1]]){
      let t = stack[stack.length-1];
      stack.pop();
      ans[t] = i-t;
    }
    stack.push(i);
  }
  return ans;
};