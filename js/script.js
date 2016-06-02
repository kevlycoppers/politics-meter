$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var gun = $("#gun").val();
    var marijuana = $("#marijuana").val();
    var education = $("#education").val();
    var values;

    if (gun === "against" && marijuana === "against" && education === "against"){
      values = "Very Conservative";
    }
    else if (gun === "against" && marijuana === "against" && education === "for"){
      values = "Conservative";
    }

    else if (gun === "against" && marijuana === "for" && education === "against"){
      values = "Conservative";
    }
    else if (gun === "for" && marijuana === "against" && education === "against"){
      values = "Conservative";
    }
    else if (gun === "for" && marijuana === "for" && education === "against"){
      values = "liberal";
    }
    else if (gun === "against" && marijuana === "for" && education === "for"){
      values = "liberal";
    }
    else if (gun === "for" && marijuana === "against" && education === "for"){
      values = "liberal";
    }
    else{
      values = "very liberal";
    }
    $(".name").text(values);
    $("#paragraph").show();
    event.preventDefault();
  });
});
