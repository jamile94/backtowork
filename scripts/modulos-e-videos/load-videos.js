function elements(){
    let div = $(".video-list");
    let panel = $(".panel")
    let iframe = `<iframe class="col-sm-12 col-md-12 col-lg-12" src="https://www.youtube.com/embed/T5mzxYpp3WQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    videos.forEach((video) => {
        div.append(`<button id="${video.id}">${video.name}</button>`);
    });

    panel.append(iframe);

    let button = $(".video-list button");
    // console.log(button);
    let video = $("iframe")
    for(var el of button){
        // console.log(el)
        el.addEventListener("click", (e) => {
            // console.log(e.target.id)
            panel.html(`<iframe class="col-sm-12 col-md-12 col-lg-12" src="https://www.youtube.com/embed/${e.target.id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
        })
    }
};

elements();
