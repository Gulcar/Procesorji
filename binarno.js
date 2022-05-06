const bin_in = document.getElementById("bin-in");
const bin_out = document.getElementById("bin-out");

function output() {
  let deset = bin_in.value.toString();

  if (deset == "0") {
    bin_out.innerHTML = "0";
    return;
  }

  let out = "";

  let x = 1;

  while (x <= deset) {
    x *= 2;
  }
  x /= 2;

  while (x >= 1) {
    if (deset >= x) {
      deset -= x;
      out += "1";
    } else {
      out += "0";
    }
    x /= 2;
  }

  bin_out.innerHTML = out;
}

bin_in.onchange = () => {
  output();
};

output();
