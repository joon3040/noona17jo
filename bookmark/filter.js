const apiKey = `50a90492567241f98925e8b285acfa3f`;
let animals;
const petBox = document.getElementById('board');

const getListBookmark = async () => {
  let url = new URL(
    `https://openapi.gg.go.kr/AbdmAnimalProtect?type=json&pIndex=1&pSize=20&key=${apiKey}`
  );

  const response = await fetch(url);
  const data = await response.json();
  animals = data.AbdmAnimalProtect[1].row;
  console.log(animals);
  renderBookmarks();
};

// 북마크 UI 상태 변경
const bookmarkUi = (bookmarked) => {
  const bookmarks = getBookMarks();
  const bookmarkBtn = document.querySelector(
    `.bookmark-btn[id="${bookmarked}"]`
  );

  if (bookmarks.includes(bookmarked)) {
    bookmarkBtn.style.color = 'red';
  } else {
    bookmarkBtn.style.color = 'yellow';
  }
};

// 화면에 보여주기 +
const renderBookmarks = () => {
  const bookmarkedAnimals = getBookmarkAnimals();

  bookmarkedAnimals.forEach((animal) => {
    const animalElement = document.createElement('div');
    animalElement.innerHTML = `
    <div class="flex-box">
    <div class="img-box">
      <img src=${
        animal.THUMB_IMAGE_COURS ||
        'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available_87543-11093.jpg'
      }
      />
    </div>
    <div class="state">${animal.STATE_NM}</div>
    <div class="kind-age">${animal.SFETR_INFO}</div>
    <div class="gender">${animal.SEX_NM}</div>
    <div class="bottom-box">
      <span>지역:${animal.JURISD_INST_NM}</span>
      <span id="${animal.ABDM_IDNTFY_NO}" class="bookmark-btn">
        <i class="fa-regular fa-bookmark"></i>
      </span>
      </div>
    </div>`;
    const bookmarkBtn = animalElement.querySelector('.bookmark-btn');
    bookmarkBtn.addEventListener('click', function () {
      toggleBookmark(animal.ABDM_IDNTFY_NO);
      renderBookmarks();
    });
    // bookmarkUi(animal.ABDM_IDNTFY_NO);
    petBox.appendChild(animalElement);
  });
};

// 북마크 토글 기능 +
const toggleBookmark = (idntfy) => {
  const bookmarked = getBookMarks();

  const index = bookmarked.indexOf(idntfy);
  if (index === -1) {
    bookmarked.push(idntfy);
  } else {
    bookmarked.splice(index, 1);
  }
  saveBookmarks(bookmarked);

  // bookmarkUi(idntfy);
};

// 로컬 스토리지 불러오기 +
const getBookMarks = () => {
  return JSON.parse(localStorage.getItem('bookmarks')) || [];
};

// 로컬 스토리지에 저장하기 +
const saveBookmarks = (bookmarked) => {
  localStorage.setItem('bookmarks', JSON.stringify(bookmarked));
};

// 로컬 스토리지에 저장된 것만 필터 -
const getBookmarkAnimals = () => {
  const bookmarkedIds = getBookMarks();
  return animals.filter((animal) =>
    bookmarkedIds.includes(animal.ABDM_IDNTFY_NO)
  );
};

getListBookmark();
