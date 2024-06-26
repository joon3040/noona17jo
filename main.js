// 유기동물을 필터를 통해 나에게 적합한 리스트를 확인할 수 있다
// 강아지와 고양이 중에 무엇을 선택할 지 정할 수 있다
// 지역과 품종을 선택할 수 있다. -> 몇 마리의 동물들이 있는 지 알 수 있다
let puppyList = [];
let pop = [];
const apiKey = `50a90492567241f98925e8b285acfa3f`;
const species = document.getElementById("button-species");
const local = document.getElementById("button-local");
let url = new URL(
  `https://openapi.gg.go.kr/AbdmAnimalProtect?type=json&key=${apiKey}`
);
let totalResults = 0;
let page = 1;
let pageSize = 20;
const groupSize = 5;
species.addEventListener("click", () => getListBySpecies());
local.addEventListener("click", () => getListByLocal());

const getPuppy = async () => {
  url.searchParams.set("pIndex", page); // %page = page
  url.searchParams.set("pSize", pageSize);
  const response = await fetch(url);
  const data = await response.json();
  animal = data.AbdmAnimalProtect;
  pop = animal[1].row.filter((data) => {
    return data.SEX_NM == "Q";
  });
  filter = animal[1].row.filter(
    (element) => element.SEX_NM !== "Q" && element.STATE_NM == "보호중"
  );
  puppyList = filter;
  totalResults = data.AbdmAnimalProtect[0].head[0].list_total_count;
  render();
  paginationRender();
};
const getLatestPuppy = async () => {
  url = new URL(
    `https://openapi.gg.go.kr/AbdmAnimalProtect?type=json&pIndex=4&key=${apiKey}`
  );
  getPuppy();
};

const getListBySpecies = async () => {
  let SPECIES = document.getElementById("input-species").value;
  url = new URL(
    `https://openapi.gg.go.kr/AbdmAnimalProtect?type=json&pIndex=4&pSize=150&key=${apiKey}&SPECIES_NM=${SPECIES}`
  );
  getPuppy();
};
const getListByLocal = async () => {
  const sigun_NM = document.getElementById("input-local").value;
  url = new URL(
    `https://openapi.gg.go.kr/AbdmAnimalProtect?type=json&pIndex=4&pSize=150&key=${apiKey}&SIGUN_NM=${sigun_NM}`
  );
  getPuppy();
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
      <span>지역: ${item.JURISD_INST_NM}</span>
    </div>
    <img class="puppy-icon" src="/list/list-images/puppy-icon.png" alt="">
  </div>`
    )
    .join("");
  document.getElementById("board").innerHTML = newHTML;
};
const paginationRender = () => {
  let paginationHTML = ``;
  let totalPages = Math.ceil(totalResults / pageSize); //505?
  const pageGroup = Math.ceil(page / groupSize); //1
  let lastPage = pageGroup * groupSize; //5
  if(lastPage > totalPages){
      lastPage = totalPages;
  }
  const firstPage =
    lastPage - (groupSize - 1) <= 0 ? 1 : lastPage - (groupSize - 1);
  if (firstPage >= 6) {
    paginationHTML = `<li class="page-item" onclick="moveToPage(1)"><a class="page-link cursor">&lt;&lt;</a></li><li class="page-item" onclick="moveToPage(${
      page - 1
    })"><a class="page-link cursor">&lt;</a></li>`;
  }
  for (let i = firstPage; i <= lastPage; i++) {
    paginationHTML += `<li class="page-item ${
      i === page ? "active" : ""
    }" onclick="moveToPage(${i})"><a class="page-link page-color cursor">${i}</a></li>`;
  }
  if(lastPage < totalPages){
    paginationHTML += ` <li class="page-item"onclick="moveToPage(${
      page + 1
    })"><a class="page-link cursor">></a></li><li class="page-item"onclick="moveToPage(${totalPages})"><a class="page-link cursor">&gt;&gt;</a></li>`;
  }
  document.querySelector(".pagination").innerHTML = paginationHTML;
};

const moveToPage = (pageNum) => {
  page = pageNum;
  getPuppy();
};

getLatestPuppy();
//메뉴바 열고 닫기
const openNav = () => {
  document.getElementById("mySideNav").style.width = "270px";
};

const closeNav = () => {
  document.getElementById("mySideNav").style.width = "0px";
};
