// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Logger ../core/accessorSupport/decorators ../core/accessorSupport/ensureType ./Geometry ./SpatialReference ./support/offset ./support/spatialReferenceUtils ./support/webMercatorUtils".split(" "),function(k,y,q,f,r,d,t,u,v,w,x,l){function p(d){return d&&("esri.geometry.SpatialReference"===d.declaredClass||null!=d.wkid)}var m=[0,0],n=r.getLogger("esri.geometry.Point");k=function(k){function b(a,c,
b,d,g){a=k.call(this)||this;a.x=0;a.y=0;a.z=void 0;a.m=void 0;a.type="point";return a}q(b,k);h=b;b.copy=function(a,c){c._set("x",a._get("x"));c._set("y",a._get("y"));c._set("z",a._get("z"));c._set("m",a._get("m"));a=a._get("spatialReference");c._set("spatialReference",Object.isFrozen(a)?a:a.clone())};b.distance=function(a,c){var b=a.x-c.x,d=a.y-c.y;a=a.hasZ&&c.hasZ?a.z-c.z:0;return Math.sqrt(b*b+d*d+a*a)};b.prototype.normalizeCtorArgs=function(a,c,b,d,g){var e;if(Array.isArray(a))e=a,g=c,a=e[0],c=
e[1],b=e[2],d=e[3];else if(a&&"object"===typeof a){if(e=a,a=null!=e.x?e.x:e.longitude,c=null!=e.y?e.y:e.latitude,b=null!=e.z?e.z:e.altitude,d=e.m,(g=e.spatialReference)&&"esri.geometry.SpatialReference"!==g.declaredClass&&(g=new v(g)),null!=e.longitude||null!=e.latitude)null==e.longitude?n.warn(".longitude\x3d","Latitude was defined without longitude"):null==e.latitude?n.warn(".latitude\x3d","Longitude was defined without latitude"):!e.declaredClass&&g&&g.isWebMercator&&(c=l.lngLatToXY(e.longitude,
e.latitude,m),a=c[0],c=c[1])}else p(b)?(g=b,b=null):p(d)&&(g=d,d=null);a={x:a,y:c};null==a.x&&null!=a.y?n.warn(".y\x3d","Y coordinate was defined without an X coordinate"):null==a.y&&null!=a.x&&n.warn(".x\x3d","X coordinate was defined without a Y coordinate");null!=g&&(a.spatialReference=g);null!=b&&(a.z=b);null!=d&&(a.m=d);return a};Object.defineProperty(b.prototype,"hasM",{get:function(){return void 0!==this.m},set:function(a){a!==this.hasM&&(this._set("m",a?0:void 0),this._set("hasM",a))},enumerable:!0,
configurable:!0});Object.defineProperty(b.prototype,"hasZ",{get:function(){return void 0!==this.z},set:function(a){a!==this.hasZ&&(this._set("z",a?0:void 0),this._set("hasZ",a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"latitude",{get:function(){var a=this._get("spatialReference");if(a){if(a.isWebMercator)return l.xyToLngLat(this.x,this.y,m)[1];if(a.isGeographic)return this._get("y")}return null},set:function(a){var c=this._get("spatialReference");c&&(c.isWebMercator?this._set("y",
l.lngLatToXY(this.x,a,m)[1]):c.isGeographic&&this._set("y",a),this._set("latitude",a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"longitude",{get:function(){var a=this._get("spatialReference");if(a){if(a.isWebMercator)return l.xyToLngLat(this._get("x"),this._get("y"),m)[0];if(a.isGeographic)return this._get("x")}return null},set:function(a){var c=this._get("spatialReference");c&&(c.isWebMercator?this._set("x",l.lngLatToXY(a,this._get("y"),m)[0]):c.isGeographic&&this._set("x",
a),this._set("longitude",a))},enumerable:!0,configurable:!0});b.prototype.writeX=function(a,c,b){c[b]=isNaN(a)?"NaN":a};b.prototype.readX=function(a){return"string"===typeof a?NaN:a};b.prototype.clone=function(){var a=new h;a.x=this.x;a.y=this.y;a.z=this.z;a.m=this.m;a.spatialReference=this.spatialReference;return a};b.prototype.copy=function(a){h.copy(a,this);return this};b.prototype.equals=function(a){var c;if(!a)return!1;var b=this.x,d=this.y,g=this.z,e=this.m,f=this.spatialReference,k=a.z,m=a.m,
h=a.x;c=a.y;a=a.spatialReference;if(!f.equals(a))if(f.isWebMercator&&a.isWGS84)c=l.lngLatToXY(h,c),h=c[0],c=c[1],a=f;else if(f.isWGS84&&a.isWebMercator)c=l.xyToLngLat(h,c),h=c[0],c=c[1],a=f;else return!1;return b===h&&d===c&&g===k&&e===m&&f.wkid===a.wkid};b.prototype.offset=function(a,c,b){return w.offsetPoint(this,a,c,b)};b.prototype.normalize=function(){if(!this.spatialReference)return this;var a=x.getInfo(this.spatialReference);if(!a)return this;var c=this.x,b=a.valid,a=b[0],d=b[1],b=2*d;c>d?(a=
Math.ceil(Math.abs(c-d)/b),c-=a*b):c<a&&(a=Math.ceil(Math.abs(c-a)/b),c+=a*b);this._set("x",c);return this};b.prototype.distance=function(a){return h.distance(this,a)};b.prototype.toArray=function(){var a=this.hasZ,b=this.hasM;return a&&b?[this.x,this.y,this.z,this.m]:a?[this.x,this.y,this.z]:b?[this.x,this.y,this.m]:[this.x,this.y]};b.prototype.toJSON=function(a){return this.write(null,a)};var h;f([d.property({dependsOn:["x","y","z","m","spatialReference"]})],b.prototype,"cache",void 0);f([d.property({type:Boolean,
dependsOn:["m"],json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],b.prototype,"hasM",null);f([d.property({type:Boolean,dependsOn:["z"],json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],b.prototype,"hasZ",null);f([d.property({type:Number,dependsOn:["y"]})],b.prototype,"latitude",null);f([d.property({type:Number,dependsOn:["x"]})],b.prototype,"longitude",null);f([d.property({type:Number,json:{type:[Number,String],write:{isRequired:!0,allowNull:!0}}}),d.cast(function(a){return isNaN(a)?
a:t.ensureNumber(a)})],b.prototype,"x",void 0);f([d.writer("x")],b.prototype,"writeX",null);f([d.reader("x")],b.prototype,"readX",null);f([d.property({type:Number,json:{write:!0}})],b.prototype,"y",void 0);f([d.property({type:Number,json:{write:{overridePolicy:function(){return{enabled:this.hasZ}}}}})],b.prototype,"z",void 0);f([d.property({type:Number,json:{write:{overridePolicy:function(){return{enabled:this.hasM}}}}})],b.prototype,"m",void 0);return b=h=f([d.subclass("esri.geometry.Point")],b)}(d.declared(u));
k.prototype.toJSON.isDefaultToJSON=!0;return k});