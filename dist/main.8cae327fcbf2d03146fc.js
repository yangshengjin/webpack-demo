webpackJsonp([1],{

/***/ "lVK7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
 
//  import Print from './print';
 function component() {
    var element = document.createElement('div');
   var button = document.createElement('button');
   var br = document.createElement('br');

   button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hello', 'webpack'], ' ');
   element.appendChild(br);
   element.appendChild(button);

  //  button.onClick = Print.bind(null, 'Hello webpack!');

    return element;
}
  
 document.body.appendChild(component());

/***/ })

},["lVK7"]);