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
    this.oldPos = null
}

MoveCommand.prototype.execute = function () {
    this.receiver.start('top', this.pos, 1000, 'strongEaseOut')
    this.oldPos = this.receiver.dom.getBoundingClientRect()[this.receiver.propertyName]
}

MoveCommand.prototype.undo = function () {
    console.log(this.oldPos)
    this.receiver.start('top', this.oldPos, 1000, 'strongEaseOut')
}

var moveCommand

moveBtn.onclick = function () {
    var animate = new Animate(ball)
    moveCommand = new MoveCommand(animate, pos.value)
    moveCommand.execute()
}

cancelBtn.onclick =function () {
    moveCommand.undo()
}