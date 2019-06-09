$(function() {
    $("#name_error_message").hide();
    $("#user_error_message").hide();

    var error_nombre = false;
    var error_username = false;


    $("#nombres").focusout(function() {
        check_nombres();
    });
    $("#username").focusout(function() {
        check_username();
    });

    function check_nombres() {
        var pattern = /^[a-zA-Z ]*$/;
        var nombres = $("#nombres").val();
        if (pattern.test(nombres) && nombres !== '') {
            $("#name_error_message").hide();
            $("#nombres").css("border-bottom", "1px solid #49454567");
        } else {
            $("#name_error_message").html("<p style='font-size:13px;'>El nombre no debe incluir números</p>");
            $("#name_error_message").show();
            $("#nombres").css("border-bottom", "1px solid #F90A0A");
            error_nombre = true;
        }
    }

    function check_username() {
        var pattern = /^[a-z0-9.]*$/;
        var username = $("#username").val();
        if (pattern.test(username) && username !== '') {
            $("#user_error_message").hide();
            $("#username").css("border-bottom", "1px solid #49454567");
        } else {
            $("#user_error_message").html("<p style='font-size:13px;'>El nombre no debe incluir letras mayúsculas o caracteres que no sean (.)</p>");
            $("#user_error_message").show();
            $("#username").css("border-bottom", "1px solid #F90A0A");
            error_nombre = true;
        }
    }

    $("#formulario").submit(function() {
        error_nombre = false;
        error_username = false;

        check_nombres();
        check_username();
        if (error_nombre === false && error_username === false) {
           /* alert("Registro Completo");
            return true;*/
        } else {
            alert("Por favor completa el formulario correctamente");
            return false;
        }
    });
});