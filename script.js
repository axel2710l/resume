const blur = document.getElementById("fix");
const main = document.getElementById("main");

let a = 100;
let int = setInterval(inc, 10);
function inc() {
  a--;
  if (a <= 0) {
    clearInterval(int);
  }
  // console.log(a);
  blur.style.filter = "blur(" + a / 10 + "px)";
  blur.style.borderRadius = `${a}px`;
  blur.style.marginTop = `${a}px`;
  main.style.marginTop = `calc(5rem + 10px + ${a}px)`;
  //reset scrolling to top on page reload
  window.scrollTo(0, 0);
}

//reset scrolling to top on page reload
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };
