const submit = document.getElementById("sbtn");

submit.addEventListener("click", validate);

function valusername() {
  const uname = document.getElementById("username").value;
  let errmsg = document.getElementById("erruname");

  if (uname == "") {
    errmsg.innerHTML = "**empty username";
    errmsg.style.color = "red";
    errmsg.style.display = "block";
    return false;
  } else {
    errmsg.innerHTML = "**success username";
    errmsg.style.color = "green";
    errmsg.style.display = "block";
    return false;
  }
}

function valemail() {
  const email = document.getElementById("email").value;
  let errmsg = document.getElementById("erremail");

  if (email == "") {
    errmsg.innerHTML = "**empty email";
    errmsg.style.color = "red";
    errmsg.style.display = "block";
    return false;
  } else {
    errmsg.innerHTML = "**success email";
    errmsg.style.color = "green";
    errmsg.style.display = "block";
    return false;
  }
}

function valpassword() {
  const pword = document.getElementById("password").value;
  let errmsg = document.getElementById("errpword");

  if (pword == "") {
    errmsg.innerHTML = "**empty password";
    errmsg.style.color = "red";
    errmsg.style.display = "block";
    return false;
  } else {
    errmsg.innerHTML = "**success password";
    errmsg.style.color = "green";
    errmsg.style.display = "block";
    return false;
  }
}

function validate() {
  valusername();
  valemail();
  valpassword();
  return false;
}
