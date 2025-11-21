function submit() {
  const nm = document.getElementById("fullName").value;
  const em = document.getElementById("emailAdresss").value;
  const mb = document.getElementById("mobileNumber").value;
  const dob = document.getElementById("dob").value;
  const ql = document.getElementById("qualification").value;
  const sr = document.getElementById("score").value;
  const cr = document.getElementById("course").value;
  const pb = [];
  document
    .querySelectorAll("input[name='batch']:checked")
    .forEach((element) => {
      pb.push(element.value);
    });
  const pt = document.querySelector("input[name='timing']:checked").value;
  const gn = document.getElementById("guardianFullName").value;
  const gc = document.getElementById("guardianContact").value;
  const aUs = document.querySelector("input[name='aboutUS']:checked").value;
  const srq = document.getElementById("specialRequirements").value;

  alert("Are you Sure!!")

  console.log("Full Name : " + nm);
  console.log("Email : " + em);
  console.log("Mobile Number : " + mb);
  console.log("Date of Birth: " + dob);
  console.log("Qualifications : " + ql);
  console.log("Score : " + sr);
  console.log("Course : " + cr);
  console.log("Preffered Batch : " + pb);
  console.log("Preffered Time : " + pt);
  console.log("Guardian's Name : " + gn);
  console.log("Guardian's Contact : " + gc);
  console.log("About US : " + aUs);
  console.log("Special Requirments : " + srq);

  function clearFrom() {
    window.location.reload();
  }
}
