function elements(){
    let moduleNumber = "modulo" + $(".module-number").text().split(' ')[1];
    let div = $(".video-list");
    let panel = $(".panel")
    let iframe = `<iframe class="col-sm-12 col-md-12 col-lg-12" src="https://www.youtube.com/embed/T5mzxYpp3WQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    videos[moduleNumber].forEach((video) => {
        div.append(`<button id="${video.id}">${video.name}</button>`);
    });

    /* Coloca o título do primeiro vídeo na tela*/
    $(".video-list").before(`<div class="green col-sm-12 col-md-12 col-lg-12 video-name">
                            ${videos[moduleNumber][0].name}</div>`)
    panel.append(iframe);

    let button = $(".video-list button");
    let video = $("iframe")
    for(var el of button){
        el.addEventListener("click", (e) => {
            panel.html(`<iframe class="col-sm-12 col-md-12 col-lg-12" src="https://www.youtube.com/embed/${e.target.id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
        })
    }
};

// function formatVideoName(string) { return string.split(' - ').splice(1).join(' ') }

elements();
