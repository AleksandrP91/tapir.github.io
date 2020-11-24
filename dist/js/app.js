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
/******/ 	__webpack_require__.p = "../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./js/menu.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valid */ "./js/valid.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select */ "./js/select.js");



window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  Object(_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_valid__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_select__WEBPACK_IMPORTED_MODULE_2__["default"])();
});


/***/ }),

/***/ "./js/menu.js":
/*!********************!*\
  !*** ./js/menu.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burgerMenu = function () {
  const menu = document.querySelector('.burger__menu');
  const menuBtn = document.querySelector('.burger__menu-button');
  // const menuNav = document.querySelector('.burger__menu-nav');

  menuBtn.addEventListener('click', function (event) {
    event.preventDefault();
    menuBtn.classList.toggle('burger__menu-active');
    menu.classList.toggle('menu__active');
  });
};
/* harmony default export */ __webpack_exports__["default"] = (burgerMenu);


/***/ }),

/***/ "./js/select.js":
/*!**********************!*\
  !*** ./js/select.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const selected = function () {
  const month = document.querySelector('.month');
  const year = document.querySelector('.year');
  const iconMonth = document.querySelector('.select__icon-month');
  const iconYear = document.querySelector('.select__icon-year');
  const selectItemMonth = document.querySelectorAll('.select__item-month');
  const selectItemYear = document.querySelectorAll('.select__item-year');

  selectItemYear.forEach(function (item) {
    item.addEventListener('click', function () {
      let text = this.innerText;
      let currentText = this.closest('.select').querySelector('.select__current-year');
      currentText.innerText = text;
      year.classList.remove('is-active');
      iconYear.classList.remove('icon-active');
    });
  });

  selectItemMonth.forEach(function (item) {
    item.addEventListener('click', function () {
      let text = this.innerText;
      let currentText = this.closest('.select').querySelector('.select__current-month');
      currentText.innerText = text;
      month.classList.remove('is-active');
      iconMonth.classList.remove('icon-active');
    });
  });

  iconMonth.addEventListener('click', function () {
    month.classList.toggle('is-active');
    iconMonth.classList.toggle('icon-active');
  });

  iconYear.addEventListener('click', function () {
    year.classList.toggle('is-active');
    iconYear.classList.toggle('icon-active');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (selected);


/***/ }),

/***/ "./js/valid.js":
/*!*********************!*\
  !*** ./js/valid.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const validation = function () {
  const inputs = document.querySelectorAll('input[data-rule]');

  for (let input of inputs) {
    // на input вешаем событие по потери фокуса выполнить проверку
    input.addEventListener('blur', function () {
      let rule = this.dataset.rule;
      // содержимое input
      let value = this.value;
      let check;

      switch (rule) {
        case 'number':
          let length = value.length;
          let from = +this.dataset.from;
          let to = +this.dataset.to;
          check = length >= from && length <= to;
          break;
        case 'text':
          check = /^[a-zA-Z][a-zA-Z-_\.]{3,20}$/.test(value);
          break;
      }
      this.classList.remove('invalid-form');
      this.classList.remove('valid-form');
      if (check) {
        this.classList.add('valid-form');
      } else {
        this.classList.add('invalid-form');
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (validation);


/***/ }),

/***/ "./scss/app.scss":
/*!***********************!*\
  !*** ./scss/app.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./js/app.js ./scss/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/app.js */"./js/app.js");
