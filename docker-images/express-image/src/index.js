var Chance = require('chance');
var chance = new Chance();

const express = require('express')
const app = express()

app.get('/api/express', function (req, res) {
  res.send( generateAnimals() )
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


function generateAnimals() {

	var nbAnimals = chance.integer({
		min: 0,
		max: 10
	});

	console.log(nbAnimals);
	var animals = [];
	for (var i = 0; i < nbAnimals; i++) {

		var gender = chance.gender();
		var birthYear = chance.year({
			min: 1986,
			max: 1996
		});

		animals.push({
			animal: chance.animal(),
      			color: chance.color(),
			gender: gender,
			birthday: chance.birthday({
				year: birthYear
			}),
      			city: chance.city()
		});
	}

	console.log(animals)
	return animals;
}
