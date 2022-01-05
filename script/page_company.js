var art_company = document.getElementById('company');

axios.get("http://localhost:8443/candidat/all_company")
.then(function(result) {
  createCardsCompany(result.data); // MET A JOUR LA VUE AVEC LES DIFFERENTES CARTES
})
.catch(function(error) {
  console.log("erreur : ", error)
})

function createCardsCompany(data){
  var numberFor = data.length;
  var rendu = "";
  rendu+=
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
                  "<h4>"+data[i].co_name+"</h4>"+
                "</div>"+
              "</div>"+
            "</div>"+
            "<div class=\"card-body\">"+
              "<br>"+
              "<p class=\"card-text\">"+data[i].co_xp+" xp<br></p>"+
              "<p class=\"card-text\"><strong>"+data[i].co_kamas+" kamas</strong></p>"+
            "</div>"+
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
                  "<div class=\"col\">"+
                    "<h4>"+data[i].co_name+"</h4>"+
                  "</div>"+
                "</div>"+
              "</div>"+
              "<div class=\"card-body\">"+
                "<br>"+
                "<p class=\"card-text\">"+data[i].co_xp+" xp<br /></p>"+
                "<p class=\"card-text\"><strong>"+data[i].co_kamas+" kamas</strong></p>"+
                "<div>"+
                  "<a onclick='createCardsFullOneCompanyOffers("+data[i].id_company+")' type=\"button\">All offers<i class=\"material-icons align-middle\">chevron_right</i></a>"+
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
        "<div id=\"CompanyOffers\">"+
        "</div>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>";
  art_company.innerHTML = rendu;
  }

function createCardsFullOneCompanyOffers(number){
  axios.get("http://localhost:8443/candidat/all_offer_by_company/"+number+"/")
  .then(function(result) {
    createCardsCompanyOffers(result.data);
  })
  .catch(function(error) {
    console.log("erreur : ", error)
  })
}

function createCardsCompanyOffers(data){
  var numberFor = data.length;
  var resul=
  "<div class=\"col-12 overflow-auto\" style=\"max-height: 76vh;\">";
      for(var i = 0; i < numberFor; i++){
      resul += 
        "<article>"+
          "<div class=\"card\">"+
            "<div class=\"card-header bg-filtre\">"+
              "<div class=\"row\">"+
                "<div class=\"col-9 col-sm-10\">"+
                  "<h4>"+data[i].jo_name+"</h4>"+
                "</div>"+
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
      resul+=
    "</div>";
  document.getElementById("CompanyOffers").innerHTML= resul;
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

function createDescription(data,number){
  var id = "descriptionP";
  id+=number;
  var result = "<p>Description du poste : "+data.jo_description+"<br></p>"+
  "<p class=\"card-text\">"+data.pe_name+"</p>";
  document.getElementById(id).innerHTML = result;
}