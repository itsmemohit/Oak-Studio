function myHeader() {
  let header = document.getElementById("header");
  let lol = document.getElementById("lol");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("active");
      lol.src = "images/bulb2.png";
    } else {
      header.classList.remove("active");
      lol.src = "images/bulb.png";
    }
  });
}
myHeader();

function myBars() {
  let bars = document.querySelector("#bar");
  let nav = document.querySelector(".navigation");
  let homeButton = document.querySelector("#homeButton");
  let shopButton = document.querySelector("#shopButton");
  let galleryButton = document.querySelector("#galleryButton");
  let teamButton = document.querySelector("#teamButton");
  let contactButton = document.querySelector("#contactButton");
  bars.onclick = function () {
    if (nav.style.right == "0%") {
      nav.style.right = "-50%";
      bars.src = "images/menu.png";
    } else {
      nav.style.right = "0%";
      bars.src = "images/x.png";
    }
    nav.classList.toggle("new");
  };
  homeButton.onclick = function () {
    nav.style.right = "-50%"; // hide the sidebar
    bars.src = "images/menu.png"; // set the bars icon to menu
    nav.classList.remove("new"); // remove the "new" class from the nav element
  };
  storyButton.onclick = function () {
    nav.style.right = "-50%"; // hide the sidebar
    bars.src = "images/menu.png"; // set the bars icon to menu
    nav.classList.remove("new"); // remove the "new" class from the nav element
  };
  shopButton.onclick = function () {
    nav.style.right = "-50%"; // hide the sidebar
    bars.src = "images/menu.png"; // set the bars icon to menu
    nav.classList.remove("new"); // remove the "new" class from the nav element
  };
  galleryButton.onclick = function () {
    nav.style.right = "-50%"; // hide the sidebar
    bars.src = "images/menu.png"; // set the bars icon to menu
    nav.classList.remove("new"); // remove the "new" class from the nav element
  };
  teamButton.onclick = function () {
    nav.style.right = "-50%"; // hide the sidebar
    bars.src = "images/menu.png"; // set the bars icon to menu
    nav.classList.remove("new"); // remove the "new" class from the nav element
  };
  contactButton.onclick = function () {
    nav.style.right = "-50%"; // hide the sidebar
    bars.src = "images/menu.png"; // set the bars icon to menu
    nav.classList.remove("new"); // remove the "new" class from the nav element
  };
}
myBars();

function myFun() {
  let plus = document.querySelector(".plus");
  let textBox = document.querySelector(".text-box ");
  plus.onclick = () => {
    textBox.classList.toggle("active");
    plus.classList.toggle("img_active");
  };
}
myFun();

function toTop() {
  let top = document.querySelector(".top");
  window.onscroll = () => {
    if (window.scrollY > 100 || document.documentElement.scrollTop > 100) {
      top.style.display = "block";
    } else {
      top.style.display = "none";
    }
  };

  top.onclick = () => {
    scrollTo(0, 0);
  };
}
toTop();

document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.elements.name.value = "";
  e.target.elements.email.value = "";
  e.target.elements.message.value = "";
});

AOS.init();
