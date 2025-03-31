likes = {
    "l1":9,
    "d1":69420,
    "l2":602000000000000000000000,
    "d2":1,
    "l3":2,
    "d3":0,
    "l4":7,
    "d4":198,
    "l5":1853211,
    "d5":2,
    "l6":56,
    "d6":0
}

function like(id){
    document.getElementById(id).innerHTML = likes[id]+1 + " j'aime"
    document.getElementById(id).style.backgroundColor = "blue"
}
function dislike(id){
    document.getElementById(id).innerHTML = likes[id]+1 + " je n'aime pas"
    document.getElementById(id).style.backgroundColor = "red"
}


function submit(a) {
    document.getElementById("reponsep"+a).style.display = "none"
    document.getElementById("rep"+a).innerHTML = document.getElementById("sub"+a).value
    document.getElementById("repp"+a).style.display = "block"
}