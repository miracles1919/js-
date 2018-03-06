/**
 * 用代理实现单例模式
 */

var CreateDiv = function (html) {
  this.html = html
}

CreateDiv.prototype.init = function () {
  var div = document.createElement('div')
  div.innerHTML = this.html
  document.body.appendChild(div)
}

// 代理类

var ProxySingletonCreateDiv = (function () {

  var instance

  return function (html) {
    if (!instance) {
      instance = new CreateDiv(html)
    }

    return instance
  }

})()

var a = new ProxySingletonCreateDiv('s1')
var b = new ProxySingletonCreateDiv('s2')

console.log(a === b)