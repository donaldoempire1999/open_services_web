import { get_entry } from "../helpers.js";

export class Contrat {

    _id = "";
    resqueter = localStorage.getItem(userId);
    provider = sessionStorage.getItem(userId);
    publication = "";
    agree_state = {};
    provider_state = {};
    task = "";
    close = "";
    
    static async get_contrat(){

        let response = await request(`/contract/`,"GET");
        console.log(response);
        if(response.status === 200){

            let data = await response.json();

            data = data.contrat; //les informations du contrat
            console.log(data);
            let contrat = new Contrat();
    
            for(let entry in data){
    
                contrat[entry] =  get_entry(data , entry);
            
            }
            console.log(contrat);
            return contrat;

        }else{

            return null
        }
     }

     static async get_contrat_by_id(_id){

        let response = await request(`/contract/${_id}`,"GET");
        console.log(response);
        if(response.status === 200){

            let data = await response.json();

            data = data.contrat; //les informations du contrat
            console.log(data);
            let contrat = new Contrat();
    
            for(let entry in data){
    
                contrat[entry] =  get_entry(data , entry);
            
            }
            console.log(contrat);
            return contrat;

        }else{

            return null
        }
     }
 }