//>>built
(function(a){"object"===typeof module&&"object"===typeof module.exports?(a=a(require,exports),void 0!==a&&(module.exports=a)):"function"===typeof define&&define.amd&&define(["require","exports","tslib","./Router"],a)})(function(a,c){Object.defineProperty(c,"__esModule",{value:!0});var f=a("tslib"),g=a("./Router");c.registerRouterInjector=function(a,c,b){void 0===b&&(b={});var d=b.key,d=void 0===d?"router":d;b=f.__rest(b,["key"]);if(c.hasInjector(d))throw Error("Router has already been defined");var e=
new g.Router(a,b);c.defineInjector(d,function(a){e.on("nav",function(){return a()});return function(){return e}});return e}});