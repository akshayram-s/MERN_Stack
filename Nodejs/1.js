function paul() {
  for (i = 1; i <= 3; i++) {
    data = "";
    for (j = 1; j <= i; j++) {
      data += "*";
    }
    console.log(data);
  }
  console.log("");
  for (i = 1; i <= 3; i++) {
    data = "";
    for (j = 3; j >= i; j--) {
      data += "*";
    }
    console.log(data);
  }
  console.log("");
  for (i = 1; i <= 3; i++) {
    data = "";
    for (j = 1; j <= 3 - i; j++) {
      data += " ";
    }
    for (k = 3 - i; k < 3; k++) {
      data += "*";
    }
    console.log(data);
  }
  console.log("");
  for (i = 3; i >= 1; i--) {
    data = "";
    for (k = 3; k > i; k--) {
      data += " ";
    }
    for (j = 1; j <= i; j++) {
      data += "*";
    }
    console.log(data);
  }
  console.log("");
  s = "Javascript";
  for (i = 0; i <= s.length; i++) {
    console.log(s.slice(0, i));
  }
  console.log("");
  for (i = 0; i < s.length; i++) {
    data = "";
    for (j = 0; j <= i; j++) {
      data += s[j];
    }
    console.log(data);
  }
}
