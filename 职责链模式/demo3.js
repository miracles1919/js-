/*
    文件上传
*/

// 用AOP实现职责链

Function.prototype.after = function (fn) {
    var self = this
    return function () {
        var ret = self.apply(this, arguments)
        if (ret === false) {
            return fn.apply(this, arguments)
        }
        return ret
    }
}

var getActiveUploadObj = function () {
    try {
      return new ActiveXObject()
    } catch (e) {
      return false
    }
  }

  var getFlashUploadObj = function () {
    if (supportFlash()) {
      var str = '<object type="application/x-shockwave-flash"></object>'
      return $(str).appendTo($('body'))
    }
    return false
  }

  var getFormUploadObj = function () {
    var str = '<input name="file" type="file"/>'
    return $(str).appendTo($('body'))
  }

  var getUploadObj = getActiveUploadObj.after(getFlashUploadObj).after(getFormUploadObj)

  getUploadObj()