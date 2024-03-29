function merge(left, right){
  let res = [];
  let i=0, j=0;
  while(i<left.length && j<right.length){
    if(left[i] < right[j]){
      res.push(left[i++]);
    }else{
      res.push(right[j++]);
    }
  }
  if(i<left.length){
    res.push(...left.slice(i));
  } else {
    res.push(...right.slice(j));
  }
  return res;
}

function mergeSort(arr){
  if(arr.length < 2) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

//test
const arr = [5,4,3,2,1]
console.log(mergeSort(arr))