var curTabItem = 0;
var tab_items;
var contents;
var Header_area;
var welcome_area;
var welcomedots_1;
var welcomedots_2;
var WelcomeBannerDots
var sliders;
var curSlider = -1;
var timeInterval = 0;


window.addEventListener("load", function () {
  InitTabItem();
  InitWelcomeArea();

  WelcomeDotClick(1);
  goOn();
})

function pause() {
  if (timeInterval <= 0)
    return;
  clearInterval(timeInterval);
  timeInterval = 0;
}

function goOn() {
  if (timeInterval > 0)
    clearInterval(timeInterval);
  timeInterval = this.setInterval(DelayDotClick, 3000);
}


function DelayDotClick() {
  // console.log("定时执行");
  WelcomeDotClick(curSlider === 0 ? 1 : 0);
}

function InitWelcomeArea() {
  Header_area = document.querySelector(".main_header_area");
  welcome_area = document.querySelector(".welcome_area");
  WelcomeBannerDots = document.querySelector(".welcome-banner-dots")
  welcomedots_1 = document.getElementById("welcomedots_1");
  welcomedots_2 = document.getElementById("welcomedots_2");
  sliders = document.querySelectorAll(".slider");

  welcomedots_1.onclick = function () {
    WelcomeDotClick(0);
    goOn();
  }

  welcomedots_2.onclick = function () {
    WelcomeDotClick(1);
    goOn();
  }

  for (i = 0; i < sliders.length; i++) {
    sliders[i].onmouseenter = SliderMouseEnter;
    sliders[i].onmouseleave = SliderMouseLeave;
  }

  WelcomeBannerDots.onmouseenter = SliderMouseEnter;
  WelcomeBannerDots.onmouseleave = SliderMouseEnter;
}

//鼠标进入
function SliderMouseEnter() {
  pause();
}

//鼠标离开
function SliderMouseLeave() {
  goOn()
}

//初始化tab_item
function InitTabItem() {
  tab_items = document.querySelectorAll(".tab_item");
  contents = document.querySelectorAll(".content");

  var item1 = document.getElementById("indextag_1");
  item1.onclick = function () {
    TabItemClick(0);
  }

  var item2 = document.getElementById("indextag_2");
  item2.onclick = function () {
    TabItemClick(1);
  }

  var item3 = document.getElementById("indextag_3");
  item3.onclick = function () {
    TabItemClick(2);
  }

  var item4 = document.getElementById("indextag_4");
  item4.onclick = function () {
    TabItemClick(3);
  }

  var item5 = document.getElementById("indextag_5");
  item5.onclick = function () {
    TabItemClick(4);
  }

  var item6 = document.getElementById("indextag_6");
  item6.onclick = function () {
    TabItemClick(5);
  }

  var item7 = document.getElementById("indextag_7");
  item7.onclick = function () {
    TabItemClick(6);
  }

  // // var tab_items = document.getElementsByClassName("tab_item");
  // tab_items = document.querySelectorAll(".tab_item");
  // console.log(tab_items);

  // for (i = 0; i < tab_items.length; i++) {
  //   tab_items[i].addEventListener("click", TabItemClick, true);
  // }
}

function TabItemClick(tag) {
  if (curTabItem === tag)
    return;

  tab_items[curTabItem].className = "tab_item";
  contents[curTabItem].className = "content"

  tab_items[tag].className = "tab_item active";
  contents[tag].className = "content active"

  curTabItem = tag;
}

function WelcomeDotClick(tag) {
  if (curSlider === tag)
    return;

  welcome_area.className = tag === 0 ? "welcome_area" : "welcome_area educate-bg";
  Header_area.className = tag === 0 ? "main_header_area" : "main_header_area header-educate-bg";
  WelcomeBannerDots.className = tag === 0 ? "welcome-banner-dots active" : "welcome-banner-dots";
  welcomedots_1.className = tag === 0 ? "active" : "";
  welcomedots_2.className = tag === 0 ? "" : "active";

  if (curSlider >= 0)
    sliders[curSlider].className = "slider"
  sliders[tag].className = "slider active";

  curSlider = tag;
}

