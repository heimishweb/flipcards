// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");

    console.log("id selected", id);
    
    var newFlipcardState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/flipcards/" + id, {
      type: "PUT",
      data: newFlipcardState
    }).then(
      function() {
        console.log("changed devoured to", newFlipcardState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    var newFlipcard = {
      flipcard: $("#bu").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    if($("#bu").val().trim() !="" )  // added to prevent empty subbmissions
    {
      $.ajax("/api/flipcards", {
        type: "POST",
        data: newFlipcard
      }).then(
        function() {
          console.log("created new Flipcard");
          // Reload the page to get the updated list
          location.reload();
        });
    }
    else {
        location.reload();
    }

  });

  
});
