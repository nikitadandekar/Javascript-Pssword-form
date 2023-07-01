console.log("working");
let passwordE1 = document.querySelector("#password");
let showbtn = document.querySelector("#show");
console.log(passwordE1);

showbtn.addEventListener("click", function () {
  if (passwordE1.type == "text") {
    passwordE1.type = "password";
  } else {
    passwordE1.type = "type";
  }
});
let btnLogin = document.querySelector(".btn--Login");
btnLogin.addEventListener("click", (event) => {
  event.preventDefault();
});
let btngoogle = document.querySelector(".btn--google");
btngoogle.addEventListener("click", (event) => {
  event.preventDefault();
  Window.location = "https://www.goggle.com";
});
let btnFacebook = document.querySelector(".btn--Facebook");
btnFacebook.addEventListener("click", (event) => {
  event.preventDefault();
  Window.location = "https://www.Facebook.com";
});
let EmailE1 = document.getElementsByID(".Email");
let Emailoutput = document.querySelector(".Email");
Emailoutput.textContent = "abc";

EmailE1.addEventListener("Email", (e) => {
  Emailoutput.textContent = e.target.value;
});
