// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/i18n!./ClassedColorSlider/nls/ClassedColorSlider ../../core/accessorSupport/decorators ../../renderers/support/ClassBreakInfo ./SmartMappingSliderBase ./ClassedColorSlider/ClassedColorSliderViewModel ./../support/widget".split(" "),function(q,r,t,k,f,l,c,m,n,p,e){return function(h){function b(a){a=h.call(this)||this;a._bgFillId=null;a._rampFillId=null;a.breaks=
null;a.label=l.widgetLabel;a.viewModel=new p;a._bgFillId=a.id+"-bg-fill";a._rampFillId=a.id+"-linear-gradient";return a}k(b,h);g=b;b.fromRendererResult=function(a,d){a=a.renderer.classBreakInfos.map(function(a){return{min:a.minValue,max:a.maxValue,color:a.symbol.color}});return new g({breaks:a,histogramConfig:{bins:d?d.bins:[]}})};b.prototype.updateClassBreakInfos=function(a){var d=this.breaks;if(d.length!==a.length)console.error("Number of input breakInfos must match number of slider breaks: "+d.length);
else return a.map(function(a,b){a=a.symbol;a.color=d[b].color;return new m.default({minValue:d[b].min,maxValue:d[b].max,symbol:a})})};b.prototype.updateFromRendererResult=function(a,b){a=a.renderer.classBreakInfos.map(function(a){return{min:a.minValue,max:a.maxValue,color:a.symbol.color}});this.set({breaks:a,histogramConfig:{bins:b?b.bins:[]}})};b.prototype.render=function(){var a,b=this.label,c="disabled"===this.state,f=this.classes("esri-classed-color-slider","esri-widget","esri-widget--panel",
(a={},a["esri-disabled"]=c,a));return e.tsx("div",{"aria-label":b,class:f},c?null:this.renderContent(this.renderRamp(),"esri-classed-color-slider__slider-container","esri-classed-color-slider__histogram-container"))};b.prototype.renderRamp=function(){var a=this._bgFillId,b=this._rampFillId,c=this.viewModel.getStopInfo();return e.tsx("div",{class:"esri-classed-color-slider__ramp"},e.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},e.tsx("defs",null,this.renderRampFillDefinition(b,c),this.renderBackgroundFillDefinition(a)),
e.tsx("rect",{x:"0",y:"0",fill:"url(#"+a+")",height:"100%",width:"100%"}),e.tsx("rect",{x:"0",y:"0",fill:"url(#"+b+")",height:"100%",width:"100%"})))};var g;f([c.aliasOf("viewModel.breaks")],b.prototype,"breaks",void 0);f([c.property()],b.prototype,"label",void 0);f([c.property(),e.renderable("viewModel.breaks viewModel.hasTimeData viewModel.labelFormatFunction viewModel.max viewModel.min viewModel.values".split(" "))],b.prototype,"viewModel",void 0);return b=g=f([c.subclass("esri.widgets.smartMapping.ClassedColorSlider")],
b)}(c.declared(n.SmartMappingSliderBase))});