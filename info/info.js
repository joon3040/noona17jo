const apiKey = `50a90492567241f98925e8b285acfa3f`;
let infoList = [];
let url = new URL(
  `https://openapi.gg.go.kr/AbdmAnimalProtect?type=json&pIndex=4&pSize=150&key=${apiKey}`
);

const getInfoList = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("ddd", data);
  render();
};

const render = () => {
  let infoHTML = infoList
    .map(
      (item) => `
<div id="flex-box" class="row item">
    <div class="col-lg-4">
        <h1 id="info-box">${item.SHTER_NM}</h1>
    </div>
    <div class="col-lg-4">
         <h2 id="institution">${item.JURISD_INST_NM}</h2>
         <div id="name">${item.CHRGPSN_NM}</div>
         <div id="call">${item.CHRGPSN_CONTCT_NO}</div>
    </div>
</div>`
    )
    .join("");
  document.getElementById("board").innerHTML = infoHTML;
};

getInfoList();

//메뉴바 열고 닫기
const openNav = () => {
  document.getElementById("mySideNav").style.width = "270px";
};

const closeNav = () => {
  document.getElementById("mySideNav").style.width = "0px";
};
