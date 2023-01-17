/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-18 03:15:31
 * @LastEditTime: 2023-01-18 03:28:16
 */
const timeout = i => new Promise(resolve => {
  console.log(i);
  setTimeout(() => resolve(i), i)
});

function asyncPools(poolLimit,array,fnInter) {
  let doing = [];//记录正在执行的promise
  let i =0;//记录初始化到array的第几个了
  let ret = [];// 用来存储所有的Promise任务
  function pp(){
      if(i>=array.length) {
          return Promise.resolve(); //最后一个resolve状态，会进入外层返回Promise.then
      }
      let e = fnInter(array[i++]); //初始化promise
      e.then(()=>doing.splice(doing.indexOf(e),1)) //完成之后从doing删除 
      doing.push(e);
      ret.push(e);
      if(doing.length>=poolLimit) { //超出限制的话
        return Promise.race(doing).then(pp); //监听每完成一个就再放一个
      }
      else {//否则直接放进去
        return Promise.resolve().then(pp); //改写一下保证then链式调用
      }
  }
  return pp().then(()=>Promise.all(ret)); // 最后呢，用Promise.all 等待全部任务完成，返回Promise的结果输出
}

asyncPools(2, [1000, 5000, 3000, 2000], timeout) //补全代码