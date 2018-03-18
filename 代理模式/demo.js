/*
    一个送花的例子
    小明通过B送花给A，A只在心情好的时候收到花
 */

var Flower = function () {}

var xiaoming = {
  sendFlower: function (target) {
    var flower = new Flower()
    target.receiveFlower(flower)
  }
}

var B = {
  receiveFlower: function (flower) {
    A.listenGoodMood(function () {
      A.receiveFlower(flower)
    })
  }
}

var A = {
  receiveFlower: function (flower) {
    console.log('receive' + flower)
  },
  // 监听好心情
  listenGoodMood: function (fn) {
    // 假设3秒后心情好
    setTimeout(function () {
      fn()
    }, 3000)
  }
}

xiaoming.sendFlower(B)

/*
    改进一下，使用虚拟代理，只有需要的时候采取创建
 */

var C = {
  receiveFlower: function (flower) {
    A.listenGoodMood(function () {
      var flower = new Flower()
      A.receiveFlower(flower)
    })
  }
}