/*
    撤销和重做
*/

// 乞丐版拳王...
var Ryu = {
    attack: function () {
        console.log('攻击')
    },
    defense: function () {
        console.log('防御')
    },
    jump: function () {
        console.log('跳')
    },
    crouch: function () {
        console.log('蹲下')
    }
}

var makeComannd = function (receiver, state) {
    return function () {
        receiver[state]()
    }
}

var commands = {
    '119': 'jump',
    '115': 'crouch',
    '97': 'defense',
    '100': 'attack'
}

var commandStack = []

document.getElementById('record').click = function () {
    document.onkeypress = function (e) {
        var keyCode = e.keyCode,
            command = makeComannd(Ryu, commands[keyCode])
    
        if (command) {
            command()
            commandStack.push(command)
        }
    }
}

document.getElementById('replay').onclick = function () {
    var command
    console.log('-----------------------')
    console.log('开始播放录像：')
    while (command = commandStack.shift()) {
        command()
    }
}