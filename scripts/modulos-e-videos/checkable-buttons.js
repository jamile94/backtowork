function checkableButtons() {
  $('.video-button').click(function() {
    let moduleNumber = "modulo" + $("h1.module-number").text().split(' ')[1];

    $('.video-button.checked').removeClass('checked');
    $(this).addClass('checked');

    $(".video-name").empty();
    $(".video-name").text(videos[moduleNumber].find(x => x.id == $(this).attr('id')).name);
  })
};
