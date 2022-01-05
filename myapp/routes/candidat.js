var express = require('express');
var con = require('./module/databases');
var read = require('./module/read');
var create = require('./module/create');
var update = require('./module/update');
var router = express.Router();

router.get('/short_job_offer', read.displayAllShortJobOffer); //afficher les offres de façon réduite
router.get('/full_one_job_offer/:p1', read.displayFullOneJobOffer); //afficher complètement une offre
router.get('/all_company', read.displayAllCompany); //afficher toute les entreprises
router.get('/all_offer_by_company/:p1', read.displayAllJobOfferByCompany);
router.get('/people/:p1', read.onePeople);

router.post('/application', create.application); //peut postuler à une offre

router.put('/people', update.people); //peut modifier ces information personnel

module.exports = router;