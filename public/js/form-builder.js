/******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
/******/
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/
/******/    // Check if module is in cache
/******/    if(installedModules[moduleId]) {
/******/      return installedModules[moduleId].exports;
/******/    }
/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      i: moduleId,
/******/      l: false,
/******/      exports: {}
/******/    };
/******/
/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/    // Flag the module as loaded
/******/    module.l = true;
/******/
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/
/******/
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;
/******/
/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;
/******/
/******/  // identity function for calling harmony imports with the correct context
/******/  __webpack_require__.i = function(value) { return value; };
/******/
/******/  // define getter function for harmony exports
/******/  __webpack_require__.d = function(exports, name, getter) {
/******/    if(!__webpack_require__.o(exports, name)) {
/******/      Object.defineProperty(exports, name, {
/******/        configurable: false,
/******/        enumerable: true,
/******/        get: getter
/******/      });
/******/    }
/******/  };
/******/
/******/  // getDefaultExport function for compatibility with non-harmony modules
/******/  __webpack_require__.n = function(module) {
/******/    var getter = module && module.__esModule ?
/******/      function getDefault() { return module['default']; } :
/******/      function getModuleExports() { return module; };
/******/    __webpack_require__.d(getter, 'a', getter);
/******/    return getter;
/******/  };
/******/
/******/  // Object.prototype.hasOwnProperty.call
/******/  __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";
/******/
/******/  // Load entry module and return exports
/******/  return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _mi18n2 = __webpack_require__(2);

var _mi18n3 = _interopRequireDefault(_mi18n2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var control = function () {
  function control(config, preview) {
    _classCallCheck(this, control);

    this.rawConfig = $.extend({}, config);

    config = $.extend({}, config);
    this.preview = preview;
    delete config.isPreview;
    if (this.preview) {
      delete config.required;
    }

    var properties = ['label', 'description', 'subtype', 'required'];
    for (var _iterator = properties, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var prop = _ref;

      this[prop] = config[prop];
      delete config[prop];
    }

    if (!config.id) {
      if (config.name) {
        config.id = config.name;
      } else {
        config.id = 'control-' + Math.floor(Math.random() * 10000000 + 1);
      }
    }
    this.id = config.id;
    this.type = config.type;
    if (this.description) {
      config.title = this.description;
    }

    if (!control.controlConfig) {
      control.controlConfig = {};
    }
    var classId = this.subtype ? this.type + '.' + this.subtype : this.type;
    this.classConfig = $.extend({}, control.controlConfig[classId] || {});

    if (this.subtype) {
      config.type = this.subtype;
    }

    if (this.required) {
      config['required'] = 'required';
      config['aria-required'] = 'true';
    }
    this.config = config;
    this.configure();
  }

  control.register = function register(types, controlClass, parentType) {
    var prefix = parentType ? parentType + '.' : '';

    if (!control.classRegister) {
      control.classRegister = {};
    }
    if (!Array.isArray(types)) {
      types = [types];
    }

    for (var _iterator2 = types, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var type = _ref2;

      if (type.indexOf('.') > -1) {
        control.error('Ignoring type ' + type + '. Cannot use the character \'.\' in a type name.');
        continue;
      }
      control.classRegister[prefix + type] = controlClass;
    }
  };

  control.getRegistered = function getRegistered() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var types = Object.keys(control.classRegister);
    if (!types.length) {
      return types;
    }
    return types.filter(function (key) {
      if (type) {
        return key.indexOf(type + '.') > -1;
      }
      return key.indexOf('.') == -1;
    });
  };

  control.getRegisteredSubtypes = function getRegisteredSubtypes() {
    var types = {};
    for (var key in control.classRegister) {
      if (control.classRegister.hasOwnProperty(key)) {
        var _key$split = key.split('.'),
            type = _key$split[0],
            subtype = _key$split[1];

        if (!subtype) {
          continue;
        }
        if (!types[type]) {
          types[type] = [];
        }
        types[type].push(subtype);
      }
    }
    return types;
  };

  control.getClass = function getClass(type, subtype) {
    var lookup = subtype ? type + '.' + subtype : type;
    var controlClass = control.classRegister[lookup] || control.classRegister[type];
    if (!controlClass) {
      return control.error('Invalid control type. (Type: ' + type + ', Subtype: ' + subtype + '). Please ensure you have registered it, and imported it correctly.');
    }

    return controlClass;
  };

  control.loadCustom = function loadCustom(controls) {
    var controlClasses = [];
    if (controls) {
      controlClasses = controlClasses.concat(controls);
    }

    if (window.fbControls) {
      controlClasses = controlClasses.concat(window.fbControls);
    }

    if (!window.fbControlsLoaded) {
      for (var _iterator3 = controlClasses, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var loadControl = _ref3;

        loadControl(control, control.classRegister);
      }
      window.fbControlsLoaded = true;
    }
  };

  control.mi18n = function mi18n(lookup, args) {
    var def = this.definition;
    var i18n = def.i18n || {};
    var locale = _mi18n3.default.locale;
    i18n = i18n[locale] || i18n.default || i18n;
    var lookupCamel = this.camelCase(lookup);

    var value = (typeof i18n === 'undefined' ? 'undefined' : _typeof(i18n)) == 'object' ? i18n[lookupCamel] || i18n[lookup] : i18n;
    if (value) {
      return value;
    }

    var mapped = def.mi18n;
    if ((typeof mapped === 'undefined' ? 'undefined' : _typeof(mapped)) === 'object') {
      mapped = mapped[lookupCamel] || mapped[lookup];
    }
    if (!mapped) {
      mapped = lookupCamel;
    }
    return _mi18n3.default.get(mapped, args);
  };

  control.active = function active(type) {
    return !Array.isArray(this.definition.inactive) || this.definition.inactive.indexOf(type) == -1;
  };

  control.label = function label(type) {
    return this.mi18n(type);
  };

  control.icon = function icon(type) {
    var def = this.definition;
    if (def && _typeof(def.icon) === 'object') {
      return def.icon[type];
    }
    return def.icon;
  };

  control.prototype.configure = function configure() {};

  control.prototype.build = function build() {
    var _config = this.config,
        label = _config.label,
        type = _config.type,
        data = _objectWithoutProperties(_config, ['label', 'type']);

    return this.markup(type, _utils2.default.parsedHtml(label), data);
  };

  control.prototype.on = function on(eventType) {
    var _this = this;

    var events = {
      prerender: function prerender(element) {},

      render: function render(evt) {
        var onRender = function onRender() {
          if (_this.onRender) {
            _this.onRender();
          }
        };

        if (_this.css) {
          _utils2.default.getStyles(_this.css);
        }
        if (_this.js && !_utils2.default.isCached(_this.js)) {
          _utils2.default.getScripts(_this.js).done(onRender);
        } else {
          onRender();
        }
      }
    };
    return eventType ? events[eventType] : events;
  };

  control.error = function error(message) {
    throw new Error(message);
  };

  control.prototype.markup = function markup(tag) {
    var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    this.element = _utils2.default.markup(tag, content, attributes);
    return this.element;
  };

  control.prototype.parsedHtml = function parsedHtml(html) {
    return _utils2.default.parsedHtml(html);
  };

  control.camelCase = function camelCase(str) {
    return _utils2.default.camelCase(str);
  };

  _createClass(control, null, [{
    key: 'definition',
    get: function get() {
      return {};
    }
  }]);

  return control;
}();

exports.default = control;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var utils = {};
window.fbLoaded = {
  js: [],
  css: []
};
window.fbEditors = {
  quill: {},
  tinymce: {}
};

utils.inArray = function (needle, haystack) {
  return haystack.indexOf(needle) !== -1;
};

utils.trimObj = function (attrs) {
  var xmlRemove = [null, undefined, '', false, 'false'];
  for (var attr in attrs) {
    if (utils.inArray(attrs[attr], xmlRemove)) {
      delete attrs[attr];
    } else if (Array.isArray(attrs[attr])) {
      if (!attrs[attr].length) {
        delete attrs[attr];
      }
    }
  }

  return attrs;
};

utils.validAttr = function (attr) {
  var invalid = ['values', 'enableOther', 'other', 'label', 'subtype'];
  return !utils.inArray(attr, invalid);
};

utils.attrString = function (attrs) {
  var attributes = [];

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr) && utils.validAttr(attr)) {
      attr = utils.safeAttr(attr, attrs[attr]);
      attributes.push(attr.name + attr.value);
    }
  }
  return attributes.join(' ');
};

utils.safeAttr = function (name, value) {
  name = utils.safeAttrName(name);
  var valString = void 0;

  if (value) {
    if (Array.isArray(value)) {
      valString = utils.escapeAttr(value.join(' '));
    } else {
      if (typeof value === 'boolean') {
        value = value.toString();
      }
      valString = utils.escapeAttr(value.replace(',', ' ').trim());
    }
  }

  value = value ? '="' + valString + '"' : '';
  return {
    name: name,
    value: value
  };
};

utils.safeAttrName = function (name) {
  var safeAttr = {
    className: 'class'
  };

  return safeAttr[name] || utils.hyphenCase(name);
};

utils.hyphenCase = function (str) {
  str = str.replace(/[^\w\s\-]/gi, '');
  str = str.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });

  return str.replace(/\s/g, '-').replace(/^-+/g, '');
};

utils.camelCase = function (str) {
  return str.replace(/-([a-z])/g, function (m, w) {
    return w.toUpperCase();
  });
};

utils.contentType = function (content) {
  var type = typeof content === 'undefined' ? 'undefined' : _typeof(content);
  if (content instanceof Node || content instanceof HTMLElement) {
    type = 'node';
  } else if (Array.isArray(content)) {
    type = 'array';
  }

  return type;
};

utils.bindEvents = function (element, events) {
  if (events) {
    var _loop = function _loop(event) {
      if (events.hasOwnProperty(event)) {
        element.addEventListener(event, function (evt) {
          return events[event](evt);
        });
      }
    };

    for (var event in events) {
      _loop(event);
    }
  }
};

utils.nameAttr = function (field) {
  var epoch = new Date().getTime();
  var prefix = field.type || utils.hyphenCase(field.label);
  return prefix + '-' + epoch;
};

utils.markup = function (tag) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var contentType = utils.contentType(content);

  var events = attributes.events,
      attrs = _objectWithoutProperties(attributes, ['events']);

  var field = document.createElement(tag);

  var appendContent = {
    string: function string(content) {
      field.innerHTML += content;
    },
    object: function object(config) {
      var tag = config.tag,
          content = config.content,
          data = _objectWithoutProperties(config, ['tag', 'content']);

      return field.appendChild(utils.markup(tag, content, data));
    },
    node: function node(content) {
      return field.appendChild(content);
    },
    array: function array(content) {
      for (var i = 0; i < content.length; i++) {
        contentType = utils.contentType(content[i]);
        appendContent[contentType](content[i]);
      }
    },
    function: function _function(content) {
      content = content();
      contentType = utils.contentType(content);
      appendContent[contentType](content);
    },
    undefined: function undefined() {}
  };

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      var name = utils.safeAttrName(attr);
      field.setAttribute(name, attrs[attr]);
    }
  }

  if (content) {
    appendContent[contentType].call(this, content);
  }

  utils.bindEvents(field, events);

  return field;
};

utils.parseAttrs = function (elem) {
  var attrs = elem.attributes;
  var data = {};
  utils.forEach(attrs, function (attr) {
    var attrVal = attrs[attr].value || '';
    if (attrVal.match(/false|true/g)) {
      attrVal = attrVal === 'true';
    } else if (attrVal.match(/undefined/g)) {
      attrVal = undefined;
    }

    if (attrVal) {
      data[attrs[attr].name] = attrVal;
    }
  });

  return data;
};

utils.parseOptions = function (options) {
  var optionData = {};
  var data = [];

  for (var i = 0; i < options.length; i++) {
    optionData = utils.parseAttrs(options[i]);
    optionData.label = options[i].textContent;
    data.push(optionData);
  }

  return data;
};

utils.parseXML = function (xmlString) {
  var parser = new window.DOMParser();
  var xml = parser.parseFromString(xmlString, 'text/xml');
  var formData = [];

  if (xml) {
    var fields = xml.getElementsByTagName('field');
    for (var i = 0; i < fields.length; i++) {
      var fieldData = utils.parseAttrs(fields[i]);
      var options = fields[i].getElementsByTagName('option');

      if (options && options.length) {
        fieldData.values = utils.parseOptions(options);
      }

      formData.push(fieldData);
    }
  }

  return formData;
};

utils.parsedHtml = function (html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.innerHTML = html;
  return escapeElement.textContent;
};

utils.escapeHtml = function (html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.textContent = html;
  return escapeElement.innerHTML;
};

utils.escapeAttr = function (str) {
  var match = {
    '"': '&quot;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };

  var replaceTag = function replaceTag(tag) {
    return match[tag] || tag;
  };

  return typeof str === 'string' ? str.replace(/["&<>]/g, replaceTag) : str;
};

utils.escapeAttrs = function (attrs) {
  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      attrs[attr] = utils.escapeAttr(attrs[attr]);
    }
  }

  return attrs;
};

utils.forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

utils.unique = function (array) {
  return array.filter(function (elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });
};

utils.remove = function (val, arr) {
  var index = arr.indexOf(val);

  if (index > -1) {
    arr.splice(index, 1);
  }
};

utils.getScripts = function (scriptScr, path) {
  var $ = jQuery;
  var _arr = [];

  if (!Array.isArray(scriptScr)) {
    scriptScr = [scriptScr];
  }

  if (!utils.isCached(scriptScr)) {
    _arr = $.map(scriptScr, function (src) {
      var options = {
        dataType: 'script',
        cache: true,
        url: (path || '') + src
      };
      return $.ajax(options).done(function () {
        return window.fbLoaded.js.push(src);
      });
    });
  }

  _arr.push($.Deferred(function (deferred) {
    return $(deferred.resolve);
  }));

  return $.when.apply($, _arr);
};

utils.isCached = function (src) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'js';

  var isCached = false;
  var cache = window.fbLoaded[type];
  if (Array.isArray(src)) {
    isCached = src.every(function (s) {
      return utils.inArray(s, cache);
    });
  } else {
    isCached = utils.inArray(src, cache);
  }
  return isCached;
};

utils.getStyles = function (scriptScr, path) {
  if (!Array.isArray(scriptScr)) {
    scriptScr = [scriptScr];
  }
  scriptScr.forEach(function (src) {
    var type = 'href';
    var key = src;
    var id = '';

    if ((typeof src === 'undefined' ? 'undefined' : _typeof(src)) == 'object') {
      type = src.type || (src.style ? 'inline' : 'href');
      id = src.id;
      src = type == 'inline' ? src.style : src.href;
      key = id || src.href || src.style;
    }

    if (utils.isCached(key, 'css')) {
      return;
    }

    if (type == 'href') {
      var link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = (path || '') + src;
      document.head.appendChild(link);
    } else {
      $('<style type="text/css">' + src + '</style>').attr('id', id).appendTo($(document.head));
    }

    window.fbLoaded.css.push(key);
  });
};

utils.capitalize = function (str) {
  return str.replace(/\b\w/g, function (m) {
    return m.toUpperCase();
  });
};

utils.merge = function (obj1, obj2) {
  var mergedObj = Object.assign({}, obj1, obj2);
  for (var prop in obj2) {
    if (mergedObj.hasOwnProperty(prop)) {
      if (Array.isArray(obj2[prop])) {
        mergedObj[prop] = Array.isArray(obj1[prop]) ? utils.unique(obj1[prop].concat(obj2[prop])) : obj2[prop];
      } else if (_typeof(obj2[prop]) === 'object') {
        mergedObj[prop] = utils.merge(obj1[prop], obj2[prop]);
      } else {
        mergedObj[prop] = obj2[prop];
      }
    }
  }
  return mergedObj;
};

utils.addEventListeners = function (el, evts, fn) {
  return evts.split(' ').forEach(function (e) {
    return el.addEventListener(e, fn, false);
  });
};

utils.closest = function (el, cls) {
  var className = cls.replace('.', '');
  while ((el = el.parentElement) && !el.classList.contains(className)) {}
  return el;
};

utils.noop = function () {
  return null;
};

utils.debounce = function (func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var timeout = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

utils.mobileClass = function () {
  var mobileClass = '';(function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
      mobileClass = ' fb-mobile';
    }
  })(navigator.userAgent || navigator.vendor || window.opera);
  return mobileClass;
};

utils.makeClassName = function (str) {
  return utils.hyphenCase(str.replace(/[^\w\s\-]/gi, ''));
};

utils.safename = function (str) {
  return str.replace(/\s/g, '-').replace(/[^a-zA-Z0-9\[\]\_-]/g, '').toLowerCase();
};

