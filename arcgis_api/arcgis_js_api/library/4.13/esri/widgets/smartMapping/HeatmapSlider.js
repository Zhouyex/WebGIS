// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/i18n!./HeatmapSlider/nls/HeatmapSlider ../../core/accessorSupport/decorators ./SmartMappingSliderBase ./HeatmapSlider/HeatmapSliderViewModel ./../support/widget".split(" "),function(n,p,q,h,d,k,c,l,m,e){return function(g){function b(a){a=g.call(this)||this;a._rampFillId=null;a.label=k.widgetLabel;a.stops=null;a.viewModel=new m;a.slider.set({labelsVisible:!1,
labelInputsEnabled:!1,rangeLabelInputsEnabled:!1});a._rampFillId=a.id+"-ramp-fill";return a}h(b,g);f=b;b.fromHeatmapRendererResult=function(a){return new f({stops:a.renderer.colorStops})};b.prototype.render=function(){var a,b=this.label,c="disabled"===this.state,d=this.classes("esri-heatmap-slider","esri-widget","esri-widget--panel",(a={},a["esri-disabled"]=c,a));return e.tsx("div",{"aria-label":b,class:d},c?null:this.renderContent(this.renderRamp(),"esri-heatmap-slider__slider-container"))};b.prototype.renderRamp=
function(){var a=this._rampFillId,b=this.viewModel.getStopInfo();return e.tsx("div",{class:"esri-heatmap-slider__ramp"},e.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},e.tsx("defs",null,this.renderRampFillDefinition(a,b)),e.tsx("rect",{x:"0",y:"0",fill:"url(#"+a+")",height:"100%",width:"100%"})))};var f;d([c.property()],b.prototype,"label",void 0);d([c.aliasOf("viewModel.stops")],b.prototype,"stops",void 0);d([c.property(),e.renderable(["viewModel.labelFormatFunction","viewModel.max","viewModel.max",
"viewModel.stops","viewModel.values"])],b.prototype,"viewModel",void 0);return b=f=d([c.subclass("esri.widgets.smartMapping.HeatmapSlider")],b)}(c.declared(l.SmartMappingSliderBase))});