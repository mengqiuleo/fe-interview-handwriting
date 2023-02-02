let url = "http://www.domain.com/?user=jack&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";


// 实现一个函数： parseParam
// 输入解析后的结果为:

// {
//   user: 'jack',
//   id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
//   city: '北京', // 中文需解码
//   enabled: true, // 未指定值的 key 约定为 false
// }

function getValue(value){
  if(value === undefined) return false
  let temp = parseInt(value)
  if(temp === value){
    return temp
  } else {
    return value
  }
}

function parseParam(url){
  let urlArr = url.slice((url.indexOf('?')+1)).split('&')
  let res = {}
  urlArr.forEach(item => {
    const [key,value] = item.split('=')
    if(res[key] !== undefined){
      let val = res[key]
      res[key] = [val, getValue(value)]
    } else {
      res[key] = getValue(value)
    }
  })
  return res
}
console.log(parseParam(url))