var Chance = require('chance');
var chance = new Chance();

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send( generateStudents() )
})

app.get('/test', function(req, res) {
  res.send('Test RES')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


function generateStudents() {

	var nbStudents = chance.integer({
		min: 0,
		max: 10
	});

	console.log(nbStudents);
	var students = [];
	for (var i = 0; i < nbStudents; i++) {

		var gender = chance.gender();
		var birthYear = chance.year({
			min: 1986,
			max: 1996
		});

		students.push({
			firstName: chance.first({
				gender: gender
			}),
			lastName: chance.last(),
			gender: gender,
			birthday: chance.birthday({
				year: birthYear
			})
		});
	}

	console.log(students)
	return students;
}