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
var programme_Title1;
var programme_Title2;

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
  timeInterval = this.setInterval(DelayDotClick, 2000);
}


function DelayDotClick() {
  // console.log("定时执行");
  WelcomeDotClick(curSlider === 0 ? 1 : 0);
}

function InitWelcomeArea() {
  // Header_area = document.querySelector(".main_header_area");
  welcome_area = document.querySelector(".welcome_area");
  WelcomeBannerDots = document.querySelector(".welcome-banner-dots")
  welcomedots_1 = document.getElementById("welcomedots_1");
  welcomedots_2 = document.getElementById("welcomedots_2");
  sliders = document.querySelectorAll(".slider");
  programme_Title1 = document.getElementById("programme-title1");
  programme_Title2 = document.getElementById("programme-title2");

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


  if (tag === 0) {
    programme_Title1.innerHTML = "智慧农业";
    programme_Title2.innerHTML = "数字化大棚，数字化养殖，数字化乡村管理。数字孪生助力乡村振兴。"
  }
  else if (tag === 1) {
    programme_Title1.innerHTML = "智慧园区解决方案";
    programme_Title2.innerHTML = "高度融合园区多种数据资源，运用3D技术制作园区三维模型，对园区产业、资产、基础设施、能效、安防等领域的关键指标进行综合监测分析，打造智慧园区管理一张图，实现更加高效科学的园区管理，全面提升园区管理水平。"
  }
  else if (tag === 2) {
    programme_Title1.innerHTML = "智慧文旅解决方案";
    programme_Title2.innerHTML = "智慧文旅信息化解决方案，实时显示景区景点地图，人流状况，票务状况。实现一站式景区数字化管理方案。"
  }
  else if (tag === 3) {
    programme_Title1.innerHTML = "智慧交通";
    programme_Title2.innerHTML = "通过对站点，轨道传感器进行数据传输；结合3d和轨道交通图。实现轨道交通数字化管理全流程覆盖。"
  }
  else if (tag === 4) {
    programme_Title1.innerHTML = "智慧社区";
    programme_Title2.innerHTML = "通过对建筑，道路，水系，山体的建模；雪天雨天等天气的切换，呈现出真实的社区环境。结合人员数据，物业数据等实现社区的数字孪生解决方案。"
  }
  else if (tag === 5) {
    programme_Title1.innerHTML = "智慧工厂";
    programme_Title2.innerHTML = "结合数字孪生技术，将原料，供应，生产全流程纳入可视化监控范畴。"
  }
  else if (tag === 6) {
    programme_Title1.innerHTML = "更多行业解决方案";
    programme_Title2.innerHTML = "结合数字孪生技术，将原料，供应，生产全流程纳入可视化监控范畴。"
  }
}

function WelcomeDotClick(tag) {
  if (curSlider === tag)
    return;

  welcome_area.className = tag === 0 ? "welcome_area" : "welcome_area educate-bg";
  // Header_area.className = tag === 0 ? "main_header_area" : "main_header_area header-educate-bg";
  WelcomeBannerDots.className = tag === 0 ? "welcome-banner-dots active" : "welcome-banner-dots";
  welcomedots_1.className = tag === 0 ? "active" : "";
  welcomedots_2.className = tag === 0 ? "" : "active";

  if (curSlider >= 0)
    sliders[curSlider].className = "slider"
  sliders[tag].className = "slider active";

  curSlider = tag;
}

