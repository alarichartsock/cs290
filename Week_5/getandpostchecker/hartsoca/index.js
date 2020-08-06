var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 8432);

app.get('/',function(req,res){
	var parameters = [];
	for (var i in req.query) {
		parameters.push({'parameter':i,'value':req.query[i]})
	}
	var context = {};
	context.data = parameters;
	res.render('get',context);
});

app.post('/',function(req,res){
	var parameters = [];
	for (var i in req.query) {
		parameters.push({'parameter':i,'value':req.query[i]})
	}
	var context = {};
	context.data = parameters;

	var bparameters = [];
	for (var j in req.body) {
		bparameters.push({'parameter':j,'value':req.body[j]})
	}
	context.data2 = bparameters;
	res.render('post',context);
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

