/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_scrollToAnchors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollToAnchors */ \"./src/modules/scrollToAnchors.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_replacePhoto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/replacePhoto */ \"./src/modules/replacePhoto.js\");\n/* harmony import */ var _modules_calcValidate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calcValidate */ \"./src/modules/calcValidate.js\");\n/* harmony import */ var _modules_formsTextValidate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/formsTextValidate */ \"./src/modules/formsTextValidate.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n\n //count timer \n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('12 march 2021'); // scrollToAnchors\n\n(0,_modules_scrollToAnchors__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_2__.default)(); //popup \n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_3__.default)(); //tabs \n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__.default)(); //slider\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__.default)(); //replace photo\n\n(0,_modules_replacePhoto__WEBPACK_IMPORTED_MODULE_6__.default)(); //calc validate\n\n(0,_modules_calcValidate__WEBPACK_IMPORTED_MODULE_7__.default)(); //formsTextValidate\n\n(0,_modules_formsTextValidate__WEBPACK_IMPORTED_MODULE_8__.default)(); //calculator\n\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_9__.default)(100); //send-ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_10__.default)();\n\n//# sourceURL=webpack://studyjs-gloacademy/./src/index.js?");

/***/ }),

/***/ "./src/modules/calcValidate.js":
/*!*************************************!*\
  !*** ./src/modules/calcValidate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calcValidate = function calcValidate() {\n  var calcItems = document.querySelectorAll('.calc-item');\n\n  var _loop = function _loop(i) {\n    calcItems[i].addEventListener('input', function () {\n      calcItems[i].value = calcItems[i].value.replace(/\\D/g, '');\n    });\n  };\n\n  for (var i = 1; i < calcItems.length; i++) {\n    _loop(i);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcValidate);\n\n//# sourceURL=webpack://studyjs-gloacademy/./src/modules/calcValidate.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calculator = function calculator() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCount = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value;\n    var squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = Math.ceil(price * typeValue * squareValue * countValue * dayValue);\n    } else if (!typeValue) {\n      total = 0;\n      calcSquare.value = '';\n      calcDay.value = '';\n      calcCount.value = '';\n    }\n\n    if (total >= 0) {\n      var animateValue = function animateValue(elem, value, inc, shift, speed) {\n        var interval = false;\n\n        if (inc) {\n          interval = setInterval(function () {\n            if (+elem.textContent * 1 + shift >= value) {\n              elem.textContent = value;\n              clearInterval(interval);\n            } else {\n              elem.textContent = +elem.textContent * 1 + shift;\n            }\n          }, speed);\n        } else {\n          interval = setInterval(function () {\n            if (+elem.textContent * 1 - shift <= value) {\n              elem.textContent = value;\n              clearInterval(interval);\n            } else {\n              elem.textContent = +elem.textContent * 1 - shift;\n            }\n          }, speed);\n        }\n      };\n\n      if (totalValue.textContent > total) {\n        animateValue(totalValue, total, false, 50, 1);\n      } else {\n        animateValue(totalValue, total, true, 50, 1);\n      }\n    }\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://studyjs-gloacademy/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours');\n  var timerMinutes = document.querySelector('#timer-minutes');\n  var timerSeconds = document.querySelector('#timer-seconds');\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime();\n    var dateNow = new Date().getTime();\n    var timeRemaining = (dateStop - dateNow) / 1000;\n    var secondsRemaining = Math.floor(timeRemaining % 60);\n    var minutesRemaining = Math.floor(timeRemaining / 60 % 60);\n    var hoursRemaining = Math.floor(timeRemaining / 60 / 60);\n    return {\n      timeRemaining: timeRemaining,\n      hoursRemaining: hoursRemaining,\n      minutesRemaining: minutesRemaining,\n      secondsRemaining: secondsRemaining\n    };\n  }\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n\n    if (timer.hoursRemaining < 10) {\n      timer.hoursRemaining = '0' + timer.hoursRemaining.toString();\n    }\n\n    if (timer.minutesRemaining < 10) {\n      timer.minutesRemaining = '0' + timer.minutesRemaining.toString();\n    }\n\n    if (timer.secondsRemaining < 10) {\n      timer.secondsRemaining = '0' + timer.secondsRemaining.toString();\n    }\n\n    timerHours.textContent = timer.hoursRemaining;\n    timerMinutes.textContent = timer.minutesRemaining;\n    timerSeconds.textContent = timer.secondsRemaining;\n  }\n\n  updateClock();\n  var intervalTimer = setInterval(countTimer, 1000, deadline);\n\n  if (new Date(deadline).getTime() - new Date().getTime() <= 0) {\n    timerHours.textContent = '00';\n    timerMinutes.textContent = '00';\n    timerSeconds.textContent = '00';\n    timerHours.style.color = 'red';\n    timerMinutes.style.color = 'red';\n    timerSeconds.style.color = 'red';\n    clearInterval(intervalTimer);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://studyjs-gloacademy/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/formsTextValidate.js":
/*!******************************************!*\
  !*** ./src/modules/formsTextValidate.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar formsTextValidate = function formsTextValidate() {\n  var inputsName = document.querySelectorAll('input[placeholder=\"Ваше имя\"]');\n  var inputMessage = document.querySelector('input[placeholder=\"Ваше сообщение\"]');\n  var inputsEmail = document.querySelectorAll('input[type=\"email\"]');\n  var inputsPhone = document.querySelectorAll('input[placeholder=\"Номер телефона\"]');\n  var regText = /[^а-яё\\s{1}\\-]*/gi;\n\n  var customValidator = function customValidator(val) {\n    val = val.replace(/\\s+/g, ' ');\n    val = val.replace(/-+/g, '-');\n    val = val.replace(/^[ |\\-+]/g, '');\n    val = val.replace(/[ |\\-+]$/g, '');\n    return val;\n  };\n\n  inputsName.forEach(function (item) {\n    item.addEventListener('blur', function (e) {\n      var target = e.target;\n      var val = target.value;\n      val = val.replace(/[^а-яА-ЯёЁ\\s\\-]/g, '');\n      val = customValidator(val);\n      var arr = val.split(' ');\n\n      for (var i = 0; i < arr.length; i++) {\n        if (arr[i]) {\n          arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1).toLowerCase();\n        }\n      }\n\n      val = arr.join(' ');\n      item.value = customValidator(val);\n    });\n  });\n  inputMessage.addEventListener('blur', function (e) {\n    var target = e.target;\n    var val = target.value;\n    val = val.replace(/[^а-яА-ЯёЁ0-9\\s\\-.,]+/g, '');\n    val = customValidator(val);\n    target.value = val;\n  });\n  inputsEmail.forEach(function (item) {\n    item.addEventListener('blur', function (e) {\n      var target = e.target;\n      var val = target.value;\n      val = val.replace(/[^_@.!~*'A_Za-z\\-\\d]/g, '');\n      val = customValidator(val);\n\n      if (val.includes('@') && val.trim() !== '') {\n        target.value = val;\n      } else {\n        alert('Введите корректный адрес электронной почты');\n        target.value = '';\n      }\n    });\n  });\n  inputsPhone.forEach(function (item) {\n    maskPhone(\"#\".concat(item.id));\n    item.addEventListener('blur', function (e) {\n      var target = e.target;\n      var val = target.value;\n      val = val.replace(/^\\+[^\\d()\\-]/g, '');\n      val = customValidator(val);\n      val = '+' + val;\n\n      if (val.length === 18) {\n        target.value = val;\n      } else {\n        alert('Введите корректный номер телефона длиной 11 символов');\n        target.value = '';\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formsTextValidate);\n\n//# sourceURL=webpack://studyjs-gloacademy/./src/modules/formsTextValidate.js?");

/***/ }),

/***/ "./src/modules/replacePhoto.js":
/*!*************************************!*\
  !*** ./src/modules/replacePhoto.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar replacePhoto = function replacePhoto() {\n  var commandPhotosParent = document.querySelector('.command');\n  var support;\n  commandPhotosParent.addEventListener('mouseover', function (event) {\n    var target = event.target;\n\n    if (target.matches('img')) {\n      support = target.src;\n      target.src = target.dataset.img;\n      target.dataset.img = support;\n    }\n  });\n  commandPhotosParent.addEventListener('mouseout', function (event) {\n    var target = event.target;\n\n    if (target.matches('img')) {\n      support = target.src;\n      target.src = target.dataset.img;\n      target.dataset.img = support;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replacePhoto);\n\n//# sourceURL=webpack://studyjs-gloacademy/./src/modules/replacePhoto.js?");

/***/ }),

/***/ "./src/modules/scrollToAnchors.js":
/*!****************************************!*\
  !*** ./src/modules/scrollToAnchors.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction scrollToAnchors() {\n  var anchors = document.querySelectorAll('a[href*=\"#\"]');\n  anchors.forEach(function (item) {\n    item.addEventListener('click', function (event) {\n      event.preventDefault();\n      var anchorID = item.getAttribute('href').substr(1);\n      document.getElementById(anchorID).scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollToAnchors);\n\n//# sourceURL=webpack://studyjs-gloacademy/./src/modules/scrollToAnchors.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var form1 = document.getElementById('form1');\n  var form2 = document.getElementById('form2');\n  var form3 = document.getElementById('form3');\n  var forms = document.querySelectorAll('form');\n  var preLoader = document.querySelector('.loader-container');\n  var svgLoaderContainer = document.querySelector('.svg-loader-container');\n  var checkMarkClassName = 'animate';\n  var checkMarkLoader = document.querySelector('.check-mark-loader');\n  var errorAlert = document.querySelector('.error-alert');\n  var errorAlertClose = document.querySelector('.error-alert-close');\n\n  var successfulExecution = function successfulExecution(target) {\n    preLoader.style.display = 'none';\n    svgLoaderContainer.style.display = 'block';\n    checkMarkLoader.classList.add(checkMarkClassName);\n    setTimeout(function () {\n      checkMarkLoader.classList.remove(checkMarkClassName);\n      svgLoaderContainer.style.display = 'none';\n\n      if (target.id === 'form3') {\n        document.querySelector('.popup').style.display = 'none';\n      }\n    }, 1700);\n  };\n\n  var badExecution = function badExecution(error, target) {\n    console.error(error);\n    preLoader.style.display = 'none';\n    errorAlert.classList.add('error-alert-active');\n    errorAlertClose.addEventListener('click', function () {\n      errorAlert.classList.remove('error-alert-active');\n    });\n\n    if (target.id === 'form3') {\n      document.querySelector('.popup').style.display = 'none';\n    }\n  };\n\n  forms.forEach(function (form) {\n    form.addEventListener('submit', function (event) {\n      var target = event.target;\n      event.preventDefault();\n\n      var formElements = _toConsumableArray(target.elements).filter(function (item) {\n        return item.tagName.toLowerCase() !== 'button';\n      });\n\n      var formData = new FormData(target);\n      var body = {};\n      formData.forEach(function (value, key) {\n        body[key] = value;\n      });\n\n      if (formElements[0].value !== '' && formElements[1].value !== '' && formElements[2].value !== '') {\n        postData(body).then(function (response) {\n          if (response.status !== 200) {\n            throw new Error('status network not 200');\n          }\n\n          formElements.forEach(function (item) {\n            item.value = '';\n          });\n          successfulExecution(target);\n        })[\"catch\"](function (error) {\n          badExecution(error, target);\n        });\n      } else {\n        event.preventDefault();\n        alert('Введите корректные данные во все поля формы');\n      }\n    });\n  });\n\n  var postData = function postData(body) {\n    preLoader.style.display = 'block';\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://studyjs-gloacademy/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slides = document.querySelectorAll('.portfolio-item');\n  var dots = document.querySelectorAll('.dot');\n  var portfolioDots = document.querySelector('.portfolio-dots');\n  var slider = document.querySelector('.portfolio-content');\n  var interval;\n  var currentSlide = 0;\n  var portfolioDot = document.createElement('li.dot');\n\n  for (var i = 0; i < slides.length; i++) {\n    portfolioDots.append(portfolioDot);\n  }\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlider = function autoPlaySlider() {\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\n    prevSlide(dots, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\n    nextSlide(dots, currentSlide, 'dot-active');\n  };\n\n  var startSlider = function startSlider() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1500;\n    interval = setInterval(autoPlaySlider, time);\n  };\n\n  var stopSlider = function stopSlider() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (target.matches('.portfolio-btn, .dot')) {\n      prevSlide(slides, currentSlide, 'portfolio-item-active');\n      prevSlide(dots, currentSlide, 'dot-active');\n\n      if (target.matches('#arrow-right')) {\n        currentSlide++;\n      } else if (target.matches('#arrow-left')) {\n        currentSlide--;\n      } else if (target.matches('.dot')) {\n        dots.forEach(function (elem, index) {\n          if (elem === target) {\n            currentSlide = index;\n          }\n        });\n      }\n\n      if (currentSlide >= slides.length) {\n        currentSlide = 0;\n      } else if (currentSlide < 0) {\n        currentSlide = slides.length - 1;\n      }\n\n      nextSlide(slides, currentSlide, 'portfolio-item-active');\n      nextSlide(dots, currentSlide, 'dot-active');\n    } else {\n      return;\n    }\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlider();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlider();\n    }\n  });\n  startSlider(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://studyjs-gloacademy/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://studyjs-gloacademy/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu');\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  }; // делегирование\n\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.menu')) {\n      handlerMenu();\n    } else if (target.closest('.close-btn')) {\n      handlerMenu();\n    } else if (target.closest('ul>li>a')) {\n      handlerMenu();\n    } else if (!target.closest('.active-menu') && menu.classList.contains('active-menu')) {\n      handlerMenu();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://studyjs-gloacademy/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var popup = document.querySelector('.popup');\n  var popupBtn = document.querySelectorAll('.popup-btn');\n  popupBtn.forEach(function (item) {\n    item.addEventListener('click', function () {\n      if (screen.width >= 768) {\n        var animatedPopup = function animatedPopup(timePassed) {\n          popup.style.display = 'block';\n          popup.style.opacity = timePassed / 1000;\n        };\n\n        var start = Date.now();\n        var timer = setInterval(function () {\n          var timePassed = Date.now() - start;\n\n          if (timePassed >= 1000) {\n            clearInterval(timer);\n            return;\n          }\n\n          animatedPopup(timePassed);\n        }, 10);\n      } else {\n        popup.style.display = 'block';\n      }\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://studyjs-gloacademy/./src/modules/togglePopup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;