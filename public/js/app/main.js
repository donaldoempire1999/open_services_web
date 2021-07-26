import {User} from "./classes/user.js"

$(async function (){

   let result = await User.login({phone_number: "+237658371154",  mdp: "donaldo2019"});

   if(result.error){

       console.log(result.error);
    
    }else{

        let user = result.user;

        console.log(user);

        alert(user.getProfileView());

    }

});