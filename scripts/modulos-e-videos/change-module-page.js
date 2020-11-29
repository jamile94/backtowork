$(".change-modules button").click(function() {
  newTitle = $(this).text();
  console.log(`${newTitle} : ${typeof(newTitle)}`);
  $("h1.module-number").text(newTitle);
  $("iframe").remove();
  $(".video-name").remove();
  $(".video-list").empty();
  loadVideos();
})
