// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(k,l,f,c,g,h,b){var d=new g.default({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});return function(e){function a(a){a=e.call(this,a)||this;a.distance=0;a.units=null;return a}f(a,e);c([b.property({json:{write:!0}})],
a.prototype,"distance",void 0);c([b.property({json:{read:d.read,write:d.write}})],a.prototype,"units",void 0);return a=c([b.subclass("esri/tasks/support/LinearUnit")],a)}(b.declared(h.JSONSupport))});