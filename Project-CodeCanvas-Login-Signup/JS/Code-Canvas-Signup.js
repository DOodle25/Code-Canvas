document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (email.trim() === '') {
            alert('Please enter your email address.');
            return;
        }

        if (username.trim() === '') {
            alert('Please enter your username.');
            return;
        }

        if (password.trim() === '') {
            alert('Please enter your password.');
            return;
        }
        alert('Form submitted successfully!');
    });
});
