// Fonction permettant la connexion à la bases de données projet_web_bdd
var mysql = require('mysql');

console.log('Get connection ...');

var con = mysql.createConnection({
    database: 'projet_web_bdd',
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306
});

con.connect(function(err) {
    if (err) throw err;
        console.log("Connecter a la BDD");
  });

module.exports = con;