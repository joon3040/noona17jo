const signUpForm = document.getElementById('sign-up-form');
const userID = document.getElementById('user-id');
const userPassword = document.getElementById('user-password');
const userPasswordRe = document.getElementById('password-re');

// 회원 가입 폼
const signUpSubmit = (event) => {
  event.preventDefault();
  const userIdValue = userID.value;
  const userPasswordValue = userPassword.value;
  const userPasswordReValue = userPasswordRe.value;
  localStorage.setItem('islogin', 'true');

  if (userPasswordValue !== userPasswordReValue) {
    alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요');
    return;
  }

  localStorage.setItem('userid', userIdValue);
  localStorage.setItem('userpassword', userPasswordValue);
  const loginPageMove = './login.html';
  window.location.href = loginPageMove;
};

signUpForm.addEventListener('submit', signUpSubmit);
