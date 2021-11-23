let inputName = document.querySelector("input[type=text]");
let errorName = document.querySelector(".errornameMsg");

let inputSurname = document.querySelector("input[type=text]");
let errorsName = document.querySelector(".errorsnameMsg");

let inputEmail = document.querySelector("input[type=email]");
let errorEm = document.querySelector(".erroremailMsg");

let inputpsw = document.querySelector("input[type=password]");
let errorPsw1 = document.querySelector(".errorPswMsg");

let inputpsw2 = document.querySelector("input[type=password]");
let errorPsw2 = document.querySelector(".errorPsw2Msg");

let btn = document.querySelector(".MyBtn");
// input.value = "Dkmf";

const symb = "@";
btn.onclick = function () {
  if (inputName.value == "") {
    errorName.classList.remove("d-none");
  } else {
    errorName.classList.add("d-none");
  }

  if (inputSurname.value == "") {
    errorsName.classList.remove("d-none");
  } else {
    errorsName.classList.add("d-none");
  }

  if (inputEmail.value == "") {
    // if (inputEmail.value.includes(symb)) {
    //   console.log("emaul is true");
    // }
    errorEm.classList.remove("d-none");
  } else {
    errorEm.classList.add("d-none");
  }

  if (inputpsw.value == "") {
    errorPsw1.classList.remove("d-none");
  } else {
    errorPsw2.classList.add("d-none");
  }

  if (inputpsw2.value == "") {
    errorPsw2.classList.remove("d-none");
  } else {
    errorPsw2.classList.add("d-none");
  }
};
