/*
    模版方法函数由两部分结构组成：抽象父类、实现子类
*/

var Beverage = function (){}

Beverage.prototype.boilWater = function () {
    console.log('把水煮沸')
}

Beverage.prototype.brew = function () {
    throw new Error('子类必须重写brew方法')
}

Beverage.prototype.pourInCup = function () {}

Beverage.prototype.addCondiments = function () {}

Beverage.prototype.init = function () {
    this.boilWater()
    this.brew()
    this.pourInCup()
    this.addCondiments()
}

var Coffee = function () {}
Coffee.prototype = new Beverage()

Coffee.prototype.blew = function () {
    console.log('用沸水冲泡咖啡')
}

Coffee.prototype.pourInCup = function () {
    console.log('把咖啡倒进杯子')
}

Coffee.prototype.addCondiments = function () {
    console.log('加糖和牛奶')
}

var coffee = new Coffee()
coffee.init()

// Tea 类似...