Promise.resolve().then(()=>{
  // pending
  console.log(1)
  return new Promise(()=>{})
  // 后面的then 将不会调用
}).then(()=>{
  console.log(2)
})