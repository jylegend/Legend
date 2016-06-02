var log4js=require("log4js");

log4js.configure({
	"appenders":[{
		"type": "dateFile",
	    "filename": "test.log",
	    "pattern": "-yyyy-MM-dd",
	    "alwaysIncludePattern": false,
	    "category": 'dateFileLog'
	}],
	"replaceConsole":false,
	"levels":{
		dateFilelog:"INFO"
	}

});
var dateFilelog=log4js.getLogger("dateFilelog");
exports.logger=dateFilelog;
exports.use=function(app){
	app.use(log4js.connectLogger(dateFilelog,{level:"debug",formart:":method :url"}));
}