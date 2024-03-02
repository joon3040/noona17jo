const loginForm = document.getElementById('login-form');
const userId = document.getElementById('user-id');
const userPassword = document.getElementById('user-password');
const signUpMove = document.getElementById('sign-up-move');
const unregister = document.getElementById('unregister');
const logout = document.getElementById('log-out');
const lastBox = document.getElementById('last-box');

const HIDDEN_CLASS = 'hidden';
const USERID_KEY = 'userid';
const USERPASSWORD_KEY = 'userpassword';
const ISLOGIN_KEY = 'islogin';
const HomePageURL = './login-btn.html';

const saveUserId = localStorage.getItem(USERID_KEY);
const saveUserPassword = localStorage.getItem(USERPASSWORD_KEY);
const saveIsLogin = localStorage.getItem(ISLOGIN_KEY);

// 로그인 폼 불러내기
const showLoginForm = () => {
  loginForm.classList.remove(HIDDEN_CLASS);
  signUpMove.classList.remove(HIDDEN_CLASS);
  unregister.classList.add(HIDDEN_CLASS);
  logout.classList.add(HIDDEN_CLASS);
  lastBox.classList.add(HIDDEN_CLASS);
};

// 새로고침 시 보여줄 화면
if (saveUserId === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  signUpMove.classList.remove(HIDDEN_CLASS);
} else {
  if (saveIsLogin === null) {
    showLoginForm();
  } else {
    unregister.classList.remove(HIDDEN_CLASS);
    logout.classList.remove(HIDDEN_CLASS);
    lastBox.classList.remove(HIDDEN_CLASS);
  }
}

// 로그인 폼
const loginSubmit = (event) => {
  event.preventDefault();
  const userIdValue = userId.value;
  const userPasswordValue = userPassword.value;
  localStorage.setItem('islogin', 'true');

  if (saveUserId == userIdValue && saveUserPassword == userPasswordValue) {
    window.location.href = HomePageURL;
  } else {
    alert('존재하지 않는 아이디거나, 비밀번호가 틀렸습니다.');
  }
};

// 회원 탈퇴
const unregisterClick = () => {
  let result = confirm('정말 탈퇴하시겠습니까?');

  if (result) {
    localStorage.removeItem(USERID_KEY);
    localStorage.removeItem(USERPASSWORD_KEY);
    localStorage.removeItem(ISLOGIN_KEY);
    showLoginForm();
  }
  window.location.href = HomePageURL;
};

// 로그아웃
const logoutClick = () => {
  localStorage.removeItem(ISLOGIN_KEY);
  showLoginForm();
};

loginForm.addEventListener('submit', loginSubmit);
unregister.addEventListener('click', unregisterClick);
logout.addEventListener('click', logoutClick);
