// 유기동물을 필터를 통해 나에게 적합한 리스트를 확인할 수 있다
// 강아지와 고양이 중에 무엇을 선택할 지 정할 수 있다
// 지역과 품종을 선택할 수 있다. -> 몇 마리의 동물들이 있는 지 알 수 있다
// 구체적인 시와 군의 리스트를 보고 선택할 수 있다
let animalList = [];
const API_KEY = ``;

const getList = async () => {
  url = new URL();
};
const getListBySpecies = async () => {
  const SPECIES_NM = document.getElementById("input-species").value;
  url = new URL(`${SPECIES_NM}`);
};
const getListByLocal = async () => {
  url = new URL();
};
// 메뉴바에 있는 보호소 정보를 통해 보호소의 정보를 알 수 있다

//메뉴바 열고 닫기
const openNav = () => {
  document.getElementById("mySideNav").style.width = "270px";
};

const closeNav = () => {
  document.getElementById("mySideNav").style.width = "0px";
};
