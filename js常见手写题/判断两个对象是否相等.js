/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-23 23:39:26
 * @LastEditTime: 2023-01-23 23:48:21
 */
function diff(obj1, obj2){
  let o1 = obj1 instanceof Object;
  let o2 = obj2 instanceof Object;
  //判断是否是对象
  if(!o1 || !o2){
    return obj1 === obj2;
  }

  //判断key值的长度
  if(Object.keys(obj1).length !== Object.keys(obj2).length){
    return false;
  }
  for(let o in obj1){
    let t1 = obj1[o] instanceof Object;
    let t2 = obj2[o] instanceof Object;
    if(t1 && t2){
      if(!diff(obj1[o], obj2[o])){
        return false;
      }
    } else if(obj1[o] !== obj2[o]){
      return false;
    }
  }
  return true;
}