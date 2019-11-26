// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(f,d){Object.defineProperty(d,"__esModule",{value:!0});var e=function(){function b(a,c){void 0===c&&(c={ignoreUnknown:!1});this.jsonToAPI=a;this.options=c;this.apiValues=[];this.jsonValues=[];this.apiToJSON=this.invertMap(a);this.apiValues=this.getKeysSorted(this.apiToJSON);this.jsonValues=this.getKeysSorted(this.jsonToAPI);this.read=function(a){return this.fromJSON(a)}.bind(this);this.write=function(a,c,b){a=this.toJSON(a);void 0!==a&&(c[b]=a)}.bind(this)}b.prototype.toJSON=
function(a){return this.apiToJSON.hasOwnProperty(a)?this.apiToJSON[a]:this.options.ignoreUnknown?void 0:a};b.prototype.fromJSON=function(a){return this.jsonToAPI.hasOwnProperty(a)?this.jsonToAPI[a]:this.options.ignoreUnknown?void 0:a};b.prototype.invertMap=function(a){var c={},b;for(b in a)c[a[b]]=b;return c};b.prototype.getKeysSorted=function(a){var b=[],d;for(d in a)b.push(d);b.sort();return b};return b}();d.JSONMap=e;d.strict=function(){return function(b){return new e(b,{ignoreUnknown:!0})}};d.default=
e});