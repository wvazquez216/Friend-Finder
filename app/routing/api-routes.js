

var friendData 	= require('../data/friends.js');

var path 			= require('path');

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendData);
		
	});
	
	app.post('/api/friends', function(req, res){
		var closestDifference = 100;
		var difference = 0;
		var match;

		friendData.forEach(function(friend) {
				console.log(friend);
				console.log(req.body);
		difference = eval(friend.scores.map(function (num, index) {
		return Math.abs(num - req.body.scores[index]);
		}).join('+')); 

		if (difference <= closestDifference) {
		closestDifference = difference;
		match = friend;
		}
	});
		  res.json(match);

    friendData.push(req.body);

    });

	};

	