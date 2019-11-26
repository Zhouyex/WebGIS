// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../symbols ../../core/JSONSupport ../../core/accessorSupport/decorators ../../symbols/support/jsonUtils".split(" "),function(c,b,h,e,g,k,d,f){Object.defineProperty(b,"__esModule",{value:!0});c=function(c){function a(a){a=c.call(this,a)||this;a.description=null;a.label=null;a.symbol=null;a.value=null;return a}h(a,c);b=a;a.prototype.clone=function(){return new b({value:this.value,description:this.description,
label:this.label,symbol:this.symbol?this.symbol.clone():null})};a.prototype.getMeshHash=function(){var a=JSON.stringify(this.symbol&&this.symbol.toJSON());return this.value+"."+a};var b;e([d.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);e([d.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);e([d.property({types:g.symbolTypesRenderer,json:{origins:{"web-scene":{types:g.symbolTypesRenderer3D,read:f.read,write:f.writeTarget}},read:f.read,write:f.writeTarget}})],
a.prototype,"symbol",void 0);e([d.property({type:String,json:{write:!0}})],a.prototype,"value",void 0);return a=b=e([d.subclass("esri.renderers.support.UniqueValueInfo")],a)}(d.declared(k.JSONSupport));b.UniqueValueInfo=c;b.default=c});