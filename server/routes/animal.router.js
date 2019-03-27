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
router.get('/dog', (req,res)=>{ //josh was trying something
    const queryString = `
                            SELECT "dog"."name" FROM "attributes" 
                            JOIN "dog" ON "dog"."id" = "attributes"."dog_id"`;

    const queryValues = req.body;

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

//   WHERE $2 = TRUE || 
//                             WHERE $1 = TRUE || 
//                             WHERE $3 = TRUE || 
//                             WHERE $4 = TRUE || 
//                             WHERE $5 = TRUE || 
//                             WHERE $6 = TRUE || 
//                             WHERE $7 = TRUE || 
//                             WHERE $8 = TRUE || 
//                             WHERE $9 = TRUE || 
//                             WHERE $10 = TRUE || 
//                             WHERE $11 = TRUE || 
//                             WHERE $12 = TRUE || 
//                             WHERE $13 = TRUE || 
//                             WHERE $14 = TRUE || 
//                             WHERE $15 = TRUE || 
//                             WHERE $16 = TRUE || 
//                             WHERE $17 = TRUE || 
//                             WHERE $18 = TRUE || 
//                             WHERE $19 = TRUE || 
//                             WHERE $20 = TRUE || 
//                             WHERE $21 = TRUE || 
//                             WHERE $22 = TRUE || 
//                             WHERE $23 = TRUE || 
//                             WHERE $24 = TRUE || 
//                             WHERE $25 = TRUE || 
//                             WHERE $26 = TRUE || 