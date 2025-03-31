shown = true

function hideimage(){
    if(shown==true) {
        shown=false
        document.getElementById("imgd").style.display = "none";
        document.getElementById("afficher_les_images").innerHTML = "Afficher les images"
    }else{
        shown = true
        document.getElementById("imgd").style.display = "block";
        document.getElementById("afficher_les_images").innerHTML = "Masquer les images"
    }
}

function monte(){
    document.getElementById("titre").style.animationPlayState = "running"
    document.getElementById("faire-monter").style.animationPlayState = "running"
    document.getElementById("toutelapage").style.animationPlayState = "running"
}