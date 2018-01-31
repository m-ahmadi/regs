let express = require('express');
let router = express.Router();

router.get('/:step', (req, res, next) => {
	res.render(`create-service-center/step${req.params.step}`);
});

module.exports = router;
