// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/ObjectPool ../../../../core/PooledArray ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../support/geometryUtils ./Util".split(" "),function(F,Q,M,u,k,g,y,N){function G(b,a,c){c=c||b;c[0]=b[0]+a;c[1]=b[1]+a;c[2]=b[2]+a;return c}function z(b,a,c){return!y.frustum.intersectsSphere(c.planes,y.sphere.wrap(a,b))}function O(b,a,c){if(!m.length)for(var d=0;8>d;++d)m.push({index:0,distance:0});for(d=0;8>d;++d){var e=H[d];m.data[d].index=
d;m.data[d].distance=x(b,a,e)}m.sort(function(a,c){return a.distance-c.distance});c.clear();for(d=0;8>d;++d)c.push(m.data[d].index)}function B(b,a){for(var c=Infinity,d=null,e=0;8>e;++e){var r=x(b,a,I[e]);r<c&&(c=r,d=I[e])}return d}function x(b,a,c){return a*(b[0]*c[0]+b[1]*c[1]+b[2]*c[2])}F=function(){function b(a,c,d,e){this._maximumObjectsPerNode=10;this._maximumDepth=20;this._degenerateObjects=new Set;this._objectCount=0;this._objectToBoundingSphere=d;e&&(void 0!==e.maximumObjectsPerNode&&(this._maximumObjectsPerNode=
e.maximumObjectsPerNode),void 0!==e.maximumDepth&&(this._maximumDepth=e.maximumDepth));isNaN(a[0])||isNaN(a[1])||isNaN(a[2])||isNaN(c)?this._root=new f(null,g.vec3f64.fromValues(0,0,0),.5):this._root=new f(null,a,c/2)}Object.defineProperty(b.prototype,"center",{get:function(){return this._root.center},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"size",{get:function(){return 2*this._root.halfSize},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"root",{get:function(){return this._root.node},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"maximumObjectsPerNode",{get:function(){return this._maximumObjectsPerNode},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"maximumDepth",{get:function(){return this._maximumDepth},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"objectCount",{get:function(){return this._objectCount},enumerable:!0,configurable:!0});b.prototype.destroy=function(){this._degenerateObjects.clear();this._root=null;f.clearPool();
C=[null];v.prune();m.prune();D.prune()};b.prototype.add=function(a,c){a=this._objectOrObjectsArray(a);c=null==c?a.length:c;this._objectCount+=c;this._grow(a,c);for(var d=f.acquire(),e=0;e<c;e++){var b=a[e];d.init(this._root);this._isDegenerate(b)?this._degenerateObjects.add(b):this._add(b,d)}f.release(d)};b.prototype.remove=function(a,c){a=this._objectOrObjectsArray(a);this._objectCount-=a.length;for(var d=f.acquire(),e=0;e<a.length;e++){var b=a[e],q=c||this._boundingSphereFromObject(b,J);this._isValidRadius(q.radius)?
(d.init(this._root),this._remove(b,q,d)):this._degenerateObjects.delete(b)}f.release(d);this._shrink()};b.prototype.update=function(a,c){if(this._isValidRadius(c.radius)||!this._isDegenerate(a))this.remove(a,c),this.add(a)};b.prototype.forEachAlongRay=function(a,c,d){var e=this;this._forEachNode(this._root,function(b){if(!e._intersectsNode(a,c,b))return!1;b=b.node;b.terminals.forEach(function(b){e._intersectsObject(a,c,b)&&d(b)});null!==b.residents&&b.residents.forEach(function(b){e._intersectsObject(a,
c,b)&&d(b)});return!0})};b.prototype.forEach=function(a){this._forEachNode(this._root,function(c){c=c.node;c.terminals.forEach(a);null!==c.residents&&c.residents.forEach(a);return!0});this._degenerateObjects.forEach(a)};b.prototype.forEachDegenerateObject=function(a){this._degenerateObjects.forEach(a)};b.prototype.findClosest=function(a,c,d,e,b){return this._findClosest(a,"front-to-back"===c?1:-1,d,e,b)};b.prototype.forEachInDepthRange=function(a,c,d,e,b,g,l,h){this._forEachInDepthRange(a,c,"front-to-back"===
d?1:-1,e,b,g,l,h)};b.prototype.forEachNode=function(a){this._forEachNode(this._root,function(c){return a(c.node,c.center,2*c.halfSize)})};b.prototype._intersectsNode=function(a,c,d){G(d.center,2*-d.halfSize,n);G(d.center,2*d.halfSize,p);return N.rayBoxTest(a,c,n,p)};b.prototype._intersectsObject=function(a,c,d){var b=this._objectToBoundingSphere.getRadius(d);return 0<b?y.sphere.intersectsRay(y.sphere.wrap(b,this._objectToBoundingSphere.getCenter(d)),y.ray.wrap(a,c)):!0};b.prototype._forEachNode=function(a,
c){a=f.acquire().init(a);for(var d=[a];0!==d.length;){a=d.pop();if(c(a)&&!a.isLeaf())for(var b=0;b<a.node.children.length;b++)a.node.children[b]&&d.push(f.acquire().init(a).advance(b));f.release(a)}};b.prototype._forEachNodeDepthOrdered=function(a,c,d,b){void 0===b&&(b=1);a=f.acquire().init(a);var e=[a];for(O(d,b,D);0!==e.length;){a=e.pop();if(c(a)&&!a.isLeaf())for(d=7;0<=d;--d)b=D.data[d],b>=a.node.children.length||a.node.children[b]&&e.push(f.acquire().init(a).advance(b));f.release(a)}};b.prototype._findClosest=
function(a,c,b,e,g){var d=this,l=Infinity,r=Infinity,f=null,n=B(a,c),p=0,m=function(g){++p;if(!e||e(g)){var q=d._objectToBoundingSphere.getCenter(g),h=d._objectToBoundingSphere.getRadius(g);if(!b||!z(q,h,b)){var q=x(a,c,q),k=q-h;k<l&&(l=k,r=q+h,f=g)}}};this._forEachNodeDepthOrdered(this._root,function(d){if(null!=g&&p>=g||b&&z(d.center,d.halfSize*K,b))return!1;k.vec3.scale(t,n,d.halfSize);k.vec3.add(t,t,d.center);if(x(a,c,t)>r)return!1;d=d.node;d.terminals.forEach(function(a){m(a)});null!==d.residents&&
d.residents.forEach(function(a){m(a)});return!0},a,c);return f};b.prototype._forEachInDepthRange=function(a,c,d,b,g,q,l,h){var e=this,r=-Infinity,f=Infinity,p={setRange:function(a){1===d?(r=Math.max(r,a.near),f=Math.min(f,a.far)):(r=Math.max(r,-a.far),f=Math.min(f,-a.near))}};p.setRange(b);var n=x(c,d,a),m=B(c,d),v=B(c,-1*d),u=0,w=function(a){++u;if(!l||l(a)){var b=e._objectToBoundingSphere.getCenter(a),h=e._objectToBoundingSphere.getRadius(a),k=x(c,d,b)-n;k-h>f||k+h<r||q&&z(b,h,q)||g(a,p)}};this._forEachNodeDepthOrdered(this._root,
function(a){if(null!=h&&u>=h||q&&z(a.center,a.halfSize*K,q))return!1;k.vec3.scale(t,m,a.halfSize);k.vec3.add(t,t,a.center);if(x(c,d,t)-n>f)return!1;k.vec3.scale(t,v,a.halfSize);k.vec3.add(t,t,a.center);if(x(c,d,t)-n<r)return!1;a=a.node;a.terminals.forEach(function(a){w(a)});null!==a.residents&&a.residents.forEach(function(a){w(a)});return!0},c,d)};b.prototype._objectOrObjectsArray=function(a){if(Array.isArray(a))return a;C[0]=a;return C};b.prototype._remove=function(a,c,b){v.clear();c=b.advanceTo(c,
function(a,c){v.push(a.node);v.push(c)})?b.node.terminals:b.node.residents;c.removeUnordered(a);if(0===c.length)for(a=v.length-2;0<=a&&this._purge(v.data[a],v.data[a+1]);a-=2);};b.prototype._nodeIsEmpty=function(a){if(0!==a.terminals.length)return!1;if(null!==a.residents)return 0===a.residents.length;for(var c=0;c<a.children.length;c++)if(a.children[c])return!1;return!0};b.prototype._purge=function(a,c){0<=c&&(a.children[c]=null);return this._nodeIsEmpty(a)?(null===a.residents&&(a.residents=new u({shrink:!0})),
!0):!1};b.prototype._add=function(a,c){c.advanceTo(this._boundingSphereFromObject(a,J))?c.node.terminals.push(a):(c.node.residents.push(a),c.node.residents.length>this._maximumObjectsPerNode&&c.depth<this._maximumDepth&&this._split(c))};b.prototype._split=function(a){var c=a.node.residents;a.node.residents=null;for(var b=0;b<c.length;b++){var e=f.acquire().init(a);this._add(c.data[b],e);f.release(e)}};b.prototype._grow=function(a,c){var b=this;0!==c&&(a=this._boundingSphereFromObjects(a,c,function(a,
c){return b._boundingSphereFromObject(a,c)},w),this._isValidRadius(a.radius)&&!this._fitsInsideTree(a)&&(this._nodeIsEmpty(this._root.node)?(k.vec3.copy(this._root.center,a.center),this._root.halfSize=1.25*a.radius):(c=f.acquire(),this._rootBoundsForRootAsSubNode(a,c),this._placingRootViolatesMaxDepth(c)?this._rebuildTree(a,c):this._growRootAsSubNode(c),f.release(c))))};b.prototype._rebuildTree=function(a,c){var b=this;k.vec3.copy(E.center,c.center);E.radius=c.halfSize;a=this._boundingSphereFromObjects([a,
E],2,function(a){return a},P);c=f.acquire().init(this._root);this._root.initFrom(null,a.center,1.25*a.radius);this._forEachNode(c,function(a){b.add(a.node.terminals.data,a.node.terminals.length);null!==a.node.residents&&b.add(a.node.residents.data,a.node.residents.length);return!0});f.release(c)};b.prototype._placingRootViolatesMaxDepth=function(a){var c=0;this._forEachNode(this._root,function(a){c=Math.max(c,a.depth);return!0});return c+Math.log(a.halfSize/this._root.halfSize)*Math.LOG2E>this._maximumDepth};
b.prototype._rootBoundsForRootAsSubNode=function(a,c){var b=a.radius,e=a.center;a=-Infinity;for(var g=this._root.center,f=this._root.halfSize,l=0;3>l;l++){var h=Math.max(0,Math.ceil((g[l]-f-(e[l]-b))/(2*f))),k=Math.max(0,Math.ceil((e[l]+b-(g[l]+f))/(2*f)))+1;a=Math.max(a,Math.pow(2,Math.ceil(Math.log(h+k)*Math.LOG2E)));A[l].min=h;A[l].max=k}for(l=0;3>l;l++)h=A[l].min,k=A[l].max,b=(a-(h+k))/2,h+=Math.ceil(b),k+=Math.floor(b),L[l]=g[l]-f-h*f*2+(k+h)*f;return c.initFrom(null,L,a*f,0)};b.prototype._growRootAsSubNode=
function(a){var c=this._root.node;k.vec3.copy(w.center,this._root.center);w.radius=this._root.halfSize;this._root.init(a);a.advanceTo(w,null,!0);a.node.children=c.children;a.node.residents=c.residents;a.node.terminals=c.terminals};b.prototype._shrink=function(){for(;;){var a=this._findShrinkIndex();if(-1===a)break;this._root.advance(a);this._root.depth=0}};b.prototype._findShrinkIndex=function(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;for(var a=null,c=this._root.node.children,
b=0,e=0;e<c.length&&null==a;)b=e++,a=c[b];for(;e<c.length;)if(c[e++])return-1;return b};b.prototype._isDegenerate=function(a){a=this._objectToBoundingSphere.getRadius(a);return!this._isValidRadius(a)};b.prototype._isValidRadius=function(a){return!isNaN(a)&&-Infinity!==a&&Infinity!==a&&0<a};b.prototype._fitsInsideTree=function(a){var c=this._root.center,b=this._root.halfSize,e=a.center;return a.radius<=b&&e[0]>=c[0]-b&&e[0]<=c[0]+b&&e[1]>=c[1]-b&&e[1]<=c[1]+b&&e[2]>=c[2]-b&&e[2]<=c[2]+b};b.prototype._boundingSphereFromObject=
function(a,c){k.vec3.copy(c.center,this._objectToBoundingSphere.getCenter(a));c.radius=this._objectToBoundingSphere.getRadius(a);return c};b.prototype._boundingSphereFromObjects=function(a,c,b,e){if(1===c){var d=b(a[0],w);k.vec3.copy(e.center,d.center);e.radius=d.radius}else{n[0]=Infinity;n[1]=Infinity;n[2]=Infinity;p[0]=-Infinity;p[1]=-Infinity;p[2]=-Infinity;for(var g=0;g<c;g++)if(d=b(a[g],w),this._isValidRadius(d.radius)){var f=n,h=d.center,m=d.radius;f[0]=Math.min(f[0],h[0]-m);f[1]=Math.min(f[1],
h[1]-m);f[2]=Math.min(f[2],h[2]-m);f=p;h=d.center;d=d.radius;f[0]=Math.max(f[0],h[0]+d);f[1]=Math.max(f[1],h[1]+d);f[2]=Math.max(f[2],h[2]+d)}k.vec3.lerp(e.center,n,p,.5);e.radius=Math.max(p[0]-n[0],p[1]-n[1],p[2]-n[2])/2}return e};return b}();var f=function(){function b(a,c,b,e){void 0===b&&(b=0);void 0===e&&(e=0);this.center=g.vec3f64.create();this.initFrom(a,c,b,0)}b.prototype.init=function(a){return this.initFrom(a.node,a.center,a.halfSize,a.depth)};b.prototype.initFrom=function(a,c,d,e){void 0===
a&&(a=null);void 0===d&&(d=this.halfSize);void 0===e&&(e=this.depth);this.node=a||b.createEmptyNode();c&&k.vec3.copy(this.center,c);this.halfSize=d;this.depth=e;return this};b.prototype.advance=function(a){var c=this.node.children[a];c||(c=b.createEmptyNode(),this.node.children[a]=c);this.node=c;this.halfSize/=2;this.depth++;a=H[a];this.center[0]+=a[0]*this.halfSize;this.center[1]+=a[1]*this.halfSize;this.center[2]+=a[2]*this.halfSize;return this};b.prototype.advanceTo=function(a,b,d){for(void 0===
d&&(d=!1);;){if(this.isTerminalFor(a))return b&&b(this,-1),!0;if(this.isLeaf()&&!d)return b&&b(this,-1),!1;this.isLeaf()&&(this.node.residents=null);var c=this._childIndex(a);b&&b(this,c);this.advance(c)}};b.prototype.isLeaf=function(){return null!=this.node.residents};b.prototype.isTerminalFor=function(a){return a.radius>this.halfSize/2};b.prototype._childIndex=function(a){a=a.center;for(var b=this.center,d=0,e=0;3>e;e++)b[e]<a[e]&&(d|=1<<e);return d};b.createEmptyNode=function(){return{children:[null,
null,null,null,null,null,null,null],terminals:new u({shrink:!0}),residents:new u({shrink:!0})}};b.acquire=function(){return b._pool.acquire()};b.release=function(a){b._pool.release(a)};b.clearPool=function(){b._pool.prune()};b._pool=new M(b);return b}(),H=[g.vec3f64.fromValues(-1,-1,-1),g.vec3f64.fromValues(1,-1,-1),g.vec3f64.fromValues(-1,1,-1),g.vec3f64.fromValues(1,1,-1),g.vec3f64.fromValues(-1,-1,1),g.vec3f64.fromValues(1,-1,1),g.vec3f64.fromValues(-1,1,1),g.vec3f64.fromValues(1,1,1)],I=[g.vec3f64.fromValues(-1,
-1,-1),g.vec3f64.fromValues(-1,-1,1),g.vec3f64.fromValues(-1,1,-1),g.vec3f64.fromValues(-1,1,1),g.vec3f64.fromValues(1,-1,-1),g.vec3f64.fromValues(1,-1,1),g.vec3f64.fromValues(1,1,-1),g.vec3f64.fromValues(1,1,1)],K=Math.sqrt(3),C=[null],L=g.vec3f64.create(),t=g.vec3f64.create(),n=g.vec3f64.create(),p=g.vec3f64.create(),v=new u,J={center:g.vec3f64.create(),radius:0},w={center:g.vec3f64.create(),radius:0},E={center:g.vec3f64.create(),radius:0},P={center:g.vec3f64.create(),radius:0},A=[{min:0,max:0},
{min:0,max:0},{min:0,max:0}],m=new u,D=new u;return F});