const nameInput=document.querySelector("#name");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const contactno=document.querySelector("#contactno");
const message=document.querySelector("#message");
const success=document.querySelector("#success");
const errorNodes=document.querySelectorAll(".error");

function validateForm()
{
    clearMessages();
    let errorFlag=false;
    if(nameInput.value.length<4)
    {
    errorNodes[0].innerText="Name cannot be blank";
    errorFlag=true;
    }
    if(!emailIsValid(email.value))
    {
        errorNodes[1].innerText="Invalid email ";
        errorFlag=true;
    }
    if(!passwordIsValid(password.value))
        {
           errorNodes[2].innerText="Invalid password" ;
           errorFlag=true
         }
     
    if(contactno.value.length !==10)
    {
        errorNodes[3].innerText="Contact number should be 10 digit";
        errorFlag=true;
    }
    if(message.value.length<10)
    {
    errorNodes[4].innerText="Please Enter Proper Message";
    errorFlag=true;
    }
    if(errorFlag == false)
    {
        success.innerHTML="FormValidation Successful";
        nameInput.value="";
        email.value="";
        password.value="";
        contactno.value="";
        message.value="";
        
    }
}
function clearMessages()
{
for(let i=0; i < errorNodes.length; i++)
{
    errorNodes[i].innerText =" ";
}
    success.innerText.value =" ";
    
}

function emailIsValid(email)
{
let pattern=/\S+@\S+\.\S+/;
return pattern.test(email);
}
function passwordIsValid(password)
{
    let pattern=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return pattern.test(password);

}   
