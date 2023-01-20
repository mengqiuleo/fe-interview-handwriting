/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-15 20:01:37
 * @LastEditTime: 2023-01-19 21:33:06
 */
var a = [11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90]

function  oneToThreeArr(arr){
  let res = [{sum: 0, arr: []}, {sum: 0, arr: []}, {sum: 0, arr: []}]
  //从大到小排序,每次把最大的值给到和最小的数组中
  arr = arr.slice().sort((a,b) => b - a);//拷贝一份再排序
  arr.map(item => {
    let min = res.sort((a,b) => a.sum - b.sum)[0];//拿到当前和最小的那个数组
    min.sum += item;
    min.arr.push(item);
  })
  return res;
}
console.log(oneToThreeArr(a));
/*
[
  { sum: 136, arr: [ 56, 42, 23, 6, 5, 4 ] },
  { sum: 135, arr: [ 78, 42, 11, 4 ] },
  { sum: 135, arr: [ 90, 23, 11, 6, 5 ] }
]
*/