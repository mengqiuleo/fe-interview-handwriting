/**
 * 给定一个升序整数数组[0,1,2,4,5,7,13,15,16]，找出其中连续出现的数字区间如下：
 * ["0->2","4->5","7","13","15->16"]
 */
const arr = [0, 1, 2, 4, 5, 7, 13, 15, 16]

function getArr(arr) {
  let j, ans = [], str = '';
  for (let i = 0; i < arr.length; i++) {
    j = i;
    if (arr[i] + 1 === arr[i + 1]) {
      while (arr[j] + 1 === arr[j + 1]) {
        str = '->' + arr[j + 1];
        j++;
      }
      str = arr[i] + str;
      ans.push(str)
      i = j
    } else {
      ans.push(arr[i].toString());
    }
  }
  return ans;
}


console.log(getArr(arr))