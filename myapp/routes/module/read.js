var express = require("express");
var con = require('./databases');

module.exports.displayAllJobOffer = (req, res) => {
    con.query("SELECT id_job_offer, jo_name, jo_xp, jo_kamas, jo_address, jo_description, co_name, pe_name, id_company, id_people FROM job_offer INNER JOIN company ON job_offer.jo_id_company = company.id_company INNER JOIN people ON job_offer.jo_recruiter = people.id_people" , function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
};
module.exports.displayAllShortJobOffer = (req, res) => {
    con.query("SELECT id_job_offer, jo_name, jo_xp, jo_kamas, jo_address, co_name FROM job_offer INNER JOIN company ON job_offer.jo_id_company = company.id_company ORDER BY id_job_offer" , function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};
module.exports.displayFullOneJobOffer = (req, res) => {
    var choix = req.params.p1;
    con.query("SELECT id_job_offer, jo_name, jo_xp, jo_kamas, jo_address, jo_description, co_name, pe_name, id_company, id_people FROM job_offer INNER JOIN company ON job_offer.jo_id_company = company.id_company INNER JOIN people ON job_offer.jo_recruiter = people.id_people" , function (err, result, fields) {
        if (err) throw err;
        res.json(result[choix]);
    });
};
module.exports.displayAllJobOfferByCompany = (req, res) => {
    var choix = req.params.p1;
    con.query("SELECT jo_name, jo_xp, jo_kamas, jo_address, jo_description, co_name, pe_name FROM company INNER JOIN job_offer ON company.id_company = job_offer.jo_id_company INNER JOIN people ON job_offer.jo_recruiter = people.id_people WHERE id_company = \"" + choix + "\"", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};
module.exports.displayAllCompany = (req, res) => {
    con.query("SELECT id_company, co_name, co_xp, co_kamas FROM company", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};
module.exports.displayFullOneCompany = (req, res) => {
    var choix = req.params.p1;
    con.query("SELECT id_company, co_name, co_xp, co_kamas FROM company", function (err, result, fields) {
        if (err) throw err;
        res.send(result[choix]);
    });
};
module.exports.displayAllRecruiter = (req, res) => {
    con.query("SELECT id_recruiter, re_id_company, co_name, pe_name, re_id_people FROM company INNER JOIN recruiter ON company.id_company = recruiter.re_id_company INNER JOIN people ON recruiter.re_id_people = people.id_people WHERE pe_status = 'recruiter' ", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};
module.exports.displayFullOneRecruiter = (req, res) => {
    var choix = req.params.p1;
    con.query("SELECT id_recruiter, re_id_company, co_name, pe_name, re_id_people FROM company INNER JOIN recruiter ON company.id_company = recruiter.re_id_company INNER JOIN people ON recruiter.re_id_people = people.id_people WHERE pe_status = 'recruiter' ", function (err, result, fields) {
        if (err) throw err;
        res.send(result[choix]);
    });
};
module.exports.displayFullOneRecruiterID = (req, res) => {
    var choix = req.params.p1;
    con.query("SELECT id_recruiter, re_id_company, re_id_people FROM recruiter WHERE = "+choix, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};
module.exports.selectAllCompany = (req, res) => {
    con.query("SELECT id_company, co_name FROM company", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};
module.exports.selectAllPeople = (req, res) => {
    con.query("SELECT id_people, pe_name FROM people WHERE pe_status = 'recruiter'", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};
module.exports.displayAllJobOfferByRecruiter = (req, res) => {
    /* 
        {
            "id_people": ""
        }
    */
    var sql = "SELECT jo_name, jo_address, co_name, id_job_offer, jo_xp, jo_kamas FROM people INNER JOIN job_offer ON people.id_people = job_offer.jo_recruiter INNER JOIN company ON job_offer.jo_id_company = company.id_company WHERE pe_status = 'recruiter' AND id_people = ?";
    var values = req.params.p1;
    con.query(sql, values, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};
module.exports.onePeople = (req, res) => {
    /*
    {
        "id_people": "",
        "pe_name": "",
        "pe_email": "",
        "pe_lvl": "",
        "pe_login": "",
        "pe_password": "",
        "pe_status": ""
    }
    */
    var i = req.params.p1;
    var sql = "SELECT * FROM people";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result[i]);
    });
};
module.exports.People = (req, res) => {
    /*
    {
        "id_people": "",
        "pe_name": "",
        "pe_email": "",
        "pe_lvl": "",
        "pe_login": "",
        "pe_password": "",
        "pe_status": ""
    }
    */
    var sql = "SELECT * FROM people ";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};
module.exports.allApplication = (req, res) => {
    var sql = "SELECT id_application, ap_id_job_offer, jo_name, ap_name, ap_email, ap_lvl, ap_text FROM application INNER JOIN job_offer ON application.ap_id_job_offer = job_offer.id_job_offer";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};
module.exports.oneApplication = (req, res) => {
    var i = req.params.p1;
    var sql = "SELECT id_application, ap_id_job_offer, jo_name, ap_name, ap_email, ap_lvl, ap_text FROM application INNER JOIN job_offer ON application.ap_id_job_offer = job_offer.id_job_offer";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result[i]);
    });
};
module.exports.job_offerByApplication = (req, res) => {
    var sql = "SELECT id_job_offer, jo_name FROM job_offer";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};
module.exports.applicationByJobOffer = (req,res) => {
    var i = req.params.p1;
    var sql = "SELECT id_application, ap_name, ap_email, ap_lvl, ap_text FROM application INNER JOIN job_offer ON application.ap_id_job_offer = job_offer.id_job_offer WHERE id_job_offer = ?";
    con.query(sql,i, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
};