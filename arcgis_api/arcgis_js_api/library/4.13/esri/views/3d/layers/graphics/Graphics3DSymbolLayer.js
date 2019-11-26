// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../Color ../../../../core/arrayUtils ../../../../core/compilerUtils ../../../../core/Logger ../../../../core/mathUtils ../../../../core/maybe ../../../../core/scheduling ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4f64 ./ElevationContext ./featureExpressionInfoUtils ./Graphics3DSymbolCommonCode ./graphicUtils ./Loadable ./symbolComplexity".split(" "),
function(m,g,w,I,J,x,y,z,A,r,h,B,C,D,t,n,p,q,E,F){function k(e,a){e=null!=e?a.attributes[e]:0;return null!=e&&isFinite(e)?e:0}Object.defineProperty(g,"__esModule",{value:!0});var e=new t,l=A.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayer");m=function(g){function a(b,c,d,a){var f=g.call(this)||this;f.complexity=null;f.logger=l;f._elevationOptions={supportsOffsetAdjustment:!1,supportsOnTheGround:!0};f.symbol=b;f.symbolLayer=c;f._context=d;f._symbolLayerOrder=d.layerOrder;f._symbolLayerOrderDelta=
d.layerOrderDelta;f._elevationContext=new t;f._material=null;f.complexity=f.computeComplexity();f._geometryCreationWarningHandle=null;f._updateDrivenProperties(a);f._updateElevationContext();f._logWarning;return f}w(a,g);a.prototype.getCachedSize=function(){return null};a.prototype._logWarning=function(b){l.warn(b)};a.prototype._logGeometryCreationWarnings=function(b,c,d,a){var f=this;if(null==this._geometryCreationWarningHandle){var u=b.geometryData&&b.geometryData.polygons;a+=" geometry failed to be created";
var e=null;b.projectionSuccess?!c.length||1===c.length&&!c[0].length?e=a+" (no "+d+" were defined)":Array.isArray(c)&&Array.isArray(c[0])?c.some(function(b){return 1===b.length})?e=a+" ("+d+" should contain at least 2 vertices)":u&&0===u.length&&"rings"===d&&(e=a+" (filled "+d+" should use clockwise winding - try reversing the order of vertices)"):e=a+" ("+d+" should be defined as a 2D array)":e=a+" (failed to project geometry to view spatial reference)";e&&(this._geometryCreationWarningHandle=B.schedule(function(){return f._onNextTick()}),
l.warn(e))}};a.prototype._onNextTick=function(){this._geometryCreationWarningHandle=null};a.prototype._validateGeometryType=function(b,c,a){if(y.includes(c,b.type))return!0;this.logger.warn("unsupported geometry type for "+a+(" symbol: "+b.type));return!1};a.prototype._validateGeometry=function(b){return"point"!==b.type||r.isFinite(b.x)&&r.isFinite(b.y)?!0:(l.warn("point coordinate is not a valid number, graphic skipped"),!1)};a.prototype._defaultElevationInfoNoZ=function(){return G};a.prototype._defaultElevationInfoZ=
function(){return H};a.prototype._updateElevationContext=function(){this._elevationContext.setDefaults();var b=this._context.layer.elevationInfo;b&&this._elevationContext.mixinApi(b);this._elevationContext.featureExpressionInfoContext=this._context.featureExpressionInfoContext};a.prototype.getDefaultElevationInfo=function(b){return b.hasZ?this._defaultElevationInfoZ():this._defaultElevationInfoNoZ()};a.prototype.getGeometryElevationMode=function(b,c){void 0===c&&(c=this.getDefaultElevationInfo(b));
return this._elevationContext.mode||c.mode};a.prototype.getGraphicElevationContext=function(b){var c=h.expect(b.geometry),a=this.getDefaultElevationInfo(c);e.setUnit(null!=this._elevationContext.unit?this._elevationContext.unit:a.unit);e.mode=this.getGeometryElevationMode(c,a);e.setOffsetMeters(null!=this._elevationContext.meterUnitOffset?this._elevationContext.meterUnitOffset:a.offset);e.featureExpressionInfoContext=this._elevationContext.featureExpressionInfoContext;this._elevationOptions.supportsOnTheGround||
"on-the-ground"!==e.mode||(e.mode="relative-to-ground",e.setOffsetMeters(0),e.featureExpressionInfoContext=n.zeroContext);b=n.createFeature(b,this._context.layer);n.setContextFeature(e.featureExpressionInfoContext,b);return e};a.prototype.prepareSymbolLayerPatch=function(b){};a.prototype.updateGeometry=function(b,c){return!1};a.prototype.onRemoveGraphic=function(b){};a.prototype._getDrapedZ=function(){return-2};a.prototype._updateDrivenProperties=function(b){var c={color:!1,opacity:!1,size:!1};b||
(b=this._context.renderer)&&"visualVariables"in b&&b.visualVariables&&b.visualVariables.forEach(function(b){switch(b.type){case "color":c.color=!0;if(b.stops)for(var a=0;a<b.stops.length;a++){var d=b.stops[a].color;d&&(Array.isArray(d)&&3<d.length&&255!==d[3]||void 0!==d.a&&255!==d.a)&&(c.opacity=!0)}break;case "opacity":c.opacity=!0;break;case "size":c.size=!0}});this._drivenProperties=c};a.prototype._isPropertyDriven=function(b){return this._drivenProperties[b]};a.prototype._getLayerOpacity=function(){if(this._context.layerView&&
"fullOpacity"in this._context.layerView)return this._context.layerView.fullOpacity;var b=this._context.layer.opacity;return null==b?1:b};a.prototype._getCombinedOpacity=function(b,c){void 0===c&&(c=v);var a;a=1*this._getLayerOpacity();if(this._isPropertyDriven("opacity"))return a;h.isSome(b)?a*=b.a:c.hasIntrinsicColor||(a=0);return a};a.prototype._getCombinedOpacityAndColor=function(b,a){void 0===a&&(a=v);a=this._getCombinedOpacity(b,a);if(this._isPropertyDriven("color"))return q.mixinColorAndOpacity(null,
a);b=h.isSome(b)?x.toUnitRGB(b):C.vec3f64.ONES;return q.mixinColorAndOpacity(b,a)};a.prototype._getVertexOpacityAndColor=function(b,a,d){var c=this._isPropertyDriven("color")?b.color:null;b=this._isPropertyDriven("opacity")?b.opacity:null;c=q.mixinColorAndOpacity(c,b);d&&(c[0]*=d,c[1]*=d,c[2]*=d,c[3]*=d);return a?new a(c):c};a.prototype._getIdHint=function(b){void 0===b&&(b="");return this._context.layer.id+"_symbol"+b};a.prototype.isFastUpdatesEnabled=function(){return this._fastUpdates&&this._fastUpdates.enabled};
a.prototype.updateSymbolLayerOrder=function(b,a){this._symbolLayerOrder=b;this._symbolLayerOrderDelta=a};a.prototype.computeComplexity=function(){return F.defaultSymbolLayerComplexity(this.symbol,this.symbolLayer)};a.prototype.setDrawOrder=function(b,a,d){this.updateSymbolLayerOrder(b,a);this._material&&(this._material.renderPriority=b,d.add(this._material.id))};a.prototype.destroy=function(){this.abortLoad();this._geometryCreationWarningHandle&&(this._geometryCreationWarningHandle.remove(),this._geometryCreationWarningHandle=
null)};a.prototype.globalPropertyChanged=function(b,a,d){switch(b){case "opacity":return this.layerOpacityChanged(a,d);case "elevationInfo":return b=this._elevationContext.mode,this._updateElevationContext(),this.layerElevationInfoChanged(a,d,b)===p.SymbolUpdateType.RECREATE?!1:!0;case "slicePlaneEnabled":return this.slicePlaneEnabledChanged(a,d);case "physicalBasedRenderingEnabled":return this.physicalBasedRenderingChanged(a,d);case "pixelRatio":return this.pixelRatioChanged(a,d);default:return z.neverReachedSilent(b),
!1}};a.prototype.updateGraphics3DGraphicElevationInfo=function(b,a,d){var c=this,e=p.SymbolUpdateType.UPDATE;b.forEach(function(b){var f=a(b);h.isSome(f)?(b=c.getGraphicElevationContext(b.graphic),f.needsElevationUpdates=d(b.mode),f.elevationContext.set(b)):e=p.SymbolUpdateType.RECREATE});return e};a.prototype.applyRendererDiff=function(b,a){return!1};a.prototype.getFastUpdateAttrValues=function(b){if(!this._fastUpdates.enabled)return null;var a=this._fastUpdates.visualVariables,d=a.size?k(a.size.field,
b):0,e=a.color?k(a.color.field,b):0;b=a.opacity?k(a.opacity.field,b):0;return D.vec4f64.fromValues(d,e,b,0)};return a}(E.Loadable);g.Graphics3DSymbolLayer=m;g.getAttributeValue=k;var G={mode:"on-the-ground",offset:0,unit:"meters"},H={mode:"absolute-height",offset:0,unit:"meters"},v={hasIntrinsicColor:!1};g.default=m});