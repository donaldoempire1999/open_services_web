import {User} from "./classes/user.js";

$(function () {

    //registration
    $("#Form_account").on('submit', async function (e) {
       e.preventDefault();
       alert(this);
       let formdata = new FormData(e.target);
       formdata = Object.fromEntries(formdata.entries());
       formdata = JSON.stringify(formdata);
       console.log(formdata);
       let response = await access("/users/signup", 'POST', formdata);
       
 
    });
 })
 
 