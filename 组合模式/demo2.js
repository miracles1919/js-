/*
    扫描文件夹
*/

var Folder = function (name) {
    this.name = name
    this.files= []
    this.parent = null
}

Folder.prototype.add = function (file) {
    this.files.push(file)
    file.parent = this
}

Folder.prototype.scan = function () {
    console.log('开始扫描文件夹：' + this.name)
    for (var i = 0, file, files = this.files; file = files[i++]; ){
        file.scan()
    }
}

Folder.prototype.remove = function () {
    if (!this.parent) {
        return
    }
    for (var files = this.parent.files, l = files.length - 1; l >= 0; l--){
        var file = files[l]
        if (file === this) {
            files.splice(l, 1)
        }
    }
}

var File = function (name) {
    this.name = name
}

File.prototype.add = function () {
    throw new Error('文件下面不能再添加文件')
}

File.prototype.remove = function () {
    if (!this.parent) {
        return
    }
    for (var files = this.parent.files, l = files.length - 1; l >= 0; l--){
        var file = files[l]
        if (file === this) {
            files.splice(l, 1)
        }
    }
}

File.prototype.scan = function () {
    console.log('开始扫描文件：' + this.name)
}

// add
var folder = new Folder('学习资料')
var folder1 = new Folder('react')
var folder2 = new Folder('js')

var file1 = new File('深入浅出React')
var file2 = new File('React & Redux')
var file3 = new File('JavaScript设计模式')
var file4 = new File('不能承受的生命之轻')

folder1.add(file1)
folder1.add(file2)
folder2.add(file3)

folder.add(folder1)
folder.add(folder2)
folder.add(file4)

// run
folder.scan()

console.log('------------------')
folder1.remove()
file4.remove()
folder.scan()