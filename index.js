const positiveAnswer =document.querySelector('.question__yes');
const negativeAnswer =document.querySelector('.question__no');

function positive (){
  let question =document.querySelector('.question');
  const btns =document.querySelector('.btns');
  btns.classList.remove("active");
  question.classList.add("active");
}
function negative (){
  let question =document.querySelector('.question');
  const submit =document.querySelector('.submit');
  submit.classList.remove("active");
  question.classList.add("active");
}

const generateResume = document.querySelector('.submit__button');

document.getElementById('resumeUpload').addEventListener('change', function(event) {
    if (event.target.files.length > 0) {
        alert('Selected file: ' + event.target.files[0].name);
        // You can add further processing here
    }
});


function isAuthenticated() {
  // Example: check if user is logged in and signed up
  return localStorage.getItem('isLoggedIn') === 'true' && localStorage.getItem('isSignedUp') === 'true';
}

function handleQuestionResponse() {
  if (!isAuthenticated()) {
    alert('You must be signed up and logged in to continue.');
    window.location.href = 'login.html'; 
    return false;
  }
  // Continue to next stage (your existing logic here)
  // ...
}

// Attach to both buttons
document.addEventListener('DOMContentLoaded', function() {
  const yesBtn = document.querySelector('.question__yes');
  const noBtn = document.querySelector('.question__no');
  if (yesBtn) yesBtn.onclick = handleQuestionResponse;
  if (noBtn) noBtn.onclick = handleQuestionResponse;
});

