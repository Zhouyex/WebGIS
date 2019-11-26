// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../Color ../../request ../../core/ItemCache ../../core/promiseUtils ../../core/screenUtils".split(" "),function(l,d,w,m,n,p,q,e){function k(a){if(!a)return null;var b;switch(a.type){case "simple-fill":case "picture-fill":case "simple-marker":b=k(a.outline);break;case "simple-line":var c=e.pt2px(a.width);"none"!==a.style&&0!==c&&(b={color:a.color,style:r(a.style),width:c,cap:a.cap,join:"miter"===a.join?e.pt2px(a.miterLimit):a.join});break;
default:b=null}return b}Object.defineProperty(d,"__esModule",{value:!0});var t=l.toUrl("../../symbols/patterns/"),u={left:"start",center:"middle",right:"end",justify:"start"},v={top:"text-before-edge",middle:"central",baseline:"alphabetic",bottom:"text-after-edge"},h=new p(1E3);d.getSVGAlign=function(a){return a=(a=a.horizontalAlignment)&&u[a.toLowerCase()]||"middle"};d.getSVGBaseline=function(a){return(a=a.verticalAlignment)&&v[a.toLowerCase()]||"alphabetic"};d.getSVGBaselineShift=function(a){return"bottom"===
a.verticalAlignment?"super":null};d.getFill=function(a){var b=a.style,c=null;if(a)switch(a.type){case "simple-marker":"cross"!==b&&"x"!==b&&(c=a.color);break;case "simple-fill":"solid"===b?c=a.color:"none"!==b&&(c={type:"pattern",x:0,y:0,src:t+b+".png",width:8,height:8});break;case "picture-fill":c={type:"pattern",src:a.url,width:e.pt2px(a.width)*a.xscale,height:e.pt2px(a.height)*a.yscale,x:e.pt2px(a.xoffset),y:e.pt2px(a.yoffset)};break;case "text":c=a.color}return c};d.getPatternUrlWithColor=function(a,
b){var c=a+"-"+b;return void 0!==h.get(c)?q.resolve(h.get(c)):n(a,{responseType:"image"}).then(function(a){a=a.data;var d=a.naturalWidth,e=a.naturalHeight,f=document.createElement("canvas");f.width=d;f.height=e;var g=f.getContext("2d");g.fillStyle=b;g.fillRect(0,0,d,e);g.globalCompositeOperation="destination-in";g.drawImage(a,0,0);a=f.toDataURL();h.put(c,a);return a})};d.getStroke=k;var r=function(){var a={};return function(b){if(a[b])return a[b];var c=b.replace(/-/g,"");return a[b]=c}}();d.defaultThematicColor=
new m([128,128,128])});