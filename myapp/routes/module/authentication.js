var express = require('express');
var con = require('./databases');
var bcrypt = require('bcrypt');
var router = express.Router();


//Commande pour la suppression de données dans la base de données projet_web_bdd
module.exports.login = (req, res) => {
    var username = req.body.username;
	var password = req.body.password;
    console.log({username,password});
	if (username && password) {
        con.query('SELECT id_people, pe_password, pe_status FROM people WHERE pe_login = ?', [username], function(err, results, fields) {
            if (results == ""){
                res.send('2');
            }else{
                if (err) throw err;
                bcrypt.compare(password, results[0].pe_password, function (err, isValid) {
                    if (isValid) {
                        console.log(results[0].pe_status);
                        switch(results[0].pe_status){
                            case 'recruiter':
                                res.send({
                                    "url": './page_recruiter_offer.html',
                                    'id': results[0].id_people
                                });
                                break;
                            case 'administrator':
                                res.send({
                                    "url": './page_administrator.html',
                                    'id': results[0].id_people
                                });
                                break;
                            case 'candidat':
                                res.send({
                                    "url": './page_offre.html',
                                    'id': results[0].id_people
                                });
                                break;
                            default:
                                res.send({'url':'./page_signup.html'});
                                break;
                        }
                    } else {
                        res.send('1');
                    }			
                });
            }
           
        
        });
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
};

/*
if (results && results.length > 0) {
    //req.session.loggedin = true;
    //req.session.username = username;
    res.send('log is ok');
    //res.redirect('/home');
} else {
    res.send('Incorrect Username and/or Password!');
}			
res.end();
*/