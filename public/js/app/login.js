import {User} from "./classes/user.js";

$(async function(){
    
    $("#nForm").on('submit', async function (e) {
        e.preventDefault();
        
        let formdata = new FormData(e.target);
        formdata = Object.fromEntries(formdata.entries());
        
        console.log(formdata);

        let error = await User.login(formdata);
        if(error){
            alert(result.error);
        }else{
            document.location.href = "/profile";
        }

    });

    $("#btn_out").on('click', async function(e){
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        document.location.href = "/";
    });
})
