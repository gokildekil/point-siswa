/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		29: 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		29: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"1":"chunk-common"}[chunkId]||chunkId) + "." + {"1":"0ccd0575","2":"046ffd33","3":"0ea3fcfc","4":"948615a6","5":"cde1def7","6":"63b8514a","7":"1060b1b0","8":"1a373829","9":"809383d5","10":"5f20843e","11":"a8915718","12":"d1f92f6e","13":"f69ffa99","14":"bb6d30b0","15":"fda797a9","16":"d705e239","17":"ee56f0d2","18":"9543dbd1","19":"8a7bb43d","20":"52b8e52b","21":"2128a649","22":"24e15e13","23":"6a6e2e26","24":"25537503","25":"1e40956b","26":"af57073f","27":"e8739210","28":"b80f5ebe","30":"c1550e73","31":"cb8d0ade"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"30":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({"1":"chunk-common"}[chunkId]||chunkId) + "." + {"1":"31d6cfe0","2":"31d6cfe0","3":"31d6cfe0","4":"31d6cfe0","5":"31d6cfe0","6":"31d6cfe0","7":"31d6cfe0","8":"31d6cfe0","9":"31d6cfe0","10":"31d6cfe0","11":"31d6cfe0","12":"31d6cfe0","13":"31d6cfe0","14":"31d6cfe0","15":"31d6cfe0","16":"31d6cfe0","17":"31d6cfe0","18":"31d6cfe0","19":"31d6cfe0","20":"31d6cfe0","21":"31d6cfe0","22":"31d6cfe0","23":"31d6cfe0","24":"31d6cfe0","25":"31d6cfe0","26":"31d6cfe0","27":"31d6cfe0","28":"31d6cfe0","30":"af16e999","31":"31d6cfe0"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2f39");


/***/ }),

