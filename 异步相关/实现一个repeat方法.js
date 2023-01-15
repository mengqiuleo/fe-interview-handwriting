function repeat(func, times, wait) {
  //todo
  //解析：调用方法时可传参，说明repeat返回的是一个function
  return function callback(...args){
    setTimeout(() => {
      func(...args)
      times--;
      if(times > 0) callback(...args)
    }, wait);
  }
}
const repeatFunc = repeat(console.log, 4, 1000);
repeatFunc('hello');
//调用repeatFunc方法， 每隔1秒打印一次， 一共打印4次