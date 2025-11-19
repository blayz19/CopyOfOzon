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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart.js */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load.js */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_postData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/postData.js */ \"./src/modules/postData.js\");\n/* harmony import */ var _modules_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/search.js */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/catalog.js */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_price_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/price.js */ \"./src/modules/price.js\");\n/* harmony import */ var _modules_sale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sale.js */ \"./src/modules/sale.js\");\n/* harmony import */ var _modules_salePrice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/salePrice.js */ \"./src/modules/salePrice.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_search_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_catalog_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_price_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_sale_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_salePrice_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n//# sourceURL=webpack://db/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _postData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postData.js */ \"./src/modules/postData.js\");\n/* harmony import */ var _renderCart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCart.js */ \"./src/modules/renderCart.js\");\n\r\n\r\nconst cart = () => {\r\n    const cartBtn = document.getElementById(\"cart\");\r\n    const cartModal = document.querySelector(\".cart\");\r\n    const closeCartBtn = cartModal.querySelector(\".cart-close\");\r\n    const goodsWrapper = document.querySelector('.goods');\r\n    const cartTotal = cartModal.querySelector('.cart-total > span')\r\n    const cartWrapper = document.querySelector('.cart-wrapper');\r\n    const cartSend = document.querySelector('.cart-confirm');\r\n\r\n    const openCart = () => {\r\n        cartModal.style.display = 'flex';\r\n        const cart = localStorage.getItem('cart') ? \r\n            JSON.parse(localStorage.getItem('cart')) : [] ;\r\n        \r\n        (0,_renderCart_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart);\r\n        cartTotal.textContent = cart.reduce((sum, goodItem)=>{\r\n            return sum + goodItem.price;\r\n        },0)\r\n    }\r\n    const closeCart = () => {\r\n        cartModal.style.display = 'none';\r\n    }\r\n\r\n    cartBtn.addEventListener('click',()=>{\r\n        openCart();\r\n\r\n    });\r\n    closeCartBtn.addEventListener('click',closeCart);\r\n    \r\n    goodsWrapper.addEventListener('click', (event)=>{\r\n        if(event.target.classList.contains('btn-primary')){\r\n            const card = event.target.closest('.card');\r\n            const key = card.dataset.key;\r\n            const goods = JSON.parse(localStorage.getItem('goods'));\r\n            const cart = localStorage.getItem('cart') ? \r\n                JSON.parse(localStorage.getItem('cart')) : [] ;\r\n            \r\n            const goodItem = goods.find((item)=>{\r\n                return item.id == key;\r\n            });\r\n\r\n            cart.push(goodItem);\r\n\r\n            localStorage.setItem('cart', JSON.stringify(cart));\r\n            \r\n        }\r\n    });\r\n\r\n    cartWrapper.addEventListener('click', (event) => {\r\n        if(event.target.classList.contains('btn-primary')){\r\n            const cart = localStorage.getItem('cart') ? \r\n                JSON.parse(localStorage.getItem('cart')) : [];\r\n            const card = event.target.closest('.card');\r\n            const key = card.dataset.key;\r\n\r\n            const index = cart.findIndex((item)=>{\r\n                return item.id == key;\r\n            });\r\n\r\n            cart.splice(index, 1)\r\n            \r\n            localStorage.setItem('cart', JSON.stringify(cart));\r\n            (0,_renderCart_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart);\r\n            cartTotal.textContent = cart.reduce((sum, goodItem)=>{\r\n                return sum + goodItem.price;\r\n            },0);\r\n        }\r\n    });\r\n\r\n    cartSend.addEventListener('click',()=>{\r\n        const cart = localStorage.getItem('cart') ? \r\n            JSON.parse(localStorage.getItem('cart')) : [];\r\n        \r\n        (0,_postData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart).then(()=>{\r\n            localStorage.removeItem('cart');\r\n            (0,_renderCart_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([]);\r\n            cartTotal.textContent = 0;\r\n        });\r\n\r\n\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://db/./src/modules/cart.js?\n}");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.js */ \"./src/modules/filters.js\");\n\r\n\r\n\r\nconst catalog = () => {\r\n    const btnCatalog = document.querySelector('.catalog-button > button');\r\n    const catalogModal = document.querySelector('.catalog');\r\n    const catalogModalItems = document.querySelectorAll('.catalog li');\r\n\r\n    let isOpen = false;\r\n    \r\n    btnCatalog.addEventListener('click',()=>{\r\n        isOpen = !isOpen;\r\n        if(isOpen){\r\n            catalogModal.style.display = 'block';\r\n        }\r\n        else{\r\n            catalogModal.style.display = '';\r\n        }\r\n    })\r\n    catalogModalItems.forEach(item => {\r\n        item.addEventListener('click',()=>{\r\n            const text = item.textContent;\r\n            (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data)=>{\r\n            (0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters_js__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data,text));\r\n            });\r\n        });\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://db/./src/modules/catalog.js?\n}");

