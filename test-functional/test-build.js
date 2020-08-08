/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test-pre-build.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../dist/vcard-creator.js":
/*!********************************!*\
  !*** ../dist/vcard-creator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(t,n){ true?module.exports=n():undefined}(\"undefined\"!=typeof self?self:this,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&\"object\"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:t}),2&n&&\"string\"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,\"a\",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p=\"\",e(e.s=45)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e(\"object\"==typeof globalThis&&globalThis)||e(\"object\"==typeof window&&window)||e(\"object\"==typeof self&&self)||e(\"object\"==typeof n&&n)||Function(\"return this\")()}).call(this,e(47))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(0),o=e(23).f,i=e(6),u=e(25),c=e(18),a=e(54),f=e(62);t.exports=function(t,n){var e,s,l,p,v,h=t.target,d=t.global,g=t.stat;if(e=d?r:g?r[h]||c(h,{}):(r[h]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(d?s:h+(g?\".\":\"#\")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,\"sham\",!0),u(e,s,p,t)}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError(\"Can't call method on \"+t);return t}},function(t,n){t.exports=function(t){return\"object\"==typeof t?null!==t:\"function\"==typeof t}},function(t,n,e){var r=e(7),o=e(17),i=e(13);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+\" is not an object\");return t}},function(t,n,e){var r=e(11),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(14),o=e(4);t.exports=function(t){return r(o(t))}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(0),o=e(28),i=e(3),u=e(29),c=e(35),a=e(64),f=o(\"wks\"),s=r.Symbol,l=a?s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)||(c&&i(s,t)?f[t]=s[t]:f[t]=l(\"Symbol.\"+t)),f[t]}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(1),o=e(15),i=\"\".split;t.exports=r((function(){return!Object(\"z\").propertyIsEnumerable(0)}))?function(t){return\"String\"==o(t)?i.call(t,\"\"):Object(t)}:Object},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&\"function\"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if(\"function\"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&\"function\"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError(\"Can't convert object to primitive value\")}},function(t,n,e){var r=e(7),o=e(24),i=e(8),u=e(16),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if(\"get\"in e||\"set\"in e)throw TypeError(\"Accessors not supported\");return\"value\"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(6);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(4);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(7),o=e(1),i=e(3),u=Object.defineProperty,c={},a=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var e=[][t],f=!!i(n,\"ACCESSORS\")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return c[t]=!!e&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?u(t,1,{enumerable:!0,get:a}):t[1]=1,e.call(t,s,l)}))}},function(t,n,e){\"use strict\";var r=e(1);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){\"use strict\";var r,o,i=e(72),u=e(73),c=RegExp.prototype.exec,a=String.prototype.replace,f=c,s=(r=/a/,o=/b*/g,c.call(r,\"a\"),c.call(o,\"a\"),0!==r.lastIndex||0!==o.lastIndex),l=u.UNSUPPORTED_Y||u.BROKEN_CARET,p=void 0!==/()??/.exec(\"\")[1];(s||p||l)&&(f=function(t){var n,e,r,o,u=this,f=l&&u.sticky,v=i.call(u),h=u.source,d=0,g=t;return f&&(-1===(v=v.replace(\"y\",\"\")).indexOf(\"g\")&&(v+=\"g\"),g=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&\"\\n\"!==t[u.lastIndex-1])&&(h=\"(?: \"+h+\")\",g=\" \"+g,d++),e=new RegExp(\"^(?:\"+h+\")\",v)),p&&(e=new RegExp(\"^\"+h+\"$(?!\\\\s)\",v)),s&&(n=u.lastIndex),r=c.call(f?e:u,g),f?r?(r.input=r.input.slice(d),r[0]=r[0].slice(d),r.index=u.lastIndex,u.lastIndex+=r[0].length):u.lastIndex=0:s&&r&&(u.lastIndex=u.global?r.index+r[0].length:n),p&&r&&r.length>1&&a.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=f},function(t,n,e){var r=e(7),o=e(48),i=e(13),u=e(10),c=e(16),a=e(3),f=e(24),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(7),o=e(1),i=e(49);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i(\"div\"),\"a\",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(6),i=e(3),u=e(18),c=e(26),a=e(50),f=a.get,s=a.enforce,l=String(String).split(\"String\");(t.exports=function(t,n,e,c){var a=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;\"function\"==typeof e&&(\"string\"!=typeof n||i(e,\"name\")||o(e,\"name\",n),s(e).source=l.join(\"string\"==typeof n?n:\"\")),t!==r?(a?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:u(n,e)})(Function.prototype,\"toString\",(function(){return\"function\"==typeof this&&f(this).source||c(this)}))},function(t,n,e){var r=e(27),o=Function.toString;\"function\"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(0),o=e(18),i=r[\"__core-js_shared__\"]||o(\"__core-js_shared__\",{});t.exports=i},function(t,n,e){var r=e(53),o=e(27);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})(\"versions\",[]).push({version:\"3.6.5\",mode:r?\"pure\":\"global\",copyright:\"© 2020 Denis Pushkarev (zloirock.ru)\"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return\"Symbol(\"+String(void 0===t?\"\":t)+\")_\"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n,e){var r=e(56),o=e(0),i=function(t){return\"function\"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(10),o=e(9),i=e(59),u=function(t){return function(n,e,u){var c,a=r(n),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(15);t.exports=Array.isArray||function(t){return\"Array\"==r(t)}},function(t,n,e){var r=e(5),o=e(33),i=e(12)(\"species\");t.exports=function(t,n){var e;return o(t)&&(\"function\"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(1),o=e(12),i=e(37),u=o(\"species\");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r,o,i=e(0),u=e(65),c=i.process,a=c&&c.versions,f=a&&a.v8;f?o=(r=f.split(\".\"))[0]+r[1]:u&&(!(r=u.match(/Edge\\/(\\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\\/(\\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(67),o=e(14),i=e(19),u=e(9),c=e(34),a=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,h,d,g){for(var y,x,S=i(v),m=o(S),E=r(h,d,3),b=u(m.length),O=0,P=g||c,T=n?P(v,b):e?P(v,0):void 0;b>O;O++)if((p||O in m)&&(x=E(y=m[O],O,S),t))if(n)T[O]=x;else if(x)switch(t){case 3:return!0;case 5:return y;case 6:return O;case 2:a.call(T,y)}else if(s)return!1;return l?-1:f||s?s:T}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,e){\"use strict\";var r=e(38).forEach,o=e(21),i=e(20),u=o(\"forEach\"),c=i(\"forEach\");t.exports=u&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,e){\"use strict\";var r=e(2),o=e(22);r({target:\"RegExp\",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,e){\"use strict\";e(40);var r=e(25),o=e(1),i=e(12),u=e(22),c=e(6),a=i(\"species\"),f=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:\"7\"},t},\"7\"!==\"\".replace(t,\"$<a>\")})),s=\"$0\"===\"a\".replace(/./,\"$0\"),l=i(\"replace\"),p=!!/./[l]&&\"\"===/./[l](\"a\",\"$0\"),v=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e=\"ab\".split(t);return 2!==e.length||\"a\"!==e[0]||\"b\"!==e[1]}));t.exports=function(t,n,e,l){var h=i(t),d=!o((function(){var n={};return n[h]=function(){return 7},7!=\"\"[t](n)})),g=d&&!o((function(){var n=!1,e=/a/;return\"split\"===t&&((e={}).constructor={},e.constructor[a]=function(){return e},e.flags=\"\",e[h]=/./[h]),e.exec=function(){return n=!0,null},e[h](\"\"),!n}));if(!d||!g||\"replace\"===t&&(!f||!s||p)||\"split\"===t&&!v){var y=/./[h],x=e(h,\"\"[t],(function(t,n,e,r,o){return n.exec===u?d&&!o?{done:!0,value:y.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),S=x[0],m=x[1];r(String.prototype,t,S),r(RegExp.prototype,h,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)})}l&&c(RegExp.prototype[h],\"sham\",!0)}},function(t,n,e){\"use strict\";var r=e(75).charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r=e(15),o=e(22);t.exports=function(t,n){var e=t.exec;if(\"function\"==typeof e){var i=e.call(t,n);if(\"object\"!=typeof i)throw TypeError(\"RegExp exec method returned something other than an Object or null\");return i}if(\"RegExp\"!==r(t))throw TypeError(\"RegExp#exec called on incompatible receiver\");return o.call(t,n)}},function(t,n){t.exports=\"\\t\\n\\v\\f\\r                　\\u2028\\u2029\\ufeff\"},function(t,n,e){var r,o,i;e(46),e(66),e(69),e(70),e(71),e(40),e(74),e(76),e(77),e(80),\"undefined\"!=typeof globalThis?globalThis:\"undefined\"!=typeof self&&self,o=[n,e(82),e(83)],void 0===(i=\"function\"==typeof(r=function(t,n,r){\"use strict\";var o=e(84);Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=void 0,n=o(n),r=o(r);var i=function(){function t(){(0,n.default)(this,t),this.definedElements={},this.multiplePropertiesForElementAllowed=[\"email\",\"address\",\"phoneNumber\",\"url\"],this.properties=[],this.charset=\"utf-8\",this.contentType=\"text/x-vcard\",this.fileExtension=\"vcf\"}return(0,r.default)(t,[{key:\"addAddress\",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:\"\",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:\"\",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:\"\",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:\"\",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:\"\",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:\"\",u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:\"\",c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:\"WORK;POSTAL\",a=\"\".concat(t,\";\").concat(n,\";\").concat(e,\";\").concat(r,\";\").concat(o,\";\").concat(i,\";\").concat(u);return this.setProperty(\"address\",\"ADR\".concat(\"\"!==c?\";\".concat(c):\"\").concat(this.getCharsetString()),a),this}},{key:\"addBirthday\",value:function(t){return this.setProperty(\"birthday\",\"BDAY\",t),this}},{key:\"addCompany\",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:\"\";return this.setProperty(\"company\",\"ORG\".concat(this.getCharsetString()),t+(\"\"!==n?\";\".concat(n):\"\")),this}},{key:\"addEmail\",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:\"\";return this.setProperty(\"email\",\"EMAIL;INTERNET\".concat(\"\"!==n?\";\".concat(n):\"\"),t),this}},{key:\"addJobtitle\",value:function(t){return this.setProperty(\"jobtitle\",\"TITLE\".concat(this.getCharsetString()),t),this}},{key:\"addRole\",value:function(t){return this.setProperty(\"role\",\"ROLE\".concat(this.getCharsetString()),t),this}},{key:\"addMedia\",value:function(t,n){return this}},{key:\"addName\",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:\"\",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:\"\",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:\"\",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:\"\",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:\"\",i=[r,n,e,t,o].filter((function(t){return!!t})),u=\"\".concat(t,\";\").concat(n,\";\").concat(e,\";\").concat(r,\";\").concat(o);return this.setProperty(\"name\",\"N\".concat(this.getCharsetString()),u),this.hasProperty(\"FN\")||this.setProperty(\"fullname\",\"FN\".concat(this.getCharsetString()),i.join(\" \").trim()),this}},{key:\"addNote\",value:function(t){return this.setProperty(\"note\",\"NOTE\".concat(this.getCharsetString()),t),this}},{key:\"addCategories\",value:function(t){return this.setProperty(\"categories\",\"CATEGORIES\".concat(this.getCharsetString()),t.join(\",\").trim()),this}},{key:\"addPhoneNumber\",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:\"\";return this.setProperty(\"phoneNumber\",\"TEL\".concat(\"\"!==n?\";\".concat(n):\"\"),\"\".concat(t)),this}},{key:\"addLogo\",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.addMedia(\"LOGO\",t,n,\"logo\"),this}},{key:\"addPhoto\",value:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.addMedia(\"PHOTO\",t,n,\"photo\"),this}},{key:\"addURL\",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:\"\";return this.setProperty(\"url\",\"URL\".concat(\"\"!==n?\";\".concat(n):\"\"),t),this}},{key:\"buildVCard\",value:function(){var t=this,n=new Date,e=\"\";return e+=\"BEGIN:VCARD\\r\\n\",e+=\"VERSION:3.0\\r\\n\",e+=\"REV:\".concat(n.toISOString(),\"\\r\\n\"),this.getProperties().forEach((function(n){e+=t.fold(\"\".concat(n.key,\":\").concat(t.escape(n.value),\"\\r\\n\"))})),e+=\"END:VCARD\\r\\n\"}},{key:\"fold\",value:function(t){if(t.length<=75)return t;var n=t.match(/.{1,73}/g).join(\"\\r\\n \").trim();return\"\".concat(n,\"\\r\\n\")}},{key:\"escape\",value:function(t){var n=\"\".concat(t).replace(\"\\r\\n\",\"\\\\n\");return n=n.replace(\"\\n\",\"\\\\n\")}},{key:\"toString\",value:function(){return this.getOutput()}},{key:\"getCharset\",value:function(){return this.charset}},{key:\"getCharsetString\",value:function(){var t=\"\";return\"utf-8\"===this.charset&&(t=\";CHARSET=\".concat(this.charset)),t}},{key:\"getContentType\",value:function(){return this.contentType}},{key:\"getFileExtension\",value:function(){return this.fileExtension}},{key:\"getOutput\",value:function(){return this.buildVCard()}},{key:\"getProperties\",value:function(){return this.properties}},{key:\"hasProperty\",value:function(t){return this.getProperties().forEach((function(n){if(n.key===t&&\"\"!==n.value)return!0})),!1}},{key:\"setCharset\",value:function(t){this.charset=t}},{key:\"setProperty\",value:function(t,n,e){if(this.multiplePropertiesForElementAllowed.indexOf(t)<0&&this.definedElements[t])throw new Error(\"This element already exists (\".concat(t,\")\"));this.definedElements[t]=!0,this.properties.push({key:n,value:e})}}]),t}();t.default=i})?r.apply(n,o):r)||(t.exports=i)},function(t,n,e){\"use strict\";var r=e(2),o=e(1),i=e(33),u=e(5),c=e(19),a=e(9),f=e(63),s=e(34),l=e(36),p=e(12),v=e(37),h=p(\"isConcatSpreadable\"),d=v>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=l(\"concat\"),y=function(t){if(!u(t))return!1;var n=t[h];return void 0!==n?!!n:i(t)};r({target:\"Array\",proto:!0,forced:!d||!g},{concat:function(t){var n,e,r,o,i,u=c(this),l=s(u,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(y(i=-1===n?u:arguments[n])){if(p+(o=a(i.length))>9007199254740991)throw TypeError(\"Maximum allowed index exceeded\");for(e=0;e<o;e++,p++)e in i&&f(l,p,i[e])}else{if(p>=9007199254740991)throw TypeError(\"Maximum allowed index exceeded\");f(l,p++,i)}return l.length=p,l}})},function(t,n){var e;e=function(){return this}();try{e=e||new Function(\"return this\")()}catch(t){\"object\"==typeof window&&(e=window)}t.exports=e},function(t,n,e){\"use strict\";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(5),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,e){var r,o,i,u=e(51),c=e(0),a=e(5),f=e(6),s=e(3),l=e(52),p=e(30),v=c.WeakMap;if(u){var h=new v,d=h.get,g=h.has,y=h.set;r=function(t,n){return y.call(h,t,n),n},o=function(t){return d.call(h,t)||{}},i=function(t){return g.call(h,t)}}else{var x=l(\"state\");p[x]=!0,r=function(t,n){return f(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError(\"Incompatible receiver, \"+t+\" required\");return e}}}},function(t,n,e){var r=e(0),o=e(26),i=r.WeakMap;t.exports=\"function\"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(28),o=e(29),i=r(\"keys\");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(3),o=e(55),i=e(23),u=e(17);t.exports=function(t,n){for(var e=o(n),c=u.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||c(t,s,a(n,s))}}},function(t,n,e){var r=e(31),o=e(57),i=e(61),u=e(8);t.exports=r(\"Reflect\",\"ownKeys\")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(58),o=e(60).concat(\"length\",\"prototype\");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(3),o=e(10),i=e(32).indexOf,u=e(30);t.exports=function(t,n){var e,c=o(t),a=0,f=[];for(e in c)!r(u,e)&&r(c,e)&&f.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(11),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=[\"constructor\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"toLocaleString\",\"toString\",\"valueOf\"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(1),o=/#|\\.prototype\\./,i=function(t,n){var e=c[u(t)];return e==f||e!=a&&(\"function\"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,\".\").toLowerCase()},c=i.data={},a=i.NATIVE=\"N\",f=i.POLYFILL=\"P\";t.exports=i},function(t,n,e){\"use strict\";var r=e(16),o=e(17),i=e(13);t.exports=function(t,n,e){var u=r(n);u in t?o.f(t,u,i(0,e)):t[u]=e}},function(t,n,e){var r=e(35);t.exports=r&&!Symbol.sham&&\"symbol\"==typeof Symbol.iterator},function(t,n,e){var r=e(31);t.exports=r(\"navigator\",\"userAgent\")||\"\"},function(t,n,e){\"use strict\";var r=e(2),o=e(38).filter,i=e(36),u=e(20),c=i(\"filter\"),a=u(\"filter\");r({target:\"Array\",proto:!0,forced:!c||!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(68);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(\"function\"!=typeof t)throw TypeError(String(t)+\" is not a function\");return t}},function(t,n,e){\"use strict\";var r=e(2),o=e(39);r({target:\"Array\",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){\"use strict\";var r=e(2),o=e(32).indexOf,i=e(21),u=e(20),c=[].indexOf,a=!!c&&1/[1].indexOf(1,-0)<0,f=i(\"indexOf\"),s=u(\"indexOf\",{ACCESSORS:!0,1:0});r({target:\"Array\",proto:!0,forced:a||!f||!s},{indexOf:function(t){return a?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){\"use strict\";var r=e(2),o=e(14),i=e(10),u=e(21),c=[].join,a=o!=Object,f=u(\"join\",\",\");r({target:\"Array\",proto:!0,forced:a||!f},{join:function(t){return c.call(i(this),void 0===t?\",\":t)}})},function(t,n,e){\"use strict\";var r=e(8);t.exports=function(){var t=r(this),n=\"\";return t.global&&(n+=\"g\"),t.ignoreCase&&(n+=\"i\"),t.multiline&&(n+=\"m\"),t.dotAll&&(n+=\"s\"),t.unicode&&(n+=\"u\"),t.sticky&&(n+=\"y\"),n}},function(t,n,e){\"use strict\";var r=e(1);function o(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=o(\"a\",\"y\");return t.lastIndex=2,null!=t.exec(\"abcd\")})),n.BROKEN_CARET=r((function(){var t=o(\"^r\",\"gy\");return t.lastIndex=2,null!=t.exec(\"str\")}))},function(t,n,e){\"use strict\";var r=e(41),o=e(8),i=e(9),u=e(4),c=e(42),a=e(43);r(\"match\",1,(function(t,n,e){return[function(n){var e=u(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var u=o(t),f=String(this);if(!u.global)return a(u,f);var s=u.unicode;u.lastIndex=0;for(var l,p=[],v=0;null!==(l=a(u,f));){var h=String(l[0]);p[v]=h,\"\"===h&&(u.lastIndex=c(f,i(u.lastIndex),s)),v++}return 0===v?null:p}]}))},function(t,n,e){var r=e(11),o=e(4),i=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),f=c.length;return a<0||a>=f?t?\"\":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){\"use strict\";var r=e(41),o=e(8),i=e(19),u=e(9),c=e(11),a=e(4),f=e(42),s=e(43),l=Math.max,p=Math.min,v=Math.floor,h=/\\$([$&'`]|\\d\\d?|<[^>]*>)/g,d=/\\$([$&'`]|\\d\\d?)/g;r(\"replace\",2,(function(t,n,e,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=r.REPLACE_KEEPS_$0,x=g?\"$\":\"$0\";return[function(e,r){var o=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,r){if(!g&&y||\"string\"==typeof r&&-1===r.indexOf(x)){var i=e(n,t,this,r);if(i.done)return i.value}var a=o(t),v=String(this),h=\"function\"==typeof r;h||(r=String(r));var d=a.global;if(d){var m=a.unicode;a.lastIndex=0}for(var E=[];;){var b=s(a,v);if(null===b)break;if(E.push(b),!d)break;\"\"===String(b[0])&&(a.lastIndex=f(v,u(a.lastIndex),m))}for(var O,P=\"\",T=0,w=0;w<E.length;w++){b=E[w];for(var C=String(b[0]),R=l(p(c(b.index),v.length),0),A=[],j=1;j<b.length;j++)A.push(void 0===(O=b[j])?O:String(O));var k=b.groups;if(h){var L=[C].concat(A,R,v);void 0!==k&&L.push(k);var I=String(r.apply(void 0,L))}else I=S(C,v,R,A,k,r);R>=T&&(P+=v.slice(T,R)+I,T=R+C.length)}return P+v.slice(T)}];function S(t,e,r,o,u,c){var a=r+t.length,f=o.length,s=d;return void 0!==u&&(u=i(u),s=h),n.call(c,s,(function(n,i){var c;switch(i.charAt(0)){case\"$\":return\"$\";case\"&\":return t;case\"`\":return e.slice(0,r);case\"'\":return e.slice(a);case\"<\":c=u[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>f){var l=v(s/10);return 0===l?n:l<=f?void 0===o[l-1]?i.charAt(1):o[l-1]+i.charAt(1):n}c=o[s-1]}return void 0===c?\"\":c}))}}))},function(t,n,e){\"use strict\";var r=e(2),o=e(78).trim;r({target:\"String\",proto:!0,forced:e(79)(\"trim\")},{trim:function(){return o(this)}})},function(t,n,e){var r=e(4),o=\"[\"+e(44)+\"]\",i=RegExp(\"^\"+o+o+\"*\"),u=RegExp(o+o+\"*$\"),c=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(i,\"\")),2&t&&(e=e.replace(u,\"\")),e}};t.exports={start:c(1),end:c(2),trim:c(3)}},function(t,n,e){var r=e(1),o=e(44);t.exports=function(t){return r((function(){return!!o[t]()||\"​᠎\"!=\"​᠎\"[t]()||o[t].name!==t}))}},function(t,n,e){var r=e(0),o=e(81),i=e(39),u=e(6);for(var c in o){var a=r[c],f=a&&a.prototype;if(f&&f.forEach!==i)try{u(f,\"forEach\",i)}catch(t){f.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError(\"Cannot call a class as a function\")}},function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},function(t,n){t.exports=function(t){return t&&t.__esModule?t:{default:t}}}])}));\n\n//# sourceURL=webpack:///../dist/vcard-creator.js?");

