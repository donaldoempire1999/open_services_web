var mydata;
var url = "http://open-services-api.herokuapp.com";


// =================== Requete get =============================== 

function getUsers(handleSuccess){
     $.ajax({
        url: url+"/users/",
        contentType: "application/json",
        async: true,
        dataType: 'json',
        success: function(result){
            console.log("function called successfully");
            handleSuccess(result);
        }
    });
};

function getOneUser(id,handleSuccess){
     $.ajax({
        url: url+"/users/"+id,
        contentType: "application/json",
        async: true,
        dataType: 'json',
        success: function(result){
            console.log("function called successfully");
            handleSuccess(result);
        }
    });
};

function getAllPublication(handleSuccess){
     $.ajax({
        url: url+"/publications/all",
        contentType: "application/json",
        async: true,
        dataType: 'json',
        success: function(result){
            console.log("function called successfully");
            handleSuccess(result);
        }
    });
};

function getMyPublications(handleSuccess){
    console.log('enter my pub');
     $.ajax({
        url: url+"/publications/",
        contentType: "application/json",
        async: true,
        dataType: 'json',
        success: function(result){
            console.log("function called successfully");
            handleSuccess(result);
        }
    });
};

function getOnePublication(id,handleSuccess){
     $.ajax({
        url: url+"/publications/"+id,
        contentType: "application/json",
        async: true,
        dataType: 'json',
        success: function(result){
            console.log("function called successfully");
            handleSuccess(result);
        }
    });
};


// =================== Requete post =============================== 
function login(phone,pass,handleSuccess,handlerror){
    $.ajax({
       type: 'POST',
       url: url+"/users/login",
       contentType: "application/json",
       async: true,
       data: JSON.stringify({
            phone_number: phone,
            mdp: pass
        }),
       dataType: 'json',
       success: function(result){
           console.log("function called successfully");
           handleSuccess(result);
       },
       error: function(error){
           console.log("something went worng during connection");
           handlerror(error);
       }
   });
};

function singUp(handleSuccess,handlerror){
    $.ajax({
       type: 'POST',
       url: url+"/users/signup",
       contentType: "application/json",
       async: true,
       data:JSON.stringify({
        "category": {
            "type_user": "moral",
            "role": "provider"
        },
        "address": {
            "country": "Cameroun",
            "region": "Littoral",
            "city": "Edéa",
            "quarter": "Quartier Gare"
        },
        "entreprise": {
            "name": "Entrerpise Krisolink"
        },
        "cv": {
            "bio": "Future in Adwance",
            "title": "Mon cv",
            "jobs": [],
            "extra": []
        },
        "register_date": "2021-07-19T15:24:19.489Z",
        "mdp": "yagami_light",
        "contracts": [],
        "publications": [],
        "email": "yagami213@gmail.com",
        "phone_number": "+2245412810",
        }),
       dataType: 'json',
        success: function(result){
            console.log("function called successfully");
            handleSuccess(result);
        },
        error: function(result){
            console.log("something went wrong when adding new user");
            handlerror(result);
        },
   });
};

function newPublication(id,handleSuccess,handlerror){
    console.log('enter new pub');
    $.ajax({
       type: 'POST',
       url: url+"/publications/",
       contentType: "application/json",
       async: true,
       data:JSON.stringify({
           "author":{
                "$oid": id
            },
            "likes": "1",
            "priority": "1",
            "medias": [],
            "comments": [],
            "task_description": {
                "title": "Search for a NodeJs Architect",
                "difficulty": "medium",
                "description": "Code a whole db graph",
                "points": "25",
                "base_amount": "250000",
                "period": {
                    "start_date": "2021-04-19T15:24:19.489Z",
                    "end_date": "2021-06-19T15:24:19.489Z"
                },
            },
            "followers": [],
            "state": "open",
        }),
       dataType: 'json',
        success: function(result){
            console.log("function called successfully");
            handleSuccess(result);
        },
        error: function(result){
            console.log("something went wrong when adding new publication");
            handlerror(result);
        },
   });
};


function searchFaceted(text,handleSuccess,handlerror){
    $.ajax({
       type: 'POST',
       url: url+"/search/faceted",
       contentType: "application/json",
       async: true,
       data: JSON.stringify({
            query_string: text,
            collection : "publications"
        }),
       dataType: 'json',
       success: function(result){
           console.log("function called successfully");
           handleSuccess(result);
       },
       error: function(error){
           console.log("something went worng with search facet");
           handlerror(error);
       }
   });
};

function searchAutocomplete(text,handleSuccess,handlerror){
    $.ajax({
       type: 'POST',
       url: url+"/search/autocomplete",
       contentType: "application/json",
       async: true,
       data: JSON.stringify({
            query_string: text,
            collection : "publications"
        }),
       dataType: 'json',
       success: function(result){
           console.log("function called successfully");
           handleSuccess(result);
       },
       error: function(error){
           console.log("something went worng with search autocomplete");
           handlerror(error);
       }
   });
};

