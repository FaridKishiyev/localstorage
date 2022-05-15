const btnLogin = document.querySelector(".login");
const btnLogout = document.querySelector(".logout");
const message = document.getElementById("message");
const acces = document.querySelector(".acces");
const rules = document.getElementById("rules");
const checkbox = document.getElementById("checkbox");
const formElement = document.getElementById("form-element");

let isLogin = 0;

const admin = '{"name":"admin", "password": "adminadmin"}';
if (!localStorage.getItem("admin")) {
  localStorage.setItem("admin", admin);
  localStorage.setItem("isLogin", isLogin);
}

let getItemCheck = localStorage.getItem("isLogin");

if (getItemCheck == 1) {
  formElement.style.display = "none";
  message.style.display = "block";
  rules.style.display = "none";
  acces.innerHTML = "Xoş gəldiniz";
}
btnLogin.addEventListener("click", function () {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username != "" && password != "") {
    const getItem = JSON.parse(localStorage.getItem("admin"));
    if (getItem.name == username && getItem.password == password) {
      formElement.style.display = "none";
      message.style.display = "block";
      rules.style.display = "none";
      acces.innerHTML = "Xoş gəldiniz";
      if (checkbox.checked) {
        isLogin = 1;
        localStorage.removeItem("isLogin");
        localStorage.setItem("isLogin", isLogin);
      }
    } else {
      rules.style.display = "block";
      rules.innerText = "Səf ad parol";
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
  } else {
    rules.style.display = "block";
    rules.innerText = "Ad və parolu doldurun";
  }
});

btnLogout.addEventListener("click", function () {
  isLogin = 0;
  localStorage.removeItem("isLogin");
  localStorage.setItem("isLogin", isLogin);
  message.style.display = "none";
  formElement.style.display = "block";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});
