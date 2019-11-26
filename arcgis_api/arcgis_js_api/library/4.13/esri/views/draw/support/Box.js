// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../geometry ../../../Graphic ../../../core/Evented ../../../core/Handles ../../../core/maybe ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../geometry/geometryEngine ../../../geometry/support/aaBoundingRect ../../../geometry/support/boundsUtils ../../../geometry/support/coordsUtils ../../../symbols/SimpleFillSymbol ../../../symbols/SimpleLineSymbol ../../../symbols/SimpleMarkerSymbol ./drawUtils ./GraphicMover".split(" "),
function(S,T,D,g,q,u,E,F,G,v,f,y,x,A,B,C,H,z,p,I){var J=function(){return function(d,c,a,b){this.graphics=d;this.mover=c;this.dx=a;this.dy=b;this.type="move-start"}}(),K=function(){return function(d,c,a,b){this.graphics=d;this.mover=c;this.dx=a;this.dy=b;this.type="move"}}(),L=function(){return function(d,c,a,b){this.graphics=d;this.mover=c;this.dx=a;this.dy=b;this.type="move-stop"}}(),M=function(){return function(d,c,a){this.graphics=d;this.mover=c;this.angle=a;this.type="rotate-start"}}(),N=function(){return function(d,
c,a){this.graphics=d;this.mover=c;this.angle=a;this.type="rotate"}}(),O=function(){return function(d,c,a){this.graphics=d;this.mover=c;this.angle=a;this.type="rotate-stop"}}(),P=function(){return function(d,c,a,b){this.graphics=d;this.mover=c;this.xScale=a;this.yScale=b;this.type="scale-start"}}(),Q=function(){return function(d,c,a,b){this.graphics=d;this.mover=c;this.xScale=a;this.yScale=b;this.type="scale"}}(),R=function(){return function(d,c,a,b){this.graphics=d;this.mover=c;this.xScale=a;this.yScale=
b;this.type="scale-stop"}}();return function(d){function c(a){a=d.call(this,a)||this;a._activeHandleGraphic=null;a._centerGraphicSymbol=new z({style:"circle",size:4,color:[255,255,255,1],outline:{color:[0,12,207],width:1}});a._defaultFillSymbol=new C({color:[12,207,255,.075],outline:{join:"round",color:[0,12,207],width:2}});a._dashedFillSymbol=new C({color:[0,0,0,0],outline:{style:"dash",color:[150,150,150,.5],width:2}});a._defaultGraphicSymbol=new z({style:"square",size:8,color:[255,255,255,1],outline:{color:[0,
12,207],width:1}});a._handles=new F;a._mover=null;a._rotateGraphicOffset=20;a._rotateGraphicHoverSymbol=new z({style:"circle",size:10,color:[255,255,255,1],outline:{color:[0,12,207],width:1}});a._rotateGraphicSymbol=new z({style:"circle",size:8,color:[255,255,255,1],outline:{color:[0,12,207],width:1}});a._rotationAngle=0;a._rotateLineGraphic=null;a._rotateLineGraphicSymbol=new H({color:[0,12,207],width:2});a._startInfo=null;a._totalDx=0;a._totalDy=0;a._xScale=1;a._yScale=1;a.type="box";a.callbacks=
{onMoveStart:function(a){},onMove:function(a){},onMoveStop:function(a){},onScaleStart:function(a){},onScale:function(a){},onScaleStop:function(a){},onRotateStart:function(a){},onRotate:function(a){},onRotateStop:function(a){}};a.centerGraphic=null;a.backgroundGraphic=null;a.enableMovement=!0;a.enableRotation=!0;a.enableScaling=!0;a.graphics=[];a.handleGraphics=[];a.layer=null;a.preserveAspectRatio=!1;a.rotateGraphic=null;a.showCenterGraphic=!0;a.view=null;a._getBounds=function(){var a=x.create();
return function(b,c){var e;b[0]=Number.POSITIVE_INFINITY;b[1]=Number.POSITIVE_INFINITY;b[2]=Number.NEGATIVE_INFINITY;b[3]=Number.NEGATIVE_INFINITY;for(var l=0;l<c.length;l++)if(e=c[l]){var w=void 0,d=void 0,k=void 0,f=void 0;"point"===e.type?(w=k=e.x,d=f=e.y):("multipoint"===e.type?(w=B.geometryToCoordinates(e),e=A.getRingsOrPathsBounds(a,[w])):"extent"===e.type?e=[e.xmin,e.ymin,e.xmax,e.ymax]:(w=B.geometryToCoordinates(e),e=A.getRingsOrPathsBounds(a,w)),w=e[0],d=e[1],k=e[2],f=e[3]);b[0]=Math.min(w,
b[0]);b[1]=Math.min(d,b[1]);b[2]=Math.max(k,b[2]);b[3]=Math.max(f,b[3])}return b}}();return a}D(c,d);c.prototype.initialize=function(){var a=this;this._setup();this._handles.add([v.whenOnce(this,"view.ready",function(){a.view&&a.view.map&&a.view.map.add(a.layer)}),v.pausable(this,"preserveAspectRatio",function(){a._activeHandleGraphic&&(a._scaleGraphic(a._activeHandleGraphic),a._updateGraphics())}),v.pausable(this,"view.scale",function(){a._updateRotateGraphic();a._updateRotateLineGraphic()}),v.pausable(this,
"graphics",function(){return a.refresh()}),v.pausable(this,"layer",function(b,e){e&&a._resetGraphics(e);a.refresh()})])};c.prototype.destroy=function(){this._reset();this._handles.removeAll();this._handles=null};Object.defineProperty(c.prototype,"state",{get:function(){var a=!!this.get("view.ready"),b=!(!this.get("graphics.length")||!this.get("layer"));return a&&b?"active":a?"ready":"disabled"},enumerable:!0,configurable:!0});c.prototype.isUIGraphic=function(a){var b=[];this.handleGraphics.length&&
(b=b.concat(this.handleGraphics));this.backgroundGraphic&&b.push(this.backgroundGraphic);this.centerGraphic&&b.push(this.centerGraphic);this.rotateGraphic&&b.push(this.rotateGraphic);this._rotateLineGraphic&&b.push(this._rotateLineGraphic);return b.length&&-1<b.indexOf(a)};c.prototype.move=function(a,b){if(this._mover&&this.graphics.length){for(var e=0,c=this.graphics;e<c.length;e++){var h=c[e],n=p.cloneMove(h.geometry,a,b,this.view);h.geometry=n}this.refresh();this._emitMoveStopEvent(a,b,null)}};
c.prototype.scale=function(a,b){if(this._mover&&this.graphics.length){for(var e=0,c=this.graphics;e<c.length;e++){var h=c[e],n=p.scale(h.geometry,a,b,this.view);h.geometry=n}this.refresh();this._emitScaleStopEvent(a,b,null)}};c.prototype.rotate=function(a,b){if(this._mover&&this.graphics.length){b||(b=new q.Point(this.handleGraphics[1].geometry.x,this.handleGraphics[3].geometry.y,this.view.spatialReference));for(var e=0,c=this.graphics;e<c.length;e++){var h=c[e],n=y.rotate(h.geometry,a,b);h.geometry=
n}this.refresh();this._emitRotateStopEvent(a,null)}};c.prototype.refresh=function(){this._reset();this._setup()};c.prototype.reset=function(){this.graphics=[]};c.prototype._setup=function(){"active"===this.state&&(this._setupGraphics(),this._setupMover(),this._updateGraphics())};c.prototype._reset=function(){this._resetGraphicStateVars();this._resetGraphics();this._mover&&this._mover.destroy();this._mover=null;this.view.cursor="default"};c.prototype._resetGraphicStateVars=function(){this._activeHandleGraphic=
this._startInfo=null;this._totalDy=this._totalDx=0;this._yScale=this._xScale=1;this._rotationAngle=0};c.prototype._resetGraphics=function(a){if(a=a||this.layer)a.removeMany(this.handleGraphics),a.remove(this.backgroundGraphic),a.remove(this.centerGraphic),a.remove(this.rotateGraphic),a.remove(this._rotateLineGraphic);a=0;for(var b=this.handleGraphics;a<b.length;a++)b[a].destroy();this._set("handleGraphics",[]);this.backgroundGraphic&&(this.backgroundGraphic.destroy(),this._set("backgroundGraphic",
null));this.centerGraphic&&(this.centerGraphic.destroy(),this._set("centerGraphic",null));this.rotateGraphic&&(this.rotateGraphic.destroy(),this._set("rotateGraphic",null));this._rotateLineGraphic&&(this._rotateLineGraphic.destroy(),this._rotateLineGraphic=null)};c.prototype._setupMover=function(){var a=this,b=[].concat(this.handleGraphics);this.enableMovement&&(b=b.concat(this.graphics,this.backgroundGraphic));this.enableRotation&&b.push(this.rotateGraphic);this.showCenterGraphic&&b.push(this.centerGraphic);
this._mover=new I({enableMoveAllGraphics:!1,view:this.view,graphics:b,callbacks:{onGraphicClick:function(b){return a._onGraphicClickCallback(b)},onGraphicMoveStart:function(b){return a._onGraphicMoveStartCallback(b)},onGraphicMove:function(b){return a._onGraphicMoveCallback(b)},onGraphicMoveStop:function(b){return a._onGraphicMoveStopCallback(b)},onGraphicPointerOver:function(b){return a._onGraphicPointerOverCallback(b)},onGraphicPointerOut:function(b){return a._onGraphicPointerOutCallback(b)}}})};
c.prototype._getStartInfo=function(a){var b=this._getBoxBounds(x.create()),e=b[0],c=b[1],h=b[2],b=b[3];a=a.geometry;return{width:Math.abs(h-e),height:Math.abs(b-c),centerX:(h+e)/2,centerY:(b+c)/2,startX:a.x,startY:a.y,graphicInfos:this._getGraphicInfos(),box:this.backgroundGraphic.geometry,rotate:this.rotateGraphic.geometry}};c.prototype._getGraphicInfos=function(){var a=this;return this.graphics.map(function(b){return a._getGraphicInfo(b)})};c.prototype._getGraphicInfo=function(a){a=a.geometry;var b=
this._getBounds(x.create(),[a]),c=b[0],l=b[1],h=b[2],b=b[3];return{width:Math.abs(h-c),height:Math.abs(b-l),centerX:(h+c)/2,centerY:(b+l)/2,geometry:a}};c.prototype._onGraphicClickCallback=function(a){var b=a.graphic;(b===this.rotateGraphic||-1<this.handleGraphics.indexOf(b))&&a.viewEvent.stopPropagation()};c.prototype._onGraphicMoveStartCallback=function(a){var b=a.graphic;this._resetGraphicStateVars();this._hideGraphicsBeforeUpdate();this.backgroundGraphic.symbol=this._dashedFillSymbol;this._startInfo=
this._getStartInfo(b);b===this.rotateGraphic?this._emitRotateStartEvent(this._rotationAngle,b):-1<this.handleGraphics.indexOf(b)?(this._activeHandleGraphic=b,this._emitScaleStartEvent(this._xScale,this._yScale,b)):this._emitMoveStartEvent(a.dx,a.dy,b)};c.prototype._onGraphicMoveCallback=function(a){var b=a.graphic;if(this._startInfo)if(-1<this.handleGraphics.indexOf(b))this._scaleGraphic(b),this._emitScaleEvent(this._xScale,this._yScale,b);else if(b===this.rotateGraphic)this._rotateGraphic(b),this._emitRotateEvent(this._rotationAngle,
b);else{var c=a.dx;a=a.dy;this._totalDx+=c;this._totalDy+=a;this._moveGraphic(b,c,a);this._emitMoveEvent(c,a,b)}};c.prototype._onGraphicMoveStopCallback=function(a){a=a.graphic;this._startInfo?(this._updateGraphics(),this._showGraphicsAfterUpdate(),this.backgroundGraphic.symbol=this._defaultFillSymbol,a===this.rotateGraphic?this._emitRotateStopEvent(this._rotationAngle,a):-1<this.handleGraphics.indexOf(a)?this._emitScaleStopEvent(this._xScale,this._yScale,a):this._emitMoveStopEvent(this._totalDx,
this._totalDy,a),this._resetGraphicStateVars()):this.refresh()};c.prototype._onGraphicPointerOverCallback=function(a){var b=this.view.rotation,c=a.index;a.graphic===this.rotateGraphic&&(this.rotateGraphic.symbol=this._rotateGraphicHoverSymbol);8>c&&(c=0<=b&&45>b?c%8:45<=b&&90>b?(c+1)%8:90<=b&&135>b?(c+2)%8:135<=b&&180>b?(c+3)%8:180<=b&&225>b?(c+4)%8:225<=b&&270>b?(c+5)%8:270<=b&&315>b?(c+6)%8:(c+7)%8);switch(c){case 0:a="nwse-resize";break;case 1:a="ns-resize";break;case 2:a="nesw-resize";break;case 3:a=
"ew-resize";break;case 4:a="nwse-resize";break;case 5:a="ns-resize";break;case 6:a="nesw-resize";break;case 7:a="ew-resize";break;default:a="pointer"}this.view.cursor=a};c.prototype._onGraphicPointerOutCallback=function(a){a.graphic===this.rotateGraphic&&(this.rotateGraphic.symbol=this._rotateGraphicSymbol);this.view.cursor="default"};c.prototype._scaleGraphic=function(a){var b=this._startInfo,c=this.preserveAspectRatio,l=this.view,h=b.centerX,n=b.centerY,d=b.startX,f=b.startY,k=l.state,g=k.resolution,
m=k.transform,k=this.handleGraphics.indexOf(a);1!==k&&5!==k||this._updateX(a,h);3!==k&&7!==k||this._updateY(a,n);a=a.geometry;var r=a.x,t=a.y,u=m[0]*r+m[2]*t+m[4],v=m[1]*r+m[3]*t+m[5];a=b.graphicInfos.map(function(a){return a.geometry});if(c){this._xScale=this._yScale=p.getScaleRatio(m[0]*h+m[2]*n+m[4],m[1]*h+m[3]*n+m[5],m[0]*d+m[2]*f+m[4],m[1]*d+m[3]*f+m[5],u,v);for(b=0;b<a.length;b++)g=a[b],d=a.indexOf(g),this.graphics[d].geometry=p.scale(g,this._xScale,this._yScale,l,[h,n]);this._updateBackgroundGraphic()}else{c=
b.width;m=b.height;r-=d;t=f-t;if(1===k||5===k)r=0;else if(3===k||7===k)t=0;if(0!==r||0!==t){this._xScale=(c+(d>h?r:-1*r))/c||1;this._yScale=(m+(f<n?t:-1*t))/m||1;if(1===k||5===k)this._xScale=1;else if(3===k||7===k)this._yScale=1;d=(h+r/2-h)/g;f=(n+t/2-n)/g;b=p.scale(b.box,this._xScale,this._yScale,l);this.backgroundGraphic.geometry=p.cloneMove(b,d,f,l,!0);d=this._getGraphicInfo(this.backgroundGraphic);b=d.centerX;d=d.centerY;f=(b-h)/g;k=-1*(d-n)/g;for(c=0;c<a.length;c++)g=a[c],r=a.indexOf(g),g=p.scale(g,
this._xScale,this._yScale,l,[h,n]),this.graphics[r].geometry=p.cloneMove(g,f,k,l,!0);this.centerGraphic.geometry=new q.Point(b,d,l.spatialReference)}}};c.prototype._rotateGraphic=function(a){var b=this._startInfo,c=b.centerX,l=b.centerY,h=b.startX,d=b.startY,f=b.box,b=b.rotate;a=a.geometry;var g=a.x,k=a.y;a=new q.Point(c,l,this.view.spatialReference);this._rotationAngle=p.getRotationAngle(c,l,h,d,g,k);c=this._startInfo.graphicInfos.map(function(a){return a.geometry});for(l=0;l<c.length;l++)d=c[l],
h=c.indexOf(d),d=y.rotate(d,this._rotationAngle,a),this.graphics[h].geometry=d;this.backgroundGraphic.geometry=y.rotate(f,this._rotationAngle,a);this.rotateGraphic.geometry=y.rotate(b,this._rotationAngle,a)};c.prototype._moveGraphic=function(a,b,c){if(-1<this.graphics.indexOf(a)){var e=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=p.cloneMove(e,b,c,this.view);for(var d=0,f=this.graphics;d<f.length;d++)e=f[d],e!==a&&(e.geometry=p.cloneMove(e.geometry,b,c,this.view))}else a===this.centerGraphic&&
(e=this.backgroundGraphic.geometry,this.backgroundGraphic.geometry=p.cloneMove(e,b,c,this.view));if(a===this.backgroundGraphic||a===this.centerGraphic)for(a=0,d=this.graphics;a<d.length;a++)e=d[a],e.geometry=p.cloneMove(e.geometry,b,c,this.view)};c.prototype._setupGraphics=function(){this._set("centerGraphic",new u(null,this._centerGraphicSymbol));this.showCenterGraphic&&this.layer.add(this.centerGraphic);this._set("backgroundGraphic",new u(null,this._defaultFillSymbol));this.layer.add(this.backgroundGraphic);
this._rotateLineGraphic=new u(null,this._rotateLineGraphicSymbol);this._set("rotateGraphic",new u(null,this._rotateGraphicSymbol));this.enableRotation&&!this._hasExtentGraphic()&&(this.layer.add(this._rotateLineGraphic),this.layer.add(this.rotateGraphic));for(var a=0;8>a;a++)this.handleGraphics.push(new u(null,this._defaultGraphicSymbol));this.enableScaling&&this.layer.addMany(this.handleGraphics)};c.prototype._updateGraphics=function(){this._updateBackgroundGraphic();this._updateHandleGraphics();
this._updateCenterGraphic();this._updateRotateGraphic();this._updateRotateLineGraphic()};c.prototype._hideGraphicsBeforeUpdate=function(){this.centerGraphic.visible=!1;this.rotateGraphic.visible=!1;this._rotateLineGraphic.visible=!1;this.handleGraphics.forEach(function(a){return a.visible=!1})};c.prototype._showGraphicsAfterUpdate=function(){this.enableRotation&&(this._rotateLineGraphic.visible=!0,this.rotateGraphic.visible=!0);this.showCenterGraphic&&(this.centerGraphic.visible=!0);this.enableScaling&&
this.handleGraphics.forEach(function(a){return a.visible=!0})};c.prototype._updateHandleGraphics=function(){var a=this,b=this._getCoordinates(!0);this.handleGraphics.forEach(function(c,d){d=b[d];a._updateXY(c,d[0],d[1])})};c.prototype._updateBackgroundGraphic=function(){var a=this._getCoordinates();this.backgroundGraphic.geometry=new q.Polygon({rings:a,spatialReference:this.view.spatialReference})};c.prototype._updateCenterGraphic=function(){var a=this._getBoxBounds(x.create());this.centerGraphic.geometry=
new q.Point((a[2]+a[0])/2,(a[3]+a[1])/2,this.view.spatialReference)};c.prototype._updateRotateGraphic=function(){if(this.handleGraphics.length){var a=this.handleGraphics[1].geometry;this.rotateGraphic.geometry=new q.Point(a.x,a.y+this.view.state.resolution*this._rotateGraphicOffset,this.view.spatialReference)}};c.prototype._updateRotateLineGraphic=function(){if(this.handleGraphics.length&&this.rotateGraphic&&this.rotateGraphic.geometry){var a=this.handleGraphics[1].geometry,b=this.rotateGraphic.geometry;
this._rotateLineGraphic.geometry=new q.Polyline({paths:[[a.x,a.y],[b.x,b.y]],spatialReference:this.view.spatialReference})}};c.prototype._updateXY=function(a,b,c){a.geometry=new q.Point(b,c,this.view.spatialReference)};c.prototype._updateX=function(a,b){a.geometry=new q.Point(b,a.geometry.y,this.view.spatialReference)};c.prototype._updateY=function(a,b){a.geometry=new q.Point(a.geometry.x,b,this.view.spatialReference)};c.prototype._hasExtentGraphic=function(){return this.graphics.some(function(a){return a&&
G.isSome(a.geometry)&&"extent"===a.geometry.type})};c.prototype._getBoxBounds=function(a){var b=this.graphics.map(function(a){return a.geometry});return this._getBounds(a,b)};c.prototype._getCoordinates=function(a){var b=this._getBoxBounds(x.create()),c=b[0],d=b[1],f=b[2],b=b[3];if(a){a=(c+f)/2;var g=(b+d)/2;return[[c,b],[a,b],[f,b],[f,g],[f,d],[a,d],[c,d],[c,g]]}return[[c,b],[f,b],[f,d],[c,d]]};c.prototype._emitMoveStartEvent=function(a,b,c){a=new J(this.graphics,c,a,b);this.emit("move-start",a);
if(this.callbacks.onMoveStart)this.callbacks.onMoveStart(a)};c.prototype._emitMoveEvent=function(a,b,c){a=new K(this.graphics,c,a,b);this.emit("move",a);if(this.callbacks.onMove)this.callbacks.onMove(a)};c.prototype._emitMoveStopEvent=function(a,b,c){a=new L(this.graphics,c,a,b);this.emit("move-stop",a);if(this.callbacks.onMoveStop)this.callbacks.onMoveStop(a)};c.prototype._emitRotateStartEvent=function(a,b){a=new M(this.graphics,b,a);this.emit("rotate-start",a);if(this.callbacks.onRotateStart)this.callbacks.onRotateStart(a)};
c.prototype._emitRotateEvent=function(a,b){a=new N(this.graphics,b,a);this.emit("rotate",a);if(this.callbacks.onRotate)this.callbacks.onRotate(a)};c.prototype._emitRotateStopEvent=function(a,b){a=new O(this.graphics,b,a);this.emit("rotate-stop",a);if(this.callbacks.onRotateStop)this.callbacks.onRotateStop(a)};c.prototype._emitScaleStartEvent=function(a,b,c){a=new P(this.graphics,c,a,b);this.emit("scale-start",a);if(this.callbacks.onScaleStart)this.callbacks.onScaleStart(a)};c.prototype._emitScaleEvent=
function(a,b,c){a=new Q(this.graphics,c,a,b);this.emit("scale",a);if(this.callbacks.onScale)this.callbacks.onScale(a)};c.prototype._emitScaleStopEvent=function(a,b,c){a=new R(this.graphics,c,a,b);this.emit("scale-stop",a);if(this.callbacks.onScaleStop)this.callbacks.onScaleStop(a)};g([f.property()],c.prototype,"_rotateLineGraphic",void 0);g([f.property({readOnly:!0})],c.prototype,"type",void 0);g([f.property()],c.prototype,"callbacks",void 0);g([f.property({readOnly:!0})],c.prototype,"centerGraphic",
void 0);g([f.property({readOnly:!0})],c.prototype,"backgroundGraphic",void 0);g([f.property()],c.prototype,"enableMovement",void 0);g([f.property()],c.prototype,"enableRotation",void 0);g([f.property()],c.prototype,"enableScaling",void 0);g([f.property()],c.prototype,"graphics",void 0);g([f.property({readOnly:!0})],c.prototype,"handleGraphics",void 0);g([f.property()],c.prototype,"layer",void 0);g([f.property()],c.prototype,"preserveAspectRatio",void 0);g([f.property({readOnly:!0})],c.prototype,"rotateGraphic",
void 0);g([f.property()],c.prototype,"showCenterGraphic",void 0);g([f.property({dependsOn:["view.ready","graphics.length","layer"],readOnly:!0})],c.prototype,"state",null);g([f.property()],c.prototype,"view",void 0);return c=g([f.subclass("esri.views.draw.support.Box")],c)}(f.declared(E.EventedAccessor))});