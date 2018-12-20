$(document).ready(function()    {
$( "#message" ).keyup(function() {
            $('#totalChars').text(this.value.length + '/5000 characters used.');
            });  
    
    $( "#messageSubmit" ).click(function() {
                var length = $("#message").val().length;
                var message = $('#message');
                var name = $('#name'); 
                var email = $('#email'); 
                if (message.val() != null && message.val() != '' && name.val() != null && name.val() != '' && email.val() != null && email.val() != '') { 
                if (length>=5000){
                    alert("Too many characters, please shorten your message to 5000 characters or less.");
                }
                else{
                    alert("Your message was submitted.");
                    $('#message').val('');
                    $('#name').val('');
                    $('#email').val('');
                    $('#totalChars').text('0/5000 characters used.');
                }
                }
        else{
            alert("Please enter your name, email, and a message.");
        }
            });
    
    });
