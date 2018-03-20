/*
    内部迭代器
 */

var each = function (ary, callback) {
  for (var i = 0, l = ary.length; i < l; i++) {
    if (callback.call(ary[i], i, ary[i]) === false) {
      break
    }
  }
}

var compare = function (ary1, ary2) {
  if (ary1.length !== ary2.length) {
    return false
  }

  each(ary1, function (i, n) {
    if (n !== ary2[i]) {
      return false
    }
  })
  return true
}

compare([1, 2, 4], [1, 2, 3])


/*
    外部迭代器
 */

var Iterator = function (obj) {
  var current = 0
  
  var next = function () {
    current += 1
  }
  
  var isDone = function () {
    return current >= obj.length
  }
  
  var getCurrItem = function () {
    return obj[current]
  }
  
  return {
    next: next,
    isDone: isDone,
    getCurrItem: getCurrItem,
    length: obj.length,
  }
}

var compare2 = function (iterator1, iterator2) {
  if (iterator1.length !== iterator2.length) {
    return false
  }
  while (!iterator1.isDone() && !iterator2.isDone()){
    if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
      return false
    }
    iterator1.next()
    iterator2.next()
  }
  return true
}

var iterator1 = Iterator([1, 2, 3])
var iterator2 = Iterator([1, 2, 4])
compare2(iterator1, iterator2)