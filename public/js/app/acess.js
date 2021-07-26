export const request =  async (url , method , body = {} , token) => {

        let headers = new Headers();

        headers.set("Accept" , "json");

        if(token) headers.set("Authorization" , `Bearer ${token}`);
    
        let options = { method: method , cache: 'default', headers: headers};

        if(method === "POST") options["body"] = body;
            
        return await fetch(`https://open-services-api.herokuapp.com${url}` , options);
          
  
}