utils.forceNumber = function (str) {
  return str.replace(/[^0-9]/g, '');
};

exports.default = utils;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * mi18n - https://github.com/Draggable/mi18n
 * Version: 0.3.4
 * Author: Kevin Chappell <kevin.b.chappell@gmail.com> (http://kevin-chappell.com)
 */
module.exports = function (t) {
  function e(r) {
    if (n[r]) return n[r].exports;var o = n[r] = { i: r, l: !1, exports: {} };return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
  }var n = {};return e.m = t, e.c = n, e.i = function (t) {
    return t;
  }, e.d = function (t, n, r) {
    e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r });
  }, e.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return e.d(n, "a", n), n;
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, e.p = "", e(e.s = 0);
}([function (t, e) {
  "use strict";
  function n(t) {
    return function () {
      var e = t.apply(this, arguments);return new Promise(function (t, n) {
        function r(o, u) {
          try {
            var i = e[o](u),
                a = i.value;
          } catch (t) {
            return void n(t);
          }return i.done ? void t(a) : Promise.resolve(a).then(function (t) {
            r("next", t);
          }, function (t) {
            r("throw", t);
          });
        }return r("next");
      });
    };
  }function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(e, "__esModule", { value: !0 });var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
  },
      u = function () {
    function t(t, e) {
      for (var n, r = 0; r < e.length; r++) {
        n = e[r], n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      i = function () {
    function t() {
      var e = this;r(this, t);var n = { extension: ".lang", location: "assets/lang/", langs: ["en-US"], locale: "en-US", preloaded: {} };this.init = function (t) {
        return e.config = Object.assign({}, n, t), e.langs = Object.assign({}, e.config.preloaded), e.locale = e.config.locale || e.config.langs[0], e.setCurrent(e.locale);
      };
    }return t.prototype.getValue = function (t) {
      return this.current && this.current[t] || t;
    }, t.prototype.makeSafe = function (t) {
      var e = { "{": "\\{", "}": "\\}", "|": "\\|" };return t = t.replace(/\{|\}|\|/g, function (t) {
        return e[t];
      }), new RegExp(t, "g");
    }, t.prototype.put = function (t, e) {
      return this.current[t] = e;
    }, t.prototype.get = function (t, e) {
      var n,
          r = this,
          u = this.getValue(t),
          i = u.match(/\{[^\}]+?\}/g);if (e && i) if ("object" === (void 0 === e ? "undefined" : o(e))) for (var a = 0; a < i.length; a++) {
        n = i[a].substring(1, i[a].length - 1), u = u.replace(r.makeSafe(i[a]), e[n] || "");
      } else u = u.replace(/\{[^\}]+?\}/g, e);return u;
    }, t.prototype.fromFile = function (t) {
      for (var e, n = t.split("\n"), r = {}, o = 0; o < n.length; o++) {
        if (e = n[o].match(/^(.+?) *?= *?([^\n]+)/)) {
          var u = e[2].replace(/^\s+|\s+$/, "");r[e[1]] = u;
        }
      }return r;
    }, t.prototype.processFile = function (t) {
      var e = t.replace(/\n\n/g, "\n");return this.fromFile(e);
    }, t.prototype.loadLang = function (t) {
      var e = this;return new Promise(function (n, r) {
        if (e.langs[t]) n(e.langs[t]);else {
          var o = new XMLHttpRequest(),
              u = e.config.location + t + e.config.extension;o.open("GET", u, !0), o.onload = function () {
            if (304 >= this.status) {
              var u = e.processFile(o.responseText);e.langs[t] = u, n(u);
            } else r({ status: this.status, statusText: o.statusText });
          }, o.onerror = function () {
            r({ status: this.status, statusText: o.statusText });
          }, o.send();
        }
      });
    }, t.prototype.setCurrent = function () {
      var t = n(regeneratorRuntime.mark(function t() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "en-US";return regeneratorRuntime.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                return t.next = 2, this.loadLang(e);case 2:
                return this.locale = e, this.current = this.langs[e], t.abrupt("return", this.current);case 5:case "end":
                return t.stop();}
          }
        }, t, this);
      }));return function () {
        return t.apply(this, arguments);
      };
    }(), u(t, [{ key: "getLangs", get: function get() {
        return this.config.langs;
      } }]), t;
  }();e.default = new i();
}]);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _control2 = __webpack_require__(0);

var _control3 = _interopRequireDefault(_control2);

var _mi18n = __webpack_require__(2);

var _mi18n2 = _interopRequireDefault(_mi18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var controlCustom = function (_control) {
  _inherits(controlCustom, _control);

  function controlCustom() {
    _classCallCheck(this, controlCustom);

    return _possibleConstructorReturn(this, _control.apply(this, arguments));
  }

  controlCustom.register = function register() {
    var templates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (!controlCustom.def) {
      controlCustom.def = {
        icon: {},
        i18n: {}
      };
    }

    controlCustom.templates = templates;

    var locale = _mi18n2.default.locale;
    if (!controlCustom.def.i18n[locale]) {
      controlCustom.def.i18n[locale] = {};
    }

    _control3.default.register(Object.keys(templates), controlCustom);

    for (var _iterator = fields, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var field = _ref;

      var type = field.type;
      field.attrs = field.attrs || {};
      if (!type) {
        if (!field.attrs.type) {
          this.error('Ignoring invalid custom field definition. Please specify a type property.');
          continue;
        }
        type = field.attrs.type;
      }

      var lookup = field.subtype || type;

      if (!templates[type]) {
        var controlClass = _control3.default.getClass(type, field.subtype);
        if (!controlClass) {
          this.error('Error while registering custom field: ' + type + (field.subtype ? ':' + field.subtype : '') + '. Unable to find any existing defined control or template for rendering.');
          continue;
        }

        lookup = type + '-' + Math.floor(Math.random() * 9000 + 1000);
        controlCustom.customRegister[lookup] = $.extend(field, {
          type: type,
          class: controlClass
        });
      }

      controlCustom.def.i18n[locale][lookup] = field.label;
      controlCustom.def.icon[lookup] = field.icon;
    }
  };

  controlCustom.getRegistered = function getRegistered() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (type) {
      return _control3.default.getRegistered(type);
    }
    return Object.keys(controlCustom.customRegister);
  };

  controlCustom.lookup = function lookup(_lookup) {
    return controlCustom.customRegister[_lookup];
  };

  controlCustom.prototype.build = function build() {
    var custom = controlCustom.templates[this.type];
    if (!custom) {
      return this.error('Invalid custom control type. Please ensure you have registered it correctly as a template option.');
    }

    var fieldData = Object.assign(this.config);
    var properties = ['label', 'description', 'subtype', 'id', 'isPreview', 'required', 'title', 'aria-required', 'type'];
    for (var _iterator2 = properties, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var prop = _ref2;

      fieldData[prop] = this.config[prop] || this[prop];
    }

    custom = custom.bind(this);
    custom = custom(fieldData);

    if (custom.js) {
      this.js = custom.js;
    }
    if (custom.css) {
      this.css = custom.css;
    }

    this.onRender = custom.onRender;
    return {
      field: custom.field,
      layout: custom.layout
    };
  };

  _createClass(controlCustom, null, [{
    key: 'definition',
    get: function get() {
      return controlCustom.def;
    }
  }]);

  return controlCustom;
}(_control3.default);

exports.default = controlCustom;

controlCustom.customRegister = {};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instanceDom = exports.instanceDom = {};
var defaultSubtypes = exports.defaultSubtypes = {
  text: ['text', 'password', 'email', 'color', 'tel'],
  header: ['h1', 'h2', 'h3'],
  button: ['button', 'submit', 'reset'],
  paragraph: ['p', 'address', 'blockquote', 'canvas', 'output'],
  textarea: ['textarea', 'quill']
};

var remove = exports.remove = function remove(element) {
  if (element.parentNode) {
    element.parentNode.removeChild(element);
  }
};

var empty = exports.empty = function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return element;
};

var filter = exports.filter = function filter(elems, term) {
  var show = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var filteredElems = [];
  var toggle = ['none', 'block'];

  if (show) {
    toggle = toggle.reverse();
  }

  for (var i = elems.length - 1; i >= 0; i--) {
    var txt = elems[i].textContent.toLowerCase();
    if (txt.indexOf(term.toLowerCase()) !== -1) {
      elems[i].style.display = toggle[0];
      filteredElems.push(elems[i]);
    } else {
      elems[i].style.display = toggle[1];
    }
  }

  return filteredElems;
};

var optionFields = exports.optionFields = ['select', 'checkbox-group', 'checkbox', 'radio-group', 'autocomplete'];

var optionFieldsRegEx = exports.optionFieldsRegEx = new RegExp('(' + optionFields.join('|') + ')');

var Dom = function Dom(formID) {
  _classCallCheck(this, Dom);

  this.optionFields = optionFields;
  this.optionFieldsRegEx = optionFieldsRegEx;

  this.subtypes = defaultSubtypes;

  this.empty = empty;

  this.filter = filter;

  instanceDom[formID] = this;
  return instanceDom[formID];
};

exports.default = Dom;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _control2 = __webpack_require__(0);

