let home = async () => {

   let response = await fetch("https://open-services-api.herokuapp.com/");
   let data = await response.json()
   console.log(data)
}  

home();