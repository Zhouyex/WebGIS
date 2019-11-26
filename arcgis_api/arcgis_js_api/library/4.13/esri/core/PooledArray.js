// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","./tsSupport/generatorHelper","./arrayUtils","./HeapSort"],function(k,l,g,f,h){return function(){function c(a){var b=this;this.data=[];this._length=0;this._allocator=null;this._deallocator=function(){};this._shrink=function(){};this._hint=new f.RemoveHint;a&&(a.initialSize&&(this.data=Array(a.initialSize)),a.allocator?(this._allocator=a.allocator,this._deallocator=a.deallocator):"deallocator"in a&&(this._deallocator=a.deallocator),a.shrink&&(this._shrink=function(){b.data.length>
1.5*b.length&&(b.data.length=Math.floor(1.1*b.length))}))}c.prototype.toArray=function(){return this.data.slice(0,this.length)};c.prototype.getItemAt=function(a){if(!(0>a||a>=this._length))return this.data[a]};Object.defineProperty(c.prototype,"length",{get:function(){return this._length},set:function(a){if(a>this._length)if(this._allocator)for(;this._length<a;)this.data[this._length++]=this._allocator(this.data[this._length]);else this._length=a;else{if(this._deallocator)for(var b=a;b<this._length;++b)this.data[b]=
this._deallocator(this.data[b]);this._length=a;this._shrink()}},enumerable:!0,configurable:!0});c.prototype.clear=function(){this.length=0};c.prototype.prune=function(){this.clear();this.data=[]};c.prototype.equal=function(a){return f.equals(this.data,a.data)};c.prototype.push=function(a){return this.data[this._length++]=a};c.prototype.pushArray=function(a,b){void 0===b&&(b=a.length);for(var d=0;d<b;d++)this.data[this._length++]=a[d];return this.back()};c.prototype.pushNew=function(){this._allocator&&
(this.data[this.length]=this._allocator(this.data[this.length]));++this._length;return this.back()};c.prototype.pop=function(){if(0!==this.length){var a=this.data[this.length-1];--this.length;this._shrink();return a}};c.prototype.iterableRemoveMany=function(a){var b,d;return g(this,function(e){switch(e.label){case 0:b=[],d=0,e.label=1;case 1:if(!(d<this.length)||d>=this.length)return[3,4];0>a.indexOf(this.data[d])&&b.push(this.data[d]);return[4];case 2:e.sent(),e.label=3;case 3:return++d,[3,1];case 4:return this.data=
b,this._length=this.data.length,[2]}})};c.prototype.removeUnordered=function(a){a=f.removeUnordered(this.data,a,this.length,this._hint);void 0!==a&&--this.length;return a};c.prototype.removeUnorderedIndex=function(a){if(!(a>=this.length||0>a))return this.swapElements(a,this.length-1),this.pop()};c.prototype.removeUnorderedMany=function(a,b,d){void 0===b&&(b=a.length);this.length=f.removeUnorderedMany(this.data,a,this.length,b,this._hint,d)};c.prototype.front=function(){if(0!==this.length)return this.data[0]};
c.prototype.back=function(){if(0!==this.length)return this.data[this.length-1]};c.prototype.swapElements=function(a,b){var d;a>=this.length||b>=this.length||a===b||(d=[this.data[b],this.data[a]],this.data[a]=d[0],this.data[b]=d[1])};c.prototype.sort=function(a){h.sort(this.data,0,this.length,a)};c.prototype.iterableSort=function(a){return h.iterableSort(this.data,0,this.length,a)};c.prototype.some=function(a,b){for(var d=0;d<this.length;++d)if(a.call(b,this.data[d],d,this.data))return!0;return!1};
c.prototype.find=function(a,b){for(var d=0;d<this.length;++d){var e=this.data[d];if(a.call(b,e,d,this.data))return e}};c.prototype.filterInPlace=function(a,b){for(var d=0,e=0;e<this._length;++e){var c=this.data[e];a.call(b,c,e,this.data)&&(this.data[e]=this.data[d],this.data[d]=c,d++)}if(this._deallocator)for(e=d;e<this._length;e++)this.data[e]=this._deallocator(this.data[e]);this._length=d;return this};c.prototype.forEach=function(a,b){for(var d=this.length,c=0;c<Math.min(this.length,d);++c)a.call(b,
this.data[c],c,this.data)};c.prototype.iterableForEach=function(){var a;return g(this,function(b){switch(b.label){case 0:a=0,b.label=1;case 1:return a<this.length?[4,this.data[a]]:[3,4];case 2:b.sent(),b.label=3;case 3:return++a,[3,1];case 4:return[2]}})};c.prototype.map=function(a,b){for(var d=Array(this.length),c=0;c<this.length;++c)d[c]=a.call(b,this.data[c],c,this.data);return d};return c}()});