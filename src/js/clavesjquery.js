$(document).ready(function() {

    $('#passcheck').hide();
    $('#conpasscheck').hide();

    var pass_err = true;
    var conpass_err = true;


    $('#clave').keyup(function() {
        password_check();
    });

    function password_check() {

        var passwrdstr = $('#clave').val();

        if (passwrdstr.length == '') {
            $('#passcheck').show();
            $('#passcheck').html("Completa este campo");
            $('#passcheck').focus();
            $('#passcheck').css("color", "red");
            pass_err = false;
            return false;

        } else {
            $('#passcheck').hide();
        }

        if ((passwrdstr.length < 4) || (passwrdstr.length > 10)) {
            $('#passcheck').show();
            $('#passcheck').html("La contraseña debe tener entre 4 y 10 digitos");
            $('#passcheck').focus();
            $('#passcheck').css("color", "#e74c3c");
            pass_err = false;
            return false;

        } else {
            $('#passcheck').hide();
        }
    }

    $('#clavedos').keyup(function() {
        con_passwrd();
    });

    function con_passwrd() {

        var conpass = $('#clavedos').val();
        var passwrdstr = $('#clave').val();

        if (passwrdstr != conpass) {
            $('#conpasscheck').show();
            $('#conpasscheck').html("Las contraseñas no coinciden");
            $('#conpasscheck').focus();
            $('#conpasscheck').css("color", "#e74c3c");
            conpass_err = false;
            return false;

        } else {
            $('#conpasscheck').hide();
        }

    }

    $('#bnregistrar').click(function() {

        pass_err = true;
        conpass_err = true;

        password_check();
        con_passwrd();

        if ((pass_err == true) && (conpass_err == true)) {
            return true;
        } else {
            return false;
        }

    });

});