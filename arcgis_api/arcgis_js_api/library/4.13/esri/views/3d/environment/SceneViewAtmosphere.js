// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/accessorSupport/decorators".split(" "),function(a,b,f,e,g,d){Object.defineProperty(b,"__esModule",{value:!0});a=function(a){function c(){return null!==a&&a.apply(this,arguments)||this}f(c,a);b=c;Object.defineProperty(c.prototype,"quality",{set:function(a){-1!==["low","high"].indexOf(a)&&this._set("quality",a)},enumerable:!0,configurable:!0});c.prototype.clone=
function(){return new b({quality:this.quality})};var b;e([d.property({type:["low","high"],value:"low"})],c.prototype,"quality",null);return c=b=e([d.subclass("esri.views.3d.environment.SceneViewAtmosphere")],c)}(d.declared(g));b.SceneViewAtmosphere=a;b.default=a});