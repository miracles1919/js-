/**
 * 惰性单例，需要时才创建对象实例
 */

var getSingle = function (fn) {
  var result
  return function () {
    return result || (result = fn.apply(this, arguments))
  }
}

var createLoginLayer = function () {
  var div = document.createElement('div')
  div.innerHTML = 'login'
  document.body.appendChild(div)
  div.style.display = 'none'
  return div
}

var createSingleLoginLayer = getSingle(createLoginLayer)

document.getElementById('loginBtn').onclick = function () {
  var loginLayer = createLoginLayer()
  loginLayer.style.display = 'block'
}

// 创建唯一的 iframe

var createSingleIframe = getSingle(function () {
  // ...
})


// 实现jQuery中的one事件

var bindEvent = getSingle(function () {
  document.getElementById('div').onclick = function () {
    console.log('click')
  }
  return true
})


var render = function () {
  console.log('开始渲染')
  bindEvent()
}

// div 实际只绑定了一个事件
render()
render()
render()

