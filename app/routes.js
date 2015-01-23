var glob = require('glob');
var models = glob.sync(__dirname + '/models/*.js');
models.forEach(function (model) {
  require(model);
});

module.exports = function(app) {
	app.get('/api/nerds', function(req, res) {
		Nerd.find(function(err, nerds) {
			if(err) res.send(err);
			res.json(nerds);
		});
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});
};
