let infoProjtos = [
    {
        "imgSrc": "../img/section-projetos/lacoos.svg",
        "alt": "Logo do projeto Laçoos",
        "title": "Laçoos",
        "deployLink": "",
        "repoLink": "https://github.com/FilipeGabrielRocha/projeto-lacoos",
        "btnDeployDisabled": true,
        "btnRepoDisabled": false
    },
    {
        "imgSrc": "../img/section-projetos/pokedex-lib.svg",
        "alt": "Uma foto do projeto pokedex lib",
        "title": "Pokedex Lib",
        "deployLink": "https://filipegabrielrocha.github.io/projeto-pokedex-api/",
        "repoLink": "https://github.com/FilipeGabrielRocha/projeto-pokedex-api",
        "btnDeployDisabled": false,
        "btnRepoDisabled": false
    },
    {
        "imgSrc": "../img/section-projetos/gerenciador-de-projetos.svg",
        "alt": "Logo do projeto Gerenciador de Projetos",
        "title": "Gerenciador de Projetos",
        "deployLink": "",
        "repoLink": "https://github.com/FilipeGabrielRocha/planejador-projetos",
        "btnDeployDisabled": true,
        "btnRepoDisabled": false
    },
    {
        "imgSrc": "../img/section-projetos/cinemalib.svg",
        "alt": "Logo do projeto CinemaLib",
        "title": "CinemaLib",
        "deployLink": "",
        "repoLink": "https://github.com/FilipeGabrielRocha/projetos-filmes",
        "btnDeployDisabled": true,
        "btnRepoDisabled": false
    },
    {
        "imgSrc": "../img/section-projetos/pedidos-hamburguer.svg",
        "alt": "Logo do projeto Pedidos de Hamburguer",
        "title": "Pedidos de Hamburguer",
        "deployLink": "",
        "repoLink": "https://github.com/FilipeGabrielRocha/pedidos-hamburguer",
        "btnDeployDisabled": true,
        "btnRepoDisabled": false
    },
    {
        "imgSrc": "../img/section-projetos/github-api.svg",
        "alt": "Logo do projeto GitHub API",
        "title": "GitHub API",
        "deployLink": "https://filipegabrielrocha.github.io/github-api/",
        "repoLink": "https://github.com/FilipeGabrielRocha/github-api",
        "btnDeployDisabled": false,
        "btnRepoDisabled": false
    },
    {
        "imgSrc": "../img/section-projetos/previsao-tempo.svg",
        "alt": "Logo do projeto Previsão do Tempo",
        "title": "Previsão do Tempo",
        "deployLink": "https://previsaodotempoagora.netlify.app",
        "repoLink": "https://github.com/FilipeGabrielRocha/previsao-tempo",
        "btnDeployDisabled": false,
        "btnRepoDisabled": false
    },
    {
        "imgSrc": "https://rochaslanches.vercel.app/assets/rochas-lanches.png",
        "alt": "Ilustração do projeto Rocha's Lanches",
        "title": "Rocha's Lanches",
        "deployLink": "https://rochaslanches.vercel.app",
        "repoLink": "https://github.com/FilipeGabrielRocha/site-pedidos-lanches",
        "btnDeployDisabled": false,
        "btnRepoDisabled": false
    },
    {
        "imgSrc": "../img/section-projetos/site-mario-bros.svg",
        "alt": "Logo do projeto Site Mario Bros",
        "title": "Site Mario Bros",
        "deployLink": "https://filipegabrielrocha.github.io/site-mario-bros/",
        "repoLink": "https://github.com/FilipeGabrielRocha/site-mario-bros",
        "btnDeployDisabled": false,
        "btnRepoDisabled": false
    },
    {
        "imgSrc": "../img/section-projetos/site-hospital.svg",
        "alt": "Logo do projeto Site Hospital",
        "title": "Site Hospital",
        "deployLink": "https://filipegabrielrocha.github.io/site-hospital/",
        "repoLink": "https://github.com/FilipeGabrielRocha/site-hospital",
        "btnDeployDisabled": false,
        "btnRepoDisabled": false
    },
    {
        "imgSrc": "../img/section-projetos/filme-interstellar.svg",
        "alt": "Logo do projeto Filme Interstellar",
        "title": "Filme Interstellar",
        "deployLink": "https://filipegabrielrocha.github.io/page-interstellar/",
        "repoLink": "https://github.com/FilipeGabrielRocha/page-interstellar",
        "btnDeployDisabled": false,
        "btnRepoDisabled": false
    },
    {
        "imgSrc": "../img/section-projetos/cartao-credito.svg",
        "alt": "Logo do projeto Cartão de Crédito",
        "title": "Cartão de Crédito",
        "deployLink": "https://filipegabrielrocha.github.io/cartao-credito/",
        "repoLink": "https://github.com/FilipeGabrielRocha/cartao-credito",
        "btnDeployDisabled": false,
        "btnRepoDisabled": false
    }
]

let containerProjetos = document.querySelector(".container-projects");

function renderizaProjetos() {
    infoProjtos.forEach((projeto) => {
        const isDeployLinkActive = projeto.deployLink && !projeto.btnDeployDisabled;
        const isRepoLinkActive = projeto.repoLink && !projeto.btnRepoDisabled;

        containerProjetos.innerHTML += `
            <div class="container-project">
                <img src="${projeto.imgSrc}" alt="${projeto.alt}" class="image-project">
                <div class="project-info">
                    <h3 class="project-title poppins-regular">${projeto.title}</h3>
                    <div class="container-btn">
                        <a href="${isDeployLinkActive ? projeto.deployLink : 'javascript:void(0);'}" ${isDeployLinkActive ? 'target="_blank"' : ''}>
                            <button type="button" class="btn ${!isDeployLinkActive ? 'disable' : ''} poppins-semibold">Deploy</button>
                        </a>
                        <a href="${isRepoLinkActive ? projeto.repoLink : 'javascript:void(0);'}" ${isRepoLinkActive ? 'target="_blank"' : ''}>
                            <button type="button" class="btn ${!isRepoLinkActive ? 'disable' : ''} poppins-semibold">Repo</button>
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
}

renderizaProjetos();