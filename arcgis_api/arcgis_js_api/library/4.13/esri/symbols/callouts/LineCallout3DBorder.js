// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../Color ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ../support/materialUtils".split(" "),function(b,a,f,e,g,h,k,d,l){Object.defineProperty(a,"__esModule",{value:!0});b=function(b){function c(){var a=null!==b&&b.apply(this,arguments)||this;a.color=new g("white");return a}f(c,b);a=c;c.prototype.clone=function(){return new a({color:k.clone(this.color)})};var a;e([d.property(l.colorAndTransparencyProperty)],
c.prototype,"color",void 0);return c=a=e([d.subclass("esri.symbols.callouts.LineCallout3DBorder")],c)}(d.declared(h.JSONSupport));a.LineCallout3DBorder=b;a.default=b});