// login
let nForm = document.getElementById("nForm");

nForm.addEventListener('submit', async function (e) {

   e.preventDefault();

   let phone_number = e.target.phone_number.value;
   let mdp = e.target.mdp.value;
   let object = JSON.stringify({
      "phone_number": phone_number,
      "mdp": mdp
   });
   try {

      let response = await fetch("https://open-services-api.herokuapp.com/users/login", {
         method: 'POST',
         body: object,
         headers: {
            "Content-Type": "application/json",
         },
      })

      let data = await response.json();

      if (response.status === 400) {
         console.log(data.error);
      }
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('Token', data.token);
      document.location.href = "profile.html"
      console.log(response);
   } catch {
      console.log(error);
   }

});

//Log out
let out = document.getElementById("btn_out");

out.addEventListener('click', function (e) {

   //alert("je log out");
   localStorage.removeItem('userId', data.userId);
   document.location.href = "index.html";
});