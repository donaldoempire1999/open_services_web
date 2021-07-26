export const request =  async (url , method , body = {} , token) => {

        let headers = new Headers(); 
        
        headers.append("Accept" , "application/json");
                
        if(token) headers.append("Authorization" , `Bearer ${token}`);
    
        let options = { method: method , cache: 'default', headers: headers};

        if(method === "POST") options["body"] = body;

        console.log(options);
            
        return await fetch(`https://open-services-api.herokuapp.com${url}` , options);
          
  
}