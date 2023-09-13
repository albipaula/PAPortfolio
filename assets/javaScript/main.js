var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {

// Obtén referencias a los elementos relevantes
const aceptarCookies = document.getElementById("btn-accept");
const declineCookies = document.getElementById("btn-decline")
const modalCookies = document.getElementById("cookies-module");

// Verifica si las cookies ya han sido aceptadas
const cookiesAceptadas = localStorage.getItem("acept");

// Si las cookies no se han aceptado y el modal existe, muestra el modal
if (!cookiesAceptadas && modalCookies) {
  modalCookies.classList.remove("hide");
}

// Agrega un evento al botón de aceptación de cookies
aceptarCookies.addEventListener("click", () => {
  // Registra la aceptación de cookies en el almacenamiento local
  localStorage.setItem("acept", "true");

  // Oculta el modal de cookies si existe
  if (modalCookies) {
    modalCookies.classList.add("hide");
  }
});

})         

