/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-15 20:22:27
 * @LastEditTime: 2023-01-15 23:14:02
 */
function data1() {
  return new Promise((res) => {
    setTimeout(() => {
      res("获取到第一条数据");
    }, 3000);
  });
}

function data2(data = "") {
  return new Promise((res) => {
    console.log(data);
    setTimeout(() => {
      res("获取到第二条数据");
    }, 5000);
  });
}

function data3(data = "") {
  return new Promise((res) => {
    console.log(data);
    setTimeout(() => {
      res("获取到第三条数据");
    }, 1000);
  });
}

function data4(data = "") {
  return new Promise((res, rej) => {
    console.log(data);
    rej(new Error("第四条数据获取失败"));
  });
}
//   下一个接口需要上一个接口的数据 依次执行
data1()
  .then((res) => {
    return data2(res);
  })
  .then((res) => {
    return data3(res);
  })
  .then((res) => {
    return data4(res);
  })
  .catch((err) => {
    console.log(err);
  });

