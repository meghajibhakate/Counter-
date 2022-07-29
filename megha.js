// bhaiya wala code
// var counter = 0;

// function add() {
//   counter++
//   console.log(counter);
// }
// function sub() {
//   counter--
//   console.log(counter);
// }



// ----------------------my self code-----------------------





// var button = document.getElementById("click me"),
  count = 0;
function reset() {
  count = 0
  document.getElementById("click me").innerHTML = count;
}
function sub() {
  count--
  document.getElementById("click me").innerHTML = count;
  if (count < 10) {
    document.getElementById("demo").style.display = 'none';
  }
}
function add() {
  count++
  document.getElementById("click me").innerHTML = count;
  if (count >= 10) {
    document.getElementById("demo").style.display = 'block';
}
}










// const time = new Date().getHours();
// let greeting;
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// document.getElementById("demo").innerHTML = greeting;




































































































































































































// var button = document.getElementById("clickme"),
//   count = 0;
// button.onclick = function() {
//   count += 1;
//   button.innerHTML = "Click me: " + count;
// };
