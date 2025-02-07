let filmes = [];

function adicionarItem() {
    const filmeInput = document.getElementById('filme');
    const filme = filmeInput.value;

    const generoInput = document.getElementById('genero');
    const genero = generoInput.value;

    const classificacaoInput = document.getElementById('classificacao');
    const classificacao = classificacaoInput.value;

    const sinopseInput = document.getElementById('sinopse');
    const sinopse = sinopseInput.value;

    const trailerInput = document.getElementById('trailer');
    const trailer = trailerInput.value;

    if (filme && genero && classificacao && sinopse && trailer) {
        filmes.push({ filme, genero, classificacao, sinopse, trailer });
        filmeInput.value = '';
        generoInput.value = '';
        classificacaoInput.value = '';
        sinopseInput.value = '';
        trailerInput.value = '';

        atualizarLista();
    }
}

function atualizarLista() {
    const tabelaFilme = document.querySelector('#tabelaFilme tbody');
    tabelaFilme.innerHTML = '';
    filmes.forEach((filme, index) => {
        const tr = document.createElement('tr');
        
        const tdFilme = document.createElement('td');
        tdFilme.textContent = filme.filme;
        tr.appendChild(tdFilme);
        
        const tdGenero = document.createElement('td');
        tdGenero.textContent = filme.genero;
        tr.appendChild(tdGenero);
        
        const tdClassificacao = document.createElement('td');
        tdClassificacao.textContent = filme.classificacao;
        tr.appendChild(tdClassificacao);
        
        const tdsinopse = document.createElement('td');
        tdsinopse.textContent = filme.sinopse;
        tr.appendChild(tdsinopse);
        
        const tdTrailer = document.createElement('td');
        const link = document.createElement('a');
        link.href = filme.trailer;
        link.textContent = "Ver Trailer";
        link.target = "_blank";
        tdTrailer.appendChild(link);
        tr.appendChild(tdTrailer);
        
        tabelaFilme.appendChild(tr);
    });
}
