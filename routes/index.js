const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('test')
})

module.exports = router;