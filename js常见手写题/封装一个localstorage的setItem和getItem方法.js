/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-20 01:49:20
 * @LastEditTime: 2023-01-20 01:49:25
 */
//封装操作localStorage本地存储的方法

var storage = {
  //存储
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  //取出数据
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  // 删除数据
  remove(key) {
    localStorage.removeItem(key);
  }
}

// 暴露给外部访问
export default storage;