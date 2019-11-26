// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../Viewpoint ../../core/asyncUtils ../../core/Collection ../../core/maybe ../../core/promiseUtils ../../core/unitUtils ../../core/wgs84Constants ../../core/libs/gl-matrix-2/common ../../core/libs/gl-matrix-2/mat2d ../../core/libs/gl-matrix-2/mat2df64 ../../core/libs/gl-matrix-2/vec2 ../../core/libs/gl-matrix-2/vec2f64 ../../geometry/Extent ../../geometry/Geometry ../../geometry/Point ../../geometry/SpatialReference ../../geometry/support/spatialReferenceUtils ../../geometry/support/webMercatorUtils ../../geometry/support/webMercatorUtils".split(" "),
function(ka,g,Q,H,R,aa,ba,M,ca,S,da,n,l,r,f,h,T,ea,N,fa,G,F,ga){function U(a,b,c,d){return d&&c&&!d.equals(c)&&F.canProject(d,c)&&d.isWebMercator?(d.isWebMercator?(c=b[1],89.99999<c?c=89.99999:-89.99999>c&&(c=-89.99999),c=Math.sin(n.common.toRadian(c)),a=f.vec2.set(a,n.common.toRadian(b[0])*B,.5*B*Math.log((1+c)/(1-c)))):(c=n.common.toDegree(b[0]/B),a=f.vec2.set(a,c-360*Math.floor((c+180)/360),n.common.toDegree(.5*Math.PI-2*Math.atan(Math.exp(-1*b[1]/B))))),a):f.vec2.copy(a,b)}function y(a){return a.wkid?
a:a.spatialReference||fa.WGS84}function w(a,b){return b.type?f.vec2.set(a,b.x,b.y):f.vec2.copy(a,b)}function x(a,b){return Math.max(a.width/b[0],a.height/b[1])*V(a.spatialReference)}function I(a,b,c,d){return H(this,void 0,void 0,function(){var e,q,g,f,h,l,m,t,p,w,u,v,z,A,J,x,n,r,B,y,E,G,K,O,L,H,D,P;return Q(this,function(C){switch(C.label){case 0:if(!a||Array.isArray(a)&&!a.length)return[2,null];ba.isCollection(a)&&(a=a.toArray());if(!Array.isArray(a)||!a.length||"object"!==typeof a[0])return[3,
7];q=a.every(function(a){return"attributes"in a});g=a.some(function(a){return!a.geometry});f=a;if(!(q&&g&&b&&b.allLayerViews))return[3,2];h=new Map;l=0;for(m=a;l<m.length;l++)t=m[l],p=t.layer,w=h.get(p)||[],u=t.attributes[p.objectIdField],null!=u&&w.push(u),h.set(p,w);v=[];h.forEach(function(a,c){var d=b.allLayerViews.find(function(a){return a.layer.id===c.id});if("queryFeatures"in d){var e=c.createQuery();e.objectIds=a;e.returnGeometry=!0;v.push(d.queryFeatures(e))}});return[4,ca.all(v)];case 1:z=
C.sent();A=[];J=0;for(x=z;J<x.length;J++)if((n=x[J])&&n.features&&n.features.length)for(r=0,B=n.features;r<B.length;r++)t=B[r],M.isSome(t.geometry)&&A.push(t.geometry);f=A;C.label=2;case 2:y=0,E=f,C.label=3;case 3:if(!(y<E.length))return[3,6];G=E[y];return[4,I(G,b,c,d)];case 4:d=C.sent(),C.label=5;case 5:return y++,[3,3];case 6:return[2,d];case 7:if(!Array.isArray(a)||2!==a.length||"number"!==typeof a[0]||"number"!==typeof a[1])return[3,8];e=new N(a);return[3,12];case 8:if(!(a instanceof ea))return[3,
9];e=a;return[3,12];case 9:if(!("geometry"in a))return[3,12];if(!a.geometry)return[3,10];e=a.geometry;return[3,12];case 10:if(!a.layer)return[3,12];K=a.layer;O=b.allLayerViews.find(function(a){return a.layer.id===K.id});if(!("queryFeatures"in O))return[3,12];L=K.createQuery();L.objectIds=[a.attributes[K.objectIdField]];L.returnGeometry=!0;return[4,O.queryFeatures(L)];case 11:H=C.sent(),e=M.get(H,"features",0,"geometry"),C.label=12;case 12:if(M.isNone(e))return[2,null];D="point"===e.type?new T({xmin:e.x,
ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference}):e.extent;if(!D)return[2,null];P=F.canProject(D,c);if(!D.spatialReference.equals(c)&&P)D=F.project(D,c);else if(!P)return[2,null];d=d?d.union(D):D.clone();return[2,d]}})})}function ha(a){if(a&&(!Array.isArray(a)||"number"!==typeof a[0])&&("object"===typeof a||Array.isArray(a)&&"object"===typeof a[0])){if("layer"in a&&a.layer&&a.layer.minScale&&a.layer.maxScale){var b=a.layer;return{min:b.minScale,max:b.maxScale}}if(Array.isArray(a)&&
a.length&&a.every(function(a){return"layer"in a})){for(var c=0,d=0,e=0;e<a.length;e++)(b=a[e].layer)&&b.minScale&&b.maxScale&&(c=b.minScale<c?b.minScale:c,d=b.maxScale>d?b.maxScale:d);return c&&d?{min:c,max:d}:null}}}function W(a,b){return H(this,void 0,void 0,function(){var c,d,e,g,f,k,l,m,p,t,n,r,u,v,z,A;return Q(this,function(q){switch(q.label){case 0:if(!a||!b)return[2,new R({targetGeometry:new N,scale:0,rotation:0})];c=b.spatialReference;d=b.size;e=b.viewpoint;g=b.constraints;f=null;"esri.Viewpoint"===
a.declaredClass?f=a:a.viewpoint?f=a.viewpoint:a.target&&"esri.Viewpoint"===a.target.declaredClass&&(f=a.target);k=null;if(!f||!f.targetGeometry)return[3,1];k=f.targetGeometry;return[3,10];case 1:if(!(a instanceof T))return[3,2];k=a;return[3,10];case 2:return a||a&&(a.hasOwnProperty("center")||a.hasOwnProperty("extent")||a.hasOwnProperty("target"))?[4,I(a.center,b,c)]:[3,10];case 3:return(p=q.sent())?[3,5]:[4,I(a.extent,b,c)];case 4:p=q.sent(),q.label=5;case 5:return(m=p)?[3,7]:[4,I(a.target,b,c)];
case 6:m=q.sent(),q.label=7;case 7:return(l=m)?[3,9]:[4,I(a,b,c)];case 8:l=q.sent(),q.label=9;case 9:k=l,q.label=10;case 10:!k&&e&&e.targetGeometry?k=e.targetGeometry:!k&&b.extent&&(k=b.extent);t=y(k);c||(c=y(b.spatialReference||b.extent||k));if(!ga.canProject(k,c)&&t&&!t.equals(c))return[2,null];n=w(h.vec2f64.create(),k.center?k.center:k);r=new N(U(n,n,t,c),c);u=null;u=f&&f.targetGeometry&&"point"===f.targetGeometry.type?f.scale:a.hasOwnProperty("scale")&&a.scale?a.scale:a.hasOwnProperty("zoom")&&
-1!==a.zoom&&g&&g.effectiveLODs?g.zoomToScale(a.zoom):Array.isArray(k)||"point"===k.type||"extent"===k.type&&0===k.width&&0===k.height?b.extent&&F.canProject(b.extent,c)?x(F.project(b.extent,c),d):b.extent?x(b.extent,d):e.scale:F.canProject(k.extent,c)?x(F.project(k.extent,c),d):x(k.extent,d);if(v=ha(a))v.min&&v.min>u?u=v.min:v.max&&v.max<u&&(u=v.max);z=0;f?z=f.rotation:a.hasOwnProperty("rotation")?z=a.rotation:e&&(z=e.rotation);A=new R({targetGeometry:r,scale:u,rotation:z});g&&(A=g.fit(A),g.rotationEnabled||
(A.rotation=z));return[2,A]}})})}function m(a,b){var c=a.targetGeometry,d=b.targetGeometry;c.x=d.x;c.y=d.y;c.spatialReference=d.spatialReference;a.scale=b.scale;a.rotation=b.rotation;return a}function X(a,b,c){return c?f.vec2.set(a,.5*(b[0]-c.right+c.left),.5*(b[1]-c.bottom+c.top)):f.vec2.scale(a,b,.5)}function ia(a,b,c,d){g.getTransform(a,b,c,d);return l.mat2d.invert(a,a)}function Y(a,b,c){var d=E(b);b=Math.abs(Math.cos(d));d=Math.abs(Math.sin(d));return f.vec2.set(a,Math.round(c[1]*d+c[0]*b),Math.round(c[1]*
b+c[0]*d))}function p(a){var b=a.scale;a=a.targetGeometry.spatialReference;a=G.isValid(a)?1/(39.37*S.getMetersPerUnitForSR(a)*96):1;return b*a}function E(a){return n.common.toRadian(a.rotation)||0}function V(a){return G.isValid(a)?39.37*S.getMetersPerUnitForSR(a)*96:1}function Z(a){return a.isWrappable?(a=G.getInfo(a),a.valid[1]-a.valid[0]):0}Object.defineProperty(g,"__esModule",{value:!0});var B=da.wgs84Radius,ja=180/Math.PI;g.extentToScale=x;g.create=W;g.copy=m;g.getAnchor=X;g.getExtent=function(){var a=
h.vec2f64.create();return function(b,c,d){var e=c.targetGeometry;w(a,e);c=.5*p(c);b.xmin=a[0]-c*d[0];b.ymin=a[1]-c*d[1];b.xmax=a[0]+c*d[0];b.ymax=a[1]+c*d[1];b.spatialReference=e.spatialReference;return b}}();g.setExtent=function(a,b,c,d,e){g.centerAt(a,b,c.center);a.scale=x(c,d);e&&e.constraints&&e.constraints.constrain(a);return a};g.getOuterExtent=function(){var a=h.vec2f64.create(),b=h.vec2f64.create();return function(c,d,e){w(a,d.targetGeometry);Y(b,d,e);e=.5*p(d);c.set({xmin:a[0]-e*b[0],ymin:a[1]-
e*b[1],xmax:a[0]+e*b[0],ymax:a[1]+e*b[1],spatialReference:d.targetGeometry.spatialReference});return c}}();g.getOuterSize=Y;g.getPaddingScreenTranslation=function(){var a=h.vec2f64.create();return function(b,c,d){return f.vec2.sub(b,f.vec2.scale(b,c,.5),X(a,c,d))}}();g.getPaddingMapTranslation=function(){var a=r.mat2df64.create(),b=h.vec2f64.create();return function(c,d,e,q){var h=p(d);d=E(d);f.vec2.set(b,h,h);l.mat2d.fromScaling(a,b);l.mat2d.rotate(a,a,d);l.mat2d.translate(a,a,g.getPaddingScreenTranslation(b,
e,q));l.mat2d.translate(a,a,[0,q.top-q.bottom]);return f.vec2.set(c,a[4],a[5])}}();g.getResolution=p;g.getResolutionToScaleFactor=V;g.getMatrix=function(){var a=h.vec2f64.create(),b=h.vec2f64.create(),c=h.vec2f64.create();return function(d,e,g,h,k,m){f.vec2.negate(a,e);f.vec2.scale(b,g,.5*m);f.vec2.set(c,1/h*m,-1/h*m);l.mat2d.identity(d);l.mat2d.translate(d,d,b);k&&l.mat2d.rotate(d,d,k);l.mat2d.scale(d,d,c);l.mat2d.translate(d,d,a);return d}}();g.getTransform=function(){var a=h.vec2f64.create();return function(b,
c,d,e){var f=p(c),h=E(c);w(a,c.targetGeometry);return g.getMatrix(b,a,d,f,h,e)}}();g.getTransformNoRotation=function(){var a=h.vec2f64.create();return function(b,c,d,e){var f=p(c);w(a,c.targetGeometry);return g.getMatrix(b,a,d,f,0,e)}}();g.getWorldWidth=Z;g.getWorldScreenWidth=function(a,b){return Math.round(Z(a)/b)};g.createAsync=function(a,b){return aa.safeCast(W(a,b))};g.angleBetween=function(){var a=h.vec2f64.create(),b=h.vec2f64.create(),c=[0,0,0];return function(d,e,g){f.vec2.subtract(a,d,e);
f.vec2.normalize(a,a);f.vec2.subtract(b,d,g);f.vec2.normalize(b,b);f.vec2.cross(c,a,b);d=Math.acos(f.vec2.dot(a,b)/(f.vec2.length(a)*f.vec2.length(b)))*ja;0>c[2]&&(d=-d);isNaN(d)&&(d=0);return d}}();g.addPadding=function(){var a=h.vec2f64.create();return function(b,c,d,e){var f=b.targetGeometry;m(b,c);g.getPaddingMapTranslation(a,c,d,e);f.x+=a[0];f.y+=a[1];return b}}();g.removePadding=function(){var a=h.vec2f64.create();return function(b,c,d,e){var f=b.targetGeometry;m(b,c);g.getPaddingMapTranslation(a,
c,d,e);f.x-=a[0];f.y-=a[1];return b}}();g.centerAt=function(){var a=h.vec2f64.create();return function(b,c,d){m(b,c);c=b.targetGeometry;var e=y(d),f=y(c);w(a,d);U(a,a,e,f);c.x=a[0];c.y=a[1];return b}}();g.pixelSizeAt=function(a,b,c){return p(b)};g.resize=function(){var a=h.vec2f64.create();return function(b,c,d,e,h){h||(h="center");f.vec2.sub(a,d,e);f.vec2.scale(a,a,.5);d=a[0];e=a[1];switch(h){case "center":f.vec2.set(a,0,0);break;case "left":f.vec2.set(a,-d,0);break;case "top":f.vec2.set(a,0,e);
break;case "right":f.vec2.set(a,d,0);break;case "bottom":f.vec2.set(a,0,-e);break;case "top-left":f.vec2.set(a,-d,e);break;case "bottom-left":f.vec2.set(a,-d,-e);break;case "top-right":f.vec2.set(a,d,e);break;case "bottom-right":f.vec2.set(a,d,-e)}g.translateBy(b,c,a);return b}}();g.rotateBy=function(a,b,c){m(a,b);a.rotation+=c;return a};g.rotateTo=function(a,b,c){m(a,b);a.rotation=c;return a};g.scaleBy=function(){var a=h.vec2f64.create();return function(b,c,d,e,h){m(b,c);isNaN(d)||0===d||(g.toMap(a,
e,c,h),b.scale=c.scale*d,g.toScreen(a,a,b,h),g.translateBy(b,b,f.vec2.set(a,a[0]-e[0],e[1]-a[1])));return b}}();g.scaleTo=function(a,b,c){m(a,b);a.scale=c;return a};g.scaleAndRotateBy=function(){var a=h.vec2f64.create();return function(b,c,d,e,h,l){m(b,c);isNaN(d)||0===d||(g.toMap(a,h,c,l),b.scale=c.scale*d,b.rotation+=e,g.toScreen(a,a,b,l),g.translateBy(b,b,f.vec2.set(a,a[0]-h[0],h[1]-a[1])));return b}}();g.padAndScaleAndRotateBy=function(){var a=h.vec2f64.create(),b=h.vec2f64.create();return function(c,
d,e,h,l,k,m){g.getPaddingScreenTranslation(b,k,m);f.vec2.add(a,l,b);return h?g.scaleAndRotateBy(c,d,e,h,a,k):g.scaleBy(c,d,e,a,k)}}();g.toMap=function(){var a=r.mat2df64.create();return function(b,c,d,e){return f.vec2.transformMat2d(b,c,ia(a,d,e,1))}}();g.toScreen=function(){var a=r.mat2df64.create();return function(b,c,d,e){return f.vec2.transformMat2d(b,c,g.getTransform(a,d,e,1))}}();g.translateBy=function(){var a=h.vec2f64.create(),b=r.mat2df64.create();return function(c,d,e){m(c,d);var g=p(d),
n=c.targetGeometry;l.mat2d.fromRotation(b,E(d));l.mat2d.scale(b,b,h.vec2f64.fromValues(g,g));f.vec2.transformMat2d(a,e,b);n.x+=a[0];n.y+=a[1];return c}}()});