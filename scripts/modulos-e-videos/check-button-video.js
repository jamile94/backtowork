function checkableButtons() {
  $('.video-button').click(function() {
    let moduleNumber = "modulo" + $("h1.module-number").text().split(' ')[1];

    console.log("ENTROU NA FUNÇÃO CLICANDO NO BOTÃO DE VÍDEO");
    console.log("AAA");

    $('.checked').removeClass('checked');
    $(this).addClass('checked');

    $(".video-name").empty();
    $(".video-name").text(videos[moduleNumber].find(x => x.id == $(this).attr('id')).name);
  })
};
