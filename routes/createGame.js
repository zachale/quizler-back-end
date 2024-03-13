var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {

  seed = generateRoomSeed()

  author = req.body.author

  // author = req.params['author']
  console.log(req.query.author)

  res.send({
    "author": author,
    "attributes": {
      "seed": seed,
    }

   });
});

/* 
* Randomly generates a 5 letter room seed
*/
function generateRoomSeed(){
  let seed = []
  
  for(let i = 0; i < 5; i++){
    
    // Creates a number between 0 and 26
    let numeric = Math.floor(Math.random() * 27)

    // Appends the numeric to the string as its ascii alternate
    seed.push(String.fromCharCode(numeric+65))

  }

  return seed.join('');
}


module.exports = router;
