/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-18 03:34:33
 * @LastEditTime: 2023-01-18 03:38:57
 */
function singlePipe(promiseFn) {
  // TODO
  let flag = false;
  return async function (arg) {
    if (flag) return;
    flag = true;
    let res = await promiseFn(arg);
    flag = false;
    return res;
  }
}

// 模拟一次请求
function bar(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(data), 1000)
  })
}

const request = singlePipe(bar)

request(1).then((res) => console.log(res)) // 1
request(2).then((res) => console.log(res)) // 无响应
// setTimeout(() => {
//   request(3).then((res) => console.log(res)) // 3
// }, 1001)