// 深度优先的方式遍历 打印 name
// ['root', 'c1','c11', 'c12', 'c2', 'c21', 'c22']

const tree = {
  name: 'root',
  children: [
      {
          name: 'c1',
          children: [
              {
                  name: 'c11',
                  children: []
              },
              {
                  name: 'c12',
                  children: []
              }
          ]
      },
      {
          name: 'c2',
          children: [
              {
                  name: 'c21',
                  children: []
              },
              {
                  name: 'c22',
                  children: []
              }
          ]
      }
  ]
}

function getTree(tree){
  const res = []
  const dfs = (root) => {
    for(let key in root){
      if(key == 'name'){
        res.push(root[key])
      } else if(key == 'children'){
        root[key].forEach(child => {
          dfs(child)
        });
      }
    }
  }
  dfs(tree)
  return res
}

console.log(getTree(tree))