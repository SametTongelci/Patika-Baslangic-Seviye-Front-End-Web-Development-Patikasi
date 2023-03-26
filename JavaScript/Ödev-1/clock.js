let name = prompt("Adınızı giriniz: ");
let yourName = document.getElementById("myName");
yourName.innerHTML =
  name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();

function showTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let day = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  document.getElementById("myClock").innerHTML =
    year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
}

setInterval(showTime, 1000);
