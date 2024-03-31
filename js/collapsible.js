var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var collapsiblecontent = this.nextElementSibling;
    if (collapsiblecontent.style.display === "block") {
      collapsiblecontent.style.display = "none";
    }
    else {
      collapsiblecontent.style.display = "block";
    }
  });
}
