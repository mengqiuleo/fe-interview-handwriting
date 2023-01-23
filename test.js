function treeToObj(obj){
  const res = {}
  function getObj(obj, str = null){
    for(let key in obj){
      //是基本数据类型，直接赋值   是null,undefined就直接舍弃
      if(typeof obj[key] === 'number' || typeof obj[key] === 'string' || typeof obj[key] === 'boolean'){
        //判断有没有前缀
        if(str === null){
          res[key] = obj[key]
        } else if(Array.isArray(obj)){
          res[str+'['+key+']'] = obj[key]
        } else {
          res[str+'.'+key] = obj[key]
        }
      } else if(Array.isArray(obj[key])){
        //先对数组
        if(str == null){
          getObj(obj[key], key)
        } else if(Array.isArray(obj)){
          getObj(obj[key], str+'['+key+']')
        } else {
          getObj(obj[key], str+'.'+key)
        }
      } else if(typeof obj[key] === 'object'){
        //判断是对象类型的haul，递归对象
        //我们需要判断这个是不是第一次，是第一次，直接走，不是第一次，需要加上str
        if(str == null){
          getObj(obj[key], key);
        } else if(Array.isArray(obj)){
          getObj(obj[key], str+'['+key+']')
        } else {
          getObj(obj[key], str+'.'+key)
        }
      }
    }
  }
  getObj(obj)
  return res;
}

const obj = {
  a: 'a',
  b: [1, { c: true }, [3]],
  d: { e: undefined, f: 3 },
  g: null,
}

console.log(treeToObj(obj))
//{ a: 'a', 'b[0]': 1, 'b[1].c': true, 'b[2][0]': 3, 'd.f': 3 }