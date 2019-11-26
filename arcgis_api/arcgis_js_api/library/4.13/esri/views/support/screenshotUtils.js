// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/assignHelper","../../core/compilerUtils","../../core/mathUtils"],function(Q,h,J,K,L){function x(a,b){var c=a||{},g=c.format,e=c.quality,k=c.rotation,c=c.disableSlice,d=a&&!a.ignorePadding&&b.padding||y,f;f=b.width-d.left-d.right;b=b.height-d.top-d.bottom;var q=d=0,m=f,p=b;if(a&&a.area){var d=Math.floor(a.area.x)||0,q=Math.floor(a.area.y)||0,n=null!=a.area.width?Math.floor(a.area.width):null,h=null!=a.area.height?Math.floor(a.area.height):null,m=m-
d,p=p-q;null!=n&&null!=h?(m=Math.min(m,n),p=Math.min(p,h)):null==n&&null!=h?(n=Math.min(m,n),p*=n/m,m=n):null!=n&&null==h&&(n=Math.min(p,h),m*=n/p,p=n)}d=M({x:d,y:q,width:m,height:p},a);q=Math.floor(Math.max(d.x,0));m=Math.floor(Math.max(d.y,0));f={x:q,y:m,width:Math.floor(Math.min(d.width,f-q)),height:Math.floor(Math.min(d.height,b-m))};b=f.width/f.height;d=d.width/d.height;d!==b&&(d>b?(b=Math.floor(f.width/d),f={x:f.x,y:Math.floor(f.y+(f.height-b)/2),width:f.width,height:b}):(b=Math.floor(f.height*
d),f={x:Math.floor(f.x+(f.width-b)/2),y:f.y,width:b,height:f.height}));d=N(a,f);b=d.width;d=d.height;a:switch(g){case "png":case "jpg":case "jpeg":break a;case null:case void 0:g=z;break a;default:K.neverReached(g),g=z}q=O[g];e=L.clamp(null!=e?e:q,0,100);return{format:g,quality:e,area:f,width:b,height:d,rotation:k,disableSlice:c||!1,ignoreBackground:a&&a.ignoreBackground}}function A(a,b){return a.toDataURL(P[b.format],b.quality/100)}function B(a,b,c){c||(r||(r=document.createElement("canvas"),r.width=
1,r.height=1),c=r);return c.getContext("2d").createImageData(a,b)}function N(a,b){if(!a)return b;var c=a.width;a=a.height;if(null!=c&&null!=a)return{width:Math.floor(c),height:Math.floor(a)};if(null==c&&null==a)return b;b=b.width/b.height;return null==a?{width:Math.floor(c),height:Math.floor(c/b)}:{width:Math.floor(a*b),height:Math.floor(a)}}function M(a,b){if(!b||null==b.width||null==b.height)return a;b=b.width/b.height;var c=a.width/a.height;if(c===b)return a;if(c<b)return a.width=Math.floor(a.height*
b),a.height=a.height,a;a.width=a.width;a.height=Math.floor(a.width/b);return a}Object.defineProperty(h,"__esModule",{value:!0});h.completeUserSettings=x;h.toRenderSettings=function(a,b){var c=x(a,b),g=c.area,e=c.width/g.width,k=a&&!a.ignorePadding&&b.padding||y,d=k.left+k.right,f=k.top+k.bottom;return{framebufferWidth:Math.floor((b.width-d)*e+d),framebufferHeight:Math.floor((b.height-f)*e+f),region:{x:Math.floor(g.x*e)+k.left,y:Math.floor(g.y*e)+k.top,width:c.width,height:c.height},format:c.format,
quality:c.quality,rotation:c.rotation,pixelRatio:e,layers:a&&a.layers?a.layers:[],disableSlice:c.disableSlice,ignoreBackground:c.ignoreBackground}};h.encodeResult=function(a,b,c,g){if(g.premultipliedAlpha)for(var e=a.data,k=e.length,d=0;d<k;d+=4){var f=e[d+3];0<f&&(f/=255,e[d+0]/=f,e[d+1]/=f,e[d+2]/=f)}c.width=a.width;c.height=a.height;e=c.getContext("2d");e.putImageData(a,0,0);g.flipY&&(e.save(),e.globalCompositeOperation="copy",e.scale(1,-1),e.translate(0,-e.canvas.height),e.drawImage(e.canvas,
0,0),e.restore());a=e.getImageData(0,0,a.width,a.height);b=A(c,b);c.width=0;c.height=0;return{dataUrl:b,data:a}};h.toDataUrl=A;h.createEmptyImageData=function(a,b,c){if(!a||!b)throw Error("Cannot construct image data without dimensions");if(u)try{return new ImageData(a,b)}catch(g){u=!1}return B(a,b,c)};h.wrapImageData=function(a,b,c,g){if(!b||!c)throw Error("Cannot construct image data without dimensions");if(u)try{return new ImageData(a,b,c)}catch(e){u=!1}b=B(b,c,g);b.data.set(a,0);return b};h.resampleHermite=
function(a,b,c,g,e,k,d,f){void 0===g&&(g=0);void 0===e&&(e=0);void 0===k&&(k=a.width-g);void 0===d&&(d=a.height-e);void 0===f&&(f=!1);var h=a.data,m=b.width,p=b.height,n=b.data;k/=m;d/=p;var r=Math.ceil(k/2),u=Math.ceil(d/2);a=a.width;for(var t=0;t<p;t++)for(var v=0;v<m;v++){for(var C=4*(v+(f?p-t-1:t)*m),D=0,H=0,x=0,y=0,z=0,I=0,A=(t+.5)*d,E=Math.floor(t*d);E<(t+1)*d;E++)for(var F=Math.abs(A-(E+.5))/u,B=(v+.5)*k,F=F*F,G=Math.floor(v*k);G<(v+1)*k;G++){var l=Math.abs(B-(G+.5))/r,l=Math.sqrt(F+l*l);if(!(1<=
l)){var l=2*l*l*l-3*l*l+1,w=4*(g+G+(e+E)*a),I=I+l*h[w+3],H=H+l;!c&&255>h[w+3]&&(l=l*h[w+3]/255);x+=l*h[w];y+=l*h[w+1];z+=l*h[w+2];D+=l}}n[C]=x/D;n[C+1]=y/D;n[C+2]=z/D;n[C+3]=I/H}return b};h.screenshotSuperSampleSettings=function(a,b){if(!b)return a;b=a.framebufferWidth;var c=a.framebufferHeight,g=a.region,e=Math.min(8,2048/Math.max(b,c));return 1.5>e?a:J({},a,{framebufferWidth:Math.round(b*e),framebufferHeight:Math.round(c*e),pixelRatio:a.pixelRatio*e,resample:{region:{x:Math.round(g.x*e),y:Math.round(g.y*
e),width:Math.round(g.width*e),height:Math.round(g.height*e)},width:b,height:c}})};var r=null,u=!0,P={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"},z="jpg",O={png:100,jpg:98,jpeg:98},y={top:0,right:0,bottom:0,left:0}});