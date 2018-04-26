Vue.filter('formatMomment', function (val) {
  var n = new Date() //当前时间
    var b = new Date(val) //发布时间
    var t = n-b
    if (t < 1 * 60 * 60 * 1000) {
        if (t < 60 * 1000) {
          return '刚刚'
        }else{
          return parseInt(t / 60 / 1000) + '分钟前'
        }
    }else if (t < 24 * 60 * 60 * 1000) {
        return parseInt(t / 60 / 60 / 1000) + '小时前'
    }else if (t < 2 * 24 * 60 * 60 * 1000) {
        return parseInt(t / 24 / 60 / 60 / 1000) + '天前'
    }else{
        var d = (b.getMonth()+1).add0()
        + '/' + b.getDate().add0()
        + ' ' + b.getHours().add0()
        + ':' + b.getMinutes().add0()
        return d
    }
})