/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-31 22:50:56
 * @LastEditTime: 2023-01-31 23:03:38
 */
const data = [
  {
    key: 1,
    name: '###'
  },
  {
    key: 2,
    name: '#####****'
  },
  {
    key: 3,
    name: '12465*#'
  },
  {
    key: 4,
    name: '1545**'
  },
  {
    key: 5,
    name: 'ssssss'
  }
]


// indexof
function indexofQuery(data, keyword){
  const ans = [];
  for(let i=0; i<data.length; i++){
    if(data[i].name.indexOf(keyword) >= 0){
      ans.push(data[i]);
    }
  }
  return ans;
}


//不区分大小写
function indexofQuery2(data, keyword){
  const ans = [];
  for(let i=0; i<data.length; i++){
    if(data[i].name.toLowerCase().indexOf(keyword) >= 0){
      ans.push(data[i]);
    }
  }
  return ans;
}

//正则匹配
function testQuery(data, keyWord) {
  let reg =  new RegExp(keyWord);
  const ans = [];
  for (let i = 0; i < list.length; i++) {
    if (reg.test(data[i])) {
      ans.push(data[i]);
    }
  }
  return ans;
}


//* 测试
let ans = indexofQuery(data, '#')
console.log(ans)