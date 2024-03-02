let puppyList = [];
const apiKey = `50a90492567241f98925e8b285acfa3f`;
let pop = [];
let url = new URL(
  `https://openapi.gg.go.kr/AbdmAnimalProtect?type=json&pIndex=4&pSize=150&key=${apiKey}`
);
<<<<<<< HEAD:list/list.js
// 1.api를 불러온다.
// 2.데이터에 접근해 배열에 담는다.
=======
dog.addEventListener("click", () => getListDog(event));
cat.addEventListener("click", () => getListCat(event));
species.addEventListener("click", () => getListBySpecies());
local.addEventListener("click", () => getListByLocal());

const getListBySpecies = async () => {
  let SPECIES = document.getElementById("input-species").value;
  let SPECIES1 = "[개] " + SPECIES;
  let SPECIES2 = "[고양이] " + SPECIES;
  url = new URL(
    `https://openapi.gg.go.kr/AbdmAnimalProtect?type=json&pIndex=4&pSize=150&key=${apiKey}&SPECIES_NM=${SPECIES1}`
  );
  url = new URL(
    `https://openapi.gg.go.kr/AbdmAnimalProtect?type=json&pIndex=4&pSize=150&key=${apiKey}&SPECIES_NM=${SPECIES2}`
  );
  const response = await fetch(url);
  const data = await response.json();
  console.log("ddd", data);
  render();
};

const getListByLocal = async () => {
  const sigun_NM = document.getElementById("input-local").value;
  url = new URL(
    `https://openapi.gg.go.kr/AbdmAnimalProtect?type=json&pIndex=4&pSize=150&key=${apiKey}&SIJUN_NM=${sigun_NM}`
  );
  const response = await fetch(url);
  const data = await response.json();
  console.log("ddd", data);
  render();
};

>>>>>>> 8d7f9562124c20e26259617808d74546abf8ffb1:main.js
const getPuppy = async () => {
  const response = await fetch(url);
  const data = await response.json();
  animal = data.AbdmAnimalProtect;
  pop = animal[1].row.filter((data) => {
    return data.SEX_NM == "Q";
  });
//   console.log(pop);
  filter = animal[1].row.filter(
    (element) => element.SEX_NM !== "Q" && element.STATE_NM == "보호중"
  );
  puppyList = filter;
//   console.log(puppyList);
  render();
};

// 1.새로운함수에 데이터가 담긴배열을 다 담아준다.
// 2. 부모태그에 데이터가담긴변수 dom을 넣어준다.
const render = () => {
  let newHTML = puppyList
    .map(
      (item) =>
        ` <div class="pet-box">
    <div class="flex-box">
        <div class="img-box">
            <img src="${
              item.IMAGE_COURS ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
            }" alt="" />
        </div>
      <div class="state">${item.STATE_NM}
    </div>
    <img class="heart" src="/list/list-images/heart.png" alt="">
      <div class="kind-age">${item.SPECIES_NM.replace(
        "[개]",
        "[강아지]"
      )} | ${(() => {
          if (parseInt(item.AGE_INFO) == 2024) {
            return "1살 미만";
          } else if (parseInt(item.AGE_INFO) == 2023) {
            return "1살";
          } else if (parseInt(item.AGE_INFO) == 2022) {
            return "2살";
          } else if (parseInt(item.AGE_INFO) == 2021) {
            return "3살";
          } else if (parseInt(item.AGE_INFO) == 2020) {
            return "4살";
          } else if (parseInt(item.AGE_INFO) == 2019) {
            return "5살";
          } else if (parseInt(item.AGE_INFO) == 2018) {
            return "6살";
          } else if (parseInt(item.AGE_INFO) == 2017) {
            return "7살";
          } else if (parseInt(item.AGE_INFO) == 2016) {
            return "8살";
          } else if (parseInt(item.AGE_INFO) == 2015) {
            return "9살";
          } else if (parseInt(item.AGE_INFO) == 2014) {
            return "10살";
          } else if (parseInt(item.AGE_INFO) == 2013) {
            return "11살";
          } else if (parseInt(item.AGE_INFO) == 2012) {
            return "12살";
          } else if (parseInt(item.AGE_INFO) == 2011) {
            return "13살";
          } else if (parseInt(item.AGE_INFO) == 2010) {
            return "14살";
          } else if (parseInt(item.AGE_INFO) == 2009) {
            return "15살";
          } else if (parseInt(item.AGE_INFO) == 2008) {
            return "16살";
          } else if (parseInt(item.AGE_INFO) == 2007) {
            return "17살";
          } else if (parseInt(item.AGE_INFO) == 2006) {
            return "18살";
          }
        })()}</div>
      <div id="gender" class="gender">${
        item.SEX_NM == "M"
          ? item.SEX_NM.replace("M", "남아")
          : item.SEX_NM.replace("F", "여아")
      }  · ${(() => {
          if (item.NEUT_YN == "Y") {
            return "중성화 완료";
          } else if (item.NEUT_YN == "N") {
            return "중성화 미완료";
          } else {
            return "중성화 알수없음";
          }
        })()}</div>
    </div>
    <div class="address-box">
      <span>지역:${item.JURISD_INST_NM}</span>
    </div>
    <img class="puppy-icon" src="/list/list-images/puppy-icon.png" alt="">
  </div>`
    )
    .join("");
  document.getElementById("board").innerHTML = newHTML;
};
getPuppy();