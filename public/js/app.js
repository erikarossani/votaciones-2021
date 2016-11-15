$(document).ready(function(){


    var ingresoDatos=function(response){
        var nombre = $("#nombre").val();
        var dni =$("#dni").val();

    if (nombre && dni) { 
        
      $.ajax({
        type: "GET",
        url: "http://localhost:3002/demo.json", // URL of the Perl script
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        // script call was *not* successful
        error: function(error, textStatus, errorThrown) { 
          $('#loginResult').text("responseText: " + error.responseText 
            + ", textStatus: " + textStatus 
            + ", errorThrown: " + errorThrown);
          $('v#loginResult').addClass("error");
        }, // error 
        // script call was successful 
        // data contains the JSON values returned by the Perl script
        success: function(data){
            var filtrar= $.grep(data, function(element, demo){
                return element.nombre && element.dni;

            });

          if (data.error) { // script returned error
            $('#loginResult').text("data.error: " + data.error);
            $('#loginResult').addClass("error");
          } // if
          else { // login was successful
            $('form#loginForm').hide();
            $('#loginResult').text("data.success: " + data.success 
              + ", data.userid: " + data.userid);
            $('#loginResult').addClass("success");
          } //else
        } // success
      }); // ajax
    } // if
    else {
      $('#loginResult').text("No se encuentra el base de datos");
      $('#loginResult').addClass("error");
    } // else
    $('#loginResult').fadeIn();
    return false;
    };

    $("#boton").click(ingresoDatos);


});


   