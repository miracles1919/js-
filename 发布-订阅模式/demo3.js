/*
    全局的订阅发布对象
 */

 var Event = (function (){
     
    var clientList = {},
        listen,
        trigger,
        remove

    listen = function (key, fn) {
        if (!clientList[key]) {
            clientList[key] = []
        }
        clientList[key].push(fn)
    }

    trigger = function () {
        var key = Array.prototype.shift.call(arguments),
            fns = clientList[key]
        
        if (!fns || fns.length === 0) {
            return false
        }

        for (var i = 0, fn; fn = fns[i++]; ){
            fn.apply(this, arguments)
        }
    }

    remove = function (key, fn) {
        var fns = clientList[key]
        if (!fns) {
            return false
        }
        if (!fn) {
            fns && ( fns.length = 0 )
        } else {
            for (var i = fns.length - 1; i >= 0; i--) {
                var _fn = fns[i]
                if (_fn === fn) {
                    fns.splice(i, 1)
                }
            }
        }
    }

    return {
        listen: listen,
        trigger: trigger,
        remove: remove,
    }


 })()

Event.listen('library', function (num) {
     console.log('图书馆人数：' + num)
})

Event.listen('club', function (num) {
     console.log('club人数：' + num)
})

Event.trigger('club', 10)
Event.trigger('library', 20)