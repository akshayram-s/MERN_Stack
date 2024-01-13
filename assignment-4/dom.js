p = [
  {
    id: 1,
    name: "iphone",
    category: "appliance",
    brand: "apple",
    cost: 55000,
    rating: 3,
  },
  {
    id: 2,
    name: "Airdopes192",
    category: "Bluetooth",
    brand: "Boat",
    cost: 1800,
    rating: 4,
  },
  {
    id: 3,
    name: "sneakers",
    category: "footware",
    brand: "Reebok",
    cost: 7000,
    rating: 5,
  },
  {
    id: 4,
    name: "joggers",
    category: "textile",
    brand: "Jockey",
    cost: 2500,
    rating: 4,
  },
  {
    id: 5,
    name: "Omen xp-1000",
    category: "Laptop",
    brand: "HP",
    cost: 100000,
    rating: 5,
  },
  {
    id: 6,
    name: "BoatWatch",
    category: "Wearables",
    brand: "Boat",
    cost: 7500,
    rating: 2,
  },
];
function sh() {
  data = "";
  for (var i of p) {
    data =
      data +
      "<tr><td>" +
      i.id +
      "</td><td>" +
      i.name +
      "</td><td>" +
      i.category +
      "</td><td>" +
      i.brand +
      "</td><td>" +
      i.cost +
      "</td><td>" +
      i.rating +
      "</td></tr>";
  }
  document.getElementById("disp").innerHTML = data;
}

function ascc() {
  p.sort((a, b) => {
    if (a.cost == b.cost) {
      return 0;
    } else if (a.cost < b.cost) {
      return -1;
    } else {
      return 1;
    }
  });
  sh();
}
function ascr() {
  p.sort((a, b) => {
    if (a.rating == b.rating) {
      return 0;
    } else if (a.rating < b.rating) {
      return -1;
    } else {
      return 1;
    }
  });
  sh();
}
function desc() {
  p.sort((a, b) => {
    if (a.cost == b.cost) {
      return 0;
    } else if (a.cost < b.cost) {
      return 1;
    } else {
      return -1;
    }
  });
  sh();
}
function desr() {
  p.sort((a, b) => {
    if (a.rating == b.rating) {
      return 0;
    } else if (a.rating < b.rating) {
      return 1;
    } else {
      return -1;
    }
  });
  sh();
}

function ref() {
  p.sort((a, b) => {
    if (a.id == b.id) {
      return 0;
    } else if (a.id < b.id) {
      return -1;
    } else {
      return 1;
    }
  });
  sh();
}
