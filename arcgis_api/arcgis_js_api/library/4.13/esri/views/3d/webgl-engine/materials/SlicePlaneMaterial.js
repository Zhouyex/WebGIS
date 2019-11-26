// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../lib/GLMaterial ../lib/Material ./internal/DefaultBufferWriter ./internal/MaterialUtil ./internal/MaterialUtil ./renderers/MergedRenderer ../shaders/SlicePlanePrograms ../../../webgl/renderState".split(" "),function(f,u,g,k,l,h,d,m,n,p,e){f=function(c){function a(q,a){a=c.call(this,a)||this;a.params=d.copyParameters(q,r);return a}g(a,c);a.prototype.dispose=function(){};a.prototype.setParameterValues=function(a){d.updateParameters(this.params,
a)&&this.notifyDirty("matChanged")};a.prototype.getParameters=function(){return this.params};a.prototype.intersect=function(a,b,c,d,e,f,g,h){return m.intersectTriangleGeometry(a,b,d,e,f,g)};a.prototype.createBufferWriter=function(){return new h.DefaultBufferWriter(h.PositionUVLayout)};a.prototype.createRenderer=function(a,b){return new n(a,b,this)};a.prototype.getGLMaterials=function(){return{color:t,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}};return a}(l.Material);var t=function(c){function a(a){a=
c.call(this,a)||this;a.updateParameters();return a}g(a,c);a.prototype.selectProgram=function(){this.program=this.programRep.getProgram(p.colorPass);this.pipelineState=e.makePipelineState({blending:e.separateBlendingParams(1,1,771,771),depthTest:{func:513},colorWrite:e.defaultColorWriteParams})};a.prototype.updateParameters=function(){this.params=d.copyParameters(this.material.getParameters());this.selectProgram()};a.prototype.beginSlot=function(a){return 10===a};a.prototype.getProgram=function(){return this.program};
a.prototype.getDrawMode=function(){return 4};a.prototype.bind=function(a,b){b=this.program;a.bindProgram(b);a.setPipelineState(this.pipelineState);b.setUniform4fv("backgroundColor",this.params.backgroundColor);b.setUniform4fv("gridColor",this.params.gridColor);b.setUniform1f("gridWidth",this.params.gridWidth)};a.prototype.bindView=function(a,b){a=b.origin;var c=this.getProgram();d.bindView(a,b.view,c)};a.prototype.bindInstance=function(a,b){this.getProgram().setUniformMatrix4fv("model",b.transformation)};
a.prototype.release=function(a){};return a}(k),r={backgroundColor:[1,0,0,.5],gridColor:[0,1,0,.5],gridWidth:4};return f});