
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