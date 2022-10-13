const { Router } = require('express');
const router = Router();


router.get('/:name/:age', (req, res, next) => {
    res.status(200).send({
        message : `Hey ${req.params.name},you are ${req.params.age} years old`
    });
})
module.exports = router;
