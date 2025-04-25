let registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let age = document.getElementById("age").value;
  let bio = document.getElementById("bio").value;

  if (name == "" || name.length < 3) {
    // alert("Invalid Name");
    document.getElementById("nameErrorMsg").innerHTML =
      "Name must be atleast 3 characters";
    return;
  }
  document.getElementById("nameErrorMsg").innerHTML = "";
  if (!email.includes("@") || !email.includes(".")) {
    alert("Invalid Email");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least of 8 characters");
    return;
  }

  if (age < 18 || age > 40) {
    alert("Age must between 18 to 40");
    return;
  }

  if (bio.length > 200) {
    alert("Bio should be less than 200 letters");
    return;
  }

  alert("Your Form has been delivered!");
});
