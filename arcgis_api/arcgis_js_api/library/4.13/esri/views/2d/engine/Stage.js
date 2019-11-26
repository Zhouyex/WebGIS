// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/assignHelper ../../../core/Error ../../../core/events ../../../core/has ../../../core/promiseUtils ../../../core/scheduling ../../../core/watchUtils ../../../core/libs/gl-matrix-2/common ../../../core/libs/gl-matrix-2/mat2d ../../../core/libs/gl-matrix-2/mat2df64 ../../../core/libs/gl-matrix-2/vec2 ../../../core/libs/gl-matrix-2/vec2f64 ../../webgl ./Container ./webgl/BitBlitRenderer ./webgl/definitions ./webgl/enums ./webgl/Painter ./webgl/Profiler ./webgl/WebGLDriverTest ./webgl/shaders/StencilPrograms ../support/Timeline ../../support/screenshotUtils".split(" "),
function(w,x,A,R,B,C,D,E,F,G,H,v,I,m,q,n,J,K,L,y,M,N,O,z,P,p){Object.defineProperty(x,"__esModule",{value:!0});w=function(r){function g(a,c){var b=r.call(this)||this;b._renderParameters={drawPhase:0,state:b.state,pixelRatio:window.devicePixelRatio,stationary:!1,globalOpacity:1};b._clipData=new Float32Array(8);b._upperLeft=q.vec2f64.create();b._upperRight=q.vec2f64.create();b._lowerLeft=q.vec2f64.create();b._lowerRight=q.vec2f64.create();b._mat2=I.mat2df64.create();b._clipRendererInitialized=!1;b._supersampleScreenshots=
!0;b.stage=b;b._stationary=!0;b.attached=!0;var d=c.canvas,d=void 0===d?document.createElement("canvas"):d,e=c.alpha,f=c.stencil,g=c.renderContext,k=c.supersampleScreenshots,k=void 0===k?!0:k,h=c.contextOptions,h=void 0===h?{}:h;b._canvas=d;e=n.createContextOrErrorHTML(d,{alpha:void 0===e?!0:e,antialias:!1,depth:!0,stencil:void 0===f?!0:f},void 0===g?"webgl":g);b.context=new n.RenderingContext(e,h);b.painter=new M.default(b.context);b._taskHandle=F.addFrameTask({render:function(){return b.renderFrame()}});
b._taskHandle.pause();b._supersampleScreenshots=k;b._lostWebGLContextHandle=C.on(d,"webglcontextlost",function(){b.emit("webgl-error",{error:new B("webgl-context-lost")})});D("esri-2d-profiler")&&(b._debugOutput=document.createElement("div"),b._debugOutput.setAttribute("style","margin: 24px 64px; position: absolute; color: red;"),a.appendChild(b._debugOutput));d.setAttribute("style","width: 100%; height:100%; display:block;");b.profiler=new N.Profiler(b.context,b._debugOutput);b.renderingOptions=
c.renderingOptions;b.timeline=c.timeline||new P.Timeline;b.driverTestResult=O.testWebGLDriver(b.context);a.appendChild(d);return b}A(g,r);g.prototype.destroy=function(){this.removeAllChildren();this.renderFrame();this._taskHandle.remove();this._boundFBO=this._taskHandle=null;this._clipFBO&&(this._clipFBO.dispose(),this._clipFBO=null);this._blitRenderer&&(this._blitRenderer.dispose(),this._blitRenderer=null);this._clipVAO&&(this._clipVAO.dispose(),this._clipVBO=this._clipVAO=null);this._clipStencilProgram&&
(this._clipStencilProgram.dispose(),this._clipStencilProgram=null);this._lostWebGLContextHandle&&(this._lostWebGLContextHandle.remove(),this._lostWebGLContextHandle=null);this.painter.dispose();this.context.dispose();this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas);this._debugOutput&&this._debugOutput.parentNode&&this._debugOutput.parentNode.removeChild(this._debugOutput);this._canvas=null};Object.defineProperty(g.prototype,"background",{get:function(){return this._background},
set:function(a){this._background=a;this.requestRender()},enumerable:!0,configurable:!0});Object.defineProperty(g.prototype,"highlightOptions",{get:function(){return this._highlightOptions},set:function(a){var c=this;this._highlightOptionsHandle&&(this._highlightOptionsHandle.remove(),this._highlightOptionsHandle=null);if(this._highlightOptions=a)this._highlightOptionsHandle=G.init(this._highlightOptions,"version",function(){c.painter.setHighlightOptions(a);c.requestRender()})},enumerable:!0,configurable:!0});
Object.defineProperty(g.prototype,"renderingOptions",{get:function(){return this._renderingOptions},set:function(a){this._renderingOptions=a;this.requestRender()},enumerable:!0,configurable:!0});Object.defineProperty(g.prototype,"state",{get:function(){return this._state},set:function(a){this._state=a;this.requestRender()},enumerable:!0,configurable:!0});Object.defineProperty(g.prototype,"stationary",{get:function(){return this._stationary},set:function(a){this._stationary!==a&&(this._stationary=
a,this.requestRender())},enumerable:!0,configurable:!0});g.prototype.requestRender=function(){this._lastRenderRequestTime=Date.now();this._taskHandle&&this._taskHandle.resume()};g.prototype.renderFrame=function(){var a=Date.now()-this._lastRenderRequestTime;this._renderParameters.state=this._state;this._renderParameters.stationary=this.stationary;this._renderParameters.pixelRatio=window.devicePixelRatio;this._renderParameters.globalOpacity=1;this.processRender(this._renderParameters);a>=L.MAX_ANIMATION_TIME_MS&&
this._taskHandle.pause()};g.prototype.renderChildren=function(a){var c=this.context,b=this.children,b=a.children?a.children:b;this.profiler.recordStart("drawLayers");this.beforeRenderChildren(a);a.drawPhase=y.WGLDrawPhase.MAP;this.painter.beforeRenderLayers(c);for(var d=0;d<b.length;d++){var e=b[d];e.attached&&e.processRender(a)}this.painter.renderLayers(c);a.drawPhase=y.WGLDrawPhase.LABEL;this.painter.beforeRenderLayers(c);for(d=0;d<b.length;d++)e=b[d],e.attached&&e.processRender(a);this.painter.renderLayers(c);
this.profiler.recordEnd("drawLayers");this.afterRenderChildren()};g.prototype.beforeRenderChildren=function(a){var c=this.context,b=a.state,d=a.pixelRatio;if(this.painter){c.enforceState();var e=b.size;a=b.rotation;var f=Math.round(e[0]*d),e=Math.round(e[1]*d);this._boundFBO=c.getBoundFramebufferObject();if(b.spatialReference&&(b.spatialReference._isWrappable?b.spatialReference._isWrappable():b.spatialReference.isWrappable)){var g=H.common.toRadian(a),k=Math.abs(Math.cos(g)),h=Math.abs(Math.sin(g)),
l=Math.round(b.worldScreenWidth);if(Math.round(f*k+e*h)<=l)this._clipFrame=!1;else{this._clipFBO&&this._clipFBO.width===f&&this._clipFBO.height===e||(this._clipFBO=new n.FramebufferObject(c,{colorTarget:0,depthStencilTarget:3,width:f,height:e}));var p=(this.state.padding.left-this.state.padding.right)/2,Q=(this.state.padding.bottom-this.state.padding.top)/2,q=.5*f,r=.5*e,b=1/f,t=1/e,d=.5*l*d,u=.5*(f*h+e*k),f=this._upperLeft,k=this._upperRight,h=this._lowerLeft,l=this._lowerRight;m.vec2.set(f,-d,-u);
m.vec2.set(k,d,-u);m.vec2.set(h,-d,u);m.vec2.set(l,d,u);v.mat2d.identity(this._mat2);v.mat2d.translate(this._mat2,this._mat2,[q+p,r+Q]);0!==a&&v.mat2d.rotate(this._mat2,this._mat2,g);m.vec2.transformMat2d(f,f,this._mat2);m.vec2.transformMat2d(k,k,this._mat2);m.vec2.transformMat2d(h,h,this._mat2);m.vec2.transformMat2d(l,l,this._mat2);a=this._clipData;a.set([2*h[0]*b-1,2*(e-h[1])*t-1,2*l[0]*b-1,2*(e-l[1])*t-1,2*f[0]*b-1,2*(e-f[1])*t-1,2*k[0]*b-1,2*(e-k[1])*t-1]);this._clipRendererInitialized||this._initializeClipRenderer(c);
this._clipVBO.setData(a);this._boundFBO=c.getBoundFramebufferObject();c.bindFramebuffer(this._clipFBO);c.setDepthWriteEnabled(!0);c.setStencilWriteMask(255);c.setClearColor(0,0,0,0);c.setClearDepth(1);c.setClearStencil(0);c.clear(c.gl.COLOR_BUFFER_BIT|c.gl.DEPTH_BUFFER_BIT|c.gl.STENCIL_BUFFER_BIT);c.setDepthWriteEnabled(!1);this._clipFrame=!0}}else this._clipFrame=!1}};g.prototype.afterRenderChildren=function(){var a=this.context;a.logIno();this._clipFrame&&this._clipRendererInitialized&&(a.bindFramebuffer(this._boundFBO),
this._boundFBO=null,a.bindVAO(this._clipVAO),a.bindProgram(this._clipStencilProgram),a.setDepthWriteEnabled(!1),a.setDepthTestEnabled(!1),a.setStencilTestEnabled(!0),a.setBlendingEnabled(!1),a.setColorMask(!1,!1,!1,!1),a.setStencilOp(7680,7680,7681),a.setStencilWriteMask(255),a.setStencilFunction(519,1,255),a.drawElements(4,6,5123,0),a.bindVAO(),a.setColorMask(!0,!0,!0,!0),a.setBlendingEnabled(!0),a.setStencilFunction(514,1,255),this._blitRenderer.render(a,this._clipFBO.colorTexture,9728,1),a.setStencilTestEnabled(!1))};
g.prototype.doRender=function(a){var c=this.context,b=a.state,d=a.pixelRatio;this._resizeCanvas(a);this.context.enforceState();c.setViewport(0,0,d*b.size[0],d*b.size[1]);c.setDepthWriteEnabled(!0);c.setStencilWriteMask(255);this.background&&this.background.color?(b=this.background.color,c.setClearColor(b.r/255,b.g/255,b.b/255,b.a)):c.setClearColor(0,0,0,0);c.setClearDepth(1);c.setClearStencil(0);c.clear(c.gl.COLOR_BUFFER_BIT|c.gl.DEPTH_BUFFER_BIT|c.gl.STENCIL_BUFFER_BIT);c.setDepthWriteEnabled(!1);
r.prototype.doRender.call(this,a)};g.prototype.takeScreenshot=function(a,c){var b=p.screenshotSuperSampleSettings(a,this._supersampleScreenshots),d=b.framebufferWidth,e=b.framebufferHeight,f=this.context,g=a.layers,k={drawPhase:null,globalOpacity:1,stationary:!0,state:this._renderParameters.state.clone(),pixelRatio:b.pixelRatio};if(null!=a.rotation){var h=k.state.viewpoint;h.rotation=a.rotation;k.state.viewpoint=h}0<g.length&&(k.children=[],g.forEach(function(a){var b=c.find(function(b){return b.layer.id===
a.id});b&&b.container&&b.attached&&k.children.push(b.container)}));var l=n.FramebufferObject.create(f,{colorTarget:0,depthStencilTarget:3,width:d,height:e}),g=f.getBoundFramebufferObject(),h=f.getViewport();f.bindFramebuffer(l);f.setViewport(0,0,d,e);d=f.gl;!a.ignoreBackground&&this.background&&this.background.color?(e=this.background.color,f.setClearColor(e.r/255,e.g/255,e.b/255,e.a)):f.setClearColor(0,0,0,0);f.setClearDepth(1);f.setClearStencil(0);f.clear(d.COLOR_BUFFER_BIT|d.DEPTH_BUFFER_BIT|d.STENCIL_BUFFER_BIT);
this.renderChildren(k);b=this._readbackScreenshot(b);f.bindFramebuffer(g);f.setViewport(h.x,h.y,h.width,h.height);this.requestRender();f=this._ensureScreenshotEncodeCanvas();a=p.encodeResult(b,a,f,{flipY:!0,premultipliedAlpha:!0});return E.resolve(a)};g.prototype._ensureScreenshotEncodeCanvas=function(){this._screenshotEncodeCanvas||(this._screenshotEncodeCanvas=document.createElement("canvas"));return this._screenshotEncodeCanvas};g.prototype._readbackScreenshot=function(a){var c=a.framebufferWidth,
b=a.framebufferHeight,d=a.region;a=a.resample;var e=this.context.gl;if(a){var f=p.createEmptyImageData(c,b,this._ensureScreenshotEncodeCanvas());e.readPixels(0,0,c,b,6408,5121,new Uint8Array(f.data.buffer));c=p.createEmptyImageData(d.width,d.height,this._ensureScreenshotEncodeCanvas());return p.resampleHermite(f,c,!0,a.region.x,b-(a.region.y+a.region.height),a.region.width,a.region.height)}f=p.createEmptyImageData(d.width,d.height,this._ensureScreenshotEncodeCanvas());e.readPixels(d.x,b-(d.y+d.height),
d.width,d.height,6408,5121,new Uint8Array(f.data.buffer));return f};g.prototype._resizeCanvas=function(a){var c=this._canvas,b=c.style,d=a.state.size,e=a.pixelRatio;a=d[0];var d=d[1],f=Math.round(a*e),e=Math.round(d*e);if(c.width!==f||c.height!==e)c.width=f,c.height=e;b.width=a+"px";b.height=d+"px"};g.prototype._initializeClipRenderer=function(a){if(this._clipRendererInitialized)return!0;this._blitRenderer=new K.BitBlitRenderer;var c=z.stencil.attributes,b=n.createProgram(a,z.stencil);if(!b)return!1;
var d=n.BufferObject.createVertex(a,35040,32),e=new Uint16Array([0,1,2,2,1,3]),e=n.BufferObject.createIndex(a,35044,e);a=new n.VertexArrayObject(a,c,{geometry:[{name:"a_pos",count:2,type:5126,offset:0,stride:8,normalized:!1,divisor:0}]},{geometry:d},e);this._clipStencilProgram=b;this._clipVBO=d;this._clipVAO=a;return this._clipRendererInitialized=!0};return g}(J.Container);x.Stage=w});