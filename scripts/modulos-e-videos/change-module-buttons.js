$(".module-button").click(function() {
  let newModuleName = $(this).text()
  $("h1.module-name").attr("modulenumber", newModuleName)
  $("h1.module-name").text(newModuleName);

  $(".video").empty();
  $(".video-name").empty();
  $(".video-list").empty();
  loadModuleVideos(this.getAttribute('collectionname'));
})
