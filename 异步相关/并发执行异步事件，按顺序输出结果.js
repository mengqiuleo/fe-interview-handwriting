/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-18 01:18:50
 * @LastEditTime: 2023-01-18 01:25:54
 */
const getData = async (num) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(num)
    }, num)
  })
}

//并发执行异步事件，按顺序输出结果,总耗时为数组中最大的数
const order = async (nums) => {
  const promises = nums.map(async num => {
    return await getData(num)
  })
  console.log(promises)
  for (const promise of promises) {
    console.log(await promise)
  }
  console.log(new Date())
}

const nums = [3000, 2000, 1000, 5000, 5000]
console.log(new Date())
order(nums)