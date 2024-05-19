const menuLogin = document.querySelector(".loginInterface");
const interface = document.querySelector(".btn_login");
const menuCancle = document.querySelector(".textCancel");

document.querySelector(".btn_login").onclick = () => {
  menuLogin.classList.toggle("active");
};

document.querySelector(".textCancel").onclick = () => {
  menuLogin.classList.remove("active");
};

document.addEventListener("click", function (e) {
  if (!interface.contains(e.target) && !menuLogin.contains(e.target)) {
    menuLogin.classList.remove("active");
  }
});
