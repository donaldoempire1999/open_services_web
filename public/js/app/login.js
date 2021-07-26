import {User} from "./classes/user.js";

$(async function(){

    $("#nForm").on('submit', async function (e) {
        e.preventDefault();
        alert(this);
        let formdata = new FormData(e.target);
        formdata = Object.fromEntries(formdata.entries());
        //formdata = JSON.stringify(formdata);
        console.log(formdata);

        let result = await User.login(formdata);
        if(result.error){
            alert(result.error);
        }else{
            
            document.location.href = "/profile";
        }

    });

    $("#btn_out").on('click', async function(e){
        localStorage.removeItem("profile_view");
        document.location.href = "/";
    })
})
