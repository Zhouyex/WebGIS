// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../Graphic ../../../core/maybe ../../../core/promiseUtils ./geometryUtils".split(" "),function(A,n,w,t,q,p){function x(a){var b=a.source,d=a.spatialReference,f=a.location,c=a.sourceIndex,l=a.view;a=b.locator;var g=b.zoomScale,k=b.defaultZoomScale,m=l&&l.scale;d&&(a.outSpatialReference=d);return a.locationToAddress({location:f}).then(function(a){return u([a],{sourceIndex:c,scale:m,view:l,zoomScale:g,defaultZoomScale:k})})}function v(a,b){var d=a.filter,f=a.searchExtent;
a=a.withinViewEnabled;var c=b&&b.extent;return(b=p.createExtentFromGeometry(d&&d.geometry,b,b&&b.scale))||f||(a&&c?c:void 0)}function y(a){var b=a.source,d=a.suggestResult,f=a.spatialReference,c=a.view,l=a.maxResults,g=a.sourceIndex,k=b&&b.zoomScale,m=b&&b.defaultZoomScale;a=d.text.trim();if(!a)return q.resolve();a=""+(!d.key&&b.prefix?b.prefix:"")+a+(!d.key&&b.suffix?b.suffix:"");var e={},h=b.locator,n=c&&c.scale,p=v(b,c);if(!h)return q.resolve();b.categories&&(e.categories=b.categories);b.locationType&&
(e.locationType=b.locationType);f&&(h.outSpatialReference=f);if(f=c&&c.get("extent.center"))e.location=f;e.maxLocations=l;p&&(e.searchExtent=t.unwrap(p));b.countryCode&&(e.countryCode=b.countryCode);var r=d.key;r&&(e.magicKey=r);e.address={};e.address[b.singleLineFieldName||"Single Line Input"]=a;b.outFields&&(e.outFields=b.outFields);return h.addressToLocations(e).then(function(a){return u(a,{key:r,scale:n,sourceIndex:g,view:c,zoomScale:k,defaultZoomScale:m})})}function z(a,b){return a.map(function(a){return{text:a.text,
key:a.magicKey,sourceIndex:b}})}function u(a,b){return a.map(function(a){var d=b.key,c=b.scale,l=b.sourceIndex,g=b.view,k=b.zoomScale,m=b.defaultZoomScale,e=a.extent,h=a.location,n=a.address;a=new w({geometry:h,attributes:a.attributes});e=e||h;c=p.createExtentFromGeometry(e,g,c);g=k?p.scaleExtent(c,g,k):m&&"point"===e.type?p.scaleExtent(c,g,m):c;h=h?h.x+","+h.y:"";return{extent:g,feature:a,key:d,name:n||h,sourceIndex:l}})}Object.defineProperty(n,"__esModule",{value:!0});n.getResults=function(a){return a.location?
x(a):y(a)};n.getSuggestions=function(a){var b=a.source,d=a.spatialReference,f=a.view,c=a.suggestTerm,l=a.maxSuggestions,g=a.sourceIndex;a={};var k=b.locator,m=v(b,f);if(!k)return q.resolve();b.categories&&(a.categories=b.categories);k.outSpatialReference=d;if(d=f&&f.get("extent.center"))a.location=d;c=c.trim();if(!c)return q.resolve();d=b.prefix;f=b.suffix;a.text=""+(void 0===d?"":d)+c+(void 0===f?"":f);m&&(a.searchExtent=t.unwrap(m));a.maxSuggestions=l;b.countryCode&&(a.countryCode=b.countryCode);
return k.suggestLocations(a).then(function(a){return z(a,g)})};n.isArcGISWorldGeocoder=function(a){return a?/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(a)||/(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/gi.test(a):!1}});