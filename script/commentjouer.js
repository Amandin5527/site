function masquernivx() {
    var bz = document.getElementById("robtopniv");var btn = document.getElementById("voirtout")
    if(bz.style.display == "none"){bz.style.display = "flex";btn.innerHTML = "Masquer les niveaux"} else{bz.style.display = "none";btn.innerHTML = "Voir tous les niveaux de RobTop"}
}

divs = ["tout","cube","ship","wave"];



function masquertout() {
    for (var el=0;el<divs.length;el++){
        document.getElementById(divs[el]).style.display = "none"
        document.getElementById(divs[el]+"AM").style.backgroundColor = "grey"
    }
}

function afficher(a){
    masquertout();
    document.getElementById(a).style.display = "block"
    document.getElementById(a+"AM").style.backgroundColor = "white"
}