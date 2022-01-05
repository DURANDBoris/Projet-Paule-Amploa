var recruiter = 2;
var idd_company = 5;
axios.get("http://localhost:8443/recruiter/my_job_offer/"+recruiter)
.then(function(result) {
  createCardsOfferByRecruiter(result.data); // MET A JOUR LA VUE AVEC LES DIFFERENTES CARTES
})
.catch(function(error) {
  console.log("erreur : ", error);
})

function createCardsOfferByRecruiter(data){
  var numberFor = data.length;
  var rendu = "";
  var form = "<a onclick='createOfferForm()' type=\"button\"><h4>Create<i class=\"material-icons \">add</i></h4></a>";

  for(var i = 0; i < numberFor; i++){
    rendu += 
    "<div class=\"col-12\">"+
      "<article id=\"test\">"+
        "<div class=\"card\">"+
          "<div class=\"card-header bg-filtre\">"+
            "<div class=\"row\">"+
              "<div class=\"col-md-9 col-lg-10\">"+
                "<h4>"+data[i].jo_name+"</h4>"+
              "</div>"+
              "<div class=\"col\">"+
                "<a onclick='delOffer("+data[i].id_job_offer+")' type=\"button\">Supprimer<i class=\"material-icons \">close</i></a>"+
              "</div>"+
            "</div>"+
          "</div>"+
          "<div class=\"card-body\">"+
            "<h5 class=\"card-title\">"+data[i].co_name+"</h5>"+
            "<h6 class=\"card-subtitle\">"+data[i].jo_address+"</h6>"+
            "<br>"+
            "<p class=\"card-text\">"+data[i].jo_xp+" xp<br></p>"+
            "<p class=\"card-text\"><strong>"+data[i].jo_kamas+" kamas</strong></p>"+
            "<a onclick='getOffer("+i+")' type=\"button\">Update<i class=\"material-icons align-middle\">chevron_right</i></a>"+
            "</div>"+
        "</div>"+
      "</article>"+
      "<div style=\"height: 30px;\">"+
      "</div>"+
    "</div>";
  }
  document.getElementById('offers').innerHTML = rendu;
  document.getElementById('form').innerHTML = form;
}

function getOffer(i)
{
  axios.get("http://localhost:8443/recruiter/full_one_job_offer/"+i)
  .then(function(result) {
    createFormOffer(result.data); // MET A JOUR LA VUE AVEC LES DIFFERENTES CARTES
  })
  .catch(function(error) {
    console.log("erreur : ", error);
  })
}

function createFormOffer(data){
  var texteFormulaire = 
      "<form>"+
        "<br>"+
        "<div class=\"container overflow-auto\" style=\"max-height:80vh\">"+
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
            "<label class=\"form-label\" for=\"description\">jo_description: </label>"+
            "<textarea class=\"form-control overflow-auto\" type=\"text\" id=\"description\" name=\"description\" rows=\"5\">"+
             data.jo_description+
            "</textarea>"+
          "</div>"+

          "<div>"+
            "<button onclick=\"javascript:updateOffer("+data.id_job_offer+","+data.id_people+","+data.id_company+")\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Update</button>"+
          "</div>"+
        "</div>"+
      "</form>";
      document.getElementById('form').innerHTML = texteFormulaire;
};

function suppCardsApplys(){
  document.getElementById('form').innerHTML = "";
}

function updateOffer(id,people,company) {
  axios.put('http://localhost:8443/recruiter/job_offer', {
    'jo_id_company': company,
    'jo_recruiter': people,
    'id_job_offer': id,
    'jo_name': document.getElementById("name").value,
    'jo_xp': document.getElementById("xp").value,
    'jo_kamas': document.getElementById("kamas").value,
    'jo_address': document.getElementById("address").value,
    'jo_description': document.getElementById("description").value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function createOfferForm(){

  var rendu = "";
    rendu += 
    "<form>"+
        "<br>"+
        "<div class=\"container overflow-auto\" style=\"max-height:80vh\">"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"name\">jo_name: </label>"+
            "<input class=\"form-control\" type=\"text\" id=\"name\" name=\"name\">"+
          "</div>"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"email\">jo_xp: </label>"+
            "<input class=\"form-control\" type=\"number\" id=\"xp\" name=\"xp\">"+
          "</div>"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"lvl\">jo_kamas:</label>"+
            "<input class=\"form-control\" type=\"number\" id=\"kamas\" name=\"kamas\">"+
          "</div>"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"login\">jo_address :</label>"+
            "<input class=\"form-control\" type=\"text\" id=\"address\" name=\"address\">"+
          "</div>"+
          "<div class=\"pb-3\">"+
            "<label class=\"form-label\" for=\"description\">jo_description: </label>"+
            "<textarea class=\"form-control overflow-auto\" type=\"text\" id=\"description\" name=\"description\" rows=\"5\"></textarea>"+
          "</div>"+

          "<div>"+
            "<button onclick=\"javascript:createOffer()\" class=\"btn btn-warning bg-rechercher p-2 m-1 shadow-none\" type=\"button\">Create</button>"+
          "</div>"+
        "</div>"+
      "</form>";
  document.getElementById('form').innerHTML = rendu;
}

function createOffer(){
  axios.post('http://localhost:8443/recruiter/create_job_offer', {
      'jo_name': document.getElementById("name").value,
      'jo_xp': document.getElementById("xp").value,
      'jo_kamas': document.getElementById("kamas").value,
      'jo_address': document.getElementById("address").value,
      'jo_description': document.getElementById("description").value,
      'jo_id_company':idd_company,
      'jo_recruiter':recruiter
      })
      .then(function (response) {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
}

function delOffer(i){
  axios.delete('http://localhost:8443/recruiter/job_offer', {
        data : {
            'id_job_offer': i
        }
      })
      .then(function (response) {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
}