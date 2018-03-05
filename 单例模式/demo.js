/**
 * 单例模式：保证一个类仅有一个实例，并提供一个访问它的全局访问点
 * 例如线程池，全局缓存，window对象
 */

var Singleton = function (name) {
  this.name = name
  this.instance = null
}

Singleton.prototype.getName = function () {
  console.log(this.name)
}

Singleton.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Singleton(name)
  } 
  return this.instance
}

var a = Singleton.getInstance('s1')
var b = Singleton.getInstance('s2')

console.log(a === b)


var Singleton2 = function (name) {
  this.name = name
}

Singleton2.prototype.getName = function () {
  console.log(this.name)
}

Singleton2.getInstance = (function () {
  var instance = null
  return function (name) {
    if (!instance) {
      instance = new Singleton2(name)
    }
    return instance
  }
})()

var c = Singleton2.getInstance('s1')
var d = Singleton2.getInstance('s2')

console.log(c === d)