var obj = {
  home: "<h1>This page is dedicated to demo</h1>",
  places: "<h1>Places to visit are:</h1>",
  contact: "<h1>Here the contact details are shared</h1>",
  about: "<h1>About the website</h1>",
};

function colorchange(target) {
  var headings = document.getElementsByClassName("header");
  for (var h1 of headings) {
    h1.style.color = "black";
    h1.style.backgroundColor = "white";
  }
  target.style.color = "black";
  target.style.backgroundColor = "blue";
  var div = document.getElementById("data");
  div.innerHTML = obj[target.id];
}
