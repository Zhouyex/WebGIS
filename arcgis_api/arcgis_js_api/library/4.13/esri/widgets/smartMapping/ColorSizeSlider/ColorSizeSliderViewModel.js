// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/maybe ../../../core/accessorSupport/decorators ../../../renderers/support/utils ../SmartMappingSliderViewModel".split(" "),function(t,u,n,p,h,k,d,q,r){return function(l){function b(a){return l.call(this)||this}p(b,l);Object.defineProperty(b.prototype,"stops",{set:function(a){if(a&&a.length){var e=a.map(function(a){return a.value}),b=this.max,
c=this.min,f={};k.isSome(c)&&e.some(function(a){return a<c})&&(f.min=Math.min.apply(Math,e));k.isSome(b)&&e.some(function(a){return a>b})&&(f.max=Math.max.apply(Math,e));this.set(n({},f))}this._set("stops",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"values",{get:function(){var a=this.stops;if(!a||!a.length||2>a.length)return[];a=a.map(function(a){return a.value});return[a[0],a[a.length-1]]},enumerable:!0,configurable:!0});b.prototype.setValue=function(a,b){var e=this.min;
b>this.max||b<e||(a=this._getColorStopChanges(a,b),this._updateColorStops(a),this.notifyChange("values"),this.notifyChange("labels"))};b.prototype.getColorStopInfo=function(){var a=this.min,b=this.max,m=this.stops;return m&&m.length?m.map(function(c){return{color:c.color,offset:(b-c.value)/(b-a)}}):[]};b.prototype._getColorStopChanges=function(a,b){var e=this.max,c=this.min,f=this.stops,d=this.values,h=0===a?0:this.stops.length-1,c=0===a?c:d[a-1];a=a===d.length-1?e:d[a+1];var g=f.map(function(a){return a.value});
g[h]=Math.max(Math.min(b,a),c);var k=g[g.length-1]-g[0],l=f.length-1;return g.map(function(a,b){return{index:b,value:g[0]+b*k/l}})};b.prototype._updateColorStops=function(a){q.updateColorStops({changes:a,stops:this.stops,isDate:this.hasTimeData})};h([d.property()],b.prototype,"stops",null);h([d.property({dependsOn:["stops"],readOnly:!0})],b.prototype,"values",null);return b=h([d.subclass("esri.widgets.smartMapping.ColorSizeSlider.ColorSizeSliderViewModel")],b)}(d.declared(r))});