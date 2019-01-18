$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = !$(this).data("newdevour");
  
      var newDevourState = {
        devoured: newDevour
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devoured to", newDevour);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      console.log("here");
      event.preventDefault();
  
      var newDevour = {
        name: $("#burger").val().trim(),
        devoured: 0
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newDevour
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });
  