var art_offer = document.getElementById('offer');

axios.get("http://localhost:8443/candidat/short_job_offer/")
.then(function(result) {
  createCardsOffer(result.data); // MET A JOUR LA VUE AVEC LES DIFFERENTES CARTES
})
.catch(function(error) {
  console.log("erreur : ", error);
})

function createCardsOffer(data){
  var numberFor = data.length;
  var rendu = "";
  rendu+=
  "<div class=\"row\">"+
    "<div class=\"col\">"+
    "</div>"+
    "<div class=\"col-10 col-sm-10 col-md-8 col-lg-6\">"+
      "<h5>Il y a "+numberFor+" annonce correspondant à vos critères.</h5>"+
      "<div id=\"error\">"+
      "</div>"+
    "</div>"+
    "<div class=\"col\">"+
    "</div>"+
  "</div>"+
  "<br>"+
  "<div class=\"container d-block d-md-none\">"+
    "<div class=\"row\">"+
      "<div class=\"col-12\">";
      for(var i = 0; i < numberFor; i++){
      rendu += 
        "<article>"+
          "<div class=\"card\">"+
            "<div class=\"card-header bg-filtre\">"+
              "<div class=\"row\">"+
                "<div class=\"col-9 col-sm-10\">"+
                  "<h4>"+data[i].jo_name+"</h4>"+
                "</div>"+
                "<div class=\"col-3 col-sm-2\"><a class=\"btn btn-warning bg-apply p-1 shadow-none\" data-bs-toggle=\"modal\" data-bs-target=\"#Modal"+i+"\" role=\"button\">APPLY</a></div>"+
              "</div>"+
            "</div>"+
            "<div class=\"card-body\">"+
              "<h5 class=\"card-title\">"+data[i].co_name+"</h5>"+
              "<h6 class=\"card-subtitle\">"+data[i].jo_address+"</h6>"+
              "<br>"+
              "<p class=\"card-text\">"+data[i].jo_xp+" xp<br></p>"+
              "<p class=\"card-text\"><strong>"+data[i].jo_kamas+" kamas</strong></p>"+
              "<div class=\"collapse\" id=\"collapse"+i+"\">"+
              "<p id=\"descriptionP"+i+"\" class=\"card-text mx-2\"></p>"+
              "</div>"+
            "</div>"+
            "<a onclick='addDescriptionOneJobOffer("+i+")' data-bs-target=\"#collapse"+i+"\" class=\"m-2\" data-bs-toggle=\"collapse\" aria-expanded=\"false\">Learn more<i class=\"material-icons align-middle\">arrow_drop_down</i></a>"+
          "</div>"+
          "<div style=\"height: 30px;\"></div>"+
        "</article>";
      }
      rendu+=
      "</div>"+
    "</div>"+
  "</div>"+

  
  "<div class=\"container d-none d-md-block\">"+
    "<div class=\"row \">"+
      "<div class=\"col-6 overflow-auto\" style=\"max-height: 76vh;\">";
        for(var i = 0; i < numberFor; i++){
        rendu +=
        "<div class=\"col-12\">"+
          "<article>"+
            "<div class=\"card\">"+
              "<div class=\"card-header bg-filtre\">"+
                "<div class=\"row\">"+
                  "<div class=\"col-md-9 col-lg-10\">"+
                    "<h4>"+data[i].jo_name+"</h4>"+
                  "</div>"+
                  "<div class=\"col-md-3 col-lg-2\"><a class=\"btn btn-warning bg-apply p-1 shadow-none\" data-bs-toggle=\"modal\" data-bs-target=\"#Modal"+i+"\" role=\"button\">APPLY</a>"+
                  "</div>"+
                "</div>"+
              "</div>"+
              "<div class=\"card-body\">"+
                "<h5 class=\"card-title\">"+data[i].co_name+"</h5>"+
                "<h6 class=\"card-subtitle\">"+data[i].jo_address+"</h6>"+
                "<br>"+
                "<p class=\"card-text\">"+data[i].jo_xp+" xp<br /></p>"+
                "<p class=\"card-text\"><strong>"+data[i].jo_kamas+" kamas</strong></p>"+
                "<div>"+
                  "<a onclick='createCardsFullOneJobOffer("+i+")' type=\"button\">Learn more<i class=\"material-icons align-middle\">chevron_right</i></a>"+
                "</div>"+
              "</div>"+
            "</div>"+
          "</article>"+
          "<div style=\"height: 30px;\"></div>"+
        "</div>";
        }
      rendu +=
      "</div>"+
      "<div class=\"col-6\">"+
        "<div id=\"FullOneJobOffer\">"+
        "</div>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>"+
  "<div>";
    for(var i = 0; i < numberFor; i++){
    rendu +=
    "<div class=\"modal fade\" id=\"Modal"+i+"\" tabindex=\"-1\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">"+
      "<div class=\"modal-dialog modal-dialog-centered\">"+
        "<div class=\"modal-content\">"+
          "<div class=\"modal-header bg-vertdofus\">"+
            "<h5 class=\"modal-title\" id=\"exampleModalLabel\">Apply</h5>"+
            "<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>"+
          "</div>"+
          "<div class=\"modal-body\">"+
            "<form>"+
              "<div class=\"mb-3\">"+
                "<label for=\"InputEmail\" class=\"form-label\">Email address</label>"+
                "<input type=\"email\" class=\"form-control\" id=\"InputEmail"+i+"\" placeholder=\"name@example.com\" maxlength=\"50\">"+
              "</div>"+
              "<div class=\"mb-3\">"+
                "<div class=\"row\">"+
                  "<div class=\"col-8\">"+
                    "<label for=\"Name\" class=\"form-label\">Name</label>"+
                    "<input type=\"text\" class=\"form-control\" id=\"InputName"+i+"\" maxlength=\"20\">"+
                  "</div>"+
                  "<div class=\"col\">"+
                    "<label for=\"Name\" class=\"form-label\">Level (1-200)</label>"+
                    "<input type=\"number\" class=\"form-control\" id=\"InputLvl"+i+"\" max=\"200\" maxlength=\"3\">"+
                  "</div>"+
                "</div>"+
              "</div>"+
              "<div class=\"mb-3\">"+
                "<label for=\"Textarea\" class=\"form-label\">Your message</label>"+
                "<textarea class=\"form-control\" id=\"InputMsg"+i+"\" rows=\"3\"></textarea>"+
              "</div>"+
            "</form>"+
          "</div>"+
          "<div class=\"modal-footer bg-filtre\">"+
            "<button type=\"button\" class=\"btn btn-warning bg-button p-1 shadow-none\" data-bs-dismiss=\"modal\">Close</button>"+
            "<button onclick=\"javascript:createApplication("+data[i].id_job_offer+","+i+")\" type=\"button\" class=\"btn btn-warning bg-apply p-1 shadow-none\" data-bs-dismiss=\"modal\" type=\"submit\">Apply</button>"+
          "</div>"+
        "</div>"+
      "</div>"+
    "</div>";
  }
  "</div>";
  
  art_offer.innerHTML = rendu;
}

