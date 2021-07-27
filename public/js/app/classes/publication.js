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
   
        return `<div class="card border-light text-white bg-success mb-3" style="max-width: 18rem;">
            
                      <div class="card-header">Publication</div>
        
                           <div class="card-body">
          
                                <h5 class="card-title">${this.task_description.title}</h5>

                                <p class="text" style="color: white;"> Base Amount: ${this.task_description.base_amount} FCFA </p>

                                <p class="text" style="color: white;"> Status:${this.state} </p>

                                <p class="text" style="color: white;"> Points: ${this.task_description.points} </p>

                                <p class="text" style="color: white;"> Priority: ${this.task_description.priority} </p>

                                <p class="card-text" style="color: white;">Description: ${this.task_description.description}.</p>
                
                          </div>
      
                    </div>
                    
                </div>`;
   
       }

 
}
