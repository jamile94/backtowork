function loadModuleVideos(){
    let moduleNumber = "modulo" + $("h1.module-number").text().split(' ')[1];
    console.log(moduleNumber);

    let videolist = $(".video-list");
    let panel = $(".video")
    let firstVideo = videos[moduleNumber][0] // Pega o primeiro vídeo da lista
    let iframe = `<iframe class="col-sm-12 col-md-12 col-lg-12" src="https://www.youtube.com/embed/${firstVideo.id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

    /* Coloca a lista com os botões para cada vídeo na div .video-list */
    videos[moduleNumber].forEach((video) => {
        videolist.append(`<button id="${video.id}">${video.name}</button>`);
    });

    /* Coloca o título do primeiro vídeo na tela*/
    $(".video-name").text(`${videos[moduleNumber][0].name}`);

    panel.append(iframe);

    let button = $(".video-list button");
    let video = $("iframe")
    for(var el of button){
        el.addEventListener("click", (e) => {
            panel.html(`<iframe class="col-sm-12 col-md-12 col-lg-12" src="https://www.youtube.com/embed/${e.target.id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
        })
    }
};

loadModuleVideos();
