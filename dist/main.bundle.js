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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.DEV_ENV = true;

window.clog = {
    consoleColor: {
        "log": "color:#4682B4; font-weight: bold;",
        "hilight": "background: #FFFF00; color: black; font-size: 1.125em; font-weight:bold; line-height: 1.5; display: block; padding: 5px 10px",
        "ok": "color:#fff; background-color:#32CD32; font-weight: bold;line-height:3; letter-spacing: 0.25em; display: block",
        "bad": "color:#fff; background-color:#ff0033; font-weight: bold;line-height:3; letter-spacing: 0.25em; display: block",
        "heading": "display: block; background-color: #222; color: #fff; text-align:center; padding: 7px 5px; font-size:1.5em; font-weight: bold; letter-spacing: 0.2em"
    },
    log: function log() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var logs = this.destructArgs(args);
        if (!logs || !window.DEV_ENV) {
            return;
        }
        var comment = logs.comment;
        var values = logs.values;
        console.log("%c" + comment + "%c" + values, this.consoleColor.log, "text-decoration: underline");
    },
    hilight: function hilight() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        var logs = this.destructArgs(args);
        if (!logs || !window.DEV_ENV) {
            return;
        }
        var comment = logs.comment;
        var values = logs.values;
        console.log("%c " + comment + ":- " + values, this.consoleColor.hilight);
    },
    ok: function ok() {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        var logs = this.destructArgs(args);
        if (!logs || !window.DEV_ENV) {
            return;
        }
        var comment = logs.comment;
        var values = logs.values;
        console.log("%c " + comment + ":- " + values, this.consoleColor.ok);
    },
    bad: function bad() {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
        }

        var logs = this.destructArgs(args);
        if (!logs || !window.DEV_ENV) {
            return;
        }
        var comment = logs.comment;
        var values = logs.values;
    },
    grp: function grp(heading) {
        if (!window.DEV_ENV) {
            return;
        }
        console.group("%c " + heading, this.consoleColor.heading);
    },
    grpEnd: function grpEnd(heading) {
        console.groupEnd(heading);
    },
    destructArgs: function destructArgs() {
        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
        }

        if (args.length <= 0) {
            return false;
        }
        var comment = args[0][0];
        var values = args[0].slice(1).join(" ");
        return {
            comment: comment,
            values: values
        };
    }
};

