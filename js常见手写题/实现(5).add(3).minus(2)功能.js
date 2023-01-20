/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-20 03:38:45
 * @LastEditTime: 2023-01-20 03:41:35
 */
(function() {
  function check(x) { //统一转成数字
     return x = isNaN(x) ? 0 : x - 0
  }

  function add (x) {
     x = check(x)
     return this + x
  }

  function minus (x) {
     x = check(x)
     return this - x
  }
  
  Number.prototype.add = add

  Number.prototype.minus = minus    
})();

console.log((5).add('12').minus('1')) // 16
console.log((5).add(2))  // 7
console.log((5).add('abc').minus('1')) // 4
