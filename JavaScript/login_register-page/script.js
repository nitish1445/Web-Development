function Login() {
  console.log("Login Button Click");
  const em = document.getElementById("loginEmail").value;
  const pm = document.getElementById("loginPassword").value;
  console.log("Email :" + em);
  console.log("Password :" + pm);

  alert("Login Done");

  document.getElementById("loginEmail").value = "";
  document.getElementById("loginPassword").value = "";
}
function Register() {
  console.log("Register Button Click");
  const name = document.getElementById("registrationName").value;
  const email = document.getElementById("registrationEmail").value;
  const password = document.getElementById("registrationCreatePassword").value;
  const confPassword = document.getElementById("registrationCreatePassword").value;

  console.log("Name : " +name);
  console.log("Email : " +email);
  console.log("Create Password : " +password);
  console.log("Confirm Password : " +confPassword);


  alert("Registration Done");

  document.getElementById("registrationName").value="";
  document.getElementById("registrationEmail").value="";
  document.getElementById("registrationCreatePassword").value="";
  document.getElementById("registrationConfirmPassword").value="";
}
