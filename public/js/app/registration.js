import {User} from "./classes/user.js";

$(function () {

    //registration
    $("#Form_account").on('submit', async function (e) {
       e.preventDefault();
       let formdata = new FormData(e.target);
       formdata = Object.fromEntries(formdata.entries());
       //formdata = JSON.stringify(formdata);
       console.log(formdata);
       //let response = await access("/users/signup", 'POST', formdata);

       let result = await User.signup(formdata)
        if(result.message !== null){
            
            alert(result.message)
            document.location.href = "/";
        }else{  
        
            console.log(result.error);  
        }
 
    });
 })
 
 