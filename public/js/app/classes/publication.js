import { convert_date } from "../helpers.js";
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


    static getPublicationsView(publications){
                   
        let view = "";
  
        publications.forEach(function(pub){
          
         view = view + pub.get_view();

         console.log(pub);
           
         });
  
       return view;
      
  
   }

    get_view(){

        return ` <!-- 1-->
        
        <div class="card ">
          <img class="card-img-top" src="images/bg_gradinat.png" alt="Card image cap">
          <div class="card-body">
           <h5 class="card-title">${this.task_description.title}</h5>
           <p class="card-text">${this.task_description.description}</p>
         </div>
         
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Delai time:  ${convert_date(this.task_description.period.start_date)} - ${convert_date(this.task_description.period.end_date)} </li>
           <li class="list-group-item">Point: ${this.task_description.points}</li>
           <li class="list-group-item">Priority: ${this.task_description.priority}</li>
           <li class="list-group-item"> Followers: ${this.followers.length}</li>
           <li class="list-group-item"> Likes: ${this.likes}</li>
           <li class="list-group-item"> Statut :${this.state}</li>       
         </ul>
         
         <div class="card-body">
           <a href="#" class="card-link"><button class="btn btn-info">Close</button></a>
           <a href="#" class="card-link"><button class="btn btn-info">Candidates</a>
         </div>

          <div class="card-footer">
            <small class="text-muted">publicated at  ${convert_date(this.publication_date)}</small>
          </div>
        </div> <br>`
      
       }

 
}