/***/ }),

/***/ "./src/modules/deleteData.js":
/*!***********************************!*\
  !*** ./src/modules/deleteData.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst deleteData = () =>{\r\n    return fetch('http://localhost:3000/goods/bf80',{\r\n        method: \"DELETE\",\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteData);\r\n\n\n//# sourceURL=webpack://db/./src/modules/deleteData.js?\n}");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryFilter: () => (/* binding */ categoryFilter),\n/* harmony export */   priceFilter: () => (/* binding */ priceFilter),\n/* harmony export */   saleFilter: () => (/* binding */ saleFilter),\n/* harmony export */   searchFilter: () => (/* binding */ searchFilter)\n/* harmony export */ });\nconst searchFilter = (goods,value) => {\r\n    return goods.filter(goodsItem => {\r\n        return goodsItem.title.toLowerCase().includes(value.toLowerCase());\r\n    });\r\n}\r\n\r\nconst categoryFilter = (goods,value) => {\r\n    return goods.filter(goodsItem => {\r\n        return goodsItem.category === value;\r\n    });\r\n}\r\n\r\nconst priceFilter = (goods,priceBefore=0,priceAfter=999999)=>{\r\n    return goods.filter(goodsItem => {\r\n        if(goodsItem.price<=priceAfter && goodsItem.price >= priceBefore){\r\n            return true;\r\n        }\r\n    });\r\n}\r\n\r\nconst saleFilter = (goods) => {\r\n    return goods.filter(goodsItem =>{\r\n        return goodsItem.sale;\r\n    })\r\n}\n\n//# sourceURL=webpack://db/./src/modules/filters.js?\n}");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\r\n    return fetch(`https://test-66078-default-rtdb.firebaseio.com/goods.json`)\r\n      .then(response => response.json());\r\n      \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://db/./src/modules/getData.js?\n}");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _deleteData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteData.js */ \"./src/modules/deleteData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\n\r\nfunction load(){\r\n    \r\n    (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data)=>{\r\n        (0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\r\n    });\r\n\r\n           \r\n        \r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://db/./src/modules/load.js?\n}");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = (data) => {\r\n    return fetch('https://test-66078-default-rtdb.firebaseio.com/cart.json',{\r\n        method: \"POST\",\r\n        body: JSON.stringify(data),\r\n        headers:{\r\n            'Content-Type': 'application/json; charset=UTF-8',\r\n        }\r\n\r\n    })\r\n    .then(res =>res.json());\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://db/./src/modules/postData.js?\n}");

/***/ }),

