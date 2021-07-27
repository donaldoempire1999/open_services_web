
var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();


function sendtoken() {
    $.ajaxSetup({
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('usertoken'));
        }
    });
}

function api_connect(){
     login("+2245432810","kyria_life",
        function(output){
            // here you use the output 
            console.log(output);

            // setting the token in session
            console.log(output.token)
            sessionStorage.setItem('usertoken',output.token);

            // keep userid in localstorage
            localStorage.setItem('userId', output.userId);   
        },
        function(error){
            // here is the error
            console.log(error);
        }
    );
}

$(document).ready(function () {

    if (sessionStorage.getItem('usertoken') != null) {
        sendtoken();
    }
    else{
        api_connect();
        
    }

    var stack = new Stack();

    
    if(localStorage.getItem("lastsearch")==undefined){
        var stack = new Stack();
        localStorage.setItem("lastsearch",JSON.stringify(stack));
    }

});

$('body').click(function () {
    $(".instant-results").fadeOut('500');
});

$(document).on('click', 'li.result-entry', function() {
    let input = $(this).find("span").text();
    
    $('.search_input').prop('value', input);
    $('.search_input').focus();
    $(".instant-results").fadeOut();
    console.log(input);
});



/*
* ce dont j'ai besoin
    0- comment ajouter le token dans le header
    1- schema de data par defaut pour la creation d'un nouve utilisateur //ajoutéé
    2- pareil pour une nouvelle publication //ajouté
    3- gerer les venement qui vont declenceher l'appel des differents func
*/
