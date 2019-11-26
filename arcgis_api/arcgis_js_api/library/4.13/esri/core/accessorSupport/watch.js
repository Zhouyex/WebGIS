// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../ArrayPool ../lang ../ReentrantObjectPool ../scheduling ./get ./utils ./wire".split(" "),function(F,h,A,r,B,C,l,n,t){function u(a){m.has(a)?d.splice(d.indexOf(a),1):m.add(a);d.push(a);p||(p=C.schedule(v))}function w(a){if(!a.removed){var e=a.callback,b=a.path,c=a.oldValue,d=a.target,f=l.valueOf(d,a.propertyPath,!0);r.equals(c,f)||(a.oldValue=f,e.call(d,f,c,b,d))}}function v(){for(var a=10;p&&a--;){p=null;var e=d;d=k.acquire();m.clear();for(var b=k.acquire(),c=0,x=e;c<x.length;c++){var f=
x[c];w(f);f.removed&&b.push(f)}for(c=0;c<d.length;c++)f=d[c],f.removed&&(b.push(f),m.delete(f),d.splice(c,1),--c);for(c=0;c<b.length;c++)y.pool.release(b[c]);k.release(e);k.release(b);q.forEach(function(a){return a()})}}function D(a,e,b){var c=n.parse(a,e,b,function(a,b,e){var d=l.valueOf(a,b,!0),g,f,h=t.wire(a,b,function(a,b){a.__accessor__.destroyed||g&&g.uid!==f?c.remove():(g||(g=y.pool.acquire(a,b,d,e),f=g.uid,d=null),u(g))});return{remove:n.once(function(){h.remove();g&&(g.uid!==f||g.removed||
(g.removed=!0,u(g)),g=null);c=h=d=null})}});return c}function E(a,e,b){var c=n.parse(a,e,b,function(a,b,e){var d=l.valueOf(a,b,!0),g=!1;return t.wire(a,b,function(a,b){if(a.__accessor__.destroyed)c.remove();else if(!g){g=!0;var f=l.valueOf(a,b,!0);r.equals(d,f)||e.call(a,f,d,b,a);d=l.valueOf(a,b,!0);g=!1}})});return c}function z(a,d,b,c){void 0===c&&(c=!1);return!a.__accessor__||a.__accessor__.destroyed?{remove:function(){}}:c?E(a,d,b):D(a,d,b)}Object.defineProperty(h,"__esModule",{value:!0});var y=
function(){function a(d,b,c,h){this.target=d;this.path=b;this.oldValue=c;this.callback=h;this.uid=0;this.removed=!1;this.propertyPath=n.pathToStringOrArray(b);this.uid=++a.uid}a.prototype.release=function(){this.target=this.path=this.propertyPath=this.callback=this.oldValue=null;this.uid=++a.uid;this.removed=!0};a.pool=new B.ReentrantObjectPool(a,!0);a.uid=0;return a}(),k=new A,m=new Set,d=k.acquire(),p;h.dispatchTarget=function(a){for(var e=k.copy(d),b=0;b<e.length;b++){var c=e[b];c.target===a&&
(w(c),m.delete(c),d.splice(d.indexOf(c),1))}};h.removeTarget=function(a){for(var e=0;e<d.length;e++){var b=d[e];b.target===a&&(b.removed=!0)}};h.dispatch=v;var q=new Set;h.afterDispatch=function(a){q.add(a);return{remove:function(){q.delete(a)}}};h.watch=z;h.isValueInUse=function(a){return d.some(function(d){return d.oldValue===a})};h.default=z});