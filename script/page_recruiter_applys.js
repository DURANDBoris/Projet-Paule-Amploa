var recruiter = 2;
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
              "</div>"+
            "</div>"+
          "</div>"+
          "<div class=\"card-body\">"+
            "<h5 class=\"card-title\">"+data[i].co_name+"</h5>"+
            "<h6 class=\"card-subtitle\">"+data[i].jo_address+"</h6>"+
            "<br>"+
            "<p class=\"card-text\">"+data[i].jo_xp+" xp<br></p>"+
            "<p class=\"card-text\"><strong>"+data[i].jo_kamas+" kamas</strong></p>"+
            "<a onclick='createCardsApplysByOffer("+data[i].id_job_offer+")' type=\"button\">Candidatures<i class=\"material-icons align-middle\">chevron_right</i></a>"+
            "</div>"+
        "</div>"+
      "</article>"+
      "<div style=\"height: 30px;\">"+
      "</div>"+
    "</div>";
  }
  document.getElementById('offers').innerHTML = rendu;
  
}

function createCardsApplysByOffer(numoffer)
{
  axios.get("http://localhost:8443/recruiter/app_by_offer/"+numoffer)//applybyjoboffer
  .then(function(result) {
    createCardsApplys(result.data,numoffer); // MET A JOUR LA VUE AVEC LES DIFFERENTES CARTES
  })
  .catch(function(error) {
    console.log("erreur : ", error);
  })
}

function createCardsApplys(data,numoffer){
  var numberFor = data.length;
  var rendu = "";
  if(data.length!=0)
  {
    rendu += "<a onclick='suppCardsApplys()' type=\"button\"><i class=\"material-icons align-middle black\">close</i></a>";
  }
  for(var i = 0; i < numberFor; i++){
    rendu += 
    "<div class=\"card container\">"+
      "<div class=\"row\">"+
        "<div class=\"col-8\">"+
          "<h4> Name : "+data[i].ap_name+"</h4>"+ 
        "</div>"+
        "<div class=\"col-4\">"+
          "<a onclick='delApply("+data[i].id_application+","+numoffer+")' type=\"button\">Supprimer<i class=\"material-icons align-middle black\">close</i></a>"+
        "</div>"+
      "</div>"+
      "<h5 class=\"card-title\"> Email : "+data[i].ap_email+"</h5>"+
      "<br>"+
      "<p class=\"card-text\"> Lvl : "+data[i].ap_lvl+"</p>"+
      "<p class=\"card-text\">"+data[i].ap_text+"</p>"+
      "<br>"+
    "</div>"+
    "<div style=\"height:10px\"></div>";
  }
    document.getElementById('applys').innerHTML = rendu;
}

function suppCardsApplys(){
  document.getElementById('applys').innerHTML = "";
}

function delApply(i,numoffer) {
  axios.delete('http://localhost:8443/recruiter/application', {
      data : {
          'id_application': i
      }
    })
    .then(function () {
      createCardsApplysByOffer(numoffer);
    })
    .catch(function (error) {
      console.log(error);
    });
};