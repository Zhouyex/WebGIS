// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","@dojo/framework/shim/array","./RandomLCG"],function(p,e,l,u){function q(a,b){return-1===a.indexOf(b)}function r(a,b,c){return!a.some(b.bind(null,c))}function v(a){return a}Object.defineProperty(e,"__esModule",{value:!0});e.find=l.find;e.findIndex=l.findIndex;e.includes=l.includes;e.unique=function(a){return a.filter(function(a,c,d){return d.indexOf(a)===c})};e.equals=function(a,b,c){if(!a&&!b)return!0;if(!a||!b||a.length!==b.length)return!1;if(c)for(var d=0;d<a.length;d++){if(!c(a[d],
b[d]))return!1}else for(d=0;d<a.length;d++)if(a[d]!==b[d])return!1;return!0};e.difference=function(a,b,c){var d;c?(d=b.filter(r.bind(null,a,c)),a=a.filter(r.bind(null,b,c))):(d=b.filter(q.bind(null,a)),a=a.filter(q.bind(null,b)));return{added:d,removed:a}};e.intersect=function(a,b,c){return a&&b?c?a.filter(function(a){return-1<l.findIndex(b,function(b){return c(a,b)})}):a.filter(function(a){return-1<b.indexOf(a)}):[]};var w=!!Array.prototype.fill;e.constant=function(a,b){if(w)return Array(a).fill(b);
for(var c=Array(a),d=0;d<a;d++)c[d]=b;return c};e.range=function(a,b){void 0===b&&(b=a,a=0);for(var c=Array(b-a),d=a;d<b;d++)c[d-a]=d;return c};e.binaryIndexOf=function(a,b,c){for(var d=a.length,k=0,e=d-1;k<e;){var f=k+Math.floor((e-k)/2);b>a[f]?k=f+1:e=f}e=a[k];return c?b>=a[d-1]?-1:e===b?k:k-1:e===b?k:-1};e.flatten=function(a){return a.reduce(function(a,c){return a.concat(c||[])},[])};p=function(){return function(){this.last=0}}();e.RemoveHint=p;var t=new p;e.removeUnordered=function(a,b,c,d){d=
d||t;for(var e=null==c?a.length:c,g=Math.max(0,d.last-10),f=-1,h=g;h<e;++h)if(a[h]===b){f=h;break}if(-1===f){for(h=0;h<g;++h)if(a[h]===b){f=h;break}if(-1===f)return}a[f]=a[e-1];null==c&&a.pop();d.last=f;return b};var g=new Set;e.removeUnorderedMany=function(a,b,c,d,e,m){void 0===c&&(c=a.length);void 0===d&&(d=b.length);if(0===d||0===c)return c;g.clear();for(var f=0;f<d;++f)g.add(b[f]);e=e||t;for(f=b=Math.max(0,e.last-10);f<c;++f)if(g.has(a[f])&&(m&&m.push(a[f]),g.delete(a[f]),a[f]=a[c-1],--c,--f,
0===g.size||0===c))return g.clear(),c;for(f=0;f<b;++f)if(g.has(a[f])&&(m&&m.push(a[f]),g.delete(a[f]),a[f]=a[c-1],--c,--f,0===g.size||0===c))return g.clear(),c;g.clear();return c};e.pickRandom=function(a,b,c){var d=a.length;if(b>=d)return a.slice(0);c=(n.seed=c)?function(){return n.getFloat()}:Math.random;for(var e=new Set,g=[];g.length<b;){var f=Math.floor(c()*d);e.has(f)||(e.add(f),g.push(a[f]))}return g};e.shuffle=function(a,b){b=(n.seed=b)?function(){return n.getFloat()}:Math.random;for(var c=
a.length-1;0<c;c--){var d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}return a};var n=new u;e.keysOfMap=function(a){var b=Array(a.size),c=0;a.forEach(function(a,e){return b[c++]=e});return b};e.keysOfSet=function(a,b){void 0===b&&(b=v);var c=Array(a.size),d=0;a.forEach(function(a){return c[d++]=b(a)});return c};e.fromMapValues=function(a){if(Array.from)return Array.from(a.values());var b=Array(a.size),c=0;a.forEach(function(a){return b[c++]=a});return b};e.remove=function(a,b){var c=a.indexOf(b);
return-1!==c?(a.splice(c,1),b):null}});