$(".change-modules button").click(function() {
  newTitle = $(this).text();
  $("h1.module-number").text(newTitle);
  $(".video").empty();
  $(".video-name").empty();
  $(".video-list").empty();
  loadModuleVideos();
})
