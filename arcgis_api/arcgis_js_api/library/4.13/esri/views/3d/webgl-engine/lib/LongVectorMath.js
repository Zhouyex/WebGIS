// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(f,e){Object.defineProperty(e,"__esModule",{value:!0});e.dotProduct=function(c,d){for(var b=0,a=0;a<c.length;a++)b+=c[a]*d[a];return b};e.elementwiseProduct=function(c,d,b){b=b||c;b.length=c.length;for(var a=0;a<c.length;a++)b[a]=c[a]*d[a];return b};e.scalarProduct=function(c,d,b){b=b||c;b.length=c.length;for(var a=0;a<c.length;a++)b[a]=c[a]*d;return b};e.add=function(c,d,b){b=b||c;b.length=c.length;for(var a=0;a<c.length;a++)b[a]=c[a]+d[a];return b}});