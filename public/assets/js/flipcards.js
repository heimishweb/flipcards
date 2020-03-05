// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".show-next").on("click", function(event) {
    var id = $(this).data("id");

    console.log("id selected: ", id);

    var nextid = id + 1;
    var divname = "#rw";

    newid = divname + nextid;
    oldid = divname + id;

    console.log("newid: ", newid);
    console.log("oldid: ", oldid);

     
    $(oldid).hide();     
    $(newid).show();     
    
  });


  $(".show-again").on("click", function(event) {
    location.reload();  
    
  });


 

   



  $(".change-next").on("click", function(event) {
    var id = $(this).data("id");

    console.log("id selected", id);

    id = id + 1;
    console.log("id selected", id);
    
    var newFlipcardState = {
      id: id
    };

    // Send the PUT request.
    $.ajax("/api/flipcards/" + id, {
      type: "GET",
      data: newFlipcardState
    }).then(
      function() {
        console.log("next question: ", newFlipcardState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".create-form").on("submit", function(event) {
  //   // Make sure to preventDefault on a submit event.
  //   event.preventDefault();
    
  //   var newFlipcard = {
  //     flipcard: $("#bu").val().trim(),
  //     devoured: 0
  //   };

  //   // Send the POST request.
  //   if($("#bu").val().trim() !="" )  // added to prevent empty subbmissions
  //   {
  //     $.ajax("/api/flipcards", {
  //       type: "POST",
  //       data: newFlipcard
  //     }).then(
  //       function() {
  //         console.log("created new Flipcard");
  //         // Reload the page to get the updated list
  //         location.reload();
  //       });
  //   }
  //   else {
  //       location.reload();
  //   }

  // });

  // var settings = {
  //   "async": true,
  //   "crossDomain": true,
  //   "url": "https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true",
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-host": "numbersapi.p.rapidapi.com",
  //     "x-rapidapi-key": "001df8cadcmsha73da3732d7cba9p10579bjsn40db637f4980"
  //   }
  // }
  
  // $.ajax(settings).done(function (response) {
  //   console.log("resp",response);

  //   var newRow = $(`<h4>${response.text} (${response.year})</h4>`);
  //   $("#funfacts").append(newRow);  

  // });







  
 });
