function verificar() {
    var ano = Number(document.getElementById("txtano").value);
    var data = new Date();
    var anoAtual = data.getFullYear();
    var res = document.querySelector("div#res");
    if (ano > anoAtual || String(ano).length < 4) {
        alert("Ano inválido!")
    } else {
        var idade = anoAtual - ano;
        var sexo = document.getElementsByName("radsex");
        var genero = "";
        var img = document.createElement('img');
        img.setAttribute('id', 'img');
        img.style.width = "100px";
        img.style.height = "100px";
        if (sexo[0].checked) {
            genero = "Homem"
            img.setAttribute('src', 'img/mas.png');
        } else {
            genero = "Mulher"
            img.setAttribute('src', 'img/fem.png');
        }
        res.innerHTML = `Detectamos ${genero} e ${idade} anos!`;
        res.innerHTML += '<br>';
        res.appendChild(img);
    }


}