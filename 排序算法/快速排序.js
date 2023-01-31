/*
 * @Author: Pan Jingyi
 * @Date: 2023-02-01 02:09:03
 * @LastEditTime: 2023-02-01 02:12:03
 */
function quickSort(arr){
  if(arr.length < 2){
    return arr;
  }
  let left = [], right = [];
  let mid = arr[0];
  for(let i=1; i<arr.length; i++){
    if(arr[i] > mid){
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...quickSort(left), mid,  ...quickSort(right)]
}

//test
const arr = [5,4,3,2,1]
console.log(quickSort(arr))