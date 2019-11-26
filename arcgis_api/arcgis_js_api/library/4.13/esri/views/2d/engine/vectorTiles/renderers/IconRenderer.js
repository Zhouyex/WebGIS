// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f32 ../../../../../core/libs/gl-matrix-2/vec2f32 ../../../../../core/libs/gl-matrix-2/vec3f32 ../../../../../core/libs/gl-matrix-2/vec4f32 ../../../../webgl ../GeometryUtils ./rendererUtils".split(" "),function(H,I,A,w,D,E,F,u,B,G){return function(){function d(f){this._viewProjMat=w.mat4f32.create();this._offsetVector=E.vec3f32.create();this._spritesTextureSize=D.vec2f32.create();this._color=
F.vec4f32.create();this._initialized=!1;this._programOptions={id:!1,dd:!1,sdf:!1};this._programCache=f}d.prototype.dispose=function(){};d.prototype.render=function(f,b,a,r,d,v,n,e,x,y,g,h){var z=this;this._initialized||this._initialize(f);var u=e.hasDataDrivenIconSize?1:e.getLayoutValue("icon-size",a),k=e.hasDataDrivenIconColor?[1,1,1,1]:e.getPaintValue("icon-color",a),t=e.hasDataDrivenIconOpacity?1:e.getPaintValue("icon-opacity",a);h*=k[3]*t;this._color[0]=h*k[0];this._color[1]=h*k[1];this._color[2]=
h*k[2];this._color[3]=h;k=e.getLayoutValue("icon-rotation-alignment",a);2===k&&(k=1===e.getLayoutValue("symbol-placement",a)?0:1);var w=0===k;h=b.isSDF;t=e.hasDataDrivenIcon;r=4===r;var k=B.degToByte(d),p=n.tileTransform.transform,l=e.getPaintValue("icon-translate",a);if(0!==l[0]||0!==l[1]){A.mat4.copy(this._viewProjMat,n.tileTransform.transform);var p=l[0],l=l[1],q=0,m=0,m=(1<<n.key.level)/Math.pow(2,a)*(n.coordRange/512);if(1===e.getPaintValue("icon-translate-anchor",a)){q=-B.C_DEG_TO_RAD*d;d=Math.sin(q);
var C=Math.cos(q),q=m*(p*C-l*d),m=m*(p*d+l*C)}else q=m*p,m*=l;this._offsetVector[0]=q;this._offsetVector[1]=m;this._offsetVector[2]=0;A.mat4.translate(this._viewProjMat,this._viewProjMat,this._offsetVector);p=this._viewProjMat}y=w?y:g;if(g=this._getIconVAO(f,n,t)){f.bindVAO(g);g=this._programOptions;g.id=r;g.dd=t;g.sdf=h;var c=this._programCache.getProgram(4,(r?1:0)<<2|(t?1:0)<<1|(h?1:0),g);f.bindProgram(c);h&&(g=e.getPaintValue("icon-halo-color",a),h=e.getPaintValue("icon-halo-width",a),c.setUniform4f("u_outlineColor",
g[0],g[1],g[2],g[3]),c.setUniform1f("u_outlineSize",h));c.setUniformMatrix4fv("u_transformMatrix",p);c.setUniformMatrix4fv("u_extrudeMatrix",y);c.setUniform2fv("u_normalized_origin",n.tileTransform.displayCoord);c.setUniform1f("u_depth",e.z);c.setUniform1f("u_mapRotation",k);c.setUniform1f("u_keepUpright",0);c.setUniform1f("u_level",10*a);c.setUniform1f("u_fadeSpeed",10*v.fadeSpeed);c.setUniform1f("u_minfadeLevel",10*v.minfadeLevel);c.setUniform1f("u_maxfadeLevel",10*v.maxfadeLevel);c.setUniform1f("u_fadeChange",
10*(a+v.fadeChange));c.setUniform1i("u_texture",5);c.setUniform1f("u_size",u);c.setUniform4fv("u_color",this._color);r&&(a=G.int32To4Bytes(b.layerID),c.setUniform4f("u_id",a[0],a[1],a[2],a[3]));b.markerPerPageElementsMap.forEach(function(a,b){z._spritesTextureSize[0]=x.getWidth(b)/4;z._spritesTextureSize[1]=x.getHeight(b)/4;c.setUniform2fv("u_mosaicSize",z._spritesTextureSize);x.bind(f,9729,b,5);f.drawElements(4,a[1],5125,12*a[0])});f.bindVAO()}};d.prototype._initialize=function(f){if(this._initialized)return!0;
this._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:4,stride:16,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:16,normalized:!1,divisor:0},{name:"a_levelInfo",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]};this._vertexAttributesDD={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:24,normalized:!1,divisor:0},{name:"a_vertexOffset",count:2,type:5122,
offset:4,stride:24,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:24,normalized:!1,divisor:0},{name:"a_levelInfo",count:4,type:5121,offset:12,stride:24,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:16,stride:24,normalized:!0,divisor:0},{name:"a_size",count:1,type:5126,offset:20,stride:24,normalized:!1,divisor:0}]};return this._initialized=!0};d.prototype._getIconVAO=function(f,b,a){if(a){if(b.iconDDVertexArrayObject)return b.iconDDVertexArrayObject;a=
b.iconDDVertexBuffer;var d=b.iconIndexBuffer;if(!a||!d)return null;b.iconDDVertexArrayObject=new u.VertexArrayObject(f,this._programCache.getProgramAttributes(4),this._vertexAttributesDD,{geometry:a},d);return b.iconDDVertexArrayObject}if(b.iconVertexArrayObject)return b.iconVertexArrayObject;a=b.iconVertexBuffer;d=b.iconIndexBuffer;if(!a||!d)return null;b.iconVertexArrayObject=new u.VertexArrayObject(f,this._programCache.getProgramAttributes(4),this._vertexAttributes,{geometry:a},d);return b.iconVertexArrayObject};
return d}()});