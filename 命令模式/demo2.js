/*
    撤销命令
*/

var ball = document.getElementById('ball')
var pos = document.getElementById('pos')
var moveBtn = document.getElementById('moveBtn')
var cancelBtn = document.getElementById('cancelBtn')


var MoveCommand = function (receiver, pos) {
    this.receiver = receiver
    this.pos = pos
    this.oldPosArr = []
}

// 用代理类实现单例
var ProxySingletonMoveCommand = (function (){
    var instance

    return function (receiver, pos) {
        if (!instance) {
            instance = new MoveCommand(receiver, pos)
        } else {
            instance.pos = pos
        }

        return instance
    }
})()


MoveCommand.prototype.execute = function () {
    this.receiver.start('top', this.pos, 1000, 'strongEaseOut')
    var oldPos = this.receiver.dom.getBoundingClientRect()[this.receiver.propertyName]
    this.oldPosArr.push(oldPos)
    console.log(this.oldPosArr)
}

MoveCommand.prototype.undo = function () {
    if (this.oldPosArr.length > 0) {
        var oldPos = this.oldPosArr.pop()
        this.receiver.start('top', oldPos, 1000, 'strongEaseOut')
    }
}


var moveCommand

moveBtn.onclick = function () {
    // console.log(pos.value)
    var animate = new Animate(ball)
    // moveCommand = new MoveCommand(animate, pos.value)
    
    moveCommand = new ProxySingletonMoveCommand(animate, pos.value)
    moveCommand.execute()
}

cancelBtn.onclick =function () {
    moveCommand.undo()
}