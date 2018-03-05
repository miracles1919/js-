/**
 * 单例模式：保证一个类仅有一个实例，并提供一个访问它的全局访问点
 * 例如线程池，全局缓存，window对象
 */

var Singleton = function (name) {
  this.name = name
}