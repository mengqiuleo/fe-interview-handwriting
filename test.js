function Queue() {
  this.quene = [];
}


Queue.prototype.task = function (time, callback) {
  this.quene.push({ time, callback });
  return this;
};

Queue.prototype.start = function () {
  const quene = this.quene;
  let result = Promise.resolve();

  quene.forEach((item) => {
    result = result.then(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(item.callback());
        }, item.time);
      });
    });
  });

  return result;
};

//test
new Queue()
  .task(1000, () => {
    console.log(1)
  })
  .task(2000, () => {
    console.log(2)
  })
  .task(1000, () => {
    console.log(3)
  })
  .start()
