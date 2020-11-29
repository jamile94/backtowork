function checkButton() {
  $('.video-list button').click(function() {
    $('.checked').css('background-color', '')
    $('.checked').removeClass('checked');
    $(this).addClass('checked');
    $(this).css('background-color', 'rgb(54, 130, 118, 0.7)');
  })
};

checkButton();
