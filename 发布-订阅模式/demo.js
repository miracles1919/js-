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