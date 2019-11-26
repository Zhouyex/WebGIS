// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../webgl ../../engine ./BitBlitRenderer ./enums ./MaterialManager ./TextureManager ./effects/AnimationEffect ./effects/HighlightEffect ./effects/HittestEffect ./painter/RenderPass".split(" "),function(e,k,u,f,g,l,h,m,n,p,q,r,t){Object.defineProperty(k,"__esModule",{value:!0});e=function(){return function(){}}();k.PainterOptions=e;e=function(){function c(a){this.context=a;this._blitRenderer=new l.BitBlitRenderer;this._brushCache=
new Map;this.textureManager=new n;this.effects={highlight:new q.default,hittest:new r.HittestEffect,integrate:new p.AnimationEffect};this.materialManager=new m(a)}c.prototype.getFbos=function(a,b,c){if(b!==this._lastWidth||c!==this._lastHeight){this._lastWidth=b;this._lastHeight=c;if(this._fbos)for(var d in this._fbos)this._fbos[d].dispose();a={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:b,height:c};d={colorTarget:0,depthStencilTarget:3};b=new f.Renderbuffer(this.context,
{width:b,height:c,internalFormat:34041});this._fbos={output:f.FramebufferObject.createWithAttachments(this.context,a,d,b),alpha:f.FramebufferObject.createWithAttachments(this.context,a,d,b),effect0:f.FramebufferObject.createWithAttachments(this.context,a,d,b)}}return this._fbos};c.prototype.beforeRenderLayers=function(a){var b=a.getViewport(),b=this.getFbos(a,b.width,b.height);this._prevFBO=a.getBoundFramebufferObject();a.bindFramebuffer(b.output);a.setClearColor(0,0,0,0);a.clear(a.gl.COLOR_BUFFER_BIT)};
c.prototype.beforeRenderLayer=function(a,b,c){1!==c?(a.bindFramebuffer(this._fbos.alpha),a.setClearColor(0,0,0,0),a.clear(a.gl.COLOR_BUFFER_BIT)):a.bindFramebuffer(this._fbos.output);a.setDepthWriteEnabled(!1);a.setDepthTestEnabled(!1);a.setStencilTestEnabled(!0);a.setClearStencil(b);a.setStencilWriteMask(255);a.clear(a.gl.STENCIL_BUFFER_BIT)};c.prototype.compositeLayer=function(a,b){1!==b&&(a.bindFramebuffer(this._fbos.output),a.setStencilTestEnabled(!1),a.setStencilWriteMask(0),a.setBlendingEnabled(!0),
a.setBlendFunctionSeparate(1,771,1,771),a.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(a,this._fbos.alpha.colorTexture,9728,b))};c.prototype.renderLayers=function(a){a.bindFramebuffer(this._prevFBO);this._fbos&&(a.setStencilTestEnabled(!1),a.setStencilWriteMask(0),a.setBlendingEnabled(!0),a.setBlendFunctionSeparate(1,771,1,771),a.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(a,this._fbos.output.colorTexture,9728,1))};c.prototype.dispose=function(){this.materialManager.dispose();this.textureManager.dispose();
this.effects.highlight.dispose();this._blitRenderer&&(this._blitRenderer.dispose(),this._blitRenderer=null)};c.prototype.getGeometryBrush=function(a){var b;a=(b={},b[h.WGLGeometryType.FILL]=g.brushes.Fill,b[h.WGLGeometryType.LINE]=g.brushes.Line,b[h.WGLGeometryType.MARKER]=g.brushes.Marker,b[h.WGLGeometryType.TEXT]=g.brushes.Text,b)[a];this._brushCache.has(a)||this._brushCache.set(a,new a);return this._brushCache.get(a)};c.prototype.registerRenderPass=function(a){var b=this,c=a.brushes.map(function(a){b._brushCache.has(a)||
b._brushCache.set(a,new a);return b._brushCache.get(a)});return new t.default(c,a)};c.prototype.setHighlightOptions=function(a){this.effects.highlight.setHighlightOptions(a)};return c}();k.default=e});