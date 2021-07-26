import {User} from "./classes/user.js"

$(async function (){

    alert("Bonjour");

   let user = await User.login({phone_number: "+23765810984484",  mdp: "komgu"});
   
   console.log(user);

});