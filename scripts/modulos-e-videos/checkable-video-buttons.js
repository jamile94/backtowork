function checkableVideoButtons() {
  $('.video-button').click(function() {
    /* Pega o valor que está no atributo "modulename" do html e guarda na variável moduleName*/
    let moduleName = $("h1.module-name").attr("modulename");
    /* OBS: Esse valor é preenchido na função load-module-videos */

    /* Remove fundo verde de botões que estavam verdes e coloca fundo verde no botão clicado agora */
    $('.video-button.checked').removeClass('checked');
    $(this).addClass('checked');

    /* Pega o vídeo cujo id é igual ao id do botão clicado e guarda na variável video */
    let video = videos[moduleName].find(x => x.id == this.getAttribute('id'));

    /* Apaga o nome do vídeo que estava na tela antes e escreve o nome do novo vídeo */
    $(".video-name").empty();
    $(".video-name").text(video.name);
  })
};
