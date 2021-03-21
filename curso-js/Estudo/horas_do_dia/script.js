function carregar () {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`;

    if (hora >= 0 && hora < 12) {
        img.src = "img/manha.jpg"
        document.body.style.background = "#C5DCE4";
    } else if (hora >= 12 && hora < 18) {
        img.src = "img/tarde.jpg"
        document.body.style.background = "#BD7547";
    } else {
        img.src = "img/noite.jpg"
        document.body.style.background = "#1B628E";
    }
}