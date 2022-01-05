var express = require('express');
var con = require('./databases');
var bcrypt = require('bcrypt');

module.exports.people = (req, res) => {
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
    id_people=req.body.id_people
    pe_name=req.body.pe_name
    pe_email=req.body.pe_email
    pe_lvl=req.body.pe_lvl
    pe_login=req.body.pe_login
    pe_password=req.body.pe_password
    pe_status=req.body.pe_status
    bcrypt.hash(pe_password,10, function(err, hash) {
        var sql = "UPDATE people SET pe_name = ?, pe_email = ?, pe_lvl= ?, pe_login = ?, pe_password = ?, pe_status = ? WHERE id_people = ?";
        var values = [pe_name,pe_email,pe_lvl,pe_login,hash,pe_status,id_people]
        con.query(sql,values, function (err, result, fields) {
            if (err) throw err;
            res.send({
                message: 'Table Data',
                Total_record:result.length,
                result:result
            });
        });
    });
};
module.exports.company = (req, res) => {
    /*
    {
        "id_company": "",
        "co_name": "",
        "co_xp": "",
        "co_kamas": ""
    }
    */
    id_company=req.body.id_company;
    co_name=req.body.co_name;
    co_xp=req.body.co_xp;
    co_kamas=req.body.co_kamas;
    var sql = "UPDATE company SET co_name = ?, co_xp = ?, co_kamas = ? WHERE id_company = ?";
    var values = [co_name, co_xp, co_kamas, id_company];
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
    /*
    {
        "id_job_offer": "",
        "jo_name": "",
        "jo_xp": "",
        "jo_kamas": "",
        "jo_address": "",
        "jo_description": "",
        "jo_id_company": "",
        "jo_recruiter": ""
    }
    */
    id_job_offer = req.body.id_job_offer;
    jo_name = req.body.jo_name;
    jo_xp = req.body.jo_xp;
    jo_kamas = req.body.jo_kamas;
    jo_address = req.body.jo_address;
    jo_description = req.body.jo_description;
    jo_id_company = req.body.jo_id_company;
    jo_recruiter = req.body.jo_recruiter;
    var sql = "UPDATE job_offer SET jo_name = ?, jo_xp = ?, jo_kamas = ?, jo_address = ?, jo_description = ?, jo_id_company = ?, jo_recruiter = ? WHERE id_job_offer = ?";
    var values = [jo_name, jo_xp, jo_kamas, jo_address, jo_description, jo_id_company, jo_recruiter, id_job_offer];
    con.query(sql,values, function (err, result, fields) {
        if (err) throw err;
        res.send({
            message: 'Table Data',
            Total_record:result.length,
            result:result
        });
    });
};
module.exports.recruiter = (req, res) => {
    id_recruiter = req.body.id_recruiter;
    re_id_company = req.body.re_id_company;
    re_id_people = req.body.re_id_people;
    var sql = "UPDATE recruiter SET re_id_company = ?, re_id_people = ? WHERE id_recruiter = ?";
    var values = [re_id_company, re_id_people, id_recruiter];
    con.query(sql,values, function (err, result, fields) {
        if (err) throw err;
        res.send({
            message: 'Modifcation faite',
        });
    });
};
module.exports.application = (req, res) => {
    /*
    {
        "id_application": "",
        "ap_id_job_offer": "",
        "ap_name": "",
        "ap_email": "",
        "ap_lvl": "",
        "ap_text": ""
    }
    */
    id_application = req.body.id_application;
    ap_id_job_offer = req.body.ap_id_job_offer;
    ap_name = req.body.ap_name;
    ap_email = req.body.ap_email;
    ap_lvl = req.body.ap_lvl;
    ap_text = req.body.ap_text;
    var sql = "UPDATE application SET ap_id_job_offer = ?, ap_name = ?, ap_email = ?, ap_lvl = ?, ap_text = ? WHERE id_application = ?";
    var values = [ap_id_job_offer, ap_name, ap_email, ap_lvl, ap_text, id_application];
    con.query(sql,values, function (err, result, fields) {
        if (err) throw err;
        res.send({
            message: 'Table Data',
            Total_record:result.length,
            result:result
        });
    });
};