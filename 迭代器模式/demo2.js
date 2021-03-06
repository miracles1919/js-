/*
    根据不同浏览器获取相应的上传组件对象
 */

var getActiveUploadObj = function () {
  try {
    return new ActiveXObject()
  } catch (e) {
    return false
  }
}

// 判断是否支持flash
var supportFlash = function () {

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

var iteratorUploadObj = function () {
  for (var i = 0, fn; fn = arguments[i++]; ) {
    var uploadObj = fn()
    if (uploadObj !== false) {
      return uploadObj
    }
  }
}

var uploadObj = iteratorUploadObj(getActiveUploadObj, getFlashUploadObj, getFormUploadObj)
