let strArr = {  
  'a-b-c-d':1,  
  'a-b-c-e':2,  
  'a-b-f':3,  
  'a-j':4  
}  
let obj = {  
  a:{  
    b:{  
      c:{  
        d:1,  
        e:2  
      },  
      f:3  
    },  
    j:4  
  }  
} 

function strToTree(strArr){
  let objTree = {}
  const dfs = (arr,obj,val) => {
    for(let i=0; i<arr.length-1; i++){
      if(!obj[arr[i]]) obj[arr[i]] = {}
      obj = obj[arr[i]]
    }
    obj[arr[arr.length-1]] = val
  }
  for(let str in strArr){
    dfs(str.split('-'),objTree,strArr[str])
  }
  return objTree
}

console.log(strToTree(strArr))