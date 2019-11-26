// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/Error ../../core/promiseUtils ../../core/requireUtils ../../core/workers ./PixelBlock module".split(" "),function(l,r,f,g,h,m,n,p,k,q){return function(){function e(){this._workerThread=null;this._destroyed=!1}e.prototype.initialize=function(){return g(this,void 0,void 0,function(){var a;return f(this,function(c){switch(c.label){case 0:return[4,p.open(n.getAbsMid("./RasterWorker",l,q))];case 1:return a=
c.sent(),this._destroyed?a.close():this._workerThread=a,[2]}})})};e.prototype.destroy=function(){this._destroyed=!0;this._workerThread&&(this._workerThread.close(),this._workerThread=null)};e.prototype.decode=function(a,c){return g(this,void 0,void 0,function(){var b;return f(this,function(d){switch(d.label){case 0:if(!this._workerThread)throw new h("raster-jobhandler:no-connection","no available worker connection");return[4,this._workerThread.invoke("decode",a,c)];case 1:return b=d.sent(),[2,b?new k(b):
null]}})})};e.prototype.symbolize=function(a,c){return g(this,void 0,void 0,function(){var b;return f(this,function(d){switch(d.label){case 0:if(!this._workerThread)throw new h("raster-jobhandler:no-connection","no available worker connection");return[4,this._workerThread.invoke("symbolize",a.toJSON(),c)];case 1:return b=d.sent(),[2,b?new k(b):null]}})})};e.prototype.updateSymbolizer=function(a,c){return g(this,void 0,void 0,function(){var b;return f(this,function(d){switch(d.label){case 0:if(!this._workerThread)throw new h("raster-jobhandler:no-connection",
"no available worker connection");b=a&&a.renderer&&"raster-stretch"===a.renderer.type&&a.renderer.histograms;return[4,m.all(this._workerThread.broadcast("updateSymbolizer",{symbolizerJSON:a.toJSON(),histograms:b},c))];case 1:return d.sent(),[2]}})})};return e}()});