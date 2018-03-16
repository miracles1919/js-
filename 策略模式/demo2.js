/*
    js版本的策略模式
 */

var strategies = {
  S: function (salary) {
    return salary * 4
  },
  A: function (salary) {
    return salary * 3
  },
  B: function (salary) {
    return salary * 2
  }
}

var calculateBonus = function (level, salary) {
  console.log(strategies[level][salary])
}

calculateBonus('S', 10000)
calculateBonus('B', 10000)