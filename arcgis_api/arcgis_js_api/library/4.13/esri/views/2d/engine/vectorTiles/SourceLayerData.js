// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,d){return function(){function b(a){this.extent=4096;this.keys=[];this.values=[];for(this._pbfLayer=a.clone();a.next();)switch(a.tag()){case 1:this.name=a.getString();break;case 3:this.keys.push(a.getString());break;case 4:this.values.push(a.processMessage(b._parseValue));break;case 5:this.extent=a.getUInt32();break;default:a.skip()}}b.prototype.getData=function(){return this._pbfLayer};b._parseValue=function(a){for(;a.next();)switch(a.tag()){case 1:return a.getString();
case 2:return a.getFloat();case 3:return a.getDouble();case 4:return a.getInt64();case 5:return a.getUInt64();case 6:return a.getSInt64();case 7:return a.getBool();default:a.skip()}return null};return b}()});