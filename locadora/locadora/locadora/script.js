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
    }
}

function atualizarLista() {
    const tabelaFilme = document.getElementById('tabelaFilme');
    tabelaFilme.innerHTML = '';
    filmes.forEach((filme, index) => {
        const tr = document.createElement('tr');
        tr.Content = item;
        tabelaFilme.appendChild(tr);
    });
}
