// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/date ../../core/JSONSupport ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../../intl/date ../../intl/number".split(" "),function(n,p,h,c,k,l,b,m,e,f){return function(g){function a(a){a=g.call(this)||this;a.dateFormat=null;a.digitSeparator=!1;a.places=null;return a}h(a,g);d=a;a.prototype.clone=function(){return new d({dateFormat:this.dateFormat,digitSeparator:this.digitSeparator,
places:this.places})};a.prototype.format=function(a){return this.dateFormat?e.formatDate(a,e.convertDateFormatToIntlOptions(this.dateFormat)):f.formatNumber(a,f.convertNumberFormatToIntlOptions(this))};var d;c([b.enumeration.serializable()(k.dictionary)],a.prototype,"dateFormat",void 0);c([b.property({type:Boolean,json:{write:!0}})],a.prototype,"digitSeparator",void 0);c([b.property({type:m.Integer,json:{write:!0}})],a.prototype,"places",void 0);return a=d=c([b.subclass("esri.popup.support.FieldInfoFormat")],
a)}(b.declared(l.JSONSupport))});