const treeNode = [
  {
    id: '1',
    name: '湖北省',
    children: [{
      id: '1-1',
      name: '武汉市',
      children: [{
          id: '1-1-1',
          name: '汉阳区',
        },
        {
          id: '1-1-2',
          name: '汉口区',
        }
      ]
    }]
  },
  {
    id: '2',
    name: '湖南省',
    children: [{
      id: '2-1',
      name: '长沙市',
      children: [{
          id: '2-1-1',
          name: '汉长区',
        },
        {
          id: '2-1-2',
          name: '白白区',
        }
      ]
    }]
  },
]
//递归 设置可选项
function getTreeData(treeNode, parentName = '') {
  let res = [];
  treeNode.forEach(item => {
    let itemName = item.name
    if (parentName) {
      itemName = parentName + '/' + item.name
    }
    item.pathName = itemName
    if (item.children && item.children.length > 0) {
      getTreeData(item.children, itemName)
    } else { //这种方法不行，永远不会走这里
      res.push(itemName)
    }
  })
  return res;
}


console.log(getTreeData(treeNode))
