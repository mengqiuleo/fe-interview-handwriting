/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-20 03:57:13
 * @LastEditTime: 2023-01-20 03:57:24
 */
const arr = [3, 56, 56, 23, 7, 76, -2, 345, 45, 76, 3];
const num = 37
const findClosest = (arr, num) => {
   const creds = arr.reduce((acc, val, ind) => {
      let { diff, index } = acc;
      const difference = Math.abs(val - num);
      if(difference < diff){
         diff = difference;
         index = ind;
      };
      return { diff, index };
   }, {
      diff: Infinity,
      index: -1
   });
   return arr[creds.index];
};
console.log(findClosest(arr, num));