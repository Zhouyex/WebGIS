// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","./common"],function(p,d,h){function l(a,b,c){var m=b[0],d=b[1],e=b[2];b=b[3];var f=c[0],k=c[1],h=c[2];c=c[3];a[0]=m*f+e*k;a[1]=d*f+b*k;a[2]=m*h+e*c;a[3]=d*h+b*c;return a}function n(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];a[3]=b[3]-c[3];return a}Object.defineProperty(d,"__esModule",{value:!0});d.copy=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];return a};d.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=1;return a};d.set=function(a,b,c,d,g){a[0]=b;a[1]=
c;a[2]=d;a[3]=g;return a};d.transpose=function(a,b){if(a===b){var c=b[1];a[1]=b[2];a[2]=c}else a[0]=b[0],a[1]=b[2],a[2]=b[1],a[3]=b[3];return a};d.invert=function(a,b){var c=b[0],d=b[1],g=b[2];b=b[3];var e=c*b-g*d;if(!e)return null;e=1/e;a[0]=b*e;a[1]=-d*e;a[2]=-g*e;a[3]=c*e;return a};d.adjoint=function(a,b){var c=b[0];a[0]=b[3];a[1]=-b[1];a[2]=-b[2];a[3]=c;return a};d.determinant=function(a){return a[0]*a[3]-a[2]*a[1]};d.multiply=l;d.rotate=function(a,b,c){var d=b[0],g=b[1],e=b[2];b=b[3];var f=Math.sin(c);
c=Math.cos(c);a[0]=d*c+e*f;a[1]=g*c+b*f;a[2]=d*-f+e*c;a[3]=g*-f+b*c;return a};d.scale=function(a,b,c){var d=b[1],g=b[2],e=b[3],f=c[0];c=c[1];a[0]=b[0]*f;a[1]=d*f;a[2]=g*c;a[3]=e*c;return a};d.fromRotation=function(a,b){var c=Math.sin(b);b=Math.cos(b);a[0]=b;a[1]=c;a[2]=-c;a[3]=b;return a};d.fromScaling=function(a,b){a[0]=b[0];a[1]=0;a[2]=0;a[3]=b[1];return a};d.str=function(a){return"mat2("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"};d.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],
2)+Math.pow(a[2],2)+Math.pow(a[3],2))};d.LDU=function(a,b,c,d){a[2]=d[2]/d[0];c[0]=d[0];c[1]=d[1];c[3]=d[3]-a[2]*c[1];return[a,b,c]};d.add=function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=b[3]+c[3];return a};d.subtract=n;d.exactEquals=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]};d.equals=function(a,b){var c=a[0],d=a[1],g=a[2];a=a[3];var e=b[0],f=b[1],k=b[2];b=b[3];return Math.abs(c-e)<=h.EPSILON*Math.max(1,Math.abs(c),Math.abs(e))&&Math.abs(d-f)<=h.EPSILON*
Math.max(1,Math.abs(d),Math.abs(f))&&Math.abs(g-k)<=h.EPSILON*Math.max(1,Math.abs(g),Math.abs(k))&&Math.abs(a-b)<=h.EPSILON*Math.max(1,Math.abs(a),Math.abs(b))};d.multiplyScalar=function(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c;return a};d.multiplyScalarAndAdd=function(a,b,c,d){a[0]=b[0]+c[0]*d;a[1]=b[1]+c[1]*d;a[2]=b[2]+c[2]*d;a[3]=b[3]+c[3]*d;return a};d.mul=l;d.sub=n});