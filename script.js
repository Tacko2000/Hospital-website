let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};




document.addEventListener("DOMContentLoaded", function () {
    
    console.log("Le script JavaScript est chargé avec succès!");
  });
  



document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("appointmentForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (validateForm()) {
            alert("Formulaire soumis avec succès!");
            // Tu peux remplacer l'alerte par du code pour afficher un message dans le document ou effectuer d'autres actions après la validation réussie.
        }
    });

    function validateForm() {
        var nom = document.getElementById("nom").value;
        var prenom = document.getElementById("prenom").value;
        var telephone = document.getElementById("telephone").value;
        var email = document.getElementById("email").value;
        var date = document.getElementById("date").value;
        var specialite = document.getElementById("specialite").value;

        if (nom === "" || prenom === "" || telephone === "" || email === "" || date === "" || specialite === "") {
            alert("Veuillez remplir tous les champs du formulaire.");
            return false;
        }

        return true;
    }
});

