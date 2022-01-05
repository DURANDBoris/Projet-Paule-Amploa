function createPeople() {
    axios.post('http://localhost:8443/login/candidat/', {
        'pe_name': document.getElementById("InputName").value,
        'pe_email': document.getElementById("InputEmail").value,
        'pe_lvl': document.getElementById("InputLvl").value,
        'pe_login': document.getElementById("InputEmail").value,
        'pe_password': document.getElementById("InputPassword").value,
        'pe_status': document.getElementById("status").value
      })
      .then(function (response) {
        if(response.data == 1)
        {
          document.getElementById('error').innerHTML = "Il manque une information dans le formulaire";
        }
        else
        {
          document.getElementById('error').innerHTML = "Compte créer !";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
};

function loginUser() {
  console.log({
    'username': document.getElementById("floatingLogin").value,
    'password': document.getElementById("floatingPassword").value
  });
  axios.post('http://localhost:8443/login', {
    'username': document.getElementById("floatingLogin").value,
    'password': document.getElementById("floatingPassword").value
  })
  .then(function (response) {
    if(response.data == 1){
      document.getElementById('error').innerHTML = "User or Password is incorrect";
    }else if(response.data == 2){
      document.getElementById('error').innerHTML = "Compte inexistant";
    }else{
      console.log(response);
      document.location.href=response.data.url;
    }
    
  })
  .catch(function (error) {
    console.log(error);
  });
}