// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ./tsSupport/declareExtendsHelper ./tsSupport/decorateHelper ./Accessor ./accessorSupport/decorators ./accessorSupport/MultiOriginStore ./accessorSupport/PropertyOrigin ./accessorSupport/read ./accessorSupport/utils ./accessorSupport/write".split(" "),function(m,f,n,p,r,k,t,e,u,l,v){function h(c){return l.getProperties(c).store}Object.defineProperty(f,"__esModule",{value:!0});f.MultiOriginJSONMixin=function(c){return function(c){function d(){for(var a=[],b=0;b<arguments.length;b++)a[b]=
arguments[b];var a=c.apply(this,a)||this,g=l.getProperties(a),b=g.metadatas,q=g.store,d=new t.default;g.store=d;q.keys().forEach(function(a){d.set(a,q.get(a),e.OriginId.DEFAULTS)});Object.keys(b).forEach(function(a){g.internalGet(a)&&d.set(a,g.internalGet(a),e.OriginId.DEFAULTS)});return a}n(d,c);d.prototype.clear=function(a,b){void 0===b&&(b="user");return h(this).clear(a,e.nameToId(b))};d.prototype.read=function(a,b){u.default(this,a,b)};d.prototype.write=function(a,b){a=a||{};v.default(this,a,
b);return a};d.prototype.getAtOrigin=function(a,b){var g=h(this),d=e.nameToId(b);if("string"===typeof a)return g.get(a,d);var c={};a.forEach(function(a){c[a]=g.get(a,d)});return c};d.prototype.originOf=function(a){var b=h(this);if("string"===typeof a)return e.idToName(b.originOf(a));a.forEach(function(a){e.idToName(b.originOf(a))})};d.prototype.revert=function(a,b){var d=h(this),c=e.nameToId(b),f=l.getProperties(this);("string"===typeof a?"*"===a?Object.keys(d.getAll(c)):[a]:a).forEach(function(a){f.propertyInvalidated(a);
d.revert(a,c);f.propertyCommitted(a)})};d.prototype.removeOrigin=function(a){var b=h(this);a=e.nameToId(a);var d=b.getAll(a),c;for(c in d)b.originOf(c)===a&&b.set(c,d[c],e.OriginId.USER)};d.prototype.updateOrigin=function(a,b){var c=h(this);b=e.nameToId(b);var d=this.get(a);c.clear(a);c.set(a,d,b)};return d=p([k.subclass("esri.core.MultiOriginJSONSupport")],d)}(k.declared(c))};m=function(c){function e(){return null!==c&&c.apply(this,arguments)||this}n(e,c);return e=p([k.subclass("esri.core.MultiOriginJSONSupport")],
e)}(k.declared(f.MultiOriginJSONMixin(r)));f.MultiOriginJSONSupport=m;f.isMultiOriginJSONMixin=function(c){return c&&"getAtOrigin"in c&&"originOf"in c}});