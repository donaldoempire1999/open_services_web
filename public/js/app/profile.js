import {User} from "./classes/user.js";

$(async function () {
    let user_profile = localStorage.getItem("profile_view");
   

    let div_content = document.getElementById("tb_profile");//rediriger vers le fichier profile.html a la div front_profile
    div_content.innerHTML = user_profile;
});