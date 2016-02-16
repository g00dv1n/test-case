
var express = require('express');
var Users = require('./Users.js');
var bodyParser = require('body-parser');
var app = express();
var rateLimit = require('express-rate-limit');

var limiter = rateLimit({/* config */

	handler: function (req, res) {
		var tmp = {

			 Auth: 'Banned',
			 Time: 300
		};
		res.json(tmp);
		res.end();
  	}


});


app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());    
app.use(limiter);

app.get('*', function(req, res) {
		res.redirect('/');
    });

app.listen(8080, function () {
  console.log('Server app listening on port 8080!');
});

app.get('/', function(req, res) {
        res.sendFile(__dirname + '/app/index.html'); 
    });


app.post('/login', function(req, res) {
        
		console.log(req.body);
		console.log(Users.checkAuth(req.body));
		res.json(Users.checkAuth(req.body));
		res.end();

    });





