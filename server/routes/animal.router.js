const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('in GET')
    const queryString = `SELECT * FROM dog`;
    pool.query(queryString)
    .then((result) => { res.send(result.rows); 
    }).catch((err) => {
        console.log('Error completing GET all animals request to db', err);
        res.sendStatus(500);
    });
});
router.post('/dog', (req,res)=>{
    console.log('server side POST route hit');
    const queryString = `
                            SELECT "dog"."name" FROM "attributes" 
                            JOIN "dog" ON "dog"."id" = "attributes"."dog_id"

                            WHERE "female" = $1 OR 
                            "male" = $2 AND

                            "xsmall" = $3 OR
                            "small" = $4 OR
                            "medium" = $5 OR
                            "large" = $6 OR
                            "xlarge" = $7 AND

                            "shedding" = $8 OR
                            "not_shedding" = $9 AND

                            "activity_xlow" = $10 OR 
                            "activity_low" = $11 OR 
                            "activity_medium" = $12 OR 
                            "activity_high" = $13 OR 
                            "activity_xhigh" = $14 AND

                            "train_basics" = $15 AND

                            "train_easy" = $16 OR 
                            "train_hard" = $17 AND

                            "dogs" = $18 AND
                            "cats" = $19 AND
                            "kids" = $20 AND
                            "other_animals" = $21 AND
                            "single_animal" = $22 AND
                            "dog_park" = $23 AND
                            "crowds" = $24 AND
                            "apartment" = $25 AND
                            "fence" = $26 AND
                            "leash_walking" = $27;`;
                            console.log(req.body);
    const queryValues = [req.body.female, req.body.male,
                req.body.xsmall,
                req.body.small,
                req.body.medium,
                req.body.large,
                req.body.xlarge,
                req.body.shedding,
                req.body.not_shedding,
                req.body.activity_xlow,
                req.body.activity_low,
                req.body.activity_medium,
                req.body.activity_high,
                req.body.activity_xhigh,
                req.body.train_basics,
                req.body.train_easy,
                req.body.train_hard,
                req.body.dogs,
                req.body.cats,
                req.body.kids,
                req.body.other_animals,
                req.body.single_animal,
                req.body.dog_park,
                req.body.crowds,
                req.body.apartment,
                req.body.fence,
                req.body.leash_walking];

    pool.query(queryString, queryValues)
    .then((result) => { res.send(result.rows)
    console.log('filter results', result)})
})
/**
 * POST route template
 */
router.post('/add-dog', (req, res) => {
    const newDog = req.body;
    const queryString = `INSERT INTO "dog" ("name", "gender", "age", "size", "breed", "coat", "house_trained", "fixed", "health_needs", "comments", "img_url", "dog_bio")
                      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
    const queryValues = [
      newDog.name,
      newDog.gender,
      newDog.age,
      newDog.size,
      newDog.breed,
      newDog.coat,
      newDog.house_trained,
      newDog.fixed,
      newDog.health_needs,
      newDog.comments,
      newDog.img_url,
      newDog.dog_bio
    ];
    pool.query(queryString, queryValues)
      .then(() => {
        res.sendStatus(201); 
    }).catch((error) => {
        console.log('Error completing INSERT dog query', error);
        res.sendStatus(500);
      });
  });

  router.post('/attribute', (req, res) => {
    const queryString = `INSERT INTO "attributes" ("female", "male", "xsmall", "small", "medium", "large", "xlarge", "shedding", "not_shedding", "activity_xlow", "activity_low", "activity_medium", "activity_high", "activity_xhigh", "train_basics", "train_easy", "train_hard", "dogs", "cats", "kids", "other_animals", "single_animal", "dog_park", "crowds", "apartment", "fence", "leash_walking", "dog_id")
                      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27)`;
    const queryValues = [
        req.body.female, 
        req.body.male,
        req.body.xsmall,
        req.body.small,
        req.body.medium,
        req.body.large,
        req.body.xlarge,
        req.body.shedding,
        req.body.not_shedding,
        req.body.activity_xlow,
        req.body.activity_low,
        req.body.activity_medium,
        req.body.activity_high,
        req.body.activity_xhigh,
        req.body.train_basics,
        req.body.train_easy,
        req.body.train_hard,
        req.body.dogs,
        req.body.cats,
        req.body.kids,
        req.body.other_animals,
        req.body.single_animal,
        req.body.dog_park,
        req.body.crowds,
        req.body.apartment,
        req.body.fence,
        req.body.leash_walking];

    pool.query(queryString, queryValues)
      .then(() => 
      { res.sendStatus(201); 
    }).catch((err) => {
        console.log('Error completing INSERT Attribute query', err);
        res.sendStatus(500);
      });
  });
  
//delete route
router.delete('/:id', (req, res) => {
    const queryString = 'DELETE FROM "dog" WHERE id=$1';
    console.log('query', req.query.id, 'params', req.params.id)
    pool.query(queryString, [Number(req.params.id)])
      .then(() => 
      { res.sendStatus(200); 
    }).catch((err) => {
        console.log('Error completing DELETE dog query', err);
        res.sendStatus(500);
      });
  });

  module.exports = router;