let t = setTimeout(() => {
  console.log(111);
  let t1 = setTimeout(() => {
      console.log(222);
      let t2 = setTimeout(() => {
          console.log(333);
      }, 3000);
  }, 2000);
}, 1000);