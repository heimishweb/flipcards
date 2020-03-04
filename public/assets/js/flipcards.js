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

  
 });
