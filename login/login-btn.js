const loginUser = document.getElementById('login-user');

const saveUserId = localStorage.getItem('userid');
const saveIsLogin = localStorage.getItem('islogin');

const MoveLoginPage = () => {
  const LoginPageURL = './login.html';
  window.location.href = LoginPageURL;
};

const renderUserId = (id) => {
  loginUser.innerHTML = `${id}님`;
};

// 로그인 상태라면 아이디로 보여주기
if (saveIsLogin !== null && saveUserId !== null) {
  renderUserId(saveUserId);
}

loginUser.addEventListener('click', MoveLoginPage);
