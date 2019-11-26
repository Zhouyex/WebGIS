// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../request ../../core/Collection ../../core/Error ../../core/promiseUtils ../../layers/support/lazyLayerLoader ../PortalItem ./mapNotesUtils".split(" "),function(B,c,e,p,q,r,d,t,k,u){function l(a){switch(a.type){case "Map Service":return v(a);case "Feature Service":return w(a);case "Feature Collection":return x(a);case "Scene Service":return y(a);case "Image Service":return z(a);case "Stream Service":return{className:"StreamLayer"};case "Vector Tile Service":return{className:"VectorTileLayer"};
case "KML":return{className:"KMLLayer"};case "WMTS":return{className:"WMTSLayer"};case "WMS":return{className:"WMSLayer"};default:return d.reject(new r("portal:unknown-item-type","Unknown item type '${type}'",{type:a.type}))}}function A(a){return(0,t.layerLookupMap[a.className])().then(function(b){return{constructor:b,properties:a.properties}})}function v(a){return m(a).then(function(a){return a?{className:"TileLayer"}:{className:"MapImageLayer"}})}function w(a){return n(a).then(function(a){if("object"===
typeof a){var b={outFields:["*"]};null!=a.id&&(b.layerId=a.id);return{className:"FeatureLayer",properties:b}}return{className:"GroupLayer"}})}function y(a){return n(a).then(function(b){if("object"===typeof b){var f={},g=void 0;null!=b.id?(f.layerId=b.id,g=a.url+"/layers/"+b.id):g=a.url;if(Array.isArray(a.typeKeywords)&&0<a.typeKeywords.length){b={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(var c=0,
d=Object.keys(b);c<d.length;c++){var e=d[c];if(-1!==a.typeKeywords.indexOf(e))return{className:b[e]}}}return h(g).then(function(a){var b="SceneLayer",c={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};a&&a.layerType&&c[a.layerType]&&(b=c[a.layerType]);return{className:b,properties:f}})}return{className:"GroupLayer"}})}function x(a){return a.load().then(function(){return a.fetchData()}).then(function(a){if(a&&
Array.isArray(a.layers)){if(u.isMapNotesLayer(a))return{className:"MapNotesLayer"};if(1===a.layers.length)return{className:"FeatureLayer"}}return{className:"GroupLayer"}})}function z(a){return m(a).then(function(b){var f=new q(a.typeKeywords);return b?f.find(function(a){return"elevation 3d layer"===a.toLowerCase()})?{className:"ElevationLayer"}:{className:"TileLayer"}:{className:"ImageryLayer"}})}function m(a){return h(a.url).then(function(a){return a.tileInfo})}function n(a){return!a.url||a.url.match(/\/\d+$/)?
d.resolve({}):a.load().then(function(){return a.fetchData()}).then(function(b){return b&&Array.isArray(b.layers)?1===b.layers.length?{id:b.layers[0].id}:!1:h(a.url).then(function(a){return a&&Array.isArray(a.layers)?1===a.layers.length?{id:a.layers[0].id}:!1:{}})})}function h(a){return p(a,{responseType:"json",query:{f:"json"}}).then(function(a){return a.data})}Object.defineProperty(c,"__esModule",{value:!0});c.fromItem=function(a){!a.portalItem||a.portalItem instanceof k||a.portalItem.constructor&&
a.portalItem.constructor._meta||(a=e({},a,{portalItem:new k(a.portalItem)}));return a.portalItem.load().then(l).then(A).then(function(b){var c=e({portalItem:a.portalItem},b.properties);return d.resolve(new b.constructor(c))})};c.selectLayerClassPath=l});