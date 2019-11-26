// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(l,d){Object.defineProperty(d,"__esModule",{value:!0});d.tAscensionZoomPan=function(a,c,b){var h=a.halfWindowPanAtZoom(b-a.compared.sourceZoom);return-a.halfWindowSize*(c.ascensionFactor*Math.LN2*a.compared.pan+h)*Math.log(a.compared.sourceZoom/b)/(a.desiredPixelFlow*Math.LN2*h)};d.dtAscensionZoomPan=function(a,c,b){var h=1/b,d=Math.log(a.compared.sourceZoom*h),e=1/a.desiredPixelFlow,f=1/Math.LN2;b-=a.compared.sourceZoom;var k=1/b;c=(c.ascensionFactor*Math.LN2*
a.compared.pan+a.halfWindowPanAtZoom(b))/a.halfWindowPanAtZoom(1);return a.halfWindowSize*h*e*f*k*c-a.halfWindowSize*d*e*f*k+a.halfWindowSize*d*e*f*c/(b*b)};d.ddtAscensionZoomPan=function(a,c,b){var d=b-a.compared.sourceZoom,g=1/d,e=1/b,f=Math.log(a.compared.sourceZoom*e);c=(c.ascensionFactor*Math.LN2*a.compared.pan+a.halfWindowPanAtZoom(d))/a.halfWindowPanAtZoom(1);return a.halfWindowSize*g*(-2*g*e*c+2*g*f+2*e-2*f*c/(d*d)-c/(b*b))/(a.desiredPixelFlow*Math.LN2)};d.tAscensionZoomOnly=function(a,c,
b){return-a.halfWindowSize*Math.log(a.compared.sourceZoom/b)/(a.desiredPixelFlow*Math.LN2)};d.dtAscensionZoomOnly=function(a,c,b){return a.halfWindowSize/(b*a.desiredPixelFlow*Math.LN2)};d.ddtAscensionZoomOnly=function(a,c,b){return-a.halfWindowSize/(b*b*a.desiredPixelFlow*Math.LN2)};d.tPanion=function(a,c,b){return-a.compared.pan*a.halfWindowSize*(c.ascensionFactor+c.descensionFactor-1)/(a.desiredPixelFlow*a.halfWindowPanAtZoom(b))};d.dtPanion=function(a,c,b){return a.compared.pan*a.halfWindowSize*
(c.ascensionFactor+c.descensionFactor-1)/(a.desiredPixelFlow*a.halfWindowPanAtZoom(b*b))};d.ddtPanion=function(a,c,b){return-2*a.compared.pan*a.halfWindowSize*(c.ascensionFactor+c.descensionFactor-1)/(a.desiredPixelFlow*a.halfWindowPanAtZoom(b*b*b))};d.tDescensionZoomPan=function(a,c,b){return a.halfWindowSize*(-a.halfWindowPanAtZoom(b)-c.descensionFactor*Math.LN2*a.compared.pan+a.halfWindowPanAtZoom(a.compared.targetZoom))*Math.log(b/a.compared.targetZoom)/(a.desiredPixelFlow*Math.LN2*a.halfWindowPanAtZoom(-b+
a.compared.targetZoom))};d.dtDescensionZoomPan=function(a,c,b){var d=Math.log(b/a.compared.targetZoom),g=1/a.desiredPixelFlow,e=1/Math.LN2,f=-b+a.compared.targetZoom,k=1/f;c=(-a.halfWindowPanAtZoom(b)-c.descensionFactor*Math.LN2*a.compared.pan+a.halfWindowPanAtZoom(a.compared.targetZoom))/a.halfWindowPanAtZoom(1);return-a.halfWindowSize*d*g*e*k+a.halfWindowSize*d*g*e*c/(f*f)+a.halfWindowSize*g*e*k*c/b};d.ddtDescensionZoomPan=function(a,c,b){var d=b-a.compared.targetZoom,g=1/d,e=1/b,f=Math.log(b/a.compared.targetZoom);
c=(a.halfWindowPanAtZoom(b)+c.descensionFactor*Math.LN2*a.compared.pan-a.halfWindowPanAtZoom(a.compared.targetZoom))/a.halfWindowPanAtZoom(1);return a.halfWindowSize*g*(-2*g*e*c-2*g*f+2*e+2*f*c/(d*d)-c/(b*b))/(a.desiredPixelFlow*Math.LN2)};d.tDescensionZoomOnly=function(a,c,b){return a.halfWindowSize*Math.log(b/a.compared.targetZoom)/(a.desiredPixelFlow*Math.LN2)};d.dtDescensionZoomOnly=function(a,c,b){return a.halfWindowSize/(b*a.desiredPixelFlow*Math.LN2)};d.ddtDescensionZoomOnly=function(a,c,b){return-a.halfWindowSize/
(b*b*a.desiredPixelFlow*Math.LN2)};d.tBaseLine=function(a){var c=Math.LN2*a.compared.pan,b=a.halfWindowPanAtZoom(a.compared.sourceZoom-a.compared.targetZoom),d=a.halfWindowSize*Math.log(a.compared.sourceZoom/a.compared.targetZoom)/(a.desiredPixelFlow*Math.LN2*b);return a.compared.sourceZoom<=a.compared.targetZoom?d*(c-b):d*(c+b)}});