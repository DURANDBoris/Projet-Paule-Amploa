var express = require('express');
var read = require('./module/read');
var create = require('./module/create');
var update = require('./module/update');
var del = require('./module/delete');
var router = express.Router();

router.get('/people', read.People);
router.get('/people/:p1', read.onePeople);
router.get('/job_offer', read.displayAllJobOffer);
router.get('/job_offer/:p1', read.displayFullOneJobOffer);
router.get('/company', read.displayAllCompany);
router.get('/company/:p1', read.displayFullOneCompany);
router.get('/recruiter', read.displayAllRecruiter);
router.get('/recruiter/company', read.selectAllCompany);
router.get('/recruiter/people', read.selectAllPeople);
router.get('/recruiter/one/:p1', read.displayFullOneRecruiter);
router.get('/application', read.allApplication);
router.get('/application/job_offer', read.job_offerByApplication);
router.get('/application/one/:p1', read.oneApplication);

router.post('/job_offer', create.job_offer);
router.post('/company', create.company);
router.post('/people', create.people);
router.post('/recruiter', create.linkRecruiter);
router.post('/application', create.application);

router.put('/job_offer', update.job_offer);
router.put('/company', update.company);
router.put('/people', update.people);
router.put('/recruiter', update.recruiter);
router.put('/application', update.application);

router.delete('/company', del.company);
router.delete('/people', del.people);
router.delete('/job_offer', del.job_offer);
router.delete('/recruiter', del.linkRecruiter);
router.delete('/application', del.application);

module.exports = router;
