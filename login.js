// Add this script at the end of your HTML file or in a JS file
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});


function logIn(username, password) {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.username === username && user.password === password) {
    localStorage.setItem('isLoggedIn', 'true');
    alert('Login successful!');
    window.location.href = 'index.html'; 
  } else {
    alert('Invalid credentials!');
  }
}
function logOut() {
  localStorage.setItem('isLoggedIn', 'false');
  window.location.href = 'login.html';
}