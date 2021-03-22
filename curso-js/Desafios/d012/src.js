function verificar() {
    let antes = prompt('Qual era o preço anterior do produto?');
    let atual = prompt('Qual é o preço atual do produto?');
    let diferenca = Number(antes) - Number(atual);

    let resp = document.querySelector('div#resp');
    resp.innerHTML = "";

    let h1 = document.createElement('h1');
    let txth1 = document.createTextNode('Analisando os valores informados');
    h1.appendChild(txth1);

    let p1 = document.createElement('p');
    let txtp1 = document.createTextNode(`O produto custava R$ ${antes} e agora custa R$ ${atual}.`);

    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    if (diferenca < 0) {
        let txtp2 = document.createTextNode(`Hoje o produto está mais caro.`);
        let txtp3 = document.createTextNode(`O preço aumento R$ ${diferenca * -1} em relação ao anterior.`)
        p2.appendChild(txtp2);
        p3.appendChild(txtp3);
    } else if (diferenca > 0) {
        let txtp2 = document.createTextNode(`Hoje o produto está mais barato.`);
        let txtp3 = document.createTextNode(`O preço caiu R$ ${diferenca} em relação ao anterior.`)
        p2.appendChild(txtp2);
        p3.appendChild(txtp3);
    } else {
        let txtp2 = document.createTextNode(`Produto com o mesmo preço de antes.`);
        p2.appendChild(txtp2);
    }

    h1.appendChild(txth1);
    p1.appendChild(txtp1);

    resp.appendChild(h1);
    resp.appendChild(p1);
    resp.appendChild(p2);
    resp.appendChild(p3);
}