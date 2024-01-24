document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Here you would need to hash the password and compare it with the hashed password from the database
    // For the sake of this example, let's send the plain text password (which you should NEVER do in a real application)
  
    fetch('https://your-restdb-api-url/accounts?q={"email": "' + email + '", "password": "' + password + '"}', {
      method: 'GET',
      headers: {
        'x-apikey': 'your-api-key'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data && data.length > 0) {
        // Login success - set session storage and redirect to account page
        sessionStorage.setItem('user', JSON.stringify(data[0]));
        window.location.href = 'account.html';
      } else {
        // Login failed - show error
        alert('Login failed. Please check your credentials.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });