let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
	res.render('profile');
});

module.exports = router;
