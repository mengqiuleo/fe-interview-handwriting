/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-26 19:36:42
 * @LastEditTime: 2023-01-26 20:09:55
 */
<div>
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>

//把上诉dom结构转成下面的JSON格式
/*
{
  tag: 'DIV',
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
*/

function DOM2JSON(domTree) {
  let obj = {}
  obj.tag = domTree.tagName
  obj.children = []
  domTree.childNodes.forEach(child => {
    obj.children.push(DOM2JSON(child))
  })
  return obj
}

console.log(DOM2JSON())