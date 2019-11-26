// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/mathUtils ../../../../core/maybe ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4 ../../../../core/libs/gl-matrix-2/vec4f64 ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/centroid ../../../../geometry/support/coordsUtils ../../../../layers/graphics/dehydratedFeatures ../../support/projectionUtils".split(" "),
function(E,e,y,n,q,z,g,r,A,u,v,B,C,w,m,D){function x(a){var b=a.paths[0];if(!b||0===b.length)return null;b=w.getPointOnPath(b,w.getPathLength(b)/2);return m.makeDehydratedPoint(b[0],b[1],b[2],a.spatialReference)}function h(a,b,c){if(!b||!a)return a;c=c?a:m.clonePoint(a);return D.pointToPoint(a,c,b)?c:null}function t(a){if(Array.isArray(a)){for(var b=0;b<a.length;b++)if(!t(a[b]))return!1;return!0}return null==a||0<=a}Object.defineProperty(e,"__esModule",{value:!0});e.computeCentroid=function(a,b){if("point"===
a.type)return h(a,b,!1);if(m.isHydratedGeometry(a))switch(a.type){case "extent":return h(a.center,b,!1);case "polygon":return h(a.centroid,b,!1);case "polyline":return h(x(a),b,!0);case "mesh":return h(a.extent.center,b,!1)}else switch(a.type){case "extent":var c=y.isFinite(a.zmin);a=m.makeDehydratedPoint(.5*(a.xmax+a.xmin),.5*(a.ymax+a.ymin),c?.5*(a.zmax+a.zmin):void 0,a.spatialReference);return h(a,b,!0);case "polygon":return(c=a.rings[0])&&0!==c.length?(c=C.ringsCentroid(a.rings,a.hasZ),a=m.makeDehydratedPoint(c[0],
c[1],c[2],a.spatialReference)):a=null,h(a,b,!0);case "polyline":return h(x(a),b,!0)}};e.enlargeExtent=function(a,b,c){if(a){b||(b=B.create());var d=.5*a.width*(c-1);c=.5*a.height*(c-1);a.width<1E-7*a.height?d+=c/20:a.height<1E-7*a.width&&(c+=d/20);A.vec4.set(b,a.xmin-d,a.ymin-c,a.xmax+d,a.ymax+c);return b}return null};e.updateVertexAttributeAuxpos1w=function(a,b){for(var c=0;c<a.geometries.length;++c){var d=a.geometries[c].data.vertexAttributes.auxpos1;d&&d.data[3]!==b&&(d.data[3]=b,a.geometryVertexAttrsUpdated(c))}};
e.mixinColorAndOpacity=function(a,b){var c=u.vec4f64.clone(u.vec4f64.ONES);n.isSome(a)&&(c[0]=a[0],c[1]=a[1],c[2]=a[2]);n.isSome(b)?c[3]=b:n.isSome(a)&&3<a.length&&(c[3]=a[3]);return c};e.overrideColor=function(a,b,c,d,k,e){void 0===e&&(e=[0,0,0,0]);for(var l=0;3>l;++l)e[l]=a&&null!=a[l]?a[l]:c&&null!=c[l]?c[l]:k[l];e[3]=null!=b?b:null!=d?d:k[3];return e};e.computeObjectScale=function(a,b,c,d){void 0===a&&(a=r.vec3f64.ONES);void 0===d&&(d=1);var k=Array(3);if(null==b||null==c)k[0]=1,k[1]=1,k[2]=1;
else{for(var e=void 0,l=0,f=2;0<=f;f--){var g=a[f],h=void 0,m=null!=g,n=0===f&&!e&&!m,p=c[f];"symbolValue"===g||n?h=0!==p?b[f]/p:1:m&&"proportional"!==g&&isFinite(g)&&(h=0!==p?g/p:1);null!=h&&(e=k[f]=h,l=Math.max(l,Math.abs(h)))}for(f=2;0<=f;f--)null==k[f]?k[f]=e:0===k[f]&&(k[f]=.001*l)}for(f=2;0<=f;f--)k[f]/=d;return r.vec3f64.fromArray(k)};e.computeSizeWithResourceSize=function(a,b){var c=b.width,d=b.depth,e=b.height;b=b.isPrimitive?10:1;if(null==c&&null==e&&null==d)return[b*a[0],b*a[1],b*a[2]];
for(var c=r.vec3f64.fromValues(c,d,e),g,d=0;3>d;d++)if(e=c[d],null!=e){g=e/a[d];break}for(d=0;3>d;d++)null==c[d]&&(c[d]=a[d]*g);return c};e.validateSymbolLayerSize=function(a){null!=a.isPrimitive&&(a=[a.width,a.depth,a.height]);return t(a)?null:"Symbol sizes may not be negative values"};e.isValidSize=t;e.computeObjectRotation=function(a,b,c,d){void 0===d&&(d=z.mat4f64.create());a=a||0;b=b||0;c=c||0;0!==a&&q.mat4.rotateZ(d,d,-a/180*Math.PI);0!==b&&q.mat4.rotateX(d,d,b/180*Math.PI);0!==c&&q.mat4.rotateY(d,
d,c/180*Math.PI);return d};e.demResolutionForBoundingBox=function(a,b){return null!=b.minDemResolution?b.minDemResolution:v.isPoint(a)?b.minDemResolutionForPoints:.01*v.maximumDimension(a)};e.namedAnchorToHUDMaterialAnchorPos={"bottom-left":g.vec2f64.fromValues(0,0),bottom:g.vec2f64.fromValues(.5,0),"bottom-right":g.vec2f64.fromValues(1,0),left:g.vec2f64.fromValues(0,.5),center:g.vec2f64.fromValues(.5,.5),right:g.vec2f64.fromValues(1,.5),"top-left":g.vec2f64.fromValues(0,1),top:g.vec2f64.fromValues(.5,
1),"top-right":g.vec2f64.fromValues(1,1)}});