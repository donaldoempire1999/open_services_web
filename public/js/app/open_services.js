/* let home = async () => {

   let response = await fetch("https://open-services-api.herokuapp.com/");
   let data = await response.json()
   console.log(data)
}
// home();


// login
const nForm = document.getElementById("nForm");

nForm.addEventListener('submit', function (e) {

   e.preventDefault();

   const formData = new FormData(this);
   const searchParams = new URLSearchParams();

   for (const pair of formData){
      searchParams.append(pair[0], pair[1])
   }

   fetch("https://open-services-api.herokuapp.com/login", {
      method: 'post',
      body: searchParams
   }).then(function (response) {
      return response.text()
   }).then(function text() {
      console.log(text)
   }).catch(function (error) {
      console.error(error)
   })

});

//registration
const rForm = document.getElementById("rForm");

nForm.addEventListener('submit', function (e) {

   e.preventDefault();

   const rformData = new FormData(this);
   const searchParams = new URLSearchParams();

   for (const pair of rformData){
      searchParams.append(pair[0], pair[1])
   }

   fetch("https://open-services-api.herokuapp.com/signup", {
      method: 'post',
      body: searchParams
   }).then(function (response) {
      return response.text()
   }).then(function text() {
      console.log(text)
   }).catch(function (error) {
      console.error(error)
   })

});
*/

/* login 
let login = async () => {
   let response = await fetch("https://open-services-api.herokuapp.com/login");
   login.method = "POST"
   body: JSON.stringify(newUsers)
   let data = await response.json()
   console.log(data)
}

login();
*/
/* Registration 
let create_account = async () => {
   let response = await fetch("https://open-services-api.herokuapp.com/subscribe");
   method: "post"
   let data = await response.json()
   console.log(data)
}
create_account();
*/