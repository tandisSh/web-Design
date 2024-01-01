var editButton = document.getElementById("editButton");
var profileDetails = document.querySelector(".profile-details");
var profileForm = document.getElementById("profileForm");
var cancelButton = document.getElementById("cancelButton");
var h=document.getElementById("h");
var h2=document.getElementById("h2"); 
var box = document.querySelector(".box");

editButton.addEventListener("click", function() {
    profileDetails.style.display = "none";
    h.style.display ="none";
    h2.style.display ="block"; 
    profileForm.style.display = "block";
    box.style.display="none";
});

cancelButton.addEventListener("click", function() {
    profileDetails.style.display = "block";
    profileForm.style.display = "none";
    h.style.display ="block";
    h2.style.display ="none"; 
    box.style.display ="block";
});
// edit user profile 
var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };