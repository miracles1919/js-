/*
    假设有一个网站
    header头部、nav导航、消息列表、购物车等模块需要ajax异步请求用户登录信息
    更重要的是不知道其他哪些模块会使用用户信息
*/

// 例
var header, nav
var login = {
    succ: function () {}
}
login.succ(function(data){
    header
    nav
    // ...
})

// 上述代码耦合性很强
// 使用发布订阅模式

var header = (function () {
    login.listen('loginSucc', function(data){
        header.setAvatar(data.avatar)
    })
    return {
        setAvatar: function (data) {
            console.log(data)
        }
    }
})()

var nav = (function () {
    login.listen('loginSucc', function(data){
        nav.setAvatar(data.avatar)
    })
    return {
        setAvatar: function (data) {
            console.log(data)
        }
    }
})