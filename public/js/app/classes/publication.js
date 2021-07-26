import { get_entry } from "../helpers.js";

export class Publication {

    _id = "";
    task_description = {};
    likes = 0;
    followers = {};
    state = "";
    author = "";
    medias = [];
    comments = [];
    __v = 0;


    static async get_publication_by_id(_id){

        let response = await request(`/publications/${_id}`,"GET");

        if(response.status === 200){

            let data = await response.json();

            data = data.publication; // les donnéees concernant l'utilisateur
        
            let publication = new Publication();
    
            for(let entry in data){
    
                publication[entry] =  get_entry(data , entry);
            
            }
    
            return publication;

        }else{

            return null
        }
     }
 }

