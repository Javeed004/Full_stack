function showLoginModal() {
    document.getElementById('login-modal').style.display = 'block';
}

function hideLoginModal() {
    document.getElementById('login-modal').style.display = 'none';
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'student' && password === 'password') {
        alert('Login successful!');
        document.getElementById('login-btn').style.display = 'none';
        
    }})