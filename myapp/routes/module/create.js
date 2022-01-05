const { response } = require("express");
var con = require('./databases');
var bcrypt = require('bcrypt');

module.exports.company = (req, res) => {
    /*
    {
        "co_name": "",
        "co_xp": "",
        "co_kamas": ""
    }
    */
    co_name=req.body.co_name;
    co_xp=req.body.co_xp;
    co_kamas=req.body.co_kamas;
    var sql = "INSERT INTO company (co_name, co_xp, co_kamas) VALUES ?";
    var values = [[co_name, co_xp, co_kamas]];
    con.query(sql,[values], function (err, result, fields){
        if (err) throw err;
        res.send({
            result:result.insertId
        });
    });
};
module.exports.application = (req, res) => {
    /*
    {
        "ap_id_job_offer": "",
        "ap_name": "",
        "ap_email": "",
        "ap_lvl": "",
        "ap_text": ""
    }
    */
    ap_id_job_offer=req.body.ap_id_job_offer;
    ap_name=req.body.ap_name;
    ap_email=req.body.ap_email;
    ap_lvl=req.body.ap_lvl;
    ap_text = req.body.ap_text;
    if (ap_id_job_offer != "" && ap_name != "" && ap_email != "" && ap_lvl != "") {
        var sql = "INSERT INTO application (ap_id_job_offer, ap_name, ap_email, ap_lvl, ap_text) VALUES ?";
        var values = [[ap_id_job_offer, ap_name, ap_email, ap_lvl, ap_text]];
        con.query(sql,[values], function (err, result, fields){
            if (err) throw err;
            res.send({
                result:result.insertId
            });
        });
    } else res.send('1');
};
module.exports.people = (req, res) => {
    /*
    {
        "pe_name": "",
        "pe_email": "",
        "pe_lvl": "",
        "pe_login": "",
        "pe_password": "",
        "pe_status": ""
    }
    */
    pe_name=req.body.pe_name;
    pe_email=req.body.pe_email;
    pe_lvl=req.body.pe_lvl;
    pe_login=req.body.pe_login;
    pe_password=req.body.pe_password;
    pe_status=req.body.pe_status;
    if (pe_name != "" && pe_email != "" && pe_lvl != "" && pe_login != "" && pe_password != "" && pe_status != ""){
        bcrypt.hash(pe_password,10, function(err, hash) {
            var sql = "INSERT INTO people (pe_name,pe_email,pe_lvl,pe_login,pe_password,pe_status) VALUES ?";
            var values = [[pe_name,pe_email,pe_lvl,pe_login,hash,pe_status]];
            con.query(sql,[values], function (err, result, fields) {
                if (err) throw err;
                res.send({
                    result:result.insertId
                });
            });
        });
    }else res.send('1');
};
module.exports.job_offer = (req, res) => {
    /*
    {
        "jo_name": "",
        "jo_xp": "",
        "jo_kamas": "",
        "jo_address": "",
        "jo_description": "",
        "jo_id_company": "",
        "jo_recruiter": ""
    }
    */
    jo_name = req.body.jo_name;
    jo_xp = req.body.jo_xp;
    jo_kamas = req.body.jo_kamas;
    jo_address = req.body.jo_address;
    jo_description = req.body.jo_description;
    jo_id_company = req.body.jo_id_company;
    jo_recruiter = req.body.jo_recruiter;
    if (jo_name != "" && jo_xp != "" && jo_kamas != "" && jo_address != "" && jo_description != "" && jo_recruiter != ""){
        var sql = "INSERT INTO job_offer (jo_name, jo_xp, jo_kamas, jo_address, jo_description, jo_id_company, jo_recruiter) VALUES ?";
        var values = [[jo_name, jo_xp, jo_kamas, jo_address, jo_description, jo_id_company, jo_recruiter]];
        con.query(sql,[values], function (err, result, fields) {
            if (err) throw err;
            res.send({
                result:result.insertId
            });
        });
    } else res.send('1');
};
module.exports.linkRecruiter = (req, res) => {
    /*
    {
        "re_id_company": "",
        "re_id_people": ""
    }
    */
   re_id_company = req.body.re_id_company;
   re_id_people = req.body.re_id_people;
   var sql = "INSERT INTO recruiter (re_id_company, re_id_people) VALUES ?";
   var values = [[re_id_company, re_id_people]];
   con.query(sql,[values], function (err, result, fields){
        if (err) throw err;
        res.send({
            result:result.insertId
        });
    });
};
module.exports.job_offerByRecruiter = (req, res) => {
    /*
    {
        "jo_name": "",
        "jo_xp": "",
        "jo_kamas": "",
        "jo_address": "",
        "jo_description": "",
        "jo_recruiter": ""
    }
    */
    jo_name = req.body.jo_name;
    jo_xp = req.body.jo_xp;
    jo_kamas = req.body.jo_kamas;
    jo_address = req.body.jo_address;
    jo_description = req.body.jo_description;
    jo_recruiter = req.body.jo_recruiter;
    var jo_id_company = 0;
    if (jo_name != "" && jo_xp != "" && jo_kamas != "" && jo_address != "" && jo_description != "" && jo_recruiter != ""){
        var sql = "SELECT re_id_company FROM recruiter WHERE re_id_people = ?";
        var values = jo_recruiter;
        con.query(sql,values, function (err, result, fields) {
            if (err) throw err;
            jo_id_company = result[0].re_id_company;
            
            sql = "INSERT INTO job_offer (jo_name, jo_xp, jo_kamas, jo_address, jo_description, jo_id_company, jo_recruiter) VALUES ?";
            values = [[jo_name, jo_xp, jo_kamas, jo_address, jo_description, jo_id_company, jo_recruiter]];
            con.query(sql,[values], function (err, result, fields) {
                if (err) throw err;
                res.send({
                    result:result.insertId
                });
            });
        });
    } else res.send('1');
};