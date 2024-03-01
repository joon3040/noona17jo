const apiKey = `50a90492567241f98925e8b285acfa3f`;
let bookmarkList = [];
let animals;

const getListBookmark = async () => {
  let url = new URL(
    `https://openapi.gg.go.kr/AbdmAnimalProtect?type=json&pIndex=1&pSize=20&key=${apiKey}`
  );

  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  animals = data.AbdmAnimalProtect[1].row;
  console.log(animals);
  renderBookmarks();
};

const bookMarkToggle = (event) => {
  let clickBookmark = event.target;
  console.log(a);
};

const getBookMarks = () => {};

const saveBookmarks = () => {};

const renderBookmarks = () => {
  const bookmarksHTML = animals
    .map(
      (bookmark) => `<div class="pet-wrap">
    <div class="img-box">
      <img src=${
        bookmark.THUMB_IMAGE_COURS ||
        'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available_87543-11093.jpg'
      }
      />
    </div>
    <div class="state">${bookmark.STATE_NM}</div>
    <div class="kind-age">${bookmark.SFETR_INFO}</div>
    <div class="gender">${bookmark.SEX_NM}</div>
    <div class="bottom-box">
      <span>지역:${bookmark.JURISD_INST_NM}</span>
      <button onclick="bookMarkToggle(event)"><i class="fa-regular fa-bookmark"></i></button>
    </div>
  </div>`
    )
    .join('');
  document.querySelector('.pet-box').innerHTML = bookmarksHTML;
};

getListBookmark();
