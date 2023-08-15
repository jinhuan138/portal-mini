!function(e,t){"function"==typeof define&&define.amd?define(["exports","babel-runtime/helpers/typeof","../utils/util"],t):"undefined"!=typeof exports?t(exports,require("babel-runtime/helpers/typeof"),require("../utils/util")):(t(t={},e._typeof,e.util),e.format=t)}(this,function(e,t,f){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){
/**
     * template
     *
     * @param {String} string
     * @param {Array} ...args
     * @return {String}
     */
return function(l){for(var e=arguments.length,i=Array(1<e?e-1:0),t=1;t<e;t++)i[t-1]=arguments[t];return(i=1===i.length&&"object"===(0,n.default)(i[0])?i[0]:i)&&i.hasOwnProperty||(i={}),l.replace(u,function(e,t,r,n){var u;return"{"===l[n-1]&&"}"===l[n+e.length]?r:null==(u=(0,f.hasOwn)(i,r)?i[r]:null)?"":u})}};var r,n=(r=t)&&r.__esModule?r:{default:r};var u=/(%|)\{([0-9a-zA-Z_]+)\}/g;
/**
   *  String format template
   *  - Inspired:
   *    https://github.com/Matt-Esch/string-template/index.js
   */});