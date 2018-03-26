/**
    组合模式用途：
    1、表示树形结构
    2、利用对象多态性统一对待组合对象和单个对象
*/


/*
    宏命令
    1、开空调
    2、打开电视和音响
    3、关门、开电脑、登录qq
*/

var MacroCommand = function () {
    return {
        commandList: [],
        add: function (command) {
            this.commandList.push(command)
        },
        execute: function () {
            for (var i = 0, command; command = this.commandList[i++]; ) {
                command.execute()
            }
        }
    }
}

// 空调
var openAirCommand = {
    execute: function () {
        console.log('打开空调')
    },
    add: function () {
        throw new Error('叶对象不能添加子节点')
    }
}

// 电视、音响
var openTvCommand = {
    execute: function () {
        console.log('打开电视')
    }
}

var openSoundCommand = {
    execute: function () {
        console.log('打开音响')
    }
}

var macroCommand1 = MacroCommand()
macroCommand1.add(openTvCommand)
macroCommand1.add(openSoundCommand)

// 关门、打开电脑和登录qq
var closeDoorCommand = {
    execute: function () {
        console.log('关门')
    }
}

var openPcCommand = {
    execute: function () {
        console.log('开电脑')
    }
}

var openQQCommand = {
    execute: function () {
        console.log('登录QQ')
    }
}

var macroCommand2 = MacroCommand()
macroCommand2.add(closeDoorCommand)
macroCommand2.add(openPcCommand)
macroCommand2.add(openQQCommand)

// 把所有的命令组合成一个更大的宏命令
var macroCommand = MacroCommand()
macroCommand.add(openAirCommand)
macroCommand.add(macroCommand1)
macroCommand.add(macroCommand2)


var setCommand = (function(command) {
    command.execute()
})(macroCommand)