function createCardsFullOneJobOffer(number){
  axios.get("http://localhost:8443/candidat/full_one_job_offer/"+number+"/")
  .then(function(result) {
    createCardsDescription(result.data);
  })
  .catch(function(error) {
    console.log("erreur : ", error)
  })
}

function addDescriptionOneJobOffer(number){
  axios.get("http://localhost:8443/candidat/full_one_job_offer/"+number+"/")
  .then(function(result) {
    createDescription(result.data,number);
  })
  .catch(function(error) {
    console.log("erreur : ", error)
  })
}

function createCardsDescription(data){
  var resul = "";
  resul += 
  "<div class=\"col-12\">"+
      "<div class=\"card card-body overflow-auto\" style=\"width:100%; max-height: 76vh;\">"+
        "<a onclick='suppCardsOffer()' type=\"button\"><i class=\"material-icons align-middle black\">close</i></a>"+
        "<div class=\"card-body\">"+
          "<h4>"+data.jo_name+"</h4>"+
          "<h5 class=\"card-title\">"+data.co_name+"</h5>"+
          "<h6 class=\"card-subtitle\">"+data.jo_address+"</h6>"+
          "<br>"+
          "<p class=\"card-text\">"+data.jo_xp+" xp<br></p>"+                
          "<p class=\"card-text\"><strong>"+data.jo_kamas+" kamas</strong></p>"+
        "</div>"+
        "<p class=\"card-text\">Description du poste :<br>"+data.jo_description+"</p>"+
        "<p class=\"card-text\">"+data.pe_name+"</p>"+
      "<div>"+
    "</div>"+
  "</div>";
  document.getElementById("FullOneJobOffer").innerHTML= resul;
}

function createDescription(data,number){
  var id = "descriptionP";
  id+=number;
  var result = "<p>Description du poste : "+data.jo_description+"<br></p>"+
  "<p class=\"card-text\">"+data.pe_name+"</p>";
  document.getElementById(id).innerHTML = result;
}

function suppCardsOffer(){
  document.getElementById("FullOneJobOffer").innerHTML= "";
}

function createApplication(numoffer,i){
  axios.post('http://localhost:8443/candidat/application', {
    'ap_id_job_offer': numoffer,
    'ap_name': document.getElementById("InputName"+i).value,
    'ap_email': document.getElementById("InputEmail"+i).value,
    'ap_lvl': document.getElementById("InputLvl"+i).value,
    'ap_text': document.getElementById("InputMsg"+i).value
    })
    .then(function (response) {
      if(response.data == 1)
        {
          console.log(numoffer)
          alert("Il manque une information dans le formulaire");
        }
        else
        {
          alert("Candidature transmise!");
        }
    })
    .catch(function (error) {
      console.log(error);
    });
};
