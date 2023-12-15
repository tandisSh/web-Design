function signup()
{
    document.querySelector(".login-form-container").style.cssText = "display: none;";
    document.querySelector(".signup-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "linear-gradient(to bottom, rgba(193, 44, 230, 0.882),  rgb(225, 230, 90));";
    document.querySelector(".button-1").style.cssText = "display: none";
    document.querySelector(".button-2").style.cssText = "display: block";

};

function login()
{
    document.querySelector(".signup-form-container").style.cssText = "display: none;";
    document.querySelector(".login-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = " linear-gradient(to bottom, rgba(193, 44, 230, 0.882),  rgb(225, 230, 90));";
    document.querySelector(".button-2").style.cssText = "display: none";
    document.querySelector(".button-1").style.cssText = "display: block";

}

//form validation
const loginform=document.getElementById('loginForm');
const username1=document.getElementById('userName1');
const password1=document.getElementById('pass1');

const form=document.getElementById('myform');
const username=document.getElementById('userName');
const email=document.getElementById('email');
const password=document.getElementById('pass');
const phoneNumber=document.getElementById('phoneN');
const nationalCode=document.getElementById('nationaC');
const select = document.getElementById('select');


 function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    formControl.classList.remove('error');
    formControl.classList.add('success');
 }

 function setErrorFor(input, message) {
    const formControl = input.parentElement;
    let small = formControl.querySelector('small');
    if (!small) {
        small = document.createElement('small');
        formControl.appendChild(small);
    }
    small.innerText = message;
    formControl.className = 'form-control error';
    formControl.classList.add('error');
    formControl.classList.remove('success');
}

	form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
});

loginform.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs1();
});

function checkInputs1(){
    const username1Value=username1.value.trim();
    const password1Value=pass1.value.trim();

    if(username1Value===''){
        setErrorFor(username1,'لطفا نام را وارد کنید*');
    }else{
        setSuccessFor(username1);
    }
    if(password1Value===''){
        setErrorFor(password1,'لطفا رمز عبور را وارد کنید*');
    }
    else{
        setSuccessFor(password1);
    }
}
function checkInputs(){
    
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const phoneNumberValue=phoneNumber.value.trim();
    const nationalCodeValue=nationalCode.value.trim();
    //usreName 
    if(usernameValue===''){
        setErrorFor(username,'لطفا نام را وارد کنید*');
    }else{
        setSuccessFor(username);
    }
    //email
    if(emailValue===''){
        setErrorFor(email,'لطفا ایمیل را وارد کنید*');

    }else if(!emailValidation(emailValue)){
        setErrorFor(email,'ایمیل صحیح نمیباشد*');
    }
    else{
        setSuccessFor(email);
    }
    //password
    if(passwordValue===''){
        setErrorFor(password,'لطفا رمز عبور را وارد کنید*');
    }else if(!passwordValidation(passwordValue)){
        
        setErrorFor(pass,'رمز عبور بین 6 الی 20 کارکتر(شامل حروف بزرگ و کوچک و اعداد*');
    }
    else{
        setSuccessFor(password);
    }
    //phoneNumber
    if(phoneNumberValue===''){
        setErrorFor(phoneNumber,'لطفا شماره تماس خود را وارد کنید*');
    }else if(!phoneNumberValidation(phoneNumberValue)){
        
        setErrorFor(phoneNumber,'شماره تلفن صحبح نمیباشد*');
    }
    else{
        setSuccessFor(phoneNumber);
    }
    //nationalCode
    if(nationalCodeValue===''){
        setErrorFor(nationalCode,'لطفا کد ملی خود را وارد کنید*');
    }
    else{
        setSuccessFor(nationalCode);
    }
    //degree
    if (select.value === '') {
        setErrorFor(select, 'لطفا مدرک تحصیلی خود را انتخاب کنید*');
    } else {
        setSuccessFor(select);
    }
}

//email validation function
function emailValidation(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
   }
   //password validation function
   function passwordValidation(pass){
    return/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(pass)
   }
    //phone number validation function
    function phoneNumberValidation(phoneN){
        return /^(09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4})$/.test(phoneN);
    }