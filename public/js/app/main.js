import {User} from "./classes/user.js"

$(async function (){

   await User.login({phone_number: "+23765810984484",  mdp: "komgu"});
   
});