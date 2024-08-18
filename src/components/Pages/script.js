document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example JSON object
    const userData = JSON.stringify({
        username: username,
        password: password
    });

    fetch('', { // Replace with your API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: userData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('message').textContent = 'Login successful!';
           
        } else {
            document.getElementById('message').textContent = 'Login failed. Please try again.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'An error occurred. Please try again later.';
    });
});
