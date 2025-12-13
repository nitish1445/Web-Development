function calculateTip() {
  const bill = document.getElementById("billAmount").value;
  const rating = document.getElementById("serviceRating").value;
  const person = document.getElementById("persons").value;

  if (!bill || !rating || !person || person <= 0) {
    alert("Please fill the correct details.");
    return;
  }

  const tip = (bill * rating) / 100;
  // const finalBill = tip / personNum;
  const finalBill = Math.round(tip / person);

  //   remove old data
  const oldres = document.getElementById("billResult");
  if (oldres) {
    oldres.remove();
  }

  const d = document.createElement("div");
  d.classList.add("text-center", "mt-3");
  d.id = "billResult";

  const h = document.createElement("h5");
  h.innerHTML = `Total Amount <br> <i class="bi-currency-rupee"></i>${finalBill} each.`;

  d.appendChild(h);

  document.getElementById("mainBox").appendChild(d);
  document.getElementById("billAmount").value = "";
  document.getElementById("serviceRating").value = "";
  document.getElementById("persons").value = "";
}
