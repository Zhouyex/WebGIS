// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/Logger ../../../../../../core/screenUtils ../../../../../../symbols/cim/enums ../../color ../../number ../../Utils ../../materialKey/MaterialKey ./util ./WGLBaseLineTemplate ./WGLMeshTemplate".split(" "),function(g,w,B,C,t,x,y,u,z,A,D,E,F){Object.defineProperty(w,"__esModule",{value:!0});var G=C.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate");g=function(g){function h(e,b,a,f,h,d,m,n,r,p,k,q,l,v,t,
u){var c=g.call(this)||this;e=A.LineMaterialKey.load(A.createMaterialKey(c.geometryType,e,l));b&&(e.sdf=b.sdf,e.pattern=!0,e.textureBinding=b.textureBinding);c._capType=f;c._joinType=h;c._miterLimitCosine=D.getLimitCosine(d);c.tessellationProperties._fillColor=m;c.tessellationProperties._tl=n;c.tessellationProperties._br=r;c._hasPattern=p;c._isDashed=k;c._joinOnUTurn=u;c._isColorLocked=q;c._isOutline=l;c._zOrder=t;c._materialKey=e.data;c.tessellationProperties._bitset=q?1:0;c.tessellationProperties._halfWidth=
.5*a;c.tessellationProperties._halfReferenceWidth=.5*v;c._initializeTessellator(!1);return c}B(h,g);h.fromCIMLine=function(e,b,a,f,g){var d=b.color,m=b.isDashed,n=b.cap;m&&n===x.CapType.ROUND&&(n=x.CapType.SQUARE);var r=b.join,p=t.pt2px(b.width),k=t.pt2px(b.referenceWidth),q=t.pt2px(b.miterLimit),d=d&&y.premultiplyAlphaRGBA(d)||0;if(!a)return new h(e,a,p,n,r,q,d,0,0,!1,m,b.colorLocked,f,k,b.zOrder,g);var l=a.rect,v=l.x+1+a.width,w=l.y+1+a.height,l=u.i1616to32(l.x+1,l.y+1),v=u.i1616to32(v,w);return new h(e,
a,p,n,r,q,d,l,v,!0,m,b.colorLocked,f,k,b.zOrder,g)};h.fromSimpleLine=function(e,b,a,f,g){var d=a.color,m="solid"!==a.style&&"none"!==a.style,n=z.getCapType(a.cap||"round",m),r=z.getJoinType(a.join||"round"),d=d&&"none"!==a.style&&y.premultiplyAlphaRGBA(d)||0;"none"===a.style&&(d=0);var p=t.pt2px(a.width);a=a.miterLimit;if(!f)return new h(e,f,p,n,r,a,d,0,0,!1,m,!1,b,p,0,g);var k=f.rect,q=k.x+1+f.width,l=k.y+1+f.height,k=u.i1616to32(k.x+1,k.y+1),q=u.i1616to32(q,l);return new h(e,f,p,n,r,a,d,k,q,!0,
m,!1,b,p,0,g)};h.fromPictureLineSymbol=function(e,b,a,f){G.error("PictureLineSymbol support does not exist!");return null};return h}(E.default(F.default));w.default=g});