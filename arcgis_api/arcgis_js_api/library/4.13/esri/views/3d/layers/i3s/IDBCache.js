// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/Error","../../../../core/promiseUtils"],function(l,k,m,f){function g(a){return f.create(function(e,b){a.oncomplete=function(){return e()};a.onerror=function(){return b(a.error)};a.onabort=function(){return b(a.error)}})}function h(a){return f.create(function(e,b){"done"===a.readyState?null!=a.error?b(a.error):e(a.result):(a.onsuccess=function(){return e(a.result)},a.onerror=function(){return b(a.error)})})}Object.defineProperty(k,"__esModule",{value:!0});
l=function(){function a(e,b,c){void 0===c&&(c=14);this._version=c;this._quotaReductionPromise=this._db=null;this._miss=this._hit=this._gcCounter=0;this._destroyed=!1;this.gcFrequency=50;this.maxByteSize=1073741824;this.quotaReductionFactor=.2;this._dbName=e;this._storeName=b}a.prototype.init=function(){var e=this;return f.resolve().then(function(){var b=indexedDB.open(e._dbName,e._version);b.onupgradeneeded=function(c){var d=b.result,a=b.transaction,f=d.objectStoreNames.contains(e._storeName)?a.objectStore(e._storeName):
d.createObjectStore(e._storeName),d=d.objectStoreNames.contains("last_access")?a.objectStore("last_access"):d.createObjectStore("last_access");d.indexNames.contains("date")||d.createIndex("date","date",{unique:!1});d.indexNames.contains("byteSize")||d.createIndex("byteSize","byteSize",{unique:!1});c.oldVersion<e._version&&(f.clear(),d.clear())};return h(b)}).then(function(b){e._destroyed?b.close():e._db=b})};a.prototype.destroy=function(){this._db&&(this._db.close(),this._db=null);this._destroyed=
!0};Object.defineProperty(a.prototype,"initialized",{get:function(){return null!=this._db},enumerable:!0,configurable:!0});a.prototype.getHitRate=function(){return this._hit/(this._hit+this._miss)};a.prototype.put=function(e,b){var c=this;return null==this._db?f.reject(m("indexedb:not-initialized","IndexedDB Cache is not initialized")):(null!=this._quotaReductionPromise?this._quotaReductionPromise:f.resolve()).then(function(){return c._put(e,b)}).catch(function(d){if(d&&"QuotaExceededError"===d.name)return null==
c._quotaReductionPromise&&(c._quotaReductionPromise=c._getCacheSize().then(function(d){return c._removeLeastRecentlyAccessed(b.byteSize+Math.ceil(d*c.quotaReductionFactor))}),c._quotaReductionPromise.then(function(){return c._quotaReductionPromise=null},function(){return c._quotaReductionPromise=null})),c._quotaReductionPromise.then(function(){return c._put(e,b)});throw d;}).then(function(){c._gcCounter--;0>c._gcCounter&&null!=c._db&&(c._gcCounter=c.gcFrequency,c._getCacheSize().then(function(d){return c._removeLeastRecentlyAccessed(d-
c.maxByteSize)}))})};a.prototype.get=function(e,b){var c=this;if(null==this._db)return f.resolve(null);var d=null;return f.resolve().then(function(){var a=c._db.transaction(c._storeName,"readonly");d=f.onAbort(b,function(){a.abort()});var g=a.objectStore(c._storeName).get(e);return h(g)}).then(function(b){null==b?++c._miss:c._db&&(++c._hit,c._db.transaction("last_access","readwrite").objectStore("last_access").put({date:Date.now(),byteSize:b.byteSize},e));d&&d.remove();return b}).catch(function(e){++c._miss;
f.throwIfAborted(b);d&&d.remove();return null})};a.prototype.remove=function(e){var b=this;return null==this._db?f.resolve():f.resolve().then(function(){var c=b._db.transaction([b._storeName,"last_access"],"readwrite"),d=c.objectStore(b._storeName),a=c.objectStore("last_access"),d=d.delete(e),a=a.delete(e);return f.all([h(d),h(a),g(c)])})};a.prototype._put=function(a,b){var c=this._db.transaction([this._storeName,"last_access"],"readwrite"),d=c.objectStore(this._storeName),e=c.objectStore("last_access"),
d=d.put(b,a);a=e.put({date:Date.now(),byteSize:b.byteSize},a);return f.all([h(d),h(a),g(c)])};a.prototype._removeLeastRecentlyAccessed=function(a){if(!(0>=a)){var b=this._db.transaction([this._storeName,"last_access"],"readwrite"),c=b.objectStore(this._storeName),d=b.objectStore("last_access"),e=0,f=d.index("date").openCursor(null,"next");f.onsuccess=function(b){b=f.result;null!=b&&(null!=b.value.byteSize&&(e+=b.value.byteSize),c.delete(b.primaryKey),d.delete(b.primaryKey),e<a&&b.continue())};return g(b)}};
a.prototype._getCacheSize=function(){var a=this._db.transaction("last_access"),b=0,c=a.objectStore("last_access").index("byteSize").openKeyCursor();c.onsuccess=function(a){if(a=c.result){var d=a.key;null!=d&&(b+=d);a.continue()}};return g(a).then(function(){return b})};return a}();k.IDBCache=l;k.whenTransaction=g;k.whenRequest=h});