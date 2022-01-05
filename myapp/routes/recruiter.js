var express = require('express');
var read = require('./module/read');
var create = require('./module/create');
var update = require('./module/update');
var del = require('./module/delete');
var router = express.Router();

router.get('/my_job_offer/:p1', read.displayAllJobOfferByRecruiter);
router.get('/app_by_offer/:p1', read.applicationByJobOffer);
router.get('/full_one_job_offer/:p1', read.displayFullOneJobOffer); 

router.post('/create_job_offer', create.job_offerByRecruiter);

router.put('/job_offer', update.job_offer);
router.put('/people', update.people);

router.delete('/application', del.application);
router.delete('/job_offer', del.job_offer);


module.exports = router;
