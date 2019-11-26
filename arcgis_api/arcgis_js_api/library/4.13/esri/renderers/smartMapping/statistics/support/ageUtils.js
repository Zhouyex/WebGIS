// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/tsSupport/assignHelper ../../../../core/Error ../../support/utils".split(" "),function(p,f,q,r,t,h,k){function n(a){a=a.map(function(a){return'$feature["'+a+'"];'});return a.length?a.join("\n")+"\n":""}function l(a,b,d){a="number"===b?a:"date"===b?a.getTime():'$feature["'+a+'"]';return"var "+d+" \x3d "+a+";"}Object.defineProperty(f,"__esModule",{value:!0});var m=["date","number"];
f.supportedAgeUnits="years months days hours minutes seconds".split(" ");f.verifyDates=function(a,b,d,e){var c=[],g=null;[b,d].every(function(b){(b=k.getDateType(a,b))&&c.push(b);return!!b})?c[0]===c[1]?"field"===c[0]?b===d&&(g=new h(e,"'startTime' and 'endTime' parameters cannot be identical")):g=new h(e,"Invalid combination of 'startTime' and 'endTime' parameters"):-1<m.indexOf(c[0])&&-1<m.indexOf(c[1])&&(g=new h(e,"Invalid combination of 'startTime' and 'endTime' parameters")):g=new h(e,"'startTime' and 'endTime' parameters must be one of these values: a date object, unix epoch time, name of a valid date field or \x3cnow\x3e");
return g};f.getAgeExpressions=function(a){var b=a.layer,d=a.startTime,e=a.endTime,c=a.unit||"days";a=k.getDateDiffSQL(b,d,e,c);var g=k.getDateType(b,d),b=k.getDateType(b,e),c=[l(d,g,"startTime"),l(e,b,"endTime"),'var retVal \x3d null;\n\n    if (startTime !\x3d null \x26\x26 endTime !\x3d null) {\n      startTime \x3d Date(startTime);\n      endTime \x3d Date(endTime);\n      retVal \x3d DateDiff(endTime, startTime, "'+c+'");\n    }\n\n    return retVal;'],f=[];"field"===g&&f.push(d);"field"===b&&
f.push(e);return{valueExpression:n(f)+c.join("\n"),statisticsQuery:a,histogramQuery:a}}});