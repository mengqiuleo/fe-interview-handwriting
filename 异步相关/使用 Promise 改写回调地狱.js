/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-18 04:58:53
 * @LastEditTime: 2023-01-18 04:58:57
 */
// 改写回调地域
let t = setTimeout(() => {
  console.log(111);
  let t1 = setTimeout(() => {
      console.log(222);
      let t2 = setTimeout(() => {
          console.log(333);
      }, 5000);
  }, 3000);
}, 1000);

// todo
function myPromise(time, context){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(context);
      resolve()
    }, time);
  })
}


// promise写法
myPromise(1000, 111)
  .then(() => {
    return myPromise(3000, 222);
  })
  .then(() => {
    return myPromise(5000, 333);
  })

// async await写法
async function fun(){
  await myPromise(1000,111);
  await myPromise(3000,222);
  await myPromise(5000,333);
}
fun();