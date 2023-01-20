/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-19 21:28:46
 * @LastEditTime: 2023-01-19 21:28:52
 */
let arr= [1,2,3,4]
let proxy = new Proxy(arr,{
  get(target,key){
    if(key<0){
      return target[target.length+parseInt(key)]
    }
    return target[key] 
  }
})
console.log(proxy[-2]);
console.log(proxy[2]);