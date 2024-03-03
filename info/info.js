const apiKey = `50a90492567241f98925e8b285acfa3f`;
let infoList = [];
let url = new URL(
  `https://openapi.gg.go.kr/AbdmAnimalProtect?type=json&key=${apiKey}`
);

const getInfoList = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("ddd", data);
  animal = data.AbdmAnimalProtect;
  let list =  animal[1].row;
  infoList = list;
  render();
};

const render = () => {
  let infoHTML = infoList
    .map(
      (item) => `
<div id="flex-box">
    <div class="col-lg-4">
        <h5 id="info-box">${item.SHTER_NM}</h1>
    </div>
    <div class="col-lg-4">
         <h6 id="institution">${item.JURISD_INST_NM}</h2>
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
