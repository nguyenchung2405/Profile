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
		return Promise.all([__webpack_require__.e("vendors-node_modules_react-icons_bs_index_esm_js-node_modules_react-icons_fc_index_esm_js-nod-f65aee"), __webpack_require__.e("vendors-node_modules_react-dual-listbox_lib_index_browser_js"), __webpack_require__.e("vendors-node_modules_redux_es_redux_js"), __webpack_require__.e("vendors-node_modules_redux-saga_core_dist_redux-saga-core_esm_js-node_modules_css-loader_dist-fa9a9c"), __webpack_require__.e("webpack_sharing_consume_default_react_react"), __webpack_require__.e("webpack_sharing_consume_default_moment_moment"), __webpack_require__.e("src_components_sidebar_SubMenu_js"), __webpack_require__.e("webpack_sharing_consume_default_react-redux_react-redux"), __webpack_require__.e("src_App_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/App.js */ "./src/App.js")); }; });
	},
	"./MenuProfileService": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_react-icons_bs_index_esm_js-node_modules_react-icons_fc_index_esm_js-nod-f65aee"), __webpack_require__.e("webpack_sharing_consume_default_react_react"), __webpack_require__.e("webpack_sharing_consume_default_moment_moment"), __webpack_require__.e("src_components_sidebar_SubMenu_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/components/sidebar/SubMenu.js */ "./src/components/sidebar/SubMenu.js")); }; });
	},
	"./InitProfileService": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_react-icons_bs_index_esm_js-node_modules_react-icons_fc_index_esm_js-nod-f65aee"), __webpack_require__.e("webpack_sharing_consume_default_react_react"), __webpack_require__.e("webpack_sharing_consume_default_moment_moment"), __webpack_require__.e("src_components_sidebar_SubMenu_js"), __webpack_require__.e("webpack_sharing_consume_default_react-redux_react-redux"), __webpack_require__.e("src_InitProfile_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/InitProfile.js */ "./src/InitProfile.js")); }; });
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
/******/ 					register("axios", "1.2.0", function() { return __webpack_require__.e("vendors-node_modules_axios_index_js").then(function() { return function() { return __webpack_require__(/*! ./node_modules/axios/index.js */ "./node_modules/axios/index.js"); }; }); });
/******/ 					register("doc-cookies", "1.1.0", function() { return __webpack_require__.e("node_modules_doc-cookies_cookies_js").then(function() { return function() { return __webpack_require__(/*! ./node_modules/doc-cookies/cookies.js */ "./node_modules/doc-cookies/cookies.js"); }; }); });
/******/ 					register("jwt-decode", "3.1.2", function() { return __webpack_require__.e("node_modules_jwt-decode_build_jwt-decode_esm_js").then(function() { return function() { return __webpack_require__(/*! ./node_modules/jwt-decode/build/jwt-decode.esm.js */ "./node_modules/jwt-decode/build/jwt-decode.esm.js"); }; }); });
/******/ 					register("moment", "2.29.4", function() { return Promise.all([__webpack_require__.e("vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-248d90"), __webpack_require__.e("node_modules_moment_locale_sync_recursive_")]).then(function() { return function() { return __webpack_require__(/*! ./node_modules/moment/moment.js */ "./node_modules/moment/moment.js"); }; }); });
/******/ 					register("react-dom", "18.2.0", function() { return Promise.all([__webpack_require__.e("vendors-node_modules_react-dom_index_js"), __webpack_require__.e("webpack_sharing_consume_default_react_react")]).then(function() { return function() { return __webpack_require__(/*! ./node_modules/react-dom/index.js */ "./node_modules/react-dom/index.js"); }; }); });
/******/ 					register("react-dual-listbox", "5.0.2", function() { return Promise.all([__webpack_require__.e("vendors-node_modules_react-dual-listbox_lib_index_browser_js"), __webpack_require__.e("webpack_sharing_consume_default_react_react")]).then(function() { return function() { return __webpack_require__(/*! ./node_modules/react-dual-listbox/lib/index.browser.js */ "./node_modules/react-dual-listbox/lib/index.browser.js"); }; }); });
/******/ 					register("react-redux", "8.0.2", function() { return Promise.all([__webpack_require__.e("vendors-node_modules_react-redux_es_index_js"), __webpack_require__.e("webpack_sharing_consume_default_react_react"), __webpack_require__.e("webpack_sharing_consume_default_react-dom_react-dom")]).then(function() { return function() { return __webpack_require__(/*! ./node_modules/react-redux/es/index.js */ "./node_modules/react-redux/es/index.js"); }; }); });
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
/******/ 			"webpack/sharing/consume/default/antd/antd": function() { return loadStrictVersionCheckFallback("default", "antd", [1,4,23,0], function() { return Promise.all([__webpack_require__.e("vendors-node_modules_antd_es_index_js"), __webpack_require__.e("webpack_sharing_consume_default_react-dom_react-dom")]).then(function() { return function() { return __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js"); }; }); }); },
/******/ 			"webpack/sharing/consume/default/react-router-dom/react-router-dom": function() { return loadStrictVersionCheckFallback("default", "react-router-dom", [1,6,4,1], function() { return __webpack_require__.e("vendors-node_modules_react-router-dom_dist_index_js").then(function() { return function() { return __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js"); }; }); }); },
/******/ 			"webpack/sharing/consume/default/doc-cookies/doc-cookies": function() { return loadStrictVersionCheckFallback("default", "doc-cookies", [1,1,1,0], function() { return __webpack_require__.e("node_modules_doc-cookies_cookies_js").then(function() { return function() { return __webpack_require__(/*! doc-cookies */ "./node_modules/doc-cookies/cookies.js"); }; }); }); },
/******/ 			"webpack/sharing/consume/default/jwt-decode/jwt-decode": function() { return loadStrictVersionCheckFallback("default", "jwt-decode", [1,3,1,2], function() { return __webpack_require__.e("node_modules_jwt-decode_build_jwt-decode_esm_js").then(function() { return function() { return __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js"); }; }); }); },
/******/ 			"webpack/sharing/consume/default/react-redux/react-redux": function() { return loadStrictVersionCheckFallback("default", "react-redux", [1,8,0,2], function() { return Promise.all([__webpack_require__.e("vendors-node_modules_react-redux_es_index_js"), __webpack_require__.e("webpack_sharing_consume_default_react-dom_react-dom")]).then(function() { return function() { return __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js"); }; }); }); },
/******/ 			"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit": function() { return loadStrictVersionCheckFallback("default", "@reduxjs/toolkit", [1,1,8,5], function() { return __webpack_require__.e("vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js").then(function() { return function() { return __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"); }; }); }); },
/******/ 			"webpack/sharing/consume/default/axios/axios": function() { return loadStrictVersionCheckFallback("default", "axios", [1,1,2,0], function() { return __webpack_require__.e("vendors-node_modules_axios_index_js").then(function() { return function() { return __webpack_require__(/*! axios */ "./node_modules/axios/index.js"); }; }); }); },
/******/ 			"webpack/sharing/consume/default/react-dual-listbox/react-dual-listbox": function() { return loadStrictVersionCheckFallback("default", "react-dual-listbox", [1,5,0,2], function() { return function() { return __webpack_require__(/*! react-dual-listbox */ "./node_modules/react-dual-listbox/lib/index.browser.js"); }; }); }
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
/******/ 			"src_components_sidebar_SubMenu_js": [
/******/ 				"webpack/sharing/consume/default/antd/antd",
/******/ 				"webpack/sharing/consume/default/react-router-dom/react-router-dom",
/******/ 				"webpack/sharing/consume/default/doc-cookies/doc-cookies",
/******/ 				"webpack/sharing/consume/default/jwt-decode/jwt-decode"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_react-redux_react-redux": [
/******/ 				"webpack/sharing/consume/default/react-redux/react-redux"
/******/ 			],
/******/ 			"src_App_js": [
/******/ 				"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit",
/******/ 				"webpack/sharing/consume/default/axios/axios",
/******/ 				"webpack/sharing/consume/default/react-dual-listbox/react-dual-listbox"
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
/******/ 						if(!/^webpack_sharing_consume_default_(react(\-dom_react\-dom|\-redux_react\-redux|_react)|moment_moment)$/.test(chunkId)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXVGLCtGQUErRixvQkFBb0Isb0hBQW9IO1dBQzlUO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTTtXQUNOLEtBQUssV0FBVztXQUNoQixHQUFHO1dBQ0g7V0FDQTs7Ozs7V0NyTUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQSwyREFBMkQsb0VBQW9FO1dBQy9IOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsbUNBQW1DO1dBQ3BFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ3ZGQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9jb250YWluZXItZW50cnkiLCJ3ZWJwYWNrOi8vcHJvZmlsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvZmlsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vcHJvZmlsZS93ZWJwYWNrL3J1bnRpbWUvc2hhcmluZyIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2NvbnN1bWVzIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvZmlsZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvZmlsZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtb2R1bGVNYXAgPSB7XG5cdFwiLi9CdXR0b25Qcm9maWxlU2VydmljZVwiOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoW19fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0LWljb25zX2JzX2luZGV4X2VzbV9qcy1ub2RlX21vZHVsZXNfcmVhY3QtaWNvbnNfZmNfaW5kZXhfZXNtX2pzLW5vZC1mNjVhZWVcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0LWR1YWwtbGlzdGJveF9saWJfaW5kZXhfYnJvd3Nlcl9qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcmVkdXhfZXNfcmVkdXhfanNcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlZHV4LXNhZ2FfY29yZV9kaXN0X3JlZHV4LXNhZ2EtY29yZV9lc21fanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdC1mYTlhOWNcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3RfcmVhY3RcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfbW9tZW50X21vbWVudFwiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwic3JjX2NvbXBvbmVudHNfc2lkZWJhcl9TdWJNZW51X2pzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3JlYWN0LXJlZHV4X3JlYWN0LXJlZHV4XCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJzcmNfQXBwX2pzXCIpXSkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3JjL0FwcC5qcyAqLyBcIi4vc3JjL0FwcC5qc1wiKSk7IH07IH0pO1xuXHR9LFxuXHRcIi4vTWVudVByb2ZpbGVTZXJ2aWNlXCI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBQcm9taXNlLmFsbChbX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3QtaWNvbnNfYnNfaW5kZXhfZXNtX2pzLW5vZGVfbW9kdWxlc19yZWFjdC1pY29uc19mY19pbmRleF9lc21fanMtbm9kLWY2NWFlZVwiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdF9yZWFjdFwiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9tb21lbnRfbW9tZW50XCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJzcmNfY29tcG9uZW50c19zaWRlYmFyX1N1Yk1lbnVfanNcIildKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL1N1Yk1lbnUuanMgKi8gXCIuL3NyYy9jb21wb25lbnRzL3NpZGViYXIvU3ViTWVudS5qc1wiKSk7IH07IH0pO1xuXHR9LFxuXHRcIi4vSW5pdFByb2ZpbGVTZXJ2aWNlXCI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBQcm9taXNlLmFsbChbX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3QtaWNvbnNfYnNfaW5kZXhfZXNtX2pzLW5vZGVfbW9kdWxlc19yZWFjdC1pY29uc19mY19pbmRleF9lc21fanMtbm9kLWY2NWFlZVwiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdF9yZWFjdFwiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9tb21lbnRfbW9tZW50XCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJzcmNfY29tcG9uZW50c19zaWRlYmFyX1N1Yk1lbnVfanNcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3QtcmVkdXhfcmVhY3QtcmVkdXhcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcInNyY19Jbml0UHJvZmlsZV9qc1wiKV0pLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NyYy9Jbml0UHJvZmlsZS5qcyAqLyBcIi4vc3JjL0luaXRQcm9maWxlLmpzXCIpKTsgfTsgfSk7XG5cdH1cbn07XG52YXIgZ2V0ID0gZnVuY3Rpb24obW9kdWxlLCBnZXRTY29wZSkge1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLlIgPSBnZXRTY29wZTtcblx0Z2V0U2NvcGUgPSAoXG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vZHVsZU1hcCwgbW9kdWxlKVxuXHRcdFx0PyBtb2R1bGVNYXBbbW9kdWxlXSgpXG5cdFx0XHQ6IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignTW9kdWxlIFwiJyArIG1vZHVsZSArICdcIiBkb2VzIG5vdCBleGlzdCBpbiBjb250YWluZXIuJyk7XG5cdFx0XHR9KVxuXHQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLlIgPSB1bmRlZmluZWQ7XG5cdHJldHVybiBnZXRTY29wZTtcbn07XG52YXIgaW5pdCA9IGZ1bmN0aW9uKHNoYXJlU2NvcGUsIGluaXRTY29wZSkge1xuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18uUykgcmV0dXJuO1xuXHR2YXIgbmFtZSA9IFwiZGVmYXVsdFwiXG5cdHZhciBvbGRTY29wZSA9IF9fd2VicGFja19yZXF1aXJlX18uU1tuYW1lXTtcblx0aWYob2xkU2NvcGUgJiYgb2xkU2NvcGUgIT09IHNoYXJlU2NvcGUpIHRocm93IG5ldyBFcnJvcihcIkNvbnRhaW5lciBpbml0aWFsaXphdGlvbiBmYWlsZWQgYXMgaXQgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZCB3aXRoIGEgZGlmZmVyZW50IHNoYXJlIHNjb3BlXCIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV0gPSBzaGFyZVNjb3BlO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5JKG5hbWUsIGluaXRTY29wZSk7XG59O1xuXG4vLyBUaGlzIGV4cG9ydHMgZ2V0dGVycyB0byBkaXNhbGxvdyBtb2RpZmljYXRpb25zXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQoZXhwb3J0cywge1xuXHRnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZ2V0OyB9LFxuXHRpbml0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGluaXQ7IH1cbn0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoZnVuY3Rpb24ocHJvbWlzZXMsIGtleSkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuYnVuZGxlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInByb2ZpbGU6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9IGZ1bmN0aW9uKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbihwcmV2LCBldmVudCkge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goZnVuY3Rpb24oZm4pIHsgcmV0dXJuIGZuKGV2ZW50KTsgfSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLlMgPSB7fTtcbnZhciBpbml0UHJvbWlzZXMgPSB7fTtcbnZhciBpbml0VG9rZW5zID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLkkgPSBmdW5jdGlvbihuYW1lLCBpbml0U2NvcGUpIHtcblx0aWYoIWluaXRTY29wZSkgaW5pdFNjb3BlID0gW107XG5cdC8vIGhhbmRsaW5nIGNpcmN1bGFyIGluaXQgY2FsbHNcblx0dmFyIGluaXRUb2tlbiA9IGluaXRUb2tlbnNbbmFtZV07XG5cdGlmKCFpbml0VG9rZW4pIGluaXRUb2tlbiA9IGluaXRUb2tlbnNbbmFtZV0gPSB7fTtcblx0aWYoaW5pdFNjb3BlLmluZGV4T2YoaW5pdFRva2VuKSA+PSAwKSByZXR1cm47XG5cdGluaXRTY29wZS5wdXNoKGluaXRUb2tlbik7XG5cdC8vIG9ubHkgcnVucyBvbmNlXG5cdGlmKGluaXRQcm9taXNlc1tuYW1lXSkgcmV0dXJuIGluaXRQcm9taXNlc1tuYW1lXTtcblx0Ly8gY3JlYXRlcyBhIG5ldyBzaGFyZSBzY29wZSBpZiBuZWVkZWRcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhfX3dlYnBhY2tfcmVxdWlyZV9fLlMsIG5hbWUpKSBfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV0gPSB7fTtcblx0Ly8gcnVucyBhbGwgaW5pdCBzbmlwcGV0cyBmcm9tIGFsbCBtb2R1bGVzIHJlYWNoYWJsZVxuXHR2YXIgc2NvcGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV07XG5cdHZhciB3YXJuID0gZnVuY3Rpb24obXNnKSB7IHJldHVybiB0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKG1zZyk7IH07XG5cdHZhciB1bmlxdWVOYW1lID0gXCJwcm9maWxlXCI7XG5cdHZhciByZWdpc3RlciA9IGZ1bmN0aW9uKG5hbWUsIHZlcnNpb24sIGZhY3RvcnksIGVhZ2VyKSB7XG5cdFx0dmFyIHZlcnNpb25zID0gc2NvcGVbbmFtZV0gPSBzY29wZVtuYW1lXSB8fCB7fTtcblx0XHR2YXIgYWN0aXZlVmVyc2lvbiA9IHZlcnNpb25zW3ZlcnNpb25dO1xuXHRcdGlmKCFhY3RpdmVWZXJzaW9uIHx8ICghYWN0aXZlVmVyc2lvbi5sb2FkZWQgJiYgKCFlYWdlciAhPSAhYWN0aXZlVmVyc2lvbi5lYWdlciA/IGVhZ2VyIDogdW5pcXVlTmFtZSA+IGFjdGl2ZVZlcnNpb24uZnJvbSkpKSB2ZXJzaW9uc1t2ZXJzaW9uXSA9IHsgZ2V0OiBmYWN0b3J5LCBmcm9tOiB1bmlxdWVOYW1lLCBlYWdlcjogISFlYWdlciB9O1xuXHR9O1xuXHR2YXIgaW5pdEV4dGVybmFsID0gZnVuY3Rpb24oaWQpIHtcblx0XHR2YXIgaGFuZGxlRXJyb3IgPSBmdW5jdGlvbihlcnIpIHsgd2FybihcIkluaXRpYWxpemF0aW9uIG9mIHNoYXJpbmcgZXh0ZXJuYWwgZmFpbGVkOiBcIiArIGVycik7IH07XG5cdFx0dHJ5IHtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0XHRcdGlmKCFtb2R1bGUpIHJldHVybjtcblx0XHRcdHZhciBpbml0Rm4gPSBmdW5jdGlvbihtb2R1bGUpIHsgcmV0dXJuIG1vZHVsZSAmJiBtb2R1bGUuaW5pdCAmJiBtb2R1bGUuaW5pdChfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV0sIGluaXRTY29wZSk7IH1cblx0XHRcdGlmKG1vZHVsZS50aGVuKSByZXR1cm4gcHJvbWlzZXMucHVzaChtb2R1bGUudGhlbihpbml0Rm4sIGhhbmRsZUVycm9yKSk7XG5cdFx0XHR2YXIgaW5pdFJlc3VsdCA9IGluaXRGbihtb2R1bGUpO1xuXHRcdFx0aWYoaW5pdFJlc3VsdCAmJiBpbml0UmVzdWx0LnRoZW4pIHJldHVybiBwcm9taXNlcy5wdXNoKGluaXRSZXN1bHRbJ2NhdGNoJ10oaGFuZGxlRXJyb3IpKTtcblx0XHR9IGNhdGNoKGVycikgeyBoYW5kbGVFcnJvcihlcnIpOyB9XG5cdH1cblx0dmFyIHByb21pc2VzID0gW107XG5cdHN3aXRjaChuYW1lKSB7XG5cdFx0Y2FzZSBcImRlZmF1bHRcIjoge1xuXHRcdFx0cmVnaXN0ZXIoXCJAcmVkdXhqcy90b29sa2l0XCIsIFwiMS44LjVcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQcm9taXNlLmFsbChbX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcmVkdXhfZXNfcmVkdXhfanNcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlZHV4anNfdG9vbGtpdF9kaXN0X3JlZHV4LXRvb2xraXRfZXNtX2pzXCIpXSkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvQHJlZHV4anMvdG9vbGtpdC9kaXN0L3JlZHV4LXRvb2xraXQuZXNtLmpzICovIFwiLi9ub2RlX21vZHVsZXMvQHJlZHV4anMvdG9vbGtpdC9kaXN0L3JlZHV4LXRvb2xraXQuZXNtLmpzXCIpOyB9OyB9KTsgfSk7XG5cdFx0XHRyZWdpc3RlcihcImFudGRcIiwgXCI0LjIzLjBcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQcm9taXNlLmFsbChbX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYW50ZF9lc19pbmRleF9qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdF9yZWFjdFwiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdC1kb21fcmVhY3QtZG9tXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X21vbWVudF9tb21lbnRcIildKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy9hbnRkL2VzL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9pbmRleC5qc1wiKTsgfTsgfSk7IH0pO1xuXHRcdFx0cmVnaXN0ZXIoXCJheGlvc1wiLCBcIjEuMi4wXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXhpb3NfaW5kZXhfanNcIikudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qc1wiKTsgfTsgfSk7IH0pO1xuXHRcdFx0cmVnaXN0ZXIoXCJkb2MtY29va2llc1wiLCBcIjEuMS4wXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwibm9kZV9tb2R1bGVzX2RvYy1jb29raWVzX2Nvb2tpZXNfanNcIikudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvZG9jLWNvb2tpZXMvY29va2llcy5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2RvYy1jb29raWVzL2Nvb2tpZXMuanNcIik7IH07IH0pOyB9KTtcblx0XHRcdHJlZ2lzdGVyKFwiand0LWRlY29kZVwiLCBcIjMuMS4yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwibm9kZV9tb2R1bGVzX2p3dC1kZWNvZGVfYnVpbGRfand0LWRlY29kZV9lc21fanNcIikudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvand0LWRlY29kZS9idWlsZC9qd3QtZGVjb2RlLmVzbS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2p3dC1kZWNvZGUvYnVpbGQvand0LWRlY29kZS5lc20uanNcIik7IH07IH0pOyB9KTtcblx0XHRcdHJlZ2lzdGVyKFwibW9tZW50XCIsIFwiMi4yOS40XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUHJvbWlzZS5hbGwoW19fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX21vbWVudF9sb2NhbGVfYWZfanMtbm9kZV9tb2R1bGVzX21vbWVudF9sb2NhbGVfYXItZHpfanMtbm9kZV9tb2R1bGVzX21vbS0yNDhkOTBcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIm5vZGVfbW9kdWxlc19tb21lbnRfbG9jYWxlX3N5bmNfcmVjdXJzaXZlX1wiKV0pLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL21vbWVudC9tb21lbnQuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbW9tZW50LmpzXCIpOyB9OyB9KTsgfSk7XG5cdFx0XHRyZWdpc3RlcihcInJlYWN0LWRvbVwiLCBcIjE4LjIuMFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFByb21pc2UuYWxsKFtfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19yZWFjdC1kb21faW5kZXhfanNcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3RfcmVhY3RcIildKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgKi8gXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanNcIik7IH07IH0pOyB9KTtcblx0XHRcdHJlZ2lzdGVyKFwicmVhY3QtZHVhbC1saXN0Ym94XCIsIFwiNS4wLjJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQcm9taXNlLmFsbChbX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3QtZHVhbC1saXN0Ym94X2xpYl9pbmRleF9icm93c2VyX2pzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3JlYWN0X3JlYWN0XCIpXSkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvcmVhY3QtZHVhbC1saXN0Ym94L2xpYi9pbmRleC5icm93c2VyLmpzICovIFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZHVhbC1saXN0Ym94L2xpYi9pbmRleC5icm93c2VyLmpzXCIpOyB9OyB9KTsgfSk7XG5cdFx0XHRyZWdpc3RlcihcInJlYWN0LXJlZHV4XCIsIFwiOC4wLjJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQcm9taXNlLmFsbChbX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3QtcmVkdXhfZXNfaW5kZXhfanNcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3RfcmVhY3RcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3QtZG9tX3JlYWN0LWRvbVwiKV0pLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaW5kZXguanNcIik7IH07IH0pOyB9KTtcblx0XHRcdHJlZ2lzdGVyKFwicmVhY3Qtcm91dGVyLWRvbVwiLCBcIjYuNC4xXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUHJvbWlzZS5hbGwoW19fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0LXJvdXRlci1kb21fZGlzdF9pbmRleF9qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdF9yZWFjdFwiKV0pLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vZGlzdC9pbmRleC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vZGlzdC9pbmRleC5qc1wiKTsgfTsgfSk7IH0pO1xuXHRcdFx0cmVnaXN0ZXIoXCJyZWFjdFwiLCBcIjE4LjIuMFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0X2luZGV4X2pzXCIpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IH07IH0pOyB9KTtcblx0XHR9XG5cdFx0YnJlYWs7XG5cdH1cblx0aWYoIXByb21pc2VzLmxlbmd0aCkgcmV0dXJuIGluaXRQcm9taXNlc1tuYW1lXSA9IDE7XG5cdHJldHVybiBpbml0UHJvbWlzZXNbbmFtZV0gPSBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGluaXRQcm9taXNlc1tuYW1lXSA9IDE7IH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsInZhciBwYXJzZVZlcnNpb24gPSBmdW5jdGlvbihzdHIpIHtcblx0Ly8gc2VlIHdlYnBhY2svbGliL3V0aWwvc2VtdmVyLmpzIGZvciBvcmlnaW5hbCBjb2RlXG5cdHZhciBwPWZ1bmN0aW9uKHApe3JldHVybiBwLnNwbGl0KFwiLlwiKS5tYXAoKGZ1bmN0aW9uKHApe3JldHVybitwPT1wPytwOnB9KSl9LG49L14oW14tK10rKT8oPzotKFteK10rKSk/KD86XFwrKC4rKSk/JC8uZXhlYyhzdHIpLHI9blsxXT9wKG5bMV0pOltdO3JldHVybiBuWzJdJiYoci5sZW5ndGgrKyxyLnB1c2guYXBwbHkocixwKG5bMl0pKSksblszXSYmKHIucHVzaChbXSksci5wdXNoLmFwcGx5KHIscChuWzNdKSkpLHI7XG59XG52YXIgdmVyc2lvbkx0ID0gZnVuY3Rpb24oYSwgYikge1xuXHQvLyBzZWUgd2VicGFjay9saWIvdXRpbC9zZW12ZXIuanMgZm9yIG9yaWdpbmFsIGNvZGVcblx0YT1wYXJzZVZlcnNpb24oYSksYj1wYXJzZVZlcnNpb24oYik7Zm9yKHZhciByPTA7Oyl7aWYocj49YS5sZW5ndGgpcmV0dXJuIHI8Yi5sZW5ndGgmJlwidVwiIT0odHlwZW9mIGJbcl0pWzBdO3ZhciBlPWFbcl0sbj0odHlwZW9mIGUpWzBdO2lmKHI+PWIubGVuZ3RoKXJldHVyblwidVwiPT1uO3ZhciB0PWJbcl0sZj0odHlwZW9mIHQpWzBdO2lmKG4hPWYpcmV0dXJuXCJvXCI9PW4mJlwiblwiPT1mfHwoXCJzXCI9PWZ8fFwidVwiPT1uKTtpZihcIm9cIiE9biYmXCJ1XCIhPW4mJmUhPXQpcmV0dXJuIGU8dDtyKyt9XG59XG52YXIgcmFuZ2VUb1N0cmluZyA9IGZ1bmN0aW9uKHJhbmdlKSB7XG5cdC8vIHNlZSB3ZWJwYWNrL2xpYi91dGlsL3NlbXZlci5qcyBmb3Igb3JpZ2luYWwgY29kZVxuXHR2YXIgcj1yYW5nZVswXSxuPVwiXCI7aWYoMT09PXJhbmdlLmxlbmd0aClyZXR1cm5cIipcIjtpZihyKy41KXtuKz0wPT1yP1wiPj1cIjotMT09cj9cIjxcIjoxPT1yP1wiXlwiOjI9PXI/XCJ+XCI6cj4wP1wiPVwiOlwiIT1cIjtmb3IodmFyIGU9MSxhPTE7YTxyYW5nZS5sZW5ndGg7YSsrKXtlLS0sbis9XCJ1XCI9PSh0eXBlb2YodD1yYW5nZVthXSkpWzBdP1wiLVwiOihlPjA/XCIuXCI6XCJcIikrKGU9Mix0KX1yZXR1cm4gbn12YXIgZz1bXTtmb3IoYT0xO2E8cmFuZ2UubGVuZ3RoO2ErKyl7dmFyIHQ9cmFuZ2VbYV07Zy5wdXNoKDA9PT10P1wibm90KFwiK28oKStcIilcIjoxPT09dD9cIihcIitvKCkrXCIgfHwgXCIrbygpK1wiKVwiOjI9PT10P2cucG9wKCkrXCIgXCIrZy5wb3AoKTpyYW5nZVRvU3RyaW5nKHQpKX1yZXR1cm4gbygpO2Z1bmN0aW9uIG8oKXtyZXR1cm4gZy5wb3AoKS5yZXBsYWNlKC9eXFwoKC4rKVxcKSQvLFwiJDFcIil9XG59XG52YXIgc2F0aXNmeSA9IGZ1bmN0aW9uKHJhbmdlLCB2ZXJzaW9uKSB7XG5cdC8vIHNlZSB3ZWJwYWNrL2xpYi91dGlsL3NlbXZlci5qcyBmb3Igb3JpZ2luYWwgY29kZVxuXHRpZigwIGluIHJhbmdlKXt2ZXJzaW9uPXBhcnNlVmVyc2lvbih2ZXJzaW9uKTt2YXIgZT1yYW5nZVswXSxyPWU8MDtyJiYoZT0tZS0xKTtmb3IodmFyIG49MCxpPTEsYT0hMDs7aSsrLG4rKyl7dmFyIGYscyxnPWk8cmFuZ2UubGVuZ3RoPyh0eXBlb2YgcmFuZ2VbaV0pWzBdOlwiXCI7aWYobj49dmVyc2lvbi5sZW5ndGh8fFwib1wiPT0ocz0odHlwZW9mKGY9dmVyc2lvbltuXSkpWzBdKSlyZXR1cm4hYXx8KFwidVwiPT1nP2k+ZSYmIXI6XCJcIj09ZyE9cik7aWYoXCJ1XCI9PXMpe2lmKCFhfHxcInVcIiE9ZylyZXR1cm4hMX1lbHNlIGlmKGEpaWYoZz09cylpZihpPD1lKXtpZihmIT1yYW5nZVtpXSlyZXR1cm4hMX1lbHNle2lmKHI/Zj5yYW5nZVtpXTpmPHJhbmdlW2ldKXJldHVybiExO2YhPXJhbmdlW2ldJiYoYT0hMSl9ZWxzZSBpZihcInNcIiE9ZyYmXCJuXCIhPWcpe2lmKHJ8fGk8PWUpcmV0dXJuITE7YT0hMSxpLS19ZWxzZXtpZihpPD1lfHxzPGchPXIpcmV0dXJuITE7YT0hMX1lbHNlXCJzXCIhPWcmJlwiblwiIT1nJiYoYT0hMSxpLS0pfX12YXIgdD1bXSxvPXQucG9wLmJpbmQodCk7Zm9yKG49MTtuPHJhbmdlLmxlbmd0aDtuKyspe3ZhciB1PXJhbmdlW25dO3QucHVzaCgxPT11P28oKXxvKCk6Mj09dT9vKCkmbygpOnU/c2F0aXNmeSh1LHZlcnNpb24pOiFvKCkpfXJldHVybiEhbygpO1xufVxudmFyIGVuc3VyZUV4aXN0ZW5jZSA9IGZ1bmN0aW9uKHNjb3BlTmFtZSwga2V5KSB7XG5cdHZhciBzY29wZSA9IF9fd2VicGFja19yZXF1aXJlX18uU1tzY29wZU5hbWVdO1xuXHRpZighc2NvcGUgfHwgIV9fd2VicGFja19yZXF1aXJlX18ubyhzY29wZSwga2V5KSkgdGhyb3cgbmV3IEVycm9yKFwiU2hhcmVkIG1vZHVsZSBcIiArIGtleSArIFwiIGRvZXNuJ3QgZXhpc3QgaW4gc2hhcmVkIHNjb3BlIFwiICsgc2NvcGVOYW1lKTtcblx0cmV0dXJuIHNjb3BlO1xufTtcbnZhciBmaW5kVmVyc2lvbiA9IGZ1bmN0aW9uKHNjb3BlLCBrZXkpIHtcblx0dmFyIHZlcnNpb25zID0gc2NvcGVba2V5XTtcblx0dmFyIGtleSA9IE9iamVjdC5rZXlzKHZlcnNpb25zKS5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xuXHRcdHJldHVybiAhYSB8fCB2ZXJzaW9uTHQoYSwgYikgPyBiIDogYTtcblx0fSwgMCk7XG5cdHJldHVybiBrZXkgJiYgdmVyc2lvbnNba2V5XVxufTtcbnZhciBmaW5kU2luZ2xldG9uVmVyc2lvbktleSA9IGZ1bmN0aW9uKHNjb3BlLCBrZXkpIHtcblx0dmFyIHZlcnNpb25zID0gc2NvcGVba2V5XTtcblx0cmV0dXJuIE9iamVjdC5rZXlzKHZlcnNpb25zKS5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xuXHRcdHJldHVybiAhYSB8fCAoIXZlcnNpb25zW2FdLmxvYWRlZCAmJiB2ZXJzaW9uTHQoYSwgYikpID8gYiA6IGE7XG5cdH0sIDApO1xufTtcbnZhciBnZXRJbnZhbGlkU2luZ2xldG9uVmVyc2lvbk1lc3NhZ2UgPSBmdW5jdGlvbihzY29wZSwga2V5LCB2ZXJzaW9uLCByZXF1aXJlZFZlcnNpb24pIHtcblx0cmV0dXJuIFwiVW5zYXRpc2ZpZWQgdmVyc2lvbiBcIiArIHZlcnNpb24gKyBcIiBmcm9tIFwiICsgKHZlcnNpb24gJiYgc2NvcGVba2V5XVt2ZXJzaW9uXS5mcm9tKSArIFwiIG9mIHNoYXJlZCBzaW5nbGV0b24gbW9kdWxlIFwiICsga2V5ICsgXCIgKHJlcXVpcmVkIFwiICsgcmFuZ2VUb1N0cmluZyhyZXF1aXJlZFZlcnNpb24pICsgXCIpXCJcbn07XG52YXIgZ2V0U2luZ2xldG9uID0gZnVuY3Rpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCByZXF1aXJlZFZlcnNpb24pIHtcblx0dmFyIHZlcnNpb24gPSBmaW5kU2luZ2xldG9uVmVyc2lvbktleShzY29wZSwga2V5KTtcblx0cmV0dXJuIGdldChzY29wZVtrZXldW3ZlcnNpb25dKTtcbn07XG52YXIgZ2V0U2luZ2xldG9uVmVyc2lvbiA9IGZ1bmN0aW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSB7XG5cdHZhciB2ZXJzaW9uID0gZmluZFNpbmdsZXRvblZlcnNpb25LZXkoc2NvcGUsIGtleSk7XG5cdGlmICghc2F0aXNmeShyZXF1aXJlZFZlcnNpb24sIHZlcnNpb24pKSB0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKGdldEludmFsaWRTaW5nbGV0b25WZXJzaW9uTWVzc2FnZShzY29wZSwga2V5LCB2ZXJzaW9uLCByZXF1aXJlZFZlcnNpb24pKTtcblx0cmV0dXJuIGdldChzY29wZVtrZXldW3ZlcnNpb25dKTtcbn07XG52YXIgZ2V0U3RyaWN0U2luZ2xldG9uVmVyc2lvbiA9IGZ1bmN0aW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSB7XG5cdHZhciB2ZXJzaW9uID0gZmluZFNpbmdsZXRvblZlcnNpb25LZXkoc2NvcGUsIGtleSk7XG5cdGlmICghc2F0aXNmeShyZXF1aXJlZFZlcnNpb24sIHZlcnNpb24pKSB0aHJvdyBuZXcgRXJyb3IoZ2V0SW52YWxpZFNpbmdsZXRvblZlcnNpb25NZXNzYWdlKHNjb3BlLCBrZXksIHZlcnNpb24sIHJlcXVpcmVkVmVyc2lvbikpO1xuXHRyZXR1cm4gZ2V0KHNjb3BlW2tleV1bdmVyc2lvbl0pO1xufTtcbnZhciBmaW5kVmFsaWRWZXJzaW9uID0gZnVuY3Rpb24oc2NvcGUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSB7XG5cdHZhciB2ZXJzaW9ucyA9IHNjb3BlW2tleV07XG5cdHZhciBrZXkgPSBPYmplY3Qua2V5cyh2ZXJzaW9ucykucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRpZiAoIXNhdGlzZnkocmVxdWlyZWRWZXJzaW9uLCBiKSkgcmV0dXJuIGE7XG5cdFx0cmV0dXJuICFhIHx8IHZlcnNpb25MdChhLCBiKSA/IGIgOiBhO1xuXHR9LCAwKTtcblx0cmV0dXJuIGtleSAmJiB2ZXJzaW9uc1trZXldXG59O1xudmFyIGdldEludmFsaWRWZXJzaW9uTWVzc2FnZSA9IGZ1bmN0aW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSB7XG5cdHZhciB2ZXJzaW9ucyA9IHNjb3BlW2tleV07XG5cdHJldHVybiBcIk5vIHNhdGlzZnlpbmcgdmVyc2lvbiAoXCIgKyByYW5nZVRvU3RyaW5nKHJlcXVpcmVkVmVyc2lvbikgKyBcIikgb2Ygc2hhcmVkIG1vZHVsZSBcIiArIGtleSArIFwiIGZvdW5kIGluIHNoYXJlZCBzY29wZSBcIiArIHNjb3BlTmFtZSArIFwiLlxcblwiICtcblx0XHRcIkF2YWlsYWJsZSB2ZXJzaW9uczogXCIgKyBPYmplY3Qua2V5cyh2ZXJzaW9ucykubWFwKGZ1bmN0aW9uKGtleSkge1xuXHRcdHJldHVybiBrZXkgKyBcIiBmcm9tIFwiICsgdmVyc2lvbnNba2V5XS5mcm9tO1xuXHR9KS5qb2luKFwiLCBcIik7XG59O1xudmFyIGdldFZhbGlkVmVyc2lvbiA9IGZ1bmN0aW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSB7XG5cdHZhciBlbnRyeSA9IGZpbmRWYWxpZFZlcnNpb24oc2NvcGUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKTtcblx0aWYoZW50cnkpIHJldHVybiBnZXQoZW50cnkpO1xuXHR0aHJvdyBuZXcgRXJyb3IoZ2V0SW52YWxpZFZlcnNpb25NZXNzYWdlKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSk7XG59O1xudmFyIHdhcm5JbnZhbGlkVmVyc2lvbiA9IGZ1bmN0aW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSB7XG5cdHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oZ2V0SW52YWxpZFZlcnNpb25NZXNzYWdlKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSk7XG59O1xudmFyIGdldCA9IGZ1bmN0aW9uKGVudHJ5KSB7XG5cdGVudHJ5LmxvYWRlZCA9IDE7XG5cdHJldHVybiBlbnRyeS5nZXQoKVxufTtcbnZhciBpbml0ID0gZnVuY3Rpb24oZm4pIHsgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlTmFtZSwgYSwgYiwgYykge1xuXHR2YXIgcHJvbWlzZSA9IF9fd2VicGFja19yZXF1aXJlX18uSShzY29wZU5hbWUpO1xuXHRpZiAocHJvbWlzZSAmJiBwcm9taXNlLnRoZW4pIHJldHVybiBwcm9taXNlLnRoZW4oZm4uYmluZChmbiwgc2NvcGVOYW1lLCBfX3dlYnBhY2tfcmVxdWlyZV9fLlNbc2NvcGVOYW1lXSwgYSwgYiwgYykpO1xuXHRyZXR1cm4gZm4oc2NvcGVOYW1lLCBfX3dlYnBhY2tfcmVxdWlyZV9fLlNbc2NvcGVOYW1lXSwgYSwgYiwgYyk7XG59OyB9O1xuXG52YXIgbG9hZCA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXkpIHtcblx0ZW5zdXJlRXhpc3RlbmNlKHNjb3BlTmFtZSwga2V5KTtcblx0cmV0dXJuIGdldChmaW5kVmVyc2lvbihzY29wZSwga2V5KSk7XG59KTtcbnZhciBsb2FkRmFsbGJhY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCBmYWxsYmFjaykge1xuXHRyZXR1cm4gc2NvcGUgJiYgX193ZWJwYWNrX3JlcXVpcmVfXy5vKHNjb3BlLCBrZXkpID8gZ2V0KGZpbmRWZXJzaW9uKHNjb3BlLCBrZXkpKSA6IGZhbGxiYWNrKCk7XG59KTtcbnZhciBsb2FkVmVyc2lvbkNoZWNrID0gLyojX19QVVJFX18qLyBpbml0KGZ1bmN0aW9uKHNjb3BlTmFtZSwgc2NvcGUsIGtleSwgdmVyc2lvbikge1xuXHRlbnN1cmVFeGlzdGVuY2Uoc2NvcGVOYW1lLCBrZXkpO1xuXHRyZXR1cm4gZ2V0KGZpbmRWYWxpZFZlcnNpb24oc2NvcGUsIGtleSwgdmVyc2lvbikgfHwgd2FybkludmFsaWRWZXJzaW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgdmVyc2lvbikgfHwgZmluZFZlcnNpb24oc2NvcGUsIGtleSkpO1xufSk7XG52YXIgbG9hZFNpbmdsZXRvbiA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXkpIHtcblx0ZW5zdXJlRXhpc3RlbmNlKHNjb3BlTmFtZSwga2V5KTtcblx0cmV0dXJuIGdldFNpbmdsZXRvbihzY29wZSwgc2NvcGVOYW1lLCBrZXkpO1xufSk7XG52YXIgbG9hZFNpbmdsZXRvblZlcnNpb25DaGVjayA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXksIHZlcnNpb24pIHtcblx0ZW5zdXJlRXhpc3RlbmNlKHNjb3BlTmFtZSwga2V5KTtcblx0cmV0dXJuIGdldFNpbmdsZXRvblZlcnNpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCB2ZXJzaW9uKTtcbn0pO1xudmFyIGxvYWRTdHJpY3RWZXJzaW9uQ2hlY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCB2ZXJzaW9uKSB7XG5cdGVuc3VyZUV4aXN0ZW5jZShzY29wZU5hbWUsIGtleSk7XG5cdHJldHVybiBnZXRWYWxpZFZlcnNpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCB2ZXJzaW9uKTtcbn0pO1xudmFyIGxvYWRTdHJpY3RTaW5nbGV0b25WZXJzaW9uQ2hlY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCB2ZXJzaW9uKSB7XG5cdGVuc3VyZUV4aXN0ZW5jZShzY29wZU5hbWUsIGtleSk7XG5cdHJldHVybiBnZXRTdHJpY3RTaW5nbGV0b25WZXJzaW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgdmVyc2lvbik7XG59KTtcbnZhciBsb2FkVmVyc2lvbkNoZWNrRmFsbGJhY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCB2ZXJzaW9uLCBmYWxsYmFjaykge1xuXHRpZighc2NvcGUgfHwgIV9fd2VicGFja19yZXF1aXJlX18ubyhzY29wZSwga2V5KSkgcmV0dXJuIGZhbGxiYWNrKCk7XG5cdHJldHVybiBnZXQoZmluZFZhbGlkVmVyc2lvbihzY29wZSwga2V5LCB2ZXJzaW9uKSB8fCB3YXJuSW52YWxpZFZlcnNpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCB2ZXJzaW9uKSB8fCBmaW5kVmVyc2lvbihzY29wZSwga2V5KSk7XG59KTtcbnZhciBsb2FkU2luZ2xldG9uRmFsbGJhY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCBmYWxsYmFjaykge1xuXHRpZighc2NvcGUgfHwgIV9fd2VicGFja19yZXF1aXJlX18ubyhzY29wZSwga2V5KSkgcmV0dXJuIGZhbGxiYWNrKCk7XG5cdHJldHVybiBnZXRTaW5nbGV0b24oc2NvcGUsIHNjb3BlTmFtZSwga2V5KTtcbn0pO1xudmFyIGxvYWRTaW5nbGV0b25WZXJzaW9uQ2hlY2tGYWxsYmFjayA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXksIHZlcnNpb24sIGZhbGxiYWNrKSB7XG5cdGlmKCFzY29wZSB8fCAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKHNjb3BlLCBrZXkpKSByZXR1cm4gZmFsbGJhY2soKTtcblx0cmV0dXJuIGdldFNpbmdsZXRvblZlcnNpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCB2ZXJzaW9uKTtcbn0pO1xudmFyIGxvYWRTdHJpY3RWZXJzaW9uQ2hlY2tGYWxsYmFjayA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXksIHZlcnNpb24sIGZhbGxiYWNrKSB7XG5cdHZhciBlbnRyeSA9IHNjb3BlICYmIF9fd2VicGFja19yZXF1aXJlX18ubyhzY29wZSwga2V5KSAmJiBmaW5kVmFsaWRWZXJzaW9uKHNjb3BlLCBrZXksIHZlcnNpb24pO1xuXHRyZXR1cm4gZW50cnkgPyBnZXQoZW50cnkpIDogZmFsbGJhY2soKTtcbn0pO1xudmFyIGxvYWRTdHJpY3RTaW5nbGV0b25WZXJzaW9uQ2hlY2tGYWxsYmFjayA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXksIHZlcnNpb24sIGZhbGxiYWNrKSB7XG5cdGlmKCFzY29wZSB8fCAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKHNjb3BlLCBrZXkpKSByZXR1cm4gZmFsbGJhY2soKTtcblx0cmV0dXJuIGdldFN0cmljdFNpbmdsZXRvblZlcnNpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCB2ZXJzaW9uKTtcbn0pO1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbnZhciBtb2R1bGVUb0hhbmRsZXJNYXBwaW5nID0ge1xuXHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvcmVhY3QvcmVhY3RcIjogZnVuY3Rpb24oKSB7IHJldHVybiBsb2FkU2luZ2xldG9uVmVyc2lvbkNoZWNrRmFsbGJhY2soXCJkZWZhdWx0XCIsIFwicmVhY3RcIiwgWzEsMTgsMiwwXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19yZWFjdF9pbmRleF9qc1wiKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISByZWFjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyB9OyB9KTsgfSk7IH0sXG5cdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9yZWFjdC1kb20vcmVhY3QtZG9tXCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbG9hZFNpbmdsZXRvblZlcnNpb25DaGVja0ZhbGxiYWNrKFwiZGVmYXVsdFwiLCBcInJlYWN0LWRvbVwiLCBbMSwxOCwyLDBdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0LWRvbV9pbmRleF9qc1wiKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISByZWFjdC1kb20gKi8gXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanNcIik7IH07IH0pOyB9KTsgfSxcblx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L21vbWVudC9tb21lbnRcIjogZnVuY3Rpb24oKSB7IHJldHVybiBsb2FkU3RyaWN0VmVyc2lvbkNoZWNrRmFsbGJhY2soXCJkZWZhdWx0XCIsIFwibW9tZW50XCIsIFsxLDIsMjksNF0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gUHJvbWlzZS5hbGwoW19fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX21vbWVudF9sb2NhbGVfYWZfanMtbm9kZV9tb2R1bGVzX21vbWVudF9sb2NhbGVfYXItZHpfanMtbm9kZV9tb2R1bGVzX21vbS0yNDhkOTBcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIm5vZGVfbW9kdWxlc19tb21lbnRfbG9jYWxlX3N5bmNfcmVjdXJzaXZlX1wiKV0pLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIG1vbWVudCAqLyBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9tb21lbnQuanNcIik7IH07IH0pOyB9KTsgfSxcblx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L2FudGQvYW50ZFwiOiBmdW5jdGlvbigpIHsgcmV0dXJuIGxvYWRTdHJpY3RWZXJzaW9uQ2hlY2tGYWxsYmFjayhcImRlZmF1bHRcIiwgXCJhbnRkXCIsIFsxLDQsMjMsMF0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gUHJvbWlzZS5hbGwoW19fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FudGRfZXNfaW5kZXhfanNcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3QtZG9tX3JlYWN0LWRvbVwiKV0pLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIGFudGQgKi8gXCIuL25vZGVfbW9kdWxlcy9hbnRkL2VzL2luZGV4LmpzXCIpOyB9OyB9KTsgfSk7IH0sXG5cdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9yZWFjdC1yb3V0ZXItZG9tL3JlYWN0LXJvdXRlci1kb21cIjogZnVuY3Rpb24oKSB7IHJldHVybiBsb2FkU3RyaWN0VmVyc2lvbkNoZWNrRmFsbGJhY2soXCJkZWZhdWx0XCIsIFwicmVhY3Qtcm91dGVyLWRvbVwiLCBbMSw2LDQsMV0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3Qtcm91dGVyLWRvbV9kaXN0X2luZGV4X2pzXCIpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIHJlYWN0LXJvdXRlci1kb20gKi8gXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2Rpc3QvaW5kZXguanNcIik7IH07IH0pOyB9KTsgfSxcblx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L2RvYy1jb29raWVzL2RvYy1jb29raWVzXCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbG9hZFN0cmljdFZlcnNpb25DaGVja0ZhbGxiYWNrKFwiZGVmYXVsdFwiLCBcImRvYy1jb29raWVzXCIsIFsxLDEsMSwwXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJub2RlX21vZHVsZXNfZG9jLWNvb2tpZXNfY29va2llc19qc1wiKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkb2MtY29va2llcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2RvYy1jb29raWVzL2Nvb2tpZXMuanNcIik7IH07IH0pOyB9KTsgfSxcblx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L2p3dC1kZWNvZGUvand0LWRlY29kZVwiOiBmdW5jdGlvbigpIHsgcmV0dXJuIGxvYWRTdHJpY3RWZXJzaW9uQ2hlY2tGYWxsYmFjayhcImRlZmF1bHRcIiwgXCJqd3QtZGVjb2RlXCIsIFsxLDMsMSwyXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJub2RlX21vZHVsZXNfand0LWRlY29kZV9idWlsZF9qd3QtZGVjb2RlX2VzbV9qc1wiKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBqd3QtZGVjb2RlICovIFwiLi9ub2RlX21vZHVsZXMvand0LWRlY29kZS9idWlsZC9qd3QtZGVjb2RlLmVzbS5qc1wiKTsgfTsgfSk7IH0pOyB9LFxuXHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvcmVhY3QtcmVkdXgvcmVhY3QtcmVkdXhcIjogZnVuY3Rpb24oKSB7IHJldHVybiBsb2FkU3RyaWN0VmVyc2lvbkNoZWNrRmFsbGJhY2soXCJkZWZhdWx0XCIsIFwicmVhY3QtcmVkdXhcIiwgWzEsOCwwLDJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIFByb21pc2UuYWxsKFtfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19yZWFjdC1yZWR1eF9lc19pbmRleF9qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdC1kb21fcmVhY3QtZG9tXCIpXSkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgcmVhY3QtcmVkdXggKi8gXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9pbmRleC5qc1wiKTsgfTsgfSk7IH0pOyB9LFxuXHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvQHJlZHV4anMvdG9vbGtpdC9AcmVkdXhqcy90b29sa2l0XCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbG9hZFN0cmljdFZlcnNpb25DaGVja0ZhbGxiYWNrKFwiZGVmYXVsdFwiLCBcIkByZWR1eGpzL3Rvb2xraXRcIiwgWzEsMSw4LDVdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlZHV4anNfdG9vbGtpdF9kaXN0X3JlZHV4LXRvb2xraXRfZXNtX2pzXCIpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIEByZWR1eGpzL3Rvb2xraXQgKi8gXCIuL25vZGVfbW9kdWxlcy9AcmVkdXhqcy90b29sa2l0L2Rpc3QvcmVkdXgtdG9vbGtpdC5lc20uanNcIik7IH07IH0pOyB9KTsgfSxcblx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L2F4aW9zL2F4aW9zXCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbG9hZFN0cmljdFZlcnNpb25DaGVja0ZhbGxiYWNrKFwiZGVmYXVsdFwiLCBcImF4aW9zXCIsIFsxLDEsMiwwXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19heGlvc19pbmRleF9qc1wiKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBheGlvcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzXCIpOyB9OyB9KTsgfSk7IH0sXG5cdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9yZWFjdC1kdWFsLWxpc3Rib3gvcmVhY3QtZHVhbC1saXN0Ym94XCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbG9hZFN0cmljdFZlcnNpb25DaGVja0ZhbGxiYWNrKFwiZGVmYXVsdFwiLCBcInJlYWN0LWR1YWwtbGlzdGJveFwiLCBbMSw1LDAsMl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISByZWFjdC1kdWFsLWxpc3Rib3ggKi8gXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1kdWFsLWxpc3Rib3gvbGliL2luZGV4LmJyb3dzZXIuanNcIik7IH07IH0pOyB9XG59O1xuLy8gbm8gY29uc3VtZXMgaW4gaW5pdGlhbCBjaHVua3NcbnZhciBjaHVua01hcHBpbmcgPSB7XG5cdFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdF9yZWFjdFwiOiBbXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3JlYWN0L3JlYWN0XCJcblx0XSxcblx0XCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3JlYWN0LWRvbV9yZWFjdC1kb21cIjogW1xuXHRcdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9yZWFjdC1kb20vcmVhY3QtZG9tXCJcblx0XSxcblx0XCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X21vbWVudF9tb21lbnRcIjogW1xuXHRcdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9tb21lbnQvbW9tZW50XCJcblx0XSxcblx0XCJzcmNfY29tcG9uZW50c19zaWRlYmFyX1N1Yk1lbnVfanNcIjogW1xuXHRcdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9hbnRkL2FudGRcIixcblx0XHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvcmVhY3Qtcm91dGVyLWRvbS9yZWFjdC1yb3V0ZXItZG9tXCIsXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L2RvYy1jb29raWVzL2RvYy1jb29raWVzXCIsXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L2p3dC1kZWNvZGUvand0LWRlY29kZVwiXG5cdF0sXG5cdFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdC1yZWR1eF9yZWFjdC1yZWR1eFwiOiBbXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3JlYWN0LXJlZHV4L3JlYWN0LXJlZHV4XCJcblx0XSxcblx0XCJzcmNfQXBwX2pzXCI6IFtcblx0XHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvQHJlZHV4anMvdG9vbGtpdC9AcmVkdXhqcy90b29sa2l0XCIsXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L2F4aW9zL2F4aW9zXCIsXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3JlYWN0LWR1YWwtbGlzdGJveC9yZWFjdC1kdWFsLWxpc3Rib3hcIlxuXHRdXG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmNvbnN1bWVzID0gZnVuY3Rpb24oY2h1bmtJZCwgcHJvbWlzZXMpIHtcblx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGNodW5rTWFwcGluZywgY2h1bmtJZCkpIHtcblx0XHRjaHVua01hcHBpbmdbY2h1bmtJZF0uZm9yRWFjaChmdW5jdGlvbihpZCkge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZE1vZHVsZXMsIGlkKSkgcmV0dXJuIHByb21pc2VzLnB1c2goaW5zdGFsbGVkTW9kdWxlc1tpZF0pO1xuXHRcdFx0dmFyIG9uRmFjdG9yeSA9IGZ1bmN0aW9uKGZhY3RvcnkpIHtcblx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tpZF0gPSAwO1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1baWRdID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdFx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1tpZF07XG5cdFx0XHRcdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHR2YXIgb25FcnJvciA9IGZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW2lkXTtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW2lkXSA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRcdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbaWRdO1xuXHRcdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIHByb21pc2UgPSBtb2R1bGVUb0hhbmRsZXJNYXBwaW5nW2lkXSgpO1xuXHRcdFx0XHRpZihwcm9taXNlLnRoZW4pIHtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZE1vZHVsZXNbaWRdID0gcHJvbWlzZS50aGVuKG9uRmFjdG9yeSlbJ2NhdGNoJ10ob25FcnJvcikpO1xuXHRcdFx0XHR9IGVsc2Ugb25GYWN0b3J5KHByb21pc2UpO1xuXHRcdFx0fSBjYXRjaChlKSB7IG9uRXJyb3IoZSk7IH1cblx0XHR9KTtcblx0fVxufSIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIlJlbW90ZVByb2ZpbGVcIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSBmdW5jdGlvbihjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKCEvXndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfKHJlYWN0KFxcLWRvbV9yZWFjdFxcLWRvbXxcXC1yZWR1eF9yZWFjdFxcLXJlZHV4fF9yZWFjdCl8bW9tZW50X21vbWVudCkkLy50ZXN0KGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7IGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdOyB9KTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwcm9maWxlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3Byb2ZpbGVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gbW9kdWxlIGNhY2hlIGFyZSB1c2VkIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIndlYnBhY2svY29udGFpbmVyL2VudHJ5L1JlbW90ZVByb2ZpbGVcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=