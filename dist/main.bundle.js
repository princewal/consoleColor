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
        "log": "color:#E48486; font-weight: 700; font-size: 1.125em; text-decoration: underline",
        "hilight": "background: #FFFF00; color: black; font-size: 1.125em; font-weight:bold; line-height: 1.5; display: block; padding: 3px 5px",
        "ok": "color:#fff; background-color:#32CD32; font-weight: bold;line-height:2; letter-spacing: 0.25em; display: block",
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
        var all = comment;
        console.log("%c" + comment + ' ' + values, this.consoleColor.log);
    },
    comment: function comment() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        var logs = this.destructArgs(args);
        if (!logs || !window.DEV_ENV) {
            return;
        }
        var comment = logs.comment;
        var values = logs.values;
        console.log("%c" + comment + "%c" + values, this.consoleColor.log);
    },
    hilight: function hilight() {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
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
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
        }

        var logs = this.destructArgs(args);
        if (!logs || !window.DEV_ENV) {
            return;
        }
        var comment = logs.comment;
        var values = logs.values;
        console.log("%c " + comment + ":- " + values, this.consoleColor.ok);
    },
    good: function good() {
        this.ok.apply(this, arguments);
    },
    bad: function bad() {
        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
        }

        var logs = this.destructArgs(args);
        if (!logs || !window.DEV_ENV) {
            return;
        }
        var comment = logs.comment;
        var values = logs.values;
        console.log("%c " + comment + ":- " + values, this.consoleColor.bad);
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
        for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
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
clog.ok("Comment for ok all green");
clog.grp("Group start");
clog.bad("something went wrong");
clog.grpEnd();
clog.good("This is good test");
clog.comment("How does this work", "comma seperated", "values");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkRFVl9FTlYiLCJjbG9nIiwiY29uc29sZUNvbG9yIiwibG9nIiwiYXJncyIsImxvZ3MiLCJkZXN0cnVjdEFyZ3MiLCJjb21tZW50IiwidmFsdWVzIiwiYWxsIiwiY29uc29sZSIsImhpbGlnaHQiLCJvayIsImdvb2QiLCJiYWQiLCJncnAiLCJoZWFkaW5nIiwiZ3JvdXAiLCJncnBFbmQiLCJncm91cEVuZCIsImxlbmd0aCIsInNsaWNlIiwiam9pbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBQSxPQUFPQyxPQUFQLEdBQWlCLElBQWpCOztBQUVBRCxPQUFPRSxJQUFQLEdBQWM7QUFDVkMsa0JBQWM7QUFDVixlQUFPLGlGQURHO0FBRVYsbUJBQVcsNkhB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Z0JBQVFPLEtBQVIsQ0FBYyxRQUFRRCxPQUF0QixFQUErQixLQUFLZCxZQUFMLENBQWtCYyxPQUFqRDtBQUNILEtBOURTO0FBK0RWRSxVQS9EVSxrQkErREhGLE9BL0RHLEVBK0RNO0FBQ1pOLGdCQUFRUyxRQUFSLENBQWlCSCxPQUFqQjtBQUNILEtBakVTO0FBa0VWVixnQkFsRVUsMEJBa0VZO0FBQUEsMkNBQU5GLElBQU07QUFBTkEsZ0JBQU07QUFBQTs7QUFDbEIsWUFBSUEsS0FBS2dCLE1BQUwsSUFBZSxDQUFuQixFQUFzQjtBQUNsQixtQkFBTyxLQUFQO0FBQ0g7QUFDRCxZQUFJYixVQUFVSCxLQUFLLENBQUwsRUFBUSxDQUFSLENBQWQ7QUFDQSxZQUFJSSxTQUFTSixLQUFLLENBQUwsRUFBUWlCLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxJQUFqQixDQUFzQixHQUF0QixDQUFiO0FBQ0EsZUFBTztBQUNIZixxQkFBU0EsT0FETjtBQUVIQyxvQkFBUUE7QUFGTCxTQUFQO0FBS0g7QUE3RVMsQ0FBZDs7QUFnRkFQLEtBQUtFLEdBQUwsQ0FBUyxXQUFULEVBQXNCLE1BQXRCLEVBQThCLFFBQTlCO0FBQ0FGLEtBQUtVLE9BQUwsQ0FBYSxnQkFBYixFQUErQixnQkFBL0IsRUFBaUQsb0JBQWpEO0FBQ0FWLEtBQUtXLEVBQUwsQ0FBUSwwQkFBUjtBQUNBWCxLQUFLYyxHQUFMLENBQVMsYUFBVDtBQUNBZCxLQUFLYSxHQUFMLENBQVMsc0JBQVQ7QUFDQWIsS0FBS2lCLE1BQUw7QUFDQWpCLEtBQUtZLElBQUwsQ0FBVSxtQkFBVjtBQUNBWixLQUFLTSxPQUFMLENBQWEsb0JBQWIsRUFBbUMsaUJBQW5DLEVBQXNELFFBQXRELEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIndpbmRvdy5ERVZfRU5WID0gdHJ1ZTtcclxuXHJcbndpbmRvdy5jbG9nID0ge1xyXG4gICAgY29uc29sZUNvbG9yOiB7XHJcbiAgICAgICAgXCJsb2dcIjogXCJjb2xvcjojRTQ4NDg2OyBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDEuMTI1ZW07IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXCIsXHJcbiAgICAgICAgXCJoaWxpZ2h0XCI6IFwiYmFja2dyb3VuZDogI0ZGRkYwMDsgY29sb3I6IGJsYWNrOyBmb250LXNpemU6IDEuMTI1ZW07IGZvbnQtd2VpZ2h0OmJvbGQ7IGxpbmUtaGVpZ2h0OiAxLjU7IGRpc3BsYXk6IGJsb2NrOyBwYWRkaW5nOiAzcHggNXB4XCIsXHJcbiAgICAgICAgXCJva1wiOiBcImNvbG9yOiNmZmY7IGJhY2tncm91bmQtY29sb3I6IzMyQ0QzMjsgZm9udC13ZWlnaHQ6IGJvbGQ7bGluZS1oZWlnaHQ6MjsgbGV0dGVyLXNwYWNpbmc6IDAuMjVlbTsgZGlzcGxheTogYmxvY2tcIixcclxuICAgICAgICBcImJhZFwiOiBcImNvbG9yOiNmZmY7IGJhY2tncm91bmQtY29sb3I6I2ZmMDAzMzsgZm9udC13ZWlnaHQ6IGJvbGQ7bGluZS1oZWlnaHQ6MzsgbGV0dGVyLXNwYWNpbmc6IDAuMjVlbTsgZGlzcGxheTogYmxvY2tcIixcclxuICAgICAgICBcImhlYWRpbmdcIjogXCJkaXNwbGF5OiBibG9jazsgYmFja2dyb3VuZC1jb2xvcjogIzIyMjsgY29sb3I6ICNmZmY7IHRleHQtYWxpZ246Y2VudGVyOyBwYWRkaW5nOiA3cHggNXB4OyBmb250LXNpemU6MS41ZW07IGZvbnQtd2VpZ2h0OiBib2xkOyBsZXR0ZXItc3BhY2luZzogMC4yZW1cIlxyXG4gICAgfSxcclxuICAgIGxvZyguLi5hcmdzKSB7XHJcbiAgICAgICAgdmFyIGxvZ3MgPSB0aGlzLmRlc3RydWN0QXJncyhhcmdzKTtcclxuICAgICAgICBpZiAoIWxvZ3MgfHwgIXdpbmRvdy5ERVZfRU5WKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbW1lbnQgPSBsb2dzLmNvbW1lbnQ7XHJcbiAgICAgICAgdmFyIHZhbHVlcyA9IGxvZ3MudmFsdWVzO1xyXG4gICAgICAgIHZhciBhbGwgPSBjb21tZW50XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgY29tbWVudCArICcgJyArIHZhbHVlcywgIHRoaXMuY29uc29sZUNvbG9yLmxvZyApO1xyXG4gICAgfSxcclxuICAgIGNvbW1lbnQoLi4uYXJncykge1xyXG4gICAgICAgIHZhciBsb2dzID0gdGhpcy5kZXN0cnVjdEFyZ3MoYXJncyk7XHJcbiAgICAgICAgaWYgKCFsb2dzIHx8ICF3aW5kb3cuREVWX0VOVikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb21tZW50ID0gbG9ncy5jb21tZW50O1xyXG4gICAgICAgIHZhciB2YWx1ZXMgPSBsb2dzLnZhbHVlcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiVjXCIgKyBjb21tZW50ICsgXCIlY1wiICsgdmFsdWVzLCB0aGlzLmNvbnNvbGVDb2xvci5sb2cpO1xyXG4gICAgfSxcclxuICAgIGhpbGlnaHQoLi4uYXJncykge1xyXG4gICAgICAgIHZhciBsb2dzID0gdGhpcy5kZXN0cnVjdEFyZ3MoYXJncyk7XHJcbiAgICAgICAgaWYgKCFsb2dzIHx8ICF3aW5kb3cuREVWX0VOVikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb21tZW50ID0gbG9ncy5jb21tZW50O1xyXG4gICAgICAgIHZhciB2YWx1ZXMgPSBsb2dzLnZhbHVlcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiVjIFwiICsgY29tbWVudCArIFwiOi0gXCIgKyB2YWx1ZXMsIHRoaXMuY29uc29sZUNvbG9yLmhpbGlnaHQpO1xyXG4gICAgfSxcclxuICAgIG9rKC4uLmFyZ3MpIHtcclxuICAgICAgICB2YXIgbG9ncyA9IHRoaXMuZGVzdHJ1Y3RBcmdzKGFyZ3MpO1xyXG4gICAgICAgIGlmICghbG9ncyB8fCAhd2luZG93LkRFVl9FTlYpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29tbWVudCA9IGxvZ3MuY29tbWVudDtcclxuICAgICAgICB2YXIgdmFsdWVzID0gbG9ncy52YWx1ZXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIlYyBcIiArIGNvbW1lbnQgKyBcIjotIFwiICsgdmFsdWVzLCB0aGlzLmNvbnNvbGVDb2xvci5vayk7XHJcbiAgICB9LFxyXG4gICAgZ29vZCguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5vayguLi5hcmdzKTtcclxuICAgIH0sXHJcbiAgICBiYWQoLi4uYXJncykge1xyXG4gICAgICAgIHZhciBsb2dzID0gdGhpcy5kZXN0cnVjdEFyZ3MoYXJncyk7XHJcbiAgICAgICAgaWYgKCFsb2dzIHx8ICF3aW5kb3cuREVWX0VOVikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb21tZW50ID0gbG9ncy5jb21tZW50O1xyXG4gICAgICAgIHZhciB2YWx1ZXMgPSBsb2dzLnZhbHVlcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiVjIFwiICsgY29tbWVudCArIFwiOi0gXCIgKyB2YWx1ZXMsIHRoaXMuY29uc29sZUNvbG9yLmJhZCk7XHJcbiAgICB9LFxyXG4gICAgZ3JwKGhlYWRpbmcpIHtcclxuICAgICAgICBpZiAoIXdpbmRvdy5ERVZfRU5WKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5ncm91cChcIiVjIFwiICsgaGVhZGluZywgdGhpcy5jb25zb2xlQ29sb3IuaGVhZGluZyApO1xyXG4gICAgfSxcclxuICAgIGdycEVuZChoZWFkaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5ncm91cEVuZChoZWFkaW5nKTtcclxuICAgIH0sXHJcbiAgICBkZXN0cnVjdEFyZ3MoLi4uYXJncykge1xyXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbW1lbnQgPSBhcmdzWzBdWzBdO1xyXG4gICAgICAgIHZhciB2YWx1ZXMgPSBhcmdzWzBdLnNsaWNlKDEpLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnQ6IGNvbW1lbnQsXHJcbiAgICAgICAgICAgIHZhbHVlczogdmFsdWVzXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmNsb2cubG9nKFwiVGVzdGluZzotXCIsIFwiVGhpc1wiLCBcIm91dHB1dFwiKTtcclxuY2xvZy5oaWxpZ2h0KFwiSElsaWdodGVkIHRleHRcIiwgXCJhbmQgdGhlIHZhbHVlc1wiLCBcInRoZSBjYW4gZ28gd2l0aCBpdFwiKTtcclxuY2xvZy5vayhcIkNvbW1lbnQgZm9yIG9rIGFsbCBncmVlblwiKTtcclxuY2xvZy5ncnAoXCJHcm91cCBzdGFydFwiKTtcclxuY2xvZy5iYWQoXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuY2xvZy5ncnBFbmQoKTtcclxuY2xvZy5nb29kKFwiVGhpcyBpcyBnb29kIHRlc3RcIik7XHJcbmNsb2cuY29tbWVudChcIkhvdyBkb2VzIHRoaXMgd29ya1wiLCBcImNvbW1hIHNlcGVyYXRlZFwiLCBcInZhbHVlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9