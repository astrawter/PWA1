/*
 username (id = f_username)
 email (id = f_email)
 phone number (id = f_phone)
 social security number (id = f_ssn)
 password (id = f_password)
*/

(function(){



    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.
        var myform = document.getElementById('myform');
        var username = document.getElementById('f_username');
        var email = document.getElementById('f_email');
        var phoneNum = document.getElementById('f_phone');
        var ssn = document.getElementById('f_ssn');
        var pw = document.getElementById('f_password');

        validateField(username);  //id = is the form input field ID
        validateField(email);
        validateField(phoneNum);
        validateField(ssn);
        validateField(pw);


        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){
        if (inputName.f_username === 'username'){
            var pattern = /^[A-Z]\w*\s[A-Z]\w*/;
        }
        else if (inputName.f_email === 'email'){
            var pattern2 = /^\w+(@)[a-zA-Z_]+?\.[a-zA-Z\.]{1,4}$/;
        }
        else if (inputName.f_phone === 'phoneNum'){
            var pattern3 = /^([\(]{1}[0-9]{3}[\)]{1}[0-9]{3}[\-]{1}[0-9]{4})$/;
        }
        else if (inputName.f_ssn === 'ssn'){
            var pattern4 = /^\d{3}-\d{2}-\d{4}$/;
        }
        else if (inputName.f_password === 'pw'){
            var pattern5 = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/;


        };

        var pass = 'the RegEx .test statement is needed here';
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper



