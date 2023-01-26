/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-27 01:09:51
 * @LastEditTime: 2023-01-27 01:09:58
 */
let data = [
  {
      "name": "1-1",
      "kind": "oo",
      "children": [
          {
              "name": "2-2",
              "kind": "ii",

          },
          {
              "name": "3-3",
              "children": [
                  {
                      "name": "4-4",
                      "children": [
                          {
                              "name": '707'
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "name": "5-5",
  },
  {
      "name": "6-6"
  }
]
function getName(data, key = "name") {
  let result = [];
  if (Array.isArray(data)) {
      for (let item of data) {
          if (item[key]) {
              result.push(item[key]);
          }
          if (item.children) {
              result = result.concat(getName(item.children));
          }
      }
      return result;
  } else {
      return result;
  }
}

console.log(getName(data))