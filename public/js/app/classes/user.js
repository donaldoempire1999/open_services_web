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
    publications = [Publication];

    //Les contrats de l'utilisateur
    contracts = [];

    
    setRow(label , value){

        return `<tr> <td> ${label} </td> <td> ${value} </td> 
        
        <td><button class="btn btn-primary" style="size: 5px;"><i class="fa fa-pencil"></i></button></td> </tr>`
     
     }


    getCategoryView(){

        return this.setRow("Type Utilisateur", this.category.type_user).concat(this.setRow(this.category.role))
  
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
        
             .concat(this.setRow("Region", this.address.region)).concat(this.setRow(""))

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

        
                     return `<table> ${body_table} </table>`;
    
    }


    static async get_user(_id){

        let response = await request(`/users/${_id}`,"GET");

        if(response.status === 200){

            let data = await response.json();

            data = data.user; // les donnéees concernant l'utilisateur
        
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

        let result = {
            user: new User(),
            error: null
        }

        try{
                
                let response = await request("/users/login","POST",form_data);

                let data = await response.json();

                if(!data.error){

                    let user = await this.get_user(data.userId);
                    
                    user.token = data.token;

                    // Ici on met l'utilisateur courant dans la session en cours
                    //sessionStorage("current_user", user);
                    
                    result.user = user;

                }else{
                     result.error = data.error;
                }

               

        }catch(error){

            console.log(error.toString());
        
        }finally{
        
            return result;
        
        }

    }
    
    static async signup(form_data_signup){

        let response = await request("/users/signup","GET",form_data_signup);
        
        return await response.json();
    
    }


}