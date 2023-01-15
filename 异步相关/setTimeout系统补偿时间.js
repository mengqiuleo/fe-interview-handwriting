function _timerSetInterval(fn, delay, ...args) {
  let current = Date.now();
  let timer = null;

  const task = () => {
    current += delay;
    timer = setTimeout(() => {
      fn.apply(this, args);
      console.log('current: ', current, 'now: ', Date.now(), '差值: ', current - Date.now())
      task();
    }, current - Date.now());
  };

  task();
  return () => clearTimeout(timer);
}

let timer = _timerSetInterval(() => {
  console.log('123')
}, 1000)

setTimeout(() => {
  timer()
}, 8000);


