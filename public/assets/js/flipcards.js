// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".show-next").on("click", function() {
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

  $(".show-again").on("click", function() {
    location.reload();
  });

  $(".show-new").on("click", function() {
    location.href="/";
  });


  $(".change-next").on("click", function() {
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
        // location.reload();
      }
    );
  });


  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();


    // validate form fields
    var fn = $("#fn").val().trim();
    var ln = $("#ln").val().trim();
    var em = $("#em").val().trim();
    if(fn ==="" || ln ==="" || em ==="") {
      alert("All Fields are Required");
      return;
    }

    if( /(.+)@(.+){2,}\.(.+){2,}/.test(em) ){
      // valid email
    } else {
      alert("Valid email is Required");
      return;
    }


    var newEmail = {
      fname: $("#fn").val().trim(),
      lname: $("#ln").val().trim(),
      email: $("#em").val().trim(),
    };

    console.log(newEmail);

    // Send the POST request.
    $.ajax("/api/newslettersignup", {
      type: "POST",
      data: newEmail
    }).then(
      function() {
        console.log("created new email");
        // Reload the page to get the updated list
        location.href="/newsletterthanks";
      }
    );

  });


});





