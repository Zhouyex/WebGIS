// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ./tsSupport/declareExtendsHelper ./tsSupport/decorateHelper ./Accessor ./accessorSupport/decorators".split(" "),function(p,q,h,k,m,e){var f=function(){function a(){this._emitter=new a.EventEmitter(this)}a.prototype.emit=function(a,c){return this._emitter.emit(a,c)};a.prototype.on=function(a,c){return this._emitter.on(a,c)};a.prototype.once=function(a,c){return this._emitter.once(a,c)};a.prototype.hasEventListener=function(a){return this._emitter.hasEventListener(a)};return a}();
(function(a){var l=function(){function a(b){this.target=b}a.prototype.clear=function(){this._listenersMap&&this._listenersMap.clear()};a.prototype.emit=function(b,d){var a=this;b=this._listenersMap&&this._listenersMap.get(b);if(!b)return!1;d=d||{};d.target||(d.target=this.target);b.slice().forEach(function(b){b.call(a.target,d)});return 0<b.length};a.prototype.on=function(b,d){var a=this;if(Array.isArray(b)){var n=b.map(function(b){return a.on(b,d)});return{remove:function(){return n.forEach(function(b){return b.remove()})}}}if(-1<
b.indexOf(","))throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");this._listenersMap||(this._listenersMap=new Map);var c=this._listenersMap.get(b)||[];c.push(d);this._listenersMap.set(b,c);return{remove:function(){var g=a._listenersMap&&a._listenersMap.get(b)||[];0<=g.indexOf(d)&&g.splice(g.indexOf(d),1)}}};a.prototype.once=function(b,d){var a=this,c;return c=this.on(b,function(b){c.remove();d.call(a.target,b)})};a.prototype.hasEventListener=function(b){b=
this._listenersMap&&this._listenersMap.get(b);return null!=b&&0<b.length};return a}();a.EventEmitter=l;a.EventedMixin=function(a){return function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a._emitter=new l(a);return a}h(a,b);a.prototype.emit=function(a,b){return this._emitter.emit(a,b)};a.prototype.on=function(a,b){return this._emitter.on(a,b)};a.prototype.once=function(a,b){return this._emitter.once(a,b)};a.prototype.hasEventListener=function(a){return this._emitter.hasEventListener(a)};
return a=k([e.subclass("esri.core.Evented")],a)}(e.declared(a))};var c=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b._emitter=new f.EventEmitter(b);return b}h(b,a);b.prototype.emit=function(a,b){return this._emitter.emit(a,b)};b.prototype.on=function(a,b){return this._emitter.on(a,b)};b.prototype.once=function(a,b){return this._emitter.once(a,b)};b.prototype.hasEventListener=function(a){return this._emitter.hasEventListener(a)};return b=k([e.subclass("esri.core.Evented")],
b)}(e.declared(m));a.EventedAccessor=c})(f||(f={}));return f});