// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../request ../../core/promiseUtils ../../core/screenUtils ../../geometry/support/jsonUtils ./cimAnalyzer ./Rasterizer ./TextRasterizer ./utils ../support/cimSymbolUtils ../support/Symbol3DAnchorPosition2D".split(" "),function(S,T,L,G,N,H,y,O,E,P,Q,h,I,R){function J(h,a,b){var c=(h?Object.keys(h):[]).map(function(a){return{name:a,alias:a,type:"string"===typeof h[a]?"esriFieldTypeString":"esriFieldTypeDouble"}});
return{geometryType:a,spatialReference:b,fields:c}}return function(){function l(a,b){this._spatialReference=a;this._avoidSDF=b;this._resourceCache=new Map;this._rasterizer=new P.default;this._textRasterizer=new Q.default;this._pictureMarkerCache=new Map}l.prototype.rasterizeCIMSymbolAsync=function(a,b,c,d,g){return G(this,void 0,void 0,function(){var v,k,h,r,n,t,u,p,m,e;return L(this,function(f){switch(f.label){case 0:return[4,I.expandSymbol(a)];case 1:return v=f.sent(),k=[],h=null!==b.centroid?"esriGeometryPolygon":
O.getJsonType(b.geometry),r=J(b.attributes,h,this._spatialReference),n=[],n.push(E.analyzeCIMSymbol(v.data,c,r,k,this._avoidSDF)),[4,H.all(n)];case 2:f.sent();t=[];u=0;for(p=k;u<p.length;u++)m=p[u],e=this._getRasterizedResource(m,b,d,g),null!=e&&t.push({cimLayer:m,rasterizedResource:e});return[2,t]}})})};l.prototype.analyzeCIMSymbol=function(a,b,c,d,g){return G(this,void 0,void 0,function(){var h,k,q,r,n,t,u,p,m;return L(this,function(e){switch(e.label){case 0:return[4,I.expandSymbol(a,g)];case 1:return h=
e.sent(),k=[],q=J(b,d,this._spatialReference),r=[],r.push(E.analyzeCIMSymbol(h.data,c,q,k,this._avoidSDF)),[4,H.all(r)];case 2:e.sent(),H.throwIfAborted(g),n=0,e.label=3;case 3:if(!(n<k.length))return[3,6];t=k[n];if("CIMPictureMarker"!==t.cim.type)return[3,5];u=t.materialHash;return this._pictureMarkerCache.get(u)?[3,5]:[4,N(t.cim.url,{responseType:"image",signal:g.signal})];case 4:p=e.sent(),m=p.data,this._pictureMarkerCache.set(u,m),e.label=5;case 5:return n++,[3,3];case 6:return[2,k]}})})};l.prototype.rasterizeCIMSymbol=
function(a,b,c,d){for(var g=[],h=0;h<a.length;h++){var k=a[h],q=this._getRasterizedResource(k,b,c,d);null!=q&&g.push({cimLayer:k,rasterizedResource:q})}return this.getSymbolImage(g,b,c,d)};l.prototype.getSymbolImage=function(a,b,c,d){for(var g=document.createElement("canvas"),v=g.getContext("2d"),k=0,q=0,r=0,n=0,t=null,u=[],p=0;p<a.length;p++){var m=a[p],e=m.rasterizedResource;if(e){var f=m.cimLayer;if("line"!==f.type&&"fill"!==f.type){var l=e.size,m=h.evaluateValueOrFunction(f.offsetX,b,c,d),A=h.evaluateValueOrFunction(f.offsetY,
b,c,d),m=m?m:0,A=A?A:0,F=f.anchorPoint?{x:f.anchorPoint.x,y:f.anchorPoint.y}:{x:0,y:0},H=f.isAbsoluteAnchorPoint||!1,E=!1,L=f.type,B=void 0,K=void 0;"marker"===f.type&&(B=h.evaluateValueOrFunction(f.rotation,b,c,d),E=f.rotateClockwise?f.rotateClockwise:!1);if("text"===f.type){B=h.evaluateValueOrFunction(f.angle,b,c,d);if(void 0!==f.horizontalAlignment)switch(f.horizontalAlignment){case "left":F.x=.5;break;case "right":F.x=-.5}if(void 0!==f.verticalAlignment)switch(f.verticalAlignment){case "top":F.y=
.5;case "bottom":F.y=-.5}}var f=y.pt2px(m)+l[0]*(F.x-.5),z=-y.pt2px(A)+l[1]*(F.y-.5),C=f+l[0],w=z+l[1];if(B){E&&(B=360-B);var x=Math.sin(B*Math.PI/180),D=Math.cos(B*Math.PI/180),K=f*D+z*x,l=-f*x+z*D,G=f*D+w*x,I=-f*x+w*D,J=C*D+w*x,w=-C*x+w*D,M=C*D+z*x,x=-C*x+z*D,f=Math.min(K,G,J,M),z=Math.min(l,I,w,x),C=Math.max(K,G,J,M),w=Math.max(l,I,w,x),K={minX:f,minY:z,maxX:C,maxY:w}}k=f<k?f:k;q=z<q?z:q;r=C>r?C:r;n=w>n?w:n;f=v.createImageData(e.size[0],e.size[1]);f.data.set(new Uint8ClampedArray(e.image.buffer));
e={offsetX:m,offsetY:A,anchorPoint:F,anchorPointAbsolute:H,rotateClockwise:E,type:L,angle:B,rotatedBBox:K,rasterizedImage:f};u.push(e)}}}g.width=r-k;g.height=n-q;for(p=0;p<u.length;p++)b=a=0,e=u[p],c=this._imageDataToCanvas(e.rasterizedImage),d=e.rasterizedImage.width,m=e.rasterizedImage.height,e.anchorPointAbsolute?(a=y.pt2px(e.offsetX)-k+e.anchorPoint.x,b=-y.pt2px(e.offsetY)-q+e.anchorPoint.y):(a=y.pt2px(e.offsetX)-k+d*(e.anchorPoint.x-.5),b=-y.pt2px(e.offsetY)-q+m*(e.anchorPoint.y-.5)),e.angle?
(A=(360-e.angle)*Math.PI/180,v.translate(-d*(e.anchorPoint.x-.5)+a,-m*(e.anchorPoint.y-.5)+b),v.rotate(A),v.drawImage(c,d*(e.anchorPoint.x-.5),m*(e.anchorPoint.y-.5)),v.rotate(-A),v.translate(-(-d*(e.anchorPoint.x-.5)+a),-(-m*(e.anchorPoint.y-.5)+b))):v.drawImage(c,a,b),t||"text"===e.type||(t=new R.default({x:(-d*(e.anchorPoint.x-.5)+a)/(r-k)-.5,y:(-m*(e.anchorPoint.y-.5)+b)/(n-q)-.5}));return{imageData:v.getImageData(0,0,g.width,g.height),anchorPosition:t}};l.prototype._imageDataToCanvas=function(a){this._imageDataCanvas||
(this._imageDataCanvas=document.createElement("canvas"));var b=this._imageDataCanvas,c=b.getContext("2d");b.width=a.width;b.height=a.height;c.putImageData(a,0,0);return b};l.prototype._imageTo32Array=function(a,b,c){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var d=this._imageDataCanvas,g=d.getContext("2d");d.width=b;d.height=c;g.drawImage(a,0,0,b,c);return new Uint32Array(g.getImageData(0,0,b,c).data.buffer)};l.prototype._getRasterizedResource=function(a,b,c,d){var g;
if("text"===a.type)g=a.cim,a=this._rasterizeTextResource(a,g,b,c,d);else{var l=this._resourceCache,k=void 0;"function"===typeof a.materialHash?(k=a.materialHash,k=k(b,c,d),g=E.analyzeCIMResource(b,a.cim,a.materialOverrides)):(k=a.materialHash,g=a.cim);if(l.has(k))return l.get(k);if("CIMPictureMarker"===a.cim.type){c=h.evaluateValueOrFunction(a.cim.size,b,c,d);a=this._pictureMarkerCache.get(k);if(!a)return null;d=a.height/a.width;b=1<d?y.pt2px(c):y.pt2px(c)/d;c=1<d?y.pt2px(c)*d:y.pt2px(c);a={image:this._imageTo32Array(a,
b,c),size:[b,c],sdf:!1,simplePattern:!1}}else a=this._rasterizer.rasterizeJSONResource(g,this._avoidSDF);l.set(k,a)}return a};l.prototype._rasterizeTextResource=function(a,b,c,d,g){b=h.evaluateValueOrFunction(a.text,c,d,g);if(!b||0===b.length)return null;var l=h.evaluateValueOrFunction(a.fontName,c,d,g),k=h.evaluateValueOrFunction(a.style,c,d,g),q=h.evaluateValueOrFunction(a.weight,c,d,g),r=h.evaluateValueOrFunction(a.decoration,c,d,g),n=h.evaluateValueOrFunction(a.size,c,d,g),t=h.evaluateValueOrFunction(a.horizontalAlignment,
c,d,g),u=h.evaluateValueOrFunction(a.verticalAlignment,c,d,g),p=h.colorToArray(h.evaluateValueOrFunction(a.color,c,d,g)),m=h.colorToArray(h.evaluateValueOrFunction(a.outlineColor,c,d,g));a=h.evaluateValueOrFunction(a.outlineSize,c,d,g);return this._textRasterizer.rasterizeText(b,{color:p,size:n,horizontalAlignment:t,verticalAlignment:u,font:{family:l,style:k,weight:q,decoration:r},halo:{size:a||0,color:m,style:k},pixelRatio:1,premultiplyColors:!this._avoidSDF})};return l}()});