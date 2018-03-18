/*
    虚拟代理实现图片预加载
 */

// 加载图片
var myImage = (function () {
  var imgNode = document.createElement('img')
  document.body.appendChild(imgNode)

  return function (src) {
    imgNode.src = src
  }
})()

// 代理函数
var proxyImage = (function () {
  var img = new Image

  img.onload = function () {
    myImage(this.src)
  }

  return function (src) {
    myImage('...')  //loading
    img.src = src
  }

})()

proxyImage('url')