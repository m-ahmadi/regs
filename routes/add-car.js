let express = require('express');
let router = express.Router();

router.get('/:step', (req, res, next) => {
	res.render(`add-car/step${req.params.step}`);
});

module.exports = router;
