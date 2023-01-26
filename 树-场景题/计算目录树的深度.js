const tree = {
  name: 'root',
  children: [
    {
      name: '叶子1-1'
    },
    {
      name: '叶子1-2'
    },
    {
      name: '叶子2-1',
      children: [{
        name: '叶子3-1',
        children: [
          {
            name: '叶子4-1',
            children: [{}]
          }
        ]
      }]
    }
  ]
}

function getDepth(tree){
  if(tree == null) return 0;
  let height = 0;
  let queue = [];
  queue.push(tree);
  while(queue.length){
    height++;
    let len = queue.length;
    for(let i=0; i<len; i++){
      const node = queue.shift();
      if(node.children){
        for(let child of node.children){
          queue.push(child)
        }
      }
    }
  }
  return height
}
console.log(getDepth(tree)) //5