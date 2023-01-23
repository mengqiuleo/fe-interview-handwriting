/**
 * 题目：给定一个整型数组，数组元素随机无序的，
 * 要求打印出所有元素右边第一个大于该元素的值。如果不存在，对应值设为-1即可。
 * 数组A=[1,5,3,6,4,8,9,10] 输出[5, 6, 6, 8, 8, 9, 10, -1]
 * 数组A=[8, 2, 5, 4, 3, 9, 7, 2, 5] 输出[9, 5, 9, 9, 9, -1, -1, 5, -1]
 */


function getMin(arr){
  let stack = [], ans = new Array(arr.length).fill(-1);
  for(let i=0; i<arr.length; i++){
    while(stack.length && arr[i]>arr[stack[stack.length-1]]){
      let t = stack[stack.length-1];
      stack.pop();
      // ans[t] = arr[i];
      ans[t] = i;
    }
    stack.push(i);
  }
  return ans;
}
console.log(getMin([1,5,3,6,4,8,9,10]))
