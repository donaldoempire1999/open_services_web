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



    static async login (form_data_login){
          
        let response = await request("/users/login","POST",form_data_login);

        let data = await response.json();

        if(!data.error){

            let user = await this.get_user(data.userId);
            user.token = data.token;
            return user;

         }

         return data.error;

    }
    
    static async signup(form_data_signup){

        let response = await request("/users/signup","POST",form_data_signup);
        
        return await response.json();
    
    }

}