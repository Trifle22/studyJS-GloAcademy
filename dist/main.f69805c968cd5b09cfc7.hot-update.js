/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatestudyjs_gloacademy"]("main",{

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var popup = document.querySelector('.popup');\n  var popupBtn = document.querySelectorAll('.popup-btn');\n  popupBtn.forEach(function (item) {\n    item.addEventListener('click', function () {\n      if (document.body.clientWidth >= 768) {\n        var animatedPopup = function animatedPopup(timePassed) {\n          popup.style.display = 'block';\n          popup.style.opacity = timePassed / 1000;\n        };\n\n        var start = Date.now();\n        var timer = setInterval(function () {\n          var timePassed = Date.now() - start;\n\n          if (timePassed >= 1000) {\n            clearInterval(timer);\n            return;\n          }\n\n          animatedPopup(timePassed);\n        }, 10);\n      } else {\n        popup.style.display = 'block';\n      }\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://studyjs-gloacademy/./src/modules/togglePopup.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("2e251dd72d95cf78bdad")
/******/ 	})();
/******/ 	
/******/ }
);