/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-23 23:36:48
 * @LastEditTime: 2023-01-23 23:36:55
 */
  
let obj={a:null,b:'哈哈哈'}
   
//对象移除为空的属性
for (const [key, value] of Object.entries(obj)) {
 if (value === null || value === "" || value === undefined) { //筛选条件可根据实际情况自行调整
   Reflect.deleteProperty(obj, key);
  }
}
console.log(obj) //{b:'哈哈哈'}