var _control3 = _interopRequireDefault(_control2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var controlTextarea = function (_control) {
  _inherits(controlTextarea, _control);

  function controlTextarea() {
    _classCallCheck(this, controlTextarea);

    return _possibleConstructorReturn(this, _control.apply(this, arguments));
  }

  controlTextarea.prototype.build = function build() {
    var _config = this.config,
        _config$value = _config.value,
        value = _config$value === undefined ? '' : _config$value,
        attrs = _objectWithoutProperties(_config, ['value']);

    this.field = this.markup('textarea', this.parsedHtml(value), attrs);
    return this.field;
  };

  controlTextarea.prototype.on = function on(eventType) {
    var _this2 = this;

    if (eventType == 'prerender' && this.preview) {
      return function (element) {
        if (_this2.field) {
          element = _this2.field;
        }

        $(element).on('mousedown', function (e) {
          e.stopPropagation();
        });
      };
    }
    return _control.prototype.on.call(this, eventType);
  };

  _createClass(controlTextarea, null, [{
    key: 'definition',
    get: function get() {
      return {
        mi18n: {
          textarea: 'textArea'
        }
      };
    }
  }]);

  return controlTextarea;
}(_control3.default);

exports.default = controlTextarea;

_control3.default.register('textarea', controlTextarea);
_control3.default.register('textarea', controlTextarea, 'textarea');

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultOptions = exports.defaultOptions = {
  controlPosition: 'right',
  append: false,
  actionButtons: [],
  controlOrder: ['autocomplete', 'button', 'checkbox', 'checkbox-group', 'date', 'file', 'header', 'hidden', 'paragraph', 'number', 'radio-group', 'select', 'text', 'textarea'],
  dataType: 'json',

  disableFields: [],
  disabledAttrs: [],
  disabledActionButtons: [],
  disabledFieldButtons: {},
  editOnAdd: false,

  defaultFields: [],
  fields: [],
  fieldRemoveWarn: false,
  inputSets: [],
  replaceFields: [],
  roles: {
    1: 'Administrator'
  },
  notify: {
    error: function error(message) {
      return console.error(message);
    },
    success: function success(message) {
      return console.log(message);
    },
    warning: function warning(message) {
      return console.warn(message);
    }
  },
  onSave: function onSave(evt, formData) {
    return null;
  },
  onClearAll: function onClearAll() {
    return null;
  },
  prepend: false,
  sortableControls: false,
  stickyControls: {
    enable: true,
    offset: {
      top: 5,
      bottom: 'auto',
      right: 'auto'
    }
  },
  templates: {},
  showActionButtons: true,
  typeUserDisabledAttrs: {},
  typeUserAttrs: {},
  typeUserEvents: {},
  prefix: 'form-builder-'
};

var styles = exports.styles = {
  btn: ['default', 'danger', 'info', 'primary', 'success', 'warning']
};

var defaultI18n = exports.defaultI18n = {
  location: 'https://formbuilder.online/assets/lang/',
  langs: ['en-US'],
  preloaded: {
    'en-US': {
      addOption: 'Add Option +',
      allFieldsRemoved: 'All fields were removed.',
      allowMultipleFiles: 'Allow users to upload multiple files',
      autocomplete: 'Autocomplete',
      button: 'Button',
      cannotBeEmpty: 'This field cannot be empty',
      checkboxGroup: 'Checkbox Group',
      checkbox: 'Checkbox',
      checkboxes: 'Checkboxes',
      className: 'Class',
      clearAllMessage: 'Are you sure you want to clear all fields?',
      clear: 'Clear',
      close: 'Close',
      content: 'Content',
      copy: 'Copy To Clipboard',
      copyButton: '&#43;',
      copyButtonTooltip: 'Copy',
      dateField: 'Date Field',
      description: 'Help Text',
      descriptionField: 'Description',
      devMode: 'Developer Mode',
      editNames: 'Edit Names',
      editorTitle: 'Form Elements',
      editXML: 'Edit XML',
      enableOther: 'Enable &quot;Other&quot;',
      enableOtherMsg: 'Let users to enter an unlisted option',
      fieldNonEditable: 'This field cannot be edited.',
      fieldRemoveWarning: 'Are you sure you want to remove this field?',
      fileUpload: 'File Upload',
      formUpdated: 'Form Updated',
      getStarted: 'Drag a field from the right to this area',
      header: 'Header',
      hide: 'Edit',
      hidden: 'Hidden Input',
      inline: 'Inline',
      inlineDesc: 'Display {type} inline',
      label: 'Label',
      labelEmpty: 'Field Label cannot be empty',
      limitRole: 'Limit access to one or more of the following roles:',
      mandatory: 'Mandatory',
      maxlength: 'Max Length',
      minOptionMessage: 'This field requires a minimum of 2 options',
      minSelectionRequired: 'Minimum {min} selections required',
      multipleFiles: 'Multiple Files',
      name: 'Name',
      no: 'No',
      noFieldsToClear: 'There are no fields to clear',
      number: 'Number',
      off: 'Off',
      on: 'On',
      option: 'Option',
      options: 'Options',
      optional: 'optional',
      optionLabelPlaceholder: 'Label',
      optionValuePlaceholder: 'Value',
      optionEmpty: 'Option value required',
      other: 'Other',
      paragraph: 'Paragraph',
      placeholder: 'Placeholder',
      'placeholder.value': 'Value',
      'placeholder.label': 'Label',
      'placeholder.text': '',
      'placeholder.textarea': '',
      'placeholder.email': 'Enter you email',
      'placeholder.placeholder': '',
      'placeholder.className': 'space separated classes',
      'placeholder.password': 'Enter your password',
      preview: 'Preview',
      radioGroup: 'Radio Group',
      radio: 'Radio',
      removeMessage: 'Remove Element',
      removeOption: 'Remove Option',
      remove: '&#215;',
      required: 'Required',
      richText: 'Rich Text Editor',
      roles: 'Access',
      rows: 'Rows',
      save: 'Save',
      selectOptions: 'Options',
      select: 'Select',
      selectColor: 'Select Color',
      selectionsMessage: 'Allow Multiple Selections',
      size: 'Size',
      'size.xs': 'Extra Small',
      'size.sm': 'Small',
      'size.m': 'Default',
      'size.lg': 'Large',
      style: 'Style',
      'styles.btn.default': 'Default',
      'styles.btn.danger': 'Danger',
      'styles.btn.info': 'Info',
      'styles.btn.primary': 'Primary',
      'styles.btn.success': 'Success',
      'styles.btn.warning': 'Warning',
      subtype: 'Type',
      text: 'Text Field',
      textArea: 'Text Area',
      toggle: 'Toggle',
      warning: 'Warning!',
      value: 'Value',
      viewJSON: '{  }',
      viewXML: '&lt;/&gt;',
      yes: 'Yes'
    }
  }
};

var config = exports.config = {};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instanceData = exports.instanceData = {};

var Data = exports.Data = function Data(formID) {
  _classCallCheck(this, Data);

  this.formData = {};
  this.formID = formID;
  this.layout = '';
  instanceData[formID] = this;
};

var availablefields = exports.availablefields = {};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function createNewEvent(eventName) {
  var event = void 0;
  if (typeof Event === 'function') {
    event = new Event(eventName);
  } else {
    event = document.createEvent('Event');
    event.initEvent(eventName, true, true);
  }

  return event;
}

var events = {
  loaded: createNewEvent('loaded'),
  viewData: createNewEvent('viewData'),
  userDeclined: createNewEvent('userDeclined'),
  modalClosed: createNewEvent('modalClosed'),
  modalOpened: createNewEvent('modalOpened'),
  formSaved: createNewEvent('formSaved'),
  fieldAdded: createNewEvent('fieldAdded'),
  fieldRemoved: createNewEvent('fieldRemoved'),
  fieldRendered: createNewEvent('fieldRendered')
};

exports.default = events;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _control2 = __webpack_require__(0);

var _control3 = _interopRequireDefault(_control2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var controlText = function (_control) {
  _inherits(controlText, _control);

  function controlText() {
    _classCallCheck(this, controlText);

    return _possibleConstructorReturn(this, _control.apply(this, arguments));
  }

  controlText.prototype.build = function build() {
    return this.markup('input', null, this.config);
  };

  _createClass(controlText, null, [{
    key: 'definition',
    get: function get() {
      return {
        mi18n: {
          date: 'dateField',
          file: 'fileUpload'
        }
      };
    }
  }]);

  return controlText;
}(_control3.default);

exports.default = controlText;

_control3.default.register(['text', 'file', 'date', 'number'], controlText);
_control3.default.register(['text', 'password', 'email', 'color', 'tel'], controlText, 'text');

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module, process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined;
  var iteratorSymbol = typeof Symbol === "function" && Symbol.iterator || "@@iterator";

  var inModule = ( false ? "undefined" : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      module.exports = runtime;
    }

    return;
  }

  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var generator = Object.create((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  var ContinueSentinel = {};

  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = "GeneratorFunction";

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  runtime.awrap = function (arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    function invoke(method, arg) {
      var result = generator[method](arg);
      var value = result.value;
      return value instanceof AwaitArgument ? Promise.resolve(value.arg).then(invokeNext, invokeThrow) : Promise.resolve(value).then(function (unwrapped) {
        result.value = unwrapped;
        return result;
      });
    }

    if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var invokeNext = invoke.bind(generator, "next");
    var invokeThrow = invoke.bind(generator, "throw");
    var invokeReturn = invoke.bind(generator, "return");
    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return invoke(method, arg);
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : new Promise(function (resolve) {
        resolve(callInvokeWithMethodAndArg());
      });
    }

    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
            context.delegate = null;

            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              continue;
            }
          }

          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

          if (record.type === "throw") {
            context.delegate = null;

            method = "throw";
            arg = record.arg;
            continue;
          }

          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          context._sent = arg;

          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            context.sent = undefined;
          }
        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            method = "next";
            arg = undefined;
          }
        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              arg = undefined;
            }
          } else {
            return info;
          }
        } else if (record.type === "throw") {
          state = GenStateCompleted;

          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
}((typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16), __webpack_require__(17)(module), __webpack_require__(15)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autocomplete = __webpack_require__(18);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _button = __webpack_require__(19);

var _button2 = _interopRequireDefault(_button);

var _custom = __webpack_require__(3);

var _custom2 = _interopRequireDefault(_custom);

var _hidden = __webpack_require__(21);

var _hidden2 = _interopRequireDefault(_hidden);

var _paragraph = __webpack_require__(22);

var _paragraph2 = _interopRequireDefault(_paragraph);

var _select = __webpack_require__(23);

var _select2 = _interopRequireDefault(_select);

var _text = __webpack_require__(9);

var _text2 = _interopRequireDefault(_text);

var _file = __webpack_require__(20);

var _file2 = _interopRequireDefault(_file);

var _textarea = __webpack_require__(5);

var _textarea2 = _interopRequireDefault(_textarea);

var _textarea3 = __webpack_require__(25);

var _textarea4 = _interopRequireDefault(_textarea3);

var _textarea5 = __webpack_require__(24);

var _textarea6 = _interopRequireDefault(_textarea5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  controlAutocomplete: _autocomplete2.default,
  controlButton: _button2.default,
  controlCustom: _custom2.default,
  controlHidden: _hidden2.default,
  controlParagraph: _paragraph2.default,
  controlSelect: _select2.default,
  controlText: _text2.default,
  controlFineUploader: _file2.default,
  controlTextarea: _textarea2.default,
  controlTinymce: _textarea4.default,
  controlQuill: _textarea6.default
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(4);

var _data = __webpack_require__(7);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _events = __webpack_require__(8);

var _events2 = _interopRequireDefault(_events);

var _mi18n = __webpack_require__(2);

var _mi18n2 = _interopRequireDefault(_mi18n);

var _config = __webpack_require__(6);

var _control = __webpack_require__(0);

var _control2 = _interopRequireDefault(_control);

var _custom = __webpack_require__(3);

var _custom2 = _interopRequireDefault(_custom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var m = _utils2.default.markup;

var Helpers = function () {
  function Helpers(formID, layout) {
    _classCallCheck(this, Helpers);

    this.data = _data.instanceData[formID];
    this.d = _dom.instanceDom[formID];
    this.doCancel = false;
    this.layout = layout;
  }

  Helpers.prototype.startMoving = function startMoving(event, ui) {
    ui.item.show().addClass('moving');
    this.doCancel = true;
    this.from = ui.item.parent();
  };

  Helpers.prototype.stopMoving = function stopMoving(event, ui) {
    var _this = this;
    ui.item.removeClass('moving');
    if (_this.doCancel) {
      if (ui.sender) {
        $(ui.sender).sortable('cancel');
      }
      this.from.sortable('cancel');
    }
    _this.save();
    _this.doCancel = false;
  };

  Helpers.prototype.beforeStop = function beforeStop(event, ui) {
    var _this = this;
    var opts = _config.config.opts;
    var form = _this.d.stage;
    var lastIndex = form.childNodes.length - 1;
    var cancelArray = [];
    _this.stopIndex = ui.placeholder.index() - 1;

    if (!opts.sortableControls && ui.item.parent().hasClass('frmb-control')) {
      cancelArray.push(true);
    }

    if (opts.prepend) {
      cancelArray.push(_this.stopIndex === 0);
    }

    if (opts.append) {
      cancelArray.push(_this.stopIndex + 1 === lastIndex);
    }

    _this.doCancel = cancelArray.some(function (elem) {
      return elem === true;
    });
  };

  Helpers.prototype.getTypes = function getTypes($field) {
    var types = {
      type: $field.attr('type')
    };
    var subtype = $('.fld-subtype', $field).val();

    if (subtype !== types.type) {
      types.subtype = subtype;
    }

    return types;
  };

  Helpers.prototype.fieldOptionData = function fieldOptionData(field) {
    var options = [];
    var $options = $('.sortable-options li', field);

    $options.each(function (i) {
      var $option = $($options[i]);
      var selected = $('.option-selected', $option).is(':checked');
      var attrs = {
        label: $('.option-label', $option).val(),
        value: $('.option-value', $option).val()
      };

      if (selected) {
        attrs.selected = selected;
      }

      options.push(attrs);
    });

    return options;
  };

  Helpers.prototype.xmlSave = function xmlSave(form) {
    var formData = this.prepData(form);
    var xml = ['<form-template>\n\t<fields>'];

    _utils2.default.forEach(formData, function (fieldIndex, field) {
      var fieldContent = null;
      var optionFields = _dom.optionFieldsRegEx;

      if (field.type.match(optionFields)) {
        var fieldOptions = field.values;
        var options = [];

        for (var i = 0; i < fieldOptions.length; i++) {
          var oData = fieldOptions[i];
          var option = m('option', oData.label, oData).outerHTML;
          options.push('\n\t\t\t' + option);
        }
        options.push('\n\t\t');

        fieldContent = options.join('');
        delete field.values;
      }

      var xmlField = m('field', fieldContent, field);
      xml.push('\n\t\t' + xmlField.outerHTML);
    });

    xml.push('\n\t</fields>\n</form-template>');

    return xml.join('');
  };

  Helpers.prototype.prepData = function prepData(form) {
    var formData = [];
    var d = this.d;
    var _this = this;

    if (form.childNodes.length !== 0) {
      _utils2.default.forEach(form.childNodes, function (index, field) {
         if(field.childElementCount !== undefined) {
          var $field = $(field);

          if (!$field.hasClass('disabled-field')) {
            var fieldData = _this.getTypes($field);
            var $roleInputs = $('.roles-field:checked', field);
            var roleVals = $roleInputs.map(function (index) {
              return $roleInputs[index].value;
            }).get();

            _this.setAttrVals(field, fieldData);

            if (fieldData.subtype) {
              if (fieldData.subtype === 'quill') {
                var id = fieldData.name + '-preview';
                if (window.fbEditors.quill[id]) {
                  var instance = window.fbEditors.quill[id].instance;
                  var data = instance.getContents();
                  fieldData.value = window.JSON.stringify(data.ops);
                }
              } else if (fieldData.subtype === 'tinymce' && window.tinymce) {
                var _id = fieldData.name + '-preview';
                if (window.tinymce.editors[_id]) {
                  var editor = window.tinymce.editors[_id];
                  fieldData.value = editor.getContent();
                }
              }
            }

            if (roleVals.length) {
              fieldData.role = roleVals.join(',');
            }

            fieldData.className = fieldData.className || fieldData.class;

            if (fieldData.className) {
              var match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(fieldData.className);
              if (match) {
                fieldData.style = match[1];
              }
            }

            fieldData = _utils2.default.trimObj(fieldData);

            var multipleField = fieldData.type && fieldData.type.match(d.optionFieldsRegEx);

            if (multipleField) {
              fieldData.values = _this.fieldOptionData($field);
            }

            formData.push(fieldData);
          }
         }
      });
    }

    return formData;
  };

  Helpers.prototype.getData = function getData(formData) {
    var data = this.data;
    if (!formData) {
      formData = _config.config.opts.formData;
    }

    if (!formData) {
      return false;
    }

    var setData = {
      xml: function xml(formData) {
        return _utils2.default.parseXML(formData);
      },
      json: function json(formData) {
        return window.JSON.parse(formData);
      }
    };

    data.formData = setData[_config.config.opts.dataType](formData) || [];

    return data.formData;
  };

  Helpers.prototype.save = function save(stage) {
    var _this = this;
    var data = this.data;
    if (!stage) {
      stage = this.d.stage;
    }
    var doSave = {
      xml: function xml() {
        return _this.xmlSave(stage);
      },
      json: function json() {
        return window.JSON.stringify(_this.prepData(stage), null, '\t');
      }
    };

    data.formData = doSave[_config.config.opts.dataType](stage);

    document.dispatchEvent(_events2.default.formSaved);
    return data.formData;
  };

  Helpers.prototype.incrementId = function incrementId(id) {
    var split = id.lastIndexOf('-');
    var newFieldNumber = parseInt(id.substring(split + 1)) + 1;
    var baseString = id.substring(0, split);

    return baseString + '-' + newFieldNumber;
  };

  Helpers.prototype.setAttrVals = function setAttrVals(field, fieldData) {
    var attrs = field.querySelectorAll('[class*="fld-"]');
    _utils2.default.forEach(attrs, function (index) {
      var attr = attrs[index];
      var value = void 0;
      var name = _utils2.default.camelCase(attr.getAttribute('name'));
      if (attr.attributes['contenteditable']) {
        value = attr.innerHTML;
      } else if (attr.type === 'checkbox') {
        value = attr.checked;
      } else {
        value = attr.value;
      }
      fieldData[name] = value;
    });
  };

  Helpers.prototype.updatePreview = function updatePreview($field) {
    var _this = this;
    var d = this.d;
    var fieldClass = $field.attr('class');
    var field = $field[0];
    if (fieldClass.indexOf('input-control') !== -1) {
      return;
    }

    var fieldType = $field.attr('type');
    var $prevHolder = $('.prev-holder', field);
    var previewData = {
      type: fieldType
    };
    var preview = void 0;

    _this.setAttrVals(field, previewData);

    var style = $('.btn-style', field).val();
    if (style) {
      previewData.style = style;
    }

    if (fieldType.match(d.optionFieldsRegEx)) {
      previewData.values = [];
      previewData.multiple = $('[name="multiple"]', field).is(':checked');

      $('.sortable-options li', field).each(function (i, $option) {
        var option = {};
        option.selected = $('.option-selected', $option).is(':checked');
        option.value = $('.option-value', $option).val();
        option.label = $('.option-label', $option).val();
        previewData.values.push(option);
      });
    }

    previewData = _utils2.default.trimObj(previewData);

    previewData.className = _this.classNames(field, previewData);
    $('.fld-className', field).val(previewData.className);

    $field.data('fieldData', previewData);

    var custom = _custom2.default.lookup(previewData.type);
    var controlClass = custom ? custom.class : _control2.default.getClass(previewData.type, previewData.subtype);
    preview = this.layout.build(controlClass, previewData);

    (0, _dom.empty)($prevHolder[0]);
    $prevHolder[0].appendChild(preview);
    preview.dispatchEvent(_events2.default.fieldRendered);
  };

  Helpers.prototype.disabledTT = function disabledTT(stage) {
    var move = function move(e, elem) {
      var fieldOffset = elem.field.getBoundingClientRect();
      var x = e.clientX - fieldOffset.left - 21;
      var y = e.clientY - fieldOffset.top - elem.tt.offsetHeight - 12;
      elem.tt.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    };

    var disabledFields = stage.querySelectorAll('.disabled-field');
    _utils2.default.forEach(disabledFields, function (index) {
      var field = disabledFields[index];
      var title = _mi18n2.default.get('fieldNonEditable');

      if (title) {
        var tt = _utils2.default.markup('p', title, { className: 'frmb-tt' });
        field.appendChild(tt);
        field.addEventListener('mousemove', function (e) {
          return move(e, { tt: tt, field: field });
        });
      }
    });
  };

  Helpers.prototype.classNames = function classNames(field, previewData) {
    var className = field.querySelector('.fld-className');
    if (!className) {
      return;
    }
    var i = void 0;
    var type = previewData.type;
    var style = previewData.style;
    var classes = className.value.split(' ');
    var types = {
      button: 'btn',
      submit: 'btn'
    };

    var primaryType = types[type];

    if (primaryType) {
      if (style) {
        for (i = 0; i < classes.length; i++) {
          var re = new RegExp('(?:^|s)' + primaryType + '-(.*?)(?:s|$)+', 'g');
          var match = classes[i].match(re);
          if (match) {
            classes.splice(i, 1);
          }
        }
        classes.push(primaryType + '-' + style);
      }
      classes.push(primaryType);
    }

    return _utils2.default.unique(classes).join(' ').trim();
  };

  Helpers.prototype.closeConfirm = function closeConfirm(overlay, dialog) {
    if (!overlay) {
      overlay = document.getElementsByClassName('form-builder-overlay')[0];
    }
    if (!dialog) {
      dialog = document.getElementsByClassName('form-builder-dialog')[0];
    }
    overlay.classList.remove('visible');
    (0, _dom.remove)(dialog);
    (0, _dom.remove)(overlay);
    document.dispatchEvent(_events2.default.modalClosed);
  };

  Helpers.prototype.editorLayout = function editorLayout(controlPosition) {
    var layoutMap = {
      left: {
        stage: 'pull-right',
        controls: 'pull-left'
      },
      right: {
        stage: 'pull-left',
        controls: 'pull-right'
      }
    };

    return layoutMap[controlPosition] || '';
  };

  Helpers.prototype.showOverlay = function showOverlay() {
    var _this = this;
    var overlay = _utils2.default.markup('div', null, {
      className: 'form-builder-overlay'
    });
    document.body.appendChild(overlay);
    overlay.classList.add('visible');

    overlay.onclick = function () {
      _this.closeConfirm(overlay);
    };

    return overlay;
  };

  Helpers.prototype.confirm = function confirm(message, yesAction) {
    var coords = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    var _this = this;
    var i18n = _mi18n2.default.current;
    var overlay = _this.showOverlay();
    var yes = m('button', i18n.yes, {
      className: 'yes btn btn-success btn-sm'
    });
    var no = m('button', i18n.no, {
      className: 'no btn btn-danger btn-sm'
    });

    no.onclick = function () {
      _this.closeConfirm(overlay);
    };

    yes.onclick = function () {
      yesAction();
      _this.closeConfirm(overlay);
    };

    var btnWrap = m('div', [no, yes], { className: 'button-wrap' });

    className = 'form-builder-dialog ' + className;

    var miniModal = m('div', [message, btnWrap], { className: className });
    if (!coords) {
      var dE = document.documentElement;
      coords = {
        pageX: Math.max(dE.clientWidth, window.innerWidth || 0) / 2,
        pageY: Math.max(dE.clientHeight, window.innerHeight || 0) / 2
      };
      miniModal.style.position = 'fixed';
    } else {
      miniModal.classList.add('positioned');
    }

    miniModal.style.left = coords.pageX + 'px';
    miniModal.style.top = coords.pageY + 'px';

    document.body.appendChild(miniModal);

    yes.focus();
    return miniModal;
  };

  Helpers.prototype.dialog = function dialog(content) {
    var coords = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    var _this = this;
    var clientWidth = document.documentElement.clientWidth;
    var clientHeight = document.documentElement.clientHeight;
    _this.showOverlay();

    className = 'form-builder-dialog ' + className;

    var miniModal = _utils2.default.markup('div', content, { className: className });
    if (!coords) {
      coords = {
        pageX: Math.max(clientWidth, window.innerWidth || 0) / 2,
        pageY: Math.max(clientHeight, window.innerHeight || 0) / 2
      };
      miniModal.style.position = 'fixed';
    } else {
      miniModal.classList.add('positioned');
    }

    miniModal.style.left = coords.pageX + 'px';
    miniModal.style.top = coords.pageY + 'px';

    document.body.appendChild(miniModal);

    document.dispatchEvent(_events2.default.modalOpened);

    if (className.indexOf('data-dialog') !== -1) {
      document.dispatchEvent(_events2.default.viewData);
    }

    return miniModal;
  };

  Helpers.prototype.confirmRemoveAll = function confirmRemoveAll(e) {
    var _this = this;
    var formID = e.target.id.match(/frmb-\d{13}/)[0];
    var stage = document.getElementById(formID);
    var i18n = _mi18n2.default.current;
    var fields = $('li.form-field', stage);
    var buttonPosition = e.target.getBoundingClientRect();
    var bodyRect = document.body.getBoundingClientRect();
    var coords = {
      pageX: buttonPosition.left + buttonPosition.width / 2,
      pageY: buttonPosition.top - bodyRect.top - 12
    };

    if (fields.length) {
      _this.confirm(i18n.clearAllMessage, function () {
        _this.removeAllFields.call(_this, stage);
        _config.config.opts.notify.success(i18n.allFieldsRemoved);
        _config.config.opts.onClearAll();
      }, coords);
    } else {
      _this.dialog(i18n.noFieldsToClear, coords);
    }
  };

  Helpers.prototype.removeAllFields = function removeAllFields(stage) {
    var _this2 = this;

    var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var i18n = _mi18n2.default.current;
    var opts = _config.config.opts;
    var fields = stage.querySelectorAll('li.form-field');
    var markEmptyArray = [];

    if (!fields.length) {
      return false;
    }

    if (opts.prepend) {
      markEmptyArray.push(true);
    }

    if (opts.append) {
      markEmptyArray.push(true);
    }

    if (!markEmptyArray.some(function (elem) {
      return elem === true;
    })) {
      stage.parentElement.classList.add('empty');
      stage.parentElement.dataset.content = i18n.getStarted;
    }

    if (animate) {
      stage.classList.add('removing');
      var outerHeight = 0;
      _utils2.default.forEach(fields, function (index) {
        return outerHeight += fields[index].offsetHeight + 3;
      });
      fields[0].style.marginTop = -outerHeight + 'px';
      setTimeout(function () {
        (0, _dom.empty)(stage).classList.remove('removing');
        _this2.save();
      }, 400);
    } else {
      (0, _dom.empty)(stage);
      this.save();
    }
  };

  Helpers.prototype.setFieldOrder = function setFieldOrder($cbUL) {
    if (!_config.config.opts.sortableControls) {
      return false;
    }
    var _window = window,
        sessionStorage = _window.sessionStorage,
        JSON = _window.JSON;


    var fieldOrder = [];

    $cbUL.children().each(function (index, element) {
      var type = $(element).data('type');
      if (type) {
        fieldOrder.push(type);
      }
    });

    if (sessionStorage) {
      sessionStorage.setItem('fieldOrder', JSON.stringify(fieldOrder));
    }
    return fieldOrder;
  };

  Helpers.prototype.orderFields = function orderFields(controls) {
    var opts = _config.config.opts;
    var controlOrder = opts.controlOrder.concat(controls);
    var fieldOrder = void 0;

    if (window.sessionStorage) {
      if (opts.sortableControls) {
        fieldOrder = window.sessionStorage.getItem('fieldOrder');
      } else {
        window.sessionStorage.removeItem('fieldOrder');
      }
    }

    if (!fieldOrder) {
      fieldOrder = _utils2.default.unique(controlOrder);
    } else {
      fieldOrder = window.JSON.parse(fieldOrder);
      fieldOrder = _utils2.default.unique(fieldOrder.concat(controls));
      fieldOrder = Object.keys(fieldOrder).map(function (i) {
        return fieldOrder[i];
      });
    }

    fieldOrder.forEach(function (field) {
      var randomKey = new RegExp('-[\\d]{4}$');

      if (field.match(randomKey)) {
        var baseFieldIndex = fieldOrder.indexOf(field.replace(randomKey, ''));
        if (baseFieldIndex !== -1) {
          fieldOrder.splice(fieldOrder.indexOf(field), 1);
          fieldOrder.splice(baseFieldIndex + 1, fieldOrder.indexOf(field), field);
        }
      }
    });

    if (opts.disableFields.length) {
      fieldOrder = fieldOrder.filter(function (type) {
        return opts.disableFields.indexOf(type) == -1;
      });
    }

    return fieldOrder.filter(Boolean);
  };

  Helpers.prototype.closeAllEdit = function closeAllEdit() {
    var _this = this;
    var fields = $('> li.editing', _this.d.stage);
    var toggleBtns = $('.toggle-form', _this.d.stage);
    var editPanels = $('.frm-holder', fields);

    toggleBtns.removeClass('open');
    fields.removeClass('editing');
    $('.prev-holder', fields).show();
    editPanels.hide();
  };

  Helpers.prototype.toggleEdit = function toggleEdit(fieldId) {
    var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var field = document.getElementById(fieldId);
    var toggleBtn = $('.toggle-form', field);
    if (!toggleBtn.length) return;
    var editPanel = $('.frm-holder', field);
    field.classList.toggle('editing');
    toggleBtn.toggleClass('open');
    if (animate) {
      $('.prev-holder', field).slideToggle(250);
      editPanel.slideToggle(250);
    } else {
      $('.prev-holder', field).toggle();
      editPanel.toggle();
    }
    this.updatePreview($(field));
  };

  Helpers.prototype.stickyControls = function stickyControls() {
    var d = this.d;
    var $cbWrap = $(d.controls).parent();
    var $stageWrap = $(d.stage).parent();
    var cbWidth = $cbWrap.width();
    var cbPosition = d.controls.getBoundingClientRect();

    $(window).scroll(function (evt) {
      var scrollTop = $(evt.target).scrollTop();
      var offsetDefaults = {
        top: 5,
        bottom: 'auto',
        right: 'auto',
        left: cbPosition.left
      };

      var offset = Object.assign({}, offsetDefaults, _config.config.opts.stickyControls.offset);

      if (scrollTop > $stageWrap.offset().top) {
        var style = {
          // position: 'fixed',
          width: cbWidth
        };

        var cbStyle = Object.assign(style, offset);

        var cbOffset = $cbWrap.offset();
        var stageOffset = $stageWrap.offset();
        var cbBottom = cbOffset.top + $cbWrap.height();
        var stageBottom = stageOffset.top + $stageWrap.height();
        var atBottom = cbBottom === stageBottom && cbOffset.top > scrollTop;

        if (cbBottom > stageBottom && cbOffset.top !== stageOffset.top) {
          $cbWrap.css({
            position: 'absolute',
            top: 'auto',
            bottom: 0,
            right: 0,
            left: 'auto'
          });
        }

        if (cbBottom < stageBottom || atBottom) {
          $cbWrap.css(cbStyle);
        }
      } else {
        d.controls.parentElement.removeAttribute('style');
      }
    });
  };

  Helpers.prototype.showData = function showData() {
    var data = this.data;
    var formData = _utils2.default.escapeHtml(data.formData);
    var code = m('code', formData, {
      className: 'formData-' + _config.config.opts.dataType
    });

    this.dialog(m('pre', code), null, 'data-dialog');
  };

  Helpers.prototype.removeField = function removeField(fieldID) {
    var animationSpeed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;

    var fieldRemoved = false;
    var _this = this;
    var form = this.d.stage;
    var fields = form.getElementsByClassName('form-field');

    if (!fields.length) {
      console.warn('No fields to remove');
      return false;
    }

    if (!fieldID) {
      var availableIds = [].slice.call(fields).map(function (field) {
        return field.id;
      });
      console.warn('fieldID required to remove specific fields.');
      console.warn('Removing last field since no ID was supplied.');
      console.warn('Available IDs: ' + availableIds.join(', '));
      fieldID = form.lastChild.id;
    }

    var field = document.getElementById(fieldID);
    var $field = $(field);
    if (!field) {
      console.warn('Field not found');
      return false;
    }

    $field.slideUp(animationSpeed, function () {
      $field.removeClass('deleting');
      $field.remove();
      fieldRemoved = true;
      _this.save();
      if (!form.childNodes.length) {
        var stageWrap = form.parentElement;
        stageWrap.classList.add('empty');
        stageWrap.dataset.content = _mi18n2.default.current.getStarted;
      }
    });

    document.dispatchEvent(_events2.default.fieldRemoved);
    return fieldRemoved;
  };

  Helpers.prototype.processActionButtons = function processActionButtons(buttonData) {
    var label = buttonData.label,
        events = buttonData.events,
        attrs = _objectWithoutProperties(buttonData, ['label', 'events']);

    var data = this.data;
    if (!label) {
      if (attrs.id) {
        label = _mi18n2.default.current[attrs.id] || _utils2.default.capitalize(attrs.id);
      } else {
        label = '';
      }
    } else {
      label = _mi18n2.default.current[label] || label;
    }

    if (!attrs.id) {
      attrs.id = data.formID + '-action-' + Math.round(Math.random() * 1000);
    } else {
      attrs.id = data.formID + '-' + attrs.id + '-action';
    }

    var button = m('button', label, attrs);

    if (events) {
      var _loop = function _loop(event) {
        if (events.hasOwnProperty(event)) {
          button.addEventListener(event, function (evt) {
            return events[event](evt);
          });
        }
      };

      for (var event in events) {
        _loop(event);
      }
    }

    return button;
  };

  Helpers.prototype.processSubtypes = function processSubtypes(subtypeOpts) {
    for (var fieldType in subtypeOpts) {
      if (subtypeOpts.hasOwnProperty(fieldType)) {
        var controlClass = _control2.default.getClass(fieldType);
        _control2.default.register(subtypeOpts[fieldType], controlClass, fieldType);
      }
    }

    var subtypeDef = _control2.default.getRegisteredSubtypes();

    var subtypes = {};
    for (var _fieldType in subtypeDef) {
      if (subtypeDef.hasOwnProperty(_fieldType)) {
        var formatted = [];
        for (var _iterator = subtypeDef[_fieldType], _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var subtype = _ref;

          var _controlClass = _control2.default.getClass(_fieldType, subtype);
          formatted.push({
            label: _controlClass.mi18n(subtype),
            value: subtype
          });
        }
        subtypes[_fieldType] = formatted;
      }
    }

    return subtypes;
  };

  Helpers.prototype.editorUI = function editorUI(formID) {
    var d = this.d;
    var data = this.data;
    d.stage = m('ul', null, {
      id: data.formID,
      className: 'frmb'
    });

    d.controls = m('ul', null, {
      id: data.formID + '-control-box',
      className: 'frmb-control'
    });
  };

  Helpers.prototype.processOptions = function processOptions(options) {
    var _this = this;

    var actionButtons = options.actionButtons,
        replaceFields = options.replaceFields,
        opts = _objectWithoutProperties(options, ['actionButtons', 'replaceFields']);

    actionButtons = [{
      type: 'button',
      id: 'clear',
      className: 'clear-all btn btn-danger',
      events: {
        click: _this.confirmRemoveAll.bind(_this)
      }
    }, {
      type: 'button',
      label: 'viewJSON',
      id: 'data',
      className: 'btn btn-default get-data',
      events: {
        click: _this.showData.bind(_this)
      }
    }, {
      type: 'button',
      id: 'save',
      className: 'btn btn-primary save-template',
      events: {
        click: function click(evt) {
          _this.save();
          _config.config.opts.onSave(evt, _this.data.formData);
        }
      }
    }].concat(options.actionButtons);
    opts.fields = opts.fields.concat(replaceFields);
    opts.disableFields = opts.disableFields.concat(replaceFields.map(function (_ref2) {
      var type = _ref2.type;
      return type && type;
    }));
    _config.config.opts = Object.assign({}, { actionButtons: actionButtons }, opts);
    return _config.config.opts;
  };

  Helpers.prototype.input = function input() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return m('input', null, attrs);
  };

  Helpers.prototype.getFormData = function getFormData() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'js';
    var formatted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var h = this;
    var data = {
      js: function js() {
        return h.prepData(h.d.stage);
      },
      xml: function xml() {
        return h.xmlSave(h.d.stage);
      },
      json: function json(formatted) {
        var formData = void 0;
        if (formatted) {
          formData = window.JSON.stringify(h.prepData(h.d.stage), null, '\t');
        } else {
          formData = window.JSON.stringify(h.prepData(h.d.stage));
        }
        return formData;
      }
    };

    return data[type](formatted);
  };

  return Helpers;
}();

exports.default = Helpers;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var layout = function () {
  function layout(templates, preview) {
    var _this = this;

    _classCallCheck(this, layout);

    this.preview = preview;

    this.templates = {
      label: null,
      help: null,
      default: function _default(field, label, help, data) {
        if (help) {
          label.appendChild(help);
        }

        var className = data.id ? 'fb-' + data.type + ' form-group field-' + data.id : '';
        return _this.markup('div', [label, field], {
          className: className
        });
      },
      noLabel: function noLabel(field, label, help, data) {
        var className = data.id ? 'fb-' + data.type + ' form-group field-' + data.id : '';
        return _this.markup('div', field, {
          className: className
        });
      },
      hidden: function hidden(field, label, help, data) {
        return field;
      }
    };

    if (templates) {
      this.templates = $.extend(this.templates, templates);
    }
    this.configure();
  }

  layout.prototype.configure = function configure() {};

  layout.prototype.build = function build(renderControl, data, forceTemplate) {
    if (this.preview) {
      if (data.name) {
        data.name = data.name + '-preview';
      } else {
        data.name = _utils2.default.nameAttr(data) + '-preview';
      }
    }
    data.id = data.name;
    this.data = $.extend({}, data);

    var control = new renderControl(data, this.preview);
    var field = control.build();
    if ((typeof field === 'undefined' ? 'undefined' : _typeof(field)) !== 'object' || !field.field) {
      field = { field: field };
    }

    var label = this.label();
    var help = this.help();

    var elementTemplate = void 0;
    if (forceTemplate && this.isTemplate(forceTemplate)) {
      elementTemplate = forceTemplate;
    } else {
      elementTemplate = this.isTemplate(field.layout) ? field.layout : 'default';
    }
    var element = this.processTemplate(elementTemplate, field.field, label, help);

    control.on('prerender')(element);

    element.addEventListener('fieldRendered', control.on('render'));
    return element;
  };

  layout.prototype.label = function label() {
    var label = this.data.label || '';
    var labelText = _utils2.default.parsedHtml(label);
    var labelContents = [labelText];
    if (this.data.required) {
      labelContents.push(this.markup('span', '*', { className: 'fb-required' }));
    }

    if (this.isTemplate('label')) {
      return this.processTemplate('label', labelContents);
    }

    return this.markup('label', labelContents, {
      for: this.data.id,
      className: 'fb-' + this.data.type + '-label'
    });
  };

  layout.prototype.help = function help() {
    if (!this.data.description) {
      return null;
    }

    if (this.isTemplate('help')) {
      return this.processTemplate('help', this.data.description);
    }

    return this.markup('span', '?', {
      className: 'tooltip-element',
      tooltip: this.data.description
    });
  };

  layout.prototype.isTemplate = function isTemplate(template) {
    return typeof this.templates[template] === 'function';
  };

  layout.prototype.processTemplate = function processTemplate(template) {
    var _templates;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var processed = (_templates = this.templates)[template].apply(_templates, args.concat([this.data]));
    if (processed.jquery) {
      processed = processed[0];
    }
    return processed;
  };

  layout.prototype.markup = function markup(tag) {
    var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return _utils2.default.markup(tag, content, attributes);
  };

  return layout;
}();

exports.default = layout;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var process = module.exports = {};

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        return setTimeout(fun, 0);
    }

    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        return clearTimeout(marker);
    }

    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = '';
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

