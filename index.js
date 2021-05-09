

window.onload = createDiv();

function createDiv() {
  for (i = 0; i < 5; i++) {
    var divs = document.createElement("div");
    divs.setAttribute("id", "div_id" + i);
    divs.style =
      "position:absolute;text-align:center;padding-top: 15px; height: 40px;width: 60px; top:" +
      X +
      "px; left:" +
      Y +
      "px; border-radius:50%";

    var X = Math.floor(Math.random() * 420 + 1);
    var Y = Math.floor(Math.random() * 420 + 1);

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    divs.style.background = "#" + randomColor;

    const maindiv = document.getElementById("container");
    maindiv.append(divs);

    Movement(0.5, 0.5, X, Y, divs);
  }

  function Movement(xposition, yposition, X, Y, divs) {
    setInterval(() => {
      X += xposition;
      divs.style.left = X + "px";

      Y += yposition;
      divs.style.top = Y + "px";

      if(X > 450 || X < 0){
        xposition = xposition * -1;
    }
    if (Y > 440 || Y < 0) {
        yposition = yposition * -1;
    }
    }, 1);
  }
}
