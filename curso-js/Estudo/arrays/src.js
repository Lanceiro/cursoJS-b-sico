var array = [];
function adicionar() {
    var resp = document.getElementById('resp');
    var num = document.querySelector('input#txtnum');
    var sel = document.getElementById('seln');
    resp.innerHTML = "";
    
    if (num.value.length == 0 || Number(num.value) > 100 || Number(num.value) < 1) {
        alert('[ERROR]: Digite um número conforme pedido!');
    } else {
        var N = Number(num.value);
        if (array.indexOf(N) != -1) {
            alert('[ERROR] Número já cadastrado!')
        } else {
            array.push(N);
            var elemento = document.createElement('option');
            elemento.text = `Valor ${N} adicionado.`;
            sel.appendChild(elemento);
        }
    }
}


function finalizar() {
    var resp = document.getElementById('resp');
    var media = 0;
    var max = array.reduce(function(a, b) {
        return Math.max(a, b);
    });
    var min = array.reduce(function(a, b) {
        return Math.min(a, b);
    });
    var cadastrados = array.length;
    resp.innerHTML = `<p>Ao todo, temos ${cadastrados} números cadastrados.</p>`;
    resp.innerHTML += `<p>O maior valor informado foi ${max}.</p>`;
    resp.innerHTML += `<p>O menor valor informado foi ${min}.</p>`;

    for (let pos in array) {
        media += array[pos];
    }
    resp.innerHTML += `<p> A soma dos valores é: ${media}.</p>`;
    resp.innerHTML += `<p>A média dos valores digitados é: ${media/array.length}.</p>`;
}

function remover() {
    
    var resp = document.getElementById('resp');
    var sel = document.getElementById('seln');
    var num = Number(document.getElementById('txtrem').value);
    var pos = array.indexOf(num);
    if (array.indexOf(num) != -1) {
        array.splice(pos, 1);
        var elemento = document.createElement('option');
        elemento.text = `Valor ${num} foi removido.`;
        sel.appendChild(elemento);
    } else if (array.indexOf(num) == -1) {
        alert('Valor informado não existe no cadastro.');
    }
    if (array.length < 1) {
        resp.innerHTML = `<p>No momento, sem números cadastrados!</p>`;
    }
}