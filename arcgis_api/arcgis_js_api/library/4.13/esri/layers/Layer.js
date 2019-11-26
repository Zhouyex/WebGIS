// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../config ../geometry ../request ../core/Error ../core/Evented ../core/Identifiable ../core/Loadable ../core/Logger ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators @dojo/framework/shim/Promise".split(" "),function(n,B,C,r,d,k,g,t,f,u,l,v,w,x,p,y,z,c){var A=0,q=p.getLogger("esri.layers.Layer");
return function(m){function a(){var b=null!==m&&m.apply(this,arguments)||this;b.attributionDataUrl=null;b.fullExtent=new f.Extent(-180,-90,180,90,f.SpatialReference.WGS84);b.legendEnabled=!0;b.listMode="show";b.opacity=1;b.parent=null;b.popupEnabled=!0;b.attributionVisible=!0;b.spatialReference=f.SpatialReference.WGS84;b.title=null;b.type=null;b.url=null;b.visible=!0;return b}r(a,m);a.fromArcGISServerUrl=function(b){return g(this,void 0,void 0,function(){var a,c,d;return k(this,function(e){switch(e.label){case 0:return a=
"string"===typeof b?{url:b}:b,[4,new Promise(function(b,a){n(["./support/arcgisLayers"],b,a)})];case 1:c=e.sent(),e.label=2;case 2:return e.trys.push([2,4,,5]),[4,c.fromUrl(a)];case 3:return[2,e.sent()];case 4:throw d=e.sent(),q.error("#fromArcGISServerUrl({ url: '"+a.url+"'})","Failed to create layer from arcgis server url",d),d;case 5:return[2]}})})};a.fromPortalItem=function(b){return g(this,void 0,void 0,function(){var a,d,c,e,f,g;return k(this,function(h){switch(h.label){case 0:return a="portalItem"in
b?b:{portalItem:b},[4,new Promise(function(b,a){n(["../portal/support/portalLayers"],b,a)})];case 1:d=h.sent(),h.label=2;case 2:return h.trys.push([2,4,,5]),[4,d.fromItem(a)];case 3:return[2,h.sent()];case 4:throw c=h.sent(),f=(e=a&&a.portalItem)&&e.id||"unset",g=e&&e.portal&&e.portal.url||t.portalUrl,q.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+g+"', id: '"+f+"')",c),c;case 5:return[2]}})})};a.prototype.initialize=function(){var b=this;this.when().catch(function(a){p.getLogger(b.declaredClass).error("#load()",
"Failed to load layer (title: '"+b.title+"', id: '"+b.id+"')",a)})};Object.defineProperty(a.prototype,"hasAttributionData",{get:function(){return null!=this.attributionDataUrl},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"id",{get:function(){return Date.now().toString(16)+"-layer-"+A++},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"parsedUrl",{get:function(){var b=this._get("url");return b?z.urlToObject(b):null},enumerable:!0,configurable:!0});a.prototype.createLayerView=
function(b,a){return g(this,void 0,void 0,function(){var c;return k(this,function(d){switch(d.label){case 0:if(!b)throw new l("layerview:module-unavailable","No LayerView module available for layer '${layer.declaredClass}' and view type: '${view.type}'",{view:b,layer:this});if(!("importLayerViewModule"in this))throw new l("layerview:override-method","Must provide implementation in '${layer.declaredClass}'",{view:b,layer:this});return[4,this.importLayerViewModule(b)];case 1:return c=d.sent(),y.throwIfAborted(a),
"default"in c?[2,new c.default({layer:this,view:b})]:[2,new c({layer:this,view:b})]}})})};a.prototype.destroyLayerView=function(b){"destroy"in b&&b.destroy()};a.prototype.fetchAttributionData=function(){return g(this,void 0,void 0,function(){var b,a;return k(this,function(c){switch(c.label){case 0:return b=this.attributionDataUrl,this.hasAttributionData&&b?[4,u(b,{query:{f:"json"},responseType:"json"})]:[3,2];case 1:return a=c.sent(),[2,a.data];case 2:throw new l("layer:no-attribution-data","Layer does not have attribution data");
}})})};d([c.property({type:String})],a.prototype,"attributionDataUrl",void 0);d([c.property({type:f.Extent})],a.prototype,"fullExtent",void 0);d([c.property({readOnly:!0,dependsOn:["attributionDataUrl"]})],a.prototype,"hasAttributionData",null);d([c.property({type:String})],a.prototype,"id",null);d([c.property({type:Boolean})],a.prototype,"legendEnabled",void 0);d([c.property({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0);d([c.property({type:Number,range:{min:0,max:1},nonNullable:!0})],
a.prototype,"opacity",void 0);d([c.property()],a.prototype,"parent",void 0);d([c.property({readOnly:!0,dependsOn:["url"]})],a.prototype,"parsedUrl",null);d([c.property({type:Boolean})],a.prototype,"popupEnabled",void 0);d([c.property({type:Boolean})],a.prototype,"attributionVisible",void 0);d([c.property({type:f.SpatialReference})],a.prototype,"spatialReference",void 0);d([c.property({type:String})],a.prototype,"title",void 0);d([c.property({type:String,readOnly:!0,json:{read:!1}})],a.prototype,"type",
void 0);d([c.property()],a.prototype,"url",void 0);d([c.property({type:Boolean,nonNullable:!0})],a.prototype,"visible",void 0);return a=d([c.subclass("esri.layers.Layer")],a)}(c.declared(v.EventedMixin(w.IdentifiableMixin(x))))});