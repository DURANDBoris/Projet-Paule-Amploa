var formulaire = document.getElementById('formulaire');
var table = document.getElementById('tableau');

var line_people = 0;
var line_job_offer = 0;
var line_company = 0;
var line_recruiter = 0;
var line_application = 0;

//Partie gestion des utilisateur TERMINÉE
function formulaireOnePeople(data){
    var texteFormulaire = 
    "<form>"+
      "<br>"+
      "<div class=\"container overflow-auto\" style=\"max-height:80vh\">"+
        "<div class=\"pb-3 row\">"+
          "<label class=\"form-label\" for=\"id\">id_people: </label>"+
          "<div class=\"col-11\">"+
            "<input class=\"form-control\" type=\"number\" id=\"id\" name=\"id\" value=\""+ data.id_people+"\">"+
          "</div>"+
          "<div class=\"col\">"+
            "<button onclick=\"javascript:searchId_people()\" class=\"btn btn-warning bg-rechercher shadow-none\" type=\"button\" style=\"width:100%\"><i class=\"material-icons\">search</i></button>"+
          "</div>"+
        "</div>"+
        "<div class=\"pb-3\">"+
          "<label class=\"form-label\" for=\"name\">pe_name: </label>"+
          "<input class=\"form-control\" type=\"text\" id=\"name\" name=\"name\" value=\""+ data.pe_name+"\">"+
        "</div>"+
        "<div class=\"pb-3\">"+
          "<label class=\"form-label\" for=\"email\">pe_email: </label>"+
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
          "<input class=\"form-control\" type=\"text\" id=\"password\" name=\"password\" value=\""+ data.pe_password+"\">"+
        "</div>"+
        "<div class=\"pb-3\">"+
          "<label class=\"form-label\" for=\"jfqlk\">pe_status: </label>"+
          "<input class=\"form-control\" type=\"text\" id=\"jfqlk\" name=\"kvql\" value=\""+ data.pe_status+"\">"+
        "</div>"+
        "<div class=\"pb-3\">"+
          "<label class=\"form-label\" for=\"status\">pe_status: </label>"+
          "<select class=\"form-select\" name=\"status\" id=\"status\" >"+
            "<option value=\"candidat\">Candidat</option>"+
            "<option value=\"recruiter\">Recruteur</option>"+
            "<option value=\"administrator\">Administrateur</option>"+
          "</select>"+
        "</div>"+
        "<div>"+
          "<button onclick=\"javascript:reduitId_people()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\"><i class=\"material-icons\">chevron_left</i></button>"+
          "<button onclick=\"javascript:augmenteId_people()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\"><i class=\"material-icons\">chevron_right</i></button>"+
          "<button onclick=\"javascript:createPeople()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Create</button>"+
          "<button onclick=\"javascript:updatePeople()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Update</button>"+
          "<button onclick=\"javascript:delPeople()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Delete</button>"+
        "</div>"+
      "</div>"+
    "</form>";
    formulaire.innerHTML = texteFormulaire;
};
function tableauPeople(data){
  var nomberPeople = data.length;
  var texteTableau =  
      "<br><br>"+
      "<div class=\"overflow-scroll\" style=\"max-height:80vh\">"+
        "<table class=\"table table-striped\">"+
          "<tr>"+
            "<th>id_people</th>"+
            "<th>pe_name</th>"+
            "<th>pe_email</th>"+
            "<th>pe_lvl</th>"+
            "<th>pe_login</th>"+
            "<th>pe_password</th>"+
            "<th>pe_status</th>"+
          "</tr>";
  for(i = 0; i < nomberPeople; i++){
    texteTableau += 
          "<tr>"+
            "<td>"+data[i].id_people+"</td>"+
            "<td>"+data[i].pe_name+"</td>"+
            "<td>"+data[i].pe_email+"</td>"+
            "<td>"+data[i].pe_lvl+"</td>"+
            "<td>"+data[i].pe_login+"</td>"+
            "<td>"+data[i].pe_password+"</td>"+
            "<td>"+data[i].pe_status+"</td>"+
          "</tr>";
  }
  texteTableau += 
        "</table>"+
      "</div>";
  table.innerHTML = texteTableau;
};
function afficherPeople() {
    axios.get("http://localhost:8443/administrator/people/"+ line_people)
    .then(function(result) {
      formulaireOnePeople(result.data); // MET A JOUR LA VUE AVEC LES DIFFERENTES CARTES
    })
    .catch(function(error) {
      console.log("erreur : ", error)
    })

    axios.get("http://localhost:8443/administrator/people")
    .then(function(result) {
      tableauPeople(result.data); // MET A JOUR LA VUE AVEC LES DIFFERENTES CARTES
    })
    .catch(function(error) {
      console.log("erreur : ", error)
    })
};
function searchId_people(){
  var id_people = document.getElementById("id").value;
  axios.get("http://localhost:8443/administrator/people")
  .then(function(result) {
    for(y= 0; y < result.data.length; y++){
      if(id_people == result.data[y].id_people) line_people = y;
    }
    afficherPeople();
    })
    .catch(function(error) {
    console.log("erreur : ", error)
    })
};
function augmenteId_people() {
    line_people++;
    afficherPeople();
};
function reduitId_people() {
    line_people--;
    afficherPeople();
};
function createPeople() {
    axios.post('http://localhost:8443/administrator/people', {
        'pe_name': document.getElementById("name").value,
        'pe_email': document.getElementById("email").value,
        'pe_lvl': document.getElementById("lvl").value,
        'pe_login': document.getElementById("login").value,
        'pe_password': document.getElementById("password").value,
        'pe_status': document.getElementById("status").value
      })
      .then(function (response) {
        var id_people = response.data.result;
        axios.get("http://localhost:8443/administrator/people")
        .then(function(result) {
          for(y= 0; y < result.data.length; y++){
            if(id_people == result.data[y].id_people) line_people = y;
          }
          afficherPeople();
          })
          .catch(function(error) {
          console.log("erreur : ", error)
          })
      })
      .catch(function (error) {
        console.log(error);
      });
};
function updatePeople() {
    axios.put('http://localhost:8443/administrator/people', {
        'id_people': document.getElementById("id").value,
        'pe_name': document.getElementById("name").value,
        'pe_email': document.getElementById("email").value,
        'pe_lvl': document.getElementById("lvl").value,
        'pe_login': document.getElementById("login").value,
        'pe_password': document.getElementById("password").value,
        'pe_status': document.getElementById("status").value
      })
      .then(function (response) {
        afficherPeople();
      })
      .catch(function (error) {
        console.log(error);
      });
};
function delPeople() {
    axios.delete('http://localhost:8443/administrator/people', {
        data : {
            'id_people': document.getElementById("id").value
        }
      })
      .then(function (response) {
        axios.get("http://localhost:8443/administrator/people")
        .then(function(result) {
          line_people = result.data.length-1;
          afficherPeople();
          })
          .catch(function(error) {
          console.log("erreur : ", error)
          })
      })
      .catch(function (error) {
        console.log(error);
      });
};
//Partie offre d'emploi TERMINÉE
function formulaireOneOffer(data, companyRecruiter, peopleRecruiter){
  var texteFormulaire = 
      "<form>"+
        "<br>"+
        "<div class=\"container overflow-auto\" style=\"max-height:80vh\">"+
          "<div class=\"pb-3 row\">"+
            "<label class=\"form-label\" for=\"id\">id_job_offer: </label>"+
            "<div class=\"col-11\">"+
              "<input class=\"form-control\" type=\"number\" id=\"id\" name=\"id\" value=\""+ data.id_job_offer+"\">"+
            "</div>"+
            "<div class=\"col\">"+
              "<button onclick=\"javascript:searchId_job_offer()\" class=\"btn btn-warning bg-rechercher shadow-none\" type=\"button\" style=\"width:100%\"><i class=\"material-icons\">search</i></button>"+
            "</div>"+
          "</div>"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"name\">jo_name: </label>"+
            "<input class=\"form-control\" type=\"text\" id=\"name\" name=\"name\" value=\""+ data.jo_name+"\">"+
          "</div>"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"email\">jo_xp: </label>"+
            "<input class=\"form-control\" type=\"number\" id=\"xp\" name=\"xp\" value=\""+ data.jo_xp+"\">"+
          "</div>"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"lvl\">jo_kamas:</label>"+
            "<input class=\"form-control\" type=\"number\" id=\"kamas\" name=\"kamas\" value=\""+ data.jo_kamas+"\">"+
          "</div>"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"login\">jo_address :</label>"+
            "<input class=\"form-control\" type=\"text\" id=\"address\" name=\"address\" value=\""+ data.jo_address+"\">"+
          "</div>"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"password\">jo_description: </label>"+
            "<textarea class=\"form-control overflow-auto\" type=\"text\" id=\"description\" name=\"description\" rows\"3\">"+
             data.jo_description+
            "</textarea>"+
          "</div>"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"company\">company: </label>"+
            "<select class=\"form-select\" id=\"company\">"+
              "<option value="+data.id_company+" selected>"+data.co_name+"</option>";
              for(i = 0; i < companyRecruiter.length; i++){
                texteFormulaire += "<option value="+companyRecruiter[i].id_company+">"+companyRecruiter[i].co_name+"</option>";
              }
              texteFormulaire +=  
            "</select >"+
            "<label class=\"form-label\" for=\"id\">recruiter: </label>"+
            "<select class=\"form-select\" id=\"people\">"+
              "<option value="+data.id_people+"selected>"+data.pe_name+"</option>";
              for(i = 0; i < peopleRecruiter.length; i++){
                texteFormulaire += "<option value="+peopleRecruiter[i].id_people+">"+peopleRecruiter[i].pe_name+"</option>";
              }
              texteFormulaire += 
            "</select>"+
          "</div>"+

          "<div>"+
            "<button onclick=\"javascript:reduitId_job_offer()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\"><i class=\"material-icons\">chevron_left</i></button>"+
            "<button onclick=\"javascript:augmenteId_job_offer()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\"><i class=\"material-icons\">chevron_right</i></button>"+
            "<button onclick=\"javascript:createOffer()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Create</button>"+
            "<button onclick=\"javascript:updateOffer()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Update</button>"+
            "<button onclick=\"javascript:delOffer()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Delete</button>"+
          "</div>"+
        "</div>"+
      "</form>";
  formulaire.innerHTML = texteFormulaire;
};
function tableauOffer(data){
  var nomberOffer = data.length;
  var texteTableau =  "<br><br>"+
                      "<div class=\"overflow-scroll\" style=\"max-height:80vh\">"+
                        "<table class=\"table table-striped\">"+
                        "<tr>"+
                          "<th>id_job_offer</th>"+
                          "<th>jo_name</th>"+
                          "<th>jo_xp</th>"+
                          "<th>jo_kamas</th>"+
                          "<th>jo_address</th>"+
                          "<th>jo_description</th>"+
                          "<th>co_name</th>"+
                          "<th>pe_name</th>"+
                        "</tr>";
  for(i = 0; i < nomberOffer; i++){
    texteTableau += "<tr>"+
                      "<td>"+data[i].id_job_offer+"</td>"+
                      "<td>"+data[i].jo_name+"</td>"+
                      "<td>"+data[i].jo_xp+"</td>"+
                      "<td>"+data[i].jo_kamas+"</td>"+
                      "<td>"+data[i].jo_address+"</td>"+
                      "<td>"+data[i].jo_description+"</td>"+
                      "<td>"+data[i].co_name+"</td>"+
                      "<td>"+data[i].pe_name+"</td>"+
                    "</tr>";
  }
  texteTableau += "</table>"+
                  "</div>";
  table.innerHTML = texteTableau;
};
function afficherOffreDemploi() {
  axios.get("http://localhost:8443/administrator/job_offer/"+ line_job_offer)
  .then(function(result) {
    oneOffer =result.data;
    axios.get("http://localhost:8443/administrator/recruiter/company")
    .then(function(result) {
      companyRecruiter = result.data;
      axios.get("http://localhost:8443/administrator/recruiter/people")
      .then(function(result) {
        peopleRecruiter = result.data;
        formulaireOneOffer(oneOffer, companyRecruiter, peopleRecruiter);
      })
      .catch(function(error) {
        console.log("erreur : ", error)
      })
    })
    .catch(function(error) {
      console.log("erreur : ", error)
    })
    
  })
  .catch(function(error) {
    console.log("erreur : ", error)
  })
  axios.get("http://localhost:8443/administrator/job_offer")
    .then(function(result) {
      tableauOffer(result.data); // MET A JOUR LA VUE AVEC LES DIFFERENTES CARTES
    })
    .catch(function(error) {
      console.log("erreur : ", error)
    })
};
function searchId_job_offer(){
  var id_job_offer = document.getElementById("id").value;
  axios.get("http://localhost:8443/administrator/job_offer")
  .then(function(result) {
    for(y= 0; y < result.data.length; y++){
      if(id_job_offer == result.data[y].id_job_offer) line_job_offer = y;
    }
    afficherOffreDemploi();
    })
    .catch(function(error) {
    console.log("erreur : ", error)
    })
};
function augmenteId_job_offer() {
    line_job_offer++;
    afficherOffreDemploi();
};
function reduitId_job_offer() {
  line_job_offer--;
    afficherOffreDemploi();
};
function createOffer() {
    axios.post('http://localhost:8443/administrator/job_offer', {
      'jo_name': document.getElementById("name").value,
      'jo_xp': document.getElementById("xp").value,
      'jo_kamas': document.getElementById("kamas").value,
      'jo_address': document.getElementById("address").value,
      'jo_description': document.getElementById("description").value,
      'jo_id_company': document.getElementById("company").value,
      'jo_recruiter': document.getElementById("people").value
      })
      .then(function (response) {
        id_job_offer = response.data.result;
        axios.get("http://localhost:8443/administrator/job_offer")
        .then(function(result) {
          for(y= 0; y < result.data.length; y++){
            if(id_job_offer == result.data[y].id_job_offer) line_job_offer = y;
          }
          afficherOffreDemploi();
          })
        .catch(function(error) {
        console.log("erreur : ", error)
        })
      })
      .catch(function (error) {
        console.log(error);
      });
};
function updateOffer() {
    axios.put('http://localhost:8443/administrator/job_offer', {
      'id_job_offer': document.getElementById("id").value,
      'jo_name': document.getElementById("name").value,
      'jo_xp': document.getElementById("xp").value,
      'jo_kamas': document.getElementById("kamas").value,
      'jo_address': document.getElementById("address").value,
      'jo_description': document.getElementById("description").value,
      'jo_id_company': document.getElementById("company").value,
      'jo_recruiter': document.getElementById("people").value
      })
      .then(function (response) {
        afficherOffreDemploi()
      })
      .catch(function (error) {
        console.log(error);
      });
};
function delOffer() {
    axios.delete('http://localhost:8443/administrator/job_offer', {
        data : {
            'id_job_offer': document.getElementById("id").value
        }
      })
      .then(function (response) {
        axios.get("http://localhost:8443/administrator/job_offer")
        .then(function(result) {
          line_job_offer = result.data.length-1;
          afficherOffreDemploi();
          })
        .catch(function(error) {
        console.log("erreur : ", error)
        })
      })
      .catch(function (error) {
        console.log(error);
      });
};
//Partie gestion des entreprise TERMINÉE
function formulaireOneCompany(data){
  var texteFormulaire = 
      "<form>"+
      "<br>"+
      "<div class=\"container overflow-auto\" style=\"max-height:80vh\">"+
        "<div class=\"pb-3 row\">"+
          "<label class=\"form-label\" for=\"id\">id_company: </label>"+
          "<div class=\"col-11\">"+
            "<input class=\"form-control\" type=\"number\" id=\"id\" name=\"id\" value=\""+ data.id_company+"\">"+
          "</div>"+
          "<div class=\"col\">"+
            "<button onclick=\"javascript:searchId_company()\" class=\"btn btn-warning bg-rechercher shadow-none\" type=\"button\" style=\"width:100%\"><i class=\"material-icons\">search</i></button>"+
          "</div>"+
        "</div>"+
        "<div class=\"pb-3\">"+
          "<label class=\"form-label\" for=\"name\">co_name: </label>"+
          "<input class=\"form-control\" type=\"text\" id=\"name\" name=\"name\" value=\""+ data.co_name+"\">"+
        "</div>"+
        "<div class=\"pb-3\">"+  
          "<label class=\"form-label\" for=\"xp\">co_xp: </label>"+
          "<input class=\"form-control\" type=\"number\" id=\"xp\" name=\"xp\" value=\""+ data.co_xp+"\">"+
        "</div>"+
        "<div class=\"pb-3\">"+  
          "<label class=\"form-label\" for=\"kamas\">co_kamas:</label>"+
          "<input class=\"form-control\" type=\"number\" id=\"kamas\" name=\"kamas\" value=\""+ data.co_kamas+"\">"+
        "</div>"+
      
        "<div>"+
          "<button onclick=\"javascript:reduitId_company()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\"><i class=\"material-icons\">chevron_left</i></button>"+
          "<button onclick=\"javascript:augmenteId_company()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\"><i class=\"material-icons\">chevron_right</i></button>"+
          "<button onclick=\"javascript:createCompany()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Create</button>"+
          "<button onclick=\"javascript:updateCompany()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Update</button>"+
          "<button onclick=\"javascript:delCompany()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Delete</button>"+
        "</div>"+
      "</form>";
  formulaire.innerHTML = texteFormulaire;
};
function tableauCompany(data){
  var nomberCompany = data.length;
  var texteTableau =  "<br><br>"+
                      "<div class=\"overflow-scroll\" style=\"max-height:80vh\">"+
                      "<table class=\"table table-striped\">"+
                        "<tr>"+
                          "<th>id_company</th>"+
                          "<th>co_name</th>"+
                          "<th>co_xp</th>"+
                          "<th>co_kamas</th>"+
                        "</tr>";
  for(i = 0; i < nomberCompany; i++){
    texteTableau += "<tr>"+
                      "<td>"+data[i].id_company+"</td>"+
                      "<td>"+data[i].co_name+"</td>"+
                      "<td>"+data[i].co_xp+"</td>"+
                      "<td>"+data[i].co_kamas+"</td>"+
                    "</tr>";
  }
  texteTableau += "</table>"+
                    "</div>";
  table.innerHTML = texteTableau;
};
function afficherCompany() {
  axios.get("http://localhost:8443/administrator/company/"+ line_company)
  .then(function(result) {
    formulaireOneCompany(result.data); // MET A JOUR LA VUE AVEC LES DIFFERENTES CARTES
  })
  .catch(function(error) {
    console.log("erreur : ", error)
  })
  axios.get("http://localhost:8443/administrator/company")
    .then(function(result) {
      tableauCompany(result.data); // MET A JOUR LA VUE AVEC LES DIFFERENTES CARTES
    })
    .catch(function(error) {
      console.log("erreur : ", error)
    })
};
function searchId_company(){
  var id_company = document.getElementById("id").value;
  axios.get("http://localhost:8443/administrator/company")
  .then(function(result) {
    for(y= 0; y < result.data.length; y++){
      if(id_company == result.data[y].id_company) line_company = y;
    }
    afficherCompany();
    })
    .catch(function(error) {
    console.log("erreur : ", error)
    })
};
function augmenteId_company() {
    line_company++;
    afficherCompany();
};
function reduitId_company() {
  line_company--;
    afficherCompany();
};
function createCompany() {
    axios.post('http://localhost:8443/administrator/company', {
        'co_name': document.getElementById("name").value,
        'co_xp': document.getElementById("xp").value,
        'co_kamas': document.getElementById("kamas").value
      })
      .then(function (response) {
        id_company = response.data.result;
        axios.get("http://localhost:8443/administrator/company")
        .then(function(result) {
          for(y= 0; y < result.data.length; y++){
            if(id_company == result.data[y].id_company) line_company = y;
          }
          afficherCompany();
          })
        .catch(function(error) {
        console.log("erreur : ", error)
        })
      })
      .catch(function (error) {
        console.log(error);
      });
};
function updateCompany() {
    axios.put('http://localhost:8443/administrator/company', {
        'id_company': document.getElementById("id").value,
        'co_name': document.getElementById("name").value,
        'co_xp': document.getElementById("xp").value,
        'co_kamas': document.getElementById("kamas").value
      })
      .then(function (response) {
        
        afficherCompany()
      })
      .catch(function (error) {
        console.log(error);
      });
};
function delCompany() {
    axios.delete('http://localhost:8443/administrator/company', {
        data : {
            'id_company': document.getElementById("id").value
        }
      })
      .then(function (response) {
        axios.get("http://localhost:8443/administrator/company")
        .then(function(result) {
          line_company = result.data.length-1;
          afficherCompany();
          })
        .catch(function(error) {
        console.log("erreur : ", error)
        })
      })
      .catch(function (error) {
        console.log(error);
      });
};
//Partie gestion des recruteur TERMINÉE
var oneRecruiter;
var companyRecruiter;
var peopleRecruiter;
function formulaireOneRecruiter(dataOne, companyRecruiter, peopleRecruiter){
  var texteFormulaire = 
      "<form>"+
      "<br>"+
        "<div class=\"container overflow-auto\" style=\"max-height:80vh\">"+
          "<div class=\"pb-3 row\">"+
            "<label class=\"form-label\" for=\"id\">id_recruiter: </label>"+
            "<div class=\"col-11\">"+
              "<input class=\"form-control\" type=\"number\" id=\"id\" name=\"id\" value=\""+dataOne.id_recruiter+"\">"+
            "</div>"+
            "<div class=\"col\">"+
              "<button onclick=\"javascript:searchId_recruiter()\"  class=\"btn btn-warning bg-rechercher shadow-none\" type=\"button\" style=\"width:100%\"><i class=\"material-icons\">search</i></button>"+
            "</div>"+
          "</div>"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"id\">company: </label>"+
            "<select class=\"form-select\" id=\"company\">"+
              "<option value="+dataOne.re_id_company+" selected>"+dataOne.co_name+"</option>";
              for(i = 0; i < companyRecruiter.length; i++){
                texteFormulaire += "<option value="+companyRecruiter[i].id_company+">"+companyRecruiter[i].co_name+"</option>";
              }
              texteFormulaire +=  
            "</select >"+
          "</div>"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"id\">recruiter: </label>"+
            "<select class=\"form-select\" id=\"people\">"+
              "<option value="+dataOne.re_id_people+" selected>"+dataOne.pe_name+"</option>";
              for(i = 0; i < peopleRecruiter.length; i++){
                texteFormulaire += "<option value="+peopleRecruiter[i].id_people+">"+peopleRecruiter[i].pe_name+"</option>";
              }
              texteFormulaire += 
            "</select>"+ 
          "</div>"+

          "<div>"+
            "<button onclick=\"javascript:reduitId_recruiter()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\"><i class=\"material-icons\">chevron_left</i></button>"+
            "<button onclick=\"javascript:augmenteId_recruiter()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\"><i class=\"material-icons\">chevron_right</i></button>"+
            "<button onclick=\"javascript:createRecruiter()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Create</button>"+
            "<button onclick=\"javascript:updateRecruiter()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Update</button>"+
            "<button onclick=\"javascript:delRecruiter()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Delete</button>"+
          "</div>"+
        "</div>"+
      "</form>";
  formulaire.innerHTML = texteFormulaire;
};
function tableauRecruiter(data){
  var nomberRecruiter = data.length;
  var texteTableau =  "<br><br>"+
                        "<div class=\"overflow-scroll\" style=\"max-height:80vh\">"+
                       "<table class=\"table table-striped\">"+
                        "<tr>"+
                          "<th>id_recruiter</th>"+
                          "<th>id_company</th>"+
                          "<th>co_name</th>"+
                          "<th>pe_name</th>"+
                          "<th>id_people</th>"+
                        "</tr>";
  for(i = 0; i < nomberRecruiter; i++){
    texteTableau += "<tr>"+
                      "<td>"+data[i].id_recruiter+"</td>"+
                      "<td>"+data[i].re_id_company+"</td>"+
                      "<td>"+data[i].co_name+"</td>"+
                      "<td>"+data[i].pe_name+"</td>"+
                      "<td>"+data[i].re_id_people+"</td>"+
                    "</tr>";
  }
  texteTableau += "</table>"+
                    "</div>";
  table.innerHTML = texteTableau;
};
function afficherRecruiter() {
  axios.get("http://localhost:8443/administrator/recruiter/one/"+ line_recruiter)
  .then(function(result) {
    oneRecruiter = result.data;
    axios.get("http://localhost:8443/administrator/recruiter/company")
    .then(function(result) {
      companyRecruiter = result.data;
      axios.get("http://localhost:8443/administrator/recruiter/people")
      .then(function(result) {
        peopleRecruiter = result.data;
        formulaireOneRecruiter(oneRecruiter, companyRecruiter, peopleRecruiter);
      })
      .catch(function(error) {
        console.log("erreur : ", error)
      })
    })
    .catch(function(error) {
      console.log("erreur : ", error)
    })
  })
  .catch(function(error) {
    console.log("erreur : ", error)
  })
  axios.get("http://localhost:8443/administrator/recruiter")
      .then(function(result) {
        tableauRecruiter(result.data);
      })
      .catch(function(error) {
        console.log("erreur : ", error)
      })
};
function searchId_recruiter(){
  var id_recruiter = document.getElementById("id").value;
  axios.get("http://localhost:8443/administrator/recruiter")
  .then(function(result) {
    for(y= 0; y < result.data.length; y++){
      if(id_recruiter == result.data[y].id_recruiter) line_recruiter = y;
    }
    afficherRecruiter();
    })
    .catch(function(error) {
    console.log("erreur : ", error)
    })
};
function augmenteId_recruiter() {
    line_recruiter++;
    afficherRecruiter();
};
function reduitId_recruiter() {
  line_recruiter--;
    afficherRecruiter();
};
function createRecruiter() {
    axios.post('http://localhost:8443/administrator/recruiter', {
        're_id_company': document.getElementById("company").value,
        're_id_people': document.getElementById("people").value
      })
      .then(function (response) {
        var id_recruiter = response.data.result;
        axios.get("http://localhost:8443/administrator/recruiter")
        .then(function(result) {
          for(y= 0; y < result.data.length; y++){
            if(id_recruiter == result.data[y].id_recruiter) line_recruiter = y;
          }
          afficherRecruiter();
          })
          .catch(function(error) {
          console.log("erreur : ", error)
          })
      })
      .catch(function (error) {
        console.log(error);
      });
};
function updateRecruiter() {
    axios.put('http://localhost:8443/administrator/recruiter', {
        'id_recruiter' : document.getElementById("id").value,
        're_id_company': document.getElementById("company").value,
        're_id_people': document.getElementById("people").value
      })
      .then(function (response) {
        
        afficherRecruiter();
      })
      .catch(function (error) {
        console.log(error);
      });
};
function delRecruiter() {
    axios.delete('http://localhost:8443/administrator/recruiter', {
        data : {
            'id_recruiter': document.getElementById("id").value
        }
      })
      .then(function (response) {
        var id_recruiter = document.getElementById("id").value;
        axios.get("http://localhost:8443/administrator/recruiter")
        .then(function(result) {
          line_recruiter = result.data.length-1;
          afficherRecruiter();
          })
          .catch(function(error) {
          console.log("erreur : ", error)
          })
      })
      .catch(function (error) {
        console.log(error);
      });
};
//Gestion des applications TERMINÉE
var oneApplication;
var job_offerApplication;
function formulaireOneApplication(dataOne, dataCompany){
  var texteFormulaire = 
      "<form>"+
      "<br>"+
        "<div class=\"container overflow-auto\" style=\"max-height:80vh\">"+
          "<div class=\"pb-3 row\">"+
            "<label class=\"form-label\" for=\"id\">id_recruiter: </label>"+
            "<div class=\"col-11\">"+
              "<input class=\"form-control\" type=\"number\" id=\"id\" name=\"id\" value=\""+dataOne.id_application+"\">"+
            "</div>"+
            "<div class=\"col\">"+
              "<button onclick=\"javascript:searchId_application()\" class=\"btn btn-warning bg-rechercher shadow-none\" type=\"button\" style=\"width:100%\"><i class=\"material-icons\">search</i></button>"+
            "</div>"+
          "</div>"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"id\">job_offer: </label>"+
            "<select class=\"form-select\" id=\"offer\">"+
              "<option value="+dataOne.ap_id_job_offer+" selected>"+dataOne.jo_name+"</option>";
              for(i = 0; i < dataCompany.length; i++){
              texteFormulaire += "<option value="+dataCompany[i].id_job_offer+">"+dataCompany[i].jo_name+"</option>";
              }
              texteFormulaire +=  
            "</select>"+
          "</div>"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"id\">ap_name: </label>"+
            "<input class=\"form-control\" type=\"text\" id=\"name\" name=\"name\" value=\""+dataOne.ap_name+"\">"+
          "</div>"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"id\">ap_email: </label>"+
            "<input class=\"form-control\" type=\"email\" id=\"email\" name=\"email\" value=\""+dataOne.ap_email+"\">"+
          "</div>"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"id\">ap_lvl: </label>"+
            "<input class=\"form-control\" type=\"number\" id=\"lvl\" name=\"lvl\" value=\""+dataOne.ap_lvl+"\">"+
          "</div>"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"id\">ap_text: </label>"+
            "<input class=\"form-control\" type=\"text\" id=\"texte\" name=\"texte\" value=\""+dataOne.ap_text+"\">"+
          "</div>"+
          "<div>"+
            "<button onclick=\"javascript:reduitId_application()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\"><i class=\"material-icons\">chevron_left</i></button>"+
            "<button onclick=\"javascript:augmenteId_application()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\"><i class=\"material-icons\">chevron_right</i></button>"+
            "<button onclick=\"javascript:createApplication()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Create</button>"+
            "<button onclick=\"javascript:updateApplication()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Update</button>"+
            "<button onclick=\"javascript:delApplication()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Delete</button>"+
          "</div>"+
        "</div>"+
      "</form>";
  formulaire.innerHTML = texteFormulaire;
};
function tableauApplication(data){
  var nomberApplication = data.length;
  var texteTableau =  "<br><br>"+
                      "<div class=\"overflow-scroll\" style=\"max-height:80vh\">"+
                        "<table class=\"table table-striped\">"+
                        "<tr>"+
                          "<th>id_application</th>"+
                          "<th>id_job_offer</th>"+
                          "<th>jo_name</th>"+
                          "<th>ap_name</th>"+
                          "<th>ap_email</th>"+
                          "<th>ap_lvl</th>"+
                          "<th>ap_text</th>"+
                        "</tr>";
  for(i = 0; i < nomberApplication; i++){
    texteTableau += "<tr>"+
                      "<td>"+data[i].id_application+"</td>"+
                      "<td>"+data[i].ap_id_job_offer+"</td>"+
                      "<td>"+data[i].jo_name+"</td>"+
                      "<td>"+data[i].ap_name+"</td>"+
                      "<td>"+data[i].ap_email+"</td>"+
                      "<td>"+data[i].ap_lvl+"</td>"+
                      "<td>"+data[i].ap_text+"</td>"+
                    "</tr>";
  }
  texteTableau += "</table>"+
                  "</div>";
  table.innerHTML = texteTableau;
};
function afficherApplication() {
  axios.get("http://localhost:8443/administrator/application/one/"+ line_application)
  .then(function(result) {
    oneApplication = result.data;
    axios.get("http://localhost:8443/administrator/application/job_offer")
    .then(function(result) {
      job_offerApplication = result.data;
      formulaireOneApplication(oneApplication, job_offerApplication);
    })
    .catch(function(error) {
      console.log("erreur : ", error)
    })
  })
  .catch(function(error) {
    console.log("erreur : ", error)
  })
  axios.get("http://localhost:8443/administrator/application")
      .then(function(result) {
        tableauApplication(result.data);
      })
      .catch(function(error) {
        console.log("erreur : ", error)
      })
};
function searchId_application(){
  var id_application = document.getElementById("id").value;
  console.log(id_application);
  axios.get("http://localhost:8443/administrator/application")
  .then(function(result) {
    for(y= 0; y < result.data.length; y++){
      if(id_application == result.data[y].id_application) line_application = y;
    }
    console.log(line_application);
    afficherApplication();
    })
    .catch(function(error) {
    console.log("erreur : ", error)
    })
};
function augmenteId_application() {
    line_application++;
    afficherApplication();
};
function reduitId_application() {
  line_application--;
    afficherApplication();
};
function createApplication() {
    axios.post('http://localhost:8443/administrator/application', {
      'ap_id_job_offer': document.getElementById("offer").value,
      'ap_name': document.getElementById("name").value,
      'ap_email': document.getElementById("email").value,
      'ap_lvl': document.getElementById("lvl").value,
      'ap_text': document.getElementById("texte").value
      })
      .then(function (response) {
        id_application = response.data.result;
        axios.get("http://localhost:8443/administrator/application")
        .then(function(result) {
          for(y= 0; y < result.data.length; y++){
            if(id_application == result.data[y].id_application) line_application = y;
          }
          afficherApplication();
          })
          .catch(function(error) {
          console.log("erreur : ", error)
          })
      })
      .catch(function (error) {
        console.log(error);
      });
};
function updateApplication() {
    axios.put('http://localhost:8443/administrator/application', {
        'id_application': document.getElementById("id").value,
        'ap_id_job_offer': document.getElementById("offer").value,
        'ap_name': document.getElementById("name").value,
        'ap_email': document.getElementById("email").value,
        'ap_lvl': document.getElementById("lvl").value,
        'ap_text': document.getElementById("texte").value
      })
      .then(function (response) {
        
        afficherApplication();
      })
      .catch(function (error) {
        console.log(error);
      });
};
function delApplication() {
    axios.delete('http://localhost:8443/administrator/application', {
        data : {
            'id_application': document.getElementById("id").value
        }
      })
      .then(function (response) {
        axios.get("http://localhost:8443/administrator/application")
        .then(function(result) {
          line_application = result.data.length-1;
          afficherApplication();
          })
          .catch(function(error) {
          console.log("erreur : ", error)
          })
      })
      .catch(function (error) {
        console.log(error);
      });
};