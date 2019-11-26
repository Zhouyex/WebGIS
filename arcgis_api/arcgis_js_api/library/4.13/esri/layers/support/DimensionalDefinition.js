// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType".split(" "),function(l,m,g,c,h,k,b,d){return function(f){function a(a){a=f.call(this)||this;a.variableName=null;a.dimensionName=null;a.values=[];a.isSlice=!1;return a}g(a,f);e=a;a.prototype.clone=function(){return new e({variableName:this.variableName,dimensionName:this.dimensionName,
values:k.clone(this.values),isSlice:this.isSlice})};var e;c([b.property({type:String,json:{write:!0}})],a.prototype,"variableName",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"dimensionName",void 0);c([b.property({type:d.types.array(d.types.oneOf([d.types.native(Number),d.types.array(d.types.native(Number))])),json:{write:!0}})],a.prototype,"values",void 0);c([b.property({type:Boolean,json:{write:!0}})],a.prototype,"isSlice",void 0);return a=e=c([b.subclass("esri.layers.support.DimensionalDefinition")],
a)}(b.declared(h.JSONSupport))});