function tabuada() {

    var num = document.getElementById("txtnum");
    var tab = document.getElementById('seltab');
    
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value);
        var cont = 1;
        tab.innerHTML = "";
        while (cont <= 10) {
            var elemento = document.createElement('option');
            elemento.text = `${n} x ${cont} = ${n*cont}`;
            tab.appendChild(elemento);
            cont++;
        }
    }
}