// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../webgl-engine/lib/lodRendering/LodResources"],function(h,b,k,l,f){function d(a){var c=[];a.stageResources.geometries.forEach(function(b,d){c.push({material:a.stageResources.materials[d],geometry:b,textures:a.stageResources.textures})});return{components:c,minScreenSpaceRadius:a.lodThreshold,pivotOffset:a.pivotOffset}}function e(a,c){void 0===c&&(c=g);a=f.computeFaceCount(a);return Math.sqrt(a/
(c*Math.PI))}Object.defineProperty(b,"__esModule",{value:!0});b.makeLodLevelResources=d;b.makeLodResources=function(a){return{levels:a.map(function(a){return d(a)})}};b.estimateMinScreenSpaceRadius=e;b.fillEstimatedMinScreenSpaceRadius=function(a){a.levels.forEach(function(a){a.minScreenSpaceRadius||(a.minScreenSpaceRadius=e(a))})};var g=.05});