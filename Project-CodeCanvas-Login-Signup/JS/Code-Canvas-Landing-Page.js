// dropdown
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('drop-link-img').addEventListener('click', function(event) {
        event.preventDefault();
        var element = document.getElementById('circle-1-nav-dropdown-menu-div');
        var property = element.style.display;
        if (property === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});
