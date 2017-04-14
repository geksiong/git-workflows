marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

window.onload = function() {
  var markdowns = document.getElementsByClassName("panel-article")

  for (var i=0; i < markdowns.length; i++) {
    markdowns[i].innerHTML = marked(markdowns[i].innerHTML);
  }

  createGitFlow();
}
