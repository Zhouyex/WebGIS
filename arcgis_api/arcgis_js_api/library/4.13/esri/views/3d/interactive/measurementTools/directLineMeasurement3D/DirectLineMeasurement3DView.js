// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/Handles ../../../../../core/mathUtils ../../../../../core/screenUtils ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f64 ../../../../../core/libs/gl-matrix-2/vec2 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ./LaserLineRenderer ../support/Label ../support/LabelSegment ../support/labelUtils ../support/PathSegmentInterpolator ../support/viewUtils ../../../support/projectionUtils ../../../support/stack ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryData ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/lib/Intersector ../../../webgl-engine/lib/Layer ../../../webgl-engine/lib/Object3D ../../../webgl-engine/materials/ColorMaterial ../../../webgl-engine/materials/MeasurementArrowMaterial ../../../webgl-engine/materials/RibbonLineMaterial ../../../../interactive/manipulatorUtils".split(" "),
function(m,U,V,W,E,t,q,F,L,G,l,r,M,A,w,B,H,v,I,h,C,N,J,O,P,p,Q,R,D,S){m=[1,.5,0,.75];var T={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:.75,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5,triangleColor:m,triangleLineWidth:3,triangleCornerSize:32,triangleSubdivisions:128,arrowWidth:16,arrowOutlineColor:[1,.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,
arrowSubdivisions:128,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:m,guideLineWidth:2,guideLineColor:m,guideStippleLengthPixels:6,labelDistance:25};m=function(){function b(a,c){void 0===c&&(c={});this._visible=!1;this._laserLineRenderer=null;this._directDistanceLabel=new A;this._horizontalDistanceLabel=new A;this._verticalDistanceLabel=new A;this._handles=new E;this._listenerHandles=null;this._cursorPosition=r.vec3f64.create();this._startPosition=r.vec3f64.create();this._endPosition=
r.vec3f64.create();this._centerPosition=r.vec3f64.create();this._cornerPosition=r.vec3f64.create();this._arrowLabelSegment=new w;this._horizontalLabelSegment=new w;this._verticalLabelSegment=new w;this._geodesicProjectionLabelSegment=new w;this._origin=r.vec3f64.create();this._originTransform=L.mat4f64.create();this._lastDraggedHandle=null;this._model=a;this._sceneView=a.sceneView;this._params=v.copyParameter(T,c);this._layer=new P("point-to-point-measurement",{isPickable:!1});this._createMaterials();
this._createObjects();this._intersector=new O(this._sceneView.viewingMode)}b.prototype.destroy=function(){this.hide();this._handles.destroy();this._handles=null};Object.defineProperty(b.prototype,"requiresCursorPoint",{get:function(){return"initial"===this._model.state&&this._model.active},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"cameraAboveGround",{get:function(){return this._sceneView.state.camera.aboveGround},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"visible",{get:function(){return this._visible},set:function(a){a?this.show():this.hide()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"testData",{get:function(){return{labels:{direct:this._directDistanceLabel,horizontal:this._horizontalDistanceLabel,vertical:this._verticalDistanceLabel},laserLineRenderer:this._laserLineRenderer}},enumerable:!0,configurable:!0});b.prototype.createManipulators=function(){var a=this,c=function(){var c=S.createSphereManipulator(a._sceneView,a._params.handleColor,
a._params.handleOpacity);c.visible=!1;c.hideOnGrab=!0;c.radius=a._params.handleRadius;return c},d=c(),f=c();this._model.startPoint&&(d.mapPoint=this._model.startPoint,d.visible=!0);this._model.endPoint&&(f.mapPoint=this._model.endPoint,f.visible=!0);var e=function(){var c=a._lastDraggedHandle;d.grabbing&&!f.grabbing&&(c="start");f.grabbing&&!d.grabbing&&(c="end");d.grabbing||f.grabbing||(c=null);var e=c!==a._lastDraggedHandle;a._lastDraggedHandle=c;e&&a.visible&&a._updateLaserLine()};this._handles.add([d.watch("grabbing",
function(){e()}),f.watch("grabbing",function(){e()})]);return{start:d,end:f}};b.prototype.show=function(){if(!this._visible){this._visible=!0;var a=this._sceneView._stage;this._laserLineRenderer=new M(this._sceneView.renderCoordsHelper,{glowColor:this._params.laserLineGlowColor,glowWidth:this._params.laserLineGlowWidth,innerColor:this._params.laserLineInnerColor,innerWidth:this._params.laserLineInnerWidth,globalAlpha:this._params.laserLineGlobalAlpha});a.addRenderPlugin(this._laserLineRenderer.renderSlots,
this._laserLineRenderer);this._addToStage(a);this._directDistanceLabel.addToView(this._sceneView);this._horizontalDistanceLabel.addToView(this._sceneView);this._verticalDistanceLabel.addToView(this._sceneView);this._initializeListeners();this._updateCursorPosition();this._updateStartPosition();this._updateEndPosition();this._updateLaserLine();this._updateView()}};b.prototype.hide=function(){if(this._visible){this._visible=!1;var a=this._sceneView._stage;a.removeRenderPlugin(this._laserLineRenderer);
this._laserLineRenderer=null;this._removeFromStage(a);this._directDistanceLabel.removeFromView(this._sceneView);this._horizontalDistanceLabel.removeFromView(this._sceneView);this._verticalDistanceLabel.removeFromView(this._sceneView);this._destroyListeners();this._sceneView.cursor=null}};b.prototype.pick=function(a){var c=this._sceneView.spatialReference;a=q.screenPointObjectToArray(a.screenPoint);a=this._sceneView.sceneIntersectionHelper.intersectToolIntersectorScreen(a,this._intersector).results.min;
var d=r.vec3f64.create();if(!a.getIntersectionPoint(d))return new b.PickResult;c=this._sceneView.renderCoordsHelper.fromRenderCoords(d,c);return new b.PickResult("TerrainRenderer"===a.intersector?"ground":"feature",d,c)};b.prototype.getElevation=function(a){return this._sceneView.basemapTerrain.ready?this._sceneView.basemapTerrain.getElevation(a)||0:0};b.prototype.overlappingHandles=function(a,c){return v.pointToPointScreenDistance(a,c,this._sceneView)<=this._params.handleRadius};b.prototype._createMaterials=
function(){this._triangleLineMaterial=new D({width:this._params.triangleLineWidth,color:this._params.triangleColor,polygonOffset:!0},"triangle-line");this._triangleLineMaterial.renderOccluded=4;this._triangleCornerMaterial=new Q({color:this._params.triangleColor,transparent:!0,writeDepth:!1,polygonOffset:!0},"triangle-corner");this._triangleCornerMaterial.renderOccluded=4;this._arrowMaterial=new R({outlineColor:this._params.arrowOutlineColor,stripeEvenColor:this._params.arrowStripeEvenColor,stripeOddColor:this._params.arrowStripeOddColor,
polygonOffset:!0},"arrow");this._arrowMaterial.renderOccluded=4;this._geodesicProjectionLineMaterial=new D({width:this._params.geodesicProjectionLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0},"geodesic-line");this._geodesicProjectionLineMaterial.renderOccluded=4;this._geodesicGuideLineMaterial=new D({width:this._params.guideLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0,stippleLength:0},"geodesic-guide");this._geodesicGuideLineMaterial.renderOccluded=
4};b.prototype._createObjects=function(){this._triangleLineObject=new p;this._layer.addObject(this._triangleLineObject);this._triangleCornerObject=new p;this._layer.addObject(this._triangleCornerObject);this._arrowObject=new p;this._layer.addObject(this._arrowObject);this._geodesicProjectionLineObject=new p;this._layer.addObject(this._geodesicProjectionLineObject);this._geodesicProjectionStartGuideObject=new p;this._layer.addObject(this._geodesicProjectionStartGuideObject);this._geodesicProjectionEndGuideObject=
new p;this._layer.addObject(this._geodesicProjectionEndGuideObject)};b.prototype._addToStage=function(a){a.add(0,this._layer);a.add(3,this._triangleLineMaterial);a.add(3,this._triangleCornerMaterial);a.add(3,this._arrowMaterial);a.add(3,this._geodesicProjectionLineMaterial);a.add(3,this._geodesicGuideLineMaterial);a.add(1,this._triangleLineObject);a.add(1,this._triangleCornerObject);a.add(1,this._arrowObject);a.add(1,this._geodesicProjectionLineObject);a.add(1,this._geodesicProjectionStartGuideObject);
a.add(1,this._geodesicProjectionEndGuideObject);a.addToViewContent([this._layer.id])};b.prototype._removeFromStage=function(a){a.removeFromViewContent([this._layer.id]);a.remove(0,this._layer.id);a.remove(3,this._triangleLineMaterial.id);a.remove(3,this._triangleCornerMaterial.id);a.remove(3,this._arrowMaterial.id);a.remove(3,this._geodesicProjectionLineMaterial.id);a.remove(3,this._geodesicGuideLineMaterial.id);a.remove(1,this._triangleLineObject.id);a.remove(1,this._triangleCornerObject.id);a.remove(1,
this._arrowObject.id);a.remove(1,this._geodesicProjectionLineObject.id);a.remove(1,this._geodesicProjectionStartGuideObject.id);a.remove(1,this._geodesicProjectionEndGuideObject.id)};b.prototype._getLabelPositions=function(a,c,d,f,e){var g=this._model.triangleView.collapsed,b=q.castRenderScreenPointArray3(h.sv3d.get()),k=q.castRenderScreenPointArray3(h.sv3d.get());e.projectPoint(d,b);e.projectPoint(c,k);b={direct:g?"top":"bottom",horizontal:"top",vertical:b[0]<k[0]?"left":"right"};g||(k=h.sv2d.get(),
g=h.sv2d.get(),v.screenSpaceTangent(a,d,k,e),v.screenSpaceTangent(a,c,g,e),G.vec2.dot(k,g)>=K?b.direct=t.sign(k[1])===t.sign(g[1])?B.mirrorPosition(b.vertical):b.vertical:(a=q.castRenderScreenPointArray(h.sv2d.get()),v.screenSpaceTangent(d,c,a,e),G.vec2.dot(a,g)>=K&&(b.direct=t.sign(a[0])===t.sign(g[0])?B.mirrorPosition(b.horizontal):b.horizontal)));"below-the-surface"===f&&(c=function(a){return"top"===a?"bottom":"top"},b.direct=c(b.direct),b.horizontal=c(b.horizontal),b.vertical=c(b.vertical));return b};
b.prototype._updateView=function(){var a;if(this._sceneView.ready){var c=this._sceneView._stage.getCamera(),d=this._sceneView.renderCoordsHelper,b=this._model.triangleView;if(b.visible){var e="camera-dependent"===this._model.measurementSurfaceLocation?this._sceneView.state.camera.aboveGround?"above-the-surface":"below-the-surface":this._model.measurementSurfaceLocation,g=this._startPosition;a=this._endPosition;var h="above-the-surface"===e?1:-1,k=h*(d.getAltitude(a)-d.getAltitude(g));0>k&&(a=[a,g],
g=a[0],a=a[1]);var n=this._cornerPosition;d.worldUpAtPosition(g,n);l.vec3.scale(n,n,h*Math.abs(k));l.vec3.add(n,n,g);d=this._centerPosition;v.midpoint([g,a,n],d);l.vec3.copy(this._origin,d);F.mat4.identity(this._originTransform);F.mat4.translate(this._originTransform,this._originTransform,this._origin);b.collapsed?(this._triangleLineObject.removeAllGeometries(),this._triangleCornerObject.removeAllGeometries()):this._updateTriangleObjects(this._triangleLineObject,this._triangleCornerObject,g,a,n,this._origin,
this._originTransform,c,b.mode,this._horizontalLabelSegment,this._verticalLabelSegment);this._updateArrowObject(this._arrowObject,this._startPosition,this._endPosition,this._origin,this._originTransform,b.stripeLength,c,b.mode,this._arrowLabelSegment);d=this._requiresGeodesicGuides(this._startPosition,this._endPosition,c,b.mode);this._updateGeodesicProjectionLineObject(this._geodesicProjectionLineObject,this._startPosition,this._endPosition,this._origin,this._originTransform,d,this._geodesicProjectionLabelSegment);
this._updateGeodesicProjectionGuideObjects(c,d);h=this._params.labelDistance;e=this._getLabelPositions(g,a,n,e,c);this._updateAuxiliaryMeasureLabels(b,c,e);"geodesic"!==b.mode?this._updateLabel(this._directDistanceLabel,this._arrowLabelSegment,h,e.direct,b.directLabel,b.visible,16,c):(this._updateLabel(this._horizontalDistanceLabel,d?this._geodesicProjectionLabelSegment:this._arrowLabelSegment,h,e.horizontal,b.horizontalLabel,b.visible,16,c),this._directDistanceLabel.visible=!1)}else this._triangleLineObject.removeAllGeometries(),
this._triangleCornerObject.removeAllGeometries(),this._arrowObject.removeAllGeometries(),this._geodesicProjectionLineObject.removeAllGeometries(),this._geodesicProjectionStartGuideObject.removeAllGeometries(),this._geodesicProjectionEndGuideObject.removeAllGeometries(),this._directDistanceLabel.visible=!1,this._horizontalDistanceLabel.visible=!1,this._verticalDistanceLabel.visible=!1}};b.prototype._updateAuxiliaryMeasureLabels=function(a,c,d){if(a.collapsed)this._horizontalDistanceLabel.visible=!1,
this._verticalDistanceLabel.visible=!1;else{var b=this._params.labelDistance;this._updateLabel(this._horizontalDistanceLabel,this._horizontalLabelSegment,b,d.horizontal,a.horizontalLabel,!0,12,c);this._updateLabel(this._verticalDistanceLabel,this._verticalLabelSegment,b,d.vertical,a.verticalLabel,!0,12,c)}};b.prototype._updateTriangleObjects=function(a,c,b,f,e,g,x,k,n,u,m){n=[l.vec3.subtract(h.sv3d.get(),b,g),l.vec3.subtract(h.sv3d.get(),e,g),l.vec3.subtract(h.sv3d.get(),f,g)];u.update(e,f);m.update(b,
e);u=new C(J.createPolylineGeometry(n),"triangle-line");a.removeAllGeometries();a.addGeometry(u,this._triangleLineMaterial,x);a=h.sv3d.get();u=h.sv3d.get();l.vec3.subtract(a,e,b);l.vec3.normalize(a,a);l.vec3.subtract(u,f,e);l.vec3.normalize(u,u);b=.33*Math.min(l.vec3.distance(e,b),l.vec3.distance(e,f));k=this._params.triangleCornerSize*k.computeScreenPixelSizeAt(e);e=new C(this._quadGeometryData(e,a,u,Math.min(b,k),g),"triangle-corner");c.removeAllGeometries();c.addGeometry(e,this._triangleCornerMaterial,
x)};b.prototype._updateArrowObject=function(a,c,b,f,e,g,h,k,l){this._createInterpolatedLineGeometry(a,this._arrowMaterial,"arrow",c,b,f,e,k,this._arrowLabelSegment);a=h.computeScreenPixelSizeAt(l.origin);this._arrowMaterial.setParameterValues({width:this._params.arrowWidth*a,stripeLength:g})};b.prototype._getSegmentInterpolator=function(a,c){var b=this._sceneView.renderCoordsHelper.spatialReference;return I.canProject(this._sceneView.spatialReference,I.SphericalECEFSpatialReference)?new H.Spherical(a,
c,b,b):new H.Linear(a,c)};b.prototype._updateGeodesicProjectionLineObject=function(a,c,b,f,e,g,x){g?(g=this._sceneView.renderCoordsHelper,c=l.vec3.copy(h.sv3d.get(),c),b=l.vec3.copy(h.sv3d.get(),b),g.setAltitude(0,c),g.setAltitude(0,b),this._createInterpolatedLineGeometry(a,this._geodesicProjectionLineMaterial,"geodesicProjectionLine",c,b,f,e,"geodesic",x)):a.removeAllGeometries()};b.prototype._requiresGeodesicGuides=function(a,b,d,f){return"geodesic"===f&&this._model.geodesicDistanceExceeded?this._requiresGeodesicGuideAt(a,
d)||this._requiresGeodesicGuideAt(b,d):!1};b.prototype._requiresGeodesicGuideAt=function(a,b){var c=this._sceneView.renderCoordsHelper;b=b.computeScreenPixelSizeAt(a);return 10<=c.getAltitude(a)/b};b.prototype._updateGeodesicProjectionGuideObjects=function(a,b){if(b){b=this._sceneView.renderCoordsHelper;var c=l.vec3.copy(h.sv3d.get(),this._startPosition),f=l.vec3.copy(h.sv3d.get(),this._endPosition);b.setAltitude(0,c);b.setAltitude(0,f);this._createInterpolatedLineGeometry(this._geodesicProjectionStartGuideObject,
this._geodesicGuideLineMaterial,"geodesicGuideLine",c,this._startPosition,this._origin,this._originTransform,"euclidean");this._createInterpolatedLineGeometry(this._geodesicProjectionEndGuideObject,this._geodesicGuideLineMaterial,"geodesicGuideLine",f,this._endPosition,this._origin,this._originTransform,"euclidean");a=Math.min(a.computeScreenPixelSizeAt(this._startPosition),a.computeScreenPixelSizeAt(c),a.computeScreenPixelSizeAt(this._endPosition),a.computeScreenPixelSizeAt(f));this._geodesicGuideLineMaterial.setParameterValues({stippleLength:this._params.guideStippleLengthPixels*
a})}else this._geodesicProjectionStartGuideObject.removeAllGeometries(),this._geodesicProjectionEndGuideObject.removeAllGeometries()};b.prototype._createInterpolatedLineGeometry=function(a,b,d,f,e,g,x,k,n){var c=this._sceneView.renderCoordsHelper,m=[],r=[],q=function(a,b){var c=h.sv3d.get();l.vec3.subtract(c,a,g);m.push(c);r.push(b)};if("euclidean"===k){var p=h.sv3d.get();v.midpoint([f,e],p);k=h.sv3d.get();c.worldUpAtPosition(p,k);q(f,k);q(e,k);n&&n.update(f,e)}else{f=this._getSegmentInterpolator(f,
e);e=this._params.arrowSubdivisions+1&-2;for(var t=p=null,y=0;y<e;++y){var w=y/(e-1),z=h.sv3d.get();k=h.sv3d.get();f.eval(w,z);c.worldUpAtPosition(z,k);y===e/2-1?p=z:y===e/2&&(t=z);q(z,k)}n&&n.update(p,t)}d=new C(J.createPolylineGeometry(m,r),d);a.removeAllGeometries();a.addGeometry(d,b,x)};b.prototype._quadGeometryData=function(a,b,d,f,e){var c=h.sv3d.get(),m=[],k=h.sv3d.get();l.vec3.scale(k,d,f);d=h.sv3d.get();l.vec3.scale(d,b,-f);for(b=0;4>b;++b)l.vec3.copy(c,a),l.vec3.subtract(c,c,e),b&1&&l.vec3.add(c,
c,k),b&2&&l.vec3.add(c,c,d),m.push(c[0],c[1],c[2]);return new N.GeometryData({position:{size:3,data:m}},{position:new Uint32Array([0,1,2,1,2,3])})};b.prototype._updateLabel=function(a,b,d,f,e,g,l,k){var c=q.castScreenPointArray(h.sv2d.get()),m=q.castScreenPointArray(h.sv2d.get());b=B.computeLabelPositionFromSegment(k,b,d,f,c,m);a.updatePosition(c,m);a.text=e;a.visible=b&&g;a.fontSize=l};b.prototype._updateCursorPosition=function(){this._model.cursorPoint&&this._sceneView.renderCoordsHelper.toRenderCoords(this._model.cursorPoint,
this._cursorPosition);this._updateLaserLine()};b.prototype._updateStartPosition=function(){this._model.startPoint&&this._sceneView.renderCoordsHelper.toRenderCoords(this._model.startPoint,this._startPosition)};b.prototype._updateEndPosition=function(){this._model.endPoint&&this._sceneView.renderCoordsHelper.toRenderCoords(this._model.endPoint,this._endPosition)};b.prototype._getFocusPosition=function(){var a=this._model,b=a.triangleView.visible&&a.triangleView.collapsed&&"euclidean"===a.measurementMode;
switch(a.state){case "drawing":return b?this._startPosition:a.endPoint?this._endPosition:this._startPosition;case "editing":return b?"start"===this._lastDraggedHandle?this._endPosition:this._startPosition:"start"===this._lastDraggedHandle?this._startPosition:this._endPosition;default:return a.cursorPoint?this._cursorPosition:null}};b.prototype._getFocusSpherePosition=function(){return"drawing"===this._model.state||"end"===this._lastDraggedHandle?this._startPosition:this._endPosition};b.prototype._updateLaserLine=
function(){var a=this._model,b=this._getFocusPosition(),d=this._params.laserLineEnabled&&!!b&&"measured"!==a.state&&a.active;d?(this._laserLineRenderer.focusPlaneActive=d&&"euclidean"===a.measurementMode,this._laserLineRenderer.focusSphereActive=d&&!!a.startPoint&&"geodesic"===a.measurementMode,this._laserLineRenderer.focusPosition=b,this._laserLineRenderer.focusSpherePosition=this._getFocusSpherePosition(),this._laserLineRenderer.segmentActive=d&&a.triangleView.visible&&!a.triangleView.collapsed,
this._laserLineRenderer.segmentStartPosition=this._startPosition,this._laserLineRenderer.segmentEndPosition=this._endPosition):(this._laserLineRenderer.focusPlaneActive=!1,this._laserLineRenderer.focusSphereActive=!1,this._laserLineRenderer.segmentActive=!1)};b.prototype._initializeListeners=function(){var a=this;this._listenerHandles=new E;this._listenerHandles.add([this._model.watch("state",function(){a._updateLaserLine()}),this._model.watch("measurementMode",function(){a._updateLaserLine()}),this._model.watch("hoveredHandle",
function(){a._updateView()}),this._model.watch("cursorPoint",function(){a._updateCursorPosition()}),this._model.watch("startPoint",function(){a._updateStartPosition();a._updateView();a._updateLaserLine()}),this._model.watch("endPoint",function(){a._updateEndPosition();a._updateView();a._updateLaserLine()}),this._model.watch("unit",function(){a._updateView()}),this._model.watch("active",function(){a._updateLaserLine();a._updateView()}),this._sceneView.state.watch("camera",function(){a._updateView()})])};
b.prototype._destroyListeners=function(){this._listenerHandles.destroy();this._listenerHandles=null};return b}();(function(b){var a=function(){return function(){}}();b.PickRequest=a;a=function(){return function(a,b,f){void 0===a&&(a=null);void 0===b&&(b=null);void 0===f&&(f=null);this.type=a;this.scenePoint=b;this.mapPoint=f}}();b.PickResult=a})(m||(m={}));var K=Math.cos(t.deg2rad(12));return m});