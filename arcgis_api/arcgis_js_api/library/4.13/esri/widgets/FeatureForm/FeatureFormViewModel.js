// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/arrayUtils ../../core/Evented ../../core/HandleOwner ../../core/lang ../../core/ReentrantObjectPool ../../core/watchUtils ../../core/accessorSupport/decorators ../../core/accessorSupport/decorators/cast ../../support/arcadeOnDemand ./FieldConfig ./FieldGroupConfig ./InputField ./InputFieldGroup".split(" "),function(H,
I,v,e,w,x,n,y,z,A,q,B,c,C,D,r,t,E,F){function G(e){return!!e.fieldConfig}return function(u){function b(a){a=u.call(this)||this;a._arcade=null;a._fieldPool=new q.ReentrantObjectPool(E);a._fieldGroupPool=new q.ReentrantObjectPool(F);a._featureClone=null;a._needsArcade=!1;a.fieldConfig=null;a.strict=!1;return a}v(b,u);b.prototype.initialize=function(){var a=this,d=B.init(this,"fieldConfig",function(b){return x(a,void 0,void 0,function(){var a,l,e,c,f;return w(this,function(g){switch(g.label){case 0:return a=
[],b&&b.forEach(function(d){d.visibilityExpression&&a.push(d.visibilityExpression);d.fieldConfig&&d.fieldConfig.forEach(function(d){(d=d.visibilityExpression)&&a.push(d)})}),(l=0<a.length)?[4,D.loadArcade()]:[3,4];case 1:return e=g.sent(),c=e.arcadeUtils,(f=a.some(function(a){return c.hasGeometryOperations(a)}))?[4,c.enableGeometryOperations()]:[3,3];case 2:g.sent(),d.remove(),g.label=3;case 3:this._arcade=e,this.notifyChange("inputFields"),g.label=4;case 4:return this._needsArcade=l,[2]}})})});this.handles.add(d)};
b.prototype.destroy=function(){this.layer=this.feature=this.fieldConfig=null;this._fieldPool.destroy();this._fieldGroupPool.destroy()};Object.defineProperty(b.prototype,"_allInputFields",{get:function(){return this.inputFields.reduce(function(a,d){return d.inputFields?a.concat(d.inputFields):a.concat([d])},[])},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"_inputFieldCache",{get:function(){var a=this,d=this._get("_inputFieldCache")||new Map;d.forEach(function(d){return a._disposeInputOrGroup(d)});
d.clear();(this.get("layer.fields")||[]).forEach(function(b){return d.set(b,a._fieldPool.acquire())});return d},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"_inputFieldGroupCache",{get:function(){var a=this,d=this._get("_inputFieldGroupCache")||new Map;d.forEach(function(d){return a._disposeInputOrGroup(d)});d.clear();(this.fieldConfig||[]).filter(G).forEach(function(b){return d.set(b,a._fieldGroupPool.acquire())});return d},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"feature",{get:function(){return this._get("feature")},set:function(a){this._featureClone=a?a.clone():null;this._set("feature",a)},enumerable:!0,configurable:!0});b.prototype.castFieldConfig=function(a){return a?a.map(function(a){return a instanceof r||a instanceof t?a:a.fieldConfig?new t(a):new r(a)}):null};Object.defineProperty(b.prototype,"inputFields",{get:function(){var a=this,d=this._arcade,b=this._inputFieldCache,e=this._inputFieldGroupCache,c=this._featureClone,h=this._needsArcade,k=this.layer,
f=this.state,m=c&&c.clone();if("ready"!==f||h&&!d)return[];var p=this.get("layer.fields")||[],c=this.fieldConfig||[];return(0!==c.length?c.map(function(c){if(c.fieldConfig){var g=e.get(c),f=c.fieldConfig.map(function(c){var e=n.find(p,function(a){return a.name===c.name}),f=b.get(e);f.set({arcade:d,field:e,config:c,feature:m,group:g,layer:k,value:a.getValue(e.name)});return f}).filter(function(a){return a.visible});g.set({arcade:d,config:c,feature:m,inputFields:f});return g}var f=n.find(p,function(a){return a.name===
c.name}),l=b.get(f);l.set({arcade:d,field:f,config:c,feature:m,group:null,layer:k,value:a.getValue(f.name)});return l}):p.map(function(c){var e=b.get(c);e.set({arcade:d,config:null,field:c,feature:m,group:null,layer:k,value:a.getValue(c.name)});return e})).filter(function(a){return a.visible})},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"layer",{get:function(){return this.get("feature.layer")},set:function(a){a?this._override("layer",a):this._clearOverride("layer")},enumerable:!0,
configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){return this.get("layer.loaded")&&this.feature?"ready":"disabled"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"valid",{get:function(){var a=this._allInputFields;return 0<a.length&&a.every(function(a){return a.valid})},enumerable:!0,configurable:!0});b.prototype.findField=function(a){return n.find(this._allInputFields,function(d){return d.name===a})};b.prototype.getValue=function(a){var d=this._featureClone;
return d&&d.get("attributes."+a)};b.prototype.setValue=function(a,d){var b=this,c=this._featureClone,e=this.strict;if(c&&c.attributes){var h=this.findField(a);if(h&&c.attributes[a]!==d){h.value=d;if(this.get("layer.typeIdField")===h.name){var k=new Set;this.layer.types.forEach(function(a){return Object.keys(a.domains).forEach(function(a){return k.add(a)})});k.forEach(function(a){(a=b.findField(a))&&a.notifyChange("domain")})}if(!e||h.valid)c.attributes[a]=d,this.notifyChange("inputFields"),this._emitChangeEvent(h)}}};
b.prototype.getValues=function(){var a=this._featureClone;return a&&A.clone(a.attributes)||null};b.prototype.submit=function(){var a=this._allInputFields,b=a.filter(function(a){return a.valid}).map(function(a){return a.name}),a=a.filter(function(a){return!a.valid}).map(function(a){return a.name}),c=this.getValues();this.emit("submit",{valid:b,invalid:a,values:c})};b.prototype._disposeInputOrGroup=function(a){a.inputFields?this._disposeGroup(a):this._disposeInput(a)};b.prototype._disposeGroup=function(a){var b=
this;a.inputFields.forEach(function(a){return b._disposeInput(a)});this._fieldGroupPool.release(a)};b.prototype._disposeInput=function(a){this._fieldPool.release(a)};b.prototype._emitChangeEvent=function(a){this.emit("value-change",{layer:this.layer,feature:this.feature,fieldName:a.name,value:a.value,valid:a.valid})};e([c.property({readOnly:!0,dependsOn:["inputFields"]})],b.prototype,"_allInputFields",null);e([c.property({dependsOn:["layer.fields"],readOnly:!0})],b.prototype,"_inputFieldCache",null);
e([c.property({dependsOn:["fieldConfig"],readOnly:!0})],b.prototype,"_inputFieldGroupCache",null);e([c.property()],b.prototype,"feature",null);e([c.property()],b.prototype,"fieldConfig",void 0);e([C.cast("fieldConfig")],b.prototype,"castFieldConfig",null);e([c.property({readOnly:!0,dependsOn:["feature","fieldConfig","layer.fields","layer.loaded"]})],b.prototype,"inputFields",null);e([c.property({dependsOn:["feature.layer"]})],b.prototype,"layer",null);e([c.property({dependsOn:["layer.loaded","feature"]})],
b.prototype,"state",null);e([c.property()],b.prototype,"strict",void 0);e([c.property({dependsOn:["_allInputFields"]})],b.prototype,"valid",null);e([c.property()],b.prototype,"getValues",null);e([c.property()],b.prototype,"submit",null);return b=e([c.subclass("esri.widgets.FeatureForm.FeatureFormViewModel")],b)}(c.declared(z.HandleOwnerMixin(y.EventedAccessor)))});