const loginForm = document.getElementById('login-form');
const userId = document.getElementById('user-id');
const userPassword = document.getElementById('user-password');
const signUpMove = document.getElementById('sign-up-move');
const unregister = document.getElementById('unregister');
const logout = document.getElementById('log-out');

const HIDDEN_CLASS = 'hidden';
const USERID_KEY = 'userid';
const USERPASSWORD_KEY = 'userpassword';
const IsLogin_KEY = 'isLogin';

// 회원가입으로 이동
const signUpClick = () => {
  const signUpPage = 'sign-up.html';
  window.location.href = signUpPage;
};

const saveUserId = localStorage.getItem(USERID_KEY);
const saveUserPassword = localStorage.getItem(USERPASSWORD_KEY);
const saveIsLogin = localStorage.getItem(IsLogin_KEY);

// 로그인 폼 불러내기
const showLoginForm = () => {
  loginForm.classList.remove(HIDDEN_CLASS);
  signUpMove.classList.remove(HIDDEN_CLASS);
  unregister.classList.add(HIDDEN_CLASS);
  logout.classList.add(HIDDEN_CLASS);
};

// 로드 및 새로고침 시 보여줄 화면
if (saveUserId === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  signUpMove.classList.remove(HIDDEN_CLASS);
} else {
  if (saveIsLogin === null) {
    showLoginForm();
  } else {
    unregister.classList.remove(HIDDEN_CLASS);
    logout.classList.remove(HIDDEN_CLASS);
  }
}

// 로그인 폼
const loginSubmit = (event) => {
  event.preventDefault();
  const userIdValue = userId.value;
  const userPasswordValue = userPassword.value;
  localStorage.setItem('isLogin', 'true');

  if (saveUserId == userIdValue && saveUserPassword == userPasswordValue) {
    const mainPageMove = './main-demo.html';
    window.location.href = mainPageMove;
  } else {
    alert('아이디가 존재하지 않거나, 비밀번호가 틀렸습니다.');
  }
};

// 회원 탈퇴
const unregisterClick = () => {
  let result = confirm('정말 삭제하시겠습니까?');

  if (result) {
    localStorage.removeItem(USERID_KEY);
    localStorage.removeItem(USERPASSWORD_KEY);
    localStorage.removeItem(IsLogin_KEY);
    showLoginForm();
  }
};

// 로그아웃
const logoutClick = () => {
  localStorage.removeItem(IsLogin_KEY);
  showLoginForm();
};

loginForm.addEventListener('submit', loginSubmit);
signUpMove.addEventListener('click', signUpClick);
unregister.addEventListener('click', unregisterClick);
logout.addEventListener('click', logoutClick);
