document.getElementById('custom-form-btn-id').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    var btn = document.getElementById('custom-form-btn-id');
    btn.innerText = 'Please wait...';
    btn.style.backgroundColor = 'gray';
    setTimeout(function() {
        btn.innerText = 'Submitted!';
        btn.style.backgroundColor = 'rgb(0, 189, 83)';
    }, 2000);
});