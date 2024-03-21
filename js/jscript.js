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
    document.location.href="../html/form.html";
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

/*function validateformulaire()
{
    var name=document.getElementById("nom").value;
    document.getElementById("login").textContent=name;
    
}*/

function filtre()
{
   let div=document.createElement("div");
   let button1=document.createElement("button");
   let button2=document.createElement("button");
   button1.textContent="AGENT";
   button2.textContent="MAISON";
   
   div.style.border="1px solid red";
   button1.style.border="1px solid black";
   button2.style.border="1px solid black"
   div.style.border="1px solid black";
   div.style.marginBottom="30px"
   div.appendChild(button2);
   div.appendChild(button1);
   document.getElementById("entete").appendChild(div);
}
