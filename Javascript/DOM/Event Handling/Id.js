function demo() {
  var member = document.getElementById("batman");
  console.log(member);
  member.style.color = "red";
  var collection = document.getElementsByClassName("hi");
  for (var h1 of collection) {
    h1.style.color = "cyan";
    h1.style.backgroundColor = "red";
  }
}
