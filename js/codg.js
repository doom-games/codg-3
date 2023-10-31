let jogadores = [
    { nome: 'Maurílio Fernandes', apelido: 'kmikzy', foto: 'hrone.jpeg', brasao: 'Jogador', respostas: 0, pontos: 0, pontosMatador: 0, pontosCurador: 0},
    // { nome: 'Wellington Moreira', apelido: 'Dorinha', foto: 'dorinha.jpg', brasao: 'Jogador', respostas: 0, pontos: 0, pontosMatador: 0, pontosCurador: 0},
    { nome: 'Marcos Moreira', apelido: 'Shadow', foto: 'marquinhos.jpeg', brasao: 'Jogador', respostas: 0, pontos: 0, pontosMatador: 0, pontosCurador: 0},
    { nome: 'Júnio Teles', apelido: 'BioJux', foto: 'junio.jpeg', brasao: 'Jogador', respostas: 0, pontos: 0, pontosMatador: 0, pontosCurador: 0},
    { nome: 'Camilo Miranda', apelido: 'Kazimas', foto: 'camilo.jpeg', brasao: 'Jogador', respostas: 0, pontos: 0, pontosMatador: 0, pontosCurador: 0},
    { nome: 'Renato J. Santos', apelido: 'Camelão do deserto', foto: 'renato.jpeg', brasao: 'Jogador', respostas: 0, pontos: 0, pontosMatador: 0, pontosCurador: 0},
    { nome: 'Ambrósio Pereira', apelido: 'Brosnildo', foto: 'ambrosio.jpeg', brasao: 'Jogador', respostas: 0, pontos: 0, pontosMatador: 0, pontosCurador: 0},
    { nome: 'Emerson Teixeira', apelido: 'Dida', foto: 'dida.jpeg', brasao: 'Jogador', respostas: 0, pontos: 0, pontosMatador: 0, pontosCurador: 0},
    { nome: 'Victor Andrade Brito Silva', apelido: 'Loucurazero', foto: 'vitao.jpeg', brasao: 'Jogador', respostas: 0, pontos: 0, pontosMatador: 0, pontosCurador: 0},
    { nome: 'Fúlvio Alves', apelido: 'FAP', foto: 'fap.jpeg', brasao: 'Jogador', respostas: 0, pontos: 0, pontosMatador: 0, pontosCurador: 0},
    { nome: 'Igor Oliveira Ribeiro', apelido: 'Igornorante', foto: 'igor.jpeg', brasao: 'Jogador', respostas: 0, pontos: 0, pontosMatador: 0, pontosCurador: 0},
];

let ranking = [];

let perguntas = [
    {
        descricao: 'Qual empresa é responsável pelo desenvolvimento do jogo "Fortnite"?',
        resposta: 'Epic Games',
        pontos: 1,
        jogador: 'kmikzy',
        jogadorPontuado: 'kmikzy'
    },
    {
        descricao: 'Qual é o nome do protagonista da série "Metal Gear Solid"?',
        resposta: 'Solid Snake',
        pontos: 1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Kazimas'
    },
    {
        descricao: 'Qual é o nome do primeiro console de vídeo game doméstico lançado pela Nintendo?',
        resposta: 'Nintendo Entertainment System (NES)',
        pontos: 1,
        jogador: 'kmikzy',
        jogadorPontuado: 'kmikzy'
    },
    {
        descricao: 'Quem é o protagonista dos primeiros jogos da série "Assassin\'s Creed"',
        resposta: 'Desmond Miles',
        pontos: 1,
        jogador: 'kmikzy',
        jogadorPontuado: 'kmikzy'
    }
];

/* ÚLTIMAS PERGUNTAS */

let ulUltimasPerguntas = document.getElementById('ul-ultimas-perguntas');
if (ulUltimasPerguntas) {
    // let ultimas = [...cortarArray(perguntas.slice().reverse(), 10)];
    // if (ultimas) {
        perguntas.reverse().slice(0, 10).forEach(function (pergunta) {
            if (pergunta.descricao !== undefined) {
                let badge = badgePergunta(pergunta);
                let liPergunta = document.createElement("li");
                liPergunta.classList.add('d-block');
                liPergunta.innerHTML = `
                    <div class="form-check w-100">
                    <label class="form-check-label">
                        ${pergunta.descricao} <i class="input-helper rounded"></i>
                    </label>
                    <div class="d-flex mt-2">
                    <div class="ps-4 text-small me-3">${pergunta.jogador}</div>
                    <div class="badge ${badge} me-3">${pergunta.pontos > 0 ? '+': ''} ${pergunta.pontos} &nbsp; ${pergunta.jogadorPontuado}</div>
                    </div>
                </div>
                `;
                ulUltimasPerguntas.appendChild(liPergunta);
            }
        });
    // }
}

/* PONTUAÇÃO */
let tbPontuacao = document.getElementById('tb-pontuacao');
let tbodyPontuacao = document.createElement("tbody");
if (tbPontuacao) {
    perguntas.forEach(function (pergunta, index) {
        let tr = document.createElement("tr");

        let tdPergunta = document.createElement("td");
        tdPergunta.style='width: 65%; padding-right: 3px; white-space: unset;';
        tdPergunta.innerHTML = `
                                <span><strong>${index+1})</strong> ${pergunta.descricao}</span>
                                <br/>
                                <span><strong>Resposta:</strong> ${pergunta.resposta}</span>
        `;
        tr.appendChild(tdPergunta);
        
        let tdJogador = document.createElement("td");
        tdJogador.innerHTML = `${pergunta.jogador}`;
        tr.appendChild(tdJogador);

        let tdPonto = document.createElement("td");
        let badge = badgePergunta(pergunta);
        tdPonto.innerHTML = `<div class="badge ${badge} me-3">${pergunta.pontos > 0 ? '+': ''} ${pergunta.pontos} &nbsp; ${pergunta.jogadorPontuado}</div>`;
        tr.appendChild(tdPonto);

        tbodyPontuacao.appendChild(tr);
    });
    tbPontuacao.appendChild(tbodyPontuacao);
}

