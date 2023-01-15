function red(){
  console.log('red')
}
function yellow(){
  console.log('yellow')
}
function green(){
  console.log('green')
}

const task = (timer, light, callback) => {
  setTimeout(() => {
    if(light == 'red'){
      red();
    } else if(light == 'green'){
      green()
    } else if(light == 'yellow'){
      yellow()
    }
    callback()
  }, timer);
}

const step = () => {
  task(3000, 'red', () => {
    task(1000, 'green', () => {
      task(2000, 'yellow', step)
    })
  })
}
step()