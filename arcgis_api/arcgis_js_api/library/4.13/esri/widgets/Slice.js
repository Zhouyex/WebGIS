// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!./Slice/nls/Slice ../core/accessorSupport/decorators ./Widget ./Slice/SliceViewModel ./support/widget".split(" "),function(t,u,q,d,e,b,r,m,a){return function(p){function c(a){a=p.call(this)||this;a.view=null;a.viewModel=new m;return a}q(c,p);c.prototype.render=function(){var c=this,d=this.viewModel.isSupported,b=this.viewModel.active,g="disabled"===this.viewModel.state,h="ready"===this.viewModel.state,
k="slicing"===this.viewModel.state||"sliced"===this.viewModel.state,f="exclude"===this.layersMode,l=["esri-button esri-button--secondary",g&&"esri-button--disabled"],g=b&&!k||f?null:a.tsx("button",{disabled:g,class:this.classes.apply(this,["esri-slice__clear-button"].concat(l)),bind:this,onclick:this._newSlice,key:"esri-slice__clear"},e.newSlice),m=k&&!f?a.tsx("button",{class:this.classes.apply(this,["esri-slice__exclude-button"].concat(l)),bind:this,onclick:function(){c.viewModel.enterExcludeLayerMode()},
key:"esri-slice__exclude"},e.excludeLayer):null,l=b&&f?a.tsx("button",{class:this.classes.apply(this,["esri-slice__cancel-button"].concat(l)),bind:this,onclick:function(){c.viewModel.exitExcludeLayerMode()},key:"esri-slice__cancel-exclude"},e.cancel):null,n=null;b&&(f?n=e.excludeHint:h&&(n=e.hint));b=n?a.tsx("div",{class:"esri-slice__hint",key:"esri-slice__hint"},a.tsx("p",{class:"esri-slice__hint-text"},n)):null;h=this.excludedLayers?this.excludedLayers.toArray().map(function(b){return a.tsx("li",
{class:"esri-slice__layer-item",key:b.uid},a.tsx("a",{href:"",onclick:function(){c.excludedLayers.remove(b);return!1},class:"esri-icon-close esri-slice__cross",title:e.includeLayer}),b.title)}):[];this.excludeGroundSurface&&h.push(a.tsx("li",{class:"esri-slice__layer-item",key:"ground"},a.tsx("a",{href:"",onclick:function(){return c.excludeGroundSurface=!1},class:"esri-icon-close esri-slice__cross",title:e.includeLayer}),e.ground));k=!f&&k&&0<h.length?a.tsx("div",{class:"esri-slice__settings",key:"esri-slice__settings"},
a.tsx("h3",{class:"esri-slice__settings-title esri-widget__heading"},e.excludedLayers),a.tsx("ul",null,h)):null;f=a.tsx("div",{class:"esri-slice__panel--error",key:"esri-slice__unsupported"},a.tsx("p",null,e.unsupported));g=a.tsx("div",{class:"esri-slice__actions"},m,l,g);d=this.visible?a.tsx("div",{class:"esri-slice__container"},d?[b,k,g]:f):null;return a.tsx("div",{class:"esri-slice esri-widget esri-widget--panel",role:"presentation"},d)};c.prototype._newSlice=function(){this.viewModel.newSlice()};
d([b.aliasOf("viewModel.view")],c.prototype,"view",void 0);d([b.aliasOf("viewModel.visible"),a.renderable()],c.prototype,"visible",void 0);d([b.aliasOf("viewModel.active"),a.renderable()],c.prototype,"active",void 0);d([b.property({type:m})],c.prototype,"viewModel",void 0);d([b.aliasOf("viewModel.plane"),a.renderable()],c.prototype,"plane",void 0);d([b.aliasOf("viewModel.layersMode"),a.renderable()],c.prototype,"layersMode",void 0);d([b.aliasOf("viewModel.excludedLayers"),a.renderable()],c.prototype,
"excludedLayers",void 0);d([b.aliasOf("viewModel.excludeGroundSurface"),a.renderable()],c.prototype,"excludeGroundSurface",void 0);d([a.accessibleHandler()],c.prototype,"_newSlice",null);return c=d([b.subclass("esri.widgets.Slice")],c)}(b.declared(r))});