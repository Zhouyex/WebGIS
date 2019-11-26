// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","./spatialReferenceUtils"],function(u,c,t){function n(a,b){var f=b[0]-a[0],d=b[1]-a[1];return 2<a.length&&2<b.length?(a=a[2]-b[2],Math.sqrt(f*f+d*d+a*a)):Math.sqrt(f*f+d*d)}function p(a,b,f){var d=a[0]+f*(b[0]-a[0]),e=a[1]+f*(b[1]-a[1]);return 2<a.length&&2<b.length?[d,e,a[2]+f*(b[2]-a[2])]:[d,e]}function q(a,b,f){for(var d=a.length,e=0,g=0,k=0,m=0;m<d;m++){var h=a[m],c=a[(m+1)%d],l=2,e=e+(h[0]*c[1]-c[0]*h[1]);2<h.length&&2<c.length&&f&&(g+=h[0]*c[2]-c[0]*h[2],l=3);h.length>
l&&c.length>l&&b&&(k+=h[0]*c[l]-c[0]*h[l])}return 0>=e&&0>=g&&0>=k}function r(a,b){if(b=t.getInfo(b)){var f=b.valid[0],d=b.valid[1],e=d-f;b=function(a){var b=Infinity,g=-Infinity;a.forEach(function(a){for(var c=a[0];c<f;)c+=e;for(;c>d;)c-=e;b=Math.min(b,c);g=Math.max(g,c);a[0]=c});var c=g-b;e-c<c&&a.forEach(function(a){0>a[0]&&(a[0]+=e)})};for(var g=0;g<a.length;g++)b(a[g])}}Object.defineProperty(c,"__esModule",{value:!0});c.geometryToCoordinates=function(a){if(!a)return null;if(Array.isArray(a))return a;
var b=a.hasZ,c=a.hasM;if("point"===a.type)return c&&b?[a.x,a.y,a.z,a.m]:b?[a.x,a.y,a.z]:c?[a.x,a.y,a.m]:[a.x,a.y];if("polygon"===a.type)return a.rings.slice(0);if("polyline"===a.type)return a.paths.slice(0);if("multipoint"===a.type)return a.points.slice(0);if("extent"===a.type){a=a.clone().normalize();if(!a)return null;var d=!1,e=!1;a.forEach(function(a){a.hasZ&&(d=!0);a.hasM&&(e=!0)});return a.map(function(a){var b=[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]];
if(d&&a.hasZ)for(var c=.5*(a.zmax-a.zmin),f=0;f<b.length;f++)b[f].push(c);if(e&&a.hasM)for(a=.5*(a.mmax-a.mmin),f=0;f<b.length;f++)b[f].push(a);return b})}return null};c.getLength=n;c.getMidpoint=function(a,b){return p(a,b,.5)};c.getPathLength=function(a){for(var b=a.length,c=0,d=0;d<b-1;++d)c+=n(a[d],a[d+1]);return c};c.getPointOnPath=function(a,b){if(0>=b)return a[0];for(var c=a.length,d=0,e=0;e<c-1;++e){var g=n(a[e],a[e+1]);if(b-d<g)return p(a[e],a[e+1],(b-d)/g);d+=g}return a[c-1]};c.isClockwise=
q;c.closeRingsAndFixWinding=function(a){if("rings"in a){for(var b=0,c=a.rings;b<c.length;b++){var d=c[b];3>d.length||d[0][0]===d[d.length-1][0]&&d[0][1]===d[d.length-1][1]||d.push(d[0])}if(0<a.rings.length&&!q(a.rings[0],a.hasM,a.hasZ))for(b=0;b<a.rings.length;++b)a.rings[b]=a.rings[b].reverse()}};c.getRingArea=function(a){for(var b=a.length,c=0,d=0;d<b;d++)var e=a[d],g=a[(d+1)%b],c=c+(e[0]*g[1]-g[0]*e[1]);return c};c.unnormalizeGeometryOnDatelineCrossing=function(a){if("polygon"!==a.type&&"polyline"!==
a.type)return a;r("polygon"===a.type?a.rings:a.paths,a.spatialReference);return a};c.unnormalizeVerticesOnDatelineCrossing=r;c.computeUnnormalizedVertexPositionsOnDateLineCrossing=function(a,b,c,d){var e=Infinity,f=-Infinity;a.forEach(function(a){for(var g=a.pos[0];g<b;)g+=d;for(;g>c;)g-=d;e=Math.min(e,g);f=Math.max(f,g);a.unnormalizedPos[0]=g;a.unnormalizedPos[1]=a.pos[1]});var k=f-e;d-k<k&&a.forEach(function(a){0>a.unnormalizedPos[0]&&(a.unnormalizedPos[0]+=d)})}});