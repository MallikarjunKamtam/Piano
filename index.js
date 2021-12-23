var numberOfDrumButtons = document.querySelectorAll(".button").length;

for (var i=0; i<numberOfDrumButtons; i++) {
  document.querySelectorAll(".button")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    addAnimation(buttonInnerHTML);
}
)
}
    document.addEventListener("keydown", function(event){
    makeSound(event.key);
    addAnimation(event.key);
})

function makeSound(key){
  switch (key) {
    case "a":
      var a = new Audio("sounds/a.wav");
      a.play();
      break;

    case "b":
      var b = new Audio("sounds/b.wav");
      b.play();
      break;

    case "c":
      var c = new Audio("sounds/c.wav");
      c.play();
      break;

    case "d":
      var d = new Audio("sounds/d.wav");
      d.play();
      break;
    case "e":
      var e = new Audio("sounds/e.wav");
      e.play();
      break;
    case "f":
      var f = new Audio("sounds/f.wav");
      f.play();
      break;
    case "g":
      var g = new Audio("sounds/g.wav");
      g.play();
      break;
      case "h":
        var h = new Audio("sounds/h.wav");
        h.play();
        break;

      case "i":
        var i = new Audio("sounds/i.wav");
        i.play();
        break;

      case "j":
        var j = new Audio("sounds/j.mp3");
        j.play();
        break;

      case "k":
        var k = new Audio("sounds/k.mp3");
        k.play();
        break;
      case "l":
        var l = new Audio("sounds/l.wav");
        l.play();
        break;
      case "m":
        var m = new Audio("sounds/m.wav");
        m.play();
        break;

        case "n":
          var n = new Audio("sounds/n.wav");
          n.play();
          break;

        case "o":
          var o = new Audio("sounds/o.wav");
          o.play();
          break;

        case "p":
          var p = new Audio("sounds/p.wav");
          p.play();
          break;

        case "q":
          var q = new Audio("sounds/q.wav");
          q.play();
          break;
        case "r":
          var r = new Audio("sounds/r.mp3");
          r.play();
          break;
        case "s":
          var s = new Audio("sounds/s.mp3");
          s.play();
          break;
        case "t":
          var t = new Audio("sounds/t.mp3");
          t.play();
          break;
          case "u":
            var u = new Audio("sounds/u.wav");
            u.play();
            break;

          case "v":
            var v = new Audio("sounds/v.wav");
            v.play();
            break;

          case "w":
            var w = new Audio("sounds/w.wav");
            w.play();
            break;

          case "x":
            var x = new Audio("sounds/x.mp3");
            x.play();
            break;
          case "y":
            var y = new Audio("sounds/y.wav");
            y.play();
            break;
          case "z":
            var z = new Audio("sounds/z.wav");
            z.play();
            break;



    // default: console.log(buttonInnerHTML);
}}

function addAnimation(currentKey){

  activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")}, 100);
}
