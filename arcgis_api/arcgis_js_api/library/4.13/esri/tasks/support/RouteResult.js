// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/decorateHelper ../../core/tsSupport/declareExtendsHelper ../../Graphic ../../core/JSONSupport ../../core/accessorSupport/decorators ./DirectionsFeatureSet".split(" "),function(k,l,c,f,d,g,b,h){return function(e){function a(a){a=e.call(this,a)||this;a.directions=null;a.route=null;a.routeName=null;a.stops=null;return a}f(a,e);c([b.property({type:h,json:{write:!0}})],a.prototype,"directions",void 0);c([b.property({type:d,json:{write:!0}})],a.prototype,"route",
void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"routeName",void 0);c([b.property({type:[d],json:{write:!0}})],a.prototype,"stops",void 0);return a=c([b.subclass("esri.tasks.support.RouteResult")],a)}(b.declared(g.JSONSupport))});