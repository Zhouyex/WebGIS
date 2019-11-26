// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../support/buffer/BufferView","../../lib/Util"],function(A,q,r,m){function x(l,f,a,c,e){var g=a.typedBuffer;a=a.typedBufferStride;var k=l.length;c*=a;if(null==e||1===e)for(var d=0;d<k;++d){var b=2*l[d];g[c]=f[b];g[c+1]=f[b+1];c+=a}else for(d=0;d<k;++d)for(var b=2*l[d],h=0;h<e;++h)g[c]=f[b],g[c+1]=f[b+1],c+=a}function u(l,f,a,c,e){var g=a.typedBuffer;a=a.typedBufferStride;var k=l.length;c*=a;if(null==e||1===e)for(var d=0;d<k;++d){var b=3*l[d];g[c]=f[b];g[c+1]=f[b+
1];g[c+2]=f[b+2];c+=a}else for(d=0;d<k;++d)for(var b=3*l[d],h=0;h<e;++h)g[c]=f[b],g[c+1]=f[b+1],g[c+2]=f[b+2],c+=a}function v(l,f,a,c,e){var g=a.typedBuffer;a=a.typedBufferStride;var k=l.length;c*=a;if(null==e||1===e)for(var d=0;d<k;++d){var b=4*l[d];g[c]=f[b];g[c+1]=f[b+1];g[c+2]=f[b+2];g[c+3]=f[b+3];c+=a}else for(d=0;d<k;++d)for(var b=4*l[d],h=0;h<e;++h)g[c]=f[b],g[c+1]=f[b+1],g[c+2]=f[b+2],g[c+3]=f[b+3],c+=a}function y(l,f,a,c,e,g){if(a){var k=c.typedBuffer;c=c.typedBufferStride;var d=l.length;
e*=c;if(null==g||1===g)for(var b=0;b<d;++b){var h=3*l[b],p=f[h],n=f[h+1],t=f[h+2];k[e]=a[0]*p+a[4]*n+a[8]*t+a[12];k[e+1]=a[1]*p+a[5]*n+a[9]*t+a[13];k[e+2]=a[2]*p+a[6]*n+a[10]*t+a[14];e+=c}else for(b=0;b<d;++b)for(var h=3*l[b],p=f[h],n=f[h+1],t=f[h+2],h=a[0]*p+a[4]*n+a[8]*t+a[12],m=a[1]*p+a[5]*n+a[9]*t+a[13],p=a[2]*p+a[6]*n+a[10]*t+a[14],n=0;n<g;++n)k[e]=h,k[e+1]=m,k[e+2]=p,e+=c}else u(l,f,c,e,g)}function z(l,f,a,c,e,g){if(a){var k=c.typedBuffer;c=c.typedBufferStride;var d=l.length;e*=c;if(null==g||
1===g)for(var b=0;b<d;++b){var h=3*l[b],p=f[h],n=f[h+1],m=f[h+2];k[e]=a[0]*p+a[4]*n+a[8]*m;k[e+1]=a[1]*p+a[5]*n+a[9]*m;k[e+2]=a[2]*p+a[6]*n+a[10]*m;e+=c}else for(b=0;b<d;++b)for(var h=3*l[b],p=f[h],n=f[h+1],m=f[h+2],h=a[0]*p+a[4]*n+a[8]*m,q=a[1]*p+a[5]*n+a[9]*m,p=a[2]*p+a[6]*n+a[10]*m,n=0;n<g;++n)k[e]=h,k[e+1]=q,k[e+2]=p,e+=c}else u(l,f,c,e,g)}function w(l,f,a,c,e,g){var k=c.typedBuffer;c=c.typedBufferStride;var d=l.length;e*=c;if(null==g||1===g)if(4===a)for(a=0;a<d;++a){var b=4*l[a];k[e]=f[b];k[e+
1]=f[b+1];k[e+2]=f[b+2];k[e+3]=f[b+3];e+=c}else{if(3===a)for(a=0;a<d;++a)b=3*l[a],k[e]=f[b],k[e+1]=f[b+1],k[e+2]=f[b+2],k[e+3]=255,e+=c}else if(4===a)for(a=0;a<d;++a)for(var b=4*l[a],h=0;h<g;++h)k[e]=f[b],k[e+1]=f[b+1],k[e+2]=f[b+2],k[e+3]=f[b+3],e+=c;else if(3===a)for(a=0;a<d;++a)for(b=3*l[a],h=0;h<g;++h)k[e]=f[b],k[e+1]=f[b+1],k[e+2]=f[b+2],k[e+3]=255,e+=c}Object.defineProperty(q,"__esModule",{value:!0});q.writeBufferVec2=x;q.writeBufferVec3=u;q.writeBufferVec4=v;q.writeBufferMat3f=function(l,f,
a,c){var e=a.typedBuffer;a=a.typedBufferStride;var g=l.length;c*=a;for(var k=0;k<g;++k){for(var d=9*l[k],b=0;9>b;++b)e[c+b]=f[d+b];c+=a}};q.writeBufferMat4f=function(l,f,a,c){var e=a.typedBuffer;a=a.typedBufferStride;var g=l.length;c*=a;for(var k=0;k<g;++k){for(var d=16*l[k],b=0;16>b;++b)e[c+b]=f[d+b];c+=a}};q.writePosition=y;q.writeNormal=z;q.writeColor=w;q.writeMultipliedColor=function(l,f,a,c,e,g,k){var d=e.typedBuffer;e=e.typedBufferStride;var b=l.length;g*=e;if(null==k||1===k)if(4===a)for(a=
0;a<b;++a){var h=4*l[a];d[g]=f[h]*c[0];d[g+1]=f[h+1]*c[1];d[g+2]=f[h+2]*c[2];d[g+3]=f[h+3]*c[3];g+=e}else{if(3===a){var m=255*c[3];for(a=0;a<b;++a)h=3*l[a],d[g]=f[h]*c[0],d[g+1]=f[h+1]*c[1],d[g+2]=f[h+2]*c[2],d[g+3]=m,g+=e}}else if(4===a)for(a=0;a<b;++a)for(var h=4*l[a],n=0;n<k;++n)d[g]=f[h]*c[0],d[g+1]=f[h+1]*c[1],d[g+2]=f[h+2]*c[2],d[g+3]=f[h+3]*c[3],g+=e;else if(3===a)for(m=255*c[3],a=0;a<b;++a)for(h=3*l[a],n=0;n<k;++n)d[g]=f[h]*c[0],d[g+1]=f[h+1]*c[1],d[g+2]=f[h+2]*c[2],d[g+3]=m,g+=e};q.writeDefaultAttributes=
function(l,f,a,c,e,g){var k=0;for(f=f.fieldNames;k<f.length;k++){var d=f[k],b=l.vertexAttr[d],h=l.indices[d];if(b&&h)switch(d){case m.VertexAttrConstants.POSITION:m.assert(3===b.size);(d=e.getField(d,r.BufferViewVec3f))&&y(h,b.data,a,d,g);break;case m.VertexAttrConstants.NORMAL:m.assert(3===b.size);(d=e.getField(d,r.BufferViewVec3f))&&z(h,b.data,c,d,g);break;case m.VertexAttrConstants.UV0:m.assert(2===b.size);(d=e.getField(d,r.BufferViewVec2f))&&x(h,b.data,d,g);break;case m.VertexAttrConstants.REGION:m.assert(4===
b.size);(d=e.getField(d,r.BufferViewVec4u16))&&v(h,b.data,d,g);break;case m.VertexAttrConstants.COLOR:m.assert(3===b.size||4===b.size);(d=e.getField(d,r.BufferViewVec4u8))&&w(h,b.data,b.size,d,g);break;case m.VertexAttrConstants.SYMBOLCOLOR:m.assert(3===b.size||4===b.size);(d=e.getField(d,r.BufferViewVec4u8))&&w(h,b.data,b.size,d,g);break;case m.VertexAttrConstants.TANGENT:m.assert(4===b.size),(d=e.getField(d,r.BufferViewVec4f))&&v(h,b.data,d,g)}}}});