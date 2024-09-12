
let personagem = {
    jogador: 'Jogador 1',
    nome_personagem: 'Cavaleiro de Astora',
    raca: 'Humano',
    genero: 'M',
    classe: 'Cavaleiro',
    vigor: 14,
    conhecimento: 10,
    fortitude: 10,
    forca: 16,
    destreza: 12,
    inteligencia: 9,
    fe: 12,
    sorte: 7
};


document.getElementById('btn-get').addEventListener('click', function() {
    const caixaGet = document.querySelector('#caixa-get p');
    caixaGet.innerHTML = ''; 

    caixaGet.innerHTML += `<strong>Jogador:</strong> ${personagem.jogador} <br>`;
    caixaGet.innerHTML += `<strong>Nome do Personagem:</strong> ${personagem.nome_personagem} <br>`;
    caixaGet.innerHTML += `<strong>Raça:</strong> ${personagem.raca} <br>`;
    caixaGet.innerHTML += `<strong>Gênero:</strong> ${personagem.genero} <br>`;
    caixaGet.innerHTML += `<strong>Classe:</strong> ${personagem.classe} <br>`;
    caixaGet.innerHTML += `<strong>Vigor:</strong> ${personagem.vigor} <br>`;
    caixaGet.innerHTML += `<strong>Conhecimento:</strong> ${personagem.conhecimento} <br>`;
    caixaGet.innerHTML += `<strong>Fortitude:</strong> ${personagem.fortitude} <br>`;
    caixaGet.innerHTML += `<strong>Força:</strong> ${personagem.forca} <br>`;
    caixaGet.innerHTML += `<strong>Destreza:</strong> ${personagem.destreza} <br>`;
    caixaGet.innerHTML += `<strong>Inteligência:</strong> ${personagem.inteligencia} <br>`;
    caixaGet.innerHTML += `<strong>Fé:</strong> ${personagem.fe} <br>`;
    caixaGet.innerHTML += `<strong>Sorte:</strong> ${personagem.sorte} <br>`;
});

document.getElementById('btn-put').addEventListener('click', function() {
    const novoNome = document.getElementById('novo-nome').value; 

    if (novoNome !== '') {
        personagem.nome_personagem = novoNome;
        alert('Nome do personagem atualizado para: ' + novoNome);
    } else {
        alert('Por favor, insira um nome válido.');
    }

    document.getElementById('novo-nome').value = '';
});