clog.log("Testing:-", "This", "output");
clog.hilight("HIlighted text", "and the values", "the can go with it");
clog.ok("Comment for good all green");
clog.grp("Group start");
clog.bad("something went wrong");
clog.ok("everything good");
clog.grpEnd();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkRFVl9FTlYiLCJjbG9nIiwiY29uc29sZUNvbG9yIiwibG9nIiwiYXJncyIsImxvZ3MiLCJkZXN0cnVjdEFyZ3MiLCJjb21tZW50IiwidmFsdWVzIiwiY29uc29sZSIsImhpbGlnaHQiLCJvayIsImJhZCIsImdycCIsImhlYWRpbmciLCJncm91cCIsImdycEVuZCIsImdyb3VwRW5kIiwibGVuZ3RoIiwic2xpY2UiLCJqb2luIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkFBLE9BQU9DLE9BQVAsR0FBaUIsSUFBakI7O0FBRUFELE9BQU9FLElBQVAsR0FBYztBQUNWQyxrQkFBYztBQUNWLGVBQU8sbUNBREc7QUFFVixtQkFBVyw4SEFGRDtBQUdWLGNBQU0s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LEVBQXNCLE1BQXRCLEVBQThCLFFBQTlCO0FBQ0FGLEtBQUtTLE9BQUwsQ0FBYSxnQkFBYixFQUErQixnQkFBL0IsRUFBaUQsb0JBQWpEO0FBQ0FULEtBQUtVLEVBQUwsQ0FBUSw0QkFBUjtBQUNBVixLQUFLWSxHQUFMLENBQVMsYUFBVDtBQUNBWixLQUFLVyxHQUFMLENBQVMsc0JBQVQ7QUFDQVgsS0FBS1UsRUFBTCxDQUFRLGlCQUFSO0FBQ0FWLEtBQUtlLE1BQUwsRyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwid2luZG93LkRFVl9FTlYgPSB0cnVlO1xyXG5cclxud2luZG93LmNsb2cgPSB7XHJcbiAgICBjb25zb2xlQ29sb3I6IHtcclxuICAgICAgICBcImxvZ1wiOiBcImNvbG9yOiM0NjgyQjQ7IGZvbnQtd2VpZ2h0OiBib2xkO1wiLFxyXG4gICAgICAgIFwiaGlsaWdodFwiOiBcImJhY2tncm91bmQ6ICNGRkZGMDA7IGNvbG9yOiBibGFjazsgZm9udC1zaXplOiAxLjEyNWVtOyBmb250LXdlaWdodDpib2xkOyBsaW5lLWhlaWdodDogMS41OyBkaXNwbGF5OiBibG9jazsgcGFkZGluZzogNXB4IDEwcHhcIixcclxuICAgICAgICBcIm9rXCI6IFwiY29sb3I6I2ZmZjsgYmFja2dyb3VuZC1jb2xvcjojMzJDRDMyOyBmb250LXdlaWdodDogYm9sZDtsaW5lLWhlaWdodDozOyBsZXR0ZXItc3BhY2luZzogMC4yNWVtOyBkaXNwbGF5OiBibG9ja1wiLFxyXG4gICAgICAgIFwiYmFkXCI6IFwiY29sb3I6I2ZmZjsgYmFja2dyb3VuZC1jb2xvcjojZmYwMDMzOyBmb250LXdlaWdodDogYm9sZDtsaW5lLWhlaWdodDozOyBsZXR0ZXItc3BhY2luZzogMC4yNWVtOyBkaXNwbGF5OiBibG9ja1wiLFxyXG4gICAgICAgIFwiaGVhZGluZ1wiOiBcImRpc3BsYXk6IGJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyOyBjb2xvcjogI2ZmZjsgdGV4dC1hbGlnbjpjZW50ZXI7IHBhZGRpbmc6IDdweCA1cHg7IGZvbnQtc2l6ZToxLjVlbTsgZm9udC13ZWlnaHQ6IGJvbGQ7IGxldHRlci1zcGFjaW5nOiAwLjJlbVwiXHJcbiAgICB9LFxyXG4gICAgbG9nKC4uLmFyZ3MpIHtcclxuICAgICAgICB2YXIgbG9ncyA9IHRoaXMuZGVzdHJ1Y3RBcmdzKGFyZ3MpO1xyXG4gICAgICAgIGlmICghbG9ncyB8fCAhd2luZG93LkRFVl9FTlYpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29tbWVudCA9IGxvZ3MuY29tbWVudDtcclxuICAgICAgICB2YXIgdmFsdWVzID0gbG9ncy52YWx1ZXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgY29tbWVudCArIFwiJWNcIiArIHZhbHVlcywgdGhpcy5jb25zb2xlQ29sb3IubG9nLCBcInRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXCIpO1xyXG4gICAgfSxcclxuICAgIGhpbGlnaHQoLi4uYXJncykge1xyXG4gICAgICAgIHZhciBsb2dzID0gdGhpcy5kZXN0cnVjdEFyZ3MoYXJncyk7XHJcbiAgICAgICAgaWYgKCFsb2dzIHx8ICF3aW5kb3cuREVWX0VOVikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb21tZW50ID0gbG9ncy5jb21tZW50O1xyXG4gICAgICAgIHZhciB2YWx1ZXMgPSBsb2dzLnZhbHVlcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiVjIFwiICsgY29tbWVudCArIFwiOi0gXCIgKyB2YWx1ZXMsIHRoaXMuY29uc29sZUNvbG9yLmhpbGlnaHQpO1xyXG4gICAgfSxcclxuICAgIG9rKC4uLmFyZ3MpIHtcclxuICAgICAgICB2YXIgbG9ncyA9IHRoaXMuZGVzdHJ1Y3RBcmdzKGFyZ3MpO1xyXG4gICAgICAgIGlmICghbG9ncyB8fCAhd2luZG93LkRFVl9FTlYpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29tbWVudCA9IGxvZ3MuY29tbWVudDtcclxuICAgICAgICB2YXIgdmFsdWVzID0gbG9ncy52YWx1ZXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIlYyBcIiArIGNvbW1lbnQgKyBcIjotIFwiICsgdmFsdWVzLCB0aGlzLmNvbnNvbGVDb2xvci5vayk7XHJcbiAgICB9LFxyXG4gICAgYmFkKC4uLmFyZ3MpIHtcclxuICAgICAgICB2YXIgbG9ncyA9IHRoaXMuZGVzdHJ1Y3RBcmdzKGFyZ3MpO1xyXG4gICAgICAgIGlmICghbG9ncyB8fCAhd2luZG93LkRFVl9FTlYpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29tbWVudCA9IGxvZ3MuY29tbWVudDtcclxuICAgICAgICB2YXIgdmFsdWVzID0gbG9ncy52YWx1ZXM7XHJcbiAgICB9LFxyXG4gICAgZ3JwKGhlYWRpbmcpIHtcclxuICAgICAgICBpZiAoIXdpbmRvdy5ERVZfRU5WKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5ncm91cChcIiVjIFwiICsgaGVhZGluZywgdGhpcy5jb25zb2xlQ29sb3IuaGVhZGluZyApO1xyXG4gICAgfSxcclxuICAgIGdycEVuZChoZWFkaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5ncm91cEVuZChoZWFkaW5nKTtcclxuICAgIH0sXHJcbiAgICBkZXN0cnVjdEFyZ3MoLi4uYXJncykge1xyXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbW1lbnQgPSBhcmdzWzBdWzBdO1xyXG4gICAgICAgIHZhciB2YWx1ZXMgPSBhcmdzWzBdLnNsaWNlKDEpLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnQ6IGNvbW1lbnQsXHJcbiAgICAgICAgICAgIHZhbHVlczogdmFsdWVzXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmNsb2cubG9nKFwiVGVzdGluZzotXCIsIFwiVGhpc1wiLCBcIm91dHB1dFwiKTtcclxuY2xvZy5oaWxpZ2h0KFwiSElsaWdodGVkIHRleHRcIiwgXCJhbmQgdGhlIHZhbHVlc1wiLCBcInRoZSBjYW4gZ28gd2l0aCBpdFwiKTtcclxuY2xvZy5vayhcIkNvbW1lbnQgZm9yIGdvb2QgYWxsIGdyZWVuXCIpO1xyXG5jbG9nLmdycChcIkdyb3VwIHN0YXJ0XCIpO1xyXG5jbG9nLmJhZChcInNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG5jbG9nLm9rKFwiZXZlcnl0aGluZyBnb29kXCIpO1xyXG5jbG9nLmdycEVuZCgpOyJdLCJzb3VyY2VSb290IjoiIn0=