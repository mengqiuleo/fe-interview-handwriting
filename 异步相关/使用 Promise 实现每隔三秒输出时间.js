/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-18 04:40:57
 * @LastEditTime: 2023-01-18 04:41:01
 */
const task = (timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(new Date())
      resolve()
    }, timer);
  })
}

const taskRunner = async () => {
  await task(3000);
  taskRunner();
}
taskRunner()