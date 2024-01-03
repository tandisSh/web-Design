window.addEventListener("DOMContentLoaded",function(){
    var Storageusername = localStorage.getItem("username");
    var Storagepassword = localStorage.getItem("password");
    if(Storagepassword == null || Storageusername == null){
        window.location.href = "login-register.html";
    }
    if(Storagepassword && Storageusername){
        var userNameInput = document.querySelector("#loginForm #userName1 input[type=text]");
        var passwordInput = document.querySelector("#loginForm #pass1 input[type=password]");
        if(userNameInput && passwordInput){
            userNameInput.value = Storageusername;
            passwordInput.value = Storagepassword;
        }
    }
  });
  