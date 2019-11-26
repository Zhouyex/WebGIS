// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/Error ../../core/promiseUtils ../../core/accessorSupport/decorators ../../renderers/support/clickToleranceUtils".split(" "),function(m,b,g,e,h,k,l,f,d,n){Object.defineProperty(b,"__esModule",{value:!0});b.TileLayerView=function(b){return function(b){function a(){return null!==b&&b.apply(this,arguments)||this}g(a,b);
a.prototype.fetchPopupFeatures=function(b){return k(this,void 0,void 0,function(){var a,d,e,g=this;return h(this,function(m){a=this.layer;if(!b)return[2,f.reject(new l("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}))];if("tile"!==a.type)return[2,f.reject(new l("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:a.type}))];d=this.get("view.scale");e=a.allSublayers.toArray().filter(function(c){var b=0===c.minScale||d<=c.minScale,a=0===c.maxScale||d>=
c.maxScale;return c.popupTemplate&&c.popupEnabled&&c.visible&&b&&a});return[2,f.eachAlways(e.map(function(c){return k(g,void 0,void 0,function(){var a,d,e,g;return h(this,function(f){switch(f.label){case 0:return a=c.createQuery(),d=n.calculateTolerance(c.renderer),a.geometry=this.createFetchPopupFeaturesQueryGeometry(b,d),e=a,[4,c.popupTemplate.getRequiredFields()];case 1:return e.outFields=f.sent(),[4,c.queryFeatures(a)];case 2:return g=f.sent(),[2,g.features]}})})})).then(function(a){return[].concat.apply([],
a.map(function(a){return a.value}).filter(Boolean))})]})})};e([d.property()],a.prototype,"layer",void 0);return a=e([d.subclass("esri.layers.mixins.TileLayerView")],a)}(d.declared(b))}});