/* RANKING */
let tbRanking = document.getElementById('tb-ranking');
let tbodyRanking = document.createElement("tbody");
if (tbRanking) {
    calcularRanking();
    console.log(jogadores)
    ranking = jogadores.sort((a,b) => b.pontos - a.pontos);
    ranking.forEach(function (jogador, index) {
        let tr = document.createElement("tr");

        let tdPosicao = document.createElement("td");
        tdPosicao.innerHTML = `
                                <div class="form-check form-check-flat mt-0">
                                ${index+1}º
                                </div>
        `;
        tr.appendChild(tdPosicao);
        
        let tdJogador = document.createElement("td");
        tdJogador.innerHTML = `
                                <div class="d-flex ">
                                    <img src="images/jogadores/${jogador.foto}" alt="">
                                    <div>
                                        <h6>${jogador.nome}</h6>
                                        <p>${jogador.apelido}</p>
                                    </div>
                                </div>
        `;
        tr.appendChild(tdJogador);

        let tdPontos = document.createElement("td");
        tdPontos.innerHTML = `
                        <h6>${jogador.pontos}</h6>
        `;
        tr.appendChild(tdPontos);

        let tdProgresso = document.createElement("td");
        let porcentagem = Math.round(jogador.respostas > 0 ? jogador.respostas * 100 / perguntas.length : 0);
        console.log(porcentagem)
        tdProgresso.innerHTML = `
                        <div>
                            <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                            <p class="text-success">${porcentagem}%</p>
                            <p>${jogador.respostas}/${perguntas.length}</p>
                            </div>
                            <div class="progress progress-md">
                            <div class="progress-bar bg-success" role="progressbar" style="width: ${porcentagem}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
        `;
        tr.appendChild(tdProgresso);

        let tdBrasao = document.createElement("td");
        let badge = badgeJogador(jogador);
        tdBrasao.innerHTML = `<div class="badge ${badge}">${jogador.brasao}</div>`;
        tr.appendChild(tdBrasao);

        tbodyRanking.appendChild(tr);
    });
    tbRanking.appendChild(tbodyRanking);
}

// LIDERANÇA
let divLideranca = document.getElementById('div-lideranca');
divLideranca.innerHTML = `
                            <div class="d-sm-flex justify-content-between align-items-start">
                                <div style="width:100%; text-align:center;">
                                <h4 class="card-title card-title-dash">1º lugar</h4>
                                <p class="card-subtitle card-subtitle-dash">${ranking[0].nome} (${ranking[0].apelido})</p>
                                </div>
                            </div>
                            <div class="chartjs-bar-wrapper mt-3" style="text-align:center;">
                                <img src="images/jogadores/${ranking[0].foto}" style="height: auto; max-height:480px; max-width: 100%;"/>
                            </div>
                        `;

function badgeJogador(jogador) {
    if (jogador.brasao == 'Matador') {
        return 'badge-opacity-danger';
    } else if (jogador.brasao == 'Curador') {
        return 'badge-opacity-warning';
    } else {
        return 'badge-opacity-success';
    }
}

function badgePergunta(pergunta) {
    if (pergunta.pontos < 0) {
        return 'badge-opacity-danger';
    } else if (pergunta.jogador == pergunta.jogadorPontuado) {
        return 'badge-opacity-success';
    } else {
        return 'badge-opacity-warning';
    }
}

function cortarArray(arr, n) {
    const size = Math.ceil(arr.length / n);
    return Array.from({ length: n }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
}

function calcularRanking() {
    perguntas.forEach(function (pergunta){
        jogadores.forEach(function (jogador){
            if (jogador.apelido == pergunta.jogador) {
                jogador.respostas = jogador.respostas + 1;
                if (jogador.apelido != pergunta.jogadorPontuado) {
                    if (pergunta.pontos > 0) {
                        jogador.pontosCurador = jogador.pontosCurador + 1;
                    } else {
                        jogador.pontosMatador = jogador.pontosMatador + 1;
                    }
                }
            }
            if (jogador.apelido == pergunta.jogadorPontuado) {
                jogador.pontos = jogador.pontos + pergunta.pontos;
            }

        });
    });
    let matadoresOrdenados = jogadores.sort((a,b) => b.pontosMatador - a.pontosMatador);
    let matadores = matadoresOrdenados.filter((a) => a.pontosMatador == matadoresOrdenados[0].pontosMatador);
    let curadoresOrdenados = jogadores.sort((a,b) => b.pontosCurador - a.pontosCurador);
    let curadores = curadoresOrdenados.filter((a) => a.pontosCurador == curadoresOrdenados[0].pontosCurador);

    jogadores.forEach((jogador) => {
        matadores.forEach((matador) => {
            if(matador.apelido == jogador.apelido && jogador.pontosMatador > 0 && jogador.pontosMatador >= jogador.pontosCurador) {
                jogador.brasao = 'Matador';
            }
        });
        curadores.forEach((curador) => {
            if(curador.apelido == jogador.apelido && jogador.pontosCurador > 0 && jogador.pontosCurador > jogador.pontosMatador) {
                jogador.brasao = 'Curador';
            }
        });
    });

}
  