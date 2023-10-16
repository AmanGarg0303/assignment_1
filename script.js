const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (e) {
  let email = document.getElementById("userEmail").value;

  if (!email) {
    alert("Please add an email");
  } else {
    document.getElementById("form").innerHTML = `<h1>Thank You!</h1>`;
    document.getElementById("form").style.fontSize = "24px";

    console.log("User Email: ", email);
  }
});
