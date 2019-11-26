// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../camera/constraintUtils ../PointToPointAnimationController ../../../webgl-engine/lib/Camera ../../../../animation/easing".split(" "),function(g,k,m,f,h,n,p,l,q){Object.defineProperty(k,"__esModule",{value:!0});g=function(g){function c(b,d){var a=g.call(this,b.state,b.sceneIntersectionHelper,"interaction"===d?null:void 0)||this;a.view=b;
a.mode=d;a.zoomLocation=h.vec3f64.create();a.tmpCamera=new l.default;a.tmpRayDir=h.vec3f64.create();a.tmpCenter=h.vec3f64.create();a.constraintOptions={selection:15,interactionType:1,interactionFactor:null,interactionStartCamera:new l.default,interactionDirection:null,tiltMode:0};return a}m(c,g);Object.defineProperty(c.prototype,"isInteractive",{get:function(){return"interaction"===this.mode},enumerable:!0,configurable:!0});c.prototype.zoomStep=function(b,d){if(this.active){var a=this.view.state,
e=this.constraintOptions.interactionStartCamera;this.animation.finished?e.copyFrom(a.camera):this.animation.cameraAt(1,e);this.tmpCamera.copyFrom(a.camera);0<b?(this.intersectionHelper.intersectScreenFreePointFallback(d,this.zoomLocation),this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter)):this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:f.vec3.copy(this.zoomLocation,this.tmpCamera.center);
this.updateCamera(this.tmpCamera,Math.pow(.6,b),this.zoomLocation,d);this.begin(this.tmpCamera)}};c.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:q.outExpo}};c.prototype.updateCamera=function(b,d,a,e){f.vec3.subtract(this.tmpRayDir,a,b.eye);e=f.vec3.length(this.tmpRayDir);var c=e*d;1>=d&&4>c&&(c=4,d=c/e);1E-6>Math.abs(e-c)||(f.vec3.scale(this.tmpRayDir,this.tmpRayDir,d),f.vec3.subtract(b.eye,a,this.tmpRayDir),f.vec3.lerp(b.center,b.center,a,1-d),n.applyAll(this.view,b,
this.constraintOptions))};return c}(p.PointToPointAnimationController);k.ZoomStepController=g});