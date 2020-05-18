const express = require('express');
const surveyController = require('./controllers/surveyController');

const router = express.Router();

router.get('/questions', (req, res) => {

});

router.get('/survey', );

router.post('/survey', (req, res) => surveyController.createOne(req, res));

module.exports = router;
