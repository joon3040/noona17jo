const loginUser = document.getElementById('login-user');

// 로그인 페이지로 이동
const loginPageMove = () => {
  const mainPageMove = './login.html';
  window.location.href = mainPageMove;
};

const saveUserId = localStorage.getItem('userid');

// 로그인 시 보여줄 내용
const renderUserId = (id) => {
  loginUser.innerHTML = `${id}님`;
};
if (saveUserId !== null) {
  renderUserId(saveUserId);
}

loginUser.addEventListener('click', loginPageMove);
