function dhoni(target) {
  var headings = document.getElementsByClassName("hi");
  for (var h1 of headings) {
    h1.style.color = "black";
    h1.style.backgroundColor = "white";
  }
  target.style.color = "cyan";
  target.style.backgroundColor = "red";
}
