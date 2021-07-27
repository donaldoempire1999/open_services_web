import {User} from "./classes/user.js";

import {Publication} from "./classes/publication.js";
import { request } from "./acess.js";


$(async function () {

    let user;

    let token = localStorage.getItem("token")

    let user_id = localStorage.getItem("userId");

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

   
    await load_user(user_id , token);


    $("#Form_media").on("submit" , async function(e) {

        e.preventDefault();

        let formdata = new FormData(e.target);
        
        formdata = Object.fromEntries(formdata.entries());       
        
        let response = await request("/publications", "POST", formdata , user.token);

        console.log(response);

        let data = await response.json();

        if(data.message) {

            await load_user(user_id , token );

            alert(" Publication Bien enregistrée !!! ")

        }else{

            console.log(data.error);
        
        }        
      });



});