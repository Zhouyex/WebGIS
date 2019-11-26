// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/assignHelper ../../../core/promiseUtils ../../../core/promiseUtils ../../../geometry/support/aaBoundingRect ../engine".split(" "),function(f,h,m,n,p,k,l,q,r,d){Object.defineProperty(h,"__esModule",{value:!0});f=function(e){function b(a,c){a=e.call(this,a,c)||this;a._rendererInfo=new d.WGLRendererInfo;a.attributeView=new d.AttributeStoreView;
return a}p(b,e);b.prototype.destroy=function(){this.removeAllChildren();this.children.forEach(function(a){return a.destroy()});this.attributeView.destroy()};b.prototype.whenAttached=function(){var a=this;return this.attached?l.resolve():l.create(function(c){return a.once("attached",function(){return c()})})};b.prototype.setRendererInfo=function(a,c,b){this._rendererInfo.setInfo(a,c,b);this.requestRender()};b.prototype.getMaterialItems=function(a,c){return n(this,void 0,void 0,function(){var b,d,e,
f;return m(this,function(g){switch(g.label){case 0:return a&&0!==a.length?[4,this.whenAttached()]:[2,null];case 1:return g.sent(),b=this.stage.painter.textureManager,d=a.map(function(a){return b.rasterizeItem(a.symbol,a.glyphIds,c)}),[4,q.all(d)];case 2:return e=g.sent(),f=e.map(function(b,c){return{id:a[c].id,mosaicItem:b}}),[2,f]}})})};b.prototype.onTileData=function(a,b){if(!(b.addOrUpdate&&"tileDisplayData"in b.addOrUpdate)){var c=b.addOrUpdate&&d.TileData.decode(b.addOrUpdate);b=k({},b,{addOrUpdate:c})}a.setData(b,
this.hasLabels,this.labelsVisible);this.contains(a)||this.addChild(a);this.requestRender()};b.prototype.onTileError=function(a){a.clear();this.contains(a)||this.addChild(a)};b.prototype.renderChildren=function(a){this._rendererInfo.update(a.state);this.attributeView.bindTextures(this.stage.context);e.prototype.renderChildren.call(this,a)};b.prototype.createTile=function(a){var b=this._tileInfoView.getTileBounds(r.create(),a);return new d.WGLTile(a,b)};b.prototype.destroyTile=function(a){this.removeChild(a);
a.destroy()};b.prototype.attach=function(){this._initializeExtensions();return e.prototype.attach.call(this)};b.prototype.createRenderParams=function(a){return k({},e.prototype.createRenderParams.call(this,a),{rendererInfo:this._rendererInfo,attributeView:this.attributeView})};b.prototype._initializeExtensions=function(){var a=this.stage.context.capabilities;a.textureFloat;a.vao};return b}(d.TileContainer);h.FeatureContainer=f});