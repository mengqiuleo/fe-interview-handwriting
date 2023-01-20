const arr = [
  {
      name: "可乐",
      categories: ["热门", "饮料"],
  },
  {
      name: "苹果",
      categories: ["热门", "食物"],
  },
  {
      name: "洗衣液",
      categories: ["生活用品"],
  },
];

/*
[
    { name: "热门", categories: ["可乐", "苹果"] },
    { name: "饮料", categories: ["可乐"] },
    { name: "食物", categories: ["苹果"] },
    { name: "生活用品", categories: ["洗衣液"] },
]
*/

function changeFormat(arr){
  let res = [];
  let map = new Map();
  arr.forEach(item => {
    let categories = item.categories;
    categories.map(keyWord => {
      if(!map.has(keyWord)){
        map.set(keyWord, [item.name]);
      }else{
        map.get(keyWord).push(item.name);
      }
    })
  })
  map.forEach((val, key) => {
    res.push({ name: key, categories: val})
  })
  return res;
}
console.log(changeFormat(arr))


