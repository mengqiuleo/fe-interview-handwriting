/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-20 02:05:10
 * @LastEditTime: 2023-01-20 02:07:52
 */
function isCapitalStr(word, str){
  let res = '';
  let len = word.length;
  for(let i=0; i<len; i++){
    if(word[i] >= 'A' && word[i] <= 'Z'){
      res += word[i];
    }
  }
  //console.log(res);
  if(res == str){
    return true;
  }
  return false;
}

console.log(isCapitalStr('Bytedance','BD'))