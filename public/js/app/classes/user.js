import { request } from "../acess.js"

import { get_entry } from "../helpers.js";

import { Publication } from "./publication.js";

export class User {

    _id = "";
    
    category = {type_user: "",  role: "" }
    
    person = { first_name: "", second_name: "", birthday: ""}
    
    entreprise = { name: "", creation_date:""}
    
    status= "";
    
    address = { country: "",region: "", city: "", quarter: ""}

    image_url = ""

    mdp = ""

    email = ""

    phone_number = ""

    cv = { bio: "", title: "", jobs: [], extra: []};

    __v = 0;

    token = ""

    // Les publications de l'utilisateur
    publications = [];

    //Les contrats de l'utilisateur
    contracts = [];

    async setPublications(){

        try {

            let response = await request("/publications"  , "GET", undefined , this.token);
        
            let data = await response.json();

            data.publications.forEach(item => {

                let pub = new Publication();
                
                for(let entry in item){
    
                    pub[entry] =  get_entry(item , entry);
                
                };

                this.publications.push(pub);
            
            });
            
        } catch (error) {
            
        
            console.log(error);
        
        }
        
    }



    
    setRow(label , value){

        return `<tr> <td> ${label} </td> <td> ${value} </td> 
        
        <td><button class="btn btn-primary" style="size: 5px;"><i class="fa fa-pencil"></i></button></td> </tr> `
     
     }


    getCategoryView(){

        return this.setRow("Type Utilisateur", this.category.type_user).concat(this.setRow("Role", this.category.role))
  
     }



     getPersonView(){

        if(this.person.first_name === " "){
            return " "
        }

        return this.setRow("First Name" , this.person.first_name)
         
            .concat(this.setRow("Second Name" , this.person.second_name))

             .concat(this.setRow("Birth Day" , this.person.birthday));
        
        
     }


      getEntrepriseView(){

        if(this.entreprise.name === ""){
            return " "
        }
       
        return this.setRow("Entrprise Name" , this.entreprise.name)
          
              .concat(this.setRow("Creation Date" , this.entreprise.creation_date));
     
      }

      getAddressView(){
    
        return this.setRow("Country", this.address.country)
        
             .concat(this.setRow("Region", this.address.region))

                  .concat(this.setRow("City", this.address.city))
                   
                      .concat(this.setRow("Quarter", this.address.quarter));

       }


    getProfileView(){
    
        let body_table = "";

        body_table = body_table.concat(this.getCategoryView())
        
            .concat(this.getPersonView())
          
              .concat(this.getEntrepriseView())

                .concat(this.getAddressView())

                   .concat(this.setRow("Email" , this.email))
                    
                     .concat(this.setRow("Numero de telephone" , this.phone_number));

        
                     return `<table class="table"> ${body_table} </table>`;
    
    }


    static async get_user(_id){

        let response = await request(`/users/${_id}`,"GET");

        if(response.status === 200){

            let data = await response.json();

            data = data.user; // les donn??ees concernant l'utilisateur
        
            let user = new User();
    
            for(let entry in data){
    
                user[entry] =  get_entry(data , entry);
            
            }
    
            return user;

        }else{

            return null
        }
    }



    static async login (form_data){

     
            let error = null;
        

            try{
                    
                    let response = await request("/users/login","POST",form_data);

                    let data = await response.json();

                    if(!data.error){

                        // Ici mettons la token et l'user id dans une local storage session
                        localStorage.setItem("token", data.token);
                        localStorage.setItem("userId", data.userId)

                    }else{
                        error = data.error;
                    }

                

            }catch(error){

                console.log(error.toString());
            
            }finally{
            
                return error;
            
            }

        }
    
    static async signup(form_data_signup){

        let result = {

            message: null, 
            error: null
        
        }
        
        try{


                let response = await request("/users/signup","POST",form_data_signup);       
              
                let data =  await response.json();

                if(data.message){

                    result.message = data.message;
                
                }else {

                    result.error = data.error

                
                }
            
            }catch(error){

            
                console.log(error.toString());
            
            }finally {

                return result;
            
            }

        }

}