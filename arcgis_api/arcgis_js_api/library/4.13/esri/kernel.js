// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","./core/promiseUtils","./core/has","./support/revision","dojo/_base/kernel"],function(f,g,c,e,h){(function(){var b=h.config,a=b.has&&void 0!==b.has["config-deferredInstrumentation"],k=b.has&&void 0!==b.has["config-useDeferredInstrumentation"];void 0!==b.useDeferredInstrumentation||a||k||(c.add("config-deferredInstrumentation",!1,!0,!0),c.add("config-useDeferredInstrumentation",!1,!0,!0))})();var d={version:"4.13",workerMessages:{request:function(b){return g.create(function(a){f(["./request"],
a)}).then(function(a){var c=b.options||{};c.responseType="array-buffer";return a(b.url,c)}).then(function(a){return{result:{data:a.data,ssl:a.ssl},transferList:[a.data]}})}},revision:e.commitHash};!c("host-webworker")&&c("esri-console-log-version")&&console.debug("Using ArcGIS API for JavaScript "+d.version+" [Date: "+e.buildDate+", Revision: "+d.revision.slice(0,8)+"]");return d});