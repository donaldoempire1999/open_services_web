import {User} from "./classes/user.js";

import {Publication} from "./classes/publication.js";


$(async function () {

    let user;

    let div_content = document.getElementById("tb_profile");
    
    let publications_div = document.getElementById("tb_pub");

    let load_user = async (userId , token) => {

        user = await User.get_user(userId);              
        
        user.token = token;
        
        await user.setPublications();

        div_content.innerHTML = user.getProfileView();

        let publications = user.publications;

        let view  = Publication.getPublicationsView(publications);

        publications_div.innerHTML = view;

    }

    load_user(localStorage.getItem("userId") , localStorage.getItem("token"));



});