var line_people = 7;
var id_people = 0;

axios.get("http://localhost:8443/candidat/people/"+line_people)
.then(function(result) {
  formulaireOnePeople(result.data); // MET A JOUR LA VUE AVEC LES DIFFERENTES CARTES
  id_people=result.data.id_people;
})
.catch(function(error) {
  console.log("erreur : ", error)
})

function formulaireOnePeople(data){
  var texteFormulaire = 
  "<form>"+
    "<br>"+
    "<div class=\"container overflow-auto\" style=\"max-height:80vh\">"+
      "<div class=\"pb-3\">"+
        "<label class=\"form-label\" for=\"name\">Nom: </label>"+
        "<input class=\"form-control\" type=\"text\" id=\"name\" name=\"name\" value=\""+ data.pe_name+"\">"+
      "</div>"+
      "<div class=\"pb-3\">"+
        "<label class=\"form-label\" for=\"email\">Email: </label>"+
        "<input class=\"form-control\" type=\"email\" id=\"email\" name=\"email\" value=\""+ data.pe_email+"\">"+
      "</div>"+
      "<div class=\"pb-3\">"+
        "<label class=\"form-label\" for=\"lvl\">pe_lvl:</label>"+
        "<input class=\"form-control\" type=\"number\" id=\"lvl\" name=\"lvl\" value=\""+ data.pe_lvl+"\">"+
      "</div>"+
      "<div class=\"pb-3\">"+
        "<label class=\"form-label\" for=\"login\">pe_login :</label>"+
        "<input class=\"form-control\" type=\"email\" id=\"login\" name=\"login\" value=\""+ data.pe_login+"\">"+
      "</div>"+
      "<div class=\"pb-3\">"+
        "<label class=\"form-label\" for=\"password\">pe_password: </label>"+
        "<input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\">"+
      "</div>"+
      "<div class=\"pb-3\">"+
        "<p>Status: </label>"+
        "<p>"+ data.pe_status+"<p>"+
      "</div>"+
      "<div>"+
        "<button onclick=\"javascript:updatePeople()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Update</button>"+
      "</div>"+
    "</div>"+
  "</form>";
  document.getElementById("profil").innerHTML = texteFormulaire;
};

function updatePeople() {
  axios.put('http://localhost:8443/candidat/people', {
  'id_people': id_people,
  'pe_name': document.getElementById("name").value,
  'pe_email': document.getElementById("email").value,
  'pe_lvl': document.getElementById("lvl").value,
  'pe_login': document.getElementById("login").value,
  'pe_password': document.getElementById("password").value,
  })
  .then(function (response) {
    axios.get("http://localhost:8443/candidat/people/"+line_people)
    .then(function(result) {
      formulaireOnePeople(result.data); // MET A JOUR LA VUE AVEC LES DIFFERENTES CARTES
    })
    .catch(function(error) {
      console.log("erreur : ", error)
    })
  })
  .catch(function (error) {
    console.log(error);
  });
};