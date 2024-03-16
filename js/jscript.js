function formulaire()
{
    document.location.href="../html/form.html";
}
function reset()
{
    document.location.href="../html/accueil.html";
}

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("forminscription").style.display="none";
   
});
function connexion()
{
    document.getElementById("forminscription").style.display="none";
    document.getElementById("formconnexion").style.display="block";
    document.getElementById("connexion").style.borderBottom="3px solid blue";
    document.getElementById("inscription").style.borderBottom=0;


}
function inscription()
{
    document.getElementById("forminscription").style.display="block";
    document.getElementById("formconnexion").style.display="none";
    document.getElementById("connexion").style.borderBottom=0;
    document.getElementById("inscription").style.borderBottom="3px solid blue";


}

function validateformulaire()
{
    var name=document.getElementById("nom").value;
    document.getElementById("login").textContent=name;
    
}
