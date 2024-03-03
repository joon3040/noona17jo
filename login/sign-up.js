const signUpForm = document.getElementById('sign-up-form');
const userID = document.getElementById('user-id');
const userPassword = document.getElementById('user-password');
const userPasswordRe = document.getElementById('password-re');
const misMatchMessage = document.querySelector('.mismatch-message');

// 회원 가입 폼
const signUpSubmit = (event) => {
  event.preventDefault();
  const userIdValue = userID.value;
  const userPasswordValue = userPassword.value;
  const userPasswordReValue = userPasswordRe.value;
  localStorage.setItem('islogin', 'true');

  if (userPasswordValue !== userPasswordReValue) {
    misMatchMessage.classList.remove('hidden');
    return;
  }

  localStorage.setItem('userid', userIdValue);
  localStorage.setItem('userpassword', userPasswordValue);
  const loginPageMove = './login.html';
  window.location.href = loginPageMove;
};

signUpForm.addEventListener('submit', signUpSubmit);
