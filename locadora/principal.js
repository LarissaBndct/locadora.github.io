let filmes = [];

function adicionarItem() {
    const filmeInput = document.getElementById('filme');
    const filme = itemInput.value;

    const generoInput = document.getElementById('genero');
    const genero = generoInput.value;

    const classificacaoInput = document.getElementById('classificacao');
    const classificacao = classificacaoInput.value;

    const sinapseInput = document.getElementById('sinapse');
    const sinapse = sinapseInput.value;

    const trailerInput = document.getElementById('trailer');
    const trailer = trailerInput.value;


    if (filme) {
        filmes.push([filme, genero, classificacao, sinapse, trailer]);
        filmeInput.value = '';
        generoInput.value = '';
        classificacaoInput.value = '';
        sinapseInput.value = '';
        trailerInput.value = '';

        atualizarLista();
        atualizarJSON();
    }
}

function atualizarLista() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    itens.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}

function atualizarJSON() {
    const jsonOutput = document.getElementById('jsonOutput');
    jsonOutput.textContent = JSON.stringify(itens, null, 2);
}
