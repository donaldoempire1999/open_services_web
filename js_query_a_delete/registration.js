$(function () {

   async function access(url, method, body) {

      try {

         return await fetch(`https://open-services-api.herokuapp.com${url}`, {
            method: method,
            body: body,
            headers: {
               "Content-Type": "application/json",
            },
         })

      } catch (e) {
         return e;
      }
   }
   //registration
   $("#Form_account").on('submit', async function (e) {
      e.preventDefault();
      alert(this);
      let formdata = new FormData(e.target);
      formdata = Object.fromEntries(formdata.entries());
      formdata = JSON.stringify(formdata);
      console.log(formdata);
      let response = await access("/users/signup", 'POST', formdata);
      let data = await response.json();
      console.log(response);
      console.log(data);

   });
})

