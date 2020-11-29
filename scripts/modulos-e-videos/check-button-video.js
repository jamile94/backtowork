function checkButton() {
  $('.video-list button').click(function() {
    $('.checked').css('background-color', '')
    $('.checked').removeClass('checked');
    $(this).addClass('checked');
    $(this).css('background-color', 'rgb(54, 130, 118, 0.7)');
    $(".video-name").remove();
    $(".video-list").before(`<div class="green col-sm-12 col-md-12 col-lg-12 video-name">
                            ${videos.find(x => x.id == $(this).attr('id')).name}</div>`);
  })
};

checkButton();
