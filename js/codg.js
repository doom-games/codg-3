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
        descricao: 'Quem é o protagonista dos primeiros jogos da série "Assassin\'s Creed"?',
        resposta: 'Desmond Miles',
        pontos: 1,
        jogador: 'kmikzy',
        jogadorPontuado: 'kmikzy'
    },
    {
        descricao: 'Quem é o criador da série de jogos "Metal Gear"?',
        resposta: 'Hideo Kojima',
        pontos: 1,
        jogador: 'Shadow',
        jogadorPontuado: 'Shadow'
    },
    {
        descricao: 'Qual é o nome da inteligência artificial em "Halo" que guia o protagonista Master Chief?',
        resposta: 'Cortana',
        pontos: -1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Kazimas'
    },
    {
        descricao: 'Qual é o nome do personagem azul e espinhoso da Sega que compete com Mario?',
        resposta: 'Sonic the Hedgehog',
        pontos: 1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Igornorante'
    },
    {
        descricao: 'Qual é o console de vídeo game lançado pela Microsoft em 2001?',
        resposta: 'XBox',
        pontos: -1,
        jogador: 'Shadow',
        jogadorPontuado: 'Igornorante'
    },
    {
        descricao: 'Em qual jogo de vídeo game a protagonista é a exploradora Lara Croft?',
        resposta: 'Tomb Raider',
        pontos: 1,
        jogador: 'Shadow',
        jogadorPontuado: 'Shadow'
    },
    {
        descricao: 'Qual é o título do primeiro jogo de RPG de ação lançado em 1975 e considerado um precursor dos RPGs eletrônicos?',
        resposta: 'Dungeons & Dragons (ou "D&D")',
        pontos: 3,
        jogador: 'FAP',
        jogadorPontuado: 'FAP'
    },
    {
        descricao: 'Qual é o nome da protagonista feminina do jogo "Horizon Zero Dawn"?',
        resposta: 'Aloy',
        pontos: 1,
        jogador: 'FAP',
        jogadorPontuado: 'FAP'
    },
    {
        descricao: 'Qual é o nome do herói da série de jogos "The Witcher"?',
        resposta: 'Geralt of Rivia',
        pontos: 1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Igornorante'
    },
    {
        descricao: 'Qual é o console de vídeo game mais vendido de todos os tempos?',
        resposta: 'PlayStation 2',
        pontos: -1,
        jogador: 'Kazimas',
        jogadorPontuado: 'FAP'
    },
    {
        descricao: 'Qual é o nome do criador do jogo "Minecraft"?',
        resposta: 'Markus Persson (Notch)',
        pontos: 1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Igornorante'
    },
    {
        descricao: 'Qual é o jogo mais vendido de todos os tempos?',
        resposta: 'Tetris',
        pontos: 2,
        jogador: 'Brosnildo',
        jogadorPontuado: 'Brosnildo'
    },
    {
        descricao: 'Qual é o jogo clássico onde você controla um amarelo comilão que come bolinhas e fantasmas?',
        resposta: 'Pac-Man',
        pontos: 1,
        jogador: 'kmikzy',
        jogadorPontuado: 'kmikzy'
    },
    {
        descricao: 'Qual é o nome do vilão da série de jogos "Final Fantasy VII"?',
        resposta: 'Sephiroth',
        pontos: 1,
        jogador: 'kmikzy',
        jogadorPontuado: 'kmikzy'
    },
    {
        descricao: 'Qual é o nome da protagonista feminina da série de jogos "Metroid"?',
        resposta: 'Samus Aran',
        pontos: 1,
        jogador: 'Brosnildo',
        jogadorPontuado: 'Brosnildo'
    },
    {
        descricao: 'Qual é o jogo de ação-aventura da Naughty Dog lançado em 2013, estrelado por Joel e Ellie?',
        resposta: 'The Last of Us',
        pontos: 1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Kazimas'
    },
    {
        descricao: 'Qual é o título do jogo de RPG lançado em 1987 que se tornou um marco no gênero e influenciou muitos jogos subsequentes?',
        resposta: 'Final Fantasy',
        pontos: 1,
        jogador: 'FAP',
        jogadorPontuado: 'FAP'
    },
    {
        descricao: 'Qual é o título do jogo de estratégia em tempo real lançado pela Blizzard em 2004 que se tornou um fenômeno mundial?',
        resposta: 'World of Warcraft',
        pontos: 1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Kazimas'
    },
    {
        descricao: 'Qual é o nome do protagonista do jogo "Red Dead Redemption" lançado em 2010?',
        resposta: 'John Marston',
        pontos: 2,
        jogador: 'Kazimas',
        jogadorPontuado: 'Kazimas'
    },
    {
        descricao: 'Qual é o nome do personagem principal da série "The Legend of Zelda"?',
        resposta: 'Link',
        pontos: 1,
        jogador: 'kmikzy',
        jogadorPontuado: 'kmikzy'
    },
    {
        descricao: 'Qual é o nome do encanador verde que é irmão de Mario?',
        resposta: 'Luigi',
        pontos: 1,
        jogador: 'kmikzy',
        jogadorPontuado: 'kmikzy'
    },
    {
        descricao: 'Qual é o título do jogo de RPG japonês que apresenta personagens chamados Cloud e Sephiroth?',
        resposta: 'Final Fantasy VII',
        pontos: 1,
        jogador: 'kmikzy',
        jogadorPontuado: 'BioJux'
    },
    {
        descricao: 'Qual foi o primeiro console de vídeo game doméstico lançado comercialmente?',
        resposta: 'Magnavox Odyssey',
        pontos: 1,
        jogador: 'Shadow',
        jogadorPontuado: 'Shadow'
    },
    {
        descricao: 'Qual é o nome do criador da série de jogos "The Legend of Zelda" e "Super Mario"?',
        resposta: 'Shigeru Miyamoto',
        pontos: 1,
        jogador: 'FAP',
        jogadorPontuado: 'FAP'
    },
    {
        descricao: 'Qual é o título do jogo que apresenta um personagem esquelético chamado Sans e é conhecido por suas escolhas morais?',
        resposta: 'Undertale',
        pontos: 1,
        jogador: 'FAP',
        jogadorPontuado: 'FAP'
    },
    {
        descricao: 'Qual é o título do jogo de tiro em primeira pessoa que apresenta um protagonista chamado Gordon Freeman?',
        resposta: 'Half-Life',
        pontos: 1,
        jogador: 'Loucurazero',
        jogadorPontuado: 'Loucurazero'
    },
    {
        descricao: 'Qual é o nome do console portátil lançado pela Nintendo em 1989?',
        resposta: 'Game Boy',
        pontos: 1,
        jogador: 'Loucurazero',
        jogadorPontuado: 'Loucurazero'
    },
    {
        descricao: 'Qual é o nome do protagonista da série "Max Payne"?',
        resposta: 'Max Payne',
        pontos: -1,
        jogador: 'Kazimas',
        jogadorPontuado: 'kmikzy'
    },
    {
        descricao: 'Qual é o título do jogo de RPG de ação ambientado em um mundo chamado Tamriel?',
        resposta: 'The Elder Scrolls V: Skyrim',
        pontos: -1,
        jogador: 'FAP',
        jogadorPontuado: 'kmikzy'
    },
    {
        descricao: 'Qual é o nome do console de videogame lançado pela Sega em 1998?',
        resposta: 'Dreamcast',
        pontos: -1,
        jogador: 'Kazimas',
        jogadorPontuado: 'FAP'
    },
    {
        descricao: 'Qual é o título do jogo em que você assume o papel do protagonista chamado "Master Chief"?',
        resposta: 'Halo: Combat Evolved',
        pontos: -1,
        jogador: 'Kazimas',
        jogadorPontuado: 'kmikzy'
    },
    {
        descricao: 'Qual é o nome do primeiro console de videogame produzido pela Sony?',
        resposta: 'PlayStation',
        pontos: 1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Kazimas'
    },
    {
        descricao: 'Qual é o título do jogo de aventura que se passa na cidade fictícia de Raccoon City?',
        resposta: 'Resident Evil 2',
        pontos: 1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Kazimas'
    },
    {
        descricao: 'Qual é o nome do protagonista do jogo "Final Fantasy VII"?',
        resposta: 'Cloud Strife',
        pontos: 1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Kazimas'
    },
    {
        descricao: 'Qual é o nome do vilão da série "Kingdom Hearts" que é o líder da Organização XIII?',
        resposta: 'Xemnas',
        pontos: 1,
        jogador: 'FAP',
        jogadorPontuado: 'FAP'
    },
    {
        descricao: 'Qual é o nome do jogo lançado em 1993 que é considerado um dos precursores dos jogos de tiro em primeira pessoa?',
        resposta: 'Doom',
        pontos: -1,
        jogador: 'Kazimas',
        jogadorPontuado: 'FAP'
    },
    {
        descricao: 'Qual é o console de videogame lançado pela Nintendo em 2017?',
        resposta: 'Nintendo Switch',
        pontos: +1,
        jogador: 'Loucurazero',
        jogadorPontuado: 'kmikzy'
    },
    {
        descricao: 'Qual é o nome do jogo de plataforma em que os jogadores controlam um lobo chamado Amaterasu?',
        resposta: 'Okami',
        pontos: +1,
        jogador: 'FAP',
        jogadorPontuado: 'FAP'
    },
    {
        descricao: 'Qual foi o primeiro console de videogame fabricado pela Nintendo?',
        resposta: 'Color TV-Game',
        pontos: -2,
        jogador: 'Kazimas',
        jogadorPontuado: 'FAP'
    },
    {
        descricao: 'Qual é o título do jogo de tiro em primeira pessoa que se passa em um mundo pós-apocalíptico e apresenta a Vault Boy como um ícone reconhecível?',
        resposta: 'Fallout',
        pontos: +1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Igornorante'
    },
    {
        descricao: 'Qual é a trilha sonora icônica composta por Nobuo Uematsu para a série "Final Fantasy"?',
        resposta: 'One-Winged Angel',
        pontos: -2,
        jogador: 'kmikzy',
        jogadorPontuado: 'Kazimas'
    },
    {
        descricao: 'Qual foi o primeiro jogo eletrônico a apresentar um protagonista feminino, lançado em 1982?',
        resposta: 'Ms. Pac-Man',
        pontos: +1,
        jogador: 'kmikzy',
        jogadorPontuado: 'Loucurazero'
    },
    {
        descricao: 'Qual é o nome da empresa japonesa que desenvolveu a série "Final Fantasy"?',
        resposta: 'Square Enix (anteriormente Square)',
        pontos: +1,
        jogador: 'kmikzy',
        jogadorPontuado: 'kmikzy'
    },
    {
        descricao: 'Qual é o nome japonês do Super Nintendo?',
        resposta: 'Super Famicom',
        pontos: +1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Kazimas'
    },
    {
        descricao: 'Qual é o título do jogo de corrida de karts que apresenta personagens da Nintendo?',
        resposta: 'Mario Kart',
        pontos: +1,
        jogador: 'FAP',
        jogadorPontuado: 'FAP'
    },
    {
        descricao: 'Qual é o título do jogo de ação e aventura em que os jogadores controlam um guerreiro espartano chamado Kratos?',
        resposta: 'God of War',
        pontos: +1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Kazimas'
    },
    {
        descricao: 'Qual foi o primeiro jogo de RPG a ser lançado para o NES (Nintendo Entertainment System)?',
        resposta: 'Dragon Quest (conhecido como "Dragon Warrior" nos EUA)',
        pontos: +1,
        jogador: 'kmikzy',
        jogadorPontuado: 'kmikzy'
    },
    {
        descricao: 'Qual foi o nome original do Sega Mega Drive no Japão?',
        resposta: 'Sega Genesis',
        pontos: +1,
        jogador: 'FAP',
        jogadorPontuado: 'FAP'
    },
    {
        descricao: 'Qual é o nome do protagonista do jogo "Castlevania: Symphony of the Night" para o PS1?',
        resposta: 'Alucard',
        pontos: +1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Kazimas'
    },
    {
        descricao: 'Qual foi o primeiro jogo eletrônico comercialmente bem-sucedido, lançado em 1972?',
        resposta: 'Pong',
        pontos: +1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Kazimas'
    },
    {
        descricao: 'Qual é o título do jogo de RPG que é frequentemente considerado um dos melhores jogos de todos os tempos, lançado para o SNES em 1994?',
        resposta: 'Chrono Trigger',
        pontos: -1,
        jogador: 'Kazimas',
        jogadorPontuado: 'kmikzy'
    },
    {
        descricao: 'Qual é o nome do vilão principal da série "Streets of Rage"?',
        resposta: 'Mr. X',
        pontos: +1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Loucurazero'
    },
    {
        descricao: 'Qual é o nome do jogo em que os jogadores controlam um dinossauro chamado Yoshi?',
        resposta: 'Yoshi\'s Story / Yoshi\'s Island',
        pontos: +1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Kazimas'
    },
    {
        descricao: 'Qual é o título do jogo de RPG lançado para o PS1 que apresenta uma protagonista chamada Aya Brea e elementos de horror?',
        resposta: 'Parasite Eve',
        pontos: -1,
        jogador: 'Kazimas',
        jogadorPontuado: 'kmikzy'
    },
    {
        descricao: 'Qual é o nome do herói que enfrenta zumbis no jogo de sobrevivência "Resident Evil" para o PS1?',
        resposta: 'Chris Redfield',
        pontos: +1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Igornorante'
    },
    {
        descricao: 'Qual é o título do jogo de estratégia baseado em turnos que inclui personagens da Disney e da Square Enix?',
        resposta: 'Kingdom Hearts',
        pontos: +1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Kazimas'
    },
    {
        descricao: 'Qual é o nome do jogo de plataforma estrelado por uma minhoca?',
        resposta: 'Earthworm Jim',
        pontos: -1,
        jogador: 'Kazimas',
        jogadorPontuado: 'FAP'
    },
    {
        descricao: 'Qual é o título do jogo de ação-aventura em que os jogadores controlam um super-herói chamado Alex Mercer?',
        resposta: 'Prototype',
        pontos: +1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Dida'
    },
    {
        descricao: 'Qual é o título do jogo de ação e aventura em que os jogadores controlam um assassino geneticamente modificado chamado Agent 47?',
        resposta: 'Hitman',
        pontos: +1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Kazimas'
    },
    {
        descricao: 'Qual é o título do jogo de ação em que os jogadores controlam um jovem chamado Wander em uma jornada para derrotar colossos gigantes?',
        resposta: 'Shadow of the Colossus',
        pontos: -1,
        jogador: 'FAP',
        jogadorPontuado: 'Camelão do deserto'
    },
    {
        descricao: 'Qual é o título do jogo de ação-aventura que segue o "estilo quadrinhos"?',
        resposta: 'Comix Zone',
        pontos: +1,
        jogador: 'Kazimas',
        jogadorPontuado: 'Dida'
    },
    {
        descricao: 'Qual é o nome do dispositivo de detecção de movimentos lançado pela Microsoft para o Xbox 360?',
        resposta: 'Kinect',
        pontos: +1,
        jogador: 'FAP',
        jogadorPontuado: 'FAP'
    },
    {
        descricao: 'Qual é o nome do serviço online da Microsoft que permite jogar multiplayer no Xbox 360?',
        resposta: 'Xbox Live / Game Pass',
        pontos: -1,
        jogador: 'Kazimas',
        jogadorPontuado: 'FAP'
    },
    {
        descricao: 'Qual é o nome do robô que se tornou uma figura icônica no jogo "Ratchet & Clank"?',
        resposta: 'Clank',
        pontos: +1,
        jogador: 'Kazimas',
        jogadorPontuado: 'FAP'
    },
    {
        descricao: 'Qual é o nome do famoso jogo de construção de cidades em que os jogadores devem gerenciar recursos e população?',
        resposta: 'SimCity',
        pontos: +1,
        jogador: 'Shadow',
        jogadorPontuado: 'Shadow'
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
    console.log('matadoresOrdenados', matadoresOrdenados)
    let matadores = matadoresOrdenados.filter((a) => a.pontosMatador == matadoresOrdenados[0].pontosMatador);
    let curadoresOrdenados = jogadores.sort((a,b) => b.pontosCurador - a.pontosCurador);
    console.log('curadoresOrdenados', curadoresOrdenados)
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
  