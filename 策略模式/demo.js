/*
    策略模式至少两个部分
    1、策略类
    2、环境类Context,Context接受客户的请求，随后委托给某一个策略类
 */

// 例: 计算奖金
// 策略类 绩效 S、A、B
var performanceS = function () {}

performanceS.prototype.calculate = function (salary) {
  return salary * 4
}

var performanceA = function () {}

performanceA.prototype.calculate = function (salary) {
  return salary * 3
}

var performanceB = function () {}

performanceB.prototype.calculate = function (salary) {
  return salary * 2
}

// 奖金类
var Bonus = function () {
  this.salary = null
  this.strategy = null
}

Bonus.prototype.setSalary = function (salary) {
  this.salary = salary
}
Bonus.prototype.setStrategy = function (strategy) {
  this.strategy = strategy
}
Bonus.prototype.getBonus = function () {
  console.log(this.strategy.calculate(this.salary))
}

// 计算
var bonus = new Bonus()
bonus.setSalary(10000)
bonus.setStrategy(new performanceS())
bonus.getBonus()

bonus.setStrategy(new performanceB())
bonus.getBonus()

