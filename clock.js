let menu = document.querySelectorAll("select");
let selectbox = document.querySelector(".time");
let display = document.querySelector("h1");
let btn = document.querySelector(".set");
let btn2 = document.querySelector(".clear");
let btnbox = document.querySelector(".buttons");
let s1 = document.getElementById("roll1");
let s2 = document.getElementById("roll2");
let s3 = document.getElementById("roll3");
let spider = document.querySelector(".spiderman2");
let mode = "visible";
let a = "setAlarm";
let timmer = null;
let ringtone = new Audio(
  "GTA San Andreas ! Mission Passed Respect bgm ! tone.mp3"
);

let hrs = 0;
let mint = 0;
let sec = 0;

//Add time options in select tag
for (let i = 12; i >= 0; i--) {
  if (i < 10) {
    i = "0" + i;
  }
  let option = `<option value="${i}">${i}</option>`;
  menu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let j = 60; j >= 0; j--) {
  if (j < 10) {
    j = "0" + j;
  }
  let option2 = `<option value="${j}">${j}</option>`;
  menu[1].firstElementChild.insertAdjacentHTML("afterend", option2);
}

for (let k = 60; k > 0; k--) {
  if (k < 10) {
    k = "0" + k;
  }
  let option3 = `<option value="${k}">${k}</option>`;
  menu[2].firstElementChild.insertAdjacentHTML("afterend", option3);
}

//making of the stopwatch
function stopwatch() {
  sec++;
  if (sec == 60) {
    sec = 0;
    mint++;
    if (mint == 60) {
      mint = 0;
      hrs++;
    }
  }
  let h = hrs < 10 ? "0" + hrs : hrs;
  let m = mint < 10 ? "0" + mint : mint;
  let s = sec < 10 ? "0" + sec : sec;

  display.innerHTML = h + ":" + m + ":" + s;
  if (Displaytime == `${h}:${m}:${s}`) {
    ringtone.play();
    spider.classList.remove("spidermanhide");
    setTimeout(() => {
      spider.style.top = 0 + "px";
    }, 3000);

    blink = setInterval(() => {
      if (mode === "visible") {
        mode = "invisible";
        display.classList.add("hide");
        display.classList.remove("main");
      } else {
        mode = "visible";
        display.classList.add("main");
        display.classList.remove("hide");
      }
    }, 400);
    clearInterval(timmer);
  }
}

//set the alarm
function setAlrm() {
  timmer = setInterval(stopwatch, 999.9);
  let currentTime = `${menu[0].value}:${menu[1].value}:${menu[2].value}`;

  Displaytime = currentTime;
  console.log(currentTime);
  btn.classList.add("btnhide");
  btn2.classList.remove("btnhide");
  if (
    menu[0].value == "Hour" ||
    menu[1].value == "Minute" ||
    menu[2].value == "Second"
  ) {
    clearInterval(timmer);
    alert("Bhai thik se Timer Set karo na.");
    btn2.classList.add("btnhide");
    btn.classList.remove("btnhide");
  }
}

//clear the alarm

function clearAlarm() {
  display.innerHTML = "00:00:00";
  display.classList.remove("hide");
  clearInterval(timmer);
  btn2.classList.add("btnhide");
  btn.classList.remove("btnhide");
  hrs = 0;
  mint = 0;
  sec = 0;
  menu[0].value = "Hour";
  menu[1].value = "Minute";
  menu[2].value = "Second";
  clearInterval(blink);
  spider.classList.remove("spidermanhide");
  spider.classList.remove("spiderman2");
  spider.classList.add("spiderman");
  setTimeout(() => {
    spider.style.top = -150 + "px";
  }, 2500);
  document.querySelector(".lb1").classList.add("hide");
  document.querySelector(".lb2").classList.add("hide");
  document.querySelector(".lb3").classList.add("hide");
}

//change the time period name

s1.addEventListener("change", () => {
  document.querySelector(".lb1").classList.remove("hide");
});
s2.addEventListener("change", () => {
  document.querySelector(".lb2").classList.remove("hide");
});
s3.addEventListener("change", () => {
  document.querySelector(".lb3").classList.remove("hide");
});
