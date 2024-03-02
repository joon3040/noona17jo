<<<<<<< HEAD
let navOpen = false; // 네비게이션 상태를 저장하는 변수

const toggleNav = () => {
  const nav = document.getElementById("mySideNav");
  if (!navOpen) {
    // 네비게이션이 닫혀 있는 경우
    nav.style.width = "270px"; // 네비게이션 열기
    navOpen = true;
  } else {
    // 네비게이션이 열려 있는 경우
    nav.style.width = "0px"; // 네비게이션 닫기
    navOpen = false;
  }
};
=======
let navOpen = false; // 네비게이션 상태를 저장하는 변수

const toggleNav = () => {
  const nav = document.getElementById("mySideNav");
  if (!navOpen) {
    // 네비게이션이 닫혀 있는 경우
    nav.style.width = "270px"; // 네비게이션 열기
    navOpen = true;
  } else {
    // 네비게이션이 열려 있는 경우
    nav.style.width = "0px"; // 네비게이션 닫기
    navOpen = false;
  }
};
>>>>>>> feature-board
