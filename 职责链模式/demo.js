/*
    职责链模式
    现实场景：例如公交车传递公交卡
*/

var order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
        console.log('500元定金预购，得到100优惠券')
    } else {
        return 'nextSuccessor'  // 把请求往后传递
    }
}

var order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
        console.log('200元定金预购，得到50优惠券')
    } else {
        return 'nextSuccessor'  // 把请求往后传递
    }
}

var orderNormal = function (orderType, pay, stock) {
    if (stock > 0) {
        console.log('普通购买，无优惠券')
    } else {
        console.log('手机库存不足')
    }
}

// 将函数包装进职责链节点
var Chain = function (fn) {
    this.fn = fn
    this.successor = fn
}

Chain.prototype.setNextSuccessor = function (successor) {
    return this.successor = successor
}

Chain.prototype.passRequest = function () {
    var ret = this.fn.apply(this, arguments)
    if (ret === 'nextSuccessor') {
        return this.successor && this.successor.passRequest.apply(this.successor, arguments)
    }
    return ret
}

var chainOrder500 = new Chain(order500)
var chainOrder200 = new Chain(order200)
var chainOrderNormal = new Chain(orderNormal)

chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)

chainOrder500.passRequest(1, true, 500)
chainOrder500.passRequest(2, true, 500)
chainOrder500.passRequest(3, true, 500)
chainOrder500.passRequest(1, false, 500)