/***/ }),

/***/ "./test-pre-build.js":
/*!***************************!*\
  !*** ./test-pre-build.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"../dist/vcard-creator.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_0__);\n\n\n// define vcard\nvar vcard = new ___WEBPACK_IMPORTED_MODULE_0___default.a()\n\n// define variables\nvar lastname = 'Desloovere'\nvar firstname = 'Jeroen'\nvar additional = ''\nvar prefix = ''\nvar suffix = ''\n\n// add personal data\nvcard.addName(lastname, firstname, additional, prefix, suffix)\n\n// add work data\nvcard.addCompany('Siesqo')\nvcard.addJobtitle('Web Developer')\nvcard.addRole('Data Protection Officer')\nvcard.addEmail('info@jeroendesloovere.be')\nvcard.addPhoneNumber(1234121212, 'PREF;WORK')\nvcard.addPhoneNumber(123456789, 'WORK')\nvcard.addAddress('name', 'extended', 'street', 'worktown', 'state', 'workpostcode', 'Belgium')\nvcard.addURL('http://www.jeroendesloovere.be')\n\nvar output = vcard.toString()\n\nconsole.log(output)\n\ndocument.getElementById('vcard').innerHTML = output\n\n\n//# sourceURL=webpack:///./test-pre-build.js?");

/***/ })

/******/ });