/**
 * 算法题：字符串重命名。
 * 举例 ，输入["ab","c","ab","c","a","d"]，
 * 输出["ab1","c1","ab2","c2","a","d"]，
 * 输出不可以改变原有顺序，不重复的字符串不动。
 */
const arr = ['ab', 'c', 'ab', 'd', 'c']
function getArr(arr){
  for(let i=0; i<arr.length; i++){
    let index = 1;
    let str = arr[i];
    for(let j=i+1; j<arr.length; j++){
      if(arr[j] === str){
        if(index == 1){
          arr[i] = str+1;
        }
        index++;
        arr[j] = str+index; 
      }
    }
  }
  return arr;
}
console.log(getArr(arr))//[ 'ab1', 'c1', 'ab2', 'd', 'c2' ]