// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/arrayUtils ../../../core/mathUtils ../../../core/promiseUtils ../../../core/libs/gl-matrix-2/vec2 ../../../core/libs/gl-matrix-2/vec2f64 ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../core/libs/gl-matrix-2/vec4 ../../../core/libs/gl-matrix-2/vec4f64 ../../../geometry/support/aaBoundingRect ../../2d/engine/vectorTiles/VectorTileDisplayObject ./ElevationBounds ./ElevationTileAgent ./MapTileAgent ./TerrainConst ./terrainUtils ./TileAgent ./TilePerLayerInfo ./tileUtils ../../webgl/Texture ../../webgl/Util".split(" "),
function(r,v,G,H,I,w,J,g,n,K,L,x,M,D,y,z,m,N,l,E,A,O,F){function B(b){b.dispose();b instanceof y?y.Pool.release(b):b instanceof z&&z.Pool.release(b)}Object.defineProperty(v,"__esModule",{value:!0});var C=N.weakAssert,t=n.vec3f64.create(),h=n.vec3f64.create(),p=L.vec4f64.create();r=function(){return function(){this.angledSplitBias=this.maxLod=this.relativeHeightLimit=this.relativeWidthLimit=this.fovY=this.fovX=0;this.aboveGround=!0}}();v.SplitLimits=r;r=function(){function b(a){this._numSubdivisionAtLevel=
a;this.lij=[0,0,0];this._children=[null,null,null,null];this._dirty=!0;this.extent=x.create();this._elevationBounds=J.vec2f64.create();this.layerInfo=Array(2);this.extentInRadians=x.create();this.centerAtSeaLevel=n.vec3f64.create();this._center=n.vec3f64.create();this.up=n.vec3f64.unitZ();this._intersectsClippingArea=this._isWithinClippingArea=!0;this._clippingArea=null;this._maxTesselation=0;this._usedMemory=u;this._curvatureHeight=this._radius=this._edgeLen2=this._edgeLen=this.renderOrder=this.screenDepth=
0}Object.defineProperty(b.prototype,"usedMemory",{get:function(){for(var a=0,c=0,d=this.layerInfo[1];c<d.length;c++){var f=d[c].data;f instanceof M&&(a+=f.getMemoryUsage())}this._usedMemory===u&&this._updateMemoryUsed();return this._usedMemory+a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"maxTesselation",{get:function(){return this._maxTesselation},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"numSubdivisionsAtLevel",{get:function(){return this._numSubdivisionAtLevel},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"isWithinClippingArea",{get:function(){return this._isWithinClippingArea},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"intersectsClippingArea",{get:function(){return this._intersectsClippingArea},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"clippingArea",{get:function(){return this._clippingArea},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"parent",{get:function(){return this._parent},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"children",{get:function(){return this._children},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"surface",{get:function(){return this._surface},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"elevationBounds",{get:function(){return this._elevationBounds},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"level",{get:function(){return this.lij[0]},enumerable:!0,configurable:!0});
Object.defineProperty(b.prototype,"edgeLen",{get:function(){return this._edgeLen},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"radius",{get:function(){return this._radius},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"visible",{get:function(){if(this._dirty){var a=this._isVisible();a!==this._visible&&(this._visible=a,this.updateAgentSuspension(),this._visible=a);this._dirty=!1}return this._visible},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"rendered",{get:function(){return!!this.renderData},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"shouldRender",{get:function(){if(!this.visible)return!1;if(this.surface.reduceTileLevelDifferences){var a=this.level-this._surface.snapLevel;if(0===a)return!0;if(1===a)return!1}return this.isLeaf},enumerable:!0,configurable:!0});b.prototype.init=function(a,c,d){this.lij[0]=a[0];this.lij[1]=a[1];this.lij[2]=a[2];d.tilingScheme.getExtent(a[0],a[1],a[2],this.extent,this.extentInRadians);
this._intersectsClippingArea=this._isWithinClippingArea=!0;this._clippingArea=null;this._radius=this._edgeLen2=this._edgeLen=0;this.vlevel=a?a[0]:0;c&&c._elevationBounds?w.vec2.copy(this._elevationBounds,c.elevationBounds):w.vec2.set(this._elevationBounds,0,0);this._pendingUpdates=0;this.renderData=null;this.screenDepth=0;this._visible=!1;this._parent=c;this.unsetChildren();this._surface=d;this.updateVisibility();for(a=0;2>a;a++){c=d.numLayers(a);var f=this.layerInfo[a];this.layerInfo[a]?f.length=
c:(f=Array(c),this.layerInfo[a]=f);for(var b=0;b<c;b++)f[b]=E.TilePerLayerInfo.makeEmptyLayerInfo(a,this._surface.upsampleInfoPool,f[b]),0===a&&this.findElevationBoundsForLayer(b,-1)}this.computeElevationBounds();this._maxTesselation=Math.min(d.tilingScheme.pixelSize,m.MAX_PATCH_TESSELATION)};b.prototype.dispose=function(){C(!this.renderData,"tile.renderData was not unloaded");for(var a=0;2>a;a++)for(var c=0,d=this.layerInfo[a];c<d.length;c++)d[c].dispose();this._surface=this._parent=null;this._usedMemory=
u};b.prototype.setMemoryDirty=function(){this._usedMemory=u};b.prototype._updateMemoryUsed=function(){for(var a=this._surface.tilingScheme.pixelSize,a=a*a*4,c=this._usedMemory=0,d=this.layerInfo[1];c<d.length;c++){var f=d[c],f=f.data;f instanceof O?this._usedMemory+=F.getGpuMemoryUsage(f):f instanceof HTMLImageElement&&(this._usedMemory+=a)}c=0;for(d=this.layerInfo[0];c<d.length;c++)f=d[c],this._usedMemory+=f.data?a:0;this.renderData&&(this._usedMemory+=this.renderData.estimatedGeometryMemoryUsage,
a=this.renderData.textureDescriptor)&&(this._usedMemory+=F.getGpuMemoryUsage(a))};b.prototype.updateScreenDepth=function(a){g.vec3.copy(p,this._center);p[3]=1;K.vec4.transformMat4(p,p,a);this.screenDepth=p[2]/p[3]};b.prototype.shouldSplit=function(a,c,d){var f=this.level;g.vec3.subtract(t,this._center,c);var b=g.vec3.squaredLength(t);if(this._edgeLen2>b&&f<a.maxLod||this.surface.reduceTileLevelDifferences&&0===d&&1===this._surface.snapLevel-f)return 1;d=Math.sqrt(b);var q=g.vec3.dot(this.up,t),b=
this._elevationBounds[1]-this._elevationBounds[0],k=b/this.edgeLen;if(this.surface.reduceTileLevelDifferences&&a.aboveGround&&0<q&&.001>k&&0<q/d-Math.sin(this._curvatureHeight/(this.edgeLen*Math.SQRT1_2)*Math.PI)-k)return 0;k=this._edgeLen/(a.fovX*d*2);return k<a.relativeWidthLimit?this.vlevel!==this.level?(this.vlevel=this.level,2):0:f>=a.maxLod?(a=f+Math.ceil(-H.log2(a.relativeWidthLimit/k)),a!==this.vlevel?(this.vlevel=a,2):0):6<f&&(g.vec3.scale(h,this.up,q),g.vec3.subtract(h,h,t),f=g.vec3.squaredLength(h),
f>this._radius*this._radius&&(g.vec3.scale(h,h,this._radius/Math.sqrt(f)),g.vec3.add(h,h,this._center),g.vec3.subtract(h,c,h),Math.min(1,(Math.abs(g.vec3.dot(h,this.up))+.5*b+this._curvatureHeight)/g.vec3.length(h))*(this._edgeLen/(a.fovY*d*2))<.1/a.angledSplitBias*a.relativeHeightLimit))?0:1};b.prototype.setChildren=function(a,c,d,f){C(!!(a&&c&&d&&f),"Null child passed");this._children[0]=a;this._children[1]=c;this._children[2]=d;this._children[3]=f};b.prototype.unsetChildren=function(){this._children[0]=
null;this._children[1]=null;this._children[2]=null;this._children[3]=null};b.prototype.load=function(a){for(var c=null==this.renderData&&a.loadCachedElevationData(this),d=0;2>d;d++){var f=this.layerInfo[d];if(f)if(0===d&&c)for(var b=0;b<f.length;b++)f[b].loadingAgent=l.TILE_AGENT_DONE;else this._createOrUpdateAgents(0,d)}a.loadTile(this)};b.prototype.unload=function(a){a.unloadTile(this,this.elevationDone);for(a=0;2>a;a++)for(var c=0,d=this.layerInfo[a];c<d.length;c++){var b=d[c];b.loadingAgent&&
b.loadingAgent!==l.TILE_AGENT_DONE&&(B(b.loadingAgent),b.loadingAgent=null);b.pendingUpdates=0}this.resetPendingUpdate(16);this.resetPendingUpdate(32)};b.prototype.updateClippingStatus=function(a){if(x.equals(a,this._clippingArea))return!1;var c=this._intersectsClippingArea,d=this._isWithinClippingArea;a?(this._intersectsClippingArea=this.intersectsExtent(a),this._isWithinClippingArea=this.isWithinExtent(a)):this._isWithinClippingArea=this._intersectsClippingArea=!0;this._clippingArea=a;this.updateVisibility();
a=d&&this._isWithinClippingArea;c=!d&&!c&&!this._isWithinClippingArea&&!this._intersectsClippingArea;!this.renderData||a||c||this.setPendingUpdate(16);return!0};b.prototype.updateVisibility=function(){this._dirty=!0;this._surface.setPendingUpdates()};b.prototype.getLayerInfo=function(a,c){return this.layerInfo[c][a]};b.prototype.hasLayerData=function(a,c){a=this.layerInfo[c][a];return!(!a||!a.data||a.dataInvalidated)};b.prototype.hasDataAvailable=function(a,c,d){return(c=this.layerInfo[d][c].tilemap)?
"unavailable"!==c.getAvailability(a.lij[1],a.lij[2]):!0};Object.defineProperty(b.prototype,"updating",{get:function(){if(this.hasPendingUpdates)return!0;for(var a=0;2>a;a++)for(var c=0,d=this.layerInfo[a];c<d.length;c++){var b=d[c];if(b.loadingAgent&&b.loadingAgent!==l.TILE_AGENT_DONE&&b.loadingAgent.updating)return!0}return!1},enumerable:!0,configurable:!0});b.prototype.isSuspended=function(a){return this.hasPendingUpdate(1)?!0:0===a?!1:!this.visible};Object.defineProperty(b.prototype,"elevationDone",
{get:function(){if(this.hasPendingUpdate(16))return!1;for(var a=0,c=this.layerInfo[0];a<c.length;a++){var b=c[a];if(b.loadingAgent!==l.TILE_AGENT_DONE||!b.upsampleFromTile)return!1}return!0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasPendingUpdates",{get:function(){return 0!==this._pendingUpdates},enumerable:!0,configurable:!0});b.prototype.hasPendingUpdate=function(a){return(this._pendingUpdates&a)===a};b.prototype.setPendingUpdate=function(a){this._pendingUpdates|=a;this._surface.setPendingUpdates()};
b.prototype.resetPendingUpdate=function(a){return this.hasPendingUpdate(a)?(this._pendingUpdates&=~a,!0):!1};b.prototype.requestLayerData=function(a,c,b){m.TILE_LOADING_DEBUGLOG&&console.log("tile %s layer %d/%d requested by tile %s",this.lij.toString(),c,a,b.tile.lij.toString());var d=this.layerInfo[c][a];if(-1<d.waitingAgents.indexOf(b))return console.warn("agent already requested this piece of map data (tile %s, agent tile %s, layer: %d/%d)",this.lij.toString(),b.tile.lij.toString(),c,a),!0;d.waitingAgents.push(b);
if(d.data&&!d.dataInvalidated)return console.warn("agent requested existing data (tile %s, agent tile %s, layer: %d/%d)",this.lij.toString(),b.tile.lij.toString(),c,a),b.dataArrived(this),!0;if(d.requestPromise)return!0;d.requestAbort=I.createAbortController();var e=this._surface.requestTileData(this,a,c,d.requestAbort);if(!e)return d.requestAbort=null,!1;a=function(){d.requestPromise===e&&(d.requestPromise=null,d.requestAbort=null)};d.requestPromise=e;e.then(a,a);return!!d.requestPromise};Object.defineProperty(b.prototype,
"isLeaf",{get:function(){return null==this._children[0]},enumerable:!0,configurable:!0});b.prototype.hasLij=function(a){return this.lij[0]===a[0]&&this.lij[1]===a[1]&&this.lij[2]===a[2]};b.prototype.findByLij=function(a){return this.hasLij(a)?this:this.isLeaf?null:(a=this._children[0].findByLij(a)||this._children[1].findByLij(a)||this._children[2].findByLij(a)||this._children[3].findByLij(a))?a:null};b.prototype.distanceToSquared=function(a){return g.vec3.squaredLength(g.vec3.subtract(h,this._center,
a))};b.prototype.containsPoint=function(a){var c=this.extent;return a[0]>=c[0]&&a[1]>=c[1]&&a[0]<=c[2]&&a[1]<=c[3]};b.prototype.unrequestLayerData=function(a,c,b){m.TILE_LOADING_DEBUGLOG&&console.log("tile %s layer %d/%d canceled by tile %s",this.lij.toString(),c,a,b.tile.lij.toString());var d=this.layerInfo[c][a],e=d.waitingAgents;b=null!=G.removeUnordered(e,b);C(b,"agent has not requested this piece of map data");1>e.length&&(d.abortRequest(),m.TILE_LOADING_DEBUGLOG&&console.log("tile %s layer %d/%d request/loading canceled",
this.lij.toString(),c,a),this._updateMemoryUsed())};b.prototype.dataArrived=function(a,c,b){a=this.layerInfo[c][a];a.data=b;a.dataInvalidated=!1;for(b=0;b<a.waitingAgents.length;b++)a.waitingAgents[b].dataArrived(this);a.waitingAgents.length=0;this._updateMemoryUsed()};b.prototype.dataMissing=function(a,c,b){b.notInTilemap||console.error("Tile %s layer %d/%d error",this.lij.toString(),c,a);a=this.layerInfo[c][a];a.dataMissing=!0;for(c=0;c<a.waitingAgents.length;c++)a.waitingAgents[c].dataMissing(this);
a.waitingAgents.length=0;this._updateMemoryUsed()};b.prototype.updateRenderData=function(a){switch(a){case 1:return this.updateTexture();case 0:return this.updateGeometry()}};b.prototype.updateTexture=function(){this.renderData&&this.setPendingUpdate(32)};b.prototype.updateGeometry=function(){this.setPendingUpdate(16);for(var a=0,c=this.layerInfo[0];a<c.length;a++)c[a].pendingUpdates|=16;this._surface.setPendingUpdates()};b.prototype.invalidateLayerData=function(a,c){this.layerInfo[c][a].invalidateSourceData();
this.restartAgents(c)};b.prototype.computeElevationBounds=function(){w.vec2.set(this._elevationBounds,Number.MAX_VALUE,-Number.MAX_VALUE);for(var a=!0,c=0,b=this.layerInfo[0];c<b.length;c++){var f=b[c];f.elevationBounds&&(this._elevationBounds[0]=Math.min(this._elevationBounds[0],f.elevationBounds.min),this._elevationBounds[1]=Math.max(this._elevationBounds[1],f.elevationBounds.max),f.elevationBounds.hasNoDataValues||(a=!1))}a&&(this._elevationBounds[0]=Math.min(this._elevationBounds[0],0),this._elevationBounds[1]=
Math.max(this._elevationBounds[1],0));this.updateRadiusAndCenter()};b.prototype._updateCenter=function(){g.vec3.scale(h,this.up,.5*(this._elevationBounds[0]+this._elevationBounds[1]));g.vec3.add(this._center,this.centerAtSeaLevel,h)};b.prototype.findElevationBoundsForLayer=function(a,c){var b=this.layerInfo[0][a];if(!b.elevationBounds||b.elevationBounds.level<c)if(c=this._surface.layerViewByIndex(a,0),A.fallsWithinLayer(this,c.layer,!1)){c=P;var f=!1;if(b.data){var e=b.data;c.min=e.bounds[0];c.max=
e.bounds[1];c.hasNoDataValues=e.hasNoDataValues;c.level=this.lij[0];f=!0}else{for(var q=0,k=void 0,e=void 0,g=this._parent;g&&(!e||q<m.ELEVATION_DESIRED_RESOLUTION_LEVEL)&&!(q=this.vlevel-g.level,k=e||k,e=g.layerInfo[0][a].data,!e&&k&&q>=m.ELEVATION_DESIRED_RESOLUTION_LEVEL);g=g._parent);if(e=e||k)e.computeMinMaxValue(this.lij[0],this.lij[1],this.lij[2],c),Infinity!==c.min&&(c.level=e.level,f=!0)}f&&(b.elevationBounds||(b.elevationBounds=new D.ElevationBounds),b.elevationBounds.copyFrom(c))}};b.prototype.modifyLayers=
function(a,c,b){for(var d=this.layerInfo[b],e=0;e<d.length;e++){var g=d[e];g.loadingAgent&&g.loadingAgent!==l.TILE_AGENT_DONE&&(B(g.loadingAgent),g.loadingAgent=null);g.waitingAgents.length=0}if(1===b)for(e=0;e<d.length;++e)void 0===a[e]&&d[e].dispose();a=c.length;g=Array(a);for(e=0;e<a;e++){var k=c[e];g[e]=-1<k?d[k]:E.TilePerLayerInfo.makeEmptyLayerInfo(b,this._surface.upsampleInfoPool)}this.layerInfo[b]=g;this._updateMemoryUsed()};b.prototype.restartAgents=function(a){this.renderData&&(this._createOrUpdateAgents(0,
a),this.updateRenderData(a))};b.prototype.updateAgents=function(a){if(this.renderData){for(var b=this.layerInfo[a],d=0;d<b.length;d++){var f=b[d];f.loadingAgent===l.TILE_AGENT_DONE&&(f.loadingAgent=null)}this._createOrUpdateAgents(0,a)}};b.prototype.updateAgentSuspension=function(){for(var a=0;2>a;a++)for(var b=this.isSuspended(a),d=0,f=this.layerInfo[a];d<f.length;d++){var e=f[d];e.loadingAgent&&e.loadingAgent!==l.TILE_AGENT_DONE&&(e.loadingAgent.setSuspension(b),e.loadingAgent===l.TILE_AGENT_DONE&&
this.updateRenderData(a))}};b.prototype.removeLayerAgent=function(a,b){a=this.layerInfo[b][a];a.loadingAgent&&a.loadingAgent!==l.TILE_AGENT_DONE&&a.loadingAgent.dispose();a.loadingAgent=null};b.prototype.agentDone=function(a,b){var c=this.layerInfo[b][a];c.loadingAgent=l.TILE_AGENT_DONE;c.data||c.upsampleFromTile||this._createOrUpdateAgents(a+1,b)};b.prototype._createOrUpdateAgents=function(a,b){for(var c=this.isSuspended(b),f=this.layerInfo[b];a<f.length;++a){var e=f[a],g=!1,k=this._surface.layerViewByIndex(a,
b);if(e.loadingAgent)A.fallsWithinLayer(this,k.layer,!1)?(e.loadingAgent!==l.TILE_AGENT_DONE&&e.loadingAgent.setSuspension(c),e.loadingAgent!==l.TILE_AGENT_DONE&&(g=e.loadingAgent.update())):e.dispose();else if(A.fallsWithinLayer(this,k.layer,!1)){var g=e,h=a,m=b,p=c,n=0===m?y.Pool.acquire():z.Pool.acquire();n.init(this,h,m,p);g.loadingAgent=n;(g=e.loadingAgent.startLoading())?e.loadingAgent===l.TILE_AGENT_DONE&&this.setPendingUpdate(16):(B(e.loadingAgent),e.loadingAgent=l.TILE_AGENT_DONE)}e.loadingAgent===
l.TILE_AGENT_DONE&&this.updateRenderData(b);if(g&&k.isOpaque)break}};b.prototype.isWithinExtent=function(a){var b=this.extent;return b[0]>=a[0]&&a[2]>=b[2]&&b[1]>=a[1]&&a[3]>=b[3]};b.prototype.intersectsExtent=function(a){var b=this.extent;return b[2]>=a[0]&&a[2]>=b[0]&&b[3]>=a[1]&&a[3]>=b[1]};return b}();v.Tile=r;var P=new D.ElevationBounds,u=-1});