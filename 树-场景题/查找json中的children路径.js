const json = {
  id: 1,
  children: [
      { id: 2, children: [{ id: 3, children: [] }] },
      {
          id: 4,
          children: [
              { id: 5, children: [] },
              { id: 6, children: [] },
          ],
      },
      { id: 7, children: [] },
  ],
};


const dfs = (obj, curPath, target) => {
  if(!obj) return;
  if(obj.id == target){
    console.log(curPath.slice())
    return
  }
  for(let child of obj.children){
    if(child !== []){
      curPath.push(child.id)
      dfs(child,curPath,target)
      curPath.pop()
    }
  }
}

dfs(json,[json.id],5)

