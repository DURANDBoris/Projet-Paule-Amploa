var express = require("express");
var con = require('./databases');

module.exports.people = (req, res) => {
    id_people = req.body.id_people;
    var sql = "DELETE FROM people WHERE id_people = ?";
    var values = id_people;
    con.query(sql,values, function (err, result, fields){
        if (err) throw err;
        res.send({
            message: 'Table Data',
            Total_record:result.length,
            result:result
        });
    });
};
module.exports.company = (req, res) => {
    id_company = req.body.id_company;
    var sql = "DELETE FROM company WHERE id_company = ?";
    var values = id_company;
    con.query(sql,values, function (err, result, fields){
        if (err) throw err;
        res.send({
            message: 'Table Data',
            Total_record:result.length,
            result:result
        });
    });
};
module.exports.application = (req, res) => {
    id_application = req.body.id_application;
    var sql = "DELETE FROM application WHERE id_application = ?";
    var values = id_application;
    con.query(sql,values, function (err, result, fields){
        if (err) throw err;
        res.send({
            message: 'Table Data',
            Total_record:result.length,
            result:result
        });
    });
};
module.exports.linkRecruiter = (req, res) => {
    id_recruiter = req.body.id_recruiter;
    var sql = "DELETE FROM recruiter WHERE id_recruiter = ?";
    var values = id_recruiter;
    con.query(sql,values, function (err, result, fields){
        if (err) throw err;
        res.send({
            message: 'Table Data',
            Total_record:result.length,
            result:result
        });
    });
};
module.exports.job_offer = (req, res) => {
    id_job_offer = req.body.id_job_offer;
    var sql = "DELETE FROM job_offer WHERE id_job_offer = ?";
    var value = id_job_offer;
    con.query(sql,value, function (err, result, fields){
        if (err) throw err;
        res.send({
            message: 'Table Data',
            Total_record:result.length,
            result:result
        });
    });
};