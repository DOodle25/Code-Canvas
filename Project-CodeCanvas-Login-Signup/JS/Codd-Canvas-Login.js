document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form1').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Perform form validation here
        var email = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (email.trim() === '') {
            alert('Please enter your email address.');
            return;
        }

        if (password.trim() === '') {
            alert('Please enter your password.');
            return;
        }
        alert('Login successfully!');
    });
});
