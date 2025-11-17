function submit() {
  console.log("Submit Done");
  const fn = document.getElementById("firstName").value;
  const ln = document.getElementById("lastName").value;
  const em = document.getElementById("email").value;
  const ph = document.getElementById("phone").value;
  const dt = document.getElementById("date").value;
  const cn = document.getElementById("cardNumber").value;
  const pn = document.getElementById("pinNumber").value;
  const an = document.getElementById("additionalNote").value;
  const size = document.getElementById("size").value;
  const size1 = document.getElementById("size1").value;
  const size2 = document.getElementById("size2").value;

  console.log("Full Name : " + fn);
  console.log("Last Name : " + ln);
  console.log("Email : " + em);
  console.log("Phone : " + ph);
  console.log("Date : " + dt);
  console.log("Card Number : " + cn);
  console.log("Pin Number : " + pn);
  console.log("Additional Notes : " + an);
  console.log("Size :" + size);
  console.log("Size :" + size1);
  console.log("Size :" + size2);

  document.getElementById("firstName").value="";
  document.getElementById("lastName").value="";
  document.getElementById("email").value="";
  document.getElementById("phone").value="";
  document.getElementById("date").value="";
  document.getElementById("cardNumber").value="";
  document.getElementById("pinNumber").value="";
  document.getElementById("additionalNote").value="";
  document.getElementById("size").value="";
  document.getElementById("size1").value="";
  document.getElementById("size2").value="";
}
