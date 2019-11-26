// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/maybe","./attributeSupport"],function(k,l,m,g){Object.defineProperty(l,"__esModule",{value:!0});k=function(){function f(b,a,d){this._fieldDataCache=new Map;this._returnDistinctMap=new Map;this.returnDistinctValues=b.returnDistinctValues;this.fieldsIndex=d;this.featureAdapter=a;if((b=b.outFields)&&-1===b.indexOf("*")){this.outFields=b;for(var e=a=0;e<b.length;e++){var c=b[e],f=g.getExpressionFromFieldName(c),h=this.fieldsIndex.get(f),f=h?null:g.getWhereClause(f,
d),h=h?h.name:g.getAliasFromFieldName(c)||"FIELD_EXP_"+a++;this._fieldDataCache.set(c,{alias:h,clause:f})}}}f.prototype.getAttributes=function(b){b=this._processAttributesForOutFields(b);return this._processAttributesForDistinctValues(b)};f.prototype.getFieldValue=function(b,a,d){var e=d?d.name:a,c=null;this._fieldDataCache.has(e)?c=this._fieldDataCache.get(e).clause:d||(c=g.getWhereClause(a,this.fieldsIndex),this._fieldDataCache.set(e,{alias:e,clause:c}));return d?this.featureAdapter.getAttribute(b,
e):c.calculateValue(b,this.featureAdapter)};f.prototype.validateItem=function(b,a){this._fieldDataCache.has(a)||this._fieldDataCache.set(a,{alias:a,clause:g.getWhereClause(a,this.fieldsIndex)});return this._fieldDataCache.get(a).clause.testFeature(b,this.featureAdapter)};f.prototype.validateItems=function(b,a){this._fieldDataCache.has(a)||this._fieldDataCache.set(a,{alias:a,clause:g.getWhereClause(a,this.fieldsIndex)});return this._fieldDataCache.get(a).clause.testSet(b,this.featureAdapter)};f.prototype._processAttributesForOutFields=
function(b){var a=this.outFields;if(!a||!a.length)return this.featureAdapter.getAttributes(b);for(var d={},e=0;e<a.length;e++){var c=this._fieldDataCache.get(a[e]),f=c.alias,c=c.clause;d[f]=c?c.calculateValue(b,this.featureAdapter):this.featureAdapter.getAttribute(b,f)}return d};f.prototype._processAttributesForDistinctValues=function(b){if(m.isNone(b)||!this.returnDistinctValues)return b;var a=this.outFields,d=[];if(a)for(var e=0;e<a.length;e++){var c=this._fieldDataCache.get(a[e]).alias;d.push(b[c])}else for(c in b)d.push(b[c]);
a=(a||["*"]).join(",")+"\x3d"+d.join(",");d=this._returnDistinctMap.get(a)||0;this._returnDistinctMap.set(a,++d);return 1<d?null:b};return f}();l.default=k});