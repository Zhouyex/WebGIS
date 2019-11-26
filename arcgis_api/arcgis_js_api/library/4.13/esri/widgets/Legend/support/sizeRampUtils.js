// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/generatorHelper ../../../symbols ../../../core/promiseUtils ../../../renderers/support/numberUtils ../../../symbols/support/utils ./utils @dojo/framework/shim/Promise".split(" "),function(K,r,t,H,M,P,x,L,Q){function R(a,b){var c=a.length-1;return a.map(function(a,k){return Q.createStopLabel(a,k,c,b)})}function S(a,b){var c=null,f=null;"simple"===a.type?c=a.symbol:"class-breaks"===a.type?(c=(a=a.classBreakInfos)&&
a[0]&&a[0].symbol,f=1<a.length):"unique-value"===a.type&&(c=(a=a.uniqueValueInfos)&&a[0]&&a[0].symbol,f=1<a.length);if(!c||T(c))return null;c=c.clone();if(b||f)-1<c.type.indexOf("3d")?U(c):(b=c,-1!==b.type.indexOf("line")?b.color=B:(b.color=N,"simple-marker"===b.type&&(b.outline={color:B,width:1.5})));return c}function T(a){return a?M.isSymbol3D(a)?a.symbolLayers?a.symbolLayers.some(function(a){return a&&"fill"===a.type}):!1:-1!==a.type.indexOf("fill"):!1}function U(a){L.isVolumetricSymbol(a)||("line-3d"===
a.type?a.symbolLayers.forEach(function(a){a.material={color:B}}):a.symbolLayers.forEach(function(a){"icon"!==a.type||a.resource&&a.resource.href?a.material={color:V}:(a.material={color:N},a.outline={color:B,size:1.5})}))}function W(a,b,c,f){return t(this,void 0,void 0,function(){var k,l,g,d,h;return H(this,function(m){switch(m.label){case 0:return[4,new Promise(function(a,b){K(["../../../renderers/visualVariables/support/visualVariableUtils"],a,b)})];case 1:l=(k=m.sent().getSizeRangeAtScale(a,c,f))&&
X(k);if(!k&&!l)return[2,void 0];g=l.map(function(b){var c=k.minSize,f=k.maxSize,d=a.minDataValue,h=a.maxDataValue;return b<=c?d:b>=f?h:(b-c)/(f-c)*(h-d)+d});g=x.round(g);d=1;m.label=2;case 2:return d<g.length-1?[4,Y(a,b,g[d],g[d-1],c,f)]:[3,5];case 3:if(h=m.sent())g[d]=h[0],l[d]=h[1];m.label=4;case 4:return d++,[3,2];case 5:return[2,g]}})})}function X(a){var b=a.minSize;a=(a.maxSize-b)/4;for(var c=[],f=0;5>f;f++)c.push(b+a*f);return c}function Y(a,b,c,f,k,l){return t(this,void 0,void 0,function(){var g,
d,h,m,r,C,y,u,n,v,e,p,q,z,D,E,F,t,w,O,I,J;return H(this,function(A){switch(A.label){case 0:return[4,G(a,b,c,k,l)];case 1:return d=A.sent(),[4,G(a,b,f,k,l)];case 2:h=A.sent(),m=x.numDigits(c),r=m.fractional,C=20,y=m.integer,n=u=null,0<c&&1>c&&(u=Math.pow(10,r),c*=u,y=x.numDigits(c).integer),v=y-1,A.label=3;case 3:if(!(0<=v))return[3,8];e=Math.pow(10,v);p=Math.floor(c/e)*e;q=Math.ceil(c/e)*e;null!=u&&(p/=u,q/=u);z=(p+q)/2;g=x.round([p,z,q],{indexes:[1]});z=g[1];return[4,G(a,b,p,k,l)];case 4:return D=
A.sent(),[4,G(a,b,q,k,l)];case 5:return E=A.sent(),[4,G(a,b,z,k,l)];case 6:F=A.sent();t=x.percentChange(d,D,h,null);w=x.percentChange(d,E,h,null);O=x.percentChange(d,F,h,null);I=t.previous<=C;J=w.previous<=C;I&&J&&(t.previous<=w.previous?(I=!0,J=!1):(J=!0,I=!1));I?n=[p,D]:J?n=[q,E]:O.previous<=C&&(n=[z,F]);if(n)return[3,8];A.label=7;case 7:return v--,[3,3];case 8:return[2,n]}})})}function G(a,b,c,f,k){return t(this,void 0,void 0,function(){var l;return H(this,function(g){switch(g.label){case 0:return[4,
new Promise(function(a,b){K(["../../../renderers/visualVariables/support/visualVariableUtils"],a,b)})];case 1:return l=g.sent().getSize,[2,l(a,c,{scale:f,view:k,shape:"simple-marker"===b.type?b.style:null})]}})})}function Z(a,b){a=a.clone();if(M.isSymbol3D(a))L.isVolumetricSymbol(a)||a.symbolLayers.forEach(function(a){"fill"!==a.type&&(a.size=b)});else if("esri.symbols.SimpleMarkerSymbol"===a.declaredClass)a.size=b;else if("esri.symbols.PictureMarkerSymbol"===a.declaredClass){var c=a.width,f=a.height;
a.height=b;a.width=c/f*b}else"esri.symbols.SimpleLineSymbol"===a.declaredClass?a.width=b:"esri.symbols.TextSymbol"===a.declaredClass&&a.font&&(a.font.size=b);return a}Object.defineProperty(r,"__esModule",{value:!0});r.REAL_WORLD_MAX_SIZE=30;r.REAL_WORLD_MIN_SIZE=12;var N=[255,255,255],V=[200,200,200],B=[128,128,128];r.getRampStops=function(a,b,c,f,k,l){return t(this,void 0,void 0,function(){var g,d,h,m,B,C,y,u,n,v,e,p,q,z,D,E,F,K=this;return H(this,function(w){switch(w.label){case 0:d=(g=b.legendOptions)&&
g.customValues;h=S(a,c);m=!!h;B=!!d;C=null!=b.minSize&&null!=b.maxSize;y=b.stops&&1<b.stops.length;u=!!b.target;if(!m||!(B||C||y&&!u))return[2,void 0];n=L.isVolumetricSymbol(h);p=e=v=null;if(!n||y)return[3,1];e=x.round([b.minDataValue,b.maxDataValue]);return[3,4];case 1:return(q=d)?[3,3]:[4,W(b,h,f,k)];case 2:q=w.sent(),w.label=3;case 3:e=q,w.label=4;case 4:!e&&y&&(e=b.stops.map(function(a){return a.value}),(v=b.stops.some(function(a){return!!a.label}))&&(p=b.stops.map(function(a){return a.label})));
n&&e&&2<e.length&&(e=[e[0],e[e.length-1]]);if(!e)return[2,null];z=[r.REAL_WORLD_MIN_SIZE,r.REAL_WORLD_MAX_SIZE];D=L.getSymbolOutlineSize(h);E=v?null:R(e,l);return[4,P.all(e.map(function(a,c){return t(K,void 0,void 0,function(){var d,e,g,l;return H(this,function(m){switch(m.label){case 0:if(!n)return[3,1];g=z[c];return[3,3];case 1:return[4,G(b,h,a,f,k)];case 2:g=m.sent(),m.label=3;case 3:return d=g,e=Z(h,d),l=v?p[c]:E[c],[2,{value:a,symbol:e,label:l,size:d,outlineSize:D}]}})})}))];case 5:return F=
w.sent(),[2,F.reverse()]}})})}});