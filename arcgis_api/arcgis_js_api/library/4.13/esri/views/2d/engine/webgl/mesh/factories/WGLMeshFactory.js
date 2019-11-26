// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/tsSupport/generatorHelper ../../../../../../core/tsSupport/awaiterHelper ../../../../../../core/Error ../../../../../../core/has ../../../../../../core/Logger ../../../../../../core/maybe ../../../../../../core/promiseUtils ../../../../../../geometry/SpatialReference ../../../../../../geometry/support/jsonUtils ../../../../../../symbols/SimpleLineSymbol ../../definitions ../../enums ../../WGLDisplayObject ../MeshData ../VertexVector ../templates/WGLLabelTemplate ../templates/WGLLineTemplate ../templates/WGLMarkerTemplate ../templates/WGLTemplateStore".split(" "),
function(z,A,R,D,E,F,S,G,u,H,I,B,J,x,f,K,L,m,M,N,O,C){function P(a){var c=(a.attributes?Object.keys(a.attributes):[]).map(function(b){return{name:b,alias:b,type:"string"===typeof a.attributes[b]?"esriFieldTypeString":"esriFieldTypeDouble"}});return{geometryType:null!=a.centroid?"esriGeometryPolygon":B.getJsonType(a.geometry),spatialReference:I.fromJSON(a.geometry.spatialReference),fields:c}}Object.defineProperty(A,"__esModule",{value:!0});var y=G.getLogger("esri.views.2d.engine.webgl.WGLMeshFactory"),
Q={esriGeometryPoint:"above-right above-center above-left center-center center-left center-right below-center below-left below-right".split(" "),esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null,esriGeometryEnvelope:null};z=function(){function a(c,b,h,k,a,d){this._isDD=!1;this._labelsDebugTemplate=null;this._isDD=u.isSome(h)&&"dot-density"===h.type;this._geometryType=c;this._idField=b;this._templateStore=k;a&&this._validateLabelingInfo(a)&&
(this._labelTemplates=a.map(function(b){return M.default.fromLabelClass(h,b,d)}))}Object.defineProperty(a.prototype,"templates",{get:function(){return this._templateStore},enumerable:!0,configurable:!0});a.prototype.createMeshData=function(c){var b=Array(5),h=this._labelTemplates&&0<this._labelTemplates.length,a="esriGeometryPolyline"===this._geometryType?x.HEURISTIC_GLYPHS_PER_LINE:x.HEURISTIC_GLYPHS_PER_FEATURE;b[f.WGLGeometryType.MARKER]=new m.VertexVectors(f.WGLGeometryType.MARKER,c);b[f.WGLGeometryType.FILL]=
new m.VertexVectors(f.WGLGeometryType.FILL,c,this._isDD);b[f.WGLGeometryType.LINE]=new m.VertexVectors(f.WGLGeometryType.LINE,c);b[f.WGLGeometryType.TEXT]=new m.VertexVectors(f.WGLGeometryType.TEXT,c);b[f.WGLGeometryType.LABEL]=new m.VertexVectors(f.WGLGeometryType.LABEL,h?a:0);return new L.MeshData([],b)};a.prototype.analyze=function(c,b,h,a,r,d){return E(this,void 0,void 0,function(){var k,l,e,p,q,n,g,f,v,m,w;return D(this,function(t){switch(t.label){case 0:return k=c,H.isAborted(d)?[2,[]]:u.isSome(h)?
[4,h.analyze(this._idField,c,a,r,d)]:[3,2];case 1:t.sent(),t.label=2;case 2:l=0,e=k,t.label=3;case 3:if(!(l<e.length))return[3,10];p=e[l];q=-1;if(!b)return[3,7];n=p;if(null==n.symbol)return[3,5];g=null;"cim"===n.symbol.type&&(g=P(p));return[4,this._templateStore.createTemplateGroup(n.symbol,null,null,g)];case 4:return q=t.sent(),[3,6];case 5:u.isSome(h)&&(q=h.match(this._idField,p,null,null,r)),t.label=6;case 6:return[3,8];case 7:u.isSome(h)&&(q=h.match(this._idField,p,this._geometryType,a,r)),t.label=
8;case 8:if(C.isDynamicId(q))for(f=this._templateStore.getDynamicTemplateGroup(q),v=0,m=f;v<m.length;v++)(w=m[v])&&w.analyze&&w.analyze(this._templateStore,p,a,r);p.groupId=q;t.label=9;case 9:return l++,[3,3];case 10:return[2,this._templateStore.finalize(d).then(function(){return k})]}})})};a.prototype.write=function(c,b,h,a,r,d,f){var l=this._templateStore.getTemplateGroup(b.groupId),e=b.localId;if(null!=e){var p=new K(e),k=!!d&&!!this._labelTemplates&&d.has(e);if(C.isDynamicId(b.groupId))for(var n=
0;n<l.length;n++){var g=l[n];g.bindFeature(b,h,a)}if(l&&(b.geometry||b.centroid)){a=p.displayRecords;g=b.insertAfter;void 0!==g&&(p.insertAfter=g);(h=this._geometryType)||(h=null!=b.centroid?"esriGeometryPolygon":B.getJsonType(b.geometry));for(n=0;n<l.length;n++){var g=l[n],m=c.get(g.geometryType);g.writeMesh(a,m,h,e,b)}k&&(l=this._getLabelReference(l),d=d.get(e),this._writeLabelMesh(p,c,e,b,f,d,l,r,h));c.pushDisplayObject(p)}}};a.prototype._hasBadLabelClass=function(c,b){var a=c.labelPlacement,k=
Q[b];if(!c.symbol)return y.warn("No LabelClass symbol specified."),!0;if(!k)return y.error(new F("mapview-labeling:unsupported-geometry-type","Unable to create labels for Feature Layer, "+b+" is not supported")),!0;k.some(function(b){return b===a})||(k=k[0],a&&y.warn("Found invalid label placement type "+a+" for "+b+". Defaulting to "+k),c.labelPlacement=k);return!1};a.prototype._validateLabelingInfo=function(a){var b=this;return!a.some(function(a){return b._hasBadLabelClass(a,b._geometryType)})};
a.prototype._getLabelReference=function(a){for(var b=0;b<a.length;b++){var c=a[b];if(c instanceof O.default)return c}return null};a.prototype._writeLabelMesh=function(a,b,h,k,f,d,m,l,e){for(var c=a.displayRecords,q=[],n=0;n<d.length;n++){var g=d[n],r=g.text,v=g.rtl,g=this._labelTemplates[g.id],u=b.get(g.geometryType),w=f.get(g.symbolId).glyphMosaicItems;g.bindReferenceTemplate(m);g.bindTextInfo(w,r,v);g.writeMesh(c,u,e,h,k,l,q)}a.metrics=q;x.DEBUG_LABELS&&this._debugLabels(a,b)};a.prototype._debugLabels=
function(a,b){var c=a.displayRecords,k=a.id,f=0;for(a=a.metrics;f<a.length;f++)for(var d=a[f],m=0,l=d.boxes?d.boxes.concat([d.bounds]):[d.bounds];m<l.length;m++){var e=l[m],e={geometry:{paths:[[[d.anchor[0]+d.offsetX+e.center[0]-e.width/2,d.anchor[1]+d.offsetY+e.center[1]+e.height/2],[0,-e.height],[e.width,0],[0,e.height],[-e.width,0]]]},attributes:{}},p=this._getLabelDebugTemplate(),q=b.get(p.geometryType);p.writeMesh(c,q,"esriGeometryPolyline",k,e)}};a.prototype._getLabelDebugTemplate=function(){this._labelsDebugTemplate||
(this._labelsDebugTemplate=this._createLabelsDebugTemplate());return this._labelsDebugTemplate};a.prototype._createLabelsDebugTemplate=function(){var a=new J({style:"solid",width:1,color:[255,0,0,1]});return N.default.fromSimpleLine(null,!1,a,null,!1)};return a}();A.WGLMeshFactory=z});