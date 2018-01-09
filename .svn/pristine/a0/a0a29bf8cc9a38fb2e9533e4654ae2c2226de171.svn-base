export default {
  istype(o, type) {
    if (type) {
      var _type = type.toLowerCase()
    }
    switch (_type) {
      case 'string':
        return Object.prototype.toString.call(o) === '[object String]'
      case 'number':
        return Object.prototype.toString.call(o) === '[object Number]'
      case 'boolean':
        return Object.prototype.toString.call(o) === '[object Boolean]'
      case 'undefined':
        return Object.prototype.toString.call(o) === '[object Undefined]'
      case 'null':
        return Object.prototype.toString.call(o) === '[object Null]'
      case 'function':
        return Object.prototype.toString.call(o) === '[object Function]'
      case 'array':
        return Object.prototype.toString.call(o) === '[object Array]'
      case 'object':
        return Object.prototype.toString.call(o) === '[object Object]'
      case 'nan':
        return isNaN(o)
      case 'elements':
        return Object.prototype.toString.call(o).indexOf('HTML') !== -1
      default:
        return Object.prototype.toString.call(o)
    }
  },
  addClass(obj, classStr) {
    if ((this.istype(obj, 'array') || this.istype(obj, 'elements')) && obj.length >= 1) {
      for (var i = 0, len = obj.length; i < len; i++) {
        if (!this.hasClass(obj[i], classStr)) {
          obj[i].className += ' ' + classStr
        }
      }
    } else {
      if (!this.hasClass(obj, classStr)) {
        obj.className += ' ' + classStr
      }
    }
  },

  removeClass(obj, classStr) {
    var reg = new RegExp('(\\s|^)' + classStr + '(\\s|$)')
    if ((this.istype(obj, 'array') || this.istype(obj, 'elements')) && obj.length > 1) {
      for (var i = 0, len = obj.length; i < len; i++) {
        if (this.hasClass(obj[i], classStr)) {
          obj[i].className = obj[i].className.replace(reg, '')
        }
      }
    } else {
      if (this.hasClass(obj, classStr)) {
        obj.className = obj.className.replace(reg, '')
      }
    }
  },
  /* 替换类名 */
  replaceClass(obj, newName, oldName) {
    this.removeClass(obj, oldName)
    this.addClass(obj, newName)
  },
  // 检测对象是否有哪个类名
  hasClass(obj, classStr) {
    if (obj.className && this.trim(obj.className, 1) !== '') {
      var arr = obj.className.split(/\s+/) // 这个正则表达式是因为class可以有多个,判断是否包含
      return arr.indexOf(classStr) !== -1
    } else {
      return false
    }
  },
  // 去除空格  type 1-所有空格  2-前后空格  3-前空格 4-后空格
  // 这个方法有原生的方案代替，但是考虑到有时候开发PC站需要兼容IE8，所以就还是继续保留
  trim(str, type) {
    switch (type) {
      case 1:
        return str.replace(/\s+/g, '')
      case 2:
        return str.replace(/(^\s*)|(\s*$)/g, '')
      case 3:
        return str.replace(/(^\s*)/g, '')
      case 4:
        return str.replace(/(\s*$)/g, '')
      default:
        return str
    }
  }
}
