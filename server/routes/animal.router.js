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
    const queryString=(`SELECT "dog"."name" FROM "attributes" 
    JOIN "dog" ON "dog"."id" = "attributes"."dog_id"
    WHERE $1 = TRUE`)
    const queryValues = [
    ]
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