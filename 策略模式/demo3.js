/*
    编写一个简单的动画类和一些缓动算法
    需要知道的信息：
    1、原始位置
    2、目标位置
    3、运动的时间点
    4、持续运动的时间
 */

// 常见的缓动算法
var tween = {
  // 参数定义：动画已消耗时间，原始位置，目标位置，动画持续时间
  linear: function (t, b, c, d) {
    return c * t / d + b
  },
  easeIn: function (t, b, c, d) {
    return c * ( t /= d ) * t + b
  },
  strongEaseIn: function (t, b, c, d) {
    return c * ( t /= d ) * t * t * t * t + b
  },
  strongEaseOut: function (t, b, c, d) {
    return c * ( (t = t / d -1) * t * t * t * t + 1 ) + b
  },
  sineaseIn: function (t, b, c, d) {
    return c * ( t /= d ) * t * t + b
  },
  sineaseOut: function (t, b, c, d) {
    return c * ( ( t = t / d - 1 ) * t * t + 1 ) + b
  }
}

// 动画类
var Animate = function (dom) {
  this.dom = dom              // 运动的dom节点
  this.startTime = 0          // 动画开始时间
  this.startPos = 0           // 初始位置
  this.endPos = 0             // 目标位置
  this.propertyName = null    // dom节点需要被改变的css属性名
  this.easing = null          // 缓动算法
  this.duration = null        // 持续时间
}

Animate.prototype.start = function (propertyName, endPos, duration, easing) {
  this.startTime = +new Date
  this.startPos = this.dom.getBoundingClientRect()[propertyName]
  this.propertyName = propertyName
  this.endPos = endPos
  this.duration = duration
  this.easing = tween[easing]

  var self = this
  var timer = setInterval(function () {
    if (self.step() === false) {
      clearInterval(timer)
    }
  }, 19)
}

Animate.prototype.step = function () {
  var t = +new Date
  if (t > this.startTime + this.duration) {
    this.update(this.endPos)
    return false
  }
  var pos = this.easing( t - this.startTime, this.startPos,
    this.endPos - this.startPos, this.duration )
  this.update(pos)
}

Animate.prototype.update = function (pos) {
  this.dom.style[this.propertyName] = pos + 'px'
}

// 测试
// var ball = document.getElementById('ball')
// var animate = new Animate(ball)
// animate.start('top', 500, 1500, 'sineaseIn')