g = function () {
  return this;
}();

try {
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

module.exports = g;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _control2 = __webpack_require__(0);

var _control3 = _interopRequireDefault(_control2);

var _dom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var controlAutocomplete = function (_control) {
  _inherits(controlAutocomplete, _control);

  function controlAutocomplete() {
    _classCallCheck(this, controlAutocomplete);

    return _possibleConstructorReturn(this, _control.apply(this, arguments));
  }

  controlAutocomplete.prototype.build = function build() {
    var _this2 = this;

    var _config = this.config,
        values = _config.values,
        type = _config.type,
        data = _objectWithoutProperties(_config, ['values', 'type']);

    var keyboardNav = function keyboardNav(e) {
      var list = e.target.nextSibling.nextSibling;
      var hiddenField = e.target.nextSibling;
      var activeOption = _this2.getActiveOption(list);
      var keyCodeMapVals = [[38, function () {
        var previous = _this2.getPreviousOption(activeOption);
        if (previous) {
          _this2.selectOption(list, previous);
        }
      }], [40, function () {
        var next = _this2.getNextOption(activeOption);
        if (next) {
          _this2.selectOption(list, next);
        }
      }], [13, function () {
        if (activeOption) {
          e.target.value = activeOption.innerHTML;
          hiddenField.value = activeOption.getAttribute('value');
          if (list.style.display === 'none') {
            _this2.showList(list, activeOption);
          } else {
            _this2.hideList(list);
          }
        }
        e.preventDefault();
      }], [27, function () {
        _this2.hideList(list);
      }]];
      var keyCodeMap = new Map(keyCodeMapVals);

      var direction = keyCodeMap.get(e.keyCode);
      if (!direction) {
        direction = function direction() {
          return false;
        };
      }

      return direction();
    };
    var fauxEvents = {
      focus: function focus(evt) {
        var list = evt.target.nextSibling.nextSibling;
        var filteredOptions = (0, _dom.filter)(list.querySelectorAll('li'), evt.target.value);
        evt.target.addEventListener('keydown', keyboardNav);
        if (evt.target.value.length > 0) {
          var selectedOption = filteredOptions.length > 0 ? filteredOptions[filteredOptions.length - 1] : null;
          _this2.showList(list, selectedOption);
        }
      },
      blur: function blur(evt) {
        evt.target.removeEventListener('keydown', keyboardNav);
        setTimeout(function () {
          evt.target.nextSibling.nextSibling.style.display = 'none';
        }, 200);
      },
      input: function input(evt) {
        var list = evt.target.nextSibling.nextSibling;
        var hiddenField = evt.target.nextSibling;
        hiddenField.value = evt.target.value;
        var filteredOptions = (0, _dom.filter)(list.querySelectorAll('li'), evt.target.value);
        if (filteredOptions.length == 0) {
          _this2.hideList(list);
        } else {
          var activeOption = _this2.getActiveOption(list);
          if (!activeOption) {
            activeOption = filteredOptions[filteredOptions.length - 1];
          }
          _this2.showList(list, activeOption);
        }
      }
    };
    var fauxAttrs = Object.assign({}, data, {
      id: data.id + '-input',
      autocomplete: 'off',
      events: fauxEvents
    });
    var hiddenAttrs = Object.assign({}, data, { type: 'hidden' });
    delete fauxAttrs.name;
    var field = [this.markup('input', null, fauxAttrs), this.markup('input', null, hiddenAttrs)];

    var options = values.map(function (optionData) {
      var label = optionData.label;
      var config = {
        events: {
          click: function click(evt) {
            var list = evt.target.parentElement;
            var field = list.previousSibling.previousSibling;
            field.value = optionData.label;
            field.nextSibling.value = optionData.value;
            _this2.hideList(list);
          }
        },
        value: optionData.value
      };
      return _this2.markup('li', label, config);
    });

    field.push(this.markup('ul', options, { id: data.id + '-list', className: 'fb-' + type + '-list' }));
    return field;
  };

  controlAutocomplete.prototype.hideList = function hideList(list) {
    this.selectOption(list, null);
    list.style.display = 'none';
  };

  controlAutocomplete.prototype.showList = function showList(list, selectedOption) {
    this.selectOption(list, selectedOption);
    list.style.display = 'block';
    list.style.width = list.parentElement.offsetWidth + 'px';
  };

  controlAutocomplete.prototype.getActiveOption = function getActiveOption(list) {
    var activeOption = list.getElementsByClassName('active-option')[0];
    if (activeOption && activeOption.style.display !== 'none') {
      return activeOption;
    }
    return null;
  };

  controlAutocomplete.prototype.getPreviousOption = function getPreviousOption(current) {
    var previous = current;
    do {
      previous = previous ? previous.previousSibling : null;
    } while (previous != null && previous.style.display === 'none');
    return previous;
  };

  controlAutocomplete.prototype.getNextOption = function getNextOption(current) {
    var next = current;
    do {
      next = next ? next.nextSibling : null;
    } while (next != null && next.style.display === 'none');
    return next;
  };

  controlAutocomplete.prototype.selectOption = function selectOption(list, selectedOption) {
    var options = list.querySelectorAll('li');
    options.forEach(function (option) {
      option.classList.remove('active-option');
    });
    if (selectedOption) {
      selectedOption.classList.add('active-option');
    }
  };

  controlAutocomplete.prototype.onRender = function onRender(evt) {};

  return controlAutocomplete;
}(_control3.default);

exports.default = controlAutocomplete;

_control3.default.register('autocomplete', controlAutocomplete);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _control2 = __webpack_require__(0);

var _control3 = _interopRequireDefault(_control2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var controlButton = function (_control) {
  _inherits(controlButton, _control);

  function controlButton() {
    _classCallCheck(this, controlButton);

    return _possibleConstructorReturn(this, _control.apply(this, arguments));
  }

  controlButton.prototype.build = function build() {
    return {
      field: this.markup('button', this.label, this.config),
      layout: 'noLabel'
    };
  };

  return controlButton;
}(_control3.default);

exports.default = controlButton;

_control3.default.register('button', controlButton);
_control3.default.register(['button', 'submit', 'reset'], controlButton, 'button');

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(9);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var controlFineUploader = function (_controlText) {
  _inherits(controlFineUploader, _controlText);

  function controlFineUploader() {
    _classCallCheck(this, controlFineUploader);

    return _possibleConstructorReturn(this, _controlText.apply(this, arguments));
  }

  controlFineUploader.prototype.configure = function configure() {
    var _this2 = this;

    this.js = this.classConfig.js || '//cdnjs.cloudflare.com/ajax/libs/file-uploader/5.14.2/jquery.fine-uploader/jquery.fine-uploader.min.js';
    this.css = [this.classConfig.css || '//cdnjs.cloudflare.com/ajax/libs/file-uploader/5.14.2/jquery.fine-uploader/fine-uploader-gallery.min.css', {
      type: 'inline',
      id: 'fineuploader-inline',
      style: '\n          .qq-uploader .qq-error-message {\n            position: absolute;\n            left: 20%;\n            top: 20px;\n            width: 60%;\n            color: #a94442;\n            background: #f2dede;\n            border: solid 1px #ebccd1;\n            padding: 15px;\n            line-height: 1.5em;\n            text-align: center;\n            z-index: 99999;\n          }\n          .qq-uploader .qq-error-message span {\n            display: inline-block;\n            text-align: left;\n          }'
    }];
    this.handler = this.classConfig.handler || '/upload';
    ['js', 'css', 'handler'].forEach(function (key) {
      return delete _this2.classConfig[key];
    });

    var template = this.classConfig.template || '\n      <div class="qq-uploader-selector qq-uploader qq-gallery" qq-drop-area-text="Drop files here">\n        <div class="qq-total-progress-bar-container-selector qq-total-progress-bar-container">\n          <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-total-progress-bar-selector qq-progress-bar qq-total-progress-bar"></div>\n        </div>\n        <div class="qq-upload-drop-area-selector qq-upload-drop-area" qq-hide-dropzone>\n          <span class="qq-upload-drop-area-text-selector"></span>\n        </div>\n        <div class="qq-upload-button-selector qq-upload-button">\n          <div>Upload a file</div>\n        </div>\n        <span class="qq-drop-processing-selector qq-drop-processing">\n          <span>Processing dropped files...</span>\n          <span class="qq-drop-processing-spinner-selector qq-drop-processing-spinner"></span>\n        </span>\n        <ul class="qq-upload-list-selector qq-upload-list" role="region" aria-live="polite" aria-relevant="additions removals">\n          <li>\n            <span role="status" class="qq-upload-status-text-selector qq-upload-status-text"></span>\n            <div class="qq-progress-bar-container-selector qq-progress-bar-container">\n              <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-progress-bar-selector qq-progress-bar"></div>\n            </div>\n            <span class="qq-upload-spinner-selector qq-upload-spinner"></span>\n            <div class="qq-thumbnail-wrapper">\n              <img class="qq-thumbnail-selector" qq-max-size="120" qq-server-scale>\n            </div>\n            <button type="button" class="qq-upload-cancel-selector qq-upload-cancel">X</button>\n            <button type="button" class="qq-upload-retry-selector qq-upload-retry">\n              <span class="qq-btn qq-retry-icon" aria-label="Retry"></span>\n              Retry\n            </button>\n            <div class="qq-file-info">\n              <div class="qq-file-name">\n                <span class="qq-upload-file-selector qq-upload-file"></span>\n                <span class="qq-edit-filename-icon-selector qq-btn qq-edit-filename-icon" aria-label="Edit filename"></span>\n              </div>\n              <input class="qq-edit-filename-selector qq-edit-filename" tabindex="0" type="text">\n              <span class="qq-upload-size-selector qq-upload-size"></span>\n              <button type="button" class="qq-btn qq-upload-delete-selector qq-upload-delete">\n                <span class="qq-btn qq-delete-icon" aria-label="Delete"></span>\n              </button>\n              <button type="button" class="qq-btn qq-upload-pause-selector qq-upload-pause">\n                <span class="qq-btn qq-pause-icon" aria-label="Pause"></span>\n              </button>\n              <button type="button" class="qq-btn qq-upload-continue-selector qq-upload-continue">\n                <span class="qq-btn qq-continue-icon" aria-label="Continue"></span>\n              </button>\n            </div>\n          </li>\n        </ul>\n        <dialog class="qq-alert-dialog-selector">\n          <div class="qq-dialog-message-selector"></div>\n          <div class="qq-dialog-buttons">\n            <button type="button" class="qq-cancel-button-selector">Close</button>\n          </div>\n        </dialog>\n        <dialog class="qq-confirm-dialog-selector">\n          <div class="qq-dialog-message-selector"></div>\n          <div class="qq-dialog-buttons">\n            <button type="button" class="qq-cancel-button-selector">No</button>\n            <button type="button" class="qq-ok-button-selector">Yes</button>\n          </div>\n        </dialog>\n        <dialog class="qq-prompt-dialog-selector">\n          <div class="qq-dialog-message-selector"></div>\n          <input type="text">\n          <div class="qq-dialog-buttons">\n            <button type="button" class="qq-cancel-button-selector">Cancel</button>\n            <button type="button" class="qq-ok-button-selector">Ok</button>\n          </div>\n        </dialog>\n      </div>';
    this.fineTemplate = $('<div/>').attr('id', 'qq-template').html(template);
  };

  controlFineUploader.prototype.build = function build() {
    this.input = this.markup('input', null, { type: 'hidden', name: this.config.name, id: this.config.name });
    this.wrapper = this.markup('div', '', { id: this.config.name + '-wrapper' });
    return [this.input, this.wrapper];
  };

  controlFineUploader.prototype.onRender = function onRender() {
    var wrapper = $(this.wrapper);
    var input = $(this.input);

    var config = $.extend(true, {
      request: {
        endpoint: this.handler
      },
      deleteFile: {
        enabled: true,
        endpoint: this.handler
      },
      chunking: {
        enabled: true,
        concurrent: {
          enabled: true
        },
        success: {
          endpoint: this.handler + (this.handler.indexOf('?') == -1 ? '?' : '&') + 'done'
        }
      },
      resume: {
        enabled: true
      },
      retry: {
        enableAuto: true,
        showButton: true
      },
      callbacks: {
        onError: function onError(id, name, errorReason, xhrOrXdr) {
          if (errorReason.slice(-1) != '.') {
            errorReason += '.';
          }
          var error = $('<div />').addClass('qq-error-message').html('<span>Error processing upload: <b>' + name + '</b>.<br />Reason: ' + errorReason + '</span>').prependTo(wrapper.find('.qq-uploader'));
          setTimeout(function () {
            error.fadeOut(function () {
              error.remove();
            });
          }, 6000);
        },
        onStatusChange: function onStatusChange(id, oldStatus, newStatus) {
          var uploads = wrapper.fineUploader('getUploads');

          var successful = [];
          for (var _iterator = uploads, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
              if (_i >= _iterator.length) break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              _ref = _i.value;
            }

            var upload = _ref;

            if (upload.status != 'upload successful') {
              continue;
            }
            successful.push(upload.name);
          }
          input.val(successful.join(', '));
        }
      },
      template: this.fineTemplate
    }, this.classConfig);
    wrapper.fineUploader(config);
  };

  _createClass(controlFineUploader, null, [{
    key: 'definition',
    get: function get() {
      return {
        i18n: {
          default: 'Fine Uploader'
        }
      };
    }
  }]);

  return controlFineUploader;
}(_text2.default);

exports.default = controlFineUploader;

_text2.default.register('file', _text2.default, 'file');
_text2.default.register('fineuploader', controlFineUploader, 'file');

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _control2 = __webpack_require__(0);

var _control3 = _interopRequireDefault(_control2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var controlHidden = function (_control) {
  _inherits(controlHidden, _control);

  function controlHidden() {
    _classCallCheck(this, controlHidden);

    return _possibleConstructorReturn(this, _control.apply(this, arguments));
  }

  controlHidden.prototype.build = function build() {
    return {
      field: this.markup('input', null, this.config),
      layout: 'hidden'
    };
  };

  return controlHidden;
}(_control3.default);

exports.default = controlHidden;

_control3.default.register('hidden', controlHidden);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _control2 = __webpack_require__(0);

var _control3 = _interopRequireDefault(_control2);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var controlParagraph = function (_control) {
  _inherits(controlParagraph, _control);

  function controlParagraph() {
    _classCallCheck(this, controlParagraph);

    return _possibleConstructorReturn(this, _control.apply(this, arguments));
  }

  controlParagraph.prototype.build = function build() {
    var _config = this.config,
        type = _config.type,
        attrs = _objectWithoutProperties(_config, ['type']);

    var typeMap = {
      'paragraph': 'p',
      'header': this.subtype
    };
    if (typeMap[type]) {
      type = typeMap[type];
    }
    return {
      field: this.markup(type, _utils2.default.parsedHtml(this.label), attrs),
      layout: 'noLabel'
    };
  };

  return controlParagraph;
}(_control3.default);

exports.default = controlParagraph;

_control3.default.register(['paragraph', 'header'], controlParagraph);
_control3.default.register(['p', 'address', 'blockquote', 'canvas', 'output'], controlParagraph, 'paragraph');
_control3.default.register(['h1', 'h2', 'h3'], controlParagraph, 'header');

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _control2 = __webpack_require__(0);

var _control3 = _interopRequireDefault(_control2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var controlSelect = function (_control) {
  _inherits(controlSelect, _control);

  function controlSelect() {
    _classCallCheck(this, controlSelect);

    return _possibleConstructorReturn(this, _control.apply(this, arguments));
  }

  controlSelect.prototype.build = function build() {
    var _this2 = this;

    var options = [];

    var _config = this.config,
        values = _config.values,
        value = _config.value,
        placeholder = _config.placeholder,
        type = _config.type,
        inline = _config.inline,
        other = _config.other,
        toggle = _config.toggle,
        data = _objectWithoutProperties(_config, ['values', 'value', 'placeholder', 'type', 'inline', 'other', 'toggle']);

    var optionType = type.replace('-group', '');
    var isSelect = type === 'select';
    if (data.multiple || type === 'checkbox-group') {
      data.name = data.name + '[]';
    }

    if (type === 'checkbox-group' && data.required) {
      this.onRender = this.groupRequired;
    }

    delete data.title;

    if (values) {
      if (placeholder && isSelect) {
        options.push(this.markup('option', placeholder, {
          disabled: null,
          selected: null
        }));
      }

      for (var i = 0; i < values.length; i++) {
        var option = values[i];
        if (typeof option === 'string') {
          option = { 'label': option, 'value': option };
        }

        var _option = option,
            _option$label = _option.label,
            label = _option$label === undefined ? '' : _option$label,
            optionAttrs = _objectWithoutProperties(_option, ['label']);

        optionAttrs.id = data.id + '-' + i;

        if (!optionAttrs.selected || placeholder) {
          delete optionAttrs.selected;
        }

        if (typeof value !== 'undefined' && optionAttrs.value === value) {
          optionAttrs.selected = true;
        }

        if (isSelect) {
          var o = this.markup('option', document.createTextNode(label), optionAttrs);
          options.push(o);
        } else {
          var wrapperClass = optionType;
          var labelContents = [label];
          if (inline) {
            wrapperClass += '-inline';
          }
          optionAttrs.type = optionType;
          if (optionAttrs.selected) {
            optionAttrs.checked = 'checked';
            delete optionAttrs.selected;
          }
          var input = this.markup('input', null, Object.assign({}, data, optionAttrs));
          var labelAttrs = { for: optionAttrs.id };
          label = this.markup('label', labelContents, labelAttrs);
          var output = [input, label];
          if (toggle) {
            labelAttrs.className = 'kc-toggle';
            labelContents.unshift(input, this.markup('span'));
            output = this.markup('label', labelContents, labelAttrs);
          }

          var wrapper = this.markup('div', output, { className: wrapperClass });
          options.push(wrapper);
        }
      }

      if (!isSelect && other) {
        var otherOptionAttrs = {
          id: data.id + '-other',
          className: data.className + ' other-option',
          value: '',
          events: {
            click: function click() {
              return _this2.otherOptionCB(otherOptionAttrs.id);
            }
          }
        };

        var _wrapperClass = optionType;
        if (inline) {
          _wrapperClass += '-inline';
        }

        var _optionAttrs = Object.assign({}, data, otherOptionAttrs);
        _optionAttrs.type = optionType;

        var otherValAttrs = {
          type: 'text',
          events: {
            input: function input(evt) {
              var otherInput = evt.target;
              var other = otherInput.parentElement.previousElementSibling;
              other.value = otherInput.value;
            }
          },
          id: otherOptionAttrs.id + '-value',
          className: 'other-val'
        };
        var primaryInput = this.markup('input', null, _optionAttrs);
        var otherInputs = [document.createTextNode('Other'), this.markup('input', null, otherValAttrs)];
        var inputLabel = this.markup('label', otherInputs, { for: _optionAttrs.id });
        var _wrapper = this.markup('div', [primaryInput, inputLabel], { className: _wrapperClass });
        options.push(_wrapper);
      }
    }

    if (type == 'select') {
      return this.markup(optionType, options, data);
    } else {
      return this.markup('div', options, { className: type });
    }
  };

  controlSelect.prototype.groupRequired = function groupRequired() {
    var checkboxes = this.element.getElementsByTagName('input');
    var setValidity = function setValidity(checkbox, isValid) {
      var minReq = _control3.default.mi18n('minSelectionRequired', 1);
      if (!isValid) {
        checkbox.setCustomValidity(minReq);
      } else {
        checkbox.setCustomValidity('');
      }
    };
    var toggleRequired = function toggleRequired(checkboxes, isValid) {
      [].forEach.call(checkboxes, function (cb) {
        if (isValid) {
          cb.removeAttribute('required');
        } else {
          cb.setAttribute('required', 'required');
        }
        setValidity(cb, isValid);
      });
    };

    var toggleValid = function toggleValid() {
      var isValid = [].some.call(checkboxes, function (cb) {
        return cb.checked;
      });
      toggleRequired(checkboxes, isValid);
    };

    for (var i = checkboxes.length - 1; i >= 0; i--) {
      checkboxes[i].addEventListener('change', toggleValid);
    }
    toggleValid();
  };

  controlSelect.prototype.otherOptionCB = function otherOptionCB(otherId) {
    var otherInput = document.getElementById(otherId);
    var otherInputValue = document.getElementById(otherId + '-value');

    if (otherInput.checked) {
      otherInputValue.style.display = 'inline-block';
    } else {
      otherInputValue.style.display = 'none';
    }
  };

  _createClass(controlSelect, null, [{
    key: 'definition',
    get: function get() {
      return {
        inactive: ['checkbox'],
        mi18n: {
          minSelectionRequired: 'minSelectionRequired'
        }
      };
    }
  }]);

  return controlSelect;
}(_control3.default);

exports.default = controlSelect;

_control3.default.register(['select', 'checkbox-group', 'radio-group', 'checkbox'], controlSelect);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _textarea = __webpack_require__(5);

var _textarea2 = _interopRequireDefault(_textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var controlQuill = function (_controlTextarea) {
  _inherits(controlQuill, _controlTextarea);

  function controlQuill() {
    _classCallCheck(this, controlQuill);

    return _possibleConstructorReturn(this, _controlTextarea.apply(this, arguments));
  }

  controlQuill.prototype.configure = function configure() {
    this.js = '//cdn.quilljs.com/1.2.4/quill.js';
    this.css = '//cdn.quilljs.com/1.2.4/quill.snow.css';
  };

  controlQuill.prototype.build = function build() {
    var _config = this.config,
        _config$value = _config.value,
        value = _config$value === undefined ? '' : _config$value,
        attrs = _objectWithoutProperties(_config, ['value']);

    this.field = this.markup('div', null, attrs);
    return this.field;
  };

  controlQuill.prototype.onRender = function onRender(evt) {
    var value = this.config.value || '';
    var Delta = window.Quill.import('delta');
    window.fbEditors.quill[this.id] = {};
    var editor = window.fbEditors.quill[this.id];
    editor.instance = new window.Quill(this.field, {
      modules: {
        toolbar: [[{ 'header': [1, 2, false] }], ['bold', 'italic', 'underline'], ['code-block']]
      },
      placeholder: this.config.placeholder || '',
      theme: 'snow'
    });
    editor.data = new Delta();
    if (value) {
      editor.instance.setContents(window.JSON.parse(this.parsedHtml(value)));
    }
    editor.instance.on('text-change', function (delta) {
      editor.data = editor.data.compose(delta);
    });
  };

  return controlQuill;
}(_textarea2.default);

exports.default = controlQuill;

_textarea2.default.register('quill', controlQuill, 'textarea');

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _textarea = __webpack_require__(5);

var _textarea2 = _interopRequireDefault(_textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var controlTinymce = function (_controlTextarea) {
  _inherits(controlTinymce, _controlTextarea);

  function controlTinymce() {
    _classCallCheck(this, controlTinymce);

    return _possibleConstructorReturn(this, _controlTextarea.apply(this, arguments));
  }

  controlTinymce.prototype.configure = function configure() {
    this.js = ['//cdn.tinymce.com/4/tinymce.min.js'];

    if (this.classConfig.js) {
      var js = this.classConfig.js;
      if (!Array.isArray(js)) {
        js = new Array(js);
      }
      this.js.concat(js);
      delete this.classConfig.js;
    }

    if (this.classConfig.css) {
      this.css = this.classConfig.css;
    }

    this.editorOptions = {
      height: 250,
      paste_data_images: true,
      plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table contextmenu paste code'],
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | table'
    };
  };

  controlTinymce.prototype.build = function build() {
    var _config = this.config,
        _config$value = _config.value,
        value = _config$value === undefined ? '' : _config$value,
        attrs = _objectWithoutProperties(_config, ['value']);

    this.field = this.markup('textarea', this.parsedHtml(value), attrs);
    return this.field;
  };

  controlTinymce.prototype.onRender = function onRender(evt) {
    if (window.tinymce.editors[this.id]) {
      window.tinymce.editors[this.id].remove();
    }

    var options = $.extend(this.editorOptions, this.classConfig);
    options.target = this.field;

    window.tinymce.init(options);
  };

  return controlTinymce;
}(_textarea2.default);

exports.default = controlTinymce;

_textarea2.default.register('tinymce', controlTinymce, 'textarea');

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

__webpack_require__(14);

var _dom = __webpack_require__(4);

var _dom2 = _interopRequireDefault(_dom);

var _data = __webpack_require__(7);

var _mi18n = __webpack_require__(2);

var _mi18n2 = _interopRequireDefault(_mi18n);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _events = __webpack_require__(8);

var _events2 = _interopRequireDefault(_events);

var _layout = __webpack_require__(13);

var _layout2 = _interopRequireDefault(_layout);

var _helpers = __webpack_require__(12);

var _helpers2 = _interopRequireDefault(_helpers);

var _config = __webpack_require__(6);

var _control = __webpack_require__(0);

var _control2 = _interopRequireDefault(_control);

__webpack_require__(11);

var _custom2 = __webpack_require__(3);

var _custom3 = _interopRequireDefault(_custom2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var instanceTime = new Date().getTime();

var FormBuilder = function FormBuilder(opts, element) {
  var _this = this;

  var formBuilder = this;
  var i18n = _mi18n2.default.current;
  var formID = 'frmb-' + instanceTime++;
  var data = new _data.Data(formID);
  var d = new _dom2.default(formID);

  if (!opts.layout) {
    opts.layout = _layout2.default;
  }
  var layoutEngine = new opts.layout(opts.layoutTemplates, true);

  _control2.default.controlConfig = opts.controlConfig || {};

  var h = new _helpers2.default(formID, layoutEngine);
  var m = _utils2.default.markup;

  var originalOpts = opts;

  _control2.default.loadCustom(opts.controls);

  opts = h.processOptions(opts);

  if (Object.keys(opts.fields).length) {
    _custom3.default.register(opts.templates, opts.fields);
  }

  var subtypes = _config.config.subtypes = h.processSubtypes(opts.subtypes);
  h.editorUI(formID);

  var $stage = $(d.stage);

  data.layout = h.editorLayout(opts.controlPosition);
  data.formID = formID;
  data.lastID = data.formID + '-fld-1';

  var controls = _control2.default.getRegistered();
  var customFields = _custom3.default.getRegistered();
  if (customFields) {
    $.merge(controls, customFields);
  }

  if (opts.sortableControls) {
    d.controls.classList.add('sort-enabled');
  }

  var $cbUL = $(d.controls);

  var controlList = [];
  var allControls = {};

  for (var i = 0; i < controls.length; i++) {
    var type = controls[i];

    var custom = _custom3.default.lookup(type);
    var controlClass = void 0;
    if (custom) {
      controlClass = custom.class;
    } else {
      custom = {};

      controlClass = _control2.default.getClass(type);
      if (!controlClass || !controlClass.active(type)) {
        continue;
      }
    }
    var icon = custom.icon || controlClass.icon(type);
    var label = custom.label || controlClass.label(type);
    var iconClassName = !icon ? custom.iconClassName || 'icon-' + type.replace(/-[\d]{4}$/, '') : '';

    if (icon) {
      label = '<span class="control-icon">' + icon + '</span>' + label;
    }

    var newFieldControl = m('li', m('span', label), { className: iconClassName + ' input-control input-control-' + i });
    newFieldControl.dataset.type = type;
    controlList.push(type);
    allControls[type] = newFieldControl;
  }

  if (opts.inputSets.length) {
    opts.inputSets.forEach(function (set, i) {
      var name = set.name,
          label = set.label,
          icon = set.icon;

      name = name || _utils2.default.makeClassName(label);
      if (icon) {
        label = '<span class="control-icon">' + icon + '</span>' + label;
      }
      var inputSet = m('li', label, {
        className: 'input-set-control input-set-' + i
      });
      inputSet.dataset.type = name;
      controlList.push(name);
      allControls[set.name] = inputSet;
    });
  }

  h.orderFields(controlList).forEach(function (control) {
    if (allControls[control]) {
      d.controls.appendChild(allControls[control]);
    }
  });

  $stage.sortable({
    cursor: 'move',
    opacity: 0.9,
    revert: 150,
    beforeStop: function beforeStop(evt, ui) {
      return h.beforeStop.call(h, evt, ui);
    },
    start: function start(evt, ui) {
      return h.startMoving.call(h, evt, ui);
    },
    stop: function stop(evt, ui) {
      return h.stopMoving.call(h, evt, ui);
    },
    cancel: ['input', 'select', 'textarea', '.disabled-field', '.form-elements', '.btn', 'button'].join(', '),
    placeholder: 'frmb-placeholder'
  });

  $cbUL.sortable({
    helper: 'clone',
    opacity: 0.9,
    connectWith: $stage,
    cancel: '.fb-separator',
    cursor: 'move',
    scroll: false,
    placeholder: 'ui-state-highlight',
    start: function start(evt, ui) {
      return h.startMoving.call(h, evt, ui);
    },
    stop: function stop(evt, ui) {
      return h.stopMoving.call(h, evt, ui);
    },
    revert: 150,
    beforeStop: function beforeStop(evt, ui) {
      return h.beforeStop.call(h, evt, ui);
    },
    distance: 3,
    update: function update(event, ui) {
      if (h.doCancel) {
        return false;
      }

      if (ui.item.parent()[0] === d.stage) {
        h.doCancel = true;
        processControl(ui.item);
      } else {
        h.setFieldOrder($cbUL);
        h.doCancel = !opts.sortableControls;
      }
    }
  });

  var processControl = function processControl(control) {
    if (control[0].classList.contains('input-set-control')) {
      var inputSets = [];
      var inputSet = opts.inputSets.find(function (set) {
        return set.name === control[0].dataset.type;
      });
      if (inputSet && inputSet.showHeader) {
        var header = {
          type: 'header',
          subtype: 'h2',
          id: inputSet.name,
          label: inputSet.label
        };
        inputSets.push(header);
      }
      inputSets.push.apply(inputSets, inputSet.fields);
      inputSets.forEach(function (field) {
        prepFieldVars(field, true);
        if (h.stopIndex || h.stopIndex === 0) {
          h.stopIndex++;
        }
      });
    } else {
      prepFieldVars(control, true);
    }
  };

  d.editorWrap = m('div', null, {
    id: data.formID + '-form-wrap',
    className: 'form-wrap form-builder' + _utils2.default.mobileClass()
  });

  var $editorWrap = $(d.editorWrap);

  var cbWrap = m('div', d.controls, {
    id: data.formID + '-cb-wrap',
    className: 'cb-wrap ' + data.layout.controls
  });

  if (opts.showActionButtons) {
    var buttons = opts.actionButtons.map(function (btnData) {
      if (btnData.id && opts.disabledActionButtons.indexOf(btnData.id) === -1) {
        return h.processActionButtons(btnData);
      }
    });
    var formActions = d.formActions = m('div', buttons, {
      className: 'form-actions btn-group'
    });

    cbWrap.appendChild(formActions);
  }

  var stageWrap = m('div', [d.stage, cbWrap], {
    id: data.formID + '-stage-wrap',
    className: 'stage-wrap ' + data.layout.stage
  });

  $editorWrap.append(stageWrap, cbWrap);

  if (element.type !== 'textarea') {
    $(element).append($editorWrap);
  } else {
    $(element).replaceWith($editorWrap);
  }

  var saveAndUpdate = _utils2.default.debounce(function (evt) {
    if (evt) {
      if (evt.type === 'keyup' && evt.target.name === 'className') {
        return false;
      }

      var $field = $(evt.target).closest('.form-field');
      h.updatePreview($field);
      h.save.call(h);
    }
  });

  var previewSelectors = ['.form-elements input', '.form-elements select', '.form-elements textarea'].join(', ');

  $stage.on('change blur keyup', previewSelectors, saveAndUpdate);

  $('li', d.controls).click(function (evt) {
    var $control = $(evt.target).closest('li');
    h.stopIndex = undefined;
    processControl($control);
    h.save.call(h);
  });

  var nonEditableFields = function nonEditableFields() {
    var cancelArray = [];
    var disabledField = function disabledField(type) {
      return _utils2.default.markup('li', opts[type], {
        className: 'disabled-field form-' + type
      });
    };

    if (opts.prepend && !$('.disabled-field.form-prepend', d.stage).length) {
      cancelArray.push(true);
      $stage.prepend(disabledField('prepend'));
    }

    if (opts.append && !$('.disabled-field.form-.append', d.stage).length) {
      cancelArray.push(true);
      $stage.append(disabledField('append'));
    }

    h.disabledTT(d.stage);
    return cancelArray.some(function (elem) {
      return elem === true;
    });
  };

  var prepFieldVars = function prepFieldVars($field) {
    var isNew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var field = {};
    if ($field instanceof jQuery) {
      field.type = $field[0].dataset.type;
      if (field.type) {
        var _custom = _custom3.default.lookup(field.type);
        if (_custom) {
          field = Object.assign({}, _custom);
        } else {
          var _controlClass = _control2.default.getClass(field.type);
          field.label = _controlClass.label(field.type);
        }
      } else {
        var attrs = $field[0].attributes;
        if (!isNew) {
          field.values = $field.children().map(function (index, elem) {
            return {
              label: $(elem).text(),
              value: $(elem).attr('value'),
              selected: Boolean($(elem).attr('selected'))
            };
          });
        }

        for (var _i = attrs.length - 1; _i >= 0; _i--) {
          field[attrs[_i].name] = attrs[_i].value;
        }
      }
    } else {
      field = Object.assign({}, $field);
    }

    if (!field.name) {
      field.name = _utils2.default.nameAttr(field);
    }

    if (isNew && _utils2.default.inArray(field.type, ['text', 'number', 'file', 'date', 'select', 'textarea', 'autocomplete'])) {
      field.className = field.className || 'form-control';
    }

    var match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(field.className);
    if (match) {
      field.style = match[1];
    }

    appendNewField(field, isNew);

    if (isNew) {
      setTimeout(function () {
        return document.dispatchEvent(_events2.default.fieldAdded);
      }, 10);
    }

    stageWrap.classList.remove('empty');
  };

  var loadFields = function loadFields(formData) {
    formData = h.getData(formData);
    if (formData && formData.length) {
      for (var _i2 = 0; _i2 < formData.length; _i2++) {
        var fieldData = _utils2.default.trimObj(formData[_i2]);
        prepFieldVars(fieldData);
      }
      stageWrap.classList.remove('empty');
    } else if (opts.defaultFields && opts.defaultFields.length) {
      opts.defaultFields.forEach(function (field) {
        return prepFieldVars(field);
      });
      stageWrap.classList.remove('empty');
    } else if (!opts.prepend && !opts.append) {
      stageWrap.classList.add('empty');
      stageWrap.dataset.content = i18n.getStarted;
    }

    if (nonEditableFields()) {
      stageWrap.classList.remove('empty');
    }
    h.save();
  };

  var fieldOptions = function fieldOptions(fieldData) {
    var type = fieldData.type,
        values = fieldData.values,
        name = fieldData.name;

    var optionActions = [m('a', i18n.addOption, { className: 'add add-opt' })];
    var fieldOptions = [m('label', i18n.selectOptions, { className: 'false-label' })];
    var isMultiple = fieldData.multiple || type === 'checkbox-group';
    var optionDataTemplate = function optionDataTemplate(label) {
      var optionData = {
        label: label,
        value: _utils2.default.hyphenCase(label)
      };

      if (type !== 'autocomplete') {
        optionData.selected = false;
      }

      return optionData;
    };

    if (!values || !values.length) {
      var defaultOptCount = [1, 2, 3];
      if (_utils2.default.inArray(type, ['checkbox-group', 'checkbox'])) {
        defaultOptCount = [1];
      }
      values = defaultOptCount.map(function (index) {
        var label = i18n.option + ' ' + index;
        return optionDataTemplate(label);
      });

      var firstOption = values[0];
      if (firstOption.hasOwnProperty('selected') && type !== 'radio-group') {
        firstOption.selected = true;
      }
    } else {
      values.forEach(function (option) {
        return Object.assign({}, { selected: false }, option);
      });
    }

    var optionActionsWrap = m('div', optionActions, { className: 'option-actions' });
    var options = m('ol', values.map(function (option) {
      return selectFieldOptions(name, option, isMultiple);
    }), {
      className: 'sortable-options'
    });
    var optionsWrap = m('div', [options, optionActionsWrap], { className: 'sortable-options-wrap' });

    fieldOptions.push(optionsWrap);

    return m('div', fieldOptions, { className: 'form-group field-options' }).outerHTML;
  };

  var defaultFieldAttrs = function defaultFieldAttrs(type) {
    var defaultAttrs = ['required', 'label', 'description', 'placeholder', 'className', 'name', 'access', 'value'];
    var noValFields = ['header', 'paragraph', 'file', 'autocomplete'].concat(d.optionFields);

    var valueField = !_utils2.default.inArray(type, noValFields);

    var typeAttrsMap = {
      autocomplete: defaultAttrs.concat(['options']),
      button: ['label', 'subtype', 'style', 'className', 'name', 'value', 'access'],
      checkbox: ['required', 'label', 'description', 'toggle', 'inline', 'className', 'name', 'access', 'other', 'options'],
      text: defaultAttrs.concat(['subtype', 'maxlength']),
      date: defaultAttrs,
      file: defaultAttrs.concat(['subtype', 'multiple']),
      header: ['label', 'subtype', 'className', 'access'],
      hidden: ['name', 'value', 'access'],
      paragraph: ['label', 'subtype', 'className', 'access'],
      number: defaultAttrs.concat(['min', 'max', 'step']),
      select: defaultAttrs.concat(['multiple', 'options']),
      textarea: defaultAttrs.concat(['subtype', 'maxlength', 'rows'])
    };

    typeAttrsMap['checkbox-group'] = typeAttrsMap.checkbox;
    typeAttrsMap['radio-group'] = typeAttrsMap.checkbox;

    var typeAttrs = typeAttrsMap[type];

    if (type === 'radio-group') {
      _utils2.default.remove('toggle', typeAttrs);
    }

    if (_utils2.default.inArray(type, ['header', 'paragraph', 'button'])) {
      _utils2.default.remove('description', typeAttrs);
    }

    if (!valueField) {
      _utils2.default.remove('value', typeAttrs);
    }

    return typeAttrs || defaultAttrs;
  };

  var advFields = function advFields(values) {
    var type = values.type;

    var advFields = [];
    var fieldAttrs = defaultFieldAttrs(type);
    var advFieldMap = {
      required: function required() {
        return requiredField(values);
      },
      toggle: function toggle() {
        return boolAttribute('toggle', values, { first: i18n.toggle });
      },
      inline: function inline() {
        var labels = {
          first: i18n.inline,
          second: _mi18n2.default.get('inlineDesc', type.replace('-group', ''))
        };

        return boolAttribute('inline', values, labels);
      },
      label: function label() {
        return textAttribute('label', values);
      },
      description: function description() {
        return textAttribute('description', values);
      },
      subtype: function subtype() {
        return selectAttribute('subtype', values, subtypes[type]);
      },
      style: function style() {
        return btnStyles(values.style);
      },
      placeholder: function placeholder() {
        return textAttribute('placeholder', values);
      },
      rows: function rows() {
        return numberAttribute('rows', values);
      },
      className: function className() {
        return textAttribute('className', values);
      },
      name: function name() {
        return textAttribute('name', values);
      },
      value: function value() {
        return textAttribute('value', values);
      },
      maxlength: function maxlength() {
        return numberAttribute('maxlength', values);
      },
      access: function access() {
        var rolesDisplay = values.role ? 'style="display:block"' : '';
        var availableRoles = ['<div class="available-roles" ' + rolesDisplay + '>'];
        for (key in opts.roles) {
          if (opts.roles.hasOwnProperty(key)) {
            var roleId = 'fld-' + data.lastID + '-roles-' + key;
            var cbAttrs = {
              type: 'checkbox',
              name: 'roles[]',
              value: key,
              id: roleId,
              className: 'roles-field'
            };
            if (_utils2.default.inArray(key, roles)) {
              cbAttrs.checked = 'checked';
            }

            availableRoles.push('<label for="' + roleId + '">');
            availableRoles.push(h.input(cbAttrs).outerHTML);
            availableRoles.push(' ' + opts.roles[key] + '</label>');
          }
        }
        availableRoles.push('</div>');
        var accessLabels = {
          first: i18n.roles,
          second: i18n.limitRole,
          content: availableRoles.join('')
        };

        return boolAttribute('access', values, accessLabels);
      },
      other: function other() {
        return boolAttribute('other', values, {
          first: i18n.enableOther,
          second: i18n.enableOtherMsg
        });
      },
      options: function options() {
        return fieldOptions(values);
      }
    };
    var key = void 0;
    var roles = values.role !== undefined ? values.role.split(',') : [];
    var numAttrs = ['min', 'max', 'step'];

    if (type === 'number') {
      numAttrs.forEach(function (numAttr) {
        advFieldMap[numAttr] = function () {
          return numberAttribute(numAttr, values);
        };
      });
    }

    if (type === 'file') {
      advFieldMap['multiple'] = function () {
        var labels = {
          first: i18n.multipleFiles,
          second: i18n.allowMultipleFiles
        };
        return boolAttribute('multiple', values, labels);
      };
    }

    if (type === 'select') {
      advFieldMap['multiple'] = function () {
        return boolAttribute('multiple', values, {
          first: ' ',
          second: i18n.selectionsMessage
        });
      };
    }

    Object.keys(fieldAttrs).forEach(function (index) {
      var attr = fieldAttrs[index];
      var useDefaultAttr = [true];

      if (opts.typeUserDisabledAttrs[type]) {
        var typeDisabledAttrs = opts.typeUserDisabledAttrs[type];
        useDefaultAttr.push(!_utils2.default.inArray(attr, typeDisabledAttrs));
      }

      if (opts.typeUserAttrs[type]) {
        var userAttrs = Object.keys(opts.typeUserAttrs[type]);
        useDefaultAttr.push(!_utils2.default.inArray(attr, userAttrs));
      }

      if (_utils2.default.inArray(attr, opts.disabledAttrs)) {
        useDefaultAttr.push(false);
      }

      if (useDefaultAttr.every(function (use) {
        return use === true;
      })) {
        advFields.push(advFieldMap[attr]());
      }
    });

    if (opts.typeUserAttrs[type]) {
      var customAttr = processTypeUserAttrs(opts.typeUserAttrs[type], values);
      advFields.push(customAttr);
    }

    return advFields.join('');
  };

  function processTypeUserAttrs(typeUserAttr, values) {
    var advField = [];

    for (var attribute in typeUserAttr) {
      if (typeUserAttr.hasOwnProperty(attribute)) {
        var orig = i18n[attribute];
        var tUA = typeUserAttr[attribute];
        var origValue = tUA.value;
        tUA.value = values[attribute] || tUA.value || '';

        if (tUA.label) {
          i18n[attribute] = tUA.label;
        }

        if (tUA.options) {
          advField.push(selectUserAttrs(attribute, tUA));
        } else {
          advField.push(inputUserAttrs(attribute, tUA));
        }

        i18n[attribute] = orig;
        tUA.value = origValue;
      }
    }

    return advField.join('');
  }

  function inputUserAttrs(name, attrs) {
    var textAttrs = {
      id: name + '-' + data.lastID,
      title: attrs.description || attrs.label || name.toUpperCase(),
      name: name,
      type: attrs.type || 'text',
      className: ['fld-' + name]
    };
    var label = '<label for="' + textAttrs.id + '">' + i18n[name] + '</label>';

    var optionInputs = ['checkbox', 'checkbox-group', 'radio-group'];
    if (!_utils2.default.inArray(textAttrs.type, optionInputs)) {
      textAttrs.className.push('form-control');
    }

    textAttrs = Object.assign({}, attrs, textAttrs);
    var textInput = '<input ' + _utils2.default.attrString(textAttrs) + '>';
    var inputWrap = '<div class="input-wrap">' + textInput + '</div>';
    return '<div class="form-group ' + name + '-wrap">' + label + inputWrap + '</div>';
  }

  function selectUserAttrs(name, fieldData) {
    var optis = Object.keys(fieldData.options).map(function (val) {
      var attrs = { value: val };
      if (val === fieldData.value) {
        attrs.selected = null;
      }
      return m('option', fieldData.options[val], attrs).outerHTML;
    });
    var selectAttrs = {
      id: name + '-' + data.lastID,
      title: fieldData.description || fieldData.label || name.toUpperCase(),
      name: name,
      className: 'fld-' + name + ' form-control'
    };
    var label = '<label for="' + selectAttrs.id + '">' + i18n[name] + '</label>';

    Object.keys(fieldData).filter(function (prop) {
      return !_utils2.default.inArray(prop, ['value', 'options', 'label']);
    }).forEach(function (attr) {
      selectAttrs[attr] = fieldData[attr];
    });

    var select = m('select', optis, selectAttrs).outerHTML;
    var inputWrap = '<div class="input-wrap">' + select + '</div>';
    return '<div class="form-group ' + name + '-wrap">' + label + inputWrap + '</div>';
  }

  var boolAttribute = function boolAttribute(name, values, labels) {
    var label = function label(txt) {
      return m('label', txt, {
        for: name + '-' + data.lastID
      }).outerHTML;
    };
    var cbAttrs = {
      type: 'checkbox',
      className: 'fld-' + name,
      name: name,
      id: name + '-' + data.lastID
    };
    if (values[name]) {
      cbAttrs.checked = true;
    }
    var left = [];
    var right = [m('input', null, cbAttrs).outerHTML];

    if (labels.first) {
      left.push(label(labels.first));
    }

    if (labels.second) {
      right.push(' ', label(labels.second));
    }
    if (labels.content) {
      right.push(labels.content);
    }

    right = m('div', right, { className: 'input-wrap' }).outerHTML;

    return m('div', left.concat(right), {
      className: 'form-group ' + name + '-wrap'
    }).outerHTML;
  };

  var btnStyles = function btnStyles(style) {
    var styleField = '';

    if (style === 'undefined') {
      style = 'default';
    }

    var styleLabel = '<label>' + i18n.style + '</label>';
    styleField += h.input({
      value: style || 'default',
      type: 'hidden',
      className: 'btn-style'
    }).outerHTML;
    styleField += '<div class="btn-group" role="group">';

    _config.styles.btn.forEach(function (btnStyle) {
      var classList = ['btn-xs', 'btn', 'btn-' + btnStyle];
      if (style === btnStyle) {
        classList.push('selected');
      }
      var btn = m('button', _mi18n2.default.get('styles.btn.' + btnStyle), {
        value: btnStyle,
        type: 'button',
        className: classList.join(' ')
      }).outerHTML;

      styleField += btn;
    });

    styleField += '</div>';

    styleField = m('div', [styleLabel, styleField], {
      className: 'form-group style-wrap'
    });

    return styleField.outerHTML;
  };

  var numberAttribute = function numberAttribute(attribute, values) {
    var attrVal = values[attribute];
    var attrLabel = i18n[attribute] || attribute;
    var placeholder = i18n['placeholder.' + attribute];
    var inputConfig = {
      type: 'number',
      value: attrVal,
      name: attribute,
      min: '0',
      placeholder: placeholder,
      className: 'fld-' + attribute + ' form-control',
      id: attribute + '-' + data.lastID
    };
    var numberAttribute = h.input(_utils2.default.trimObj(inputConfig)).outerHTML;
    var inputWrap = '<div class="input-wrap">' + numberAttribute + '</div>';
    var inputLabel = '<label for="' + inputConfig.id + '">' + attrLabel + '</label>';

    return m('div', [inputLabel, inputWrap], {
      className: 'form-group ' + attribute + '-wrap'
    }).outerHTML;
  };

  var selectAttribute = function selectAttribute(attribute, values, optionData) {
    var selectOptions = optionData.map(function (option, i) {
      var optionAttrs = Object.assign({
        label: i18n.option + ' ' + i,
        value: undefined
      }, option);
      if (option.value === values[attribute]) {
        optionAttrs.selected = true;
      }
      optionAttrs = _utils2.default.trimObj(optionAttrs);
      return m('option', optionAttrs.label, optionAttrs);
    });
    var selectAttrs = {
      id: attribute + '-' + data.lastID,
      name: attribute,
      className: 'fld-' + attribute + ' form-control'
    };
    var labelText = i18n[attribute] || _utils2.default.capitalize(attribute);
    var label = m('label', labelText, { for: selectAttrs.id });
    var select = m('select', selectOptions, selectAttrs);
    var inputWrap = m('div', select, { className: 'input-wrap' });
    var attrWrap = m('div', [label, inputWrap], {
      className: 'form-group ' + selectAttrs.name + '-wrap'
    });

    return attrWrap.outerHTML;
  };

  var textAttribute = function textAttribute(attribute, values) {
    var textArea = ['paragraph'];

    var attrVal = values[attribute] || '';
    var attrLabel = i18n[attribute];

    if (attribute === 'label') {
      if (_utils2.default.inArray(values.type, textArea)) {
        attrLabel = i18n.content;
      } else {
        attrVal = _utils2.default.parsedHtml(values[attribute]);
      }
    }

    var placeholder = i18n['placeholder.' + attribute] || '';
    var attributefield = '';
    var noMakeAttr = [];

    if (!noMakeAttr.some(function (elem) {
      return elem === true;
    })) {
      var inputConfig = {
        name: attribute,
        placeholder: placeholder,
        className: 'fld-' + attribute + ' form-control',
        id: attribute + '-' + data.lastID
      };
      var attributeLabel = m('label', attrLabel, {
        for: inputConfig.id
      }).outerHTML;

      if (attribute === 'label') {
        inputConfig.contenteditable = true;
        attributefield += m('div', attrVal, inputConfig).outerHTML;
      } else {
        inputConfig.value = attrVal;
        inputConfig.type = 'text';
        attributefield += '<input ' + _utils2.default.attrString(inputConfig) + '>';
      }

      var inputWrap = '<div class="input-wrap">' + attributefield + '</div>';

      var visibility = 'block';
      if (attribute === 'value') {
        visibility = values.subtype && values.subtype === 'quill' && 'none';
      }

      attributefield = m('div', [attributeLabel, inputWrap], {
        className: 'form-group ' + attribute + '-wrap',
        style: 'display: ' + visibility
      });
    }

    return attributefield.outerHTML;
  };

  var requiredField = function requiredField(fieldData) {
    var type = fieldData.type;

    var noRequire = ['header', 'paragraph', 'button'];
    var noMake = [];
    var requireField = '';

    if (_utils2.default.inArray(type, noRequire)) {
      noMake.push(true);
    }
    if (!noMake.some(function (elem) {
      return elem === true;
    })) {
      requireField = boolAttribute('required', fieldData, {
        first: i18n.required
      });
    }

    return requireField;
  };

  var appendNewField = function appendNewField(values) {
    var isNew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var type = values.type || 'text';
    var label = values.label || i18n[type] || i18n.label;
    var disabledFieldButtons = opts.disabledFieldButtons[type] || values.disabledFieldButtons;
    var fieldButtons = [m('a', null, {
      type: 'remove',
      id: 'del_' + data.lastID,
      className: 'del-button btn icon-cancel delete-confirm',
      title: i18n.removeMessage
    }), m('a', null, {
      type: 'edit',
      id: data.lastID + '-edit',
      className: 'toggle-form btn icon-pencil',
      title: i18n.hide
    }), m('a', null, {
      type: 'copy',
      id: data.lastID + '-copy',
      className: 'copy-button btn icon-copy',
      title: i18n.copyButtonTooltip
    })];

    if (disabledFieldButtons && Array.isArray(disabledFieldButtons)) {
      fieldButtons = fieldButtons.filter(function (btnData) {
        return !_utils2.default.inArray(btnData.type, disabledFieldButtons);
      });
    }

    var liContents = [m('div', fieldButtons, { className: 'field-actions' })];

    liContents.push(m('label', _utils2.default.parsedHtml(label), {
      className: 'field-label'
    }));

    liContents.push(m('span', ' *', {
      className: 'required-asterisk',
      style: values.required ? 'display:inline' : ''
    }));

    var descAttrs = {
      className: 'tooltip-element',
      tooltip: values.description,
      style: values.description ? 'display:inline-block' : 'display:none'
    };
    liContents.push(m('span', '?', descAttrs));

    liContents.push(m('div', '', { className: 'prev-holder' }));
    var formElements = m('div', [advFields(values), m('a', i18n.close, { className: 'close-field' })], {
      className: 'form-elements'
    });
    liContents.push(m('div', formElements, { id: data.lastID + '-holder', className: 'frm-holder' }));

    var field = m('li', liContents, {
      class: type + '-field form-field new',
      type: type,
      id: data.lastID
    });
    var $li = $(field);

    $li.data('fieldData', { attrs: values });

    if (typeof h.stopIndex !== 'undefined') {
      $('> li', d.stage).eq(h.stopIndex).before($li);
    } else {
      $stage.append($li);
    }

    $('.sortable-options', $li).sortable({ update: function update() {
        return h.updatePreview($li);
      } });

    h.updatePreview($li);

    if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onadd) {
      opts.typeUserEvents[type].onadd(field);
    }

    if (opts.editOnAdd && isNew) {
      h.closeAllEdit();
      h.toggleEdit(data.lastID, false);
    }

    data.lastID = h.incrementId(data.lastID);
    $(".form-field.new").on("click", select_form_element);
     $(".new").removeClass("new");
  };

  var selectFieldOptions = function selectFieldOptions(name, optionData, multipleSelect) {
    var optionInputType = {
      selected: multipleSelect ? 'checkbox' : 'radio'
    };
    var optionDataOrder = ['value', 'label', 'selected'];
    var optionInputs = [];
    var optionTemplate = { selected: false, label: '', value: '' };

    optionData = Object.assign(optionTemplate, optionData);

    for (var _i3 = optionDataOrder.length - 1; _i3 >= 0; _i3--) {
      var prop = optionDataOrder[_i3];
      if (optionData.hasOwnProperty(prop)) {
        var attrs = {
          type: optionInputType[prop] || 'text',
          className: 'option-' + prop,
          value: optionData[prop],
          name: name + '-option'
        };

        attrs.placeholder = i18n['placeholder.' + prop] || '';

        if (prop === 'selected' && optionData.selected === true) {
          attrs.checked = optionData.selected;
        }

        optionInputs.push(m('input', null, attrs));
      }
    }

    var removeAttrs = {
      className: 'remove btn',
      title: i18n.removeMessage
    };
    optionInputs.push(_utils2.default.markup('a', i18n.remove, removeAttrs));

    var field = _utils2.default.markup('li', optionInputs);

    return field.outerHTML;
  };

  var cloneItem = function cloneItem(currentItem) {
    var currentId = currentItem.attr('id');
    var type = currentItem.attr('type');
    var ts = new Date().getTime();
    var cloneName = type + '-' + ts;
    var $clone = currentItem.clone();

    $('.fld-name', $clone).val(cloneName);
    $clone.find('[id]').each(function (i, elem) {
      elem.id = elem.id.replace(currentId, data.lastID);
    });
    $clone.find('[for]').each(function (index, elem) {
      var curId = elem.getAttribute('for');
      var newForId = curId.replace(currentId, data.lastID);
      elem.setAttribute('for', newForId);
    });

    $clone.attr('id', data.lastID);
    $clone.attr('name', cloneName);
    $clone.addClass('cloned');
    $('.sortable-options', $clone).sortable();

    if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onclone) {
      opts.typeUserEvents[type].onclone($clone[0]);
    }

    data.lastID = h.incrementId(data.lastID);
    return $clone;
  };

  $stage.on('click touchstart', '.remove', function (e) {
    var $field = $(e.target).parents('.form-field:eq(0)');
    var field = $field[0];
    var type = field.getAttribute('type');
    var $option = $(e.target.parentElement);
    e.preventDefault();
    var options = field.querySelector('.sortable-options');
    var optionsCount = options.childNodes.length;
    if (optionsCount <= 2 && !type.includes('checkbox')) {
      opts.notify.error('Error: ' + i18n.minOptionMessage);
    } else {
      $option.slideUp('250', function () {
        $option.remove();
        h.updatePreview($field);
        h.save.call(h);
      });
    }
  });

  $stage.on('touchstart', 'input', function (e) {
    var $input = $(_this);
    if (e.handled !== true) {
      if ($input.attr('type') === 'checkbox') {
        $input.trigger('click');
      } else {
        $input.focus();
        var fieldVal = $input.val();
        $input.val(fieldVal);
      }
    } else {
      return false;
    }
  });

  $stage.on('click touchstart', '.toggle-form, .close-field', function (e) {
    e.stopPropagation();
    e.preventDefault();
    if (e.handled !== true) {
      var targetID = $(e.target).parents('.form-field:eq(0)').attr('id');
      h.toggleEdit(targetID);
      e.handled = true;
    } else {
      return false;
    }
  });
  $stage.on('dblclick', 'li.form-field, .field-label', function (e) {
    if (e.target.tagName.toLowerCase() === 'input' || e.target.contentEditable) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    if (e.handled !== true) {
      var targetID = e.target.tagName == 'li' ? $(e.target).attr('id') : $(e.target).closest('li.form-field').attr('id');
      h.toggleEdit(targetID);
      e.handled = true;
    }
  });

  $stage.on('change', '[name="subtype"]', function (e) {
    var $field = $(e.target).closest('li.form-field');
    var $valWrap = $('.value-wrap', $field);
    $valWrap.toggle(e.target.value !== 'quill');
  });

  var stageOnChangeSelectors = ['.prev-holder input', '.prev-holder select', '.prev-holder textarea'];
  $stage.on('change', stageOnChangeSelectors.join(', '), function (e) {
    var prevOptions = void 0;
    if (e.target.classList.contains('other-option')) {
      return;
    }
    var field = _utils2.default.closest(e.target, '.form-field');
    var optionTypes = ['select', 'checkbox-group', 'radio-group'];
    if (_utils2.default.inArray(field.type, optionTypes)) {
      var options = field.getElementsByClassName('option-value');
      if (field.type === 'select') {
        _utils2.default.forEach(options, function (i) {
          var selectedOption = options[i].parentElement.childNodes[0];
          selectedOption.checked = e.target.value === options[i].value;
        });
      } else {
        prevOptions = document.getElementsByName(e.target.name);
        _utils2.default.forEach(prevOptions, function (i) {
          var selectedOption = options[i].parentElement.childNodes[0];
          selectedOption.checked = prevOptions[i].checked;
        });
      }
    } else {
      var fieldVal = document.getElementById('value-' + field.id);
      if (fieldVal) {
        fieldVal.value = e.target.value;
      }
    }

    h.save.call(h);
  });

  _utils2.default.addEventListeners(d.stage, 'keyup change', function (e) {
    if (!e.target.classList.contains('fld-label')) return;
    var value = e.target.value || e.target.innerHTML;
    var label = _utils2.default.closest(e.target, '.form-field').querySelector('.field-label');
    label.innerHTML = _utils2.default.parsedHtml(value);
  });

  $stage.on('keyup', 'input.error', function (e) {
    $(e.target).removeClass('error');
  });

  $stage.on('keyup', 'input[name="description"]', function (e) {
    var $field = $(e.target).parents('.form-field:eq(0)');
    var closestToolTip = $('.tooltip-element', $field);
    var ttVal = $(e.target).val();
    if (ttVal !== '') {
      if (!closestToolTip.length) {
        var tt = '<span class="tooltip-element" tooltip="' + ttVal + '">?</span>';
        $('.field-label', $field).after(tt);
      } else {
        closestToolTip.attr('tooltip', ttVal).css('display', 'inline-block');
      }
    } else {
      if (closestToolTip.length) {
        closestToolTip.css('display', 'none');
      }
    }
  });

  $stage.on('change', '.fld-multiple', function (e) {
    var newType = e.target.checked ? 'checkbox' : 'radio';
    var $options = $('.option-selected', $(e.target).closest('.form-elements'));
    $options.each(function (i) {
      return $options[i].type = newType;
    });
    return newType;
  });

  $stage.on('blur', 'input.fld-name', function (e) {
    e.target.value = _utils2.default.safename(e.target.value);
    if (e.target.value === '') {
      $(e.target).addClass('field-error').attr('placeholder', i18n.cannotBeEmpty);
    } else {
      $(e.target).removeClass('field-error');
    }
  });

  $stage.on('blur', 'input.fld-maxlength', function (e) {
    e.target.value = _utils2.default.forceNumber(e.target.value);
  });

  $stage.on('click touchstart', '.icon-copy', function (e) {
    e.preventDefault();
    var currentItem = $(e.target).parent().parent('li');
    var $clone = cloneItem(currentItem);
    $clone.insertAfter(currentItem);
    h.updatePreview($clone);
    h.save.call(h);
  });

  $stage.on('click touchstart', '.delete-confirm', function (e) {
    e.preventDefault();

    var buttonPosition = e.target.getBoundingClientRect();
    var bodyRect = document.body.getBoundingClientRect();
    var coords = {
      pageX: buttonPosition.left + buttonPosition.width / 2,
      pageY: buttonPosition.top - bodyRect.top - 12
    };

    var deleteID = $(e.target).parents('.form-field:eq(0)').attr('id');
    var $field = $(document.getElementById(deleteID));

    document.addEventListener('modalClosed', function () {
      $field.removeClass('deleting');
    }, false);

    if (opts.fieldRemoveWarn) {
      var warnH3 = _utils2.default.markup('h3', i18n.warning);
      var warnMessage = _utils2.default.markup('p', i18n.fieldRemoveWarning);
      h.confirm([warnH3, warnMessage], function () {
        return h.removeField(deleteID);
      }, coords);
      $field.addClass('deleting');
    } else {
      h.removeField(deleteID);
    }
  });

  $stage.on('click', '.style-wrap button', function (e) {
    var $button = $(e.target);
    var styleVal = $button.val();
    var $btnStyle = $button.parent().prev('.btn-style');
    $btnStyle.val(styleVal);
    $button.siblings('.btn').removeClass('selected');
    $button.addClass('selected');
    h.updatePreview($btnStyle.closest('.form-field'));
    h.save.call(h);
  });

  $stage.on('click', '.fld-required', function (e) {
    $(e.target).closest('.form-field').find('.required-asterisk').toggle();
  });

  $stage.on('click', 'input.fld-access', function (e) {
    var roles = $(e.target).closest('.form-field').find('.available-roles');
    var enableRolesCB = $(e.target);
    roles.slideToggle(250, function () {
      if (!enableRolesCB.is(':checked')) {
        $('input[type=checkbox]', roles).removeAttr('checked');
      }
    });
  });

  $stage.on('click', '.add-opt', function (e) {
    e.preventDefault();
    var $optionWrap = $(e.target).closest('.field-options');
    var $multiple = $('[name="multiple"]', $optionWrap);
    var $firstOption = $('.option-selected:eq(0)', $optionWrap);
    var isMultiple = false;

    if ($multiple.length) {
      isMultiple = $multiple.prop('checked');
    } else {
      isMultiple = $firstOption.attr('type') === 'checkbox';
    }

    var name = $firstOption.attr('name');

    $('.sortable-options', $optionWrap).append(selectFieldOptions(name, false, isMultiple));
  });

  $stage.on('mouseover mouseout', '.remove, .del-button', function (e) {
    return $(e.target).closest('li').toggleClass('delete');
  });

  loadFields();

  $stage.css('min-height', $cbUL.height());

  if (opts.stickyControls.enable) {
    h.stickyControls($stage);
  }

  if (opts.disableInjectedStyle) {
    var styleTags = document.getElementsByClassName('formBuilder-injected-style');
    _utils2.default.forEach(styleTags, function (i) {
      return (0, _dom.remove)(styleTags[i]);
    });
  }

  document.dispatchEvent(_events2.default.loaded);

  formBuilder.actions = {
    clearFields: function clearFields(animate) {
      return h.removeAllFields(d.stage, animate);
    },
    showData: h.showData.bind(h),
    save: h.save.bind(h),
    addField: function addField(field, index) {
      h.stopIndex = data.formData.length ? index : undefined;
      prepFieldVars(field);
    },
    removeField: h.removeField.bind(h),
    getData: h.getFormData.bind(h),
    setData: function setData(formData) {
      h.stopIndex = undefined;
      h.removeAllFields(d.stage, false);
      loadFields(formData);
      h.save.call(h);
    },
    setLang: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(locale) {
        var formBuilder;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _mi18n2.default.setCurrent.call(_mi18n2.default, locale);

              case 2:
                d.empty(element);
                formBuilder = new FormBuilder(originalOpts, element);

                $(element).data('formBuilder', formBuilder);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      function setLang(_x3) {
        return _ref.apply(this, arguments);
      }

      return setLang;
    }()
  };

  return formBuilder;
};

(function ($) {
  $.fn.formBuilder = function (options) {
    if (!options) {
      options = {};
    }
    var elems = this;

    var _$$extend = $.extend({}, _config.defaultOptions, options, true),
        i18n = _$$extend.i18n,
        opts = _objectWithoutProperties(_$$extend, ['i18n']);

    _config.config.opts = opts;
    var i18nOpts = $.extend({}, _config.defaultI18n, i18n, true);
    var instance = {
      actions: {
        getData: null,
        setData: null,
        save: null,
        showData: null,
        setLang: null,
        addField: null,
        removeField: null,
        clearFields: null
      },
      get formData() {
        return instance.actions.getData('json');
      },
      promise: new Promise(function (resolve, reject) {
        _mi18n2.default.init(i18nOpts).then(function () {
          elems.each(function (i) {
            var formBuilder = new FormBuilder(opts, elems[i]);
            $(elems[i]).data('formBuilder', formBuilder);
            instance.actions = formBuilder.actions;
          });
          delete instance.promise;
          resolve(instance);
        }).catch(console.error);
      })
    };

    return instance;
  };
})(jQuery);

/***/ })
/******/ ]);

function select_form_element() {
  $(".selected").removeClass("selected");
  $(this).addClass("selected");
  $(".form_object_inner").hide();
  $(".element_properties_inner").html($(".selected .form-elements").html()).show();
  $(".element_properties_inner a.close-field").remove();
  $(".element_properties_inner input").on("change", function() {
    // $(".selected .form-elements").html($(".element_properties_inner").html())
  });
}