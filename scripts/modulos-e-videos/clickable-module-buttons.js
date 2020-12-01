function clickableModuleButtons () {
  $(".module-button").click(function() {
    /* Pega o nome do módulo presente no botão clicado e guarda na variável newModuleName */
    let newModuleName = $(this).text();
    /* OBS: Esse nome está escrito na mão no html modulos-aulas, nos botões de módulo (+/- linhas 27) */

    /* Altera o título da página para o valor que estava no botão clicado */
    $("h1.module-name").text(newModuleName);

    /* Apaga as divs com as classes .video, .vide-name e .video-list e chama a função */
    /* loadModuleVideos para preenchê-las novamente. */
    $(".video").empty();
    $(".video-name").empty();
    $(".video-list").empty();
    $(".change-modules").empty();
    loadModuleVideos(this.getAttribute('collectionname'));
  });
}
