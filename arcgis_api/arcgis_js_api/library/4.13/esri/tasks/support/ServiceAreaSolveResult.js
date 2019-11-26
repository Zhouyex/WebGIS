// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../geometry ../../Graphic ../../core/JSONSupport ../../core/maybe ../../core/accessorSupport/decorators ../../geometry/SpatialReference ./NAMessage".split(" "),function(r,t,k,c,d,f,l,m,b,n,p){function g(b){return b.features.map(function(a){var q=n.fromJSON(b.spatialReference);a=f.fromJSON(a);m.expect(a.geometry).spatialReference=q;return a})}function e(b){return b.features.map(function(a){a.geometry.spatialReference=
b.spatialReference;return d.fromJSON(a.geometry)})}return function(h){function a(a){a=h.call(this)||this;a.facilities=null;a.messages=null;a.pointBarriers=null;a.polylineBarriers=null;a.polygonBarriers=null;a.serviceAreaPolylines=null;a.serviceAreaPolygons=null;return a}k(a,h);a.prototype.readFacilities=function(a){return e(a)};a.prototype.readPointBarriers=function(a,b){return e(b.barriers)};a.prototype.readPolylineBarriers=function(a){return e(a)};a.prototype.readPolygonBarriers=function(a){return e(a)};
a.prototype.readIncidents=function(a,b){return g(b.saPolylines)};a.prototype.readServiceAreaPolygons=function(a,b){return g(b.saPolygons)};c([b.property({type:[d.Point]})],a.prototype,"facilities",void 0);c([b.reader("facilities")],a.prototype,"readFacilities",null);c([b.property({type:[p]})],a.prototype,"messages",void 0);c([b.property({type:[d.Point]})],a.prototype,"pointBarriers",void 0);c([b.reader("pointBarriers",["barriers"])],a.prototype,"readPointBarriers",null);c([b.property({type:[d.Polyline]})],
a.prototype,"polylineBarriers",void 0);c([b.reader("polylineBarriers")],a.prototype,"readPolylineBarriers",null);c([b.property({type:[d.Polygon]})],a.prototype,"polygonBarriers",void 0);c([b.reader("polygonBarriers")],a.prototype,"readPolygonBarriers",null);c([b.property({type:[f]})],a.prototype,"serviceAreaPolylines",void 0);c([b.reader("serviceAreaPolylines",["saPolylines"])],a.prototype,"readIncidents",null);c([b.property({type:[f]})],a.prototype,"serviceAreaPolygons",void 0);c([b.reader("serviceAreaPolygons",
["saPolygons"])],a.prototype,"readServiceAreaPolygons",null);return a=c([b.subclass("esri.tasks.support.ServiceAreaSolveResult")],a)}(b.declared(l.JSONSupport))});