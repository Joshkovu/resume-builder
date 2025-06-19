
function signUp(username, password) {
  // Save user info to localStorage
  localStorage.setItem('user', JSON.stringify({ username, password }));
  localStorage.setItem('isSignedUp', 'true');
  alert('Sign up successful! Please log in.');
  window.location.href = 'login.html';
}