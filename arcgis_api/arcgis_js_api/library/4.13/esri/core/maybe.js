// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","./has"],function(f,b,g){function e(a,d,c){return null!=a?c(a):d}Object.defineProperty(b,"__esModule",{value:!0});b.isSome=function(a){return null!=a};b.isNone=function(a){return null==a};b.applySome=function(a,d){return null!=a?d(a):null};b.unwrap=function(a){return a};b.unwrapOr=function(a,d){return null!=a?a:"function"===typeof d?d():d};b.expect=function(a){return a};b.mapSome=function(a,d){var c=[];a.forEach(function(a){a=d(a);null!=a&&c.push(a)});return c};b.mapMany=
function(a,d){for(var c=[],b=0;b<a.length;b++)c.push(e(a[b],null,d));return c};b.forEachSome=function(a,d){for(var c=0;c<a.length;c++)e(a[c],null,d)};b.mapOr=e;b.andThen=function(a,d){return null!=a?d(a):null};b.mapSomeFirst=function(a,d){for(var c=0;c<a.length;c++){var b=d(a[c]);if(null!=b)return b}return null};b.get=function(a){for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];for(var c=a,e=0;e<b.length&&c;)c=c[b[e++]];return c}});