$(".module-button").click(function() {
  $("h1.module-number").text($(this).text());
  $(".video").empty();
  $(".video-name").empty();
  $(".video-list").empty();
  loadModuleVideos(this.getAttribute('collectionname'));
})
