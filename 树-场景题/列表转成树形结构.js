let arr = [
  {
    id: 1,
    name: '部门1',
    pid: 0
  },
  {
    id: 2,
    name: '部门2',
    pid: 1
  },
  {
    id: 3,
    name: '部门3',
    pid: 1
  },
  {
    id: 4,
    name: '部门4',
    pid: 3
  },
  {
    id: 5,
    name: '部门5',
    pid: 4
  },
  {
    id: 6,
    name: '部门6',
    pid: 0
  },
]


function listToTree(arr) {
  let res = [],
    temp = []
  arr.forEach(item => {
    temp[item.id] = item
  })
  temp.forEach(item => {
    if (item.pid !== 0) {
      if (!temp[item.pid].children) {
        temp[item.pid].children = []
      }
      temp[item.pid].children.push(item)
    } else {
      res.push(item)
    }
  })
  return res
}

console.log(listToTree(arr))