// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../geometry/support/aaBoundingBox ../../../../layers/graphics/centroid ../../../../layers/graphics/OptimizedGeometry ./I3SUtil".split(" "),function(f,g,l,m,e,h){Object.defineProperty(g,"__esModule",{value:!0});f=function(){function c(a){this.objectIdField=a.objectIdField;this.getFeatureExtent=a.getFeatureExtent}c.prototype.getObjectId=function(a){return a.id};c.prototype.getAttributes=function(a){var b=a.meta,n=a.index,d={};this.objectIdField&&(d[this.objectIdField]=
a.id);a=b.attributeInfo.attributeData;if(null!=a)for(var b=0,c=Object.keys(a);b<c.length;b++){var e=c[b];d[e]=h.getCachedAttributeValue(a[e],n)}return d};c.prototype.getAttribute=function(a,b){if(b===this.objectIdField)return a.id;var c=a.meta.attributeInfo.attributeData;return null==c?null:h.getCachedAttributeValue(c[b],a.index)};c.prototype.getGeometry=function(a){if(a.geometry)return a.geometry;var b=this.getFeatureExtent(a,k);a=b[0];var c=b[1],d=b[2],f=b[3],b=b[4];return new e.default([5],[a,
c,d,f,c,d,f,b,d,a,b,d,a,c,d])};c.prototype.getCentroid=function(a,b){if(a.geometry)return m.getCentroidOptimizedGeometry(new e.default,a.geometry,b.hasZ,b.hasM);a=this.getFeatureExtent(a,k);return new e.default([0],[(a[0]+a[3])/2,(a[1]+a[4])/2,(a[2]+a[5])/2])};c.prototype.cloneWithGeometry=function(a,b){return{id:a.id,index:a.index,meta:a.meta,geometry:b}};return c}();g.I3SQueryFeatureAdapter=f;var k=l.create()});