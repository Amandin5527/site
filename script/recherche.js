function hlphggspses() {
    alert("Notre site ne comporte pas tous les niveaux de Geometry Dash, cependant le Wiki dispose d'un nombre bien plus grand de niveaux.")
    var p = confirm("Souhaitez-vous être redirigé vers le Wiki ?")
    if(p==true) {
        document.location.href = "https://geometry-dash.fandom.com/wiki/Geometry_Dash_Wiki"
    }
    else {
        alert("Vous n'allez pas être redirigé.")
    }
}