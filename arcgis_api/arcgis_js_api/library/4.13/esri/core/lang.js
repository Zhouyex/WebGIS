// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","./typedArrayUtil"],function(k,d,b){function f(a,g){var c;if(g)for(c in a)a.hasOwnProperty(c)&&(void 0===a[c]?delete a[c]:a[c]instanceof Object&&f(a[c],!0));else for(c in a)a.hasOwnProperty(c)&&void 0===a[c]&&delete a[c];return a}function e(a){return a&&"object"===typeof a&&"function"!==typeof a?b.isInt8Array(a)||b.isUint8Array(a)||b.isUint8ClampedArray(a)||b.isInt16Array(a)||b.isUint16Array(a)||b.isInt32Array(a)||b.isUint32Array(a)||b.isFloat32Array(a)||b.isFloat64Array(a)?
b.slice(a):a instanceof Date?new Date(a.getTime()):a instanceof ArrayBuffer?a.slice(0,a.byteLength):"function"===typeof a.clone?a.clone():"function"===typeof a.map&&"function"===typeof a.forEach?a.map(e):"function"===typeof a.notifyChange&&"function"===typeof a.watch?a.clone():h({},a,e):a}function h(a,g,c){var b,d,e={};for(b in g){d=g[b];var f=!(b in e)||e[b]!==d;if(!(b in a)||a[b]!==d&&f)a[b]=c?c(d):d}return a}Object.defineProperty(d,"__esModule",{value:!0});d.fixJson=f;d.clone=e;d.equals=function(a,
b){return a===b||"number"===typeof a&&isNaN(a)&&"number"===typeof b&&isNaN(b)||"function"===typeof(a||{}).getTime&&"function"===typeof(b||{}).getTime&&a.getTime()===b.getTime()||!1};d.mixin=function(a){void 0===a&&(a={});for(var b=1;b<arguments.length;b++);for(var b=1,c=arguments.length;b<c;b++)h(a,arguments[b]);return a}});