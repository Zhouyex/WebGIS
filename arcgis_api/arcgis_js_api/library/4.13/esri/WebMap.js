// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
require({cache:{"esri/core/accessorSupport/originUtils":function(){define(["require","exports","../MultiOriginJSONSupport"],function(p,m,l){Object.defineProperty(m,"__esModule",{value:!0});m.updateOrigins=function(a){a&&a.writtenProperties&&a.writtenProperties.forEach(function(a){var b=a.target;a.newOrigin&&a.oldOrigin!==a.newOrigin&&l.isMultiOriginJSONMixin(b)&&b.updateOrigin(a.propName,a.newOrigin)})}})},"esri/tasks/support/ProjectParameters":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/Logger ../../core/accessorSupport/decorators ../../geometry/support/jsonUtils".split(" "),
function(p,m,l,a,b,d,c,f){var r=d.getLogger("esri.tasks.support.ProjectParameters");return function(b){function h(a){a=b.call(this)||this;a.geometries=null;a.outSpatialReference=null;a.transformation=null;a.transformForward=null;return a}l(h,b);Object.defineProperty(h.prototype,"outSR",{get:function(){r.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead.");return this.outSpatialReference},set:function(a){r.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead.");
this.outSpatialReference=a},enumerable:!0,configurable:!0});h.prototype.toJSON=function(){var a=this.geometries.map(function(a){return a.toJSON()}),b=this.geometries[0],c={};c.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON());c.inSR=b.spatialReference.wkid||JSON.stringify(b.spatialReference.toJSON());c.geometries=JSON.stringify({geometryType:f.getJsonType(b),geometries:a});this.transformation&&(c.transformation=this.transformation.wkid||JSON.stringify(this.transformation));
null!=this.transformForward&&(c.transformForward=this.transformForward);return c};a([c.property()],h.prototype,"geometries",void 0);a([c.property({json:{read:{source:"outSR"}}})],h.prototype,"outSpatialReference",void 0);a([c.property({json:{read:!1}})],h.prototype,"outSR",null);a([c.property()],h.prototype,"transformation",void 0);a([c.property()],h.prototype,"transformForward",void 0);return h=a([c.subclass("esri.tasks.support.ProjectParameters")],h)}(c.declared(b.JSONSupport))})},"esri/webdoc/RangeInfo":function(){define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators".split(" "),
function(p,m,l,a,b,d,c){return function(b){function f(a){a=b.call(this,a)||this;a.activeRange=null;a.currentRangeExtent=null;a.fullRangeExtent=null;return a}l(f,b);g=f;f.prototype.clone=function(){return new g(d.clone({activeRange:this.activeRange,currentRangeExtent:this.currentRangeExtent,fullRangeExtent:this.fullRangeExtent}))};var g;a([c.property({type:String,nonNullable:!0,json:{read:{source:"activeRangeName"},write:{target:"activeRangeName",isRequired:!0}}})],f.prototype,"activeRange",void 0);
a([c.property({type:[Number],json:{write:!0}})],f.prototype,"currentRangeExtent",void 0);a([c.property({type:[Number],json:{write:!0}})],f.prototype,"fullRangeExtent",void 0);return f=g=a([c.subclass("esri.webdoc.RangeInfo")],f)}(c.declared(b.JSONSupport))})},"esri/webdoc/Widgets":function(){define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators ./widgets/Range ./widgets/TimeSlider".split(" "),
function(p,m,l,a,b,d,c,f,r){return function(b){function h(a){a=b.call(this,a)||this;a.range=null;a.timeSlider=null;return a}l(h,b);k=h;h.prototype.clone=function(){return new k(d.clone({range:this.range,timeSlider:this.timeSlider}))};var k;a([c.property({type:f,json:{write:!0}})],h.prototype,"range",void 0);a([c.property({type:r,json:{write:!0}})],h.prototype,"timeSlider",void 0);return h=k=a([c.subclass("esri.webdoc.Widgets")],h)}(c.declared(b.JSONSupport))})},"esri/webdoc/widgets/Range":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),
function(p,m,l,a,b,d,c){var f=new b.default({slider:"slider",picker:"picker"});return function(b){function d(a){a=b.call(this,a)||this;a.interactionMode=null;a.numStops=null;a.stopInterval=null;return a}l(d,b);h=d;d.prototype.clone=function(){return new h({interactionMode:this.interactionMode,numStops:this.numStops,stopInterval:this.stopInterval})};var h;a([c.property({type:f.apiValues,nonNullable:!0,json:{type:f.jsonValues,default:null,read:{reader:f.read},write:{isRequired:!0,writer:f.write}}})],
d.prototype,"interactionMode",void 0);a([c.property({type:Number,json:{read:{source:"numberOfStops"},write:{target:"numberOfStops",overridePolicy:function(){var a=null!=this.stopInterval;return{enabled:!a,isRequired:!a}}}}})],d.prototype,"numStops",void 0);a([c.property({type:Number,json:{write:{overridePolicy:function(){return{isRequired:null==this.numStops}}}}})],d.prototype,"stopInterval",void 0);return d=h=a([c.subclass("esri.webdoc.widgets.Range")],d)}(c.declared(d.JSONSupport))})},"esri/webdoc/widgets/TimeSlider":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../TimeExtent ../../TimeInterval ../../core/JSONSupport ../../core/lang ../../core/object ../../core/accessorSupport/decorators".split(" "),
function(p,m,l,a,b,d,c,f,r,g){return function(c){function k(a){a=c.call(this,a)||this;a.currentTimeExtent=null;a.fullTimeExtent=null;a.numStops=null;a.numThumbs=null;a.stopDelay=null;a.stopInterval=null;return a}l(k,c);h=k;k.prototype.readCurrentTimeExtent=function(a,c){if(a)return new b({start:null!=a[0]?new Date(a[0]):null,end:null!=a[1]?new Date(a[1]):null})};k.prototype.writeCurrentTimeExtent=function(a,b,c){a&&r.setDeepValue(c,[a.start?a.start.getTime():null,a.end?a.end.getTime():null],b)};k.prototype.readFullTimeExtent=
function(a,c){if(a=c.properties)return new b({start:null!=a.startTime?new Date(a.startTime):null,end:null!=a.endTime?new Date(a.endTime):null})};k.prototype.writeFullTimeExtent=function(a,b){if(a){b=b.properties=b.properties||{};var c=a.end;a=a.start;c&&(b.endTime=c?c.getTime():null);a&&(b.startTime=a?a.getTime():null)}};k.prototype.readStopInterval=function(a,b,c){return a?d.fromJSON({value:a.interval,unit:a.units},c):null};k.prototype.writeStopInterval=function(a,b,c,d){a&&(a=a.toJSON(d),r.setDeepValue(c,
{interval:a.value,units:a.unit},b))};k.prototype.clone=function(){return new h(f.clone({currentTimeExtent:this.currentTimeExtent,fullTimeExtent:this.fullTimeExtent,numStops:this.numStops,numThumbs:this.numThumbs,stopDelay:this.stopDelay,stopInterval:this.stopInterval}))};var h;a([g.property({type:b,json:{read:{source:"properties.currentTimeExtent"},write:{target:"properties.currentTimeExtent"}}})],k.prototype,"currentTimeExtent",void 0);a([g.reader("currentTimeExtent")],k.prototype,"readCurrentTimeExtent",
null);a([g.writer("currentTimeExtent")],k.prototype,"writeCurrentTimeExtent",null);a([g.property({type:b,json:{read:{source:["properties.endTime","properties.startTime"]},write:{target:{"properties.endTime":{type:Number},"properties.startTime":{type:Number}}}}})],k.prototype,"fullTimeExtent",void 0);a([g.reader("fullTimeExtent")],k.prototype,"readFullTimeExtent",null);a([g.writer("fullTimeExtent")],k.prototype,"writeFullTimeExtent",null);a([g.property({type:Number,json:{read:{source:"properties.numberOfStops"},
write:{target:"properties.numberOfStops",overridePolicy:function(){var a=!!this.stopInterval;return{enabled:!a,isRequired:!a}}}}})],k.prototype,"numStops",void 0);a([g.property({type:[1,2],nonNullable:!0,json:{read:{source:"properties.thumbCount"},write:{target:"properties.thumbCount",isRequired:!0}}})],k.prototype,"numThumbs",void 0);a([g.property({type:Number,nonNullable:!0,json:{read:{source:"properties.thumbMovingRate"},write:{target:"properties.thumbMovingRate",isRequired:!0}}})],k.prototype,
"stopDelay",void 0);a([g.property({type:d,json:{read:{source:"properties.timeStopInterval"},write:{target:"properties.timeStopInterval",overridePolicy:function(){return{isRequired:null==this.numStops}}}}})],k.prototype,"stopInterval",void 0);a([g.reader("stopInterval")],k.prototype,"readStopInterval",null);a([g.writer("stopInterval")],k.prototype,"writeStopInterval",null);return k=h=a([g.subclass("esri.webdoc.widgets.TimeSlider")],k)}(g.declared(c.JSONSupport))})},"esri/webdoc/support/thumbnailUtils":function(){define(["require",
"exports"],function(p,m){Object.defineProperty(m,"__esModule",{value:!0});var l={width:600,height:400};m.getOptimalThumbnailSize=function(a,b){b=b||l;var d=b.width;b=b.height;var c=d/b;1.5>c?b=d/1.5:1.5<c&&(d=1.5*b);d>a.width&&(b*=a.width/d,d=a.width);b>a.height&&(d*=a.height/b,b=a.height);return{width:Math.round(d),height:Math.round(b)}}})},"esri/webmap/ApplicationProperties":function(){define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators ../webdoc/applicationProperties/Viewing".split(" "),
function(p,m,l,a,b,d,c,f){return function(b){function g(a){a=b.call(this,a)||this;a.editing=null;a.offline=null;a.viewing=null;return a}l(g,b);h=g;g.prototype.clone=function(){return new h(d.clone({editing:this.editing,offline:this.offline,viewing:this.viewing}))};var h;a([c.property({json:{write:!0}})],g.prototype,"editing",void 0);a([c.property({json:{write:!0}})],g.prototype,"offline",void 0);a([c.property({type:f,json:{write:!0}})],g.prototype,"viewing",void 0);return g=h=a([c.subclass("esri.webmap.ApplicationProperties")],
g)}(c.declared(b.JSONSupport))})},"esri/webdoc/applicationProperties/Viewing":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ./Search".split(" "),function(p,m,l,a,b,d,c,f){return function(b){function g(a){a=b.call(this,a)||this;a.search=null;return a}l(g,b);h=g;g.prototype.clone=function(){return new h(d.clone({search:this.search}))};var h;a([c.property({type:f,
json:{write:!0}})],g.prototype,"search",void 0);return g=h=a([c.subclass("esri.webdoc.applicationProperties.Viewing")],g)}(c.declared(b.JSONSupport))})},"esri/webdoc/applicationProperties/Search":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Collection ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ./SearchLayer".split(" "),function(p,m,l,a,b,d,c,f,r){var g=b.ofType(r);return function(b){function d(a){a=
b.call(this,a)||this;a.addressSearchEnabled=!0;a.enabled=!0;a.hintText=null;a.layers=new g;return a}l(d,b);h=d;d.prototype.readAddressSearchEnabled=function(a,b){return!a};d.prototype.writeAddressSearchEnabled=function(a,b,c){b[c]=!a};d.prototype.clone=function(){return new h(c.clone({addressSearchEnabled:this.addressSearchEnabled,enabled:this.enabled,hintText:this.hintText,layers:this.layers}))};var h;a([f.property({type:Boolean,json:{read:{source:"disablePlaceFinder"},write:{target:"disablePlaceFinder"},
default:!0,origins:{"web-scene":{read:!1,write:!1}}}})],d.prototype,"addressSearchEnabled",void 0);a([f.reader("addressSearchEnabled")],d.prototype,"readAddressSearchEnabled",null);a([f.writer("addressSearchEnabled")],d.prototype,"writeAddressSearchEnabled",null);a([f.property({type:Boolean,json:{write:!0,default:!0}})],d.prototype,"enabled",void 0);a([f.property({type:String,json:{write:!0}})],d.prototype,"hintText",void 0);a([f.property({type:g,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,
"layers",void 0);return d=h=a([f.subclass("esri.webdoc.applicationProperties.Search")],d)}(f.declared(d.JSONSupport))})},"esri/webdoc/applicationProperties/SearchLayer":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ./SearchLayerField".split(" "),function(p,m,l,a,b,d,c,f,r){return function(b){function h(a){a=b.call(this,
a)||this;a.field=null;a.id=null;a.subLayer=null;return a}l(h,b);g=h;h.prototype.clone=function(){return new g(d.clone({field:this.field,id:this.id,subLayer:this.subLayer}))};var g;a([c.property({type:r,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"field",void 0);a([c.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"id",void 0);a([c.property({type:f.Integer,json:{write:!0}})],h.prototype,"subLayer",void 0);return h=g=a([c.subclass("esri.webdoc.applicationProperties.SearchLayer")],
h)}(c.declared(b.JSONSupport))})},"esri/webdoc/applicationProperties/SearchLayerField":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators ../../layers/support/fieldType".split(" "),function(p,m,l,a,b,d,c){return function(b){function f(a){a=b.call(this,a)||this;a.exactMatch=!1;a.name=null;a.type=null;return a}l(f,b);g=f;f.prototype.clone=function(){return new g({exactMatch:this.exactMatch,
type:this.type,name:this.name})};var g;a([d.property({type:Boolean,json:{write:!0}})],f.prototype,"exactMatch",void 0);a([d.property({type:String,json:{write:!0}})],f.prototype,"name",void 0);a([d.enumeration.serializable()(c.kebabDict)],f.prototype,"type",void 0);return f=g=a([d.subclass("esri.webdoc.applicationProperties.SearchLayerField")],f)}(d.declared(b.JSONSupport))})},"esri/webmap/Bookmark":function(){define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Identifiable ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators ../core/accessorSupport/ensureType ../geometry/Extent ../webdoc/support/Thumbnail".split(" "),
function(p,m,l,a,b,d,c,f,r,g,h){return function(b){function d(a){a=b.call(this)||this;a.extent=null;a.name=null;a.thumbnail=new h.default;return a}l(d,b);k=d;d.prototype.castThumbnail=function(a){return"string"===typeof a?new h.default({url:a}):r.ensureType(h.default,a)};d.prototype.clone=function(){return new k(c.clone({extent:this.extent,name:this.name,thumbnail:this.thumbnail}))};var k;a([f.property({type:g,nonNullable:!0,json:{write:{isRequired:!0}}})],d.prototype,"extent",void 0);a([f.property({type:String,
nonNullable:!0,json:{write:{isRequired:!0}}})],d.prototype,"name",void 0);a([f.property({type:h.default,json:{write:{overridePolicy:function(a){return{enabled:!(!a||!a.url)}}}}})],d.prototype,"thumbnail",void 0);a([f.cast("thumbnail")],d.prototype,"castThumbnail",null);return d=k=a([f.subclass("esri.webmap.Bookmark")],d)}(f.declared(b.IdentifiableMixin(d.JSONSupport)))})},"esri/webdoc/support/Thumbnail":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),
function(p,m,l,a,b,d){Object.defineProperty(m,"__esModule",{value:!0});p=function(b){function c(){var a=null!==b&&b.apply(this,arguments)||this;a.url="";return a}l(c,b);m=c;c.prototype.clone=function(){return new m({url:this.url})};var m;a([d.property({type:String,json:{write:{isRequired:!0}}})],c.prototype,"url",void 0);return c=m=a([d.subclass("esri.webdoc.support.Thumbnail")],c)}(d.declared(b.JSONSupport));m.default=p})},"esri/webmap/InitialViewProperties":function(){define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../Viewpoint ../core/Accessor ../core/lang ../core/accessorSupport/decorators ../geometry/SpatialReference ../webdoc/RangeInfo ./background/ColorBackground".split(" "),
function(p,m,l,a,b,d,c,f,r,g,h){return function(d){function k(a){a=d.call(this,a)||this;a.background=null;a.rangeInfo=null;a.spatialReference=null;a.viewpoint=null;return a}l(k,d);m=k;k.prototype.clone=function(){return new m(c.clone({background:this.background,rangeInfo:this.rangeInfo,spatialReference:this.spatialReference,viewpoint:this.viewpoint}))};var m;a([f.property({type:h})],k.prototype,"background",void 0);a([f.property({type:g})],k.prototype,"rangeInfo",void 0);a([f.property({type:r})],
k.prototype,"spatialReference",void 0);a([f.property({type:b})],k.prototype,"viewpoint",void 0);return k=m=a([f.subclass("esri.webmap.InitialViewProperties")],k)}(f.declared(d))})},"esri/webmap/background/ColorBackground":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../Color ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators".split(" "),function(p,m,l,a,b,d,c,f,r){return function(b){function c(a){a=
b.call(this)||this;a.color=new d([0,0,0,1]);return a}l(c,b);g=c;c.prototype.clone=function(){return new g(f.clone({color:this.color}))};var g;a([r.property({type:d,json:{write:!0}})],c.prototype,"color",void 0);return c=g=a([r.subclass("esri.webmap.background.ColorBackground")],c)}(r.declared(c.JSONSupport))})},"esri/webmap/Version":function(){define(["require","exports","../core/tsSupport/extendsHelper","../core/Version"],function(p,m,l,a){Object.defineProperty(m,"__esModule",{value:!0});p=function(a){function b(b,
d){return a.call(this,b,d,"webmap")||this}l(b,a);return b}(a.Version);m.Version=p;m.default=p})},"esri/core/Version":function(){define(["require","exports","./Error"],function(p,m,l){Object.defineProperty(m,"__esModule",{value:!0});p=function(){function a(a,d,c){void 0===c&&(c="");this.major=a;this.minor=d;this._context=c}a.prototype.lessThan=function(a,d){return this.major<a||a===this.major&&this.minor<d};a.prototype.since=function(a,d){return!this.lessThan(a,d)};a.prototype.validate=function(a){if(this.major!==
a.major)throw new l((this._context&&this._context+":")+"unsupported-version","Required major "+(this._context&&this._context+" ")+"version is '"+this.major+"', but got '${version.major}.${version.minor}'",{version:a});};a.prototype.clone=function(){return new a(this.major,this.minor,this._context)};a.parse=function(b,d){void 0===d&&(d="");var c=b.split("."),f=c[0],c=c[1],m=/^\s*\d+\s*$/;if(!f||!f.match||!f.match(m))throw new l((d&&d+":")+"invalid-version","Expected major version to be a number, but got '${version}'",
{version:b});if(!c||!c.match||!c.match(m))throw new l((d&&d+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:b});b=parseInt(f,10);f=parseInt(c,10);return new a(b,f,d)};return a}();m.Version=p})},"*noref":1}});
define("require exports ./core/tsSupport/assignHelper ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./core/tsSupport/generatorHelper ./core/tsSupport/awaiterHelper ./core/tsSupport/paramHelper ./kernel ./Map ./Viewpoint ./core/arrayUtils ./core/asyncUtils ./core/Collection ./core/Error ./core/JSONSupport ./core/Loadable ./core/loadAll ./core/Logger ./core/maybe ./core/Promise ./core/promiseUtils ./core/urlUtils ./core/watchUtils ./core/accessorSupport/decorators ./core/accessorSupport/originUtils ./core/accessorSupport/read ./geometry/SpatialReference ./geometry/support/webMercatorUtils ./portal/Portal ./portal/PortalItem ./tasks/support/ProjectParameters ./webdoc/RangeInfo ./webdoc/Widgets ./webdoc/support/thumbnailUtils ./webdoc/support/writeUtils ./webmap/ApplicationProperties ./webmap/Bookmark ./webmap/InitialViewProperties ./webmap/Version ./webmap/background/ColorBackground @dojo/framework/shim/Promise".split(" "),function(p,
m,l,a,b,d,c,f,r,g,h,k,x,L,t,E,M,N,O,P,Q,u,v,R,q,S,T,D,F,y,G,H,I,U,V,W,X,Y,z,A,J){var B=new A.default(2,15),K=L.ofType(Y),C=O.getLogger("esri.WebMap"),w=new Map;w.set("image/jpeg","jpeg");w.set("image/jpg","jpg");w.set("image/png","png");w.set("image/gif","gif");return function(g){function e(a){a=g.call(this)||this;a.applicationProperties=null;a.bookmarks=new K;a.initialViewProperties=new z;a.portalItem=null;a.presentation=null;a.sourceVersion=null;a.tables=null;a.widgets=null;a.authoringApp=a.authoringAppVersion=
null;a._isAuthoringAppSetByUser=a._isAuthoringAppVersionSetByUser=!1;return a}a(e,g);e.prototype.initialize=function(){this.when().catch(function(a){C.error("#load()","Failed to load web map",a)});if(this.resourceInfo){var a=void 0;try{a=this._validateJSON(this.resourceInfo)}catch(Z){this.addResolvingPromise(u.reject(Z));return}this.read(a)}};Object.defineProperty(e.prototype,"authoringApp",{set:function(a){this._isAuthoringAppSetByUser=!0;this._set("authoringApp",a)},enumerable:!0,configurable:!0});
e.prototype.writeAuthoringApp=function(a,b){b.authoringApp=a&&this._isAuthoringAppSetByUser?a:"ArcGIS API for JavaScript"};Object.defineProperty(e.prototype,"authoringAppVersion",{set:function(a){this._isAuthoringAppVersionSetByUser=!0;this._set("authoringAppVersion",a)},enumerable:!0,configurable:!0});e.prototype.writeAuthoringAppVersion=function(a,b){b.authoringAppVersion=a&&this._isAuthoringAppVersionSetByUser?a:r.version};e.prototype.readInitialViewProperties=function(a,b){a=new z;b.background&&
(a.background=J.fromJSON(b.background));b.mapRangeInfo&&(a.rangeInfo=I.fromJSON(b.mapRangeInfo));b.spatialReference&&(a.spatialReference=D.fromJSON(b.spatialReference));return a};e.prototype.writeInitialViewProperties=function(a,b,c,d){a&&((c=a.background)&&c.color&&(b.background=c.write(null,d)),a.rangeInfo&&(b.mapRangeInfo=a.rangeInfo.toJSON(d)),a.spatialReference&&(b.spatialReference=a.spatialReference.write(null,d)))};e.prototype.writeLayers=function(a,b,c,d){var n=this;d=l({},d,{layerContainerType:"operational-layers"});
a=a.map(function(a){return W.getLayerJSON(a,n._getLayerJSONFromResourceInfo(a),d)}).filter(function(a){return!!a});b[c]=a.toArray()};e.prototype.readSourceVersion=function(a,b){a=b.version.split(".");b=a[1];return new A.default(parseInt(a[0],10),parseInt(b,10))};e.prototype.writeSourceVersion=function(a,b,c){b[c]=B.major+"."+B.minor};Object.defineProperty(e.prototype,"thumbnailUrl",{get:function(){return this.portalItem&&this.portalItem.thumbnailUrl||null},set:function(a){a?(this._override("thumbnailUrl",
a),this._thumbnailFilename=this._generateCustomThumbnailFilename(a)):this._clearThumbnailOverride()},enumerable:!0,configurable:!0});e.prototype.load=function(a){this.addResolvingPromise(this._loadFromSource());return this.when()};e.prototype.loadAll=function(){var a=this;return x.safeCast(N.loadAll(this,function(b){b(a.ground,a.basemap,a.layers)}))};e.prototype.read=function(a,b){var n=this;b=l({},b,{origin:"web-map"});var c=this._getAuthoringPropsState(),d=arguments;T.readLoadable(this,a,function(b){return n.inherited(d,
[a,b])},b);this._restoreAuthoringPropsFromState(c)};e.prototype.write=function(a,b){if("loaded"!==this.loadStatus){var n=new t("webmap:not-loaded","Web map must be loaded before it can be serialized");C.error("#toJSON()","Web map must be loaded before it can be serialized",this.loadError||this.loadStatus);throw n;}this._removeDanglingLayerRefs();b=l({},b,{origin:"web-map",restrictedWebMapWriting:!0});return this.inherited(arguments,[a,b])};e.prototype.save=function(a){return c(this,void 0,void 0,
function(){var b,n,c;return d(this,function(d){switch(d.label){case 0:return a=a||{},this._validateItem(),[4,this.load()];case 1:return d.sent(),[4,this._loadLayerContainers()];case 2:return d.sent(),b=this.portalItem,n={origin:"web-map",messages:[],writtenProperties:[],url:b.itemUrl&&v.urlToObject(b.itemUrl),portal:b.portal||y.getDefault()},c=this.write(null,n),this._validateJSONForWriting(n,a),[4,this._updateItemProperties(b)];case 3:return d.sent(),[4,this._updateItem(b,c,n)];case 4:return d.sent(),
[4,this._updateItemThumbnail()];case 5:return d.sent(),[2,b]}})})};e.prototype.saveAs=function(a,b){return c(this,void 0,void 0,function(){var n,c,e;return d(this,function(d){switch(d.label){case 0:return b=b||{},a=this._getPortalItem(a),[4,this.load()];case 1:return d.sent(),[4,this._loadLayerContainers()];case 2:return d.sent(),n={origin:"web-map",messages:[],writtenProperties:[],url:null,portal:a.portal},c=this.write(null,n),this._validateJSONForWriting(n,b),[4,this._updateItemProperties(a)];case 3:return d.sent(),
e=this._getThumbnailState(),[4,this._createItem(a,c,n,b)];case 4:return d.sent(),this._restoreThumbnailFromState(e),[4,this._updateItemThumbnail()];case 5:return d.sent(),[2,a]}})})};e.prototype.updateFrom=function(a,b){return c(this,void 0,void 0,function(){return d(this,function(n){switch(n.label){case 0:return b=b||{},[4,R.whenTrueOnce(a,"ready")];case 1:return n.sent(),this._updateInitialViewProperties(a,b),[4,this._updateThumbnailUrl(a,b)];case 2:return n.sent(),[2]}})})};e.prototype._loadFromSource=
function(){return this.resourceInfo?this._loadFromJSON(this.resourceInfo,{origin:"web-map"}):this.portalItem&&this.portalItem.id?this._loadFromItem(this.portalItem):u.resolve(null)};e.prototype._loadFromItem=function(a){var b=this;return a.load().catch(function(a){throw new t("webmap:load-portal-item","Failed to load portal item",{error:a});}).then(function(){if("Web Map"!==a.type)throw new t("webmap:invalid-portal-item","Invalid portal item type '${type}', expected 'Web Map'",{type:a.type});}).then(function(){return a.fetchData()}).then(function(n){b.resourceInfo=
n;return b._readAndLoadFromJSON(n,{origin:"web-map",portal:a.portal||y.getDefault()})}).then(function(){return x.safeCast(b._getInitialExtent())}).then(function(a){if(a){var n=b.initialViewProperties?b.initialViewProperties.clone():new z;n.viewpoint=new h;n.viewpoint.targetGeometry=a;b.initialViewProperties=n}})};e.prototype._readAndLoadFromJSON=function(a,b){a=this._validateJSON(a);this.read(a,b);return this._loadFromJSON(a,b)};e.prototype._validateJSON=function(a){var b=A.default.parse(a.version||
"","webmap");B.validate(b);a.version=b.major+"."+b.minor;return a};e.prototype._loadFromJSON=function(a,b){var n=this,d={context:l({},b,{layerContainerType:"operational-layers"})};this.portalItem&&(d.context.portal=this.portalItem.portal||y.getDefault());return u.create(function(a){return p(["./portal/support/layersCreator"],a)}).then(function(b){var c=[],e=a.operationalLayers;e&&e.length&&c.push(x.safeCast(b.populateOperationalLayers(n.layers,e,d)));return u.eachAlways(c).then(function(){})})};e.prototype._getInitialExtent=
function(){return c(this,void 0,void 0,function(){var a,b,c;return d(this,function(d){switch(d.label){case 0:return a=this.initialViewProperties&&this.initialViewProperties.spatialReference,b=this.portalItem&&this.portalItem.extent,a&&b?a.isWGS84?[2,b.clone()]:a.isWebMercator?[2,F.geographicToWebMercator(b)]:[4,new Promise(function(a,b){p(["./portal/support/geometryServiceUtils"],a,b)})]:[3,2];case 1:return c=d.sent(),[2,x.safeCast(c.create(this.portalItem)).then(function(d){var c=new H;c.geometries=
[b];c.outSpatialReference=a;return d.project(c)}).then(function(a){return a[0]}).catch(function(a){C.error("Error projecting item's extent:",a);return null})];case 2:return[2,null]}})})};e.prototype._getLayerJSONFromResourceInfo=function(a){var b=this.get("resourceInfo.operationalLayers");return P.isSome(b)?k.find(b,function(b){return b.id===a.id}):null};e.prototype._removeDanglingLayerRefs=function(){var a=this,b=function(b){return!!a.allLayers.find(function(a){return a.id===b})},c=this.applicationProperties,
d=c&&c.viewing&&c.viewing.search;d&&d.layers&&(d.layers=d.layers.filter(function(a){return b(a.id)}));(d=c&&c.editing&&c.editing.locationTracking)&&d.info&&!b(d.info.layerId)&&(c.editing=null);(c=this.presentation&&this.presentation.slides)&&c.forEach(function(a){a.visibleLayers&&(a.visibleLayers=a.visibleLayers.filter(function(a){return b(a.id)}))})};e.prototype._validateItem=function(){if(!this.portalItem)throw C.error("save: requires the portalItem property to be set"),new t("webmap:portal-item-not-set",
"Portal item to save to has not been set on the WebMap");this._validateItemType(this.portalItem)};e.prototype._validateItemType=function(a){if("Web Map"!==a.type)throw new t("webmap:portal-item-wrong-type",'Portal item needs to have type "Web Map"');};e.prototype._loadLayerContainers=function(){var a=[];this.basemap&&a.push(this.basemap.load());this.ground&&a.push(this.ground.load());return u.eachAlways(a).then(function(){})};e.prototype._validateJSONForWriting=function(a,b){a=a.messages.filter(function(a){return"error"===
a.type}).map(function(a){return new t(a.name,a.message,a.details)});b.ignoreUnsupported&&(a=a.filter(function(a){return"layer:unsupported"!==a.name&&"symbol:unsupported"!==a.name&&"symbol-layer:unsupported"!==a.name&&"property:unsupported"!==a.name&&"url:unsupported"!==a.name}));if(0<a.length)throw new t("webmap:save","Failed to save webmap due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a});};e.prototype._updateItemProperties=function(a){return c(this,
void 0,void 0,function(){var b;return d(this,function(c){switch(c.label){case 0:return b=a,[4,this._getWGS84Extent(this.initialViewProperties.viewpoint.targetGeometry)];case 1:return b.extent=c.sent(),this._updateTypeKeywords(a),[2]}})})};e.prototype._getWGS84Extent=function(a){return c(this,void 0,void 0,function(){var b,c,n,e,f;return d(this,function(d){switch(d.label){case 0:return b=a.spatialReference,b.isWGS84?[2,a.clone()]:b.isWebMercator?[2,F.webMercatorToGeographic(a)]:[4,new Promise(function(a,
b){p(["./portal/support/geometryServiceUtils"],a,b)})];case 1:return c=d.sent(),[4,c.create(this.portalItem)];case 2:return n=d.sent(),e=new H,e.geometries=[a],e.outSpatialReference=D.WGS84,[4,n.project(e)];case 3:return f=d.sent(),[2,f[0]]}})})};e.prototype._updateTypeKeywords=function(a){this._addTypeKeyword(a,"ArcGIS API for JavaScript");a.typeKeywords&&(a.typeKeywords=a.typeKeywords.filter(function(a,b,c){return c.indexOf(a)===b}))};e.prototype._addTypeKeyword=function(a,b){var c=a.typeKeywords;
c?-1===c.indexOf(b)&&c.push(b):a.typeKeywords=[b]};e.prototype._updateItem=function(a,b,e){return c(this,void 0,void 0,function(){return d(this,function(c){switch(c.label){case 0:return[4,a.update({data:b})];case 1:return c.sent(),this._syncUpInstanceWithItem(a,b,e),[2]}})})};e.prototype._createItem=function(a,b,e,f){return c(this,void 0,void 0,function(){return d(this,function(c){switch(c.label){case 0:return[4,a.portal._signIn()];case 1:return c.sent(),[4,a.portal.user.addItem({item:a,folder:f.folder,
data:b})];case 2:return c.sent(),this.portalItem=a,this._syncUpInstanceWithItem(a,b,e),[2]}})})};e.prototype._syncUpInstanceWithItem=function(a,b,c){E.JSONSupport.prototype.read.call(this,{version:b.version,authoringApp:b.authoringApp,authoringAppVersion:b.authoringAppVersion},{origin:"web-map",ignoreDefaults:!0,url:a.itemUrl&&v.urlToObject(a.itemUrl)});S.updateOrigins(c);this.resourceInfo=b};e.prototype._updateItemThumbnail=function(){return c(this,void 0,void 0,function(){return d(this,function(a){switch(a.label){case 0:return this.thumbnailUrl&&
this._isOverridden("thumbnailUrl")?[4,this.portalItem.updateThumbnail({thumbnail:this.thumbnailUrl,filename:this._thumbnailFilename})]:[3,2];case 1:a.sent(),this._clearThumbnailOverride(),a.label=2;case 2:return[2]}})})};e.prototype._getPortalItem=function(a){a.id&&(a=a.clone(),a.id=null);a.type||(a.type="Web Map");a.portal||(a.portal=y.getDefault());this._validateItemType(a);return a};e.prototype._updateInitialViewProperties=function(a,b){this.initialViewProperties.spatialReference=a.spatialReference.clone();
b.viewpointExcluded||(this.initialViewProperties.viewpoint=new h({targetGeometry:this._getViewExtent(a)}))};e.prototype._getViewExtent=function(a){a=a.extent.clone().normalize();var b;if(1<a.length)for(var c=0;c<a.length;c++){var d=a[c];b?d.width>b.width&&(b=d):b=d}else b=a[0];return b};e.prototype._updateThumbnailUrl=function(a,b){return c(this,void 0,void 0,function(){var c,e;return d(this,function(d){switch(d.label){case 0:if(b.thumbnailExcluded)return[2];c=V.getOptimalThumbnailSize(a,b.thumbnailSize);
return[4,a.takeScreenshot({format:"png",width:c.width,height:c.height})];case 1:return e=d.sent(),this._setAutoGeneratedThumbnail(e.dataUrl),[2]}})})};e.prototype._setAutoGeneratedThumbnail=function(a){this.thumbnailUrl=a;this._thumbnailFilename=null};e.prototype._clearThumbnailOverride=function(){this._clearOverride("thumbnailUrl");this._thumbnailFilename=null};e.prototype._generateCustomThumbnailFilename=function(a){if(v.isDataProtocol(a)){a=(a=(a=v.dataComponents(a))&&a.mediaType)&&w.get(a.toLowerCase())||
null;var b="thumbnail"+Date.now();return a?b+"."+a:b}return null};e.prototype._getThumbnailState=function(){var a=this.thumbnailUrl;a&&(a=this._isOverridden("thumbnailUrl")?a:v.addQueryParameter(a,"w","8192"));return{thumbnailUrl:a,filename:this._thumbnailFilename}};e.prototype._restoreThumbnailFromState=function(a){this.thumbnailUrl=a.thumbnailUrl;this._thumbnailFilename=a.filename};e.prototype._getAuthoringPropsState=function(){return{authoringApp:this.authoringApp,authoringAppVersion:this.authoringAppVersion,
isAuthoringAppSetByUser:this._isAuthoringAppSetByUser,isAuthoringAppVersionSetByUser:this._isAuthoringAppVersionSetByUser}};e.prototype._restoreAuthoringPropsFromState=function(a){a.isAuthoringAppSetByUser?this.authoringApp=a.authoringApp:this._isAuthoringAppSetByUser=!1;a.isAuthoringAppVersionSetByUser?this.authoringAppVersion=a.authoringAppVersion:this._isAuthoringAppVersionSetByUser=!1};e.fromJSON=function(a){if(!a)throw new t("webmap:empty-resource","Expected a JSON resource but got nothing");
return new this({resourceInfo:a})};e.VERSION=B;b([q.property({type:X,json:{write:!0}})],e.prototype,"applicationProperties",void 0);b([q.property({type:String,json:{write:{allowNull:!0}}})],e.prototype,"authoringApp",null);b([q.writer("authoringApp")],e.prototype,"writeAuthoringApp",null);b([q.property({type:String,json:{write:{allowNull:!0}}})],e.prototype,"authoringAppVersion",null);b([q.writer("authoringAppVersion")],e.prototype,"writeAuthoringAppVersion",null);b([q.property({json:{read:{source:"baseMap"},
write:{target:"baseMap"}}})],e.prototype,"basemap",void 0);b([q.property({type:K,json:{write:{overridePolicy:function(a){return{enabled:!!(a&&0<a.length)}}}}})],e.prototype,"bookmarks",void 0);b([q.property({type:z,nonNullable:!0,json:{read:{source:["background","mapRangeInfo","spatialReference"]},write:{target:{background:{type:J},mapRangeInfo:{type:I},spatialReference:{type:D}}}}})],e.prototype,"initialViewProperties",void 0);b([q.reader("initialViewProperties")],e.prototype,"readInitialViewProperties",
null);b([q.writer("initialViewProperties")],e.prototype,"writeInitialViewProperties",null);b([q.property({json:{write:{target:"operationalLayers"}}})],e.prototype,"layers",void 0);b([q.writer("layers")],e.prototype,"writeLayers",null);b([q.property({type:G})],e.prototype,"portalItem",void 0);b([q.property({json:{write:!0}})],e.prototype,"presentation",void 0);b([q.property()],e.prototype,"resourceInfo",void 0);b([q.property({readOnly:!0,type:A.default,json:{read:{source:"version"},write:{allowNull:!0,
target:"version",isRequired:!0}}})],e.prototype,"sourceVersion",void 0);b([q.reader("sourceVersion")],e.prototype,"readSourceVersion",null);b([q.writer("sourceVersion")],e.prototype,"writeSourceVersion",null);b([q.property()],e.prototype,"tables",void 0);b([q.property({dependsOn:["portalItem.thumbnailUrl"]})],e.prototype,"thumbnailUrl",null);b([q.property({type:U,json:{write:!0}})],e.prototype,"widgets",void 0);b([f(0,q.cast(G))],e.prototype,"saveAs",null);return e=b([q.subclass("esri.WebMap")],e)}(q.declared(E.JSONSupportMixin(M.LoadableMixin(Q.EsriPromiseMixin(g)))))});