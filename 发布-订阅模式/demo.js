/*
    一个具有发布订阅功能的对象
*/

var event = {
    clientList: [],
    listen: function (key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = []
        }
        this.clientList[key].push(fn)   // 订阅的消息添加进缓存列表
    },
    trigger: function () {
        var key = Array.prototype.shift.call(arguments),
            fns = this.clientList[key]
        
        if (!fns || fns.length === 0) {     // 如果没有绑定对应的消息
            return false
        }

        for (var i = 0, fn; fn = fns[i++]; ) {
            fn.apply(this, arguments)   // arguments是trigger时带上的参数
        }
    },
    remove: function (key, fn) {
        var fns = this.clientList[key]
        if (!fns) {
            return false
        }
        if (!fn) {  // 如果没有传入具体的回掉函数，则取消key对应消息的所有订阅
            fns && (fns.length = 0)
        } else {
            for (var i = fns.length - 1; i >=0 ; i--) { // 反向遍历订阅的回调函数列表
                var _fn = fns[i]
                if (_fn === fn) {
                    fns.splice(i, 1)
                }
            }
        }
    }
}

// 给对象安装发布订阅功能
var installEvent = function (obj) {
    for (var key in event) {
        obj[key] = event[key]
    }
}

// 卖房的例子
var salesOffices = {}
installEvent(salesOffices)

salesOffices.listen('squareMeter88', function (price) {
    console.log(price)
})

salesOffices.listen('squareMeter120', function (price) {
    console.log(price)
})

salesOffices.trigger('squareMeter88', 20000)
salesOffices.trigger('squareMeter120', 23000)