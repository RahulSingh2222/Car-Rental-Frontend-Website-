var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 15) {
    counter = 1;
  }
}, 3000);


var today = new Date().toISOString().slice(0, 16);

document.getElementsByName("book")[0].min = today;
document.getElementsByName("book1")[0].min = today;



function openForm() {
    document.getElementById("myFormm").style.display = "block";
  }

function closeForm() {
  document.getElementById("myFormm").style.display = "none";
}

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});

function show() {
  var p = document.getElementById("Password");
  p.setAttribute("type", "text");
}

function hide() {
  var p = document.getElementById("Password");
  p.setAttribute("type", "password");
}

var pwShown = 0;

document.getElementById("eye").addEventListener(
  "click",
  function () {
    if (pwShown == 0) {
      pwShown = 1;
      show();
    } else {
      pwShown = 0;
      hide();
    }
  },
  false
);

var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
