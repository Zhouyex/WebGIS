// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../core/Evented ../../../../../core/Handles ../../../../../core/Logger ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/scheduling ../../../../../core/screenUtils ../../../../../core/unitUtils ../../../../../core/watchUtils ../../../../../core/accessorSupport/decorators ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f64 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../../../core/libs/gl-matrix-2/math/common ../../../../../geometry/Point ../../../../../layers/graphics/dehydratedFeatures ./graphicTransform3DToolConfig ./isSupportedGraphic ../../../support/geometryUtils ../../../support/mathUtils ../../../support/projectionUtils ../../../support/stack ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/materials/ColorMaterial ../../../../interactive/InteractiveToolBase ../../../../interactive/Manipulator3D ../../../../interactive/manipulatorUtils".split(" "),
function(P,h,A,ba,ca,da,ea,fa,ga,Q,g,ha,R,D,ia,B,v,n,H,m,x,I,S,E,e,ja,u,T,ka,k,F,C,la,ma,J,U){function na(c){var b=new F(C.createCylinderGeometry(e.DISC_HEIGHT,1,e.GEOMETRY_SEGMENTS,x.vec3f64.fromValues(0,0,1),x.vec3f64.fromValues(0,0,0)),"graphic-transform-disc"),a=y(),d=y(.5),l=n.mat4.fromScaling(H.mat4f64.create(),x.vec3f64.fromValues(e.DISC_RADIUS,e.DISC_RADIUS,e.DISC_RADIUS));c=new J.Manipulator3D({view:c,renderObjects:[{geometry:b,material:a,stateMask:f.RingUnfocused|f.ArrowUnfocused,transform:l},
{geometry:b,material:d,transform:l}],autoScaleRenderObjects:!1,radius:e.DISC_COLLISION_RADIUS,focusMultiplier:1,touchMultiplier:1,snapToPointer:!1,alignment:"on-the-ground",collisionType:{type:"disc",direction:x.vec3f64.fromValues(0,0,1)}});c.visible=!1;return c}function oa(c){for(var b=function(a,d,c){for(var l=[],p=Math.ceil(e.GEOMETRY_SEGMENTS*(d-a)/(2*Math.PI)),b=0;b<p+1;b++){var z=a+b*(d-a)/p;l.push(x.vec3f64.fromValues(c*Math.cos(z),c*Math.sin(z),0))}return l},a=function(a){return b(0,2*Math.PI,
a)},d=function(a,d){return new F(C.createPathExtrusionGeometry([[-d/2,0],[d/2,0],[d/2,e.RING_HEIGHT/2],[-d/2,e.RING_HEIGHT/2]],a,[],[],!1),"graphic-transform-ring")},l=a(e.RING_RADIUS),p=d(l,e.RING_THICKNESS),z=[],g=[],k=[],q=0;2>q;q++){var r=q*Math.PI-Math.PI/4,t=Math.PI/2-e.ROTATE_INDICATOR_ARC_LENGTH,m=r+t,r=r+Math.PI/2-t,t=b(m,r,e.INNER_INDICATOR_RADIUS),h=d(t,e.INDICATOR_THICKNESS);k.push(t);z.push(h);g.push(h);for(h=0;2>h;h++){var u=0===h,w=H.mat4f64.create();if(u){n.mat4.scale(w,w,[1,-1,1]);
n.mat4.rotate(w,w,-m,[0,0,1]);var v=Math.round(e.ROTATE_INDICATOR_ARROW_PLACEMENT_PERCENTAGE*(t.length-1))}else n.mat4.rotate(w,w,r,[0,0,1]),v=Math.round((1-e.ROTATE_INDICATOR_ARROW_PLACEMENT_PERCENTAGE)*(t.length-1));w[12]=t[v][0];w[13]=t[v][1];w[14]=t[v][2];v=C.createExtrudedTriangle(e.ROTATE_INDICATOR_ARROW_TIP_LENGTH,0,e.ROTATE_INDICATOR_ARROW_TIP_RADIUS,e.RING_HEIGHT);C.transformInPlace(v,w);w=new F(v,"graphic-transform-ring-rotate");(u?z:g).push(w)}}h=[];for(q=0;2>q;q++)r=q*Math.PI-Math.PI/
4,t=Math.PI/2-e.SCALE_INDICATOR_ARC_LENGTH,m=r+t,r=r+Math.PI/2-t,t=b(m,r,e.OUTER_INDICATOR_RADIUS),h.push(d(t,e.INDICATOR_THICKNESS));q=a(e.RING_RADIUS+e.SCALE_INDICATOR_OFFSET1);m=a(e.RING_RADIUS+e.SCALE_INDICATOR_OFFSET2);q=d(q,e.INDICATOR_THICKNESS);m=d(m,e.INDICATOR_THICKNESS);r=a(e.RING_RADIUS-e.SCALE_INDICATOR_OFFSET1);t=a(e.RING_RADIUS-e.SCALE_INDICATOR_OFFSET2);a=d(r,e.INDICATOR_THICKNESS);d=d(t,e.INDICATOR_THICKNESS);r=y();t=y(.66);u=y(.5);w=y(.33);p=[{geometry:p,material:r,stateMask:f.DiscUnfocused|
f.ArrowUnfocused},{geometry:p,material:u},{geometry:h,material:r,stateMask:f.Unlocked|f.RingFocused},{geometry:q,material:t,stateMask:f.ScaleIn|2},{geometry:m,material:w,stateMask:f.ScaleIn|2},{geometry:a,material:t,stateMask:f.ScaleOut|2},{geometry:d,material:w,stateMask:f.ScaleOut|2},{geometry:z,material:r,stateMask:f.Unlocked|f.RingFocused},{geometry:z,material:r,stateMask:f.RotateLeft|2},{geometry:g,material:r,stateMask:f.RotateRight|2}];l=[l].concat(k);return new J.Manipulator3D({view:c,renderObjects:p,
autoScaleRenderObjects:!1,radius:e.RING_THICKNESS,focusMultiplier:1,touchMultiplier:1.5,moveOnDrag:!1,alignment:"on-the-ground",collisionType:{type:"ribbon",paths:l,direction:x.vec3f64.fromValues(0,0,1)}})}function pa(c){var b=Math.sqrt(e.DISC_TRANSLATE_ARROW_SIZE*e.DISC_TRANSLATE_ARROW_SIZE*3/4),a=C.createExtrudedTriangle(b,e.DISC_TRANSLATE_ARROW_SIZE/2,e.DISC_TRANSLATE_ARROW_SIZE/2,e.DISC_HEIGHT);C.transformInPlace(a,n.mat4.fromTranslation(k.sm4d.get(),m.vec3.set(k.sv3d.get(),0,-b/3,0)));var a=
new F(a,"graphic-transform-disc-arrow"),d=y(),l=y(.5);c=new J.Manipulator3D({view:c,renderObjects:[{geometry:a,material:l,stateMask:f.DiscFocused|1},{geometry:a,material:l,stateMask:f.ArrowFocused|1},{geometry:a,material:d,stateMask:f.TouchInput|f.ArrowUnfocused|f.DiscUnfocused|f.RingUnfocused},{geometry:a,material:d,stateMask:2}],autoScaleRenderObjects:!1,radius:b,focusMultiplier:1,touchMultiplier:1,snapToPointer:!1,alignment:"on-the-ground",collisionType:{type:"disc",direction:x.vec3f64.fromValues(0,
0,1)}});c.visible=!1;return c}function qa(c,b){var a=this,d=c.allLayerViews.find(function(a){return a.layer===b.layer}),l=b.symbol;return ha.all(l.symbolLayers.map(function(c){return da(a,void 0,void 0,function(){var a,b;return ca(this,function(p){switch(p.label){case 0:b=a=null,"object"===c.type&&(a=c.heading),p.label=1;case 1:return p.trys.push([1,3,,4]),[4,d.whenSymbolLayerSize(l,c)];case 2:return b=p.sent(),[3,4];case 3:return p.sent(),b=null,[3,4];case 4:return[2,{heading:a,size:b}]}})})}).toArray()).then(function(a){return{symbolLayers:a}})}
function ra(c){return(c=c.symbol.symbolLayers.find(function(c){return"object"===c.type}))&&c.heading||0}function sa(c,b,a,d){c.symbolLayers.forEach(function(c,p){var l=b.symbolLayers[p];p=l.heading;l=l.size;"object"===c.type&&(c.heading=(g.isSome(p)?p:0)-I.toDegree(a),g.isSome(l)&&"width"in l&&(c.width=l.width*d,c.depth=l.depth*d,c.height=l.height*d))})}function V(c){var b=m.vec3.subtract(k.sv3d.get(),c.startPoint,c.origin);c=m.vec3.subtract(k.sv3d.get(),c.endPoint,c.origin);b=m.vec3.length(b);c=
m.vec3.length(c);return 0===b?0:c/b}function ta(c,b){var a=c.origin,d=c.startPoint,l=c.endPoint,p=c.plane;c=G(d,b,k.sv3d.get());l=G(l,b,k.sv3d.get());if(m.vec3.squaredDistance(c,l)<e.DRAG_THRESHOLD_PX*e.DRAG_THRESHOLD_PX)return null;var g=m.vec3.subtract(k.sv3d.get(),d,a),p=m.vec3.cross(k.sv3d.get(),g,p),d=m.vec3.add(k.sv3d.get(),d,p),a=G(a,b,k.sv3d.get());b=G(d,b,k.sv3d.get());d=m.vec3.subtract(k.sv3d.get(),b,c);b=m.vec3.subtract(k.sv3d.get(),c,a);c=u.ray.wrap(c,d);b=u.ray.wrap(a,b);return u.ray.distance2(c,
l)<u.ray.distance2(b,l)?"rotate":"scale"}function y(c){void 0===c&&(c=1);var b=e.HANDLE_COLOR.concat([c]);c=new la({color:b,transparent:1!==c,cullFace:"back"},"graphic-transform");c.renderOccluded=2;return c}function G(c,b,a){c=b.projectPoint(c,D.castRenderScreenPointArray(ua));b=b.renderToScreen(c,va);return m.vec3.set(a,b[0],b[1],0)}function W(c){return"local"===c.viewingMode?!0:c.scale<e.ALIGN_ARROWS_SCALE_THRESHOLD}Object.defineProperty(h,"__esModule",{value:!0});var wa=ga.getLogger("esri.views.3d.interactive.editingTools.graphicTransform3D.GraphicTransform3DTool"),
K=function(){return function(c){this.graphic=c}}();h.GraphicTranslateStartEvent=K;var L=function(){return function(c){this.graphic=c}}();h.GraphicTranslateStopEvent=L;var M=function(){return function(c){this.graphic=c}}();h.GraphicRotateStartEvent=M;var X=function(){return function(c){this.graphic=c}}();h.GraphicRotateStopEvent=X;var N=function(){return function(c){this.graphic=c}}();h.GraphicScaleStartEvent=N;var Y=function(){return function(c){this.graphic=c}}();h.GraphicScaleStopEvent=Y;var O=
function(){return function(c,b,a){this.graphic=c;this.dx=b;this.dy=a;this.type="translate"}}();h.GraphicTranslateEvent=O;var Z=function(){return function(c,b){this.graphic=c;this.angle=b;this.type="rotate"}}();h.GraphicRotateEvent=Z;var aa=function(){return function(c,b){this.graphic=c;this.scale=b;this.type="scale"}}();h.GraphicScaleEvent=aa;P=function(c){function b(a){a=c.call(this,a)||this;a.enableRotation=!0;a.enableScaling=!0;a.discManipulator=null;a.ringManipulator=null;a.arrowManipulators=
null;a.type="transform-3d";a._handles=new fa;a._arrowDragData=null;a._ringDragData=null;a._startSymbolDataPromise=null;a._startSymbolData=null;a._ringDelayedFocusFrameTask=null;a._ringManipulatorHasDelayedFocused=!1;a._scaleAnimationFrameTask=null;a._lastPointerEventType=null;return a}ba(b,c);b.prototype.destroy=function(){this._removeFrameTasks();this.graphic=null;this._handles.destroy();this._handles=null;this._set("view",null)};Object.defineProperty(b.prototype,"graphic",{set:function(a){g.isSome(a)&&
!ja.isSupportedGraphic(a)?wa.error("Only graphics from a graphics layer with point geometries and object symbology are supported"):this._set("graphic",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"_ringMode",{get:function(){return g.isSome(this._ringDragData)&&this._ringDragData.mode||this._ringModeFromOptions},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"_ringModeFromOptions",{get:function(){var a=this._shouldAllowModeType("scale"),d=this._shouldAllowModeType("rotate");
return a||d?d?a?null:{type:"rotate",startAngle:0}:{type:"scale"}:{type:"disabled"}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"_manipulatorState",{get:function(){var a=this._ringMode,d="touch"===this._lastPointerEventType?f.TouchInput:0,d=g.isNone(a)?d|f.Unlocked:"rotate"===a.type?d|(g.isSome(this._ringDragData)&&0>this._ringDragData.angleDir?f.RotateLeft:f.RotateRight):d|(g.isSome(this._ringDragData)&&0>this._ringDragData.scaleDir?f.ScaleIn:f.ScaleOut),d=d|(this.discManipulator.focused?
f.DiscFocused:f.DiscUnfocused),d=d|(this._ringManipulatorHasDelayedFocused?f.RingFocused:f.RingUnfocused);return d|=this.arrowManipulators.some(function(a){return a.manipulator.focused})?f.ArrowFocused:f.ArrowUnfocused},enumerable:!0,configurable:!0});b.prototype.reset=function(){this.graphic=null};b.prototype.handleInputEvent=function(a){"pointer-move"!==a.type&&"pointer-down"!==a.type&&"pointer-up"!==a.type||a.pointerType===this._lastPointerEventType||(this._lastPointerEventType=a.pointerType,this._updateManipulators())};
b.prototype.initialize=function(){for(var a=this,d=na(this.view),c=oa(this.view),b=[],e=0;4>e;e++){var k=pa(this.view),f=H.mat4f64.create();this._calculateArrowManipulatorTransform(e,f);b.push({manipulator:k,transform:f})}this.discManipulator=d;this.ringManipulator=c;this.arrowManipulators=b;this._handles.add([d.watch("grabbing",function(c){a._setSingleManipulatorInteractive(d,c)},!0),d.watch("dragging",function(d){g.isSome(a.graphic)&&(d?a.emit("graphic-translate-start",new K(a.graphic)):a.emit("graphic-translate-stop",
new L(a.graphic)))},!0),B.watch(d,"focused",function(){g.isNone(a._scaleAnimationFrameTask)&&a._updateManipulators()}),B.init(this,"graphic.geometry",function(){g.isSome(a.graphic)&&g.isSome(a.graphic.geometry)&&"point"===a.graphic.geometry.type&&(d.mapPoint=E.clonePoint(a.graphic.geometry,xa));a._updateManipulators()},!0)]);b.forEach(function(d,c){var b=d.manipulator;b.on("drag",function(d){a._handleArrowDrag(c)});a._handles.add([B.watch(b,"focused",function(){a._updateManipulators()}),B.watch(b,
"grabbing",function(d){a._setSingleManipulatorInteractive(b,d)}),B.watch(b,"dragging",function(d){g.isNone(a.graphic)||(d?a.emit("graphic-translate-start",new K(a.graphic)):(a._arrowDragData=null,a.emit("graphic-translate-stop",new L(a.graphic))))})])});d.on("drag",function(c){if(!g.isNone(a.graphic)&&!g.isNone(a.graphic.geometry)&&"point"===a.graphic.geometry.type){c=a.graphic.geometry.z;var b=a.graphic.geometry,l=E.clonePoint(d.mapPoint,new S);l.z=c;a.graphic.geometry=l;a.emit("graphic-translate",
new O(a.graphic,l.x-b.x,l.y-b.y))}});this._handles.add([c.watch("grabbing",function(d){a._setSingleManipulatorInteractive(c,d)},!0),c.watch("dragging",function(d){if(!1===d){if(d=a._ringDragData,a._ringDragData=null,a._startSymbolDataPromise=null,a._startSymbolData=null,g.isSome(d)){var c=d.mode;g.isNone(c)||g.isSome(c)&&"scale"===c.type?(c=V(d),a._startScaleResetAnimation(c)):a._updateManipulators();if(g.isSome(a.graphic)&&g.isSome(d.mode))switch(d.mode.type){case "rotate":a.emit("graphic-rotate-stop",
new X(a.graphic));break;case "scale":a.emit("graphic-scale-stop",new Y(a.graphic))}}}else if(g.isSome(a.graphic)&&g.isSome(a._ringMode)&&"disabled"!==a._ringMode.type)switch(a._ringMode.type){case "rotate":a.emit("graphic-rotate-start",new M(a.graphic));break;case "scale":a.emit("graphic-scale-start",new N(a.graphic))}},!0),B.watch(c,"focused",function(){g.isNone(a._scaleAnimationFrameTask)&&a._startRingFocusFrameTask()})]);c.on("drag",function(d){a._handleRingDrag(d.screenPoint)});this.manipulators.add(d);
this.manipulators.add(c);b.forEach(function(d){return a.manipulators.add(d.manipulator)})};b.prototype.onHide=function(){this._removeFrameTasks()};b.prototype._handleArrowDrag=function(a){if(!g.isNone(this.graphic)&&!g.isNone(this.graphic.geometry)&&"point"===this.graphic.geometry.type){var d=this.arrowManipulators[a].manipulator,c=this.graphic.geometry,b=this.graphic.geometry.spatialReference,e=d.mapPoint,e=ka.vectorToPoint(m.vec3.set(k.sv3d.get(),e.x,e.y,e.z),e.spatialReference,b),f=m.vec3.subtract(k.sv3d.get(),
d.position,this.discManipulator.position);d.position=this.discManipulator.position;var d=c.longitude,h=e.longitude;null==d||null==h?d=!1:(d=T.cyclicalDeg.shortestSignedDiff(d,h),d=90>Math.abs(d));if(d){d=1/ia.getMetersPerUnitForSR(b)*1E-4;if(g.isNone(this._arrowDragData)){if(W(this.view)){if(a=this._calculateArrowManipulatorDirection(a,k.sv3d.get()),u.vector.projectPoint(a,f,f),a=m.vec3.add(f,f,this.discManipulator.position),!this.view.renderCoordsHelper.fromRenderCoords(a,e,b))return}else 0===a||
2===a?e.x=c.x:e.y=c.y;b=E.clonePoint(c,new S);a=e.x-c.x;f=e.y-c.y;if(Math.abs(a)>d||Math.abs(f)>d)a=x.vec3f64.fromValues(a,f,0),m.vec3.normalize(a,a),this._arrowDragData={startPoint:b,dxDyMapConstrained:a}}g.isSome(this._arrowDragData)&&(b=this._arrowDragData,a=b.dxDyMapConstrained,b=b.startPoint,Math.abs(a[0])<d?e.x=b.x:Math.abs(a[1])<d?e.y=b.y:(d=e.x-b.x,f=e.y-b.y,d=u.vector.projectPoint(a,m.vec3.set(k.sv3d.get(),d,f,0),k.sv3d.get()),e.x=b.x+d[0],e.y=b.y+d[1]),b=e.x-c.x,d=e.y-c.y,e.z=c.z,this.graphic.geometry=
e,this.emit("graphic-translate",new O(this.graphic,b,d)))}}};b.prototype._handleRingDrag=function(a){var d=this,c=this.graphic;if(!g.isNone(c)&&!g.isNone(c.symbol)&&!g.isSome(this._startSymbolDataPromise)){var b=this._ringDragData,f=this._startSymbolData;a=D.screenPointObjectToArray(a,D.castScreenPointArray(k.sv2d.get()));a=u.ray.fromScreen(this.view.state.camera,a,ya);var h=this.discManipulator.modelTransform;if(g.isNone(b)||g.isNone(f))b=x.vec3f64.fromValues(0,0,1),m.vec3.transformMat4(b,b,h),f=
x.vec3f64.clone(this.ringManipulator.position),h=u.plane.fromPositionAndNormal(f,b),b=x.vec3f64.create(),u.plane.intersectRay(h,a,b)&&(this._ringDragData={origin:f,plane:h,angle:0,angleDir:0,scale:1,scaleDir:0,startPoint:b,endPoint:x.vec3f64.clone(b),mode:null},this._startSymbolDataPromise=qa(this.view,c),this._startSymbolDataPromise.then(function(a){d._startSymbolData=a;d._startSymbolDataPromise=null},function(){d._startSymbolDataPromise=null}));else if(h=b.plane,u.plane.intersectRay(h,a,b.endPoint)){a=
V(b);var h=U.calculateInputRotationTransform(b.startPoint,b.endPoint,b.origin,h),n=T.cyclicalPI.shortestSignedDiff(b.angle,h);b.angleDir=Q.clamp(b.angleDir+n,-e.ROTATE_INDICATOR_DIRECTION_BUFFER,e.ROTATE_INDICATOR_DIRECTION_BUFFER);b.angle=h;b.scaleDir=Q.clamp(b.scaleDir+(a-b.scale),-e.SCALE_INDICATOR_DIRECTION_BUFFER,e.SCALE_INDICATOR_DIRECTION_BUFFER);b.scale=a;var n=null,q=this._ringMode;if(g.isSome(q))n=q;else if(q=ta(b,this.view.state.camera),g.isSome(q)){switch(q){case "rotate":this.emit("graphic-rotate-start",
new M(c));break;case "scale":this.emit("graphic-scale-start",new N(c))}n="scale"===q?{type:"scale"}:{type:"rotate",startAngle:h}}b.mode=n;this._updateManipulators();if(g.isSome(n)&&"disabled"!==n.type){var b=c.symbol.clone(),q=this._calculateSymbolRotateAngle(n),r=this._calculateSymbolScaleFactor(n);sa(b,f,q,r);c.symbol=b;switch(n.type){case "rotate":this.emit("graphic-rotate",new Z(c,I.toDegree(h)));break;case "scale":this.emit("graphic-scale",new aa(c,a))}}}}};b.prototype._calculateSymbolRotateAngle=
function(a){void 0===a&&(a=this._ringMode);return g.isNone(a)||"rotate"!==a.type||g.isNone(this._ringDragData)?0:this._ringDragData.angle-a.startAngle};b.prototype._calculateSymbolScaleFactor=function(a){void 0===a&&(a=this._ringMode);return g.isNone(a)||"scale"!==a.type||g.isNone(this._ringDragData)?1:this._ringDragData.scale};b.prototype._shouldAllowModeType=function(a){return"scale"===a?this.enableScaling:g.isNone(this.graphic)||!this.enableRotation?!1:this.graphic.symbol.symbolLayers.some(function(a){return"object"===
a.type})};b.prototype._updateManipulators=function(a){if(!a){var b=this._calculateSymbolScaleFactor();a=n.mat4.fromScaling(k.sm4d.get(),m.vec3.set(k.sv3d.get(),b,b,1))}var c=this._manipulatorState,e=this._getManipulatorRotationAngle(),b=n.mat4.identity(k.sm4d.get());0!==e&&n.mat4.rotate(b,b,e,x.vec3f64.fromValues(0,0,1));var f=this.discManipulator.position,e=this.view.renderCoordsHelper.basisMatrixAtPosition(f,k.sm4d.get());a=a?n.mat4.multiply(k.sm4d.get(),e,a):e;var h=g.isSome(this.graphic)&&null!=
this.graphic.geometry,u=W(this.view)?n.mat4.multiply(k.sm4d.get(),a,b):a;this.discManipulator.state=c;this.discManipulator.modelTransform=u;this.discManipulator.visible=h;this.arrowManipulators.forEach(function(a){var b=a.manipulator;a=a.transform;a=n.mat4.multiply(k.sm4d.get(),u,a);b.state=c;b.position=f;b.modelTransform=a;b.visible=h});b=n.mat4.multiply(k.sm4d.get(),a,b);this.ringManipulator.state=c;this.ringManipulator.position=this.discManipulator.position;this.ringManipulator.modelTransform=
b;b=this._ringMode;b=g.isSome(b)&&"disabled"===b.type;this.ringManipulator.visible=h&&!b};b.prototype._setSingleManipulatorInteractive=function(a,b){b?(this.discManipulator.interactive=this.discManipulator===a,this.ringManipulator.interactive=this.ringManipulator===a,this.arrowManipulators.forEach(function(b){b=b.manipulator;b.interactive=b===a})):(this.discManipulator.interactive=!0,this.ringManipulator.interactive=!0,this.arrowManipulators.forEach(function(a){a.manipulator.interactive=!0}))};b.prototype._startRingFocusFrameTask=
function(){var a=this;this._removeFrameTasks();var b=0;this._ringDelayedFocusFrameTask=R.addFrameTask({update:function(c){b+=c.deltaTime;a.ringManipulator.focused?b>e.RING_INDICATOR_DELAY_MS&&(a._ringManipulatorHasDelayedFocused=!0,a._removeFrameTasks(),a._updateManipulators()):(a._ringManipulatorHasDelayedFocused=!1,a._removeFrameTasks(),a._updateManipulators())}})};b.prototype._startScaleResetAnimation=function(a){var b=this;this._removeFrameTasks();var c=a;this._scaleAnimationFrameTask=R.addFrameTask({update:function(a){c+=
((c+1)/2-c)*Math.min(a.deltaTime*e.RING_RESET_ANIMATION_SPEED_FACTOR,1);.01>Math.abs(c-1)?(b._removeFrameTasks(),b._updateManipulators()):(b._ringManipulatorHasDelayedFocused=!1,a=n.mat4.fromScaling(k.sm4d.get(),m.vec3.set(k.sv3d.get(),c,c,1)),b._updateManipulators(a))}})};b.prototype._getManipulatorRotationAngle=function(){var a=g.isSome(this.graphic)?ra(this.graphic):0,a=I.toRadian(-a);if(g.isNone(this._ringDragData)||g.isSome(this._ringDragData.mode))return a;var b=this._ringDragData;return a+
U.calculateInputRotationTransform(b.startPoint,b.endPoint,b.origin,b.plane)};b.prototype._calculateArrowManipulatorTransform=function(a,b){var c=n.mat4.identity(k.sm4d.get());n.mat4.fromZRotation(c,a*Math.PI/2);a=n.mat4.identity(k.sm4d.get());n.mat4.fromTranslation(a,m.vec3.set(k.sv3d.get(),0,e.DISC_TRANSLATE_ARROW_OFFSET,0));return n.mat4.multiply(b,c,a)};b.prototype._calculateArrowManipulatorDirection=function(a,b){var c=this.discManipulator.modelTransform;return 0===a||2===a?m.vec3.set(b,c[4],
c[5],c[6]):m.vec3.set(b,c[0],c[1],c[2])};b.prototype._removeFrameTasks=function(){this.ringManipulator&&(this._ringManipulatorHasDelayedFocused=this.ringManipulator.focused);g.isSome(this._ringDelayedFocusFrameTask)&&(this._ringDelayedFocusFrameTask.remove(),this._ringDelayedFocusFrameTask=null);g.isSome(this._scaleAnimationFrameTask)&&(this._scaleAnimationFrameTask.remove(),this._scaleAnimationFrameTask=null)};A([v.property({constructOnly:!0,nonNullable:!0})],b.prototype,"view",void 0);A([v.property({value:null})],
b.prototype,"graphic",null);A([v.property()],b.prototype,"enableRotation",void 0);A([v.property()],b.prototype,"enableScaling",void 0);A([v.property({readOnly:!0})],b.prototype,"type",void 0);return b=A([v.subclass("esri.views.3d.interactive.editingTools.graphicTransform3D.GraphicTransform3DTool")],b)}(v.declared(ea.EventedMixin(ma.InteractiveToolBase)));h.GraphicTransform3DTool=P;var ua=x.vec3f64.create(),va=D.createScreenPointArray(),f;(function(c){c.Unlocked=16;c.ScaleIn=32;c.ScaleOut=64;c.RotateLeft=
128;c.RotateRight=256;c.DiscFocused=512;c.DiscUnfocused=1024;c.RingFocused=2048;c.RingUnfocused=4096;c.ArrowFocused=8192;c.ArrowUnfocused=16384;c.TouchInput=32768})(f||(f={}));var ya=u.ray.create(),xa=E.makeDehydratedPoint(0,0,0,null)});