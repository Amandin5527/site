L1=["../site.html","https://discord.com/invite/geometrydash","https://youtube.com/@RobTopGames","https://store.steampowered.com/app/322170","trucEnPlus/ouvre_pas.mp4","site.html","../trucEnPlus/ouvre_pas.mp4"];function site(a) {document.location.href=L1[a]}
nivx = ["avernus","acheron","silent clubstep","the nightmare","death moon","decode","tidal wave","glowy","freedom dive"]
niveaux = {
    "acheron":"acheron",
    "avernus":"avernus",
    "silent clubstep":"silent_clubstep",
    "the nightmare":"the_nightmare",
    "death moon":"death_moon",
    "decode":"decode",
    "tidal wave":"tidal_wave",
    "glowy":"glowy",
    "freedom dive":"freedom_dive"
}


function bon_ok(ab) {
document.location.href = ab
}

function icone(a) {
	document.location.href = "niveaux/"+a+".html"
}


function recherche(){
    var days = document.getElementsByClassName('niveau'), i;
for (var i = 0; i < days.length; i++) {
  days[i].style.display = 'none';
}
var text = document.getElementById("cherchnivx").value.toLowerCase()
    console.log(text)

    for (var i = 0;i <nivx.length; i++) {
        if (nivx[i].includes(text)) {
            document.getElementById(niveaux[nivx[i]]).style.display = "block"
        }
    }

}

function scrollup() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      alert("Vous n'avez pas trouvé un niveau ? Utilisez la fonction de recherche de niveaux pour trouver ce que vous voulez.")
}