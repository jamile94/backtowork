$('.video-list button').click(function() {
  let moduleNumber = "modulo" + $("h1.module-number").text().split(' ')[1];

  console.log("ENTROU NA FUNÇÃO CLICANDO NO BOTÃO DE VÍDEO");
  console.log("AAA");

  $('.checked').css('background-color', '')
  $('.checked').removeClass('checked');

  $(this).addClass('checked');
  $(this).css('background-color', 'rgb(54, 130, 118, 0.7)');

  $(".video-name").remove();
  $(".video-list").before(
    `<div class="video-name green col-sm-12 col-md-12 col-lg-9">${videos[moduleNumber].find(x => x.id == $(this).attr('id')).name}</div>`
    );
})
