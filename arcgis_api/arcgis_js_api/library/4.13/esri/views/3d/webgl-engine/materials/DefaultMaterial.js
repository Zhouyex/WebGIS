// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/assignHelper ../../../../core/has ../../../../core/libs/gl-matrix-2/mat3f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../support/buffer/InterleavedLayout ../lib/GLMaterialTexture ../lib/Material ../lib/Util ./internal/bufferWriterUtils ./internal/MaterialUtil ./internal/MaterialUtil ./renderers/InstancedRenderer ./renderers/MergedRenderer ../shaders/DefaultPrograms ../../../webgl/renderState".split(" "),
function(p,T,n,C,q,D,h,l,z,k,E,F,G,r,f,H,I,t,g){function u(e,a){var b=a.vvSizeEnabled;a.vvSizeEnabled?(e.setUniform3fv("vvSizeMinSize",a.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",a.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",a.vvSizeOffset),e.setUniform3fv("vvSizeFactor",a.vvSizeFactor)):b&&e.setUniform3fv("vvSizeValue",a.vvSizeValue);b&&(e.setUniform3fv("vvSymbolAnchor",a.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",a.vvSymbolRotationMatrix));a.vvColorEnabled&&(e.setUniform1fv("vvColorValues",
a.vvColorValues),e.setUniform4fv("vvColorColors",a.vvColorColors))}var w=F.assert;p=function(e){function a(b,c){c=e.call(this,c)||this;c.supportsEdges=!0;c.params=f.copyParameters(b,J);c.vertexBufferLayout=a.getVertexBufferLayout(c.params);c.instanceBufferLayout=b.instanced?a.getInstanceBufferLayout(c.params):null;return c}n(a,e);a.prototype.isVisibleInPass=function(b){return 3===b?this.params.castShadows:!0};a.prototype.isVisible=function(){var b=this.params;if(!e.prototype.isVisible.call(this)||
0===b.layerOpacity)return!1;var c=b.instanced,a=b.vertexColors,d=b.symbolColors,c=!!c&&-1<c.indexOf("color"),f=b.vvColorEnabled,g="replace"===b.colorMixMode,h=0<b.opacity,b=b.externalColor&&0<b.externalColor[3];return a&&(c||f||d)?g?!0:h:a?g?b:h:c||f||d?g?!0:h:g?b:h};a.prototype.setParameterValues=function(b){var c=this.params,a;for(a in b)"instanced"===a&&w(b.instanced===c.instanced,"Can not change instanced attributes"),"textureId"===a&&w(c.textureId,"Can only change texture of material that already has a texture"),
"vertexColors"===a&&!0===b[a]&&b[a]!==c[a]&&w(c.vertexColors,"Can not enable vertex colors after DefaultMaterial creation"),c[a]=b[a];this.notifyDirty("matChanged")};a.prototype.getParameters=function(){return this.params};a.prototype.intersect=function(b,c,a,d,e,g,l,k){if(null!==this.params.verticalOffset){k=d.camera;h.vec3.set(x,a[12],a[13],a[14]);var m=h.vec3.subtract(K,x,k.eye);a=h.vec3.length(m);var n=h.vec3.scale(m,m,1/a),p=null,m=null;switch(d.viewingMode){case "global":m=h.vec3.normalize(A,
x);break;case "local":m=h.vec3.copy(A,L)}this.params.screenSizePerspective&&(p=h.vec3.dot(m,n));k=f.verticalOffsetAtDistance(k,a,this.params.verticalOffset,p,this.params.screenSizePerspective);h.vec3.scale(m,m,k);h.vec3.transformMat3(y,m,d.transform.inverseRotation);e=h.vec3.subtract(M,e,y);g=h.vec3.subtract(N,g,y)}f.intersectTriangleGeometry(b,c,d,e,g,l)};a.prototype.getGLMaterials=function(){return{color:O,depthShadowMap:P,normal:Q,depth:B,highlight:R}};a.prototype.createRenderer=function(b,c){return this.params.softwareInstanced?
new H(b,c,this):new I(b,c,this)};a.prototype.createBufferWriter=function(){return new S(this.vertexBufferLayout,this.instanceBufferLayout)};a.getVertexBufferLayout=function(b){var c=b.textureId||b.normalTextureId||b.metallicRoughnessTextureId||b.emissiveTextureId||b.occlusionTextureId,a=z.newLayout().vec3f("position").vec3f("normal");b.vertexTangents&&a.vec4f("aTangent");c&&a.vec2f("uv0");b.vertexColors&&a.vec4u8("color");b.symbolColors&&a.vec4u8("symbolColor");return a};a.getInstanceBufferLayout=
function(b){var c=z.newLayout(),c=b.instancedDoublePrecision?c.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):c.mat4f("model").mat4f("modelNormal");b.instanced&&-1<b.instanced.indexOf("color")&&(c=c.vec4f("instanceColor"));b.instanced&&-1<b.instanced.indexOf("featureAttribute")&&(c=c.vec4f("instanceFeatureAttribute"));return c};return a}(E.Material);var O=function(e){function a(b){var c=this,a=b.material.getParameters(),c=e.call(this,k.makeCtorParameters(b,a))||
this;c.params=f.copyParameters(a);b=c.params;c.slot=b.transparent?b.writeDepth?7:10:5;b=b.instanced;c.instanced=!!b;c.instancedColor=!!b&&-1<b.indexOf("color");c._createPrograms();c.selectPipeline();return c}n(a,e);a.prototype._createPrograms=function(){var b=this;this.programs=r.BindParametersMap.create(this.params,function(c){return b._createProgram(c)})};a.prototype._createProgram=function(b){var c=this.params;return this.programRep.getProgram(t.colorPass,{treeRendering:!!c.treeRendering,normalTexture:!!c.normalTextureId,
colorTexture:!!c.textureId,tangents:c.vertexTangents?"vertex":"none",vertexColors:c.vertexColors,symbolColors:c.symbolColors,flipV:c.flipV,doubleSided:c.doubleSided&&"normal"===c.doubleSidedType,windowOrderDoubleSided:c.doubleSided&&"winding-order"===c.doubleSidedType,instanced:!!this.instanced,instancedDoublePrecision:c.instancedDoublePrecision,instancedColor:this.instancedColor,receiveShadows:b.receiveShadows,receiveSSAO:b.receiveSSAO,vvSize:c.vvSizeEnabled,vvColor:c.vvColorEnabled,verticalOffset:null!==
c.verticalOffset,screenSizePerspective:null!==c.screenSizePerspective,slice:c.slicePlaneEnabled,sliceHighlightDisabled:c.sliceHighlightDisabled,normals:c.normals,textureAlphaMode:c.textureAlphaMode,textureAlphaPremultiplied:!!c.textureAlphaPremultiplied,requiresFloatOperationsFix:!!q("ios"),roughnessMetallnessTexture:!!c.metallicRoughnessTextureId,emissionTexture:!!c.emissiveTextureId,occlusionTexture:!!c.occlusionTextureId,usePBR:c.usePBR,offsetBackfaces:!(!c.transparent||!c.offsetTransparentBackfaces)})};
a.prototype.selectPipeline=function(){var b=this.params;this.pipelineState=g.makePipelineState({blending:b.transparent&&g.separateBlendingParams(770,1,771,771),culling:v(b),depthTest:{func:513},depthWrite:b.writeDepth&&g.defaultDepthWriteParams,colorWrite:g.defaultColorWriteParams})};a.prototype.beginSlot=function(b){return b===this.slot};a.prototype.getProgram=function(){return this.program||this.getPrograms()[0]};a.prototype.getPrograms=function(){return r.BindParametersMap.programs(this.programs)};
a.prototype.updateParameters=function(){this.params=f.copyParameters(this.material.getParameters());this.slot=this.params.transparent?this.params.writeDepth?7:10:5;this.updateTexture(this.params.textureId);this._createPrograms();this.selectPipeline()};a.prototype.bind=function(b,c){var a=this.params,d=this.program=r.BindParametersMap.lookup(this.programs,c);b.bindProgram(d);b.setPipelineState(this.pipelineState);d.setUniform3fv("ambient",a.ambient);d.setUniform3fv("diffuse",a.diffuse);d.setUniform3fv("specular",
a.specular);d.setUniform4fv("externalColor",a.externalColor);d.setUniform1i("colorMixMode",f.colorMixModes[a.colorMixMode]);a.usePBR&&(d.setUniform1f("metalnessFactor",a.metallicFactor),d.setUniform1f("roughnessFactor",a.roughnessFactor),d.setUniform3fv("emissionFactor",a.emissiveFactor),d.setUniform1f("reflectanceFactor",a.reflectanceFactor));d.setUniform1f("opacity",a.opacity);d.setUniform1f("layerOpacity",a.layerOpacity);f.bindVerticalOffset(a.verticalOffset,c,d);f.bindScreenSizePerspective(a.screenSizePerspective,
d);u(d,a);this.bindTexture(b,d);"mask"!==a.textureAlphaMode&&"maskBlend"!==a.textureAlphaMode||d.setUniform1f("textureAlphaCutoff",a.textureAlphaCutoff)};a.prototype.release=function(b,c){};a.prototype.bindView=function(b,c){b=this.program=r.BindParametersMap.lookup(this.programs,c);var a=this.params,d=a.instancedDoublePrecision?l.vec3f64.fromValues(c.viewInvTransp[3],c.viewInvTransp[7],c.viewInvTransp[11]):c.origin;f.bindView(d,c.view,b);f.bindCamPos(d,c.viewInvTransp,b);a.instancedDoublePrecision&&
f.bindViewOriginDouble(d,b);a.slicePlaneEnabled&&f.bindSlicePlane(d,c.slicePlane,b);c.shadowMappingEnabled&&c.shadowMap.bindView(b,d)};a.prototype.bindInstance=function(b,c){b=this.program;b.setUniformMatrix4fv("model",c.transformation);b.setUniformMatrix4fv("modelNormal",c.transformationNormal)};a.prototype.getDrawMode=function(){return 4};return a}(k),B=function(e){function a(b){var c=this,c=e.call(this,k.makeCtorParameters(b,b.material.getParameters()))||this;c.biased=!!b.biased;c.updateParameters();
return c}n(a,e);a.prototype.beginSlot=function(b){return b===this.slot};a.prototype.getProgram=function(){return this.program};a.prototype.selectProgram=function(){var b=this.params;this.program=this.programRep.getProgram(t.depthPass,{normalTexture:!!b.normalTextureId,colorTexture:!!b.textureId,tangents:b.vertexTangents?"vertex":"none",flipV:b.flipV,instanced:!!b.instanced,instancedDoublePrecision:b.instancedDoublePrecision,shadowMap:this.biased,vvSize:b.vvSizeEnabled,verticalOffset:null!==b.verticalOffset,
screenSizePerspective:null!==b.screenSizePerspective,slice:b.slicePlaneEnabled,textureAlphaMode:b.textureAlphaMode,normals:b.normals,requiresFloatOperationsFix:!!q("ios")});this.pipelineState=g.makePipelineState({culling:v(b),depthTest:{func:513},depthWrite:b.writeDepth&&g.defaultDepthWriteParams,colorWrite:g.defaultColorWriteParams})};a.prototype.selectSlot=function(){this.slot=this.params.transparent?this.params.writeDepth?7:10:5};a.prototype.updateParameters=function(){this.params=f.copyParameters(this.material.getParameters());
this.selectProgram();this.selectSlot();this.updateTexture(this.params.textureId)};a.prototype.bind=function(b,c){var a=this.program,d=this.params;b.bindProgram(a);b.setPipelineState(this.pipelineState);a.setUniform2fv("nearFar",c.nearFar);f.bindVerticalOffset(d.verticalOffset,c,a);f.bindScreenSizePerspective(d.screenSizePerspective,a);u(a,d);"mask"!==d.textureAlphaMode&&"maskBlend"!==d.textureAlphaMode||a.setUniform1f("textureAlphaCutoff",d.textureAlphaCutoff);this.bindTexture(b,a)};a.prototype.release=
function(b){};a.prototype.bindView=function(b,a){b=this.program;var c=this.params,d=c.instancedDoublePrecision?l.vec3f64.fromValues(a.viewInvTransp[3],a.viewInvTransp[7],a.viewInvTransp[11]):a.origin;f.bindView(d,a.view,b);c.slicePlaneEnabled&&f.bindSlicePlane(d,a.slicePlane,b);c.screenSizePerspective&&f.bindCamPos(d,a.viewInvTransp,b);c.instancedDoublePrecision&&f.bindViewOriginDouble(d,b)};a.prototype.bindInstance=function(b,a){this.program.setUniformMatrix4fv("model",a.transformation)};a.prototype.getDrawMode=
function(){return 4};return a}(k),P=function(e){function a(b){return e.call(this,C({},b,{biased:!0}))||this}n(a,e);return a}(B),Q=function(e){function a(b){var a=this,m=b.material.getParameters(),a=e.call(this,k.makeCtorParameters(b,m))||this;a.params=f.copyParameters(m);a.selectProgram();a.selectSlot();return a}n(a,e);a.prototype.beginSlot=function(b){return b===this.slot};a.prototype.getProgram=function(){return this.program};a.prototype.selectProgram=function(){var b=this.params;this.program=this.programRep.getProgram(t.normalPass,
{normalTexture:!!b.normalTextureId,colorTexture:!!b.textureId,tangents:b.vertexTangents?"vertex":"none",flipV:b.flipV,instanced:!!b.instanced,instancedDoublePrecision:b.instancedDoublePrecision,vvSize:b.vvSizeEnabled,verticalOffset:null!==b.verticalOffset,screenSizePerspective:null!==b.screenSizePerspective,slice:b.slicePlaneEnabled,textureAlphaMode:b.textureAlphaMode,normals:b.normals,requiresFloatOperationsFix:!!q("ios")});this.pipelineState=g.makePipelineState({culling:v(b),depthTest:{func:513},
depthWrite:b.writeDepth&&g.defaultDepthWriteParams,colorWrite:g.defaultColorWriteParams})};a.prototype.selectSlot=function(){this.slot=this.params.transparent?this.params.writeDepth?7:10:5};a.prototype.updateParameters=function(){this.params=f.copyParameters(this.material.getParameters());this.selectProgram();this.selectSlot();this.updateTexture(this.params.textureId)};a.prototype.bind=function(b,a){var c=this.program,d=this.params;b.bindProgram(c);b.setPipelineState(this.pipelineState);this.bindTexture(b,
c);f.bindVerticalOffset(d.verticalOffset,a,c);f.bindScreenSizePerspective(d.screenSizePerspective,c);u(c,d);"mask"!==d.textureAlphaMode&&"maskBlend"!==d.textureAlphaMode||c.setUniform1f("textureAlphaCutoff",d.textureAlphaCutoff)};a.prototype.release=function(b){};a.prototype.bindView=function(b,a){b=this.program;var c=this.params,d=c.instancedDoublePrecision?l.vec3f64.fromValues(a.viewInvTransp[3],a.viewInvTransp[7],a.viewInvTransp[11]):a.origin;f.bindView(d,a.view,b);b.setUniformMatrix4fv("viewNormal",
a.viewInvTransp);c.slicePlaneEnabled&&f.bindSlicePlane(d,a.slicePlane,b);c.screenSizePerspective&&f.bindCamPos(d,a.viewInvTransp,b);c.instancedDoublePrecision&&f.bindViewOriginDouble(d,b)};a.prototype.bindInstance=function(b,a){b=this.program;b.setUniformMatrix4fv("model",a.transformation);b.setUniformMatrix4fv("modelNormal",a.transformationNormal)};a.prototype.getDrawMode=function(){return 4};return a}(k),R=function(e){function a(b){var a=this,a=e.call(this,k.makeCtorParameters(b,b.material.getParameters()))||
this;a.updateParameters();return a}n(a,e);a.prototype.beginSlot=function(b){return b===this.slot};a.prototype.getProgram=function(){return this.program};a.prototype.selectProgram=function(){var b=this.params;this.program=this.programRep.getProgram(t.highlightPass,{normalTexture:!!b.normalTextureId,colorTexture:!!b.textureId,tangents:b.vertexTangents?"vertex":"none",flipV:b.flipV,instanced:!!b.instanced,instancedDoublePrecision:b.instancedDoublePrecision,vvSize:b.vvSizeEnabled,verticalOffset:null!==
b.verticalOffset,screenSizePerspective:null!==b.screenSizePerspective,slice:b.slicePlaneEnabled,textureAlphaMode:b.textureAlphaMode,normals:b.normals,requiresFloatOperationsFix:!!q("ios")});this.pipelineState=g.makePipelineState({culling:v(b),depthTest:{func:513},depthWrite:b.writeDepth&&g.defaultDepthWriteParams,colorWrite:g.defaultColorWriteParams})};a.prototype.selectSlot=function(){this.slot=this.params.transparent?this.params.writeDepth?7:10:5};a.prototype.updateParameters=function(){this.params=
f.copyParameters(this.material.getParameters());this.selectProgram();this.selectSlot();this.updateTexture(this.params.textureId)};a.prototype.bind=function(b,a){var c=this.program,d=this.params;b.bindProgram(c);b.setPipelineState(this.pipelineState);f.bindHighlightRendering(b,a,c);this.bindTexture(b,c);f.bindVerticalOffset(d.verticalOffset,a,c);f.bindScreenSizePerspective(d.screenSizePerspective,c);u(c,d);"mask"!==d.textureAlphaMode&&"maskBlend"!==d.textureAlphaMode||c.setUniform1f("textureAlphaCutoff",
d.textureAlphaCutoff)};a.prototype.release=function(b){};a.prototype.bindView=function(b,a){b=this.program;var c=this.params,d=c.instancedDoublePrecision?l.vec3f64.fromValues(a.viewInvTransp[3],a.viewInvTransp[7],a.viewInvTransp[11]):a.origin;f.bindView(d,a.view,b);c.slicePlaneEnabled&&f.bindSlicePlane(d,a.slicePlane,b);c.screenSizePerspective&&f.bindCamPos(d,a.viewInvTransp,b);c.instancedDoublePrecision&&f.bindViewOriginDouble(d,b)};a.prototype.bindInstance=function(a,c){a=this.program;a.setUniformMatrix4fv("model",
c.transformation);a.setUniformMatrix4fv("modelNormal",c.transformationNormal)};a.prototype.getDrawMode=function(){return 4};return a}(k);(p||(p={})).COLOR_GAMMA=2.1;var J={textureId:void 0,textureInitTransparent:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],metallicFactor:0,roughnessFactor:1,reflectanceFactor:.5,ambient:[.2,.2,.2],diffuse:[.8,.8,.8],specular:[0,0,0],externalColor:[1,
1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,flipV:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,softwareInstanced:!1,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,castShadows:!0,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,
1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:D.mat3f64.create(),transparent:!1,writeDepth:!0,textureAlphaMode:"blend",textureAlphaCutoff:.1,textureAlphaPremultiplied:!1},S=function(){function e(a,b){this.vertexBufferLayout=a;this.instanceBufferLayout=b}e.prototype.allocate=function(a){return this.vertexBufferLayout.createBuffer(a)};e.prototype.elementCount=function(a){return a.indices.position.length};
e.prototype.write=function(a,b,c,e){G.writeDefaultAttributes(b,this.vertexBufferLayout,a.transformation,a.invTranspTransformation,c,e)};return e}(),v=function(e){var a;a=e.cullFace?"none"!==e.cullFace:e.slicePlaneEnabled?!1:!e.transparent&&!e.doubleSided;return a&&{face:"front"===e.cullFace?1028:1029,mode:2305}},M=l.vec3f64.create(),N=l.vec3f64.create(),L=l.vec3f64.fromValues(0,0,1),A=l.vec3f64.create(),y=l.vec3f64.create(),x=l.vec3f64.create(),K=l.vec3f64.create();return p});