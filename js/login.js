// step 1: add click handler with submit btn
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email inside the input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3: get the password inside the input field 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);
    
    // step 4: verify email password on client side... do not verify on client side
    if(email === 'abc@gmail.com' && password === 'asdf'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid User');
    }

})