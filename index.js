const regx=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let valElement=document.querySelector('.validity');
document.querySelector('button').addEventListener("click",function validateEmail(){
    const inputElement=document.getElementById('email-field');
    let email=inputElement.value;
    if(regx.test(email)){
        if(valElement.classList.contains('hide')){
            alert('You have provided a valid email id.');
            let emailBlank=inputElement.value;
            inputElement.value='';
        }else{
            valElement.classList.add('hide');
            alert('You have provided a valid email id.');
            let emailBlank=inputElement.value;
            inputElement.value='';
        }
    }else{    
        
        valElement.classList.remove('hide');
        document.querySelector('input').style.borderColor='red';
        document.querySelector('.error').classList.remove('hide');
    }
});