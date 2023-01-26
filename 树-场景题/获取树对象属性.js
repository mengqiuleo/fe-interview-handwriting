const tree = {
  name: '中国',
  children: [{
      name: '北京',
      children: [{
          name: '朝阳区',
          code: '0312'
        },
        {
          name: '海淀区',
          code: '0313'
        },
        {
          name: '昌平区',
          code: '0314'
        }
      ]
    },
    {
      name: '浙江省',
      children: [{
          name: '杭州市',
          code: '0571',
        },
        {
          name: '嘉兴市',
          code: '0572'
        },
        {
          name: '绍兴市',
          code: '0573'
        },
        {
          name: '宁波市',
          code: '0574'
        }
      ]
    }
  ]
};


function getTreeNode(tree, name) {
  const res = {}
  const dfs = (tree, name) => {
    if (!tree) {
      return
    }
    if (tree.name === name) {
      res.name = tree.name
      res.code = tree.code
      return
    }
    if (tree.children) {
      for (let item of tree.children) {
        dfs(item, name)
      }
    }
  }
  dfs(tree, name)
  return res
}
let node = getTreeNode(tree, '嘉兴市');
console.log(node); // { name: '嘉兴市', code: 0572 }