/***/ "0047":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "034f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ed82");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2f39":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/roboto-font/roboto-font.css
var roboto_font = __webpack_require__("7d6e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/fontawesome-v5/fontawesome-v5.css
var fontawesome_v5 = __webpack_require__("573e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounce.css
var bounce = __webpack_require__("4439");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flash.css
var flash = __webpack_require__("4605");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flip.css
var flip = __webpack_require__("f580");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/headShake.css
var headShake = __webpack_require__("5b2b");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/heartBeat.css
var heartBeat = __webpack_require__("8753");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/hinge.css
var hinge = __webpack_require__("2967");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/jello.css
var jello = __webpack_require__("7e67");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/pulse.css
var pulse = __webpack_require__("d770");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rubberBand.css
var rubberBand = __webpack_require__("dd82");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/shake.css
var shake = __webpack_require__("922c");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/shakeX.css
var shakeX = __webpack_require__("d7fb");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/shakeY.css
var shakeY = __webpack_require__("a533");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/swing.css
var swing = __webpack_require__("c32e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/tada.css
var tada = __webpack_require__("a151");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/wobble.css
var wobble = __webpack_require__("8bc7");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/backInDown.css
var backInDown = __webpack_require__("e80f");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/backInLeft.css
var backInLeft = __webpack_require__("5fec");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/backInRight.css
var backInRight = __webpack_require__("e42f");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/backInUp.css
var backInUp = __webpack_require__("57fc");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceIn.css
var bounceIn = __webpack_require__("d67f");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceInDown.css
var bounceInDown = __webpack_require__("880e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceInLeft.css
var bounceInLeft = __webpack_require__("1c10");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceInRight.css
var bounceInRight = __webpack_require__("9482");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceInUp.css
var bounceInUp = __webpack_require__("e797");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeIn.css
var fadeIn = __webpack_require__("4848");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInBottomLeft.css
var fadeInBottomLeft = __webpack_require__("53d0");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInBottomRight.css
var fadeInBottomRight = __webpack_require__("63b1");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInDown.css
var fadeInDown = __webpack_require__("e9fd");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInDownBig.css
var fadeInDownBig = __webpack_require__("195c");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInLeft.css
var fadeInLeft = __webpack_require__("64e9");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInLeftBig.css
var fadeInLeftBig = __webpack_require__("33c5");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInRight.css
var fadeInRight = __webpack_require__("4f62");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInRightBig.css
var fadeInRightBig = __webpack_require__("0dbc");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInTopLeft.css
var fadeInTopLeft = __webpack_require__("7c38");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInTopRight.css
var fadeInTopRight = __webpack_require__("0756");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInUp.css
var fadeInUp = __webpack_require__("4953");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeInUpBig.css
var fadeInUpBig = __webpack_require__("81db");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flipInX.css
var flipInX = __webpack_require__("2e52");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flipInY.css
var flipInY = __webpack_require__("22485");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/jackInTheBox.css
var jackInTheBox = __webpack_require__("7797");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/lightSpeedInLeft.css
var lightSpeedInLeft = __webpack_require__("12a1");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/lightSpeedInRight.css
var lightSpeedInRight = __webpack_require__("ce96");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rollIn.css
var rollIn = __webpack_require__("70ca");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateIn.css
var rotateIn = __webpack_require__("2318");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateInDownLeft.css
var rotateInDownLeft = __webpack_require__("24bd");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateInDownRight.css
var rotateInDownRight = __webpack_require__("8f27");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateInUpLeft.css
var rotateInUpLeft = __webpack_require__("3064");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateInUpRight.css
var rotateInUpRight = __webpack_require__("c9a2");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideInDown.css
var slideInDown = __webpack_require__("8767");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideInLeft.css
var slideInLeft = __webpack_require__("4a8e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideInRight.css
var slideInRight = __webpack_require__("b828");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideInUp.css
var slideInUp = __webpack_require__("3c1c");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomIn.css
var zoomIn = __webpack_require__("21cb");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomInDown.css
var zoomInDown = __webpack_require__("c00e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomInLeft.css
var zoomInLeft = __webpack_require__("e4a8");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomInRight.css
var zoomInRight = __webpack_require__("e4d3");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomInUp.css
var zoomInUp = __webpack_require__("f4d9");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/backOutDown.css
var backOutDown = __webpack_require__("fffd");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/backOutLeft.css
var backOutLeft = __webpack_require__("f645");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/backOutRight.css
var backOutRight = __webpack_require__("639e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/backOutUp.css
var backOutUp = __webpack_require__("34ee");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceOut.css
var bounceOut = __webpack_require__("b794");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceOutDown.css
var bounceOutDown = __webpack_require__("af24");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceOutLeft.css
var bounceOutLeft = __webpack_require__("7c9c");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceOutRight.css
var bounceOutRight = __webpack_require__("7bb2");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/bounceOutUp.css
var bounceOutUp = __webpack_require__("64f7");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOut.css
var fadeOut = __webpack_require__("c382");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutBottomLeft.css
var fadeOutBottomLeft = __webpack_require__("053c");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutBottomRight.css
var fadeOutBottomRight = __webpack_require__("c48f");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutDown.css
var fadeOutDown = __webpack_require__("f5d1");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutDownBig.css
var fadeOutDownBig = __webpack_require__("3cec");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutLeft.css
var fadeOutLeft = __webpack_require__("c00ee");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutLeftBig.css
var fadeOutLeftBig = __webpack_require__("d450");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutRight.css
var fadeOutRight = __webpack_require__("ca07");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutRightBig.css
var fadeOutRightBig = __webpack_require__("14e3");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutTopLeft.css
var fadeOutTopLeft = __webpack_require__("9393");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutTopRight.css
var fadeOutTopRight = __webpack_require__("9227");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutUp.css
var fadeOutUp = __webpack_require__("1dba");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/fadeOutUpBig.css
var fadeOutUpBig = __webpack_require__("674a");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flipOutX.css
var flipOutX = __webpack_require__("de26");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/flipOutY.css
var flipOutY = __webpack_require__("6721");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/lightSpeedOutLeft.css
var lightSpeedOutLeft = __webpack_require__("9cb5");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/lightSpeedOutRight.css
var lightSpeedOutRight = __webpack_require__("ed9b");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rollOut.css
var rollOut = __webpack_require__("fc83");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateOut.css
var rotateOut = __webpack_require__("98e5");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateOutDownLeft.css
var rotateOutDownLeft = __webpack_require__("605a");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateOutDownRight.css
var rotateOutDownRight = __webpack_require__("ba60");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateOutUpLeft.css
var rotateOutUpLeft = __webpack_require__("df07");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/rotateOutUpRight.css
var rotateOutUpRight = __webpack_require__("7903");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideOutDown.css
var slideOutDown = __webpack_require__("e046");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideOutLeft.css
var slideOutLeft = __webpack_require__("58af");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideOutRight.css
var slideOutRight = __webpack_require__("7713");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/slideOutUp.css
var slideOutUp = __webpack_require__("0571");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomOut.css
var zoomOut = __webpack_require__("3e27");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomOutDown.css
var zoomOutDown = __webpack_require__("6837");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomOutLeft.css
var zoomOutLeft = __webpack_require__("3fc9");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomOutRight.css
var zoomOutRight = __webpack_require__("0693");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/animate/zoomOutUp.css
var zoomOutUp = __webpack_require__("bf41");

// EXTERNAL MODULE: ./node_modules/quasar/dist/quasar.sass
var quasar = __webpack_require__("985d");

// EXTERNAL MODULE: ./src/css/app.sass
var css_app = __webpack_require__("0047");

// EXTERNAL MODULE: ./node_modules/@quasar/quasar-ui-qcalendar/src/index.sass
var src = __webpack_require__("b6d8");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/quasar/lang/en-us.js
var en_us = __webpack_require__("1f91");

// EXTERNAL MODULE: ./node_modules/quasar/icon-set/fontawesome-v5.js
var icon_set_fontawesome_v5 = __webpack_require__("b3f7");

// EXTERNAL MODULE: ./node_modules/quasar/src/vue-plugin.js + 1 modules
var vue_plugin = __webpack_require__("b05d");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Dialog.js + 5 modules
var Dialog = __webpack_require__("436b");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js
var Notify = __webpack_require__("2a19");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/BottomSheet.js + 1 modules
var BottomSheet = __webpack_require__("7518");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Loading.js
var Loading = __webpack_require__("f508");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/LoadingBar.js + 1 modules
var LoadingBar = __webpack_require__("1b3f");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Meta.js
var Meta = __webpack_require__("9c64");

// CONCATENATED MODULE: ./.quasar/import-quasar.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



;
vue_runtime_esm["a" /* default */].use(vue_plugin["a" /* default */], {
  config: {},
  lang: en_us["a" /* default */],
  iconSet: icon_set_fontawesome_v5["a" /* default */],
  plugins: {
    Dialog: Dialog["a" /* default */],
    Notify: Notify["a" /* default */],
    BottomSheet: BottomSheet["a" /* default */],
    Loading: Loading["a" /* default */],
    LoadingBar: LoadingBar["a" /* default */],
    Meta: Meta["a" /* default */]
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=037b6655&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"q-app"}},[_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=037b6655&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App'
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__("034f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./src/store/page_components.js
const pageComponents = {
  namespaced: true,
  state: {
    leftDrawer: true,
    leftDrawerMini: false,
    rightDrawer: false,
    rightDrawerWidth: 400,
    pageErrors: [],
    pageComponent: '',
    pageUrl: '',
    pageData: null,
    dialogProps: {
      seamless: false,
      position: 'standard',
      persistent: false,
      maximized: false,
      closeBtn: false,
      width: '700px',
      width: '95vw'
    },
    pageDialog: false,
    imageViewerDialog: false,
    imageViewerCurrentSlide: 1,
    imageViewerImages: [],
    modelBind: {}
  },
  getters: {
    isDialogOpen(state) {
      if (state.pageDialog || state.rightDrawer) {
        return true;
      }

      return false;
    }

  },
  mutations: {
    setDialogProps(state, dialog) {
      if (dialog) {
        state.dialogProps.seamless = dialog.seamless || false;
        state.dialogProps.persistent = dialog.persistent || false;
        state.dialogProps.position = dialog.position || 'standard';
        state.dialogProps.maximized = dialog.maximized || false;
        state.dialogProps.closeBtn = dialog.closeBtn || false;

        if (dialog.maximized) {
          state.dialogProps.width = dialog.width || '';
          state.dialogProps.maxWidth = '';
        } else {
          state.dialogProps.width = dialog.width || '700px';
          state.dialogProps.maxWidth = '95vw';
        }
      }
    },

    setDrawerProps(state, drawer) {
      if (drawer) {
        state.rightDrawerWidth = drawer.width || 400;
      }
    },

    setImageViewerDialog(state, value) {
      state.imageViewerDialog = value;
    },

    setImageViewerCurrentSlide(state, value) {
      state.imageViewerCurrentSlide = value;
    },

    setImageViewerImages(state, value) {
      state.imageViewerImages = value;
    },

    setLeftDrawer(state, value) {
      state.leftDrawer = value;
    },

    setLeftDrawerMini(state, value) {
      state.leftDrawerMini = value;
    },

    setRightDrawer(state, value) {
      state.rightDrawer = value;
    },

    setPageDialog(state, value) {
      state.pageDialog = value;
    },

    setPageComponent(state, value) {
      state.pageComponent = value;
    },

    setPageModelBind(state, value) {
      state.modelBind = value;
    },

    setPageUrl(state, value) {
      state.pageUrl = value;
    },

    setPageData(state, value) {
      state.pageData = value;
    },

    setPageErrors(state, errors) {
      state.pageErrors = errors;
    }

  },
  actions: {
    openPageDrawer: ({
      commit
    }, payload) => {
      var _payload$pageData, _payload$formdata;

      let page = payload.page || null;
      let url = payload.url || null;
      let pageData = (_payload$pageData = payload.pageData) !== null && _payload$pageData !== void 0 ? _payload$pageData : null;
      let modelBind = (_payload$formdata = payload.formdata) !== null && _payload$formdata !== void 0 ? _payload$formdata : {};
      commit("setPageModelBind", modelBind);
      commit("setPageUrl", url);
      commit("setPageComponent", page);
      commit("setPageData", pageData);
      commit("setRightDrawer", true);
    },
    openPageDialog: ({
      commit
    }, payload) => {
      var _payload$pageData2, _payload$formdata2;

      let page = payload.page || null;
      let url = payload.url || null;
      let pageData = (_payload$pageData2 = payload.pageData) !== null && _payload$pageData2 !== void 0 ? _payload$pageData2 : null;
      let modelBind = (_payload$formdata2 = payload.formdata) !== null && _payload$formdata2 !== void 0 ? _payload$formdata2 : {};
      commit("setPageModelBind", modelBind);
      commit("setPageUrl", url);
      commit("setPageComponent", page);
      commit("setPageData", pageData);
      commit("setPageDialog", true);
    },
    openImageViewDialog: ({
      commit
    }, payload) => {
      const {
        images,
        currentSlide
      } = payload;
      commit("setImageViewerDialog", true);
      commit("setImageViewerCurrentSlide", currentSlide);
      commit("setImageViewerImages", images);
    },
    showPageErrors: ({
      commit
    }, errors) => {
      commit("setPageErrors", errors);
    }
  }
};
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/services/storage.js
/**
 * Manage the how Access User Login data and Auth Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to sessionStorage or localStorage
**/
const TOKEN_KEY = 'token';
const LOCALE_KEY = 'locale';
const StorageService = {
  setLocale(locale) {
    localStorage.setItem(LOCALE_KEY, locale);
  },

  getLocale() {
    return localStorage.getItem(LOCALE_KEY);
  },

  getToken() {
    return sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY);
  },

  saveLoginData(loginData, remember) {
    let token = loginData.token;

    if (remember) {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      sessionStorage.setItem(TOKEN_KEY, token);
    }
  },

  removeLoginData() {
    sessionStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_KEY); //remove language locale

    localStorage.removeItem(LOCALE_KEY);
  }

};
// CONCATENATED MODULE: ./src/services/api.js


const ApiService = {
  init(baseURL) {
    axios_default.a.defaults.baseURL = baseURL; //axios.defaults.headers.post['Content-Type']  = 'application/x-www-form-urlencoded';

    axios_default.a.defaults.headers.post['Content-Type'] = 'application/json'; // If token exists set header

    let token = StorageService.getToken();

    if (token) {
      axios_default.a.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  },

  removeHeader() {
    axios_default.a.defaults.headers.common = {};
  },

  get(apiPath) {
    return axios_default.a.get(apiPath);
  },

  download(apiPath) {
    return axios_default()({
      url: apiPath,
      method: 'GET',
      responseType: 'blob' // important

    });
  },

  post(apiPath, data) {
    return axios_default.a.post(apiPath, data);
  },

  put(apiPath, data) {
    return axios_default.a.put(apiPath, formData);
  },

  delete(apiPath) {
    return axios_default.a.delete(apiPath);
  },

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
  **/
  customRequest(data) {
    return axios_default()(data);
  },

  axios() {
    return axios_default.a;
  }

};
// CONCATENATED MODULE: ./src/store/app_store.js


/**
    App Vuex Store
	Access store object from any component use:

    this.$store.state.propName
    this.store.getters.getProp 
    this.$store.commit("setProps")
    this.store.dispatch("actionName")
*/
 //Store state

const state = {
  propName: "Store state value"
}; //Store getters

const getters = {
  getProp(state) {
    return state.propName;
  }

}; //Store mutations

const mutations = {
  setProp(state, records) {
    state.propName = records;
  }

}; //Store actions

const actions = {
  fetchData: ({
    commit
  }, arg) => {
    let apiPath = "/controller/action";
    return new Promise((resolve, reject) => {
      ApiService.get(apiPath).then(resp => {
        let data = resp.data;
        commit("setProp", data);
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }
};

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// CONCATENATED MODULE: ./src/store/tb_wali.js



const tb_wali = {
  namespaced: true,
  state: {
    currentRecord: null,
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    },

    currentRecord(state) {
      return state.currentRecord;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    setCurrentRecord(state, record) {
      state.currentRecord = record;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/tb_kelas.js



const tb_kelas = {
  namespaced: true,
  state: {
    currentRecord: null,
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    },

    currentRecord(state) {
      return state.currentRecord;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    setCurrentRecord(state, record) {
      state.currentRecord = record;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/tb_tipe_pelanggaran.js



const tb_tipe_pelanggaran = {
  namespaced: true,
  state: {
    currentRecord: null,
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    },

    currentRecord(state) {
      return state.currentRecord;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    setCurrentRecord(state, record) {
      state.currentRecord = record;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/tb_guru.js



const tb_guru = {
  namespaced: true,
  state: {
    currentRecord: null,
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    },

    currentRecord(state) {
      return state.currentRecord;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    setCurrentRecord(state, record) {
      state.currentRecord = record;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/tb_siswa.js



const tb_siswa = {
  namespaced: true,
  state: {
    currentRecord: null,
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    },

    currentRecord(state) {
      return state.currentRecord;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    setCurrentRecord(state, record) {
      state.currentRecord = record;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/tb_pelanggaran.js



const tb_pelanggaran = {
  namespaced: true,
  state: {
    currentRecord: null,
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    },

    currentRecord(state) {
      return state.currentRecord;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    setCurrentRecord(state, record) {
      state.currentRecord = record;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item['id'] === record['id']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item['id'] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item['id'] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/laporan.js



const laporan = {
  namespaced: true,
  state: {
    currentRecord: null,
    records: [],
    requestError: null
  },
  getters: {
    records(state) {
      return state.records;
    },

    currentRecord(state) {
      return state.currentRecord;
    }

  },
  mutations: {
    setRecords(state, records) {
      state.records = records;
    },

    setCurrentRecord(state, record) {
      state.currentRecord = record;
    },

    mergeRecords(state, records) {
      state.records = state.records.concat(records);
    },

    addRecord(state, record) {
      if (Array.isArray(record)) {
        for (let index = 0; index < record.length; index++) {
          state.records.unshift(record[index]);
        }
      } else {
        state.records.unshift(record);
        state.currentRecord = record;
      }
    },

    updateRecord(state, record) {
      const item = state.records.find(item => item[''] === record['']);

      if (item) {
        Object.assign(item, record);
      }
    },

    deleteRecord(state, id) {
      if (Array.isArray(id)) {
        id.forEach(itemId => {
          let itemIndex = state.records.findIndex(item => item[''] == itemId);

          if (itemIndex != -1) {
            state.records.splice(itemIndex, 1);
          }
        });
      } else {
        let itemIndex = state.records.findIndex(item => item[''] == id);

        if (itemIndex != -1) {
          state.records.splice(itemIndex, 1);
        }
      }
    },

    setError(state, errors) {
      state.requestError = error;
    }

  },
  actions: {
    fetchRecords: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        let url = payload.url;
        let merge = payload.merge;
        ApiService.get(url).then(resp => {
          let data = resp.data;

          if (data.records) {
            let records = data.records;

            if (merge) {
              commit("mergeRecords", records);
            } else {
              commit("setRecords", records);
            }

            resolve(data);
          } else {
            reject("invalid json data");
          }
        }).catch(err => {
          reject(err);
        });
      });
    },
    fetchRecord: ({
      commit
    }, url) => {
      return new Promise((resolve, reject) => {
        ApiService.get(url).then(resp => {
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    saveRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("addRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    updateRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let payload = data.payload;
        ApiService.post(url, payload).then(resp => {
          let record = resp.data;
          commit("updateRecord", record);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    },
    deleteRecord: ({
      commit
    }, data) => {
      return new Promise((resolve, reject) => {
        let url = data.url;
        let id = data.id;
        ApiService.get(url).then(resp => {
          commit("deleteRecord", id);
          resolve(resp);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};
// CONCATENATED MODULE: ./src/store/index.js











vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);
/* harmony default export */ var src_store = (function ()
/* { ssrContext } */
{
  const Store = new vuex_esm["a" /* default */].Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
    modules: {
      pageComponents: pageComponents,
      tb_wali: tb_wali,
      tb_kelas: tb_kelas,
      tb_tipe_pelanggaran: tb_tipe_pelanggaran,
      tb_guru: tb_guru,
      tb_siswa: tb_siswa,
      tb_pelanggaran: tb_pelanggaran,
      laporan: laporan
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: false
  });
  return Store;
});
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./src/router/index.js



vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
let routes = [{
  name: 'main',
  path: '/',
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, "713b")),
  children: [{
    path: '/(home)?',
    name: 'home',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, "22cd")),
    props: true
  }, //Dashboard routes
  //tb_wali routes
  {
    path: '/tb_wali/',
    name: 'tb_walilist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, "6a6d")),
    props: true
  }, {
    path: '/tb_wali/(list|index)/:fieldName?/:fieldValue?',
    name: 'tb_walilistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, "6a6d")),
    props: true
  }, {
    path: '/tb_wali/view/:id',
    name: 'tb_waliview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, "a200")),
    props: true
  }, {
    path: '/tb_wali/add',
    name: 'tb_waliadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, "4719")),
    props: true
  }, {
    path: '/tb_wali/edit/:id',
    name: 'tb_waliedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, "ab82")),
    props: true
  }, //tb_kelas routes
  {
    path: '/tb_kelas/',
    name: 'tb_kelaslist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "2df2")),
    props: true
  }, {
    path: '/tb_kelas/(list|index)/:fieldName?/:fieldValue?',
    name: 'tb_kelaslistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "2df2")),
    props: true
  }, {
    path: '/tb_kelas/view/:id',
    name: 'tb_kelasview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, "a62b")),
    props: true
  }, {
    path: '/tb_kelas/add',
    name: 'tb_kelasadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, "a5f9")),
    props: true
  }, {
    path: '/tb_kelas/edit/:id',
    name: 'tb_kelasedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, "775b")),
    props: true
  }, //tb_tipe_pelanggaran routes
  {
    path: '/tb_tipe_pelanggaran/',
    name: 'tb_tipe_pelanggaranlist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, "5be4")),
    props: true
  }, {
    path: '/tb_tipe_pelanggaran/(list|index)/:fieldName?/:fieldValue?',
    name: 'tb_tipe_pelanggaranlistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, "5be4")),
    props: true
  }, {
    path: '/tb_tipe_pelanggaran/view/:id',
    name: 'tb_tipe_pelanggaranview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, "0c76")),
    props: true
  }, {
    path: '/tb_tipe_pelanggaran/add',
    name: 'tb_tipe_pelanggaranadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, "521b")),
    props: true
  }, {
    path: '/tb_tipe_pelanggaran/edit/:id',
    name: 'tb_tipe_pelanggaranedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, "bf64")),
    props: true
  }, //tb_guru routes
  {
    path: '/tb_guru/',
    name: 'tb_gurulist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "8de9")),
    props: true
  }, {
    path: '/tb_guru/(list|index)/:fieldName?/:fieldValue?',
    name: 'tb_gurulistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "8de9")),
    props: true
  }, {
    path: '/tb_guru/view/:id',
    name: 'tb_guruview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, "dc51")),
    props: true
  }, {
    path: '/tb_guru/add',
    name: 'tb_guruadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, "2a33")),
    props: true
  }, {
    path: '/tb_guru/edit/:id',
    name: 'tb_guruedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, "4708")),
    props: true
  }, //tb_siswa routes
  {
    path: '/tb_siswa/',
    name: 'tb_siswalist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, "8a46")),
    props: true
  }, {
    path: '/tb_siswa/(list|index)/:fieldName?/:fieldValue?',
    name: 'tb_siswalistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, "8a46")),
    props: true
  }, {
    path: '/tb_siswa/view/:id',
    name: 'tb_siswaview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, "ed72")),
    props: true
  }, {
    path: '/tb_siswa/add',
    name: 'tb_siswaadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, "5b55")),
    props: true
  }, {
    path: '/tb_siswa/edit/:id',
    name: 'tb_siswaedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, "d040")),
    props: true
  }, //tb_pelanggaran routes
  {
    path: '/tb_pelanggaran/',
    name: 'tb_pelanggaranlist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, "e749")),
    props: true
  }, {
    path: '/tb_pelanggaran/(list|index)/:fieldName?/:fieldValue?',
    name: 'tb_pelanggaranlistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, "e749")),
    props: true
  }, {
    path: '/tb_pelanggaran/view/:id',
    name: 'tb_pelanggaranview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, "9c2c")),
    props: true
  }, {
    path: '/tb_pelanggaran/add',
    name: 'tb_pelanggaranadd',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "9b1e")),
    props: true
  }, {
    path: '/tb_pelanggaran/edit/:id',
    name: 'tb_pelanggaranedit',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "e12b")),
    props: true
  }, //laporan routes
  {
    path: '/laporan/',
    name: 'laporanlist',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "e1c5")),
    props: true
  }, {
    path: '/laporan/(list|index)/:fieldName?/:fieldValue?',
    name: 'laporanlistfilter',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "e1c5")),
    props: true
  }, {
    path: '/laporan/view/:id',
    name: 'laporanview',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "0d9b")),
    props: true
  }, {
    path: '/error/forbidden',
    name: 'forbidden',
    component: () => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, "601c")),
    props: true
  }, {
    path: '/error/notfound',
    name: 'notfound',
    component: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, "422c")),
    props: true
  }]
}];
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

/* harmony default export */ var src_router = (async function ({
  store,
  ssrContext
}) {
  let mainRoute = routes.find(x => x.name = "main"); // Always leave this as last one

  if (true) {
    mainRoute.children.push({
      path: '*',
      component: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, "422c"))
    });
  }

  const Router = new vue_router_esm["a" /* default */]({
    scrollBehavior: () => ({
      x: 0,
      y: 0
    }),
    routes,
    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: "hash",
    base: ""
  });
  return Router;
});
// CONCATENATED MODULE: ./.quasar/app.js


/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/





/* harmony default export */ var _quasar_app = (async function () {
  // create store and router instances
  const store = typeof src_store === 'function' ? await src_store({
    Vue: vue_runtime_esm["a" /* default */]
  }) : src_store;
  const router = typeof src_router === 'function' ? await src_router({
    Vue: vue_runtime_esm["a" /* default */],
    store
  }) : src_router; // make router instance available in store

  store.$router = router; // Create the app instantiation Object.
  // Here we inject the router, store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    router,
    store,
    render: h => h(App)
  };
  app.el = '#q-app'; // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.

  return {
    app,
    store,
    router
  };
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AutoCompleteSelect.vue?vue&type=template&id=7a4f6fa4&
var AutoCompleteSelectvue_type_template_id_7a4f6fa4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-select',_vm._b({attrs:{"label":_vm.label,"loading":_vm.loading,"use-input":"","hide-selected":"","fill-input":"","emit-value":"","map-options":"","options":_vm.options},on:{"filter":_vm.filterFn,"input":_vm.emitValue},scopedSlots:_vm._u([{key:"no-option",fn:function(){return [_c('q-item',[_c('q-item-section',{staticClass:"text-grey"},[_vm._v("\n              No results\n            ")])],1)]},proxy:true}]),model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'q-select',_vm.$attrs,false))}
var AutoCompleteSelectvue_type_template_id_7a4f6fa4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AutoCompleteSelect.vue?vue&type=template&id=7a4f6fa4&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AutoCompleteSelect.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AutoCompleteSelectvue_type_script_lang_js_ = ({
  props: {
    apiPath: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ''
    },
    value: ''
  },
  data: function () {
    return {
      loading: false,
      model: null,
      options: []
    };
  },
  methods: {
    filterFn(val, update, abort) {
      if (!val) {
        abort();
        return;
      }

      let qs = this.$utils.serializeQuery({
        search: val
      });
      let url = this.apiPath + "?" + qs;
      this.loading = true;
      this.$api.get(url).then(response => {
        this.loading = false;
        update(() => {
          this.options = response.data;
        });
      }, response => {
        this.loading = false;
      });
    },

    emitValue() {
      this.$emit('input', this.model);
    }

  },

  mounted() {
    if (this.value) {
      this.model = this.value;
    }
  }

});
// CONCATENATED MODULE: ./src/components/AutoCompleteSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AutoCompleteSelectvue_type_script_lang_js_ = (AutoCompleteSelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/AutoCompleteSelect.vue





/* normalize component */

var AutoCompleteSelect_component = Object(componentNormalizer["a" /* default */])(
  components_AutoCompleteSelectvue_type_script_lang_js_,
  AutoCompleteSelectvue_type_template_id_7a4f6fa4_render,
  AutoCompleteSelectvue_type_template_id_7a4f6fa4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AutoCompleteSelect = (AutoCompleteSelect_component.exports);




runtime_auto_import_default()(AutoCompleteSelect_component, 'components', {QSelect: QSelect["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageSearch.vue?vue&type=template&id=7c68d2d4&
var PageSearchvue_type_template_id_7c68d2d4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative-position"},[_c('api-data-source',{attrs:{"api-path":_vm.apiPath},scopedSlots:_vm._u([{key:"default",fn:function(apiProp){return [_c('q-input',_vm._b({attrs:{"debounce":"1000"},on:{"focus":function($event){return _vm.showResult()}},scopedSlots:_vm._u([(_vm.icon)?{key:"append",fn:function(){return [_c('q-icon',{attrs:{"name":_vm.icon}})]},proxy:true}:null],null,true),model:{value:(_vm.searchText),callback:function ($$v) {_vm.searchText=$$v},expression:"searchText"}},'q-input',_vm.$attrs,false)),_c('q-popup-proxy',{attrs:{"content-class":_vm.menuClass,"auto-close":_vm.autoClose,"fit":"","no-focus":"","breakpoint":"0","target":true,"no-parent-event":""},model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}},[_vm._t("default",null,{"records":_vm.getRecords(apiProp.response),"searchText":_vm.searchText,"loading":apiProp.loading})],2)]}}],null,true)})],1)}
var PageSearchvue_type_template_id_7c68d2d4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PageSearch.vue?vue&type=template&id=7c68d2d4&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageSearch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PageSearchvue_type_script_lang_js_ = ({
  props: {
    searchPage: {
      type: String,
      default: ''
    },
    menuClass: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      searchText: '',
      show: false
    };
  },
  computed: {
    apiPath() {
      let search = this.searchText;

      if (search) {
        let qs = this.$utils.serializeQuery({
          search
        });
        return this.searchPage + "?" + qs;
      }

      return "";
    }

  },
  methods: {
    getRecords(response) {
      if (response.records) {
        return response.records;
      }

      return [];
    },

    showResult() {
      this.show = this.searchText != '';
      return this.show;
    },

    hideResult() {
      this.show = false;
    }

  },
  watch: {
    searchText: function () {
      this.showResult();
    }
  }
});
// CONCATENATED MODULE: ./src/components/PageSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PageSearchvue_type_script_lang_js_ = (PageSearchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__("7cbe");

// CONCATENATED MODULE: ./src/components/PageSearch.vue





/* normalize component */

var PageSearch_component = Object(componentNormalizer["a" /* default */])(
  components_PageSearchvue_type_script_lang_js_,
  PageSearchvue_type_template_id_7c68d2d4_render,
  PageSearchvue_type_template_id_7c68d2d4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PageSearch = (PageSearch_component.exports);




runtime_auto_import_default()(PageSearch_component, 'components', {QInput: QInput["a" /* default */],QIcon: QIcon["a" /* default */],QPopupProxy: QPopupProxy["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QUploaderInput.vue?vue&type=template&id=f1acebdc&
var QUploaderInputvue_type_template_id_f1acebdc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-uploader',{ref:"uploader",attrs:{"flat":_vm.flat,"max-files":_vm.maxFiles,"max-file-size":_vm.maxFileSizeInKB,"bordered":_vm.bordered,"accept":_vm.accept,"factory":_vm.factoryFn,"label":_vm.label,"auto-upload":"","hide-upload-btn":"","multiple":_vm.multiple,"filter":_vm.checkFileLimit},on:{"uploaded":_vm.uploadComplete,"removed":_vm.removeFile,"rejected":_vm.onRejected}})}
var QUploaderInputvue_type_template_id_f1acebdc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/QUploaderInput.vue?vue&type=template&id=f1acebdc&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QUploaderInput.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var QUploaderInputvue_type_script_lang_js_ = ({
  props: {
    accept: {
      type: String,
      default: '.png,.gif,.jpg,.jpg'
    },
    extensions: {
      type: String,
      default: ''
    },
    maxFiles: {
      type: Number,
      default: 5
    },
    maxFileSize: {
      type: Number,
      default: 10
    },
    multiple: {
      type: Boolean,
      default: true
    },
    flat: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    uploadPath: {
      type: String,
      default: 'fileuploader/upload/photo'
    },
    fieldName: {
      type: String,
      default: 'photo'
    },
    fileName: {
      type: String,
      default: 'file'
    },
    label: {
      type: String,
      default: 'Choose files or Drop files here'
    },
    value: null
  },
  data: function () {
    return {
      files: [],
      uploadedFilePaths: []
    };
  },
  methods: {
    checkFileLimit(files) {
      return files.filter(file => this.uploadedFilePaths.length < this.maxFiles);
    },

    factoryFn(file) {
      return new Promise((resolve, reject) => {
        // Retrieve JWT token from the localstore.
        const token = StorageService.getToken(); //additional fields that is submited with file upload
        //let formFields = [{name: 'fieldname', value: 'fieldvalue'}];

        let uploadUrl = this.$utils.setApiPath(this.uploadPath);
        resolve({
          fieldName: this.fileName,
          url: uploadUrl,
          method: 'POST',
          //formFields: formFields,
          headers: [{
            name: 'Authorization',
            value: `Bearer ${token}`
          }]
        });
      });
    },

    uploadComplete: function (file) {
      let newFilePath = JSON.parse(file.xhr.response);
      this.uploadedFilePaths.push(newFilePath);
    },
    removeFile: function (files) {
      files.forEach(file => {
        let fileUrl = JSON.parse(file.xhr.response);

        if (Array.isArray(fileUrl)) {
          this.uploadedFilePaths = this.uploadedFilePaths.filter(item => !fileUrl.includes(item));
        } else {
          let index = this.uploadedFilePaths.indexOf(fileUrl);

          if (index !== -1) {
            this.uploadedFilePaths.splice(index, 1);
          }
        }

        let url = "fileuploader/remove_temp_file";
        let formData = {
          temp_file: fileUrl.toString()
        };
        this.$api.post(url, formData).then(response => {}, response => {
          this.loading = false;
        });
      });
    },
    onRejected: function (rejectedEntries) {
      let failedProp = rejectedEntries[0].failedPropValidation;
      console.log(failedProp);

      if (failedProp == "max-file-size") {
        this.$q.notify({
          type: 'negative',
          message: `Max file size of ${this.maxFileSize}MB is allowed`
        });
      } else if (failedProp == "max-files" || failedProp == "filter") {
        this.$q.notify({
          type: 'negative',
          message: `Max of ${this.maxFiles} files is allowed`
        });
      }
    }
  },
  computed: {
    maxFileSizeInKB: function () {
      return this.maxFileSize * 1024 * 1024;
    }
  },
  watch: {
    uploadedFilePaths: function () {
      this.$emit('input', this.uploadedFilePaths.toString());
    },
    value: function () {
      if (this.value) {
        this.uploadedFilePaths = this.$utils.toArray(this.value);
      } else {
        this.uploadedFilePaths = [];
      }
    }
  },
  mounted: function () {
    if (this.value) {
      this.uploadedFilePaths = this.$utils.toArray(this.value);
    } else {
      this.uploadedFilePaths = [];
    }
  },
  created: function () {
    this.$EventBus.$on('resetForm', () => {
      if (this.$refs.uploader) {
        this.$refs.uploader.reset();
      }
    });
  }
});
// CONCATENATED MODULE: ./src/components/QUploaderInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_QUploaderInputvue_type_script_lang_js_ = (QUploaderInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/uploader/QUploader.js + 3 modules
var QUploader = __webpack_require__("ee89");

// CONCATENATED MODULE: ./src/components/QUploaderInput.vue





/* normalize component */

var QUploaderInput_component = Object(componentNormalizer["a" /* default */])(
  components_QUploaderInputvue_type_script_lang_js_,
  QUploaderInputvue_type_template_id_f1acebdc_render,
  QUploaderInputvue_type_template_id_f1acebdc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var QUploaderInput = (QUploaderInput_component.exports);


runtime_auto_import_default()(QUploaderInput_component, 'components', {QUploader: QUploader["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ApiDataSource.vue?vue&type=template&id=b9423bca&
var ApiDataSourcevue_type_template_id_b9423bca_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._t("default",null,{"load":_vm.load,"response":_vm.response,"loading":_vm.loading})],2)}
var ApiDataSourcevue_type_template_id_b9423bca_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ApiDataSource.vue?vue&type=template&id=b9423bca&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ApiDataSource.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var ApiDataSourcevue_type_script_lang_js_ = ({
  props: {
    loadOnMount: {
      type: Boolean,
      default: true
    },
    apiPath: "",
    value: "",
    firstRecord: false,
    // should return single object from the response array
    queryParams: {
      type: Object,
      default: () => ({})
    }
  },
  data: function () {
    return {
      response: [],
      loading: false
    };
  },
  computed: {
    apiUrl: function () {
      let qs = this.$utils.serializeQuery(this.queryParams);
      let url = this.apiPath;

      if (qs) {
        url = url + "?" + qs;
      }

      return url;
    }
  },
  methods: {
    load: function () {
      if (this.apiUrl) {
        this.loading = true;
        this.$api.get(this.apiUrl).then(response => {
          this.loading = false;
          let result = response.data;

          if (this.firstRecord && result.length) {
            this.response = result[0];
          } else {
            this.response = result;
          }

          this.$emit("loaded", this.response);
        }, response => {
          this.loading = false;
        });
      }
    }
  },
  watch: {
    apiUrl: function () {
      this.load();
    }
  },
  mounted: function () {
    if (this.loadOnMount) {
      this.load();
    }
  }
});
// CONCATENATED MODULE: ./src/components/ApiDataSource.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ApiDataSourcevue_type_script_lang_js_ = (ApiDataSourcevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/ApiDataSource.vue





/* normalize component */

var ApiDataSource_component = Object(componentNormalizer["a" /* default */])(
  components_ApiDataSourcevue_type_script_lang_js_,
  ApiDataSourcevue_type_template_id_b9423bca_render,
  ApiDataSourcevue_type_template_id_b9423bca_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ApiDataSource = (ApiDataSource_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InlineEdit.vue?vue&type=template&id=372f2ae8&
var InlineEditvue_type_template_id_372f2ae8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-menu',{ref:"menu",attrs:{"fit":"","anchor":"center middle","self":"center middle"},on:{"before-show":_vm.beforeShow,"before-hide":_vm.beforeHide}},[(_vm.title)?_c('div',{staticClass:"q-pa-sm text-bold"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_c('ValidationProvider',{ref:"fieldvalidator",attrs:{"rules":_vm.rules,"name":_vm.fieldLabel},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var invalid = ref.invalid;
var validated = ref.validated;
return [_c('div',{staticClass:"q-ma-sm"},[_vm._t("default"),(invalid)?_c('small',{staticClass:"text-negative"},[_vm._v(_vm._s(errors[0]))]):_vm._e(),(_vm.requestError)?_c('small',{staticClass:"text-negative"},[_vm._v(_vm._s(_vm.requestError))]):_vm._e()],2)]}}],null,true)}),_c('div',{staticClass:"q-ma-sm row justify-center no-wrap"},[_c('q-btn',{attrs:{"flat":"","dense":"","color":"negative","icon":_vm.cancelIcon},on:{"click":function($event){$event.stopPropagation();return _vm.close($event)}}}),_c('q-btn',{attrs:{"loading":_vm.loading,"flat":"","dense":"","color":"positive","icon":_vm.saveIcon},on:{"click":function($event){$event.stopPropagation();return _vm.updateField($event)}}})],1)],1)}
var InlineEditvue_type_template_id_372f2ae8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/InlineEdit.vue?vue&type=template&id=372f2ae8&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InlineEdit.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InlineEditvue_type_script_lang_js_ = ({
  props: {
    rules: {
      default: null
    },
    fieldLabel: {
      default: ''
    },
    fieldName: {
      default: ''
    },
    value: {
      default: ''
    },
    title: {
      default: ''
    },
    buttons: {
      default: true
    },
    url: {
      default: ''
    },
    saveIcon: {
      default: 'check_circle'
    },
    cancelIcon: {
      default: 'close'
    }
  },
  data: function () {
    return {
      loading: false,
      initialValue: '',
      validated: false,
      requestError: ''
    };
  },
  methods: {
    handleInput() {
      this.$emit('input', this.content);
    },

    onKeyEnter(e) {
      if (e.keyCode === 13) {
        this.updateField();
      }
    },

    hasChanged() {
      return !(this.value === this.initialValue);
    },

    beforeShow(e) {
      this.validated = false;
      this.initialValue = JSON.parse(JSON.stringify(this.value));
      this.requestError = '';
    },

    close() {
      this.$refs.menu.hide();
    },

    beforeHide(e) {
      if (!this.validated && this.hasChanged()) {
        this.$emit('input', this.initialValue);
      }
    },

    async updateField() {
      const provider = this.$refs.fieldvalidator;
      let validator = await provider.validate();
      let isValid = validator.valid;

      if (isValid && this.hasChanged()) {
        this.loading = true;
        let payload = {};
        payload[this.fieldName] = this.value;
        this.$api.post(this.url, payload).then(response => {
          this.loading = false;
          this.requestError = '';
          this.validated = true;
          this.$emit('input', this.value);
          this.$refs.menu.hide();
        }).catch(err => {
          this.loading = false;
          this.validated = false;
          this.requestError = err.response.data;
        });
      } else {
        this.validated = false;
      }
    }

  },
  watch: {},
  mounted: function () {}
});
// CONCATENATED MODULE: ./src/components/InlineEdit.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InlineEditvue_type_script_lang_js_ = (InlineEditvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/menu/QMenu.js + 2 modules
var QMenu = __webpack_require__("4e73");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// CONCATENATED MODULE: ./src/components/InlineEdit.vue





/* normalize component */

var InlineEdit_component = Object(componentNormalizer["a" /* default */])(
  components_InlineEditvue_type_script_lang_js_,
  InlineEditvue_type_template_id_372f2ae8_render,
  InlineEditvue_type_template_id_372f2ae8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InlineEdit = (InlineEdit_component.exports);



runtime_auto_import_default()(InlineEdit_component, 'components', {QMenu: QMenu["a" /* default */],QBtn: QBtn["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RecordCount.vue?vue&type=template&id=7b57b0d6&
var RecordCountvue_type_template_id_7b57b0d6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default",null,{"num":_vm.num,"maxValue":_vm.maxValue,"percent":_vm.percent,"loading":_vm.loading})],2)}
var RecordCountvue_type_template_id_7b57b0d6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/RecordCount.vue?vue&type=template&id=7b57b0d6&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RecordCount.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var RecordCountvue_type_script_lang_js_ = ({
  props: {
    apiPath: '',
    max: ''
  },
  data: function () {
    return {
      num: 0,
      maxValue: 100,
      loading: false
    };
  },
  computed: {
    percent() {
      let percent = Math.round(this.num / this.maxValue * 100);
      return percent;
    }

  },
  methods: {
    getRecordCount: function () {
      if (this.apiPath) {
        var url = this.apiPath;
        this.loading = true;
        this.$api.get(url).then(response => {
          this.loading = false;
          var result = response.data;

          if (result.num) {
            this.num = parseFloat(result.num);

            if (result.max_value) {
              this.maxValue = result.max_value;
            }
          } else {
            this.num = parseFloat(result);
          }
        }, response => {
          this.loading = false;
        });
      }
    }
  },
  watch: {
    apiPath: function () {
      this.getRecordCount();
    }
  },
  mounted: function () {
    this.maxValue = this.max;
    this.getRecordCount();
  }
});
// CONCATENATED MODULE: ./src/components/RecordCount.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RecordCountvue_type_script_lang_js_ = (RecordCountvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/RecordCount.vue





/* normalize component */

var RecordCount_component = Object(componentNormalizer["a" /* default */])(
  components_RecordCountvue_type_script_lang_js_,
  RecordCountvue_type_template_id_7b57b0d6_render,
  RecordCountvue_type_template_id_7b57b0d6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RecordCount = (RecordCount_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CheckDuplicate.vue?vue&type=template&id=363cc585&
var CheckDuplicatevue_type_template_id_363cc585_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('api-data-source',{attrs:{"api-path":_vm.apiPath},scopedSlots:_vm._u([{key:"default",fn:function(apiProp){return [_vm._t("default",null,{"loading":apiProp.loading,"check":_vm.check,"exist":_vm.checkExits(apiProp.response)})]}}],null,true)})}
var CheckDuplicatevue_type_template_id_363cc585_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CheckDuplicate.vue?vue&type=template&id=363cc585&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CheckDuplicate.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var CheckDuplicatevue_type_script_lang_js_ = ({
  props: {
    checkPath: '',
    value: ''
  },
  data: function () {
    return {
      error: '',
      loading: false,
      apiPath: ''
    };
  },
  methods: {
    check() {
      let val = this.value;

      if (val) {
        this.apiPath = this.checkPath + this.value;
      }
    },

    checkExits(val) {
      // if the record already exist the backend should return true
      if (val) {
        val = val.toString().toLowerCase();

        if (val === "true") {
          // record already exit at the backend
          return true;
        }
      }

      return false;
    }

  }
});
// CONCATENATED MODULE: ./src/components/CheckDuplicate.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CheckDuplicatevue_type_script_lang_js_ = (CheckDuplicatevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CheckDuplicate.vue





/* normalize component */

var CheckDuplicate_component = Object(componentNormalizer["a" /* default */])(
  components_CheckDuplicatevue_type_script_lang_js_,
  CheckDuplicatevue_type_template_id_363cc585_render,
  CheckDuplicatevue_type_template_id_363cc585_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CheckDuplicate = (CheckDuplicate_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImageViewer.vue?vue&type=template&id=de298f2e&
var ImageViewervue_type_template_id_de298f2e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.src)?_c('div',{staticClass:"row"},_vm._l((_vm.images),function(img,index){return _c('div',{key:index},[(index < _vm.numDisplay)?_c('q-img',_vm._b({staticClass:"cursor-pointer",style:({height: _vm.height, width: _vm.width}),attrs:{"src":_vm.$utils.setImgUrl(img, _vm.imageSize)},on:{"click":function($event){return _vm.openGallery(index)}},scopedSlots:_vm._u([{key:"error",fn:function(){return [_c('div',{staticClass:"absolute-full shadow-1 flex flex-center bg-grey-3 text-grey-8"},[_vm._v("!")])]},proxy:true}],null,true)},'q-img',_vm.$attrs,false)):_vm._e()],1)}),0):_c('q-img',{style:({height: _vm.height, width: _vm.width}),attrs:{"src":"images/no-image-available.png"}})}
var ImageViewervue_type_template_id_de298f2e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ImageViewer.vue?vue&type=template&id=de298f2e&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImageViewer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ImageViewervue_type_script_lang_js_ = ({
  props: {
    src: {
      type: String
    },
    imageSize: {
      type: String,
      default: 'small'
    },
    previewSize: {
      type: String,
      default: 'large'
    },
    width: {
      type: String,
      required: false,
      default: '50px'
    },
    height: {
      type: String,
      required: false,
      default: '50px'
    },
    numDisplay: {
      type: Number,
      required: false,
      default: 1
    }
  },
  data: function () {
    return {
      images: []
    };
  },
  computed: {
    getLargeImages() {
      let largImages = [];
      this.images.forEach((path, index) => {
        if (this.previewSize) {
          let imgUrl = this.$utils.setImgUrl(path, this.previewSize);
          largImages.push(imgUrl);
        } else {
          let imgUrl = this.$utils.getFileFullPath(path);
          largImages.push(imgUrl);
        }
      });
      return largImages;
    }

  },
  methods: {
    openGallery(index) {
      let payload = {
        currentSlide: index,
        images: this.getLargeImages
      };
      this.$store.dispatch('pageComponents/openImageViewDialog', payload);
    },

    setImages() {
      if (this.src) {
        this.images = this.src.toString().split(",");
      }
    }

  },
  watch: {
    src: function () {
      this.setImages();
    }
  },

  mounted() {
    this.setImages();
  }

});
// CONCATENATED MODULE: ./src/components/ImageViewer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ImageViewervue_type_script_lang_js_ = (ImageViewervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__("068f");

// CONCATENATED MODULE: ./src/components/ImageViewer.vue





/* normalize component */

var ImageViewer_component = Object(componentNormalizer["a" /* default */])(
  components_ImageViewervue_type_script_lang_js_,
  ImageViewervue_type_template_id_de298f2e_render,
  ImageViewervue_type_template_id_de298f2e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ImageViewer = (ImageViewer_component.exports);


runtime_auto_import_default()(ImageViewer_component, 'components', {QImg: QImg["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FileViewer.vue?vue&type=template&id=7867f208&
var FileViewervue_type_template_id_7867f208_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row q-col-gutter-xs"},_vm._l((_vm.files),function(file,index){return _c('div',{key:index},[(_vm.removable)?[(file.isImage)?_c('q-chip',{attrs:{"square":"","removable":""},on:{"remove":function($event){return _vm.removeFile(index)}}},[_c('q-avatar',[_c('image-viewer',{attrs:{"src":file.path,"image-size":file.size}})],1)],1):_c('q-chip',{attrs:{"square":"","icon":_vm.icon,"label":_vm.label,"removable":"","clickable":""},on:{"remove":function($event){return _vm.removeFile(index)},"click":function($event){return _vm.openFile(file)}}})]:[_c('q-btn',{attrs:{"no-caps":"","unelevated":"","color":"accent","padding":"xs","icon":_vm.icon,"label":_vm.label},on:{"click":function($event){return _vm.openFile(file)}}},[_c('q-tooltip',{attrs:{"content-class":"bg-accent"}},[_vm._v("\n\t\t\t\t\t"+_vm._s(file.name)+"\n\t\t\t\t")])],1)]],2)}),0)}
var FileViewervue_type_template_id_7867f208_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FileViewer.vue?vue&type=template&id=7867f208&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FileViewer.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FileViewervue_type_script_lang_js_ = ({
  props: {
    value: {
      type: String
    },
    removable: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "archive"
    },
    numDisplay: {
      type: Number,
      required: false,
      default: 1
    }
  },
  data: function () {
    return {
      files: []
    };
  },
  computed: {},
  watch: {
    value() {
      this.setFiles();
    },

    files: function () {
      let filePaths = [];
      this.files.forEach(file => {
        if (file.path) {
          filePaths.push(file.path);
        }
      });
      this.$emit('input', filePaths.toString());
    }
  },
  methods: {
    openFile(file) {
      if (file.path) {
        let path = file.path;
        let fullPath = this.$utils.getFileFullPath(path);
        window.open(fullPath, '_blank');
      }
    },

    setFiles() {
      if (this.value) {
        let filePaths = this.value.toString().split(",");
        this.files = [];
        filePaths.forEach(path => {
          let fileName = path.split('\\').pop().split('/').pop();
          let ext = fileName.split('.').pop().toLowerCase();
          let imgExt = ['jpg', 'png', 'gif', 'jpeg', 'bmp'];
          let isImage = false;

          if (imgExt.indexOf(ext) > -1) {
            isImage = true;
          }

          let size = "small"; //use resize image for the display

          if (path.indexOf("temp/") > -1) {
            size = ""; //if image is still in temp folder use the original image
          }

          this.files.push({
            name: fileName,
            isImage: isImage,
            size: size,
            path: path
          });
        });
      }
    },

    removeFile(index) {
      this.files.splice(index, 1);
    }

  },

  mounted() {
    this.setFiles();
  }

});
// CONCATENATED MODULE: ./src/components/FileViewer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FileViewervue_type_script_lang_js_ = (FileViewervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/chip/QChip.js
var QChip = __webpack_require__("b047");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__("cb32");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__("05c0");

// CONCATENATED MODULE: ./src/components/FileViewer.vue





/* normalize component */

var FileViewer_component = Object(componentNormalizer["a" /* default */])(
  components_FileViewervue_type_script_lang_js_,
  FileViewervue_type_template_id_7867f208_render,
  FileViewervue_type_template_id_7867f208_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FileViewer = (FileViewer_component.exports);





runtime_auto_import_default()(FileViewer_component, 'components', {QChip: QChip["a" /* default */],QAvatar: QAvatar["a" /* default */],QBtn: QBtn["a" /* default */],QTooltip: QTooltip["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FullQEditor.vue?vue&type=template&id=591237a6&
var FullQEditorvue_type_template_id_591237a6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('q-editor',{ref:"editor",attrs:{"dense":_vm.$q.screen.lt.md,"definitions":{
            upload: {
                tip: 'Insert image',
                icon: 'photo',
                handler: _vm.showImageDialog,
            },
        },"toolbar":[
            ['left', 'center', 'right', 'justify'],
            [
                'bold',
                'italic',
                'strike',
                'underline',
                'subscript',
                'superscript' ],
            ['hr', 'link', 'upload'],
            [
                {
                    icon: _vm.$q.iconSet.editor.fontSize,
                    fixedLabel: true,
                    fixedIcon: true,
                    list: 'no-icons',
                    options: [
                        'size-1',
                        'size-2',
                        'size-3',
                        'size-4',
                        'size-5',
                        'size-6',
                        'size-7' ],
                },
                'removeFormat' ],
            ['quote', 'unordered', 'ordered'],

            ['undo', 'redo'],
            ['viewsource'] ],"fonts":{
            arial: 'Arial',
            arial_black: 'Arial Black',
            comic_sans: 'Comic Sans MS',
            courier_new: 'Courier New',
            impact: 'Impact',
            lucida_grande: 'Lucida Grande',
            times_new_roman: 'Times New Roman',
            verdana: 'Verdana',
        }},on:{"input":_vm.update},model:{value:(_vm.qeditor),callback:function ($$v) {_vm.qeditor=$$v},expression:"qeditor"}}),_c('q-dialog',{model:{value:(_vm.imageDialog),callback:function ($$v) {_vm.imageDialog=$$v},expression:"imageDialog"}},[_c('q-card',{staticStyle:{"width":"500px","max-width":"80vw"}},[_c('q-card-section',{staticClass:"row items-center q-pb-none"},[_c('div',{staticClass:"text-h6"},[_vm._v("Insert Image")]),_c('q-space'),_c('q-btn',{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"icon":"close","flat":"","round":"","dense":""}})],1),_c('q-card-section',[_c('div',{staticClass:"q-mb-md"},[_c('q-input',{ref:"imageUrl",attrs:{"outlined":"","dense":"","placeholder":"Enter Image Url","label":"Image Url"},model:{value:(_vm.imageUrl),callback:function ($$v) {_vm.imageUrl=$$v},expression:"imageUrl"}})],1),_c('div',{staticClass:"row q-col-gutter-md"},[_c('div',{staticClass:"col"},[_c('q-input',{attrs:{"outlined":"","dense":"","placeholder":"Width","label":"Width"},model:{value:(_vm.imageWidth),callback:function ($$v) {_vm.imageWidth=$$v},expression:"imageWidth"}})],1),_c('div',{staticClass:"col"},[_c('q-input',{attrs:{"outlined":"","dense":"","placeholder":"Height","label":"Height"},model:{value:(_vm.imageHeight),callback:function ($$v) {_vm.imageHeight=$$v},expression:"imageHeight"}})],1)])]),_c('q-card-actions',{attrs:{"align":"center"}},[_c('q-btn',{attrs:{"color":"primary","flat":"","label":"Insert Image"},on:{"click":_vm.insertImage}})],1)],1)],1)],1)}
var FullQEditorvue_type_template_id_591237a6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FullQEditor.vue?vue&type=template&id=591237a6&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FullQEditor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FullQEditorvue_type_script_lang_js_ = ({
  props: {
    value: ""
  },
  data: function () {
    return {
      qeditor: "",
      imageDialog: false,
      imageWidth: "",
      imageHeight: "",
      imageUrl: ""
    };
  },
  methods: {
    saveWork() {
      this.$q.notify({
        message: "Saved your text to local storage",
        color: "green-4",
        textColor: "white",
        icon: "cloud_done"
      });
    },

    update() {
      this.$emit('input', this.qeditor);
    },

    showImageDialog() {
      this.imageDialog = true;
    },

    insertImage() {
      if (this.imageUrl) {
        this.imageDialog = false;
        const edit = this.$refs.editor;
        edit.caret.restore();
        edit.runCmd("insertHTML", `<img width="${this.imageWidth}" height="${this.imageHeight}" src="${this.imageUrl}"/>`);
        edit.focus();
      } else {
        this.$refs.imageUrl.focus();
      }
    }

  },
  mounted: function () {
    this.qeditor = this.value;
  }
});
// CONCATENATED MODULE: ./src/components/FullQEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FullQEditorvue_type_script_lang_js_ = (FullQEditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/editor/QEditor.js + 2 modules
var QEditor = __webpack_require__("d66b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__("24e8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__("2c91");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__("4b7e");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__("7f67");

// CONCATENATED MODULE: ./src/components/FullQEditor.vue





/* normalize component */

var FullQEditor_component = Object(componentNormalizer["a" /* default */])(
  components_FullQEditorvue_type_script_lang_js_,
  FullQEditorvue_type_template_id_591237a6_render,
  FullQEditorvue_type_template_id_591237a6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FullQEditor = (FullQEditor_component.exports);









runtime_auto_import_default()(FullQEditor_component, 'components', {QEditor: QEditor["a" /* default */],QDialog: QDialog["a" /* default */],QCard: QCard["a" /* default */],QCardSection: QCardSection["a" /* default */],QSpace: QSpace["a" /* default */],QBtn: QBtn["a" /* default */],QInput: QInput["a" /* default */],QCardActions: QCardActions["a" /* default */]});runtime_auto_import_default()(FullQEditor_component, 'directives', {ClosePopup: ClosePopup["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImportData.vue?vue&type=template&id=80415a54&
var ImportDatavue_type_template_id_80415a54_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._t("default",null,{"dialog":_vm.dialog,"response":_vm.response}),_c('q-dialog',{attrs:{"position":"bottom"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('q-card',{staticStyle:{"min-width":"30vw"}},[_c('q-uploader-input',{staticStyle:{"width":"100%"},attrs:{"label":_vm.label,"upload-path":_vm.uploadPath,"accept":".csv","position":"bottom","flat":"","bordered":"","field-name":"import"},model:{value:(_vm.response),callback:function ($$v) {_vm.response=$$v},expression:"response"}})],1)],1)],2)}
var ImportDatavue_type_template_id_80415a54_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ImportData.vue?vue&type=template&id=80415a54&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImportData.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ImportDatavue_type_script_lang_js_ = ({
  name: "ImportData",
  props: {
    uploadPath: {
      type: String,
      default: "filehelper/uploadfile"
    },
    label: {
      type: String,
      default: "Choose file to import"
    }
  },
  data: () => ({
    dialog: false,
    response: ""
  }),
  methods: {
    openDialog() {
      this.dialog = true;
    }

  }
});
// CONCATENATED MODULE: ./src/components/ImportData.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ImportDatavue_type_script_lang_js_ = (ImportDatavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/ImportData.vue





/* normalize component */

var ImportData_component = Object(componentNormalizer["a" /* default */])(
  components_ImportDatavue_type_script_lang_js_,
  ImportDatavue_type_template_id_80415a54_render,
  ImportDatavue_type_template_id_80415a54_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ImportData = (ImportData_component.exports);




runtime_auto_import_default()(ImportData_component, 'components', {QDialog: QDialog["a" /* default */],QCard: QCard["a" /* default */],QUploader: QUploader["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LangSwitcher.vue?vue&type=template&id=7c46e408&
var LangSwitchervue_type_template_id_7c46e408_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-btn-dropdown',{attrs:{"no-caps":"","color":"accent","glossy":"","flat":"","label":_vm.langName}},[_c('q-list',{attrs:{"dense":""}},_vm._l((_vm.locales),function(locale,key){return _c('q-item',{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:key,attrs:{"clickable":""},on:{"click":function($event){return _vm.changeLocale(key)}}},[_c('q-item-section',[_c('q-item-label',[_vm._v(_vm._s(locale))])],1)],1)}),1)],1)}
var LangSwitchervue_type_template_id_7c46e408_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LangSwitcher.vue?vue&type=template&id=7c46e408&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LangSwitcher.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LangSwitchervue_type_script_lang_js_ = ({
  data() {
    return {
      locales: this.$menus.locales
    };
  },

  computed: {
    langName() {
      let lang = this.$i18n.locale;
      let name = this.locales[lang] || lang;
      return name;
    }

  },
  methods: {
    changeLocale(locale) {
      this.$localStore.setLocale(locale);
      window.location.reload();
    }

  }
});
// CONCATENATED MODULE: ./src/components/LangSwitcher.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LangSwitchervue_type_script_lang_js_ = (LangSwitchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn-dropdown/QBtnDropdown.js + 1 modules
var QBtnDropdown = __webpack_require__("f20b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// CONCATENATED MODULE: ./src/components/LangSwitcher.vue





/* normalize component */

var LangSwitcher_component = Object(componentNormalizer["a" /* default */])(
  components_LangSwitchervue_type_script_lang_js_,
  LangSwitchervue_type_template_id_7c46e408_render,
  LangSwitchervue_type_template_id_7c46e408_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LangSwitcher = (LangSwitcher_component.exports);






runtime_auto_import_default()(LangSwitcher_component, 'components', {QBtnDropdown: QBtnDropdown["a" /* default */],QList: QList["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */]});runtime_auto_import_default()(LangSwitcher_component, 'directives', {ClosePopup: ClosePopup["a" /* default */]});

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__("7bb1");

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/rules.js
var rules = __webpack_require__("4c93");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim-end.js
var es_string_trim_end = __webpack_require__("1e25");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim-start.js
var es_string_trim_start = __webpack_require__("eee7");

// CONCATENATED MODULE: ./src/utils.js








Array.prototype.sum = function (prop) {
  var total = 0;

  for (var i = 0, _len = this.length; i < _len; i++) {
    total += parseFloat(this[i][prop]);
  }

  if (total) return total;
  return "";
};

Array.prototype.average = function (prop) {
  var total = this.sum(prop);
  var len = this.length;
  var avg = total / len;
  if (avg) return avg.toFixed(2);
  return "";
};

Array.prototype.min = function (prop) {
  if (!this.length) return '';
  let min = Math.min.apply(null, this.map(function (item) {
    return item[prop];
  }));
  if (min) return min;
  return "";
};

Array.prototype.max = function (prop) {
  if (!this.length) return '';
  let max = Math.max.apply(null, this.map(function (item) {
    return item[prop];
  }));
  if (max) return max;
  return "";
};

String.prototype.trimLeft = function (charlist) {
  if (charlist === undefined) charlist = "\s";
  return this.replace(new RegExp("^[" + charlist + "]+"), "");
};

String.prototype.trimRight = function (charlist) {
  if (charlist === undefined) charlist = "\s";
  return this.replace(new RegExp("[" + charlist + "]+$"), "");
};

String.prototype.trimChar = function (charlist) {
  if (typeof charlist == 'undefined') {
    charlist = '\\s';
  }

  let pattern = '^[' + charlist + ']*(.*?)[' + charlist + ']*$';
  return this.replace(new RegExp(pattern), '$1');
};

const utils = {
  percentValue(val, max) {
    let num = parseFloat(val) / parseFloat(max);
    return num.toFixed(2);
  },

  toPercent(val, max) {
    let num = this.percentValue(val, max) * 100;
    return num.toFixed(2);
  },

  getPagePath(path) {
    if (path) {
      path = path.trimChar("/");
      let arrPath = path.split("/");
      let page = arrPath[0];
      return "/" + page;
    }

    return "/";
  },

  getRoutePath(path) {
    if (path) {
      path = path.trimChar("/");
      let arrPath = path.split("/");
      let page = arrPath[0];
      let action = arrPath[1];

      if (!action || action == "index") {
        action = "list";
      }

      return page + "/" + action;
    }

    return "/";
  },

  debounce(fn, delay) {
    var timer = null;
    return function () {
      var context = this,
          args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  },

  extend(obj, src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) obj[key] = src[key];
    }

    return obj;
  },

  setApiPath(path, queryObj) {
    if (queryObj) {
      var str = [];

      for (var key in queryObj) {
        var value = queryObj[key];

        if (queryObj.hasOwnProperty(key) && value !== '') {
          str.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
        }
      }

      var qs = str.join("&");

      if (path.indexOf('?') > 0) {
        path = path + '&' + qs;
      } else {
        path = path + '?' + qs;
      }
    }

    return this.joinPaths(["http://localhost:8060/api/", path]);
  },

  setImgUrl(src, imgSize) {
    if (src) {
      let isExternalFile = this.isExternalFile(src);

      if (imgSize && !isExternalFile) {
        let paths = src.toString().split('/');
        paths.splice(-1, 0, imgSize);
        src = paths.join('/');
      }

      return this.getFileFullPath(src);
    }

    return "images/no-image-available.png";
  },

  randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  },

  randomChars(length, characters) {
    length = length || 10;
    var result = [];
    var characters = characters || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }

    return result.join('');
  },

  randomStr(length, characters) {
    length = length || 10;
    var result = [];
    var characters = characters || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }

    return result.join('');
  },

  randomNum(length) {
    length = length || 10;
    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
  },

  //Convert javascript to date object to mysql date format (YYYY-MM-DD HH:mm:ss)
  dateNow() {
    return new Date().toISOString().split('T')[0];
  },

  dateTimeNow() {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
  },

  timeNow() {
    return new Date().toLocaleTimeString();
  },

  toArray(val) {
    if (val) {
      if (Array.isArray(val)) {
        return val;
      } else {
        return val.split(",");
      }
    } else {
      return [];
    }
  },

  serializeQuery(params, prefix) {
    const query = Object.keys(params).map(key => {
      const value = params[key];
      if (params.constructor === Array) key = `${prefix}[]`;else if (params.constructor === Object) key = prefix ? `${prefix}[${key}]` : key;
      if (typeof value === 'object') return this.serializeQuery(value, key);else return `${key}=${encodeURIComponent(value)}`;
    });
    return [].concat.apply([], query).join('&');
  },

  trim(str, charlist) {
    if (typeof charlist == 'undefined') {
      charlist = '\\s';
    }

    let pattern = '^[' + charlist + ']*(.*?)[' + charlist + ']*$';
    return str.replace(new RegExp(pattern), '$1');
  },

  /**
   * Joins 2 paths together without duplicate separators
   * @param parts the parts of the url to join. eg: ['http://google.com/', '/path/']
   * @returns {string} The combined path
   */
  joinPaths(parts) {
    let separator = '/';
    return parts.map(function (part) {
      if (part) {
        return part.trim().replace(/(^[\/]*|[\/]*$)/g, '');
      }

      return "";
    }).join(separator);
  },

  getFileFullPath(path) {
    let isFullPath = path.startsWith("https://") || path.startsWith("http://");

    if (isFullPath) {
      return path;
    }

    return this.joinPaths(["http://localhost:8060/", path]);
  },

  isExternalFile(path) {
    let fullPath = this.getFileFullPath(path);
    let baseUrl = "http://localhost:8060/"; //app base url

    let isLocalFile = fullPath.startsWith(baseUrl);
    return !isLocalFile;
  }

};
// CONCATENATED MODULE: ./src/menus.js
const AppMenus = {
  navbarTopRightItems: [],
  navbarTopLeftItems: [],
  navbarSideLeftItems: [{
    "path": "/home",
    "label": "Home",
    "icon": "fas fa-home",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }, {
    "path": "/tb_guru",
    "label": "Akademik",
    "icon": "fas fa-database",
    "iconcolor": "",
    "target": "",
    "submenu": [{
      "path": "/tb_guru",
      "label": "Data Wali Kelas",
      "icon": "fas fa-user-tie",
      "iconcolor": "",
      "target": "",
      "submenu": []
    }, {
      "path": "/tb_wali",
      "label": "Data Orang Tua",
      "icon": "fas fa-users",
      "iconcolor": "",
      "target": "",
      "submenu": []
    }, {
      "path": "/tb_siswa",
      "label": "Data Siswa",
      "icon": "fas fa-user",
      "iconcolor": "",
      "target": "",
      "submenu": []
    }, {
      "path": "/tb_kelas",
      "label": "Data Kelas",
      "icon": "far fa-building",
      "iconcolor": "",
      "target": "",
      "submenu": []
    }, {
      "path": "/tb_tipe_pelanggaran",
      "label": "K. Pelanggaran",
      "icon": "fas fa-check",
      "iconcolor": "",
      "target": "",
      "submenu": []
    }]
  }, {
    "path": "/tb_pelanggaran",
    "label": "Pelanggaran",
    "icon": "fas fa-calendar-check",
    "iconcolor": "red-6",
    "target": "",
    "submenu": []
  }, {
    "path": "/laporan",
    "label": "Laporan",
    "icon": "fas fa-book",
    "iconcolor": "green-5",
    "target": "",
    "submenu": []
  }],
  Tb_WaliTableHeaderItems: [{
    "label": "Nama Siswa",
    "align": "left",
    "sortable": false,
    "name": "student_id",
    "field": "student_id"
  }, {
    "label": "Nama Orang Tua",
    "align": "left",
    "sortable": false,
    "name": "parent_name",
    "field": "parent_name"
  }, {
    "label": "No Telp",
    "align": "left",
    "sortable": false,
    "name": "phone_number",
    "field": "phone_number"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  phone_numberItems: [],
  Tb_KelasTableHeaderItems: [{
    "label": "Wali Name",
    "align": "left",
    "sortable": false,
    "name": "wali_name",
    "field": "wali_name"
  }, {
    "label": "Class Name",
    "align": "left",
    "sortable": false,
    "name": "class_name",
    "field": "class_name"
  }, {
    "label": "Sub Class",
    "align": "left",
    "sortable": false,
    "name": "sub_class",
    "field": "sub_class"
  }, {
    "label": "Total Students",
    "align": "left",
    "sortable": false,
    "name": "total_students",
    "field": "total_students"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Tb_Tipe_PelanggaranTableHeaderItems: [{
    "label": "Katagori Pelanggaran",
    "align": "left",
    "sortable": false,
    "name": "violation_name",
    "field": "violation_name"
  }, {
    "label": "Point",
    "align": "left",
    "sortable": false,
    "name": "get_point",
    "field": "get_point"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Tb_GuruTableHeaderItems: [{
    "label": "Nik",
    "align": "left",
    "sortable": false,
    "name": "nik",
    "field": "nik"
  }, {
    "label": "Nama Wali Kelas",
    "align": "left",
    "sortable": false,
    "name": "teacher_name",
    "field": "teacher_name"
  }, {
    "label": "Mapel ",
    "align": "left",
    "sortable": false,
    "name": "subject",
    "field": "subject"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Tb_SiswaTableHeaderItems: [{
    "label": "Nis",
    "align": "left",
    "sortable": false,
    "name": "nisn",
    "field": "nisn"
  }, {
    "label": "Nama Siswa",
    "align": "left",
    "sortable": false,
    "name": "std_name",
    "field": "std_name"
  }, {
    "label": "Kelas",
    "align": "left",
    "sortable": false,
    "name": "class_id",
    "field": "class_id"
  }, {
    "label": "Alamat",
    "align": "left",
    "sortable": false,
    "name": "address",
    "field": "address"
  }, {
    "label": "No Telp",
    "align": "left",
    "sortable": false,
    "name": "phone_number",
    "field": "phone_number"
  }, {
    "label": "Foto Siswa",
    "align": "left",
    "sortable": false,
    "name": "foto_siswa",
    "field": "foto_siswa"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  Tb_PelanggaranTableHeaderItems: [{
    "label": "Nis",
    "align": "left",
    "sortable": false,
    "name": "nisn",
    "field": "nisn"
  }, {
    "label": "Nama Siswa",
    "align": "left",
    "sortable": false,
    "name": "student_id",
    "field": "student_id"
  }, {
    "label": "Kelas",
    "align": "left",
    "sortable": false,
    "name": "class_id",
    "field": "class_id"
  }, {
    "label": "Wali Kelas",
    "align": "left",
    "sortable": false,
    "name": "teacher_id",
    "field": "teacher_id"
  }, {
    "label": "Orang Tua",
    "align": "left",
    "sortable": false,
    "name": "wali_id",
    "field": "wali_id"
  }, {
    "label": "KPelanggaran",
    "align": "left",
    "sortable": false,
    "name": "type_id",
    "field": "type_id"
  }, {
    "label": "Note",
    "align": "left",
    "sortable": false,
    "name": "note",
    "field": "note"
  }, {
    "label": "Tgl/Waktu Kejadian",
    "align": "left",
    "sortable": false,
    "name": "reported_on",
    "field": "reported_on"
  }, {
    "label": "Foto Kejadian",
    "align": "left",
    "sortable": false,
    "name": "foto_kejadian",
    "field": "foto_kejadian"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  LaporanTableHeaderItems: [{
    "label": "Nis",
    "align": "left",
    "sortable": false,
    "name": "nisn",
    "field": "nisn"
  }, {
    "label": "Nama Siswa",
    "align": "left",
    "sortable": false,
    "name": "std_name",
    "field": "std_name"
  }, {
    "label": "Wali Kelas",
    "align": "left",
    "sortable": false,
    "name": "teacher_name",
    "field": "teacher_name"
  }, {
    "label": "Kelas",
    "align": "left",
    "sortable": false,
    "name": "class_name",
    "field": "class_name"
  }, {
    "label": "Sub Kelas",
    "align": "left",
    "sortable": false,
    "name": "sub_class",
    "field": "sub_class"
  }, {
    "label": "Pelanggaran",
    "align": "left",
    "sortable": false,
    "name": "violation_name",
    "field": "violation_name"
  }, {
    "label": "Tgl/Waktu Kejadian",
    "align": "left",
    "sortable": false,
    "name": "reported_on",
    "field": "reported_on"
  }, {
    "label": "Note",
    "align": "left",
    "sortable": false,
    "name": "note",
    "field": "note"
  }, {
    "label": "Action",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }],
  exportFormats: {
    print: {
      label: 'Print',
      color: 'blue',
      icon: 'fas fa-print',
      id: 'print',
      ext: ''
    },
    pdf: {
      label: 'Pdf',
      color: 'red',
      icon: 'fas fa-file-pdf',
      id: 'pdf',
      ext: 'pdf'
    },
    excel: {
      label: 'Excel',
      color: 'green',
      icon: 'fas fa-file-excel',
      id: 'excel',
      ext: 'xlsx'
    },
    csv: {
      label: 'Csv',
      color: 'teal',
      icon: 'fas fa-file-csv',
      id: 'csv',
      ext: 'csv'
    }
  }
};
// CONCATENATED MODULE: ./src/main.js














 // loop over all rules

for (let rule in rules) {
  Object(vee_validate_esm["c" /* extend */])(rule, rules[rule]);
}





vue_runtime_esm["a" /* default */].config.productionTip = false;
vue_runtime_esm["a" /* default */].prototype.$EventBus = new vue_runtime_esm["a" /* default */](); // Global event bus

vue_runtime_esm["a" /* default */].prototype.$appName = "Pelanggaran Siswa Vue";
const apiUrl = "http://localhost:8060/"; //get the api base url

vue_runtime_esm["a" /* default */].prototype.$apiUrl = apiUrl;
const main_apiPath = "http://localhost:8060/api/"; //get the the api path

vue_runtime_esm["a" /* default */].prototype.$apiPath = main_apiPath;
ApiService.init(main_apiPath); //axio api service use for making api request

vue_runtime_esm["a" /* default */].prototype.$api = ApiService; //save data to localstorage

vue_runtime_esm["a" /* default */].prototype.$localStore = StorageService; //all application menu

vue_runtime_esm["a" /* default */].prototype.$menus = AppMenus;
vue_runtime_esm["a" /* default */].prototype.$utils = utils;
vue_runtime_esm["a" /* default */].component('AutoCompleteSelect', AutoCompleteSelect);
vue_runtime_esm["a" /* default */].component('PageSearch', PageSearch);
vue_runtime_esm["a" /* default */].component('InlineEdit', InlineEdit);
vue_runtime_esm["a" /* default */].component('ApiDataSource', ApiDataSource);
vue_runtime_esm["a" /* default */].component('QUploaderInput', QUploaderInput);
vue_runtime_esm["a" /* default */].component('RecordCount', RecordCount);
vue_runtime_esm["a" /* default */].component('ValidationProvider', vee_validate_esm["b" /* ValidationProvider */]);
vue_runtime_esm["a" /* default */].component('ValidationObserver', vee_validate_esm["a" /* ValidationObserver */]);
vue_runtime_esm["a" /* default */].component('CheckDuplicate', CheckDuplicate);
vue_runtime_esm["a" /* default */].component('FileViewer', FileViewer);
vue_runtime_esm["a" /* default */].component('ImageViewer', ImageViewer);
vue_runtime_esm["a" /* default */].component('FullQEditor', FullQEditor);
vue_runtime_esm["a" /* default */].component('ImportData', ImportData);
vue_runtime_esm["a" /* default */].component('LangSwitcher', LangSwitcher);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date.js
var date = __webpack_require__("bd4c");

// CONCATENATED MODULE: ./src/boot/filters.js


;
/* harmony default export */ var filters = (({
  Vue
}) => {
  Vue.filter('capitalize', function (value) {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  }), Vue.filter('readable', function (value) {
    if (!value) return '';
    return value.replace(/[^a-zA-Z0-9]/g, ' ');
  }), Vue.filter('humanDate', function (value) {
    if (!value) return '';

    if (!date["b" /* default */].isValid(value)) {
      return value;
    }

    let timeStamp = new Date(value);
    return date["b" /* default */].formatDate(timeStamp, 'Do MMM, YYYY');
  }), Vue.filter('humanTime', function (value) {
    if (!value) return '';

    if (!date["b" /* default */].isValid(value)) {
      return value;
    }

    let timeStamp = new Date(value);
    return date["b" /* default */].formatDate(timeStamp, 'hh:mm');
  }), Vue.filter('humanDatetime', function (value) {
    if (!value) return '';

    if (!date["b" /* default */].isValid(value)) {
      return value;
    }

    let timeStamp = new Date(value);
    return date["b" /* default */].formatDate(timeStamp, 'Do MMM, YYYY hh:mm');
  }), Vue.filter('relativeDate', function (value) {
    let dateFormats = [{
      unit: 'years',
      msg: 'year'
    }, {
      unit: 'months',
      msg: 'month'
    }, {
      unit: 'days',
      msg: 'day'
    }, {
      unit: 'hours',
      msg: 'hour'
    }, {
      unit: 'minutes',
      msg: 'min'
    }, {
      unit: 'seconds',
      msg: 'sec'
    }];

    if (!date["b" /* default */].isValid(value)) {
      return value;
    }

    let oldDate = new Date(value);
    let nowDate = new Date();
    let when = "ago";

    if (oldDate > nowDate) {
      when = "from now";
    }

    let format;
    let diff;

    for (let i = 0; i < dateFormats.length; i++) {
      format = dateFormats[i];
      diff = Math.abs(date["b" /* default */].getDateDiff(oldDate, nowDate, format.unit));

      if (diff > 0) {
        break;
      }
    }

    let displayUnit = format.msg;

    if (diff > 1) {
      displayUnit += "s";
    }

    return diff + " " + displayUnit + " " + when;
  }), Vue.filter('approximate', function (num, precision) {
    precision = precision || 2;
    return (+(Math.round(+(num + 'e' + precision)) + 'e' + -precision)).toFixed(precision);
  }), Vue.filter('lower', function (value) {
    return value || value === 0 ? value.toString().toLowerCase() : '';
  }), Vue.filter('upper', function (value) {
    return value || value === 0 ? value.toString().toUpperCase() : '';
  }), Vue.filter('truncate', function (value, length, dots) {
    length = length || 15;
    dots = dots || "...";
    if (!value || typeof value !== 'string') return '';
    if (value.length <= length) return value;
    return value.substring(0, length) + dots;
  }), Vue.filter('currency', function (value, currency, fraction) {
    currency = currency || "USD";
    fraction = fraction || 2;
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: fraction
    });
    return formatter.format(value);
  }), Vue.filter('formatSize', function (bytes) {
    let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
  });
});
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.esm.js
var vue_i18n_esm = __webpack_require__("a925");

// CONCATENATED MODULE: ./src/i18n/index.js
//import en from './en'
/* harmony default export */ var i18n = ({//en: en
});
// CONCATENATED MODULE: ./src/boot/i18n.js

;





const currentLocale = StorageService.getLocale() || vue_plugin["a" /* default */].lang.isoName;
vue_runtime_esm["a" /* default */].use(vue_i18n_esm["a" /* default */]);
const i18n_i18n = new vue_i18n_esm["a" /* default */]({
  locale: currentLocale,
  fallbackLocale: 'en-us',
  messages: i18n,
  silentTranslationWarn: true
});

try {
  if (currentLocale == 'en-us') {
    currentLocale = 'en';
  }

  __webpack_require__("b2d7")(`./${currentLocale}`).then(localeModule => {
    Object(vee_validate_esm["d" /* localize */])(currentLocale, localeModule);
  });
} catch (ex) {
  console.log(`Veevalidate locale(${currentLocale}) not available`);
}

/* harmony default export */ var boot_i18n = (({
  app
}) => {
  // Set i18n instance on app
  app.i18n = i18n_i18n;
});

// CONCATENATED MODULE: ./src/boot/axios.js


vue_runtime_esm["a" /* default */].prototype.$axios = axios_default.a;
// EXTERNAL MODULE: ./node_modules/@quasar/quasar-app-extension-qcalendar/src/boot/register.js + 1 modules
var register = __webpack_require__("9ce1");

// CONCATENATED MODULE: ./.quasar/client-entry.js



/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



































































































 // We load Quasar stylesheet file











vue_runtime_esm["a" /* default */].config.devtools = true;
vue_runtime_esm["a" /* default */].config.productionTip = false;
const publicPath = ``;

async function start() {
  const {
    app,
    store,
    router
  } = await _quasar_app();
  let hasRedirected = false;

  const redirect = url => {
    hasRedirected = true;
    const normalized = Object(url) === url ? router.resolve(url).route.fullPath : url;
    window.location.href = normalized;
  };

  const urlPath = window.location.href.replace(window.location.origin, '');
  const bootFiles = [/* Cannot get final name for export "default" in "./src/main.js" (known exports: , known reexports: ) */ undefined, filters, boot_i18n, /* Cannot get final name for export "default" in "./src/boot/axios.js" (known exports: , known reexports: ) */ undefined, register["default"]];

  for (let i = 0; hasRedirected === false && i < bootFiles.length; i++) {
    if (typeof bootFiles[i] !== 'function') {
      continue;
    }

    try {
      await bootFiles[i]({
        app,
        router,
        store,
        Vue: vue_runtime_esm["a" /* default */],
        ssrContext: null,
        redirect,
        urlPath,
        publicPath
      });
    } catch (err) {
      if (err && err.url) {
        window.location.href = err.url;
        return;
      }

      console.error('[Quasar] boot error:', err);
      return;
    }
  }

  if (hasRedirected === true) {
    return;
  }

  new vue_runtime_esm["a" /* default */](app);
}

start();

/***/ }),

/***/ "b2d7":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ar": [
		"d4d7",
		0
	],
	"./ar.json": [
		"d4d7",
		0
	],
	"./az": [
		"5db6",
		0
	],
	"./az.json": [
		"5db6",
		0
	],
	"./bd": [
		"2b85",
		0
	],
	"./bd.json": [
		"2b85",
		0
	],
	"./bg": [
		"3108",
		0
	],
	"./bg.json": [
		"3108",
		0
	],
	"./ca": [
		"36fd",
		0
	],
	"./ca.json": [
		"36fd",
		0
	],
	"./ckb": [
		"5ac5",
		0
	],
	"./ckb.json": [
		"5ac5",
		0
	],
	"./cs": [
		"f694",
		0
	],
	"./cs.json": [
		"f694",
		0
	],
	"./da": [
		"853c",
		0
	],
	"./da.json": [
		"853c",
		0
	],
	"./de": [
		"f551",
		0
	],
	"./de.json": [
		"f551",
		0
	],
	"./el": [
		"3be5",
		0
	],
	"./el.json": [
		"3be5",
		0
	],
	"./en": [
		"2593",
		0
	],
	"./en.json": [
		"2593",
		0
	],
	"./es": [
		"5a17",
		0
	],
	"./es.json": [
		"5a17",
		0
	],
	"./et": [
		"28b1",
		0
	],
	"./et.json": [
		"28b1",
		0
	],
	"./eu": [
		"656c",
		0
	],
	"./eu.json": [
		"656c",
		0
	],
	"./fa": [
		"5ea1",
		0
	],
	"./fa.json": [
		"5ea1",
		0
	],
	"./fi": [
		"e9cd",
		0
	],
	"./fi.json": [
		"e9cd",
		0
	],
	"./fr": [
		"6fde",
		0
	],
	"./fr.json": [
		"6fde",
		0
	],
	"./he": [
		"d567",
		0
	],
	"./he.json": [
		"d567",
		0
	],
	"./hi": [
		"cdad",
		0
	],
	"./hi.json": [
		"cdad",
		0
	],
	"./hr": [
		"dc20",
		0
	],
	"./hr.json": [
		"dc20",
		0
	],
	"./hu": [
		"bed6",
		0
	],
	"./hu.json": [
		"bed6",
		0
	],
	"./id": [
		"7a70",
		0
	],
	"./id.json": [
		"7a70",
		0
	],
	"./it": [
		"e26a",
		0
	],
	"./it.json": [
		"e26a",
		0
	],
	"./ja": [
		"ddd7",
		0
	],
	"./ja.json": [
		"ddd7",
		0
	],
	"./ka": [
		"fdcd",
		0
	],
	"./ka.json": [
		"fdcd",
		0
	],
	"./ko": [
		"e48c",
		0
	],
	"./ko.json": [
		"e48c",
		0
	],
	"./lt": [
		"85f3",
		0
	],
	"./lt.json": [
		"85f3",
		0
	],
	"./lv": [
		"c64c",
		0
	],
	"./lv.json": [
		"c64c",
		0
	],
	"./mn": [
		"0c64",
		0
	],
	"./mn.json": [
		"0c64",
		0
	],
	"./ms_MY": [
		"3708",
		0
	],
	"./ms_MY.json": [
		"3708",
		0
	],
	"./nb_NO": [
		"16c1",
		0
	],
	"./nb_NO.json": [
		"16c1",
		0
	],
	"./ne": [
		"52b8",
		0
	],
	"./ne.json": [
		"52b8",
		0
	],
	"./nl": [
		"562f",
		0
	],
	"./nl.json": [
		"562f",
		0
	],
	"./nn_NO": [
		"c7c8",
		0
	],
	"./nn_NO.json": [
		"c7c8",
		0
	],
	"./pl": [
		"94ce",
		0
	],
	"./pl.json": [
		"94ce",
		0
	],
	"./pt_BR": [
		"38a9",
		0
	],
	"./pt_BR.json": [
		"38a9",
		0
	],
	"./pt_PT": [
		"3207",
		0
	],
	"./pt_PT.json": [
		"3207",
		0
	],
	"./ro": [
		"eaf5",
		0
	],
	"./ro.json": [
		"eaf5",
		0
	],
	"./ru": [
		"8de0",
		0
	],
	"./ru.json": [
		"8de0",
		0
	],
	"./sk": [
		"70d1",
		0
	],
	"./sk.json": [
		"70d1",
		0
	],
	"./sl": [
		"2572",
		0
	],
	"./sl.json": [
		"2572",
		0
	],
	"./sq": [
		"5e5e",
		0
	],
	"./sq.json": [
		"5e5e",
		0
	],
	"./sr": [
		"111a",
		0
	],
	"./sr.json": [
		"111a",
		0
	],
	"./sr_Latin": [
		"4aa8",
		0
	],
	"./sr_Latin.json": [
		"4aa8",
		0
	],
	"./sv": [
		"ec0a",
		0
	],
	"./sv.json": [
		"ec0a",
		0
	],
	"./th": [
		"51d9",
		0
	],
	"./th.json": [
		"51d9",
		0
	],
	"./tr": [
		"55f0",
		0
	],
	"./tr.json": [
		"55f0",
		0
	],
	"./uk": [
		"e4b6",
		0
	],
	"./uk.json": [
		"e4b6",
		0
	],
	"./vi": [
		"368c",
		0
	],
	"./vi.json": [
		"368c",
		0
	],
	"./zh_CN": [
		"1cd5",
		0
	],
	"./zh_CN.json": [
		"1cd5",
		0
	],
	"./zh_TW": [
		"60d4",
		0
	],
	"./zh_TW.json": [
		"60d4",
		0
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "b2d7";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "ed82":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.6e822a48.js.map