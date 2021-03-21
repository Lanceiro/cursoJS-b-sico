function contar() {
    
    var inicio = document.getElementById('inicio');
    var fim = document.querySelector('input#fim');
    var passo = document.getElementById('passo');
    var resp = document.querySelector('div#res');
    var cont = 0;
    
    if (passo.value.length == 0 || inicio.value.length == 0 || fim.value.length == 0) {
        cont ++
        alert('ERROR: Dado(s) errado(s).')
    } if (cont == 0) {
        resp.innerHTML = "Contando: "
        if (Number(fim.value) > Number(inicio.value)) {
            for (var i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) {
                resp.innerHTML += i + "👉";
            }
        } else {
            for (var i = Number(inicio.value); i >= Number(fim.value); i -= Number(passo.value)) {
                resp.innerHTML += i + "👉";
            }
        }
    }
    resp.innerHTML += "🏁";
}