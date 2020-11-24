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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL2pzL3ZhbGlkLmpzIiwid2VicGFjazovLy8uL3Njc3MvYXBwLnNjc3M/NTA4YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQWdDO0FBQ0M7QUFDRDtBQUNoQztBQUNBO0FBQ0EsRUFBRSxxREFBVTtBQUNaLEVBQUUsc0RBQVU7QUFDWixFQUFFLHVEQUFRO0FBQ1YsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1JEO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDZSx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDWDFCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVlLHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN2Q3hCO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLEtBQUs7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFZSx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7QUNqQzFCLHVDIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi4vXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBidXJnZXJNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL3ZhbGlkJztcbmltcG9ydCBzZWxlY3RlZCBmcm9tICcuL3NlbGVjdCc7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBidXJnZXJNZW51KCk7XG4gIHZhbGlkYXRpb24oKTtcbiAgc2VsZWN0ZWQoKTtcbn0pO1xuIiwiY29uc3QgYnVyZ2VyTWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXJfX21lbnUnKTtcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXJfX21lbnUtYnV0dG9uJyk7XG4gIC8vIGNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyX19tZW51LW5hdicpO1xuXG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyX19tZW51LWFjdGl2ZScpO1xuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudV9fYWN0aXZlJyk7XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IGJ1cmdlck1lbnU7XG4iLCJjb25zdCBzZWxlY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9udGgnKTtcbiAgY29uc3QgeWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55ZWFyJyk7XG4gIGNvbnN0IGljb25Nb250aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2ljb24tbW9udGgnKTtcbiAgY29uc3QgaWNvblllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19pY29uLXllYXInKTtcbiAgY29uc3Qgc2VsZWN0SXRlbU1vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9faXRlbS1tb250aCcpO1xuICBjb25zdCBzZWxlY3RJdGVtWWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX2l0ZW0teWVhcicpO1xuXG4gIHNlbGVjdEl0ZW1ZZWFyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHRleHQgPSB0aGlzLmlubmVyVGV4dDtcbiAgICAgIGxldCBjdXJyZW50VGV4dCA9IHRoaXMuY2xvc2VzdCgnLnNlbGVjdCcpLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2N1cnJlbnQteWVhcicpO1xuICAgICAgY3VycmVudFRleHQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgIHllYXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICBpY29uWWVhci5jbGFzc0xpc3QucmVtb3ZlKCdpY29uLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9KTtcblxuICBzZWxlY3RJdGVtTW9udGguZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgdGV4dCA9IHRoaXMuaW5uZXJUZXh0O1xuICAgICAgbGV0IGN1cnJlbnRUZXh0ID0gdGhpcy5jbG9zZXN0KCcuc2VsZWN0JykucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fY3VycmVudC1tb250aCcpO1xuICAgICAgY3VycmVudFRleHQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgIG1vbnRoLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgaWNvbk1vbnRoLmNsYXNzTGlzdC5yZW1vdmUoJ2ljb24tYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGljb25Nb250aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBtb250aC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICBpY29uTW9udGguY2xhc3NMaXN0LnRvZ2dsZSgnaWNvbi1hY3RpdmUnKTtcbiAgfSk7XG5cbiAgaWNvblllYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgeWVhci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICBpY29uWWVhci5jbGFzc0xpc3QudG9nZ2xlKCdpY29uLWFjdGl2ZScpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdGVkO1xuIiwiY29uc3QgdmFsaWRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbZGF0YS1ydWxlXScpO1xuXG4gIGZvciAobGV0IGlucHV0IG9mIGlucHV0cykge1xuICAgIC8vINC90LAgaW5wdXQg0LLQtdGI0LDQtdC8INGB0L7QsdGL0YLQuNC1INC/0L4g0L/QvtGC0LXRgNC4INGE0L7QutGD0YHQsCDQstGL0L/QvtC70L3QuNGC0Ywg0L/RgNC+0LLQtdGA0LrRg1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgcnVsZSA9IHRoaXMuZGF0YXNldC5ydWxlO1xuICAgICAgLy8g0YHQvtC00LXRgNC20LjQvNC+0LUgaW5wdXRcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICBsZXQgY2hlY2s7XG5cbiAgICAgIHN3aXRjaCAocnVsZSkge1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgIGxldCBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgbGV0IGZyb20gPSArdGhpcy5kYXRhc2V0LmZyb207XG4gICAgICAgICAgbGV0IHRvID0gK3RoaXMuZGF0YXNldC50bztcbiAgICAgICAgICBjaGVjayA9IGxlbmd0aCA+PSBmcm9tICYmIGxlbmd0aCA8PSB0bztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgY2hlY2sgPSAvXlthLXpBLVpdW2EtekEtWi1fXFwuXXszLDIwfSQvLnRlc3QodmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLWZvcm0nKTtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQtZm9ybScpO1xuICAgICAgaWYgKGNoZWNrKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgndmFsaWQtZm9ybScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWZvcm0nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGlvbjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=