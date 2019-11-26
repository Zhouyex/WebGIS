// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define({"esri/widgets/Editor/nls/Editor":{widgetLabel:"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440",multipleFeaturesTemplate:"\u0414\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u043e\u0431'\u0454\u043a\u0442\u0456\u0432 ({total})",untitledFeatureTemplate:"\u041e\u0431'\u0454\u043a\u0442 \u0431\u0435\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0443 {id}",editFeatures:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043e\u0431'\u0454\u043a\u0442\u0438",editFeature:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043e\u0431'\u0454\u043a\u0442",
addFeature:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043e\u0431'\u0454\u043a\u0442",selectTemplate:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0442\u0438\u043f \u043e\u0431'\u0454\u043a\u0442\u0443",selectFeatureToEdit:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043e\u0431'\u0454\u043a\u0442, \u0449\u043e\u0431 \u0439\u043e\u0433\u043e \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438",selectFeature:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043e\u0431\u2019\u0454\u043a\u0442",placeFeature:"\u0420\u043e\u0437\u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043e\u0431'\u0454\u043a\u0442",
placeFeatureOnMap:"\u0420\u043e\u0437\u043c\u0456\u0442\u0438\u0442\u0438 \u043e\u0431'\u0454\u043a\u0442 \u043d\u0430 \u043a\u0430\u0440\u0442\u0456.",add:"\u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f",discardEdits:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f",discardFeature:"\u0412\u0456\u0434\u0445\u0438\u043b\u0438\u0442\u0438 \u043e\u0431'\u0454\u043a\u0442",edit:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f",
keepFeature:"\u0417\u0430\u043b\u0438\u0448\u0438\u0442\u0438 \u043e\u0431'\u0454\u043a\u0442",continueAdding:"\u041f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438 \u0434\u043e\u0434\u0430\u043d\u043d\u044f",continueEditing:"\u041f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438 \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f",editing:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f",warning:"\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0430",retry:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0438",
ignore:"\u0406\u0433\u043d\u043e\u0440\u0443\u0432\u0430\u0442\u0438",deleteWarningTitle:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0446\u0435\u0439 \u043e\u0431'\u0454\u043a\u0442?",deleteWarningMessage:"\u0426\u0435\u0439 \u043e\u0431'\u0454\u043a\u0442 \u0431\u0443\u0434\u0435 \u043d\u0430\u0437\u0430\u0432\u0436\u0434\u0438 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e.",cancelEditTitle:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f?",
cancelAddTitle:"\u0412\u0456\u0434\u0445\u0438\u043b\u0438\u0442\u0438 \u043e\u0431'\u0454\u043a\u0442?",cancelAddWarningMessage:"\u0426\u0435\u0439 \u043e\u0431'\u0454\u043a\u0442 \u0431\u0443\u0434\u0435 \u0432\u0442\u0440\u0430\u0447\u0435\u043d\u0438\u0439",cancelEditWarningMessage:"\u041e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u043e\u0431'\u0454\u043a\u0442\u0443 \u0431\u0443\u0434\u0443\u0442\u044c \u0432\u0442\u0440\u0430\u0447\u0435\u043d\u0456.",
cancelRequestTitle:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0440\u043e\u0431\u043e\u0447\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u0441?",cancelRequestWarningMessage:"\u0411\u0443\u043b\u043e \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043e \u0437\u0430\u043f\u0438\u0442 \u043d\u0430 \u0441\u043a\u0430\u0441\u0443\u0432\u0430\u043d\u043d\u044f \u0446\u044c\u043e\u0433\u043e \u0440\u043e\u0431\u043e\u0447\u043e\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0443.",errorWarningTitle:"\u041e\u0439, \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a",
errorWarningMessageTemplate:"\u0417\u043c\u0456\u043d\u0438 \u043d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0437\u0431\u0435\u0440\u0435\u0433\u0442\u0438: {errorMessage}",clickToFinishTemplate:"\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c {button} \u0434\u043b\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044f.",tips:{clickToStart:"\u041a\u043b\u0430\u0446\u043d\u0456\u0442\u044c, \u0449\u043e\u0431 \u043f\u043e\u0447\u0430\u0442\u0438 \u043c\u0430\u043b\u044e\u0432\u0430\u043d\u043d\u044f.",
clickToContinue:"\u041a\u043b\u0430\u0446\u043d\u0456\u0442\u044c, \u0449\u043e\u0431 \u043f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438 \u043c\u0430\u043b\u044e\u0432\u0430\u043d\u043d\u044f.",clickToAddPoint:"\u041a\u043b\u0430\u0446\u043d\u0456\u0442\u044c, \u0449\u043e\u0431 \u0434\u043e\u0434\u0430\u0442\u0438 \u0442\u043e\u0447\u043a\u0443.",clickToContinueThenDoubleClickToEnd:"\u041a\u043b\u0430\u0446\u043d\u0456\u0442\u044c, \u0449\u043e\u0431 \u043f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438 \u043c\u0430\u043b\u044e\u0432\u0430\u043d\u043d\u044f, \u043f\u043e\u0442\u0456\u043c \u0434\u0432\u0456\u0447\u0456 \u043a\u043b\u0430\u0446\u043d\u0456\u0442\u044c, \u0449\u043e\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438.",
clickToAddFeature:"\u041a\u043b\u0430\u0446\u043d\u0456\u0442\u044c, \u0449\u043e\u0431 \u0434\u043e\u0434\u0430\u0442\u0438 \u043e\u0431'\u0454\u043a\u0442."},_localized:{}},"esri/widgets/FeatureTemplates/nls/FeatureTemplates":{widgetLabel:"\u0428\u0430\u0431\u043b\u043e\u043d\u0438 \u043e\u0431'\u0454\u043a\u0442\u0456\u0432",filterPlaceholder:"\u0422\u0438\u043f\u0438 \u0444\u0456\u043b\u044c\u0442\u0440\u0443",noMatches:"\u0415\u043b\u0435\u043c\u0435\u043d\u0442\u0438 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e",
noItems:"\u041d\u0435\u043c\u0430\u0454 \u0448\u0430\u0431\u043b\u043e\u043d\u0456\u0432 \u0434\u043b\u044f \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f",_localized:{}},"dojo/cldr/nls/gregorian":{"dateFormatItem-Ehm":"E h:mm a","days-standAlone-short":"\u043d\u0434 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),"months-format-narrow":"\u0441\u043b\u0431\u043a\u0442\u0447\u043b\u0441\u0432\u0436\u043b\u0433".split(""),"field-second-relative+0":"\u0437\u0430\u0440\u0430\u0437",
"quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"\u0434\u0435\u043d\u044c \u0442\u0438\u0436\u043d\u044f","dateFormatItem-yQQQ":"QQQ y","dateFormatItem-yMEd":"E, dd.MM.y","field-wed-relative+0":"\u0446\u0456\u0454\u0457 \u0441\u0435\u0440\u0435\u0434\u0438","field-wed-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457 \u0441\u0435\u0440\u0435\u0434\u0438","dateFormatItem-GyMMMEd":"E, d MMM y G","dateFormatItem-MMMEd":"E, d MMM",eraNarrow:["\u0434\u043e \u043d.\u0435.",
"\u043d.\u0435."],"field-tue-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0433\u043e \u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430","days-format-short":"\u043d\u0434 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d MMMM y '\u0440'.","field-fri-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0457 \u043f\u02bc\u044f\u0442\u043d\u0438\u0446\u0456","field-wed-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0457 \u0441\u0435\u0440\u0435\u0434\u0438",
"months-format-wide":"\u0441\u0456\u0447\u043d\u044f \u043b\u044e\u0442\u043e\u0433\u043e \u0431\u0435\u0440\u0435\u0437\u043d\u044f \u043a\u0432\u0456\u0442\u043d\u044f \u0442\u0440\u0430\u0432\u043d\u044f \u0447\u0435\u0440\u0432\u043d\u044f \u043b\u0438\u043f\u043d\u044f \u0441\u0435\u0440\u043f\u043d\u044f \u0432\u0435\u0440\u0435\u0441\u043d\u044f \u0436\u043e\u0432\u0442\u043d\u044f \u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430 \u0433\u0440\u0443\u0434\u043d\u044f".split(" "),"dateTimeFormat-medium":"{1}, {0}",
"dayPeriods-format-wide-pm":"\u043f\u043f","dateFormat-full":"EEEE, d MMMM y '\u0440'.","field-thu-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0433\u043e \u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430","dateFormatItem-Md":"dd.MM","dayPeriods-format-abbr-am":"\u0434\u043f","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dayPeriods-format-wide-noon":"\u043f\u043e\u043f\u043e\u043b\u0443\u0434\u043d\u0456","dateFormatItem-yMd":"dd.MM.y","field-era":"\u0435\u0440\u0430","dateFormatItem-yM":"MM.y",
"months-standAlone-wide":"\u0441\u0456\u0447\u0435\u043d\u044c \u043b\u044e\u0442\u0438\u0439 \u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c \u043a\u0432\u0456\u0442\u0435\u043d\u044c \u0442\u0440\u0430\u0432\u0435\u043d\u044c \u0447\u0435\u0440\u0432\u0435\u043d\u044c \u043b\u0438\u043f\u0435\u043d\u044c \u0441\u0435\u0440\u043f\u0435\u043d\u044c \u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c \u0436\u043e\u0432\u0442\u0435\u043d\u044c \u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434 \u0433\u0440\u0443\u0434\u0435\u043d\u044c".split(" "),
"timeFormat-short":"HH:mm","quarters-format-wide":["1-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"],"dateFormatItem-yQQQQ":"QQQQ y '\u0440'.","timeFormat-long":"HH:mm:ss z","field-year":"\u0440\u0456\u043a","dateFormatItem-yMMM":"LLL y","dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"\u0433\u043e\u0434\u0438\u043d\u0430","months-format-abbr":"\u0441\u0456\u0447. \u043b\u044e\u0442. \u0431\u0435\u0440. \u043a\u0432\u0456\u0442. \u0442\u0440\u0430\u0432. \u0447\u0435\u0440\u0432. \u043b\u0438\u043f. \u0441\u0435\u0440\u043f. \u0432\u0435\u0440. \u0436\u043e\u0432\u0442. \u043b\u0438\u0441\u0442. \u0433\u0440\u0443\u0434.".split(" "),
"field-sat-relative+0":"\u0446\u0456\u0454\u0457 \u0441\u0443\u0431\u043e\u0442\u0438","field-sat-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457 \u0441\u0443\u0431\u043e\u0442\u0438","timeFormat-full":"HH:mm:ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"\u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456","field-thu-relative+0":"\u0446\u044c\u043e\u0433\u043e \u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430","field-day-relative+1":"\u0437\u0430\u0432\u0442\u0440\u0430",
"field-thu-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430","dateFormatItem-GyMMMd":"d MMM y G","dateFormatItem-H":"HH","months-standAlone-abbr":"\u0441\u0456\u0447 \u043b\u044e\u0442 \u0431\u0435\u0440 \u043a\u0432\u0456 \u0442\u0440\u0430 \u0447\u0435\u0440 \u043b\u0438\u043f \u0441\u0435\u0440 \u0432\u0435\u0440 \u0436\u043e\u0432 \u043b\u0438\u0441 \u0433\u0440\u0443".split(" "),"quarters-format-abbr":["1-\u0439 \u043a\u0432.",
"2-\u0439 \u043a\u0432.","3-\u0439 \u043a\u0432.","4-\u0439 \u043a\u0432."],"quarters-standAlone-wide":["1-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"],"dateFormatItem-Gy":"y G","dateFormatItem-M":"LL","days-standAlone-wide":"\u043d\u0435\u0434\u0456\u043b\u044f \u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a \u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a \u0441\u0435\u0440\u0435\u0434\u0430 \u0447\u0435\u0442\u0432\u0435\u0440 \u043f\u02bc\u044f\u0442\u043d\u0438\u0446\u044f \u0441\u0443\u0431\u043e\u0442\u0430".split(" "),
"dayPeriods-format-abbr-noon":"\u043f\u043e\u043f\u043e\u043b\u0443\u0434\u043d\u0456","timeFormat-medium":"HH:mm:ss","field-sun-relative+0":"\u0446\u0456\u0454\u0457 \u043d\u0435\u0434\u0456\u043b\u0456","dateFormatItem-Hm":"HH:mm","field-sun-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457 \u043d\u0435\u0434\u0456\u043b\u0456","quarters-standAlone-abbr":["1-\u0439 \u043a\u0432.","2-\u0439 \u043a\u0432.","3-\u0439 \u043a\u0432.","4-\u0439 \u043a\u0432."],eraAbbr:["\u0434\u043e \u043d. \u0435.",
"\u043d. \u0435."],"field-minute":"\u0445\u0432\u0438\u043b\u0438\u043d\u0430","field-dayperiod":"\u0447\u0430\u0441\u0442\u0438\u043d\u0430 \u0434\u043e\u0431\u0438","days-standAlone-abbr":"\u043d\u0434 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),"dateFormatItem-d":"d","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"\u0443\u0447\u043e\u0440\u0430","dateTimeFormat-long":"{1} '\u043e' {0}","dayPeriods-format-narrow-am":"\u0434\u043f",
"dateFormatItem-h":"h a","dateFormatItem-MMMd":"d MMM","dateFormatItem-MEd":"E, dd.MM","dateTimeFormat-full":"{1} '\u043e' {0}","field-fri-relative+0":"\u0446\u0456\u0454\u0457 \u043f\u02bc\u044f\u0442\u043d\u0438\u0446\u0456","field-fri-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457 \u043f\u02bc\u044f\u0442\u043d\u0438\u0446\u0456","field-day":"\u0434\u0435\u043d\u044c","days-format-wide":"\u043d\u0435\u0434\u0456\u043b\u044f \u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a \u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a \u0441\u0435\u0440\u0435\u0434\u0430 \u0447\u0435\u0442\u0432\u0435\u0440 \u043f\u02bc\u044f\u0442\u043d\u0438\u0446\u044f \u0441\u0443\u0431\u043e\u0442\u0430".split(" "),
"field-zone":"\u0447\u0430\u0441\u043e\u0432\u0438\u0439 \u043f\u043e\u044f\u0441","months-standAlone-narrow":"\u0421\u041b\u0411\u041a\u0422\u0427\u041b\u0421\u0412\u0416\u041b\u0413".split(""),"dateFormatItem-y":"y","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","field-year-relative+-1":"\u0442\u043e\u0440\u0456\u043a","field-month-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0433\u043e \u043c\u0456\u0441\u044f\u0446\u044f","dateTimeFormats-appendItem-Year":"{1} {0}","dateFormatItem-hm":"h:mm a",
"dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"\u043f\u043f","days-format-abbr":"\u043d\u0434 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),eraNames:["\u0434\u043e \u043d\u0430\u0448\u043e\u0457 \u0435\u0440\u0438","\u043d\u0430\u0448\u043e\u0457 \u0435\u0440\u0438"],"dateFormatItem-yMMMd":"d MMM y","days-format-narrow":"\u041d\u041f\u0412\u0421\u0427\u041f\u0421".split(""),"field-month":"\u043c\u0456\u0441\u044f\u0446\u044c",
"days-standAlone-narrow":"\u041d\u041f\u0412\u0421\u0427\u041f\u0421".split(""),"dateFormatItem-MMM":"LLL","field-tue-relative+0":"\u0446\u044c\u043e\u0433\u043e \u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","field-tue-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430","dayPeriods-format-wide-am":"\u0434\u043f","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})",
"dateFormatItem-EHm":"E HH:mm","field-mon-relative+0":"\u0446\u044c\u043e\u0433\u043e \u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430","field-mon-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430","dateFormat-short":"dd.MM.yy","dateFormatItem-EHms":"E HH:mm:ss","dateFormatItem-Ehms":"E h:mm:ss a","dayPeriods-format-narrow-noon":"\u043f","field-second":"\u0441\u0435\u043a\u0443\u043d\u0434\u0430","field-sat-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0457 \u0441\u0443\u0431\u043e\u0442\u0438",
"dateFormatItem-yMMMEd":"E, d MMM y","field-sun-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0457 \u043d\u0435\u0434\u0456\u043b\u0456","field-month-relative+0":"\u0446\u044c\u043e\u0433\u043e \u043c\u0456\u0441\u044f\u0446\u044f","field-month-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u043c\u0456\u0441\u044f\u0446\u044f","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateFormatItem-Ed":"E, d","field-week":"\u0442\u0438\u0436\u0434\u0435\u043d\u044c","dateFormat-medium":"d MMM y '\u0440'.",
"field-week-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0433\u043e \u0442\u0438\u0436\u043d\u044f","field-year-relative+0":"\u0446\u044c\u043e\u0433\u043e \u0440\u043e\u043a\u0443","field-year-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u0440\u043e\u043a\u0443","dayPeriods-format-narrow-pm":"\u043f\u043f","dateTimeFormat-short":"{1}, {0}","dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hms":"h:mm:ss a","dateFormatItem-GyMMM":"LLL y G","field-mon-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0433\u043e \u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430",
"field-week-relative+0":"\u0446\u044c\u043e\u0433\u043e \u0442\u0438\u0436\u043d\u044f","field-week-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u0442\u0438\u0436\u043d\u044f","dayPeriods-format-abbr-midnight":"\u043e\u043f\u0456\u0432\u043d\u043e\u0447\u0456","dayPeriods-format-abbr-morning1":"\u0440\u0430\u043d\u043a\u0443","dayPeriods-format-abbr-afternoon1":"\u0434\u043d\u044f","dayPeriods-format-abbr-evening1":"\u0432\u0435\u0447\u043e\u0440\u0430","dayPeriods-format-abbr-night1":"\u043d\u043e\u0447\u0456",
"dayPeriods-format-narrow-midnight":"\u043f\u0456\u0432\u043d\u0456\u0447","dayPeriods-format-narrow-morning1":"\u0440\u0430\u043d\u043a\u0443","dayPeriods-format-narrow-afternoon1":"\u0434\u043d\u044f","dayPeriods-format-narrow-evening1":"\u0432\u0435\u0447\u043e\u0440\u0430","dayPeriods-format-narrow-night1":"\u043d\u043e\u0447\u0456","dayPeriods-format-wide-midnight":"\u043e\u043f\u0456\u0432\u043d\u043e\u0447\u0456","dayPeriods-format-wide-morning1":"\u0440\u0430\u043d\u043a\u0443","dayPeriods-format-wide-afternoon1":"\u0434\u043d\u044f",
"dayPeriods-format-wide-evening1":"\u0432\u0435\u0447\u043e\u0440\u0430","dayPeriods-format-wide-night1":"\u043d\u043e\u0447\u0456","dayPeriods-standAlone-abbr-midnight":"\u043f\u0456\u0432\u043d\u0456\u0447","dayPeriods-standAlone-abbr-am":"\u0434\u043f","dayPeriods-standAlone-abbr-noon":"\u043f\u043e\u043b\u0443\u0434\u0435\u043d\u044c","dayPeriods-standAlone-abbr-pm":"\u043f\u043f","dayPeriods-standAlone-abbr-morning1":"\u0440\u0430\u043d\u043e\u043a","dayPeriods-standAlone-abbr-afternoon1":"\u0434\u0435\u043d\u044c",
"dayPeriods-standAlone-abbr-evening1":"\u0432\u0435\u0447\u0456\u0440","dayPeriods-standAlone-abbr-night1":"\u043d\u0456\u0447","dayPeriods-standAlone-narrow-midnight":"\u043f\u0456\u0432\u043d\u0456\u0447","dayPeriods-standAlone-narrow-am":"\u0434\u043f","dayPeriods-standAlone-narrow-noon":"\u043f\u043e\u043b\u0443\u0434\u0435\u043d\u044c","dayPeriods-standAlone-narrow-pm":"\u043f\u043f","dayPeriods-standAlone-narrow-morning1":"\u0440\u0430\u043d\u043e\u043a","dayPeriods-standAlone-narrow-afternoon1":"\u0434\u0435\u043d\u044c",
"dayPeriods-standAlone-narrow-evening1":"\u0432\u0435\u0447\u0456\u0440","dayPeriods-standAlone-narrow-night1":"\u043d\u0456\u0447","dayPeriods-standAlone-wide-midnight":"\u043f\u0456\u0432\u043d\u0456\u0447","dayPeriods-standAlone-wide-am":"\u0434\u043f","dayPeriods-standAlone-wide-noon":"\u043f\u043e\u043b\u0443\u0434\u0435\u043d\u044c","dayPeriods-standAlone-wide-pm":"\u043f\u043f","dayPeriods-standAlone-wide-morning1":"\u0440\u0430\u043d\u043e\u043a","dayPeriods-standAlone-wide-afternoon1":"\u0434\u0435\u043d\u044c",
"dayPeriods-standAlone-wide-evening1":"\u0432\u0435\u0447\u0456\u0440","dayPeriods-standAlone-wide-night1":"\u043d\u0456\u0447","dateFormatItem-E":"ccc","dateFormatItem-hmsv":"h:mm:ss a v","dateFormatItem-Hmsv":"HH:mm:ss v","dateFormatItem-hmv":"h:mm a v","dateFormatItem-Hmv":"HH:mm v","dateFormatItem-MMMMd":"d MMMM","dateFormatItem-MMMMEd":"E, d MMMM","dateFormatItem-MMMMW":"W-'\u0439' '\u0442\u0438\u0436'. MMMM","dateFormatItem-yMMMM":"LLLL y","dateFormatItem-yw":"w-'\u0439' '\u0442\u0438\u0436'. y '\u0440'.",
"field-year-short":"\u0440.","field-year-short-relative+-1":"\u0442\u043e\u0440\u0456\u043a","field-year-short-relative+0":"\u0446\u044c\u043e\u0433\u043e \u0440\u043e\u043a\u0443","field-year-short-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u0440\u043e\u043a\u0443","field-year-narrow":"\u0440.","field-year-narrow-relative+-1":"\u0442\u043e\u0440\u0456\u043a","field-year-narrow-relative+0":"\u0446\u044c\u043e\u0433\u043e \u0440\u043e\u043a\u0443","field-year-narrow-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u0440\u043e\u043a\u0443",
"field-quarter":"\u043a\u0432\u0430\u0440\u0442\u0430\u043b","field-quarter-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0433\u043e \u043a\u0432\u0430\u0440\u0442\u0430\u043b\u0443","field-quarter-relative+0":"\u0446\u044c\u043e\u0433\u043e \u043a\u0432\u0430\u0440\u0442\u0430\u043b\u0443","field-quarter-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u043a\u0432\u0430\u0440\u0442\u0430\u043b\u0443","field-quarter-short":"\u043a\u0432.","field-quarter-short-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0433\u043e \u043a\u0432.",
"field-quarter-short-relative+0":"\u0446\u044c\u043e\u0433\u043e \u043a\u0432.","field-quarter-short-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u043a\u0432.","field-quarter-narrow":"\u043a\u0432.","field-quarter-narrow-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0433\u043e \u043a\u0432.","field-quarter-narrow-relative+0":"\u0446\u044c\u043e\u0433\u043e \u043a\u0432.","field-quarter-narrow-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u043a\u0432.",
"field-month-short":"\u043c\u0456\u0441.","field-month-narrow":"\u043c\u0456\u0441.","field-week-short":"\u0442\u0438\u0436.","field-week-narrow":"\u0442\u0438\u0436.","field-day-relative+-2":"\u043f\u043e\u0437\u0430\u0432\u0447\u043e\u0440\u0430","field-day-relative+2":"\u043f\u0456\u0441\u043b\u044f\u0437\u0430\u0432\u0442\u0440\u0430","field-day-short":"\u0434.","field-day-short-relative+-2":"\u043f\u043e\u0437\u0430\u0432\u0447\u043e\u0440\u0430","field-day-short-relative+-1":"\u0443\u0447\u043e\u0440\u0430",
"field-day-short-relative+0":"\u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456","field-day-short-relative+1":"\u0437\u0430\u0432\u0442\u0440\u0430","field-day-short-relative+2":"\u043f\u0456\u0441\u043b\u044f\u0437\u0430\u0432\u0442\u0440\u0430","field-day-narrow":"\u0434.","field-day-narrow-relative+-2":"\u043f\u043e\u0437\u0430\u0432\u0447\u043e\u0440\u0430","field-day-narrow-relative+-1":"\u0443\u0447\u043e\u0440\u0430","field-day-narrow-relative+0":"\u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456",
"field-day-narrow-relative+1":"\u0437\u0430\u0432\u0442\u0440\u0430","field-day-narrow-relative+2":"\u043f\u0456\u0441\u043b\u044f\u0437\u0430\u0432\u0442\u0440\u0430","field-sun-short-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0457 \u043d\u0434","field-sun-short-relative+0":"\u0446\u0456\u0454\u0457 \u043d\u0434","field-sun-short-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457 \u043d\u0434","field-sun-narrow-relative+-1":"\u043c\u0438\u043d. \u043d\u0434","field-sun-narrow-relative+0":"\u0446\u0456\u0454\u0457 \u043d\u0434",
"field-sun-narrow-relative+1":"\u043d\u0430\u0441\u0442. \u043d\u0434","field-mon-short-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0433\u043e \u043f\u043d","field-mon-short-relative+0":"\u0446\u044c\u043e\u0433\u043e \u043f\u043d","field-mon-short-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u043f\u043d","field-mon-narrow-relative+-1":"\u043c\u0438\u043d. \u043f\u043d","field-mon-narrow-relative+0":"\u0446\u044c\u043e\u0433\u043e \u043f\u043d","field-mon-narrow-relative+1":"\u043d\u0430\u0441\u0442. \u043f\u043d",
"field-tue-short-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0433\u043e \u0432\u0442","field-tue-short-relative+0":"\u0446\u044c\u043e\u0433\u043e \u0432\u0442","field-tue-short-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u0432\u0442","field-tue-narrow-relative+-1":"\u043c\u0438\u043d. \u0432\u0442","field-tue-narrow-relative+0":"\u0446\u044c\u043e\u0433\u043e \u0432\u0442","field-tue-narrow-relative+1":"\u043d\u0430\u0441\u0442. \u0432\u0442","field-wed-short-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0457 \u0441\u0440",
"field-wed-short-relative+0":"\u0446\u0456\u0454\u0457 \u0441\u0440","field-wed-short-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457 \u0441\u0440","field-wed-narrow-relative+-1":"\u043c\u0438\u043d. \u0441\u0440","field-wed-narrow-relative+0":"\u0446\u0456\u0454\u0457 \u0441\u0440","field-wed-narrow-relative+1":"\u043d\u0430\u0441\u0442. \u0441\u0440","field-thu-short-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0433\u043e \u0447\u0442","field-thu-short-relative+0":"\u0446\u044c\u043e\u0433\u043e \u0447\u0442",
"field-thu-short-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u0447\u0442","field-thu-narrow-relative+-1":"\u043c\u0438\u043d. \u0447\u0442","field-thu-narrow-relative+0":"\u0446\u044c\u043e\u0433\u043e \u0447\u0442","field-thu-narrow-relative+1":"\u043d\u0430\u0441\u0442. \u0447\u0442","field-fri-short-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0457 \u043f\u0442","field-fri-short-relative+0":"\u0446\u0456\u0454\u0457 \u043f\u0442","field-fri-short-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457 \u043f\u0442",
"field-fri-narrow-relative+-1":"\u043c\u0438\u043d. \u043f\u0442","field-fri-narrow-relative+0":"\u0446\u0456\u0454\u0457 \u043f\u0442","field-fri-narrow-relative+1":"\u043d\u0430\u0441\u0442. \u043f\u0442","field-sat-short-relative+-1":"\u043c\u0438\u043d\u0443\u043b\u043e\u0457 \u0441\u0431","field-sat-short-relative+0":"\u0446\u0456\u0454\u0457 \u0441\u0431","field-sat-short-relative+1":"\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457 \u0441\u0431","field-sat-narrow-relative+-1":"\u043c\u0438\u043d. \u0441\u0431",
"field-sat-narrow-relative+0":"\u0446\u0456\u0454\u0457 \u0441\u0431","field-sat-narrow-relative+1":"\u043d\u0430\u0441\u0442. \u0441\u0431","field-hour-relative+0":"\u0446\u0456\u0454\u0457 \u0433\u043e\u0434\u0438\u043d\u0438","field-hour-short":"\u0433\u043e\u0434","field-hour-short-relative+0":"\u0446\u0456\u0454\u0457 \u0433\u043e\u0434\u0438\u043d\u0438","field-hour-narrow":"\u0433\u043e\u0434","field-hour-narrow-relative+0":"\u0446\u0456\u0454\u0457 \u0433\u043e\u0434\u0438\u043d\u0438","field-minute-relative+0":"\u0446\u0456\u0454\u0457 \u0445\u0432\u0438\u043b\u0438\u043d\u0438",
"field-minute-short":"\u0445\u0432","field-minute-short-relative+0":"\u0446\u0456\u0454\u0457 \u0445\u0432\u0438\u043b\u0438\u043d\u0438","field-minute-narrow":"\u0445\u0432","field-minute-narrow-relative+0":"\u0446\u0456\u0454\u0457 \u0445\u0432\u0438\u043b\u0438\u043d\u0438","field-second-short":"\u0441","field-second-narrow":"\u0441",_localized:{}},"esri/widgets/FeatureForm/nls/FeatureForm":{empty:"- \u043f\u0443\u0441\u0442\u043e -",validationErrors:{cannotBeNull:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f",
outsideRange:"\u0417\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043c\u0430\u0454 \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0438\u0441\u044f \u0432 \u0434\u0456\u0430\u043f\u0430\u0437\u043e\u043d\u0456 \u0432\u0456\u0434 {min} \u0434\u043e {max}",invalidCodedValue:"\u0417\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043e\u0434\u043d\u0438\u043c \u0437 \u043f\u0435\u0440\u0435\u043b\u0456\u0447\u0435\u043d\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u044c.",
invalidType:"\u041d\u0435 \u043f\u0440\u0438\u043f\u0443\u0441\u0442\u0438\u043c\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f"},_localized:{}}});