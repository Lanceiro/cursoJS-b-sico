function gerar() {
    var N = document.getElementById('txtn');
    var tab = document.getElementById('tab');

    if (N.value.length == 0) {
        alert('Por favor, informe um número!');
    } else {
        var num = Number(N.value);
        var cont = 1;
        tab.innerHTML = "";
        tab.style.padding="10px";
        while (cont <= 10) {
            var elemento = document.createElement('option');
            elemento.text = `${num} x ${cont} = ${num * cont}`;
            cont++;
            tab.appendChild(elemento);
        }
    }
}