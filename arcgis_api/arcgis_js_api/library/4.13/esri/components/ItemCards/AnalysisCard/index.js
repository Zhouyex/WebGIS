// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("../../Component dojo/i18n!../../ItemCards/nls/resources dojo/date/locale ../../Loaders/LoaderIcon ../../Dropdowns/Ago2018Dropdown ../../Badges/Authoritative ../../Badges/Collaboration ../../Badges/Deprecated ../../Badges/LivingAtlas ../../Badges/Marketplace ../../Badges/OpenData ../../Badges/Premium ../../Badges/Subscriber".split(" "),function(n,p,q,r,t,v,w,x,y,z,A,B,C){return function(c){function d(g){if(a[g])return a[g].exports;var f=a[g]={i:g,l:!1,exports:{}};return c[g].call(f.exports,
f,f.exports,d),f.l=!0,f.exports}var a={};return d.m=c,d.c=a,d.d=function(a,c,h){d.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:h})},d.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})},d.t=function(a,c){if((1&c&&(a=d(a)),8&c)||4&c&&"object"==typeof a&&a&&a.__esModule)return a;var f=Object.create(null);if(d.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:a}),
2&c&&"string"!=typeof a)for(var e in a)d.d(f,e,function(e){return a[e]}.bind(null,e));return f},d.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return d.d(c,"a",c),c},d.o=function(a,c){return Object.prototype.hasOwnProperty.call(a,c)},d.p="",d(d.s=400)}({0:function(c,d,a){function g(a,c){function b(){this.constructor=a}f(a,c);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)}a.d(d,"b",function(){return g});a.d(d,"a",function(){return h});
var f=function(a,c){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])})(a,c)},h=function(){return(h=Object.assign||function(a){for(var c,b=1,e=arguments.length;b<e;b++)for(var d in c=arguments[b])Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a}).apply(this,arguments)}},16:function(c,d,a){function g(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];return function(c){return a.reduceRight(function(a,
b){return b(a)},c)}}a.d(d,"a",function(){return g})},17:function(c,d){c.exports=p},21:function(c,d,a){a.d(d,"a",function(){return l});a.d(d,"b",function(){return u});var g=a(16);c=a(23);var f=a(34),h=a(33),e=a(32),k=a(31),b=a(30),l=function(a,c,d){return Object(g.a)(Object(b.a)(a),Object(k.a)(a),Object(e.a)(c),h.a,f.a)(d)},u=Object(g.a)(Object(c.d)("patchedDescription"),Object(c.d)("thumbURI"),Object(c.d)("iconURI"),Object(c.d)("displayName"),Object(c.d)("badges"))},23:function(c,d,a){function g(b){return 0===
Object.keys(b).length&&b.constructor===Object}function f(a,c){return b.apply(null,arguments)}function h(b,a){return l.apply(null,arguments)}a.d(d,"a",function(){return g});a.d(d,"d",function(){return k});a.d(d,"b",function(){return f});a.d(d,"c",function(){return h});var e=a(0);c=a(5);var k=Object(c.a)(function(b,a){a=e.a({},a);return delete a[b],a}),b=Object(c.a)(function(b,a){return Object.keys(a).reduce(function(c,e){return c[e]=b(a[e],e,a),c},{})}),l=Object(c.a)(function(b,a){return Object.keys(a).reduce(function(c,
e){return b(a[e],e,a)&&(c[e]=a[e]),c},{})})},24:function(c,d){c.exports=q},30:function(c,d,a){a.d(d,"a",function(){return f});var g=a(0);c=a(5);var f=Object(c.a)(function(a,c){return g.a({},c,{thumbURI:function(a,b){var c=a.baseUrl+"/home/js/arcgisonline/css/images/default_thumb.png";return b.thumbnail&&(c=a.restUrl+"/content/items/"+b.id+"/info/"+b.thumbnail+(a.credential?"?token\x3d"+a.credential.token:"")),c}(a,c)})})},31:function(c,d,a){a.d(d,"a",function(){return f});var g=a(0);c=a(5);var f=
Object(c.a)(function(a,c){return g.a({},c,{patchedDescription:function(a,b){return b.description?b.description.replace(/src=('|")js\/jsapi\/esri\//g,function(b){return"src\x3d"+('"'===b[4]?'"':"'")+a.baseUrl+"/home/js/jsapi/esri/"}):void 0}(a,c)})})},32:function(c,d,a){a.d(d,"a",function(){return f});var g=a(0);c=a(5);var f=Object(c.a)(function(a,c){return g.a({},c,{iconURI:function(a,b,c){var d;b=b&&b.toLowerCase();var e=!1,f=!1,k=!1,g=!1;if(0<b.indexOf("service")||"feature collection"===b||"kml"===
b||"wms"===b||"wmts"===b||"wfs"===b){var h=-1<c.indexOf("Hosted Service");"feature service"===b||"feature collection"===b||"kml"===b||"wfs"===b?(g=-1<c.indexOf("Table"),e=-1<c.indexOf("Route Layer"),f=-1<c.indexOf("Markup"),d=(k=-1!==c.indexOf("Spatiotemporal"))&&g?"spatiotemporaltable":g?"table":e?"routelayer":f?"markup":k?"spatiotemporal":h?"featureshosted":"features"):d="map service"===b||"wms"===b||"wmts"===b?h||-1<c.indexOf("Tiled")||"wmts"===b?"maptiles":"mapimages":"scene service"===b?-1<c.indexOf("Line")?
"sceneweblayerline":-1<c.indexOf("3DObject")?"sceneweblayermultipatch":-1<c.indexOf("Point")?"sceneweblayerpoint":-1<c.indexOf("IntegratedMesh")?"sceneweblayermesh":-1<c.indexOf("PointCloud")?"sceneweblayerpointcloud":-1<c.indexOf("Polygon")?"sceneweblayerpolygon":-1<c.indexOf("Building")?"sceneweblayerbuilding":"sceneweblayer":"image service"===b?-1<c.indexOf("Elevation 3D Layer")?"elevationlayer":"imagery":"stream service"===b?"streamlayer":"vector tile service"===b?"vectortile":"datastore catalog service"===
b?"datastorecollection":"geocoding service"===b?"geocodeservice":"geoprocessing service"===b&&-1<c.indexOf("Web Tool")?"tool":"layers"}else d="web map"===b||"cityengine web scene"===b?"maps":"web scene"===b?-1<c.indexOf("ViewingMode-Local")?"webscenelocal":"websceneglobal":"web mapping application"===b||"mobile application"===b||"application"===b||"operation view"===b||"desktop application"===b?"apps":"map document"===b||"map package"===b||"published map"===b||"scene document"===b||"globe document"===
b||"basemap package"===b||"mobile basemap package"===b||"mobile map package"===b||"project package"===b||"project template"===b||"pro map"===b||"layout"===b||"layer"===b&&-1<c.indexOf("ArcGIS Pro")||"explorer map"===b&&-1<c.indexOf("Explorer Document")?"mapsgray":"service definition"===b||"csv"===b||"shapefile"===b||"cad drawing"===b||"geojson"===b||"360 vr experience"===b||"netcdf"===b?"datafiles":"explorer add in"===b||"desktop add in"===b||"windows viewer add in"===b||"windows viewer configuration"===
b?"appsgray":"arcgis pro add in"===b||"arcgis pro configuration"===b?"addindesktop":"rule package"===b||"file geodatabase"===b||"csv collection"===b||"kml collection"===b||"windows mobile package"===b||"map template"===b||"desktop application template"===b||"arcpad package"===b||"code sample"===b||"form"===b||"document link"===b||"vector tile package"===b||"operations dashboard add in"===b||"rules package"===b||"image"===b||"workflow manager package"===b||"explorer map"===b&&-1<c.indexOf("Explorer Mapping Application")||
-1<c.indexOf("Document")?"datafilesgray":"network analysis service"===b||"geoprocessing service"===b||"geodata service"===b||"geometry service"===b||"geoprocessing package"===b||"locator package"===b||"geoprocessing sample"===b||"workflow manager service"===b||"raster function template"===b?"toolsgray":"layer"===b||"layer package"===b||"explorer layer"===b?"layersgray":"scene package"===b?"scenepackage":"tile package"===b?"tilepackage":"task file"===b?"taskfile":"report template"===b?"report-template":
"statistical data collection"===b?"statisticaldatacollection":"insights workbook"===b?"workbook":"insights model"===b?"insightsmodel":"insights page"===b?"insightspage":"hub initiative"===b?"hubinitiative":"hub page"===b?"hubpage":"hub site application"===b?"hubsite":"relational database connection"===b?"relationaldatabaseconnection":"big data file share"===b?"datastorecollection":"image collection"===b?"imagecollection":"desktop style"===b?"desktopstyle":"style"===b?"style":"dashboard"===b?"dashboard":
"maps";return a+"/"+d+"16.png"}(a,c.type,c.typeKeywords?c.typeKeywords:[])})})},33:function(c,d,a){a.d(d,"a",function(){return f});var g=a(0),f=function(a){return g.a({},a,{displayName:function(a){var c=a.type;a=a.typeKeywords||[];var b=c;return"Feature Service"===c||"Feature Collection"===c?b=-1<a.indexOf("Table")?"Table":-1<a.indexOf("Route Layer")?"Route Layer":-1<a.indexOf("Markup")?"Markup":"Feature Layer":"Image Service"===c?b=-1<a.indexOf("Elevation 3D Layer")?"Elevation Layer":"Imagery Layer":
"Scene Service"===c?b="Scene Layer":"Scene Package"===c?b="Scene Layer Package":"Stream Service"===c?b="Feature Layer":"Geocoding Service"===c?b="Locator":"Microsoft Powerpoint"===c?b="Microsoft PowerPoint":"GeoJson"===c?b="GeoJSON":"Globe Service"===c?b="Globe Layer":"Vector Tile Service"===c?b="Tile Layer":"netCDF"===c?b="NetCDF":"Map Service"===c?b=-1===a.indexOf("Spatiotemporal")&&(-1<a.indexOf("Hosted Service")||-1<a.indexOf("Tiled"))?"Tile Layer":"Map Image Layer":c&&-1<c.toLowerCase().indexOf("add in")?
b=c.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===c&&(b="Big Data File Share"),b}(a)})}},34:function(c,d,a){a.d(d,"a",function(){return f});var g=a(0),f=function(a){return g.a({},a,{badges:function(a){var c=[],b=a.typeKeywords?a.typeKeywords:[];return a.contentStatus&&("org_authoritative"===a.contentStatus||"public_authoritative"===a.contentStatus?c.push("authoritative"):"deprecated"===a.contentStatus&&c.push("deprecated")),a.origin&&c.push("collaboration"),a.groupDesignations&&-1<
a.groupDesignations.indexOf("livingatlas")&&c.push("livingAtlas"),-1<b.indexOf("Requires Credits")?c.push("premium"):-1<b.indexOf("Requires Subscription")&&c.push("subscriber"),c}(a)})}},4:function(c,d){c.exports=n},400:function(c,d,a){a.r(d);var g=a(0),f=a(17);c=a(4);var h=a(24),e=a(50),k=a.n(e),e=a(57),b=a.n(e),e=a(58),l=a.n(e),e=a(59),u=a.n(e),e=a(60),D=a.n(e),e=a(61),n=a.n(e),e=a(62),p=a.n(e),e=a(63),q=a.n(e),e=a(64),r=a.n(e),e=a(56),t=a.n(e),m=a(21);a=function(a){function c(c){var b=a.call(this,
c)||this;return b.state={customActionsOpen:!1,inversedAction:c.isSelected&&c.isSelected(Object(m.b)(b.props.item)),isLoading:!1},b.handleActionDropdownToggle=b.handleActionDropdownToggle.bind(b),b.handleCustomActionClick=b.handleCustomActionClick.bind(b),b.handleMainActionClick=b["handleMainActionClick"+(b.props.loadOnMainAction?"Async":"")].bind(b),b}return g.b(c,a),c.prototype.render=function(a){var b,c=this,d=this.props,e=d.item,d=d.sortField,g=this.props.customActions?this.props.customActions.filter(function(a){return a.allowed(c.props.item)}):
[],E={"card-ac__container":!0,"card-ac__container-inverse-action":this.state.inversedAction,"card-mc__fader":this.props.loadOnMainAction,"card-mc__fader--loading":this.state.isLoading};return b="numviews"===d?f.viewCount+": "+e.numViews:"avgrating"===d?f.rating+": "+e.avgRating.toFixed(2):"created"===d?f.created+": "+h.format(new Date(e.created),{selector:"date",formatLength:"short"}):f.updated+": "+h.format(new Date(e.modified),{selector:"date",formatLength:"short"}),a("div",{classes:E,key:this.props.key},
a("div",{class:"card-ac__details-container"},a("div",{class:"card-ac__thumb-container"},a("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",alt:"",class:"card-ac__thumbnail",style:"\n                                background-image: url("+e.thumbURI+");\n                            "})),a("div",{class:"card-ac__details"},a("h3",{class:"card-ac__title"},e.title),a("div",{class:"card-ac__info-row"},a("div",{class:"card-ac__icon-title-container"},a("img",{src:e.iconURI,
class:"content-search-item-icon",title:e.displayName}),a("span",{class:"card-ac__author-text"},e.displayName+" "+f.by,a("a",{class:"content-search-selectable card-mc__author-link",title:this.props.organization?f.viewOrg:f.viewProfile,href:this.props.organization?this.props.organization.orgUrl:this.props.portal.baseUrl+"/home/user.html?user\x3d"+e.owner,target:"_blank"}," "+(this.props.organization?this.props.organization.name:e.owner)))),a("span",{class:"card-ac__info-bullet"},"\u2022"),a("span",
{class:"card-ac__info-string"},b)),a("p",{class:"card-ac__snippet"},a("span",{class:"card-ac__snippet-text"},e.snippet," "),a("a",{class:"card-ac__side-action card-ac__no-wrap",href:this.props.portal.baseUrl+"/home/item.html?id\x3d"+e.id,target:"_blank"},f.viewItem,a("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},a("path",{d:"M10 1v1h3.293l-6.646 6.646 0.707 0.707 6.646-6.646v3.293h1v-5z"}),a("path",{d:"M14 8v6h-12v-12h6v-1h-7v14h14v-7z"})))))),
a("div",{class:"card-ac__sub-container"},a("div",{class:"card-ac__badge-container card-ac__badge-container--regular card-ac__sub-group"},this.renderBadges(a)),a("div",{class:"card-ac__badge-container card-ac__badge-container--small card-ac__sub-group"},this.renderBadges(a,!0)),a("div",{class:"card-ac__action-container card-ac__sub-group"},a("div",{class:"card-ac__no-wrap"},this.renderMainActionButton(a),0<g.length?a(t.a,{key:e.id+"-action-dropdown",active:this.state.customActionsOpen,onToggle:this.handleActionDropdownToggle},
a("span",{class:"card-ac__custom-actions card-ac__btn",title:f.actions},a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 32 32"},a("path",{d:"M28 9v5L16 26 4 14V9l12 12L28 9z"}))),a("div",null,g.map(function(b,d){return a("button",{key:b.name,class:"card-ac__custom-action-btn card-ac__btn",value:d,onclick:c.handleCustomActionClick},b.name)}))):null))))},c.prototype.renderLoaderIcon=function(a){return this.props.loadOnMainAction&&this.state.isLoading?a(k.a,{color:"#ffffff"}):
null},c.prototype.renderMainActionButton=function(a){return a("button",{class:"card-ac__btn "+(this.props.loadOnMainAction?"card-ac__secondary-btn":"card-ac__primary-btn"),onclick:this.handleMainActionClick.bind(this,this.state.inversedAction?"Inverse":"")},this.renderLoaderIcon(a),this.props[this.state.inversedAction?"mainInverseActionTitle":"mainActionTitle"])},c.prototype.renderBadges=function(a,c){var d=this,e=c?"small":"regular";return this.props.item.badges.map(function(c){switch(c){case "authoritative":return a(b.a,
{size:e,altOrg:d.props.organization?d.props.organization.name:void 0});case "deprecated":return a(u.a,{size:e});case "collaboration":return a(l.a,{size:e});case "livingAtlas":return a(D.a,{size:e});case "marketplace":return a(n.a,{size:e});case "openData":return a(p.a,{size:e});case "premium":return a(q.a,{size:e,user:d.props.portal.user});case "subscriber":return a(r.a,{size:e,user:d.props.portal.user})}return null})},c.prototype.handleActionDropdownToggle=function(){this.setState({customActionsOpen:!this.state.customActionsOpen})},
c.prototype.handleMainActionClick=function(a){this.props.mainAction([Object(m.b)(this.props.item)])},c.prototype.toggleLoadingState=function(){this.setState({isLoading:!this.state.isLoading})},c.prototype.handleMainActionClickAsync=function(a,c){var b=this;this.state.isLoading||(this.toggleLoadingState(),this.props["main"+a+"Action"]([Object(m.b)(this.props.item)]).then(function(a){b.setState({inversedAction:a&&!b.state.inversedAction,isLoading:!1})},function(a){b.toggleLoadingState()}))},c.prototype.handleCustomActionClick=
function(a){this.setState({customActionsOpen:!this.state.customActionsOpen});this.props.customActions&&this.props.customActions[a.target.value]&&this.props.customActions[a.target.value].onAction(Object(m.b)(this.props.item))},c}(c.Component);d.default=a},5:function(c,d,a){function g(a){return function e(){for(var c=this,b=[],d=0;d<arguments.length;d++)b[d]=arguments[d];return b.length>=a.length?a.call.apply(a,[this].concat(b)):function(){for(var a=[],d=0;d<arguments.length;d++)a[d]=arguments[d];return e.call.apply(e,
[c].concat(b,a))}}}a.d(d,"a",function(){return g})},50:function(c,d){c.exports=r},56:function(c,d){c.exports=t},57:function(c,d){c.exports=v},58:function(c,d){c.exports=w},59:function(c,d){c.exports=x},60:function(c,d){c.exports=y},61:function(c,d){c.exports=z},62:function(c,d){c.exports=A},63:function(c,d){c.exports=B},64:function(c,d){c.exports=C}})});