/***/ "./src/modules/price.js":
/*!******************************!*\
  !*** ./src/modules/price.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.js */ \"./src/modules/filters.js\");\n/* harmony import */ var _sale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sale.js */ \"./src/modules/sale.js\");\n\r\n\r\n\r\n\r\n\r\nconst price = () => {\r\n    const priceBefore = document.getElementById('min');\r\n    const priceAfter = document.getElementById('max');\r\n    let value1 = 0;\r\n    let value2 = 999999;\r\n\r\n    const updateGoods = () => {\r\n        (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            const minPrice = priceBefore.value === '' ? 0 : Number(priceBefore.value) ;\r\n            const maxPrice = priceAfter.value === '' ? 999999 : Number(priceAfter.value);\r\n            \r\n            (0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters_js__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(data, minPrice, maxPrice));\r\n        });\r\n    };\r\n\r\n    priceBefore.addEventListener('input', (event) => {\r\n        value1 = event.target.value;\r\n        console.log('Min:', value1);\r\n        updateGoods();\r\n    });\r\n\r\n    priceAfter.addEventListener('input', (event) => {\r\n        value2 = event.target.value;\r\n        console.log('Max:', value2);\r\n        updateGoods();\r\n    });\r\n\r\n    updateGoods();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (price);\n\n//# sourceURL=webpack://db/./src/modules/price.js?\n}");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => {\r\n    const cartWrapper = document.querySelector('.cart-wrapper');\r\n    \r\n    cartWrapper.innerHTML = '';\r\n\r\n    if(goods.length === 0){\r\n        cartWrapper.insertAdjacentHTML('beforeend',`\r\n            <div id=\"cart-empty\">\r\n\t\t\t\t\tВаша корзина пока пуста\r\n\t\t\t\t</div>\r\n            `)\r\n    }\r\n    else{\r\n        goods.forEach(goodsItem => {\r\n        cartWrapper.insertAdjacentHTML('beforeend', `\r\n            \r\n                <div class=\"card\" data-key=\"${goodsItem.id}\">\r\n                    ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''} \r\n                    <div class=\"card-img-wrapper\">\r\n                        <span class=\"card-img-top\"\r\n                        style=\"background-image: url('${goodsItem.img}')\"></span>\r\n                    </div>\r\n                    <div class=\"card-body justify-content-between\">\r\n                        <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n                        <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n                        <button class=\"btn btn-primary\">Удалить</button>\r\n                    </div>\r\n                </div>\r\n              \r\n            `);\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\n\n//# sourceURL=webpack://db/./src/modules/renderCart.js?\n}");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n    const goodsWrapper = document.querySelector('.goods');\r\n    localStorage.setItem('goods',JSON.stringify(goods));\r\n    \r\n    goodsWrapper.innerHTML = '';\r\n    goods.forEach(goodsItem => {\r\n        goodsWrapper.insertAdjacentHTML('beforeend', `\r\n            <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"card\" data-key=\"${goodsItem.id}\">\r\n                    ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''} \r\n                    <div class=\"card-img-wrapper\">\r\n                        <span class=\"card-img-top\"\r\n                        style=\"background-image: url('${goodsItem.img}')\"></span>\r\n                    </div>\r\n                    <div class=\"card-body justify-content-between\">\r\n                        <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n                        <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n                        <button class=\"btn btn-primary\">В корзину</button>\r\n                    </div>\r\n                </div>\r\n            </div>    \r\n        `);\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://db/./src/modules/renderGoods.js?\n}");

/***/ }),

/***/ "./src/modules/sale.js":
/*!*****************************!*\
  !*** ./src/modules/sale.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.js */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst sale = () =>{\r\n    const saleBox = document.querySelector('.filter-check_checkmark');\r\n    let isOpen = false;\r\n    saleBox.addEventListener('click',()=>{\r\n        isOpen = !isOpen;\r\n        if(isOpen){\r\n            saleBox.style.background = '#005bff';\r\n\r\n            (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\r\n                (0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters_js__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data));\r\n            });\r\n        }\r\n        else{\r\n            saleBox.style.background = '';\r\n            (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\r\n                (0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n            });\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sale);\n\n//# sourceURL=webpack://db/./src/modules/sale.js?\n}");

/***/ }),

/***/ "./src/modules/salePrice.js":
/*!**********************************!*\
  !*** ./src/modules/salePrice.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.js */ \"./src/modules/filters.js\");\n// simple-approach.js\r\n\r\n\r\n\r\n\r\nconst salePrice = () =>{   \r\n    let currentMinPrice = 0;\r\n    let currentMaxPrice = 999999;\r\n    let currentSaleFilter = false;\r\n\r\n    const updateGoods = () => {\r\n        (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\r\n            let filteredGoods = data;\r\n            \r\n            // Применяем фильтр по цене\r\n            filteredGoods = (0,_filters_js__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(filteredGoods, currentMinPrice, currentMaxPrice);\r\n            \r\n            // Применяем фильтр по акции если активен\r\n            if (currentSaleFilter) {\r\n                filteredGoods = (0,_filters_js__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(filteredGoods);\r\n            }\r\n            \r\n            (0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(filteredGoods);\r\n        });\r\n    };\r\n\r\n    // Инициализация фильтра цены\r\n    const priceBefore = document.getElementById('min');\r\n    const priceAfter = document.getElementById('max');\r\n\r\n    priceBefore.addEventListener('input', (event) => {\r\n        currentMinPrice = event.target.value === '' ? 0 : Number(event.target.value);\r\n        updateGoods();\r\n    });\r\n\r\n    priceAfter.addEventListener('input', (event) => {\r\n        currentMaxPrice = event.target.value === '' ? 999999 : Number(event.target.value);\r\n        updateGoods();\r\n    });\r\n\r\n    // Инициализация фильтра акций\r\n    const saleBox = document.querySelector('.filter-check_checkmark');\r\n    saleBox.addEventListener('click', () => {\r\n        currentSaleFilter = !currentSaleFilter;\r\n        saleBox.style.background = currentSaleFilter ? '#005bff' : '';\r\n        updateGoods();\r\n    });\r\n\r\n    // Первоначальная загрузка\r\n    updateGoods();\r\n} \r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (salePrice);\n\n//# sourceURL=webpack://db/./src/modules/salePrice.js?\n}");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.js */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = () =>{\r\n    const searchInput = document.querySelector('.search-wrapper_input');\r\n    \r\n    searchInput.addEventListener('input',(event)=>{\r\n        const value = event.target.value;\r\n        \r\n        (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data)=>{\r\n        (0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters_js__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data,value));\r\n    });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://db/./src/modules/search.js?\n}");

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