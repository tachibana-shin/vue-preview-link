(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-preview-link"] = factory();
	else
		root["vue-preview-link"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_css_loader_index_js_node_modules_sass_loader_dist_cjs_js_vue_preview_link_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_css_loader_index_js_node_modules_sass_loader_dist_cjs_js_vue_preview_link_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_css_loader_index_js_node_modules_sass_loader_dist_cjs_js_vue_preview_link_scss__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js___default()(__WEBPACK_IMPORTED_MODULE_1__node_modules_css_loader_index_js_node_modules_sass_loader_dist_cjs_js_vue_preview_link_scss___default.a, options);



/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_1__node_modules_css_loader_index_js_node_modules_sass_loader_dist_cjs_js_vue_preview_link_scss___default.a.locals || {});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(8),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    small: Boolean,
    large: Boolean,
    image: String,
    dark: Boolean,
    to: String,
    href: String,
    tag: String,
    noBtnInfo: Boolean,
    urlName: String,
    name: String,
    description: String
  },
  computed: {
    existsVueRouter: function existsVueRouter() {
      return !!this.$router;
    },
    tagRender: function tagRender() {
      if (!!this.tag) {
        return this.tag;
      } else {
        if (!!this.to) {
          if (this.existsVueRouter) {
            return "router-link";
          } else {
            console.warn("Vue-preview-link: vue-router not installed then <router-link> not used it to=\"" + this.to);
          }
        }
        return "a";
      }
    },
    isRouterLink: function isRouterLink() {
      return this.tagRender == "router-link";
    },
    urlWebsite: function urlWebsite() {
      if (!!this.urlName) {
        return this.urlName.replace(/^(?:https?|ftps?|rtps|files):\/\//i, "");
      } else {
        return ((!!this.to ? this.to : !!this.href ? this.href : "").match(/([^/\s]+)/) || [])[0];
      }
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VuePreviewLink", function() { return VuePreviewLink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_preview_link_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_preview_link_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_preview_link_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_preview_link_scss__ = __webpack_require__(0);



var LightboxPlugin = {
  install: function install(Vue) {
    Vue.component("vue-preview-link", __WEBPACK_IMPORTED_MODULE_0__vue_preview_link_vue___default.a);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  Vue.use(LightboxPlugin);
}

var VuePreviewLink = __WEBPACK_IMPORTED_MODULE_0__vue_preview_link_vue___default.a;
/* harmony default export */ __webpack_exports__["default"] = (LightboxPlugin);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".preview-link{position:relative;width:100%;display:flex;border:1px solid rgba(0,0,0,.1);text-decoration:none;transition:opacity .15s ease;max-width:720px}.preview-link,.preview-link:active,.preview-link:visibled{color:#050505}.preview-link:hover{opacity:.7}.preview-link.preview-link--dark{border-color:hsla(0,0%,100%,.1)}.preview-link.preview-link--dark,.preview-link.preview-link--dark:active,.preview-link.preview-link--dark:visibled{color:#e5e6e8}.preview-link__btn-info{width:28px;height:28px;border-radius:50%;position:absolute;top:11px;right:12px;text-align:center;vertical-align:middle;display:inline-block;cursor:pointer}.preview-link__image{width:42.2222222222%;position:relative;background-position:50%;background-repeat:no-repeat;background-size:cover}.preview-link__image:before{display:block;content:\"\";padding-top:100%}.preview-link-small .preview-link__image{width:21.1111111111%}.preview-link-small .preview-link__detail--subtitle{display:none}.preview-link-large{flex-wrap:wrap;max-width:1080px}.preview-link-large .preview-link__image{width:100%;max-width:100%}.preview-link-large .preview-link__image:before{padding-top:52.5%}.preview-link__detail{padding:16px 12px;background-color:#f7f8fa;border-left:inherit;flex-basis:0;flex-grow:1;max-width:57.7777777778%}.preview-link__detail--subtitle,.preview-link__detail--url{color:#66676c}.preview-link__detail--url{text-transform:uppercase;font-weight:400;font-size:.9em;max-height:1.2em;-webkit-line-clamp:1}.preview-link__detail--title,.preview-link__detail--url{display:-webkit-box;overflow-y:hidden;word-wrap:break-word}.preview-link__detail--title{font-weight:600;max-height:2.4em;-webkit-line-clamp:2}.preview-link__detail--subtitle{font-size:80%;display:-webkit-box;overflow-y:hidden;word-wrap:break-word;max-height:3.6em;-webkit-line-clamp:3}.preview-link.preview-link--dark .preview-link__detail{background-color:#393a3c}.preview-link.preview-link--dark .preview-link__detail--subtitle,.preview-link.preview-link--dark .preview-link__detail--url{color:#b1b3b7}.preview-link.preview-link--dark .preview-link__detail--title{margin-top:5px;line-height:1.2}.preview-link.preview-link--dark .preview-link__detail--subtitle{line-height:1}.preview-link-small .preview-link__detail{max-width:78.8888888889%}.preview-link-large .preview-link__detail{border-left:0;border-top:inherit;max-width:100%}", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : null;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c(_vm.tagRender, {
    tag: "a",
    staticClass: "preview-link",
    class: {
      'preview-link--dark': _vm.dark,
      'preview-link-small': _vm.small,
      'preview-link-large': _vm.large
    },
    attrs: {
      "to": _vm.isRouterLink ? _vm.to : undefined,
      "href": !_vm.isRouterLink ? _vm.href : undefined
    }
  }, [(!!_vm.image) ? _c('div', {
    staticClass: "preview-link__image",
    style: ({
      'background-image': ("url('" + _vm.image + "')")
    })
  }) : _vm._e(), _vm._v(" "), (!_vm.noBtnInfo) ? _c('div', {
    staticClass: "preview-link__btn-info",
    on: {
      "click": function($event) {
        return _vm.$emit('click:info', $event)
      }
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 44 44",
      "width": "1em",
      "height": "1em",
      "fill": "currentColor"
    }
  }, [_c('g', [_c('g', [_c('g', [_c('path', {
    attrs: {
      "d": "M24.94,31a2.14,2.14,0,0,1-1.29-.29,1.34,1.34,0,0,1-.37-1.1,5.71,5.71,0,0,1,.12-1,11,11,0,0,1,.26-1.12l1.18-4.06a6.15,6.15,0,0,0,.24-1.23c0-.45.06-.76.06-.94a2.63,2.63,0,0,0-.93-2.09,3.91,3.91,0,0,0-2.64-.8,6.85,6.85,0,0,0-2,.33q-1.06.33-2.23.79L17,20.81c.23-.08.51-.17.83-.27a3.4,3.4,0,0,1,.94-.14,1.92,1.92,0,0,1,1.27.31,1.45,1.45,0,0,1,.33,1.09,4.74,4.74,0,0,1-.11,1c-.07.35-.16.72-.27,1.11l-1.19,4.08a11.65,11.65,0,0,0-.23,1.15,7.14,7.14,0,0,0-.07,1,2.61,2.61,0,0,0,1,2.07,4,4,0,0,0,2.68.82,6.17,6.17,0,0,0,2-.29q.85-.29,2.27-.83l.32-1.26a5.53,5.53,0,0,1-.79.26A3.81,3.81,0,0,1,24.94,31Zm-.75-20a2.87,2.87,0,0,0-2,.75,2.39,2.39,0,0,0,0,3.62,3,3,0,0,0,4,0,2.4,2.4,0,0,0,0-3.62A2.85,2.85,0,0,0,24.19,11ZM22,0A22,22,0,1,0,44,22,22,22,0,0,0,22,0Zm0,42A20,20,0,1,1,42,22,20,20,0,0,1,22,42Z"
    }
  })])])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "preview-link__detail"
  }, [_c('div', {
    staticClass: "preview-link__detail--url"
  }, [_vm._v(" " + _vm._s(_vm.urlWebsite) + " ")]), _vm._v(" "), _c('div', {
    staticClass: "preview-link__detail--title"
  }, [_vm._v(" " + _vm._s(_vm.name) + " ")]), _vm._v(" "), (!!_vm.description) ? _c('div', {
    staticClass: "preview-link__detail--subtitle"
  }, [_vm._v(" " + _vm._s(_vm.description) + " ")]) : _vm._e()])])
},staticRenderFns: []}

/***/ })
/******/ ]);
});