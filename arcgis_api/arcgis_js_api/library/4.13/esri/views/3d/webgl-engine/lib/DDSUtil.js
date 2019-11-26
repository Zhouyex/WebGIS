// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/Logger","../../../../core/mathUtils","../../../webgl/Texture"],function(y,k,t,p,u){function g(f){return f.charCodeAt(0)+(f.charCodeAt(1)<<8)+(f.charCodeAt(2)<<16)+(f.charCodeAt(3)<<24)}Object.defineProperty(k,"__esModule",{value:!0});var l=t.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),v=g("DXT1"),w=g("DXT3"),x=g("DXT5");k.createDDSTexture=function(f,b,g,n){var a=new Int32Array(g,0,31);if(542327876!==a[0])return l.error("Invalid magic number in DDS header"),
null;if(!(a[20]&4))return l.error("Unsupported format, must contain a FourCC code"),null;var c=a[21],m;switch(c){case v:c=8;m=33776;break;case w:c=16;m=33778;break;case x:c=16;m=33779;break;default:return l.error("Unsupported FourCC code:",String.fromCharCode(c&255,c>>8&255,c>>16&255,c>>24&255)),null}var h=1,d=a[4],e=a[3];if(0!==(d&3)||0!==(e&3))l.warn("Rounding up compressed texture size to nearest multiple of 4."),d=d+3&-4,e=e+3&-4;b.width=d;b.height=e;a[2]&131072&&!1!==n&&(h=Math.max(1,a[7]));
1===h||p.isPowerOfTwo(d)&&p.isPowerOfTwo(e)||(l.warn("Ignoring mipmaps of non power of two sized compressed texture."),h=1);for(var k=a[1]+4,q=[],r=0;r<h;++r)a=(d+3>>2)*(e+3>>2)*c,n=new Uint8Array(g,k,a),q.push(n),k+=a,d=Math.max(1,d>>1),e=Math.max(1,e>>1);b.samplingMode=1<h?9987:9729;b.hasMipmap=1<h;b.internalFormat=m;b=new u(f,b,{type:"compressed",levels:q});f.bindTexture(b);return b}});