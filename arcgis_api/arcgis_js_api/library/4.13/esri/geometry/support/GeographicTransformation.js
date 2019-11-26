// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","./GeographicTransformationStep"],function(h,k,g){return function(){function d(a){this.steps=[];this._cached_projection={};this._chain="";this._gtlistentry=null;if(a&&a.steps){var b=0;for(a=a.steps;b<a.length;b++){var c=a[b];c instanceof g?this.steps.push(c):this.steps.push(new g({wkid:c.wkid,wkt:c.wkt,isInverse:c.isInverse}))}}}d.cacheKey=function(a,b){return[void 0!==a.wkid&&null!==a.wkid?a.wkid.toString():"-1",void 0!==a.wkt&&null!==a.wkt?a.wkt.toString():"",void 0!==
b.wkid&&null!==b.wkid?b.wkid.toString():"-1",void 0!==b.wkt&&null!==b.wkt?b.wkt.toString():""].join()};d.fromGE=function(a){var b=new d,c="",e=0;for(a=a.steps;e<a.length;e++){var f=g.fromGE(a[e]);b.steps.push(f);c+=f.uid.toString()+","}b._cached_projection={};b._gtlistentry=null;b._chain=c;return b};d.prototype.getInverse=function(){var a=new d;a.steps=[];for(var b=this.steps.length-1;0<=b;b--)a.steps.push(this.steps[b].getInverse());return a};d.prototype.getGTListEntry=function(){for(var a="",b=
0,c=this.steps;b<c.length;b++)a+=c[b].uid.toString()+",";a!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=a);return this._gtlistentry};d.prototype.assignCachedGe=function(a,b,c){this._cached_projection[d.cacheKey(a,b)]=c};d.prototype.getCachedGeTransformation=function(a,b){for(var c="",e=0,f=this.steps;e<f.length;e++)c+=f[e].uid.toString()+",";c!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=c);a=this._cached_projection[d.cacheKey(a,b)];
return void 0===a?null:a};return d}()});