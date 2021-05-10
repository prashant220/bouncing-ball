
var xposition = 1;
var yposition = 1;
var counter = 0;
var div = new Array();
var Xposition = new Array();
var Yposition = new Array();
var para= document.getElementById("inner-text");
var text=document.createElement('p');
text.innerHTML="ants killed:0"
para.appendChild(text)


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
      "px; border-radius:50%;"
      var ant = document.createElement("img");
      ant.src = "ant-svg.svg";
      ant.setAttribute("style", "width:30px; height:30px;");
      divs.appendChild(ant);
      

    var X = Math.floor(Math.random() * 420 + 1);
    var Y = Math.floor(Math.random() * 420 + 1);

    // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // divs.style.background = "#" + randomColor;

    const maindiv = document.getElementById("container");
    maindiv.append(divs);
   divs.addEventListener('click',function(){
     deleteBoxes(this)
     text.innerHTML="ants killed:"+counter
    
   });
      

    Movement(0.2, 0.2, X, Y, divs,i);
  
  }
  function deleteBoxes(el){
    counter++;
    var element = el;
    element.remove();
    
   
  }
 
  

  function Movement(xposition, yposition, X, Y, divs,index) {
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
   
    Xposition[index] = X;
    Yposition[index] = Y;
    for (var i = 0; i < 5; i++) {

      if (!(i === index)) {
          if ((Xposition[i] < X + 30) && (Xposition[i] + 30 > X) && (Yposition[i] < Y + 30) && (Yposition[i] + 30 > Y)) {
              xposition = xposition * -1;
              yposition = yposition * -1;
          }
      }
  }
    }, 1);
  }
}
