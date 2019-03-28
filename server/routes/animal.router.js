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
router.get('/dog', (req,res)=>{
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
                            "not-shedding" = $9 AND

                            "activity-xlow" = $10 OR 
                            "activity-low" = $11 OR 
                            "activity-medium" = $12 OR 
                            "activity-high" = $13 OR 
                            "activity-xhigh" = $14 AND

                            "train-basics" = $15 AND

                            "train-easy" = $16 OR 
                            "train-hard" = $17 AND

                            "dogs" = $18 AND
                            "cats" = $19 AND
                            "kids" = $20 AND
                            "other-animals" = $21 AND
                            "single-animal" = $22 AND
                            "dog-park" = $23 AND
                            "crowds" = $24 AND
                            "apartment" = $25 AND
                            "physical-fence" = $26 AND
                            "leash-walking" = $27;`;
    const queryValues = [req.body.female, req.body.male,
                req.body.xsmall,
                req.body.small,
                req.body.medium,
                req.body.large,
                req.body.xlarge,
                req.body.shedding,
                req.body.not-shedding,
                req.body.activity-xlow,
                req.body.activity-low,
                req.body.activity-medium,
                req.body.activity-high,
                req.body.activity-xhigh,
                req.body.train-basics,
                req.body.train-easy,
                req.body.train-hard,
                req.body.dogs,
                req.body.cats,
                req.body.kids,
                req.body.other-animals,
                req.body.single-animal,
                req.body.dog-park,
                req.body.crowds,
                req.body.apartment,
                req.body.physical-fence,
                req.body.leash-walking];

    pool.query(queryString, queryValues)
    .then((result) => { res.send(result.rows)
    console.log(result)})
    
})
/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;

//delete route
router.delete('/:id', (req, res) => {
    const queryString = 'DELETE FROM "dog" WHERE id=$1';
    console.log('query', req.query.id, 'params', req.params.id)
    pool.query(queryString, [Number(req.params.id)])
      .then(() => 
      { res.sendStatus(200); 
    }).catch((err) => {
        console.log('Error completing SELECT dog query', err);
        res.sendStatus(500);
      });
  });

