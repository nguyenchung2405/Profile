var RemoteProfile;
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "webpack/container/entry/RemoteProfile":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var moduleMap = {
	"./ButtonProfileService": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_react-icons_bs_index_esm_js-node_modules_react-icons_fc_index_esm_js-nod-378b5e"), __webpack_require__.e("vendors-node_modules_redux_es_redux_js"), __webpack_require__.e("vendors-node_modules_redux-saga_core_dist_redux-saga-core_esm_js-node_modules_css-loader_dist-66fd4b"), __webpack_require__.e("webpack_sharing_consume_default_react_react"), __webpack_require__.e("webpack_sharing_consume_default_moment_moment"), __webpack_require__.e("webpack_sharing_consume_default_antd_antd-webpack_sharing_consume_default_react-router-dom_re-089d6a"), __webpack_require__.e("src_App_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/App.js */ "./src/App.js")); }; });
	},
	"./MenuProfileService": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_react-icons_bs_index_esm_js-node_modules_react-icons_fc_index_esm_js-nod-378b5e"), __webpack_require__.e("webpack_sharing_consume_default_react_react"), __webpack_require__.e("webpack_sharing_consume_default_moment_moment"), __webpack_require__.e("webpack_sharing_consume_default_antd_antd-webpack_sharing_consume_default_react-router-dom_re-089d6a"), __webpack_require__.e("src_components_sidebar_SubMenu_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/components/sidebar/SubMenu.js */ "./src/components/sidebar/SubMenu.js")); }; });
	}
};
var get = function(module, getScope) {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(function() {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = function(shareScope, initScope) {
	if (!__webpack_require__.S) return;
	var name = "default"
	var oldScope = __webpack_require__.S[name];
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: function() { return get; },
	init: function() { return init; }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "profile:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	!function() {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = function(name, initScope) {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = function(msg) { return typeof console !== "undefined" && console.warn && console.warn(msg); };
/******/ 			var uniqueName = "profile";
/******/ 			var register = function(name, version, factory, eager) {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = function(id) {
/******/ 				var handleError = function(err) { warn("Initialization of sharing external failed: " + err); };
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = function(module) { return module && module.init && module.init(__webpack_require__.S[name], initScope); }
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("@reduxjs/toolkit", "1.8.5", function() { return Promise.all([__webpack_require__.e("vendors-node_modules_redux_es_redux_js"), __webpack_require__.e("vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js")]).then(function() { return function() { return __webpack_require__(/*! ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"); }; }); });
/******/ 					register("antd", "4.23.0", function() { return Promise.all([__webpack_require__.e("vendors-node_modules_antd_es_index_js"), __webpack_require__.e("webpack_sharing_consume_default_react_react"), __webpack_require__.e("webpack_sharing_consume_default_react-dom_react-dom"), __webpack_require__.e("webpack_sharing_consume_default_moment_moment")]).then(function() { return function() { return __webpack_require__(/*! ./node_modules/antd/es/index.js */ "./node_modules/antd/es/index.js"); }; }); });
/******/ 					register("axios", "0.27.2", function() { return __webpack_require__.e("vendors-node_modules_axios_index_js").then(function() { return function() { return __webpack_require__(/*! ./node_modules/axios/index.js */ "./node_modules/axios/index.js"); }; }); });
/******/ 					register("moment", "2.29.4", function() { return Promise.all([__webpack_require__.e("vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-248d90"), __webpack_require__.e("node_modules_moment_locale_sync_recursive_")]).then(function() { return function() { return __webpack_require__(/*! ./node_modules/moment/moment.js */ "./node_modules/moment/moment.js"); }; }); });
/******/ 					register("react-dom", "18.2.0", function() { return Promise.all([__webpack_require__.e("vendors-node_modules_react-dom_index_js"), __webpack_require__.e("webpack_sharing_consume_default_react_react")]).then(function() { return function() { return __webpack_require__(/*! ./node_modules/react-dom/index.js */ "./node_modules/react-dom/index.js"); }; }); });
/******/ 					register("react-redux", "8.0.2", function() { return Promise.all([__webpack_require__.e("vendors-node_modules_react-redux_es_index_js"), __webpack_require__.e("webpack_sharing_consume_default_react_react"), __webpack_require__.e("webpack_sharing_consume_default_react-dom_react-dom"), __webpack_require__.e("node_modules_babel_runtime_helpers_esm_extends_js-node_modules_babel_runtime_helpers_esm_obje-8420dd")]).then(function() { return function() { return __webpack_require__(/*! ./node_modules/react-redux/es/index.js */ "./node_modules/react-redux/es/index.js"); }; }); });
/******/ 					register("react-router-dom", "6.4.1", function() { return Promise.all([__webpack_require__.e("vendors-node_modules_react-router-dom_dist_index_js"), __webpack_require__.e("webpack_sharing_consume_default_react_react")]).then(function() { return function() { return __webpack_require__(/*! ./node_modules/react-router-dom/dist/index.js */ "./node_modules/react-router-dom/dist/index.js"); }; }); });
/******/ 					register("react", "18.2.0", function() { return __webpack_require__.e("vendors-node_modules_react_index_js").then(function() { return function() { return __webpack_require__(/*! ./node_modules/react/index.js */ "./node_modules/react/index.js"); }; }); });
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(function() { return initPromises[name] = 1; });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/consumes */
/******/ 	!function() {
/******/ 		var parseVersion = function(str) {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var p=function(p){return p.split(".").map((function(p){return+p==p?+p:p}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 		}
/******/ 		var versionLt = function(a, b) {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 		}
/******/ 		var rangeToString = function(range) {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 		}
/******/ 		var satisfy = function(range, version) {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 		}
/******/ 		var ensureExistence = function(scopeName, key) {
/******/ 			var scope = __webpack_require__.S[scopeName];
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) throw new Error("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 			return scope;
/******/ 		};
/******/ 		var findVersion = function(scope, key) {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce(function(a, b) {
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var findSingletonVersionKey = function(scope, key) {
/******/ 			var versions = scope[key];
/******/ 			return Object.keys(versions).reduce(function(a, b) {
/******/ 				return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 			}, 0);
/******/ 		};
/******/ 		var getInvalidSingletonVersionMessage = function(scope, key, version, requiredVersion) {
/******/ 			return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 		};
/******/ 		var getSingleton = function(scope, scopeName, key, requiredVersion) {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var getSingletonVersion = function(scope, scopeName, key, requiredVersion) {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) typeof console !== "undefined" && console.warn && console.warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var getStrictSingletonVersion = function(scope, scopeName, key, requiredVersion) {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) throw new Error(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var findValidVersion = function(scope, key, requiredVersion) {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce(function(a, b) {
/******/ 				if (!satisfy(requiredVersion, b)) return a;
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var getInvalidVersionMessage = function(scope, scopeName, key, requiredVersion) {
/******/ 			var versions = scope[key];
/******/ 			return "No satisfying version (" + rangeToString(requiredVersion) + ") of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 				"Available versions: " + Object.keys(versions).map(function(key) {
/******/ 				return key + " from " + versions[key].from;
/******/ 			}).join(", ");
/******/ 		};
/******/ 		var getValidVersion = function(scope, scopeName, key, requiredVersion) {
/******/ 			var entry = findValidVersion(scope, key, requiredVersion);
/******/ 			if(entry) return get(entry);
/******/ 			throw new Error(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var warnInvalidVersion = function(scope, scopeName, key, requiredVersion) {
/******/ 			typeof console !== "undefined" && console.warn && console.warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var get = function(entry) {
/******/ 			entry.loaded = 1;
/******/ 			return entry.get()
/******/ 		};
/******/ 		var init = function(fn) { return function(scopeName, a, b, c) {
/******/ 			var promise = __webpack_require__.I(scopeName);
/******/ 			if (promise && promise.then) return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], a, b, c));
/******/ 			return fn(scopeName, __webpack_require__.S[scopeName], a, b, c);
/******/ 		}; };
/******/ 		
/******/ 		var load = /*#__PURE__*/ init(function(scopeName, scope, key) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findVersion(scope, key));
/******/ 		});
/******/ 		var loadFallback = /*#__PURE__*/ init(function(scopeName, scope, key, fallback) {
/******/ 			return scope && __webpack_require__.o(scope, key) ? get(findVersion(scope, key)) : fallback();
/******/ 		});
/******/ 		var loadVersionCheck = /*#__PURE__*/ init(function(scopeName, scope, key, version) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingleton = /*#__PURE__*/ init(function(scopeName, scope, key) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getSingleton(scope, scopeName, key);
/******/ 		});
/******/ 		var loadSingletonVersionCheck = /*#__PURE__*/ init(function(scopeName, scope, key, version) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheck = /*#__PURE__*/ init(function(scopeName, scope, key, version) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getValidVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheck = /*#__PURE__*/ init(function(scopeName, scope, key, version) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadVersionCheckFallback = /*#__PURE__*/ init(function(scopeName, scope, key, version, fallback) {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingletonFallback = /*#__PURE__*/ init(function(scopeName, scope, key, fallback) {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getSingleton(scope, scopeName, key);
/******/ 		});
/******/ 		var loadSingletonVersionCheckFallback = /*#__PURE__*/ init(function(scopeName, scope, key, version, fallback) {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheckFallback = /*#__PURE__*/ init(function(scopeName, scope, key, version, fallback) {
/******/ 			var entry = scope && __webpack_require__.o(scope, key) && findValidVersion(scope, key, version);
/******/ 			return entry ? get(entry) : fallback();
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheckFallback = /*#__PURE__*/ init(function(scopeName, scope, key, version, fallback) {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var installedModules = {};
/******/ 		var moduleToHandlerMapping = {
/******/ 			"webpack/sharing/consume/default/react/react": function() { return loadSingletonVersionCheckFallback("default", "react", [1,18,2,0], function() { return __webpack_require__.e("vendors-node_modules_react_index_js").then(function() { return function() { return __webpack_require__(/*! react */ "./node_modules/react/index.js"); }; }); }); },
/******/ 			"webpack/sharing/consume/default/react-dom/react-dom": function() { return loadSingletonVersionCheckFallback("default", "react-dom", [1,18,2,0], function() { return __webpack_require__.e("vendors-node_modules_react-dom_index_js").then(function() { return function() { return __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"); }; }); }); },
/******/ 			"webpack/sharing/consume/default/moment/moment": function() { return loadStrictVersionCheckFallback("default", "moment", [1,2,29,4], function() { return Promise.all([__webpack_require__.e("vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-248d90"), __webpack_require__.e("node_modules_moment_locale_sync_recursive_")]).then(function() { return function() { return __webpack_require__(/*! moment */ "./node_modules/moment/moment.js"); }; }); }); },
/******/ 			"webpack/sharing/consume/default/react-router-dom/react-router-dom": function() { return loadStrictVersionCheckFallback("default", "react-router-dom", [1,6,4,1], function() { return __webpack_require__.e("vendors-node_modules_react-router-dom_dist_index_js").then(function() { return function() { return __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js"); }; }); }); },
/******/ 			"webpack/sharing/consume/default/antd/antd": function() { return loadStrictVersionCheckFallback("default", "antd", [1,4,23,0], function() { return Promise.all([__webpack_require__.e("vendors-node_modules_antd_es_index_js"), __webpack_require__.e("webpack_sharing_consume_default_react-dom_react-dom")]).then(function() { return function() { return __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js"); }; }); }); },
/******/ 			"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit": function() { return loadStrictVersionCheckFallback("default", "@reduxjs/toolkit", [1,1,8,5], function() { return __webpack_require__.e("vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js").then(function() { return function() { return __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"); }; }); }); },
/******/ 			"webpack/sharing/consume/default/axios/axios": function() { return loadStrictVersionCheckFallback("default", "axios", [2,0,27,2], function() { return __webpack_require__.e("vendors-node_modules_axios_index_js").then(function() { return function() { return __webpack_require__(/*! axios */ "./node_modules/axios/index.js"); }; }); }); },
/******/ 			"webpack/sharing/consume/default/react-redux/react-redux": function() { return loadStrictVersionCheckFallback("default", "react-redux", [1,8,0,2], function() { return Promise.all([__webpack_require__.e("vendors-node_modules_react-redux_es_index_js"), __webpack_require__.e("webpack_sharing_consume_default_react-dom_react-dom")]).then(function() { return function() { return __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js"); }; }); }); }
/******/ 		};
/******/ 		// no consumes in initial chunks
/******/ 		var chunkMapping = {
/******/ 			"webpack_sharing_consume_default_react_react": [
/******/ 				"webpack/sharing/consume/default/react/react"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_react-dom_react-dom": [
/******/ 				"webpack/sharing/consume/default/react-dom/react-dom"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_moment_moment": [
/******/ 				"webpack/sharing/consume/default/moment/moment"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_antd_antd-webpack_sharing_consume_default_react-router-dom_re-089d6a": [
/******/ 				"webpack/sharing/consume/default/react-router-dom/react-router-dom",
/******/ 				"webpack/sharing/consume/default/antd/antd"
/******/ 			],
/******/ 			"src_App_js": [
/******/ 				"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit",
/******/ 				"webpack/sharing/consume/default/axios/axios",
/******/ 				"webpack/sharing/consume/default/react-redux/react-redux"
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.consumes = function(chunkId, promises) {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach(function(id) {
/******/ 					if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 					var onFactory = function(factory) {
/******/ 						installedModules[id] = 0;
/******/ 						__webpack_require__.m[id] = function(module) {
/******/ 							delete __webpack_require__.c[id];
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					var onError = function(error) {
/******/ 						delete installedModules[id];
/******/ 						__webpack_require__.m[id] = function(module) {
/******/ 							delete __webpack_require__.c[id];
/******/ 							throw error;
/******/ 						}
/******/ 					};
/******/ 					try {
/******/ 						var promise = moduleToHandlerMapping[id]();
/******/ 						if(promise.then) {
/******/ 							promises.push(installedModules[id] = promise.then(onFactory)['catch'](onError));
/******/ 						} else onFactory(promise);
/******/ 					} catch(e) { onError(e); }
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"RemoteProfile": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(!/^webpack_sharing_consume_default_(react(\-dom_react\-dom|_react)|antd_antd\-webpack_sharing_consume_default_react\-router\-dom_re\-089d6a|moment_moment)$/.test(chunkId)) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkprofile"] = self["webpackChunkprofile"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("webpack/container/entry/RemoteProfile");
/******/ 	RemoteProfile = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TEE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQSwyREFBMkQsb0VBQW9FO1dBQy9IOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsbUNBQW1DO1dBQ3BFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ3ZGQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9jb250YWluZXItZW50cnkiLCJ3ZWJwYWNrOi8vcHJvZmlsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvZmlsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vcHJvZmlsZS93ZWJwYWNrL3J1bnRpbWUvc2hhcmluZyIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2NvbnN1bWVzIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvZmlsZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvZmlsZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtb2R1bGVNYXAgPSB7XG5cdFwiLi9CdXR0b25Qcm9maWxlU2VydmljZVwiOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoW19fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0LWljb25zX2JzX2luZGV4X2VzbV9qcy1ub2RlX21vZHVsZXNfcmVhY3QtaWNvbnNfZmNfaW5kZXhfZXNtX2pzLW5vZC0zNzhiNWVcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlZHV4X2VzX3JlZHV4X2pzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19yZWR1eC1zYWdhX2NvcmVfZGlzdF9yZWR1eC1zYWdhLWNvcmVfZXNtX2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3QtNjZmZDRiXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3JlYWN0X3JlYWN0XCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X21vbWVudF9tb21lbnRcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfYW50ZF9hbnRkLXdlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3Qtcm91dGVyLWRvbV9yZS0wODlkNmFcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcInNyY19BcHBfanNcIildKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zcmMvQXBwLmpzICovIFwiLi9zcmMvQXBwLmpzXCIpKTsgfTsgfSk7XG5cdH0sXG5cdFwiLi9NZW51UHJvZmlsZVNlcnZpY2VcIjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKFtfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19yZWFjdC1pY29uc19ic19pbmRleF9lc21fanMtbm9kZV9tb2R1bGVzX3JlYWN0LWljb25zX2ZjX2luZGV4X2VzbV9qcy1ub2QtMzc4YjVlXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3JlYWN0X3JlYWN0XCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X21vbWVudF9tb21lbnRcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfYW50ZF9hbnRkLXdlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3Qtcm91dGVyLWRvbV9yZS0wODlkNmFcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcInNyY19jb21wb25lbnRzX3NpZGViYXJfU3ViTWVudV9qc1wiKV0pLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NyYy9jb21wb25lbnRzL3NpZGViYXIvU3ViTWVudS5qcyAqLyBcIi4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9TdWJNZW51LmpzXCIpKTsgfTsgfSk7XG5cdH1cbn07XG52YXIgZ2V0ID0gZnVuY3Rpb24obW9kdWxlLCBnZXRTY29wZSkge1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLlIgPSBnZXRTY29wZTtcblx0Z2V0U2NvcGUgPSAoXG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vZHVsZU1hcCwgbW9kdWxlKVxuXHRcdFx0PyBtb2R1bGVNYXBbbW9kdWxlXSgpXG5cdFx0XHQ6IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignTW9kdWxlIFwiJyArIG1vZHVsZSArICdcIiBkb2VzIG5vdCBleGlzdCBpbiBjb250YWluZXIuJyk7XG5cdFx0XHR9KVxuXHQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLlIgPSB1bmRlZmluZWQ7XG5cdHJldHVybiBnZXRTY29wZTtcbn07XG52YXIgaW5pdCA9IGZ1bmN0aW9uKHNoYXJlU2NvcGUsIGluaXRTY29wZSkge1xuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18uUykgcmV0dXJuO1xuXHR2YXIgbmFtZSA9IFwiZGVmYXVsdFwiXG5cdHZhciBvbGRTY29wZSA9IF9fd2VicGFja19yZXF1aXJlX18uU1tuYW1lXTtcblx0aWYob2xkU2NvcGUgJiYgb2xkU2NvcGUgIT09IHNoYXJlU2NvcGUpIHRocm93IG5ldyBFcnJvcihcIkNvbnRhaW5lciBpbml0aWFsaXphdGlvbiBmYWlsZWQgYXMgaXQgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZCB3aXRoIGEgZGlmZmVyZW50IHNoYXJlIHNjb3BlXCIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV0gPSBzaGFyZVNjb3BlO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5JKG5hbWUsIGluaXRTY29wZSk7XG59O1xuXG4vLyBUaGlzIGV4cG9ydHMgZ2V0dGVycyB0byBkaXNhbGxvdyBtb2RpZmljYXRpb25zXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQoZXhwb3J0cywge1xuXHRnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZ2V0OyB9LFxuXHRpbml0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGluaXQ7IH1cbn0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoZnVuY3Rpb24ocHJvbWlzZXMsIGtleSkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuYnVuZGxlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInByb2ZpbGU6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9IGZ1bmN0aW9uKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbihwcmV2LCBldmVudCkge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goZnVuY3Rpb24oZm4pIHsgcmV0dXJuIGZuKGV2ZW50KTsgfSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLlMgPSB7fTtcbnZhciBpbml0UHJvbWlzZXMgPSB7fTtcbnZhciBpbml0VG9rZW5zID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLkkgPSBmdW5jdGlvbihuYW1lLCBpbml0U2NvcGUpIHtcblx0aWYoIWluaXRTY29wZSkgaW5pdFNjb3BlID0gW107XG5cdC8vIGhhbmRsaW5nIGNpcmN1bGFyIGluaXQgY2FsbHNcblx0dmFyIGluaXRUb2tlbiA9IGluaXRUb2tlbnNbbmFtZV07XG5cdGlmKCFpbml0VG9rZW4pIGluaXRUb2tlbiA9IGluaXRUb2tlbnNbbmFtZV0gPSB7fTtcblx0aWYoaW5pdFNjb3BlLmluZGV4T2YoaW5pdFRva2VuKSA+PSAwKSByZXR1cm47XG5cdGluaXRTY29wZS5wdXNoKGluaXRUb2tlbik7XG5cdC8vIG9ubHkgcnVucyBvbmNlXG5cdGlmKGluaXRQcm9taXNlc1tuYW1lXSkgcmV0dXJuIGluaXRQcm9taXNlc1tuYW1lXTtcblx0Ly8gY3JlYXRlcyBhIG5ldyBzaGFyZSBzY29wZSBpZiBuZWVkZWRcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhfX3dlYnBhY2tfcmVxdWlyZV9fLlMsIG5hbWUpKSBfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV0gPSB7fTtcblx0Ly8gcnVucyBhbGwgaW5pdCBzbmlwcGV0cyBmcm9tIGFsbCBtb2R1bGVzIHJlYWNoYWJsZVxuXHR2YXIgc2NvcGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV07XG5cdHZhciB3YXJuID0gZnVuY3Rpb24obXNnKSB7IHJldHVybiB0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKG1zZyk7IH07XG5cdHZhciB1bmlxdWVOYW1lID0gXCJwcm9maWxlXCI7XG5cdHZhciByZWdpc3RlciA9IGZ1bmN0aW9uKG5hbWUsIHZlcnNpb24sIGZhY3RvcnksIGVhZ2VyKSB7XG5cdFx0dmFyIHZlcnNpb25zID0gc2NvcGVbbmFtZV0gPSBzY29wZVtuYW1lXSB8fCB7fTtcblx0XHR2YXIgYWN0aXZlVmVyc2lvbiA9IHZlcnNpb25zW3ZlcnNpb25dO1xuXHRcdGlmKCFhY3RpdmVWZXJzaW9uIHx8ICghYWN0aXZlVmVyc2lvbi5sb2FkZWQgJiYgKCFlYWdlciAhPSAhYWN0aXZlVmVyc2lvbi5lYWdlciA/IGVhZ2VyIDogdW5pcXVlTmFtZSA+IGFjdGl2ZVZlcnNpb24uZnJvbSkpKSB2ZXJzaW9uc1t2ZXJzaW9uXSA9IHsgZ2V0OiBmYWN0b3J5LCBmcm9tOiB1bmlxdWVOYW1lLCBlYWdlcjogISFlYWdlciB9O1xuXHR9O1xuXHR2YXIgaW5pdEV4dGVybmFsID0gZnVuY3Rpb24oaWQpIHtcblx0XHR2YXIgaGFuZGxlRXJyb3IgPSBmdW5jdGlvbihlcnIpIHsgd2FybihcIkluaXRpYWxpemF0aW9uIG9mIHNoYXJpbmcgZXh0ZXJuYWwgZmFpbGVkOiBcIiArIGVycik7IH07XG5cdFx0dHJ5IHtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0XHRcdGlmKCFtb2R1bGUpIHJldHVybjtcblx0XHRcdHZhciBpbml0Rm4gPSBmdW5jdGlvbihtb2R1bGUpIHsgcmV0dXJuIG1vZHVsZSAmJiBtb2R1bGUuaW5pdCAmJiBtb2R1bGUuaW5pdChfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV0sIGluaXRTY29wZSk7IH1cblx0XHRcdGlmKG1vZHVsZS50aGVuKSByZXR1cm4gcHJvbWlzZXMucHVzaChtb2R1bGUudGhlbihpbml0Rm4sIGhhbmRsZUVycm9yKSk7XG5cdFx0XHR2YXIgaW5pdFJlc3VsdCA9IGluaXRGbihtb2R1bGUpO1xuXHRcdFx0aWYoaW5pdFJlc3VsdCAmJiBpbml0UmVzdWx0LnRoZW4pIHJldHVybiBwcm9taXNlcy5wdXNoKGluaXRSZXN1bHRbJ2NhdGNoJ10oaGFuZGxlRXJyb3IpKTtcblx0XHR9IGNhdGNoKGVycikgeyBoYW5kbGVFcnJvcihlcnIpOyB9XG5cdH1cblx0dmFyIHByb21pc2VzID0gW107XG5cdHN3aXRjaChuYW1lKSB7XG5cdFx0Y2FzZSBcImRlZmF1bHRcIjoge1xuXHRcdFx0cmVnaXN0ZXIoXCJAcmVkdXhqcy90b29sa2l0XCIsIFwiMS44LjVcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQcm9taXNlLmFsbChbX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcmVkdXhfZXNfcmVkdXhfanNcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlZHV4anNfdG9vbGtpdF9kaXN0X3JlZHV4LXRvb2xraXRfZXNtX2pzXCIpXSkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvQHJlZHV4anMvdG9vbGtpdC9kaXN0L3JlZHV4LXRvb2xraXQuZXNtLmpzICovIFwiLi9ub2RlX21vZHVsZXMvQHJlZHV4anMvdG9vbGtpdC9kaXN0L3JlZHV4LXRvb2xraXQuZXNtLmpzXCIpOyB9OyB9KTsgfSk7XG5cdFx0XHRyZWdpc3RlcihcImFudGRcIiwgXCI0LjIzLjBcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQcm9taXNlLmFsbChbX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYW50ZF9lc19pbmRleF9qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdF9yZWFjdFwiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdC1kb21fcmVhY3QtZG9tXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X21vbWVudF9tb21lbnRcIildKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy9hbnRkL2VzL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9pbmRleC5qc1wiKTsgfTsgfSk7IH0pO1xuXHRcdFx0cmVnaXN0ZXIoXCJheGlvc1wiLCBcIjAuMjcuMlwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2F4aW9zX2luZGV4X2pzXCIpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcIik7IH07IH0pOyB9KTtcblx0XHRcdHJlZ2lzdGVyKFwibW9tZW50XCIsIFwiMi4yOS40XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUHJvbWlzZS5hbGwoW19fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX21vbWVudF9sb2NhbGVfYWZfanMtbm9kZV9tb2R1bGVzX21vbWVudF9sb2NhbGVfYXItZHpfanMtbm9kZV9tb2R1bGVzX21vbS0yNDhkOTBcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIm5vZGVfbW9kdWxlc19tb21lbnRfbG9jYWxlX3N5bmNfcmVjdXJzaXZlX1wiKV0pLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL21vbWVudC9tb21lbnQuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbW9tZW50LmpzXCIpOyB9OyB9KTsgfSk7XG5cdFx0XHRyZWdpc3RlcihcInJlYWN0LWRvbVwiLCBcIjE4LjIuMFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFByb21pc2UuYWxsKFtfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19yZWFjdC1kb21faW5kZXhfanNcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3RfcmVhY3RcIildKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgKi8gXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanNcIik7IH07IH0pOyB9KTtcblx0XHRcdHJlZ2lzdGVyKFwicmVhY3QtcmVkdXhcIiwgXCI4LjAuMlwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFByb21pc2UuYWxsKFtfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19yZWFjdC1yZWR1eF9lc19pbmRleF9qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdF9yZWFjdFwiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdC1kb21fcmVhY3QtZG9tXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJub2RlX21vZHVsZXNfYmFiZWxfcnVudGltZV9oZWxwZXJzX2VzbV9leHRlbmRzX2pzLW5vZGVfbW9kdWxlc19iYWJlbF9ydW50aW1lX2hlbHBlcnNfZXNtX29iamUtODQyMGRkXCIpXSkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaW5kZXguanMgKi8gXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9pbmRleC5qc1wiKTsgfTsgfSk7IH0pO1xuXHRcdFx0cmVnaXN0ZXIoXCJyZWFjdC1yb3V0ZXItZG9tXCIsIFwiNi40LjFcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQcm9taXNlLmFsbChbX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3Qtcm91dGVyLWRvbV9kaXN0X2luZGV4X2pzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3JlYWN0X3JlYWN0XCIpXSkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9kaXN0L2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9kaXN0L2luZGV4LmpzXCIpOyB9OyB9KTsgfSk7XG5cdFx0XHRyZWdpc3RlcihcInJlYWN0XCIsIFwiMTguMi4wXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3RfaW5kZXhfanNcIikudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgKi8gXCIuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qc1wiKTsgfTsgfSk7IH0pO1xuXHRcdH1cblx0XHRicmVhaztcblx0fVxuXHRpZighcHJvbWlzZXMubGVuZ3RoKSByZXR1cm4gaW5pdFByb21pc2VzW25hbWVdID0gMTtcblx0cmV0dXJuIGluaXRQcm9taXNlc1tuYW1lXSA9IFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW5pdFByb21pc2VzW25hbWVdID0gMTsgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwidmFyIHBhcnNlVmVyc2lvbiA9IGZ1bmN0aW9uKHN0cikge1xuXHQvLyBzZWUgd2VicGFjay9saWIvdXRpbC9zZW12ZXIuanMgZm9yIG9yaWdpbmFsIGNvZGVcblx0dmFyIHA9ZnVuY3Rpb24ocCl7cmV0dXJuIHAuc3BsaXQoXCIuXCIpLm1hcCgoZnVuY3Rpb24ocCl7cmV0dXJuK3A9PXA/K3A6cH0pKX0sbj0vXihbXi0rXSspPyg/Oi0oW14rXSspKT8oPzpcXCsoLispKT8kLy5leGVjKHN0cikscj1uWzFdP3AoblsxXSk6W107cmV0dXJuIG5bMl0mJihyLmxlbmd0aCsrLHIucHVzaC5hcHBseShyLHAoblsyXSkpKSxuWzNdJiYoci5wdXNoKFtdKSxyLnB1c2guYXBwbHkocixwKG5bM10pKSkscjtcbn1cbnZhciB2ZXJzaW9uTHQgPSBmdW5jdGlvbihhLCBiKSB7XG5cdC8vIHNlZSB3ZWJwYWNrL2xpYi91dGlsL3NlbXZlci5qcyBmb3Igb3JpZ2luYWwgY29kZVxuXHRhPXBhcnNlVmVyc2lvbihhKSxiPXBhcnNlVmVyc2lvbihiKTtmb3IodmFyIHI9MDs7KXtpZihyPj1hLmxlbmd0aClyZXR1cm4gcjxiLmxlbmd0aCYmXCJ1XCIhPSh0eXBlb2YgYltyXSlbMF07dmFyIGU9YVtyXSxuPSh0eXBlb2YgZSlbMF07aWYocj49Yi5sZW5ndGgpcmV0dXJuXCJ1XCI9PW47dmFyIHQ9YltyXSxmPSh0eXBlb2YgdClbMF07aWYobiE9ZilyZXR1cm5cIm9cIj09biYmXCJuXCI9PWZ8fChcInNcIj09Znx8XCJ1XCI9PW4pO2lmKFwib1wiIT1uJiZcInVcIiE9biYmZSE9dClyZXR1cm4gZTx0O3IrK31cbn1cbnZhciByYW5nZVRvU3RyaW5nID0gZnVuY3Rpb24ocmFuZ2UpIHtcblx0Ly8gc2VlIHdlYnBhY2svbGliL3V0aWwvc2VtdmVyLmpzIGZvciBvcmlnaW5hbCBjb2RlXG5cdHZhciByPXJhbmdlWzBdLG49XCJcIjtpZigxPT09cmFuZ2UubGVuZ3RoKXJldHVyblwiKlwiO2lmKHIrLjUpe24rPTA9PXI/XCI+PVwiOi0xPT1yP1wiPFwiOjE9PXI/XCJeXCI6Mj09cj9cIn5cIjpyPjA/XCI9XCI6XCIhPVwiO2Zvcih2YXIgZT0xLGE9MTthPHJhbmdlLmxlbmd0aDthKyspe2UtLSxuKz1cInVcIj09KHR5cGVvZih0PXJhbmdlW2FdKSlbMF0/XCItXCI6KGU+MD9cIi5cIjpcIlwiKSsoZT0yLHQpfXJldHVybiBufXZhciBnPVtdO2ZvcihhPTE7YTxyYW5nZS5sZW5ndGg7YSsrKXt2YXIgdD1yYW5nZVthXTtnLnB1c2goMD09PXQ/XCJub3QoXCIrbygpK1wiKVwiOjE9PT10P1wiKFwiK28oKStcIiB8fCBcIitvKCkrXCIpXCI6Mj09PXQ/Zy5wb3AoKStcIiBcIitnLnBvcCgpOnJhbmdlVG9TdHJpbmcodCkpfXJldHVybiBvKCk7ZnVuY3Rpb24gbygpe3JldHVybiBnLnBvcCgpLnJlcGxhY2UoL15cXCgoLispXFwpJC8sXCIkMVwiKX1cbn1cbnZhciBzYXRpc2Z5ID0gZnVuY3Rpb24ocmFuZ2UsIHZlcnNpb24pIHtcblx0Ly8gc2VlIHdlYnBhY2svbGliL3V0aWwvc2VtdmVyLmpzIGZvciBvcmlnaW5hbCBjb2RlXG5cdGlmKDAgaW4gcmFuZ2Upe3ZlcnNpb249cGFyc2VWZXJzaW9uKHZlcnNpb24pO3ZhciBlPXJhbmdlWzBdLHI9ZTwwO3ImJihlPS1lLTEpO2Zvcih2YXIgbj0wLGk9MSxhPSEwOztpKyssbisrKXt2YXIgZixzLGc9aTxyYW5nZS5sZW5ndGg/KHR5cGVvZiByYW5nZVtpXSlbMF06XCJcIjtpZihuPj12ZXJzaW9uLmxlbmd0aHx8XCJvXCI9PShzPSh0eXBlb2YoZj12ZXJzaW9uW25dKSlbMF0pKXJldHVybiFhfHwoXCJ1XCI9PWc/aT5lJiYhcjpcIlwiPT1nIT1yKTtpZihcInVcIj09cyl7aWYoIWF8fFwidVwiIT1nKXJldHVybiExfWVsc2UgaWYoYSlpZihnPT1zKWlmKGk8PWUpe2lmKGYhPXJhbmdlW2ldKXJldHVybiExfWVsc2V7aWYocj9mPnJhbmdlW2ldOmY8cmFuZ2VbaV0pcmV0dXJuITE7ZiE9cmFuZ2VbaV0mJihhPSExKX1lbHNlIGlmKFwic1wiIT1nJiZcIm5cIiE9Zyl7aWYocnx8aTw9ZSlyZXR1cm4hMTthPSExLGktLX1lbHNle2lmKGk8PWV8fHM8ZyE9cilyZXR1cm4hMTthPSExfWVsc2VcInNcIiE9ZyYmXCJuXCIhPWcmJihhPSExLGktLSl9fXZhciB0PVtdLG89dC5wb3AuYmluZCh0KTtmb3Iobj0xO248cmFuZ2UubGVuZ3RoO24rKyl7dmFyIHU9cmFuZ2Vbbl07dC5wdXNoKDE9PXU/bygpfG8oKToyPT11P28oKSZvKCk6dT9zYXRpc2Z5KHUsdmVyc2lvbik6IW8oKSl9cmV0dXJuISFvKCk7XG59XG52YXIgZW5zdXJlRXhpc3RlbmNlID0gZnVuY3Rpb24oc2NvcGVOYW1lLCBrZXkpIHtcblx0dmFyIHNjb3BlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5TW3Njb3BlTmFtZV07XG5cdGlmKCFzY29wZSB8fCAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKHNjb3BlLCBrZXkpKSB0aHJvdyBuZXcgRXJyb3IoXCJTaGFyZWQgbW9kdWxlIFwiICsga2V5ICsgXCIgZG9lc24ndCBleGlzdCBpbiBzaGFyZWQgc2NvcGUgXCIgKyBzY29wZU5hbWUpO1xuXHRyZXR1cm4gc2NvcGU7XG59O1xudmFyIGZpbmRWZXJzaW9uID0gZnVuY3Rpb24oc2NvcGUsIGtleSkge1xuXHR2YXIgdmVyc2lvbnMgPSBzY29wZVtrZXldO1xuXHR2YXIga2V5ID0gT2JqZWN0LmtleXModmVyc2lvbnMpLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XG5cdFx0cmV0dXJuICFhIHx8IHZlcnNpb25MdChhLCBiKSA/IGIgOiBhO1xuXHR9LCAwKTtcblx0cmV0dXJuIGtleSAmJiB2ZXJzaW9uc1trZXldXG59O1xudmFyIGZpbmRTaW5nbGV0b25WZXJzaW9uS2V5ID0gZnVuY3Rpb24oc2NvcGUsIGtleSkge1xuXHR2YXIgdmVyc2lvbnMgPSBzY29wZVtrZXldO1xuXHRyZXR1cm4gT2JqZWN0LmtleXModmVyc2lvbnMpLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XG5cdFx0cmV0dXJuICFhIHx8ICghdmVyc2lvbnNbYV0ubG9hZGVkICYmIHZlcnNpb25MdChhLCBiKSkgPyBiIDogYTtcblx0fSwgMCk7XG59O1xudmFyIGdldEludmFsaWRTaW5nbGV0b25WZXJzaW9uTWVzc2FnZSA9IGZ1bmN0aW9uKHNjb3BlLCBrZXksIHZlcnNpb24sIHJlcXVpcmVkVmVyc2lvbikge1xuXHRyZXR1cm4gXCJVbnNhdGlzZmllZCB2ZXJzaW9uIFwiICsgdmVyc2lvbiArIFwiIGZyb20gXCIgKyAodmVyc2lvbiAmJiBzY29wZVtrZXldW3ZlcnNpb25dLmZyb20pICsgXCIgb2Ygc2hhcmVkIHNpbmdsZXRvbiBtb2R1bGUgXCIgKyBrZXkgKyBcIiAocmVxdWlyZWQgXCIgKyByYW5nZVRvU3RyaW5nKHJlcXVpcmVkVmVyc2lvbikgKyBcIilcIlxufTtcbnZhciBnZXRTaW5nbGV0b24gPSBmdW5jdGlvbihzY29wZSwgc2NvcGVOYW1lLCBrZXksIHJlcXVpcmVkVmVyc2lvbikge1xuXHR2YXIgdmVyc2lvbiA9IGZpbmRTaW5nbGV0b25WZXJzaW9uS2V5KHNjb3BlLCBrZXkpO1xuXHRyZXR1cm4gZ2V0KHNjb3BlW2tleV1bdmVyc2lvbl0pO1xufTtcbnZhciBnZXRTaW5nbGV0b25WZXJzaW9uID0gZnVuY3Rpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCByZXF1aXJlZFZlcnNpb24pIHtcblx0dmFyIHZlcnNpb24gPSBmaW5kU2luZ2xldG9uVmVyc2lvbktleShzY29wZSwga2V5KTtcblx0aWYgKCFzYXRpc2Z5KHJlcXVpcmVkVmVyc2lvbiwgdmVyc2lvbikpIHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oZ2V0SW52YWxpZFNpbmdsZXRvblZlcnNpb25NZXNzYWdlKHNjb3BlLCBrZXksIHZlcnNpb24sIHJlcXVpcmVkVmVyc2lvbikpO1xuXHRyZXR1cm4gZ2V0KHNjb3BlW2tleV1bdmVyc2lvbl0pO1xufTtcbnZhciBnZXRTdHJpY3RTaW5nbGV0b25WZXJzaW9uID0gZnVuY3Rpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCByZXF1aXJlZFZlcnNpb24pIHtcblx0dmFyIHZlcnNpb24gPSBmaW5kU2luZ2xldG9uVmVyc2lvbktleShzY29wZSwga2V5KTtcblx0aWYgKCFzYXRpc2Z5KHJlcXVpcmVkVmVyc2lvbiwgdmVyc2lvbikpIHRocm93IG5ldyBFcnJvcihnZXRJbnZhbGlkU2luZ2xldG9uVmVyc2lvbk1lc3NhZ2Uoc2NvcGUsIGtleSwgdmVyc2lvbiwgcmVxdWlyZWRWZXJzaW9uKSk7XG5cdHJldHVybiBnZXQoc2NvcGVba2V5XVt2ZXJzaW9uXSk7XG59O1xudmFyIGZpbmRWYWxpZFZlcnNpb24gPSBmdW5jdGlvbihzY29wZSwga2V5LCByZXF1aXJlZFZlcnNpb24pIHtcblx0dmFyIHZlcnNpb25zID0gc2NvcGVba2V5XTtcblx0dmFyIGtleSA9IE9iamVjdC5rZXlzKHZlcnNpb25zKS5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xuXHRcdGlmICghc2F0aXNmeShyZXF1aXJlZFZlcnNpb24sIGIpKSByZXR1cm4gYTtcblx0XHRyZXR1cm4gIWEgfHwgdmVyc2lvbkx0KGEsIGIpID8gYiA6IGE7XG5cdH0sIDApO1xuXHRyZXR1cm4ga2V5ICYmIHZlcnNpb25zW2tleV1cbn07XG52YXIgZ2V0SW52YWxpZFZlcnNpb25NZXNzYWdlID0gZnVuY3Rpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCByZXF1aXJlZFZlcnNpb24pIHtcblx0dmFyIHZlcnNpb25zID0gc2NvcGVba2V5XTtcblx0cmV0dXJuIFwiTm8gc2F0aXNmeWluZyB2ZXJzaW9uIChcIiArIHJhbmdlVG9TdHJpbmcocmVxdWlyZWRWZXJzaW9uKSArIFwiKSBvZiBzaGFyZWQgbW9kdWxlIFwiICsga2V5ICsgXCIgZm91bmQgaW4gc2hhcmVkIHNjb3BlIFwiICsgc2NvcGVOYW1lICsgXCIuXFxuXCIgK1xuXHRcdFwiQXZhaWxhYmxlIHZlcnNpb25zOiBcIiArIE9iamVjdC5rZXlzKHZlcnNpb25zKS5tYXAoZnVuY3Rpb24oa2V5KSB7XG5cdFx0cmV0dXJuIGtleSArIFwiIGZyb20gXCIgKyB2ZXJzaW9uc1trZXldLmZyb207XG5cdH0pLmpvaW4oXCIsIFwiKTtcbn07XG52YXIgZ2V0VmFsaWRWZXJzaW9uID0gZnVuY3Rpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCByZXF1aXJlZFZlcnNpb24pIHtcblx0dmFyIGVudHJ5ID0gZmluZFZhbGlkVmVyc2lvbihzY29wZSwga2V5LCByZXF1aXJlZFZlcnNpb24pO1xuXHRpZihlbnRyeSkgcmV0dXJuIGdldChlbnRyeSk7XG5cdHRocm93IG5ldyBFcnJvcihnZXRJbnZhbGlkVmVyc2lvbk1lc3NhZ2Uoc2NvcGUsIHNjb3BlTmFtZSwga2V5LCByZXF1aXJlZFZlcnNpb24pKTtcbn07XG52YXIgd2FybkludmFsaWRWZXJzaW9uID0gZnVuY3Rpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCByZXF1aXJlZFZlcnNpb24pIHtcblx0dHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2FybihnZXRJbnZhbGlkVmVyc2lvbk1lc3NhZ2Uoc2NvcGUsIHNjb3BlTmFtZSwga2V5LCByZXF1aXJlZFZlcnNpb24pKTtcbn07XG52YXIgZ2V0ID0gZnVuY3Rpb24oZW50cnkpIHtcblx0ZW50cnkubG9hZGVkID0gMTtcblx0cmV0dXJuIGVudHJ5LmdldCgpXG59O1xudmFyIGluaXQgPSBmdW5jdGlvbihmbikgeyByZXR1cm4gZnVuY3Rpb24oc2NvcGVOYW1lLCBhLCBiLCBjKSB7XG5cdHZhciBwcm9taXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5JKHNjb3BlTmFtZSk7XG5cdGlmIChwcm9taXNlICYmIHByb21pc2UudGhlbikgcmV0dXJuIHByb21pc2UudGhlbihmbi5iaW5kKGZuLCBzY29wZU5hbWUsIF9fd2VicGFja19yZXF1aXJlX18uU1tzY29wZU5hbWVdLCBhLCBiLCBjKSk7XG5cdHJldHVybiBmbihzY29wZU5hbWUsIF9fd2VicGFja19yZXF1aXJlX18uU1tzY29wZU5hbWVdLCBhLCBiLCBjKTtcbn07IH07XG5cbnZhciBsb2FkID0gLyojX19QVVJFX18qLyBpbml0KGZ1bmN0aW9uKHNjb3BlTmFtZSwgc2NvcGUsIGtleSkge1xuXHRlbnN1cmVFeGlzdGVuY2Uoc2NvcGVOYW1lLCBrZXkpO1xuXHRyZXR1cm4gZ2V0KGZpbmRWZXJzaW9uKHNjb3BlLCBrZXkpKTtcbn0pO1xudmFyIGxvYWRGYWxsYmFjayA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXksIGZhbGxiYWNrKSB7XG5cdHJldHVybiBzY29wZSAmJiBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oc2NvcGUsIGtleSkgPyBnZXQoZmluZFZlcnNpb24oc2NvcGUsIGtleSkpIDogZmFsbGJhY2soKTtcbn0pO1xudmFyIGxvYWRWZXJzaW9uQ2hlY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCB2ZXJzaW9uKSB7XG5cdGVuc3VyZUV4aXN0ZW5jZShzY29wZU5hbWUsIGtleSk7XG5cdHJldHVybiBnZXQoZmluZFZhbGlkVmVyc2lvbihzY29wZSwga2V5LCB2ZXJzaW9uKSB8fCB3YXJuSW52YWxpZFZlcnNpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCB2ZXJzaW9uKSB8fCBmaW5kVmVyc2lvbihzY29wZSwga2V5KSk7XG59KTtcbnZhciBsb2FkU2luZ2xldG9uID0gLyojX19QVVJFX18qLyBpbml0KGZ1bmN0aW9uKHNjb3BlTmFtZSwgc2NvcGUsIGtleSkge1xuXHRlbnN1cmVFeGlzdGVuY2Uoc2NvcGVOYW1lLCBrZXkpO1xuXHRyZXR1cm4gZ2V0U2luZ2xldG9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSk7XG59KTtcbnZhciBsb2FkU2luZ2xldG9uVmVyc2lvbkNoZWNrID0gLyojX19QVVJFX18qLyBpbml0KGZ1bmN0aW9uKHNjb3BlTmFtZSwgc2NvcGUsIGtleSwgdmVyc2lvbikge1xuXHRlbnN1cmVFeGlzdGVuY2Uoc2NvcGVOYW1lLCBrZXkpO1xuXHRyZXR1cm4gZ2V0U2luZ2xldG9uVmVyc2lvbihzY29wZSwgc2NvcGVOYW1lLCBrZXksIHZlcnNpb24pO1xufSk7XG52YXIgbG9hZFN0cmljdFZlcnNpb25DaGVjayA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXksIHZlcnNpb24pIHtcblx0ZW5zdXJlRXhpc3RlbmNlKHNjb3BlTmFtZSwga2V5KTtcblx0cmV0dXJuIGdldFZhbGlkVmVyc2lvbihzY29wZSwgc2NvcGVOYW1lLCBrZXksIHZlcnNpb24pO1xufSk7XG52YXIgbG9hZFN0cmljdFNpbmdsZXRvblZlcnNpb25DaGVjayA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXksIHZlcnNpb24pIHtcblx0ZW5zdXJlRXhpc3RlbmNlKHNjb3BlTmFtZSwga2V5KTtcblx0cmV0dXJuIGdldFN0cmljdFNpbmdsZXRvblZlcnNpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCB2ZXJzaW9uKTtcbn0pO1xudmFyIGxvYWRWZXJzaW9uQ2hlY2tGYWxsYmFjayA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXksIHZlcnNpb24sIGZhbGxiYWNrKSB7XG5cdGlmKCFzY29wZSB8fCAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKHNjb3BlLCBrZXkpKSByZXR1cm4gZmFsbGJhY2soKTtcblx0cmV0dXJuIGdldChmaW5kVmFsaWRWZXJzaW9uKHNjb3BlLCBrZXksIHZlcnNpb24pIHx8IHdhcm5JbnZhbGlkVmVyc2lvbihzY29wZSwgc2NvcGVOYW1lLCBrZXksIHZlcnNpb24pIHx8IGZpbmRWZXJzaW9uKHNjb3BlLCBrZXkpKTtcbn0pO1xudmFyIGxvYWRTaW5nbGV0b25GYWxsYmFjayA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXksIGZhbGxiYWNrKSB7XG5cdGlmKCFzY29wZSB8fCAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKHNjb3BlLCBrZXkpKSByZXR1cm4gZmFsbGJhY2soKTtcblx0cmV0dXJuIGdldFNpbmdsZXRvbihzY29wZSwgc2NvcGVOYW1lLCBrZXkpO1xufSk7XG52YXIgbG9hZFNpbmdsZXRvblZlcnNpb25DaGVja0ZhbGxiYWNrID0gLyojX19QVVJFX18qLyBpbml0KGZ1bmN0aW9uKHNjb3BlTmFtZSwgc2NvcGUsIGtleSwgdmVyc2lvbiwgZmFsbGJhY2spIHtcblx0aWYoIXNjb3BlIHx8ICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oc2NvcGUsIGtleSkpIHJldHVybiBmYWxsYmFjaygpO1xuXHRyZXR1cm4gZ2V0U2luZ2xldG9uVmVyc2lvbihzY29wZSwgc2NvcGVOYW1lLCBrZXksIHZlcnNpb24pO1xufSk7XG52YXIgbG9hZFN0cmljdFZlcnNpb25DaGVja0ZhbGxiYWNrID0gLyojX19QVVJFX18qLyBpbml0KGZ1bmN0aW9uKHNjb3BlTmFtZSwgc2NvcGUsIGtleSwgdmVyc2lvbiwgZmFsbGJhY2spIHtcblx0dmFyIGVudHJ5ID0gc2NvcGUgJiYgX193ZWJwYWNrX3JlcXVpcmVfXy5vKHNjb3BlLCBrZXkpICYmIGZpbmRWYWxpZFZlcnNpb24oc2NvcGUsIGtleSwgdmVyc2lvbik7XG5cdHJldHVybiBlbnRyeSA/IGdldChlbnRyeSkgOiBmYWxsYmFjaygpO1xufSk7XG52YXIgbG9hZFN0cmljdFNpbmdsZXRvblZlcnNpb25DaGVja0ZhbGxiYWNrID0gLyojX19QVVJFX18qLyBpbml0KGZ1bmN0aW9uKHNjb3BlTmFtZSwgc2NvcGUsIGtleSwgdmVyc2lvbiwgZmFsbGJhY2spIHtcblx0aWYoIXNjb3BlIHx8ICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oc2NvcGUsIGtleSkpIHJldHVybiBmYWxsYmFjaygpO1xuXHRyZXR1cm4gZ2V0U3RyaWN0U2luZ2xldG9uVmVyc2lvbihzY29wZSwgc2NvcGVOYW1lLCBrZXksIHZlcnNpb24pO1xufSk7XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xudmFyIG1vZHVsZVRvSGFuZGxlck1hcHBpbmcgPSB7XG5cdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9yZWFjdC9yZWFjdFwiOiBmdW5jdGlvbigpIHsgcmV0dXJuIGxvYWRTaW5nbGV0b25WZXJzaW9uQ2hlY2tGYWxsYmFjayhcImRlZmF1bHRcIiwgXCJyZWFjdFwiLCBbMSwxOCwyLDBdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0X2luZGV4X2pzXCIpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIHJlYWN0ICovIFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IH07IH0pOyB9KTsgfSxcblx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3JlYWN0LWRvbS9yZWFjdC1kb21cIjogZnVuY3Rpb24oKSB7IHJldHVybiBsb2FkU2luZ2xldG9uVmVyc2lvbkNoZWNrRmFsbGJhY2soXCJkZWZhdWx0XCIsIFwicmVhY3QtZG9tXCIsIFsxLDE4LDIsMF0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3QtZG9tX2luZGV4X2pzXCIpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIHJlYWN0LWRvbSAqLyBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qc1wiKTsgfTsgfSk7IH0pOyB9LFxuXHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvbW9tZW50L21vbWVudFwiOiBmdW5jdGlvbigpIHsgcmV0dXJuIGxvYWRTdHJpY3RWZXJzaW9uQ2hlY2tGYWxsYmFjayhcImRlZmF1bHRcIiwgXCJtb21lbnRcIiwgWzEsMiwyOSw0XSwgZnVuY3Rpb24oKSB7IHJldHVybiBQcm9taXNlLmFsbChbX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbW9tZW50X2xvY2FsZV9hZl9qcy1ub2RlX21vZHVsZXNfbW9tZW50X2xvY2FsZV9hci1kel9qcy1ub2RlX21vZHVsZXNfbW9tLTI0OGQ5MFwiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwibm9kZV9tb2R1bGVzX21vbWVudF9sb2NhbGVfc3luY19yZWN1cnNpdmVfXCIpXSkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgbW9tZW50ICovIFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L21vbWVudC5qc1wiKTsgfTsgfSk7IH0pOyB9LFxuXHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvcmVhY3Qtcm91dGVyLWRvbS9yZWFjdC1yb3V0ZXItZG9tXCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbG9hZFN0cmljdFZlcnNpb25DaGVja0ZhbGxiYWNrKFwiZGVmYXVsdFwiLCBcInJlYWN0LXJvdXRlci1kb21cIiwgWzEsNiw0LDFdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0LXJvdXRlci1kb21fZGlzdF9pbmRleF9qc1wiKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISByZWFjdC1yb3V0ZXItZG9tICovIFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9kaXN0L2luZGV4LmpzXCIpOyB9OyB9KTsgfSk7IH0sXG5cdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9hbnRkL2FudGRcIjogZnVuY3Rpb24oKSB7IHJldHVybiBsb2FkU3RyaWN0VmVyc2lvbkNoZWNrRmFsbGJhY2soXCJkZWZhdWx0XCIsIFwiYW50ZFwiLCBbMSw0LDIzLDBdLCBmdW5jdGlvbigpIHsgcmV0dXJuIFByb21pc2UuYWxsKFtfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hbnRkX2VzX2luZGV4X2pzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3JlYWN0LWRvbV9yZWFjdC1kb21cIildKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBhbnRkICovIFwiLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9pbmRleC5qc1wiKTsgfTsgfSk7IH0pOyB9LFxuXHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvQHJlZHV4anMvdG9vbGtpdC9AcmVkdXhqcy90b29sa2l0XCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbG9hZFN0cmljdFZlcnNpb25DaGVja0ZhbGxiYWNrKFwiZGVmYXVsdFwiLCBcIkByZWR1eGpzL3Rvb2xraXRcIiwgWzEsMSw4LDVdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlZHV4anNfdG9vbGtpdF9kaXN0X3JlZHV4LXRvb2xraXRfZXNtX2pzXCIpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIEByZWR1eGpzL3Rvb2xraXQgKi8gXCIuL25vZGVfbW9kdWxlcy9AcmVkdXhqcy90b29sa2l0L2Rpc3QvcmVkdXgtdG9vbGtpdC5lc20uanNcIik7IH07IH0pOyB9KTsgfSxcblx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L2F4aW9zL2F4aW9zXCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbG9hZFN0cmljdFZlcnNpb25DaGVja0ZhbGxiYWNrKFwiZGVmYXVsdFwiLCBcImF4aW9zXCIsIFsyLDAsMjcsMl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXhpb3NfaW5kZXhfanNcIikudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgYXhpb3MgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qc1wiKTsgfTsgfSk7IH0pOyB9LFxuXHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvcmVhY3QtcmVkdXgvcmVhY3QtcmVkdXhcIjogZnVuY3Rpb24oKSB7IHJldHVybiBsb2FkU3RyaWN0VmVyc2lvbkNoZWNrRmFsbGJhY2soXCJkZWZhdWx0XCIsIFwicmVhY3QtcmVkdXhcIiwgWzEsOCwwLDJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIFByb21pc2UuYWxsKFtfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19yZWFjdC1yZWR1eF9lc19pbmRleF9qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdC1kb21fcmVhY3QtZG9tXCIpXSkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgcmVhY3QtcmVkdXggKi8gXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9pbmRleC5qc1wiKTsgfTsgfSk7IH0pOyB9XG59O1xuLy8gbm8gY29uc3VtZXMgaW4gaW5pdGlhbCBjaHVua3NcbnZhciBjaHVua01hcHBpbmcgPSB7XG5cdFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdF9yZWFjdFwiOiBbXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3JlYWN0L3JlYWN0XCJcblx0XSxcblx0XCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3JlYWN0LWRvbV9yZWFjdC1kb21cIjogW1xuXHRcdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9yZWFjdC1kb20vcmVhY3QtZG9tXCJcblx0XSxcblx0XCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X21vbWVudF9tb21lbnRcIjogW1xuXHRcdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9tb21lbnQvbW9tZW50XCJcblx0XSxcblx0XCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X2FudGRfYW50ZC13ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3JlYWN0LXJvdXRlci1kb21fcmUtMDg5ZDZhXCI6IFtcblx0XHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvcmVhY3Qtcm91dGVyLWRvbS9yZWFjdC1yb3V0ZXItZG9tXCIsXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L2FudGQvYW50ZFwiXG5cdF0sXG5cdFwic3JjX0FwcF9qc1wiOiBbXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L0ByZWR1eGpzL3Rvb2xraXQvQHJlZHV4anMvdG9vbGtpdFwiLFxuXHRcdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9heGlvcy9heGlvc1wiLFxuXHRcdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9yZWFjdC1yZWR1eC9yZWFjdC1yZWR1eFwiXG5cdF1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuY29uc3VtZXMgPSBmdW5jdGlvbihjaHVua0lkLCBwcm9taXNlcykge1xuXHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY2h1bmtNYXBwaW5nLCBjaHVua0lkKSkge1xuXHRcdGNodW5rTWFwcGluZ1tjaHVua0lkXS5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkTW9kdWxlcywgaWQpKSByZXR1cm4gcHJvbWlzZXMucHVzaChpbnN0YWxsZWRNb2R1bGVzW2lkXSk7XG5cdFx0XHR2YXIgb25GYWN0b3J5ID0gZnVuY3Rpb24oZmFjdG9yeSkge1xuXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW2lkXSA9IDA7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVtpZF0gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0XHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW2lkXTtcblx0XHRcdFx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHZhciBvbkVycm9yID0gZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbaWRdO1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1baWRdID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdFx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1tpZF07XG5cdFx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG1vZHVsZVRvSGFuZGxlck1hcHBpbmdbaWRdKCk7XG5cdFx0XHRcdGlmKHByb21pc2UudGhlbikge1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkTW9kdWxlc1tpZF0gPSBwcm9taXNlLnRoZW4ob25GYWN0b3J5KVsnY2F0Y2gnXShvbkVycm9yKSk7XG5cdFx0XHRcdH0gZWxzZSBvbkZhY3RvcnkocHJvbWlzZSk7XG5cdFx0XHR9IGNhdGNoKGUpIHsgb25FcnJvcihlKTsgfVxuXHRcdH0pO1xuXHR9XG59IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiUmVtb3RlUHJvZmlsZVwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IGZ1bmN0aW9uKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYoIS9ed2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF8ocmVhY3QoXFwtZG9tX3JlYWN0XFwtZG9tfF9yZWFjdCl8YW50ZF9hbnRkXFwtd2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdFxcLXJvdXRlclxcLWRvbV9yZVxcLTA4OWQ2YXxtb21lbnRfbW9tZW50KSQvLnRlc3QoY2h1bmtJZCkpIHtcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHsgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07IH0pO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9IGVsc2UgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tpZF0gIT09IDA7IH0pKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3Byb2ZpbGVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rcHJvZmlsZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwid2VicGFjay9jb250YWluZXIvZW50cnkvUmVtb3RlUHJvZmlsZVwiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==