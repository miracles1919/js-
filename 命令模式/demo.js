/*
    命令模式将请求发送者和请求接受者解耦
    过程式的请求调用封装在command对象的execute中
    按钮点击 刷新菜单
*/

var setCommand = function (button, command) {
    button.onclick = function () {
        command.execute()
    }
}

var MenuBar = {
    refresh: function () {
        console.log('刷新')
    }
}

var RefreshMenuBarCommand = function (receiver) {
    return {
        execute: function () {
            receiver.refresh()
        }
    }
}

var refreshMenuBarCommand = RefreshMenuBarCommand (MenuBar)

var button1 = document.getElementById('button1')

setCommand(button1, refreshMenuBarCommand)