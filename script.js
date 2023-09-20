document.getElementById("formulaire").addEventListener("submit", function (e) {
  var erreur;

  var inputs = document.getElementsByTagName("input");

  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      erreur = "Veuillez renseigner tous les champs";
    }
  }

  if (erreur) {
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
  } else {
    alert(
      "Merci pour votre message ! Un membre du groupe vous répondra dès que possible."
    );
  }
});

// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const message = document.getElementById("email");

// if (!message.value) {
//   erreur = "Veuillez écrire un message";
// }
// if (!email.value) {
//   erreur = "Veuillez renseigner un email";
// }
// if (!name.value) {
//   erreur = "Veuillez renseigner un nom";
// }
