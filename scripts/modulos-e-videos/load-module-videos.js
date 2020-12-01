function loadModuleVideos(moduleName){
    /* Coloca o título da página de acordo com o módulo escolhido (pelo argumento moduleName recebido) */
    /* e também preenche o campo "modulename" com o valor apropriado */
    $("h1.module-name").text(moduleName);
    $("h1.module-name").attr("modulename", moduleName);

    let videolist = $(".video-list");
    let panel = $(".video");

    /* Por padrão carrega o primeiro vídeo da lista correspondente ao módulo escolhido (argumento moduleName) */
    let firstVideo = videos[moduleName][0]; // Pega o primeiro vídeo da lista
    let iframe = `<iframe class="col-sm-12 col-md-12 col-lg-12" src="https://www.youtube.com/embed/${firstVideo.id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    /* Coloca o título do primeiro vídeo na tela */
    $(".video-name").text(`${firstVideo.name}`);

    /* Coloca a lista com os botões dos vídeos dentro da div com a classe .video-list */
    videos[moduleName].forEach((video) => {
        videolist.append(`<button class="video-button" id="${video.id}">${video.name}</button>`);
    });
    checkableButtons(); // dá o efeito de clicar e ficar verde aos botões recém gerados acima

    /* Deixa verde apenas o botão do módulo correspondente ao título da página em que estamos */
    $('.module-button.checked').removeClass('checked') // remove o verde de algum outro possível botão de módulo que esteja verde
    $(`[collectionname="${moduleName}"]`).addClass('checked') // coloca verde no botão que tenha o valor igual ao título da página

    panel.append(iframe);

    let button = $(".video-button");
    for(var el of button){
        el.addEventListener("click", (e) => {
            panel.html(`<iframe class="col-sm-12 col-md-12 col-lg-12" src="https://www.youtube.com/embed/${e.target.id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
            // scrolling(e);
            // getVideoDuration();
            var id = (window.matchMedia("(min-width: 768px)").matches)? "scrollToMe-lg" : "scrollToMe-sm-md";
            document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        })
    }
};

function getVideoDuration() {
    let video = $(".video");
    console.log(video);
};

function scrolling(e) {
    e.target.scrollIntoView();
};

/* Por padrão está carregando a página no "Módulo 1" na primeira vez que abre a página */
loadModuleVideos("Módulo 1");
