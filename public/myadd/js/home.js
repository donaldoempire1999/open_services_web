
$('.search_input').click(function (event) {
     $('.searchbar').css("border-radius","30px 30px 0px 0px");
     $('.instant-results').css("border-radius","0px 0px 30px 30px");
   //   $(".instant-results").fadeIn('slow').css('height', 'auto');
     event.stopPropagation();

     var lastsearch = $('.result-bucket');
     lastsearch.empty();
     var arr = JSON.parse(localStorage.getItem("lastsearch"));
     for (var i = arr.items.length; i >=0; i--) {
           var line = '<li class="result-entry"><a href="#" class="result-link"><div class="media"><div class="media-left"><img src="images/Time Machine_32px.png" class="media-object trasfy"></div> <div class="media-body"><span class="last_search">'+arr.items[i]+'</span></div></div></a></li>';                           
           lastsearch.append(line).find('span').addClass("last_search");;
     }


     $('.search_input').on('input',function () {
        console.log($(this).val());
        let query = $('.search_input').val();
        var suggestion = $('ul.result-bucket');
        searchAutocomplete(query,
           function (output) {
              
              suggestion.empty();
              if (output.length > 0) {
                     
                    for (var i = 0; i <= output.length; i++) {
                       let mysuggestion = output[i].task_description;
                       console.log(mysuggestion.title);
                       var line = '<li class="result-entry" style="padding:10px!important;"><a href="#" class="result-link"><div class="media" style="padding-top:0px;"><div class="media-body"><span class="last_search" >'+output[i].task_description.title +'</span></div></div></a></li>';                           
                       // var line = '<li class="result-entry" data-suggestion="Target 3" data-position="2" data-type="type" data-analytics-type="merchant"><a href="#" class="result-link"></a><div class="media"> <div class="media-body" style="text-align:left;"><span>' + output[i].task_description.title + ' </span></div> </div> </a></li>';                           
                       $(".instant-results").fadeIn('slow');
                       suggestion.append(line).find('span').addClass("result_text");
                       $(".instant-results").fadeIn('slow').css('height', 'auto');
                    }
              }
           },
           function (error) {
              // error when getting my pub
              console.log(error);
           }
        );
     });

  });

  $('.search_input').keyup(function (event) {
     if (event.keyCode === 13) {

        console.log("entré");
        let query = $('.search_input').val();
        var stack = new Stack();

        var arr = JSON.parse(localStorage.getItem("lastsearch"));
        if(arr.items.length == 5){
           arr.items.splice(0,1);
        }
        stack.setvalues(arr.items);
        stack.push(query);
        localStorage.setItem("lastsearch",JSON.stringify(stack));
        // window.location.href = "district.php?dist=" + dist;
        window.location.href = "/search_result?"+query;
        $(".instant-results").fadeOut();
     }
  });

  $('body').click(function () {
     $('.searchbar').css("border-radius","30px");
     $(".instant-results").hide();
     $(".instant-results").fadeOut();
  });
