function checkableButtons() {
  $('.video-button').click(function() {
    let moduleName = $("h1.module-name").attr("modulename");

    $('.video-button.checked').removeClass('checked');
    $(this).addClass('checked');

    console.log(`moduleName = ${moduleName}`);
    console.log('video:');
    let video = videos[moduleName].find(x => x.id == this.getAttribute('id'));
    console.log(video);
    console.log('video.name:');
    console.log(video.name);
    $(".video-name").empty();
    $(".video-name").text(video.name);
  })
};
