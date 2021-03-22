function notas() {
    let name = prompt('Qual o nome do aluno?');
    let n1 = prompt(`Primeira nota de ${name}:`)
    let n2 = prompt(`Segunda nota de ${name}:`)
    let resp = document.querySelector('div#resp');
    resp.innerHTML = "";
    let media = (Number(n1) + Number(n2)) / 2;
    
    let h1 = document.createElement('h1');
    let txth1 = document.createTextNode(`Analisando a situação de ${name}`);
    
    let p1 = document.createElement('p');
    let txtp1 = document.createTextNode(`Com as notas ${n1} e ${n2}, a média é ${media}`);

    let situacao = "";
    let sit = document.createElement('p');
    
    if (media > 6) {
        situacao = "APROVADO";
        let txt = document.createTextNode(`Com ${media} acima de 6, o aluno está ${situacao}.`);
        sit.appendChild(txt);
    } else if (media >= 3 && media < 6) {
        situacao = "RECUPERAÇÃO";
        let txt = document.createTextNode(`Com ${media} entre 3 e 6, o aluno está em ${situacao}.`);
        sit.appendChild(txt);
    } else {
        situacao = "REPROVADO";
        let txt = document.createTextNode(`Com ${media} abaixo de 3, o aluno está ${situacao}.`);
        sit.appendChild(txt);
    }
    
    h1.appendChild(txth1);
    p1.appendChild(txtp1);
    resp.appendChild(h1);
    resp.appendChild(p1);
    resp.appendChild(sit);

}