module.exports = __webpack_require__(/*! ./scss/app.scss */"./scss/app.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL2pzL3ZhbGlkLmpzIiwid2VicGFjazovLy8uL3Njc3MvYXBwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFnQztBQUNDO0FBQ0Q7QUFDaEM7QUFDQTtBQUNBLEVBQUUscURBQVU7QUFDWixFQUFFLHNEQUFVO0FBQ1osRUFBRSx1REFBUTtBQUNWLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNSRDtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ2UseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1gxQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFZSx1RUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdkN4QjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxLQUFLO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRWUseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7O0FDakMxQix1QyIsImZpbGUiOiJqcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4uL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgYnVyZ2VyTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi92YWxpZCc7XG5pbXBvcnQgc2VsZWN0ZWQgZnJvbSAnLi9zZWxlY3QnO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgYnVyZ2VyTWVudSgpO1xuICB2YWxpZGF0aW9uKCk7XG4gIHNlbGVjdGVkKCk7XG59KTtcbiIsImNvbnN0IGJ1cmdlck1lbnUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyX19tZW51Jyk7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyX19tZW51LWJ1dHRvbicpO1xuICAvLyBjb25zdCBtZW51TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcl9fbWVudS1uYXYnKTtcblxuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBtZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoJ2J1cmdlcl9fbWVudS1hY3RpdmUnKTtcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfX2FjdGl2ZScpO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBidXJnZXJNZW51O1xuIiwiY29uc3Qgc2VsZWN0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbnRoJyk7XG4gIGNvbnN0IHllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWVhcicpO1xuICBjb25zdCBpY29uTW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19pY29uLW1vbnRoJyk7XG4gIGNvbnN0IGljb25ZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faWNvbi15ZWFyJyk7XG4gIGNvbnN0IHNlbGVjdEl0ZW1Nb250aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX2l0ZW0tbW9udGgnKTtcbiAgY29uc3Qgc2VsZWN0SXRlbVllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19pdGVtLXllYXInKTtcblxuICBzZWxlY3RJdGVtWWVhci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCB0ZXh0ID0gdGhpcy5pbm5lclRleHQ7XG4gICAgICBsZXQgY3VycmVudFRleHQgPSB0aGlzLmNsb3Nlc3QoJy5zZWxlY3QnKS5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19jdXJyZW50LXllYXInKTtcbiAgICAgIGN1cnJlbnRUZXh0LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICB5ZWFyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgaWNvblllYXIuY2xhc3NMaXN0LnJlbW92ZSgnaWNvbi1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgc2VsZWN0SXRlbU1vbnRoLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHRleHQgPSB0aGlzLmlubmVyVGV4dDtcbiAgICAgIGxldCBjdXJyZW50VGV4dCA9IHRoaXMuY2xvc2VzdCgnLnNlbGVjdCcpLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2N1cnJlbnQtbW9udGgnKTtcbiAgICAgIGN1cnJlbnRUZXh0LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICBtb250aC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgIGljb25Nb250aC5jbGFzc0xpc3QucmVtb3ZlKCdpY29uLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9KTtcblxuICBpY29uTW9udGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgbW9udGguY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgaWNvbk1vbnRoLmNsYXNzTGlzdC50b2dnbGUoJ2ljb24tYWN0aXZlJyk7XG4gIH0pO1xuXG4gIGljb25ZZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHllYXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgaWNvblllYXIuY2xhc3NMaXN0LnRvZ2dsZSgnaWNvbi1hY3RpdmUnKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3RlZDtcbiIsImNvbnN0IHZhbGlkYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W2RhdGEtcnVsZV0nKTtcblxuICBmb3IgKGxldCBpbnB1dCBvZiBpbnB1dHMpIHtcbiAgICAvLyDQvdCwIGlucHV0INCy0LXRiNCw0LXQvCDRgdC+0LHRi9GC0LjQtSDQv9C+INC/0L7RgtC10YDQuCDRhNC+0LrRg9GB0LAg0LLRi9C/0L7Qu9C90LjRgtGMINC/0YDQvtCy0LXRgNC60YNcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHJ1bGUgPSB0aGlzLmRhdGFzZXQucnVsZTtcbiAgICAgIC8vINGB0L7QtNC10YDQttC40LzQvtC1IGlucHV0XG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgbGV0IGNoZWNrO1xuXG4gICAgICBzd2l0Y2ggKHJ1bGUpIHtcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICBsZXQgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgIGxldCBmcm9tID0gK3RoaXMuZGF0YXNldC5mcm9tO1xuICAgICAgICAgIGxldCB0byA9ICt0aGlzLmRhdGFzZXQudG87XG4gICAgICAgICAgY2hlY2sgPSBsZW5ndGggPj0gZnJvbSAmJiBsZW5ndGggPD0gdG87XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgIGNoZWNrID0gL15bYS16QS1aXVthLXpBLVotX1xcLl17MywyMH0kLy50ZXN0KHZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1mb3JtJyk7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkLWZvcm0nKTtcbiAgICAgIGlmIChjaGVjaykge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkLWZvcm0nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1mb3JtJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRpb247XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9