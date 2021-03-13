/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatestudyjs_gloacademy"]("main",{

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calculator = function calculator() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCount = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value;\n    var squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = Math.ceil(price * typeValue * squareValue * countValue * dayValue);\n    } else if (!typeValue) {\n      total = 0;\n      calcSquare.value = '';\n      calcDay.value = '';\n      calcCount.value = '';\n    }\n\n    if (total >= 0) {\n      var startAnimationCalculator = function startAnimationCalculator() {\n        var animationSpeed = 0;\n\n        if (Math.abs(total - parseFloat(totalValue.textContent)) > 15000) {\n          animationSpeed = 1000;\n        } else {\n          animationSpeed = 150;\n        }\n\n        if (totalValue.textContent > total) {\n          animateValue(totalValue, total, false, animationSpeed, 1);\n        } else {\n          animateValue(totalValue, total, true, animationSpeed, 1);\n        }\n      };\n\n      var animateValue = function animateValue(elem, value, inc, shift, speed) {\n        var interval = false;\n\n        if (inc) {\n          interval = setInterval(function () {\n            if (+elem.textContent * 1 + shift >= value) {\n              elem.textContent = value;\n              clearInterval(interval);\n            } else {\n              elem.textContent = +elem.textContent * 1 + shift;\n            }\n          }, speed);\n        } else {\n          interval = setInterval(function () {\n            if (+elem.textContent * 1 - shift <= value) {\n              elem.textContent = value;\n              clearInterval(interval);\n            } else {\n              elem.textContent = +elem.textContent * 1 - shift;\n            }\n          }, speed);\n        }\n      };\n\n      startAnimationCalculator();\n    }\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://studyjs-gloacademy/./src/modules/calculator.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("1423c113488ecbf36723")
/******/ 	})();
/******/ 	
/******/ }
);