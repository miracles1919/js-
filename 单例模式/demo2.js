/**
 * 透明的单例模式
 */

var CreateDiv = (function () {

  var instance

  var CreateDiv = function (html) {
    if (instance) {
      return instance
    }
    this.html = html

    return instance = this
  }

  CreateDiv.prototype.init = function () {
    var div = document.createElement('div')
    div.innerHTML = this.html
    document.body.appendChild(div)
  }

  return CreateDiv

})()

var a = new CreateDiv('s1')
var b = new CreateDiv('s2')

console.log(a === b)