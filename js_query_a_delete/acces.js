function access( url , method , body) {

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

export {access};