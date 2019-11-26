// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/has ../../../webgl ./GeometryUtils ./Rect ./RectangleBinPack".split(" "),function(u,v,m,r,p,t,q){return function(){function d(a,b,c){void 0===c&&(c=0);this._size=[];this._mosaicsData=[];this._textures=[];this._dirties=[];this._currentPage=this._maxItemSize=0;this._fixSpriteLocationsTable=m("fix-sprite-locations");this._testId=m("test-id");this._pageHeight=this._pageWidth=0;this._mosaicRects=new Map;this._spriteCopyQueue=[];this.pixelRatio=1;(0>=a||0>=b)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!");
this._pageWidth=a;this._pageHeight=b;0<c&&(this._maxItemSize=c);this.pixelRatio=window.devicePixelRatio||1;if(this._fixSpriteLocationsTable){a=[];for(var g in this._fixSpriteLocationsTable[this._testId])b=this._fixSpriteLocationsTable[this._testId][g],a[b.page]=b.pageSize;for(g=0;g<a.length;g++)b=a[g],this._mosaicsData.push(new Uint32Array(b[0]*b[1])),this._dirties.push(!0),this._size.push([b[0],b[1]]),this._textures.push(void 0)}this._binPack=new q(this._pageWidth,this._pageHeight);this._mosaicsData.push(new Uint32Array(Math.floor(this._pageWidth)*
Math.floor(this._pageHeight)));this._dirties.push(!0);this._size.push([this._pageWidth,this._pageHeight]);this._textures.push(void 0)}d.prototype.getWidth=function(a){return a>=this._size.length?-1:this._size[a][0]};d.prototype.getHeight=function(a){return a>=this._size.length?-1:this._size[a][1]};d.prototype.getPage=function(a){return a<this._textures.length?this._textures[a]:null};d.prototype.has=function(a){return this._mosaicRects.has(a)};Object.defineProperty(d.prototype,"itemCount",{get:function(){return this._mosaicRects.size},
enumerable:!0,configurable:!0});d.prototype.getSpriteItem=function(a){return this._mosaicRects.get(a)};d.prototype.addSpriteItem=function(a,b,c,g,d,h){var e;if(this._mosaicRects.has(a))return this._mosaicRects.get(a);var f,k;this._fixSpriteLocationsTable&&this._fixSpriteLocationsTable[this._testId]&&this._fixSpriteLocationsTable[this._testId][a]?(e=this._fixSpriteLocationsTable[this._testId][a],f=e.rect,k=e.page,e=e.pageSize):(e=this._allocateImage(b[0],b[1]),f=e[0],k=e[1],e=e[2]);if(0>=f.width||
0>=f.height)return null;h={rect:f,width:b[0],height:b[1],sdf:d,simplePattern:h,pixelRatio:1,page:k};this._mosaicRects.set(a,h);this._copy({rect:f,spriteSize:b,spriteData:c,page:k,pageSize:e,repeat:g,sdf:d});return h};d.prototype.hasItemsToProcess=function(){return 0!==this._spriteCopyQueue.length};d.prototype.processNextItem=function(){var a=this._spriteCopyQueue.pop();a&&this._copy(a)};d.prototype.getSpriteItems=function(a){for(var b={},c=0;c<a.length;c++){var d=a[c];b[d]=this.getSpriteItem(d)}return b};
d.prototype.getMosaicItemPosition=function(a,b){b=(a=this.getSpriteItem(a))&&a.rect;if(!b)return null;b.width=a.width;b.height=a.height;return{size:[a.width,a.height],tl:[(b.x+1)/this._size[a.page][0],(b.y+1)/this._size[a.page][1]],br:[(b.x+1+a.width)/this._size[a.page][0],(b.y+1+a.height)/this._size[a.page][1]],page:a.page}};d.prototype.bind=function(a,b,c,d){void 0===c&&(c=0);void 0===d&&(d=0);this._textures[c]||(this._textures[c]=new r.Texture(a,{pixelFormat:6408,dataType:5121,width:this._size[c][0],
height:this._size[c][1]},new Uint8Array(this._mosaicsData[c].buffer)));var g=this._textures[c];g.setSamplingMode(b);this._dirties[c]&&(g.setData(new Uint8Array(this._mosaicsData[c].buffer)),g.generateMipmap());a.bindTexture(g,d);this._dirties[c]=!1};d._copyBits=function(a,b,c,d,m,h,e,f,k,n,l){var g=d*b+c;e=f*h+e;if(l)for(e-=h,l=-1;l<=n;l++,g=((l+n)%n+d)*b+c,e+=h)for(f=-1;f<=k;f++)m[e+f]=a[g+(f+k)%k];else for(l=0;l<n;l++){for(f=0;f<k;f++)m[e+f]=a[g+f];g+=b;e+=h}};d.prototype._copy=function(a){if(!(a.page>=
this._mosaicsData.length)){var b=a.spriteData,c=this._mosaicsData[a.page];c&&b||console.error("Source or target images are uninitialized!");d._copyBits(b,a.spriteSize[0],0,0,c,a.pageSize[0],a.rect.x+1,a.rect.y+1,a.spriteSize[0],a.spriteSize[1],a.repeat);this._dirties[a.page]=!0}};d.prototype._allocateImage=function(a,b){a+=2;b+=2;var c=Math.max(a,b);if(this._maxItemSize&&this._maxItemSize<c){var c=Math.pow(2,Math.ceil(p.log2(a))),d=Math.pow(2,Math.ceil(p.log2(b)));a=new t.default(0,0,a,b);this._mosaicsData.push(new Uint32Array(c*
d));this._dirties.push(!0);this._size.push([c,d]);this._textures.push(void 0);return[a,this._mosaicsData.length-1,[c,d]]}c=this._binPack.allocate(a,b);return 0>=c.width?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new q(this._pageWidth,
this._pageHeight),this._allocateImage(a,b)):[c,this._currentPage,[this._pageWidth,this._pageHeight]]};d.prototype.dispose=function(){this._binPack=null;for(var a=0,b=this._textures;a<b.length;a++){var c=b[a];c&&c.dispose()}this._textures.length=0;this._mosaicsData.length=0;this._mosaicRects.clear()};return d}()});