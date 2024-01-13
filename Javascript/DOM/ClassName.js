var collection = document.getElementsByClassName("odd");
for (var h1 of collection) {
  h1.style.color = "cyan";
  h1.style.backgroundColor = "red";
}
var para = document.getElementsByClassName("even");
for (var p of para) {
  p.style.color = "violet";
  p.style.fontStyle = "italic";
}
// forEach will not work for collection variable as it is not an array
