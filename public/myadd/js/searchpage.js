
var resultats=false;

$(document).ready(function () {
    var resultats=false;
    var query = window.location.search;
    console.log(query);
 
    const urlparam = new URLSearchParams(query);
    let query_string = urlparam.get('query');
    console.log(query_string);
    $('.search_input').prop('value', query_string);
    searchfacet(query_string);
});


function searchfacet(quer) {
    let query = quer;
    var publications = $('ul.features-left');
    $('ul.features-left').empty();
    $('.search_input').blur();
    var t0 = performance.now();
    
    searchFaceted(query,
        function (output) {
            let taille = output.length;
            console.log(output);
            if (output.length > 0) {
                var t1 = performance.now();
                for (var i = 0; i <= output.length; i++) {
                    let state = output[i].state;
                    let pub = output[i].task_description;
                    // console.log(state);
                    // console.log(pub.title);
                    // console.log(pub.description);
                    // console.log(pub.period.end_date);
                    date1 = new Date(pub.period.end_date)
                    var date = date1.getDate();
                    var month = date1.getMonth() + 1; 
                    var year = date1.getFullYear();
                    var dateStr = date + "/" + month + "/" + year;
                    var line = '<li class="col-md-8 result-pub" style="padding-left: 5px;"><div class="media"><div class="media-body"><h5 class="mt-0">' + pub.title + '</h5><span class="pub-info">statut:</span> <span class="badge badge-info" style="padding: 5px;">' + state + '</span><span class="pub-info"> Job end date: </span> <span class="badge badge-info" style="padding: 5px;">' + dateStr + '</span><p>' + pub.description + '</p><span style="display: none;">' + output[i]._id + '</span></div></div></li>';
                    $("small#eval_exec").show();
                    $("span#nb_result").text(taille);
                    $("span#time_exec").text(""+ ((t1 - t0)/1000) + "");
                    publications.append(line);
                    $("li.result-pub span").last().addClass('pubid');
                }
            }
        },
        function (error) {
            // error when getting my pub
            console.log(error);
        }
    );

}



$('.search_input').click(function (event) {
    
    event.stopPropagation();

    $('ul.result-bucket').empty();

    $('.search_input').keyup(function () {
        console.log("autocomplete statrt 1");
        delay(function () {
            let query = $('.search_input').val();
            var suggestion = $('ul.result-bucket');
            searchAutocomplete(query,
                function (output) {
                    console.log(output);
                    console.log("autocomplete statrt 2");
                    // if(!resultats){
                        $(".instant-results").fadeIn('slow');
                    // }
                    suggestion.empty();
                    if (output.length > 0) {
                        for (var i = 0; i <= output.length; i++) {
                            let mysuggestion = output[i].task_description;
                            // console.log(mysuggestion.title);
                            var line = '<li class="result-entry" data-suggestion="Target 3" data-position="2" data-type="type" data-analytics-type="merchant"><a href="#" class="result-link"></a><div class="media"> <div class="media-body" style="text-align:left;"><span>' + output[i].task_description.title + ' </span></div> </div> </a></li>';                           
                            suggestion.append(line).find('span').addClass("result_text");
                        }
                    }
                },
                function (error) {
                    // error when getting my pub
                    console.log(error);
                }
            );
            
        }, 40);
    });

});


$('.search_input').keyup(function (event) {
    if (event.keyCode === 13) {
        let query = $('.search_input').val();
        $('.search_input').blur();
        window.location.href = "/search_result?query="+query;
    }
});

// $('.search_input').on('input', function () {
        
//     let query = $('.search_input').val();
//     var suggestion = $('ul.result-bucket');
//     searchAutocomplete(query,
//         function (output) {
//             if (!resultats) {
//                 $(".instant-results").fadeIn('slow');
//             }

//             suggestion.empty();
//             if (output.length > 0) {
//                 for (var i = 0; i <= output.length; i++) {
//                     let mysuggestion = output[i].task_description;
//                     // console.log(mysuggestion.title);
//                     var line = '<li class="result-entry" data-suggestion="Target 3" data-position="2" data-type="type" data-analytics-type="merchant"><a href="#" class="result-link"></a><div class="media"> <div class="media-body" style="text-align:left;"><span>' + output[i].task_description.title + ' </span></div> </div> </a></li>';
//                     suggestion.append(line).find('span').addClass("result_text");
//                 }
//             }
//         },
//         function (error) {
//             // error when getting my pub
//             console.log(error);
//         }
//     );


// });

// $(document).on('click', 'li.result-pub', function() {
//     console.log('Affichage des detail de la publication');
//     $("li.result-pub").removeClass("pub_item");
//     $(this).addClass("pub_item");
//     let pub_id= $("span.pubid").text();
//     getOnePublication(pub_id,function(output){
//         console.log(output);
//         console.log(output.publications[0]);
//         let pub= output.publications[0];
//         let title = pub.task_description.title;
//         let state = pub.state;
        
//         let end_date= pub.task_description.period.end_date;
//         let deb_date= pub.task_description.period.start_date;
//         let user_id = pub.author;

//         getOneUser(user_id,function(output){
//             console.log(output);
//             user = output.user;
//             let bio = user.cv.bio;
//             let address = user.address.country+' - '+user.address.region+' - '+user.address.city;
//             console.log(address);
//             console.log(deb_date);
//             date1 = new Date(deb_date);
//             date2 = new Date(end_date);
//             console.log(end_date);
//             $("h5#cr_title").text(title);
//             $("p.cr_bio").text(bio);
//             $("p#cr_miss").text( pub.task_description.description);
//             $("span#cr_deb_time").text(date1.toString());
//             $("span#cr_fin_time").text(date2.toString());
//             $("span#cr_loc").text(address);
//             $("div.publication").fadeIn(500);
//         });

        
//     });
   
// });




