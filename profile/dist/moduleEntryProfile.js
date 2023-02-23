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
		return Promise.all([__webpack_require__.e("vendors-node_modules_react-icons_bs_index_esm_js-node_modules_react-icons_fc_index_esm_js-nod-f65aee"), __webpack_require__.e("vendors-node_modules_redux_es_redux_js"), __webpack_require__.e("vendors-node_modules_redux-saga_core_dist_redux-saga-core_esm_js-node_modules_css-loader_dist-150ccb"), __webpack_require__.e("webpack_sharing_consume_default_react_react"), __webpack_require__.e("webpack_sharing_consume_default_moment_moment"), __webpack_require__.e("src_components_sidebar_SubMenu_js"), __webpack_require__.e("src_App_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/App.js */ "./src/App.js")); }; });
	},
	"./MenuProfileService": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_react-icons_bs_index_esm_js-node_modules_react-icons_fc_index_esm_js-nod-f65aee"), __webpack_require__.e("webpack_sharing_consume_default_react_react"), __webpack_require__.e("webpack_sharing_consume_default_moment_moment"), __webpack_require__.e("src_components_sidebar_SubMenu_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/components/sidebar/SubMenu.js */ "./src/components/sidebar/SubMenu.js")); }; });
	},
	"./InitProfileService": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_react-icons_bs_index_esm_js-node_modules_react-icons_fc_index_esm_js-nod-f65aee"), __webpack_require__.e("webpack_sharing_consume_default_react_react"), __webpack_require__.e("webpack_sharing_consume_default_moment_moment"), __webpack_require__.e("src_components_sidebar_SubMenu_js"), __webpack_require__.e("src_InitProfile_js")]).then(function() { return function() { return (__webpack_require__(/*! ./src/InitProfile.js */ "./src/InitProfile.js")); }; });
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
/******/ 			"webpack/sharing/consume/default/axios/axios": function() { return loadStrictVersionCheckFallback("default", "axios", [1,1,2,0], function() { return __webpack_require__.e("vendors-node_modules_axios_index_js").then(function() { return function() { return __webpack_require__(/*! axios */ "./node_modules/axios/index.js"); }; }); }); }
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
/******/ 				"webpack/sharing/consume/default/jwt-decode/jwt-decode",
/******/ 				"webpack/sharing/consume/default/react-redux/react-redux"
/******/ 			],
/******/ 			"src_App_js": [
/******/ 				"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit",
/******/ 				"webpack/sharing/consume/default/axios/axios"
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
/******/ 						if(!/^webpack_sharing_consume_default_(react(\-dom_react\-dom|_react)|moment_moment)$/.test(chunkId)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTTtXQUNOLEtBQUssV0FBVztXQUNoQixHQUFHO1dBQ0g7V0FDQTs7Ozs7V0NqTUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQSwyREFBMkQsb0VBQW9FO1dBQy9IOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsbUNBQW1DO1dBQ3BFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ3ZGQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9jb250YWluZXItZW50cnkiLCJ3ZWJwYWNrOi8vcHJvZmlsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvZmlsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vcHJvZmlsZS93ZWJwYWNrL3J1bnRpbWUvc2hhcmluZyIsIndlYnBhY2s6Ly9wcm9maWxlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2NvbnN1bWVzIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvZmlsZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvZmlsZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Byb2ZpbGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtb2R1bGVNYXAgPSB7XG5cdFwiLi9CdXR0b25Qcm9maWxlU2VydmljZVwiOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoW19fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0LWljb25zX2JzX2luZGV4X2VzbV9qcy1ub2RlX21vZHVsZXNfcmVhY3QtaWNvbnNfZmNfaW5kZXhfZXNtX2pzLW5vZC1mNjVhZWVcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlZHV4X2VzX3JlZHV4X2pzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19yZWR1eC1zYWdhX2NvcmVfZGlzdF9yZWR1eC1zYWdhLWNvcmVfZXNtX2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3QtMTUwY2NiXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3JlYWN0X3JlYWN0XCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X21vbWVudF9tb21lbnRcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcInNyY19jb21wb25lbnRzX3NpZGViYXJfU3ViTWVudV9qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwic3JjX0FwcF9qc1wiKV0pLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NyYy9BcHAuanMgKi8gXCIuL3NyYy9BcHAuanNcIikpOyB9OyB9KTtcblx0fSxcblx0XCIuL01lbnVQcm9maWxlU2VydmljZVwiOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoW19fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0LWljb25zX2JzX2luZGV4X2VzbV9qcy1ub2RlX21vZHVsZXNfcmVhY3QtaWNvbnNfZmNfaW5kZXhfZXNtX2pzLW5vZC1mNjVhZWVcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3RfcmVhY3RcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfbW9tZW50X21vbWVudFwiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwic3JjX2NvbXBvbmVudHNfc2lkZWJhcl9TdWJNZW51X2pzXCIpXSkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9TdWJNZW51LmpzICovIFwiLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL1N1Yk1lbnUuanNcIikpOyB9OyB9KTtcblx0fSxcblx0XCIuL0luaXRQcm9maWxlU2VydmljZVwiOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoW19fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0LWljb25zX2JzX2luZGV4X2VzbV9qcy1ub2RlX21vZHVsZXNfcmVhY3QtaWNvbnNfZmNfaW5kZXhfZXNtX2pzLW5vZC1mNjVhZWVcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3RfcmVhY3RcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfbW9tZW50X21vbWVudFwiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwic3JjX2NvbXBvbmVudHNfc2lkZWJhcl9TdWJNZW51X2pzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJzcmNfSW5pdFByb2ZpbGVfanNcIildKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zcmMvSW5pdFByb2ZpbGUuanMgKi8gXCIuL3NyYy9Jbml0UHJvZmlsZS5qc1wiKSk7IH07IH0pO1xuXHR9XG59O1xudmFyIGdldCA9IGZ1bmN0aW9uKG1vZHVsZSwgZ2V0U2NvcGUpIHtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5SID0gZ2V0U2NvcGU7XG5cdGdldFNjb3BlID0gKFxuXHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhtb2R1bGVNYXAsIG1vZHVsZSlcblx0XHRcdD8gbW9kdWxlTWFwW21vZHVsZV0oKVxuXHRcdFx0OiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01vZHVsZSBcIicgKyBtb2R1bGUgKyAnXCIgZG9lcyBub3QgZXhpc3QgaW4gY29udGFpbmVyLicpO1xuXHRcdFx0fSlcblx0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5SID0gdW5kZWZpbmVkO1xuXHRyZXR1cm4gZ2V0U2NvcGU7XG59O1xudmFyIGluaXQgPSBmdW5jdGlvbihzaGFyZVNjb3BlLCBpbml0U2NvcGUpIHtcblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLlMpIHJldHVybjtcblx0dmFyIG5hbWUgPSBcImRlZmF1bHRcIlxuXHR2YXIgb2xkU2NvcGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV07XG5cdGlmKG9sZFNjb3BlICYmIG9sZFNjb3BlICE9PSBzaGFyZVNjb3BlKSB0aHJvdyBuZXcgRXJyb3IoXCJDb250YWluZXIgaW5pdGlhbGl6YXRpb24gZmFpbGVkIGFzIGl0IGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGl6ZWQgd2l0aCBhIGRpZmZlcmVudCBzaGFyZSBzY29wZVwiKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5TW25hbWVdID0gc2hhcmVTY29wZTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uSShuYW1lLCBpbml0U2NvcGUpO1xufTtcblxuLy8gVGhpcyBleHBvcnRzIGdldHRlcnMgdG8gZGlzYWxsb3cgbW9kaWZpY2F0aW9uc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kKGV4cG9ydHMsIHtcblx0Z2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGdldDsgfSxcblx0aW5pdDogZnVuY3Rpb24oKSB7IHJldHVybiBpbml0OyB9XG59KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKGZ1bmN0aW9uKHByb21pc2VzLCBrZXkpIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmJ1bmRsZS5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJwcm9maWxlOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSBmdW5jdGlvbih1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24ocHJldiwgZXZlbnQpIHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKGZ1bmN0aW9uKGZuKSB7IHJldHVybiBmbihldmVudCk7IH0pO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHQ7XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5TID0ge307XG52YXIgaW5pdFByb21pc2VzID0ge307XG52YXIgaW5pdFRva2VucyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5JID0gZnVuY3Rpb24obmFtZSwgaW5pdFNjb3BlKSB7XG5cdGlmKCFpbml0U2NvcGUpIGluaXRTY29wZSA9IFtdO1xuXHQvLyBoYW5kbGluZyBjaXJjdWxhciBpbml0IGNhbGxzXG5cdHZhciBpbml0VG9rZW4gPSBpbml0VG9rZW5zW25hbWVdO1xuXHRpZighaW5pdFRva2VuKSBpbml0VG9rZW4gPSBpbml0VG9rZW5zW25hbWVdID0ge307XG5cdGlmKGluaXRTY29wZS5pbmRleE9mKGluaXRUb2tlbikgPj0gMCkgcmV0dXJuO1xuXHRpbml0U2NvcGUucHVzaChpbml0VG9rZW4pO1xuXHQvLyBvbmx5IHJ1bnMgb25jZVxuXHRpZihpbml0UHJvbWlzZXNbbmFtZV0pIHJldHVybiBpbml0UHJvbWlzZXNbbmFtZV07XG5cdC8vIGNyZWF0ZXMgYSBuZXcgc2hhcmUgc2NvcGUgaWYgbmVlZGVkXG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oX193ZWJwYWNrX3JlcXVpcmVfXy5TLCBuYW1lKSkgX193ZWJwYWNrX3JlcXVpcmVfXy5TW25hbWVdID0ge307XG5cdC8vIHJ1bnMgYWxsIGluaXQgc25pcHBldHMgZnJvbSBhbGwgbW9kdWxlcyByZWFjaGFibGVcblx0dmFyIHNjb3BlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5TW25hbWVdO1xuXHR2YXIgd2FybiA9IGZ1bmN0aW9uKG1zZykgeyByZXR1cm4gdHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2Fybihtc2cpOyB9O1xuXHR2YXIgdW5pcXVlTmFtZSA9IFwicHJvZmlsZVwiO1xuXHR2YXIgcmVnaXN0ZXIgPSBmdW5jdGlvbihuYW1lLCB2ZXJzaW9uLCBmYWN0b3J5LCBlYWdlcikge1xuXHRcdHZhciB2ZXJzaW9ucyA9IHNjb3BlW25hbWVdID0gc2NvcGVbbmFtZV0gfHwge307XG5cdFx0dmFyIGFjdGl2ZVZlcnNpb24gPSB2ZXJzaW9uc1t2ZXJzaW9uXTtcblx0XHRpZighYWN0aXZlVmVyc2lvbiB8fCAoIWFjdGl2ZVZlcnNpb24ubG9hZGVkICYmICghZWFnZXIgIT0gIWFjdGl2ZVZlcnNpb24uZWFnZXIgPyBlYWdlciA6IHVuaXF1ZU5hbWUgPiBhY3RpdmVWZXJzaW9uLmZyb20pKSkgdmVyc2lvbnNbdmVyc2lvbl0gPSB7IGdldDogZmFjdG9yeSwgZnJvbTogdW5pcXVlTmFtZSwgZWFnZXI6ICEhZWFnZXIgfTtcblx0fTtcblx0dmFyIGluaXRFeHRlcm5hbCA9IGZ1bmN0aW9uKGlkKSB7XG5cdFx0dmFyIGhhbmRsZUVycm9yID0gZnVuY3Rpb24oZXJyKSB7IHdhcm4oXCJJbml0aWFsaXphdGlvbiBvZiBzaGFyaW5nIGV4dGVybmFsIGZhaWxlZDogXCIgKyBlcnIpOyB9O1xuXHRcdHRyeSB7XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdFx0XHRpZighbW9kdWxlKSByZXR1cm47XG5cdFx0XHR2YXIgaW5pdEZuID0gZnVuY3Rpb24obW9kdWxlKSB7IHJldHVybiBtb2R1bGUgJiYgbW9kdWxlLmluaXQgJiYgbW9kdWxlLmluaXQoX193ZWJwYWNrX3JlcXVpcmVfXy5TW25hbWVdLCBpbml0U2NvcGUpOyB9XG5cdFx0XHRpZihtb2R1bGUudGhlbikgcmV0dXJuIHByb21pc2VzLnB1c2gobW9kdWxlLnRoZW4oaW5pdEZuLCBoYW5kbGVFcnJvcikpO1xuXHRcdFx0dmFyIGluaXRSZXN1bHQgPSBpbml0Rm4obW9kdWxlKTtcblx0XHRcdGlmKGluaXRSZXN1bHQgJiYgaW5pdFJlc3VsdC50aGVuKSByZXR1cm4gcHJvbWlzZXMucHVzaChpbml0UmVzdWx0WydjYXRjaCddKGhhbmRsZUVycm9yKSk7XG5cdFx0fSBjYXRjaChlcnIpIHsgaGFuZGxlRXJyb3IoZXJyKTsgfVxuXHR9XG5cdHZhciBwcm9taXNlcyA9IFtdO1xuXHRzd2l0Y2gobmFtZSkge1xuXHRcdGNhc2UgXCJkZWZhdWx0XCI6IHtcblx0XHRcdHJlZ2lzdGVyKFwiQHJlZHV4anMvdG9vbGtpdFwiLCBcIjEuOC41XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUHJvbWlzZS5hbGwoW19fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlZHV4X2VzX3JlZHV4X2pzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19yZWR1eGpzX3Rvb2xraXRfZGlzdF9yZWR1eC10b29sa2l0X2VzbV9qc1wiKV0pLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL0ByZWR1eGpzL3Rvb2xraXQvZGlzdC9yZWR1eC10b29sa2l0LmVzbS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL0ByZWR1eGpzL3Rvb2xraXQvZGlzdC9yZWR1eC10b29sa2l0LmVzbS5qc1wiKTsgfTsgfSk7IH0pO1xuXHRcdFx0cmVnaXN0ZXIoXCJhbnRkXCIsIFwiNC4yMy4wXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUHJvbWlzZS5hbGwoW19fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FudGRfZXNfaW5kZXhfanNcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3RfcmVhY3RcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3QtZG9tX3JlYWN0LWRvbVwiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9tb21lbnRfbW9tZW50XCIpXSkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9pbmRleC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvaW5kZXguanNcIik7IH07IH0pOyB9KTtcblx0XHRcdHJlZ2lzdGVyKFwiYXhpb3NcIiwgXCIxLjIuMFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2F4aW9zX2luZGV4X2pzXCIpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcIik7IH07IH0pOyB9KTtcblx0XHRcdHJlZ2lzdGVyKFwiZG9jLWNvb2tpZXNcIiwgXCIxLjEuMFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcIm5vZGVfbW9kdWxlc19kb2MtY29va2llc19jb29raWVzX2pzXCIpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL2RvYy1jb29raWVzL2Nvb2tpZXMuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9kb2MtY29va2llcy9jb29raWVzLmpzXCIpOyB9OyB9KTsgfSk7XG5cdFx0XHRyZWdpc3RlcihcImp3dC1kZWNvZGVcIiwgXCIzLjEuMlwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcIm5vZGVfbW9kdWxlc19qd3QtZGVjb2RlX2J1aWxkX2p3dC1kZWNvZGVfZXNtX2pzXCIpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL2p3dC1kZWNvZGUvYnVpbGQvand0LWRlY29kZS5lc20uanMgKi8gXCIuL25vZGVfbW9kdWxlcy9qd3QtZGVjb2RlL2J1aWxkL2p3dC1kZWNvZGUuZXNtLmpzXCIpOyB9OyB9KTsgfSk7XG5cdFx0XHRyZWdpc3RlcihcIm1vbWVudFwiLCBcIjIuMjkuNFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFByb21pc2UuYWxsKFtfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19tb21lbnRfbG9jYWxlX2FmX2pzLW5vZGVfbW9kdWxlc19tb21lbnRfbG9jYWxlX2FyLWR6X2pzLW5vZGVfbW9kdWxlc19tb20tMjQ4ZDkwXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJub2RlX21vZHVsZXNfbW9tZW50X2xvY2FsZV9zeW5jX3JlY3Vyc2l2ZV9cIildKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy9tb21lbnQvbW9tZW50LmpzICovIFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L21vbWVudC5qc1wiKTsgfTsgfSk7IH0pO1xuXHRcdFx0cmVnaXN0ZXIoXCJyZWFjdC1kb21cIiwgXCIxOC4yLjBcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQcm9taXNlLmFsbChbX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3QtZG9tX2luZGV4X2pzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3JlYWN0X3JlYWN0XCIpXSkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzXCIpOyB9OyB9KTsgfSk7XG5cdFx0XHRyZWdpc3RlcihcInJlYWN0LXJlZHV4XCIsIFwiOC4wLjJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQcm9taXNlLmFsbChbX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3QtcmVkdXhfZXNfaW5kZXhfanNcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3RfcmVhY3RcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3QtZG9tX3JlYWN0LWRvbVwiKV0pLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaW5kZXguanNcIik7IH07IH0pOyB9KTtcblx0XHRcdHJlZ2lzdGVyKFwicmVhY3Qtcm91dGVyLWRvbVwiLCBcIjYuNC4xXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUHJvbWlzZS5hbGwoW19fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0LXJvdXRlci1kb21fZGlzdF9pbmRleF9qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdF9yZWFjdFwiKV0pLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vZGlzdC9pbmRleC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vZGlzdC9pbmRleC5qc1wiKTsgfTsgfSk7IH0pO1xuXHRcdFx0cmVnaXN0ZXIoXCJyZWFjdFwiLCBcIjE4LjIuMFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0X2luZGV4X2pzXCIpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IH07IH0pOyB9KTtcblx0XHR9XG5cdFx0YnJlYWs7XG5cdH1cblx0aWYoIXByb21pc2VzLmxlbmd0aCkgcmV0dXJuIGluaXRQcm9taXNlc1tuYW1lXSA9IDE7XG5cdHJldHVybiBpbml0UHJvbWlzZXNbbmFtZV0gPSBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGluaXRQcm9taXNlc1tuYW1lXSA9IDE7IH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsInZhciBwYXJzZVZlcnNpb24gPSBmdW5jdGlvbihzdHIpIHtcblx0Ly8gc2VlIHdlYnBhY2svbGliL3V0aWwvc2VtdmVyLmpzIGZvciBvcmlnaW5hbCBjb2RlXG5cdHZhciBwPWZ1bmN0aW9uKHApe3JldHVybiBwLnNwbGl0KFwiLlwiKS5tYXAoKGZ1bmN0aW9uKHApe3JldHVybitwPT1wPytwOnB9KSl9LG49L14oW14tK10rKT8oPzotKFteK10rKSk/KD86XFwrKC4rKSk/JC8uZXhlYyhzdHIpLHI9blsxXT9wKG5bMV0pOltdO3JldHVybiBuWzJdJiYoci5sZW5ndGgrKyxyLnB1c2guYXBwbHkocixwKG5bMl0pKSksblszXSYmKHIucHVzaChbXSksci5wdXNoLmFwcGx5KHIscChuWzNdKSkpLHI7XG59XG52YXIgdmVyc2lvbkx0ID0gZnVuY3Rpb24oYSwgYikge1xuXHQvLyBzZWUgd2VicGFjay9saWIvdXRpbC9zZW12ZXIuanMgZm9yIG9yaWdpbmFsIGNvZGVcblx0YT1wYXJzZVZlcnNpb24oYSksYj1wYXJzZVZlcnNpb24oYik7Zm9yKHZhciByPTA7Oyl7aWYocj49YS5sZW5ndGgpcmV0dXJuIHI8Yi5sZW5ndGgmJlwidVwiIT0odHlwZW9mIGJbcl0pWzBdO3ZhciBlPWFbcl0sbj0odHlwZW9mIGUpWzBdO2lmKHI+PWIubGVuZ3RoKXJldHVyblwidVwiPT1uO3ZhciB0PWJbcl0sZj0odHlwZW9mIHQpWzBdO2lmKG4hPWYpcmV0dXJuXCJvXCI9PW4mJlwiblwiPT1mfHwoXCJzXCI9PWZ8fFwidVwiPT1uKTtpZihcIm9cIiE9biYmXCJ1XCIhPW4mJmUhPXQpcmV0dXJuIGU8dDtyKyt9XG59XG52YXIgcmFuZ2VUb1N0cmluZyA9IGZ1bmN0aW9uKHJhbmdlKSB7XG5cdC8vIHNlZSB3ZWJwYWNrL2xpYi91dGlsL3NlbXZlci5qcyBmb3Igb3JpZ2luYWwgY29kZVxuXHR2YXIgcj1yYW5nZVswXSxuPVwiXCI7aWYoMT09PXJhbmdlLmxlbmd0aClyZXR1cm5cIipcIjtpZihyKy41KXtuKz0wPT1yP1wiPj1cIjotMT09cj9cIjxcIjoxPT1yP1wiXlwiOjI9PXI/XCJ+XCI6cj4wP1wiPVwiOlwiIT1cIjtmb3IodmFyIGU9MSxhPTE7YTxyYW5nZS5sZW5ndGg7YSsrKXtlLS0sbis9XCJ1XCI9PSh0eXBlb2YodD1yYW5nZVthXSkpWzBdP1wiLVwiOihlPjA/XCIuXCI6XCJcIikrKGU9Mix0KX1yZXR1cm4gbn12YXIgZz1bXTtmb3IoYT0xO2E8cmFuZ2UubGVuZ3RoO2ErKyl7dmFyIHQ9cmFuZ2VbYV07Zy5wdXNoKDA9PT10P1wibm90KFwiK28oKStcIilcIjoxPT09dD9cIihcIitvKCkrXCIgfHwgXCIrbygpK1wiKVwiOjI9PT10P2cucG9wKCkrXCIgXCIrZy5wb3AoKTpyYW5nZVRvU3RyaW5nKHQpKX1yZXR1cm4gbygpO2Z1bmN0aW9uIG8oKXtyZXR1cm4gZy5wb3AoKS5yZXBsYWNlKC9eXFwoKC4rKVxcKSQvLFwiJDFcIil9XG59XG52YXIgc2F0aXNmeSA9IGZ1bmN0aW9uKHJhbmdlLCB2ZXJzaW9uKSB7XG5cdC8vIHNlZSB3ZWJwYWNrL2xpYi91dGlsL3NlbXZlci5qcyBmb3Igb3JpZ2luYWwgY29kZVxuXHRpZigwIGluIHJhbmdlKXt2ZXJzaW9uPXBhcnNlVmVyc2lvbih2ZXJzaW9uKTt2YXIgZT1yYW5nZVswXSxyPWU8MDtyJiYoZT0tZS0xKTtmb3IodmFyIG49MCxpPTEsYT0hMDs7aSsrLG4rKyl7dmFyIGYscyxnPWk8cmFuZ2UubGVuZ3RoPyh0eXBlb2YgcmFuZ2VbaV0pWzBdOlwiXCI7aWYobj49dmVyc2lvbi5sZW5ndGh8fFwib1wiPT0ocz0odHlwZW9mKGY9dmVyc2lvbltuXSkpWzBdKSlyZXR1cm4hYXx8KFwidVwiPT1nP2k+ZSYmIXI6XCJcIj09ZyE9cik7aWYoXCJ1XCI9PXMpe2lmKCFhfHxcInVcIiE9ZylyZXR1cm4hMX1lbHNlIGlmKGEpaWYoZz09cylpZihpPD1lKXtpZihmIT1yYW5nZVtpXSlyZXR1cm4hMX1lbHNle2lmKHI/Zj5yYW5nZVtpXTpmPHJhbmdlW2ldKXJldHVybiExO2YhPXJhbmdlW2ldJiYoYT0hMSl9ZWxzZSBpZihcInNcIiE9ZyYmXCJuXCIhPWcpe2lmKHJ8fGk8PWUpcmV0dXJuITE7YT0hMSxpLS19ZWxzZXtpZihpPD1lfHxzPGchPXIpcmV0dXJuITE7YT0hMX1lbHNlXCJzXCIhPWcmJlwiblwiIT1nJiYoYT0hMSxpLS0pfX12YXIgdD1bXSxvPXQucG9wLmJpbmQodCk7Zm9yKG49MTtuPHJhbmdlLmxlbmd0aDtuKyspe3ZhciB1PXJhbmdlW25dO3QucHVzaCgxPT11P28oKXxvKCk6Mj09dT9vKCkmbygpOnU/c2F0aXNmeSh1LHZlcnNpb24pOiFvKCkpfXJldHVybiEhbygpO1xufVxudmFyIGVuc3VyZUV4aXN0ZW5jZSA9IGZ1bmN0aW9uKHNjb3BlTmFtZSwga2V5KSB7XG5cdHZhciBzY29wZSA9IF9fd2VicGFja19yZXF1aXJlX18uU1tzY29wZU5hbWVdO1xuXHRpZighc2NvcGUgfHwgIV9fd2VicGFja19yZXF1aXJlX18ubyhzY29wZSwga2V5KSkgdGhyb3cgbmV3IEVycm9yKFwiU2hhcmVkIG1vZHVsZSBcIiArIGtleSArIFwiIGRvZXNuJ3QgZXhpc3QgaW4gc2hhcmVkIHNjb3BlIFwiICsgc2NvcGVOYW1lKTtcblx0cmV0dXJuIHNjb3BlO1xufTtcbnZhciBmaW5kVmVyc2lvbiA9IGZ1bmN0aW9uKHNjb3BlLCBrZXkpIHtcblx0dmFyIHZlcnNpb25zID0gc2NvcGVba2V5XTtcblx0dmFyIGtleSA9IE9iamVjdC5rZXlzKHZlcnNpb25zKS5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xuXHRcdHJldHVybiAhYSB8fCB2ZXJzaW9uTHQoYSwgYikgPyBiIDogYTtcblx0fSwgMCk7XG5cdHJldHVybiBrZXkgJiYgdmVyc2lvbnNba2V5XVxufTtcbnZhciBmaW5kU2luZ2xldG9uVmVyc2lvbktleSA9IGZ1bmN0aW9uKHNjb3BlLCBrZXkpIHtcblx0dmFyIHZlcnNpb25zID0gc2NvcGVba2V5XTtcblx0cmV0dXJuIE9iamVjdC5rZXlzKHZlcnNpb25zKS5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xuXHRcdHJldHVybiAhYSB8fCAoIXZlcnNpb25zW2FdLmxvYWRlZCAmJiB2ZXJzaW9uTHQoYSwgYikpID8gYiA6IGE7XG5cdH0sIDApO1xufTtcbnZhciBnZXRJbnZhbGlkU2luZ2xldG9uVmVyc2lvbk1lc3NhZ2UgPSBmdW5jdGlvbihzY29wZSwga2V5LCB2ZXJzaW9uLCByZXF1aXJlZFZlcnNpb24pIHtcblx0cmV0dXJuIFwiVW5zYXRpc2ZpZWQgdmVyc2lvbiBcIiArIHZlcnNpb24gKyBcIiBmcm9tIFwiICsgKHZlcnNpb24gJiYgc2NvcGVba2V5XVt2ZXJzaW9uXS5mcm9tKSArIFwiIG9mIHNoYXJlZCBzaW5nbGV0b24gbW9kdWxlIFwiICsga2V5ICsgXCIgKHJlcXVpcmVkIFwiICsgcmFuZ2VUb1N0cmluZyhyZXF1aXJlZFZlcnNpb24pICsgXCIpXCJcbn07XG52YXIgZ2V0U2luZ2xldG9uID0gZnVuY3Rpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCByZXF1aXJlZFZlcnNpb24pIHtcblx0dmFyIHZlcnNpb24gPSBmaW5kU2luZ2xldG9uVmVyc2lvbktleShzY29wZSwga2V5KTtcblx0cmV0dXJuIGdldChzY29wZVtrZXldW3ZlcnNpb25dKTtcbn07XG52YXIgZ2V0U2luZ2xldG9uVmVyc2lvbiA9IGZ1bmN0aW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSB7XG5cdHZhciB2ZXJzaW9uID0gZmluZFNpbmdsZXRvblZlcnNpb25LZXkoc2NvcGUsIGtleSk7XG5cdGlmICghc2F0aXNmeShyZXF1aXJlZFZlcnNpb24sIHZlcnNpb24pKSB0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKGdldEludmFsaWRTaW5nbGV0b25WZXJzaW9uTWVzc2FnZShzY29wZSwga2V5LCB2ZXJzaW9uLCByZXF1aXJlZFZlcnNpb24pKTtcblx0cmV0dXJuIGdldChzY29wZVtrZXldW3ZlcnNpb25dKTtcbn07XG52YXIgZ2V0U3RyaWN0U2luZ2xldG9uVmVyc2lvbiA9IGZ1bmN0aW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSB7XG5cdHZhciB2ZXJzaW9uID0gZmluZFNpbmdsZXRvblZlcnNpb25LZXkoc2NvcGUsIGtleSk7XG5cdGlmICghc2F0aXNmeShyZXF1aXJlZFZlcnNpb24sIHZlcnNpb24pKSB0aHJvdyBuZXcgRXJyb3IoZ2V0SW52YWxpZFNpbmdsZXRvblZlcnNpb25NZXNzYWdlKHNjb3BlLCBrZXksIHZlcnNpb24sIHJlcXVpcmVkVmVyc2lvbikpO1xuXHRyZXR1cm4gZ2V0KHNjb3BlW2tleV1bdmVyc2lvbl0pO1xufTtcbnZhciBmaW5kVmFsaWRWZXJzaW9uID0gZnVuY3Rpb24oc2NvcGUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSB7XG5cdHZhciB2ZXJzaW9ucyA9IHNjb3BlW2tleV07XG5cdHZhciBrZXkgPSBPYmplY3Qua2V5cyh2ZXJzaW9ucykucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRpZiAoIXNhdGlzZnkocmVxdWlyZWRWZXJzaW9uLCBiKSkgcmV0dXJuIGE7XG5cdFx0cmV0dXJuICFhIHx8IHZlcnNpb25MdChhLCBiKSA/IGIgOiBhO1xuXHR9LCAwKTtcblx0cmV0dXJuIGtleSAmJiB2ZXJzaW9uc1trZXldXG59O1xudmFyIGdldEludmFsaWRWZXJzaW9uTWVzc2FnZSA9IGZ1bmN0aW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSB7XG5cdHZhciB2ZXJzaW9ucyA9IHNjb3BlW2tleV07XG5cdHJldHVybiBcIk5vIHNhdGlzZnlpbmcgdmVyc2lvbiAoXCIgKyByYW5nZVRvU3RyaW5nKHJlcXVpcmVkVmVyc2lvbikgKyBcIikgb2Ygc2hhcmVkIG1vZHVsZSBcIiArIGtleSArIFwiIGZvdW5kIGluIHNoYXJlZCBzY29wZSBcIiArIHNjb3BlTmFtZSArIFwiLlxcblwiICtcblx0XHRcIkF2YWlsYWJsZSB2ZXJzaW9uczogXCIgKyBPYmplY3Qua2V5cyh2ZXJzaW9ucykubWFwKGZ1bmN0aW9uKGtleSkge1xuXHRcdHJldHVybiBrZXkgKyBcIiBmcm9tIFwiICsgdmVyc2lvbnNba2V5XS5mcm9tO1xuXHR9KS5qb2luKFwiLCBcIik7XG59O1xudmFyIGdldFZhbGlkVmVyc2lvbiA9IGZ1bmN0aW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSB7XG5cdHZhciBlbnRyeSA9IGZpbmRWYWxpZFZlcnNpb24oc2NvcGUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKTtcblx0aWYoZW50cnkpIHJldHVybiBnZXQoZW50cnkpO1xuXHR0aHJvdyBuZXcgRXJyb3IoZ2V0SW52YWxpZFZlcnNpb25NZXNzYWdlKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSk7XG59O1xudmFyIHdhcm5JbnZhbGlkVmVyc2lvbiA9IGZ1bmN0aW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSB7XG5cdHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oZ2V0SW52YWxpZFZlcnNpb25NZXNzYWdlKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSk7XG59O1xudmFyIGdldCA9IGZ1bmN0aW9uKGVudHJ5KSB7XG5cdGVudHJ5LmxvYWRlZCA9IDE7XG5cdHJldHVybiBlbnRyeS5nZXQoKVxufTtcbnZhciBpbml0ID0gZnVuY3Rpb24oZm4pIHsgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlTmFtZSwgYSwgYiwgYykge1xuXHR2YXIgcHJvbWlzZSA9IF9fd2VicGFja19yZXF1aXJlX18uSShzY29wZU5hbWUpO1xuXHRpZiAocHJvbWlzZSAmJiBwcm9taXNlLnRoZW4pIHJldHVybiBwcm9taXNlLnRoZW4oZm4uYmluZChmbiwgc2NvcGVOYW1lLCBfX3dlYnBhY2tfcmVxdWlyZV9fLlNbc2NvcGVOYW1lXSwgYSwgYiwgYykpO1xuXHRyZXR1cm4gZm4oc2NvcGVOYW1lLCBfX3dlYnBhY2tfcmVxdWlyZV9fLlNbc2NvcGVOYW1lXSwgYSwgYiwgYyk7XG59OyB9O1xuXG52YXIgbG9hZCA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXkpIHtcblx0ZW5zdXJlRXhpc3RlbmNlKHNjb3BlTmFtZSwga2V5KTtcblx0cmV0dXJuIGdldChmaW5kVmVyc2lvbihzY29wZSwga2V5KSk7XG59KTtcbnZhciBsb2FkRmFsbGJhY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCBmYWxsYmFjaykge1xuXHRyZXR1cm4gc2NvcGUgJiYgX193ZWJwYWNrX3JlcXVpcmVfXy5vKHNjb3BlLCBrZXkpID8gZ2V0KGZpbmRWZXJzaW9uKHNjb3BlLCBrZXkpKSA6IGZhbGxiYWNrKCk7XG59KTtcbnZhciBsb2FkVmVyc2lvbkNoZWNrID0gLyojX19QVVJFX18qLyBpbml0KGZ1bmN0aW9uKHNjb3BlTmFtZSwgc2NvcGUsIGtleSwgdmVyc2lvbikge1xuXHRlbnN1cmVFeGlzdGVuY2Uoc2NvcGVOYW1lLCBrZXkpO1xuXHRyZXR1cm4gZ2V0KGZpbmRWYWxpZFZlcnNpb24oc2NvcGUsIGtleSwgdmVyc2lvbikgfHwgd2FybkludmFsaWRWZXJzaW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgdmVyc2lvbikgfHwgZmluZFZlcnNpb24oc2NvcGUsIGtleSkpO1xufSk7XG52YXIgbG9hZFNpbmdsZXRvbiA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXkpIHtcblx0ZW5zdXJlRXhpc3RlbmNlKHNjb3BlTmFtZSwga2V5KTtcblx0cmV0dXJuIGdldFNpbmdsZXRvbihzY29wZSwgc2NvcGVOYW1lLCBrZXkpO1xufSk7XG52YXIgbG9hZFNpbmdsZXRvblZlcnNpb25DaGVjayA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXksIHZlcnNpb24pIHtcblx0ZW5zdXJlRXhpc3RlbmNlKHNjb3BlTmFtZSwga2V5KTtcblx0cmV0dXJuIGdldFNpbmdsZXRvblZlcnNpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCB2ZXJzaW9uKTtcbn0pO1xudmFyIGxvYWRTdHJpY3RWZXJzaW9uQ2hlY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCB2ZXJzaW9uKSB7XG5cdGVuc3VyZUV4aXN0ZW5jZShzY29wZU5hbWUsIGtleSk7XG5cdHJldHVybiBnZXRWYWxpZFZlcnNpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCB2ZXJzaW9uKTtcbn0pO1xudmFyIGxvYWRTdHJpY3RTaW5nbGV0b25WZXJzaW9uQ2hlY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCB2ZXJzaW9uKSB7XG5cdGVuc3VyZUV4aXN0ZW5jZShzY29wZU5hbWUsIGtleSk7XG5cdHJldHVybiBnZXRTdHJpY3RTaW5nbGV0b25WZXJzaW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgdmVyc2lvbik7XG59KTtcbnZhciBsb2FkVmVyc2lvbkNoZWNrRmFsbGJhY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCB2ZXJzaW9uLCBmYWxsYmFjaykge1xuXHRpZighc2NvcGUgfHwgIV9fd2VicGFja19yZXF1aXJlX18ubyhzY29wZSwga2V5KSkgcmV0dXJuIGZhbGxiYWNrKCk7XG5cdHJldHVybiBnZXQoZmluZFZhbGlkVmVyc2lvbihzY29wZSwga2V5LCB2ZXJzaW9uKSB8fCB3YXJuSW52YWxpZFZlcnNpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCB2ZXJzaW9uKSB8fCBmaW5kVmVyc2lvbihzY29wZSwga2V5KSk7XG59KTtcbnZhciBsb2FkU2luZ2xldG9uRmFsbGJhY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCBmYWxsYmFjaykge1xuXHRpZighc2NvcGUgfHwgIV9fd2VicGFja19yZXF1aXJlX18ubyhzY29wZSwga2V5KSkgcmV0dXJuIGZhbGxiYWNrKCk7XG5cdHJldHVybiBnZXRTaW5nbGV0b24oc2NvcGUsIHNjb3BlTmFtZSwga2V5KTtcbn0pO1xudmFyIGxvYWRTaW5nbGV0b25WZXJzaW9uQ2hlY2tGYWxsYmFjayA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXksIHZlcnNpb24sIGZhbGxiYWNrKSB7XG5cdGlmKCFzY29wZSB8fCAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKHNjb3BlLCBrZXkpKSByZXR1cm4gZmFsbGJhY2soKTtcblx0cmV0dXJuIGdldFNpbmdsZXRvblZlcnNpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCB2ZXJzaW9uKTtcbn0pO1xudmFyIGxvYWRTdHJpY3RWZXJzaW9uQ2hlY2tGYWxsYmFjayA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXksIHZlcnNpb24sIGZhbGxiYWNrKSB7XG5cdHZhciBlbnRyeSA9IHNjb3BlICYmIF9fd2VicGFja19yZXF1aXJlX18ubyhzY29wZSwga2V5KSAmJiBmaW5kVmFsaWRWZXJzaW9uKHNjb3BlLCBrZXksIHZlcnNpb24pO1xuXHRyZXR1cm4gZW50cnkgPyBnZXQoZW50cnkpIDogZmFsbGJhY2soKTtcbn0pO1xudmFyIGxvYWRTdHJpY3RTaW5nbGV0b25WZXJzaW9uQ2hlY2tGYWxsYmFjayA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXksIHZlcnNpb24sIGZhbGxiYWNrKSB7XG5cdGlmKCFzY29wZSB8fCAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKHNjb3BlLCBrZXkpKSByZXR1cm4gZmFsbGJhY2soKTtcblx0cmV0dXJuIGdldFN0cmljdFNpbmdsZXRvblZlcnNpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCB2ZXJzaW9uKTtcbn0pO1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbnZhciBtb2R1bGVUb0hhbmRsZXJNYXBwaW5nID0ge1xuXHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvcmVhY3QvcmVhY3RcIjogZnVuY3Rpb24oKSB7IHJldHVybiBsb2FkU2luZ2xldG9uVmVyc2lvbkNoZWNrRmFsbGJhY2soXCJkZWZhdWx0XCIsIFwicmVhY3RcIiwgWzEsMTgsMiwwXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19yZWFjdF9pbmRleF9qc1wiKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISByZWFjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyB9OyB9KTsgfSk7IH0sXG5cdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9yZWFjdC1kb20vcmVhY3QtZG9tXCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbG9hZFNpbmdsZXRvblZlcnNpb25DaGVja0ZhbGxiYWNrKFwiZGVmYXVsdFwiLCBcInJlYWN0LWRvbVwiLCBbMSwxOCwyLDBdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0LWRvbV9pbmRleF9qc1wiKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISByZWFjdC1kb20gKi8gXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanNcIik7IH07IH0pOyB9KTsgfSxcblx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L21vbWVudC9tb21lbnRcIjogZnVuY3Rpb24oKSB7IHJldHVybiBsb2FkU3RyaWN0VmVyc2lvbkNoZWNrRmFsbGJhY2soXCJkZWZhdWx0XCIsIFwibW9tZW50XCIsIFsxLDIsMjksNF0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gUHJvbWlzZS5hbGwoW19fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX21vbWVudF9sb2NhbGVfYWZfanMtbm9kZV9tb2R1bGVzX21vbWVudF9sb2NhbGVfYXItZHpfanMtbm9kZV9tb2R1bGVzX21vbS0yNDhkOTBcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIm5vZGVfbW9kdWxlc19tb21lbnRfbG9jYWxlX3N5bmNfcmVjdXJzaXZlX1wiKV0pLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIG1vbWVudCAqLyBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9tb21lbnQuanNcIik7IH07IH0pOyB9KTsgfSxcblx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L2FudGQvYW50ZFwiOiBmdW5jdGlvbigpIHsgcmV0dXJuIGxvYWRTdHJpY3RWZXJzaW9uQ2hlY2tGYWxsYmFjayhcImRlZmF1bHRcIiwgXCJhbnRkXCIsIFsxLDQsMjMsMF0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gUHJvbWlzZS5hbGwoW19fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FudGRfZXNfaW5kZXhfanNcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3QtZG9tX3JlYWN0LWRvbVwiKV0pLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIGFudGQgKi8gXCIuL25vZGVfbW9kdWxlcy9hbnRkL2VzL2luZGV4LmpzXCIpOyB9OyB9KTsgfSk7IH0sXG5cdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9yZWFjdC1yb3V0ZXItZG9tL3JlYWN0LXJvdXRlci1kb21cIjogZnVuY3Rpb24oKSB7IHJldHVybiBsb2FkU3RyaWN0VmVyc2lvbkNoZWNrRmFsbGJhY2soXCJkZWZhdWx0XCIsIFwicmVhY3Qtcm91dGVyLWRvbVwiLCBbMSw2LDQsMV0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3Qtcm91dGVyLWRvbV9kaXN0X2luZGV4X2pzXCIpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIHJlYWN0LXJvdXRlci1kb20gKi8gXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2Rpc3QvaW5kZXguanNcIik7IH07IH0pOyB9KTsgfSxcblx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L2RvYy1jb29raWVzL2RvYy1jb29raWVzXCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbG9hZFN0cmljdFZlcnNpb25DaGVja0ZhbGxiYWNrKFwiZGVmYXVsdFwiLCBcImRvYy1jb29raWVzXCIsIFsxLDEsMSwwXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJub2RlX21vZHVsZXNfZG9jLWNvb2tpZXNfY29va2llc19qc1wiKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkb2MtY29va2llcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2RvYy1jb29raWVzL2Nvb2tpZXMuanNcIik7IH07IH0pOyB9KTsgfSxcblx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L2p3dC1kZWNvZGUvand0LWRlY29kZVwiOiBmdW5jdGlvbigpIHsgcmV0dXJuIGxvYWRTdHJpY3RWZXJzaW9uQ2hlY2tGYWxsYmFjayhcImRlZmF1bHRcIiwgXCJqd3QtZGVjb2RlXCIsIFsxLDMsMSwyXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJub2RlX21vZHVsZXNfand0LWRlY29kZV9idWlsZF9qd3QtZGVjb2RlX2VzbV9qc1wiKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBqd3QtZGVjb2RlICovIFwiLi9ub2RlX21vZHVsZXMvand0LWRlY29kZS9idWlsZC9qd3QtZGVjb2RlLmVzbS5qc1wiKTsgfTsgfSk7IH0pOyB9LFxuXHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvcmVhY3QtcmVkdXgvcmVhY3QtcmVkdXhcIjogZnVuY3Rpb24oKSB7IHJldHVybiBsb2FkU3RyaWN0VmVyc2lvbkNoZWNrRmFsbGJhY2soXCJkZWZhdWx0XCIsIFwicmVhY3QtcmVkdXhcIiwgWzEsOCwwLDJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIFByb21pc2UuYWxsKFtfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19yZWFjdC1yZWR1eF9lc19pbmRleF9qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdC1kb21fcmVhY3QtZG9tXCIpXSkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgcmVhY3QtcmVkdXggKi8gXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9pbmRleC5qc1wiKTsgfTsgfSk7IH0pOyB9LFxuXHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvQHJlZHV4anMvdG9vbGtpdC9AcmVkdXhqcy90b29sa2l0XCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbG9hZFN0cmljdFZlcnNpb25DaGVja0ZhbGxiYWNrKFwiZGVmYXVsdFwiLCBcIkByZWR1eGpzL3Rvb2xraXRcIiwgWzEsMSw4LDVdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlZHV4anNfdG9vbGtpdF9kaXN0X3JlZHV4LXRvb2xraXRfZXNtX2pzXCIpLnRoZW4oZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIEByZWR1eGpzL3Rvb2xraXQgKi8gXCIuL25vZGVfbW9kdWxlcy9AcmVkdXhqcy90b29sa2l0L2Rpc3QvcmVkdXgtdG9vbGtpdC5lc20uanNcIik7IH07IH0pOyB9KTsgfSxcblx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L2F4aW9zL2F4aW9zXCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbG9hZFN0cmljdFZlcnNpb25DaGVja0ZhbGxiYWNrKFwiZGVmYXVsdFwiLCBcImF4aW9zXCIsIFsxLDEsMiwwXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19heGlvc19pbmRleF9qc1wiKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBheGlvcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzXCIpOyB9OyB9KTsgfSk7IH1cbn07XG4vLyBubyBjb25zdW1lcyBpbiBpbml0aWFsIGNodW5rc1xudmFyIGNodW5rTWFwcGluZyA9IHtcblx0XCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3JlYWN0X3JlYWN0XCI6IFtcblx0XHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvcmVhY3QvcmVhY3RcIlxuXHRdLFxuXHRcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3QtZG9tX3JlYWN0LWRvbVwiOiBbXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3JlYWN0LWRvbS9yZWFjdC1kb21cIlxuXHRdLFxuXHRcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfbW9tZW50X21vbWVudFwiOiBbXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L21vbWVudC9tb21lbnRcIlxuXHRdLFxuXHRcInNyY19jb21wb25lbnRzX3NpZGViYXJfU3ViTWVudV9qc1wiOiBbXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L2FudGQvYW50ZFwiLFxuXHRcdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9yZWFjdC1yb3V0ZXItZG9tL3JlYWN0LXJvdXRlci1kb21cIixcblx0XHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvZG9jLWNvb2tpZXMvZG9jLWNvb2tpZXNcIixcblx0XHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvand0LWRlY29kZS9qd3QtZGVjb2RlXCIsXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3JlYWN0LXJlZHV4L3JlYWN0LXJlZHV4XCJcblx0XSxcblx0XCJzcmNfQXBwX2pzXCI6IFtcblx0XHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvQHJlZHV4anMvdG9vbGtpdC9AcmVkdXhqcy90b29sa2l0XCIsXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L2F4aW9zL2F4aW9zXCJcblx0XVxufTtcbl9fd2VicGFja19yZXF1aXJlX18uZi5jb25zdW1lcyA9IGZ1bmN0aW9uKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhjaHVua01hcHBpbmcsIGNodW5rSWQpKSB7XG5cdFx0Y2h1bmtNYXBwaW5nW2NodW5rSWRdLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRNb2R1bGVzLCBpZCkpIHJldHVybiBwcm9taXNlcy5wdXNoKGluc3RhbGxlZE1vZHVsZXNbaWRdKTtcblx0XHRcdHZhciBvbkZhY3RvcnkgPSBmdW5jdGlvbihmYWN0b3J5KSB7XG5cdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbaWRdID0gMDtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW2lkXSA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRcdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbaWRdO1xuXHRcdFx0XHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0dmFyIG9uRXJyb3IgPSBmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1tpZF07XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVtpZF0gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0XHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW2lkXTtcblx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciBwcm9taXNlID0gbW9kdWxlVG9IYW5kbGVyTWFwcGluZ1tpZF0oKTtcblx0XHRcdFx0aWYocHJvbWlzZS50aGVuKSB7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRNb2R1bGVzW2lkXSA9IHByb21pc2UudGhlbihvbkZhY3RvcnkpWydjYXRjaCddKG9uRXJyb3IpKTtcblx0XHRcdFx0fSBlbHNlIG9uRmFjdG9yeShwcm9taXNlKTtcblx0XHRcdH0gY2F0Y2goZSkgeyBvbkVycm9yKGUpOyB9XG5cdFx0fSk7XG5cdH1cbn0iLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJSZW1vdGVQcm9maWxlXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gZnVuY3Rpb24oY2h1bmtJZCwgcHJvbWlzZXMpIHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZighL153ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0XyhyZWFjdChcXC1kb21fcmVhY3RcXC1kb218X3JlYWN0KXxtb21lbnRfbW9tZW50KSQvLnRlc3QoY2h1bmtJZCkpIHtcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHsgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07IH0pO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9IGVsc2UgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tpZF0gIT09IDA7IH0pKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3Byb2ZpbGVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rcHJvZmlsZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwid2VicGFjay9jb250YWluZXIvZW50cnkvUmVtb3RlUHJvZmlsZVwiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==