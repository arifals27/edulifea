const showPetunjuk = () => {
  const guides = document.getElementById("petunjuk");
  guides.classList.add("show");
  document.querySelector("#container").classList.add("blur");
};
const closePetunjuk = () => {
  const guides = document.getElementById("petunjuk");
  guides.classList.remove("show");
  document.querySelector("#container").classList.remove("blur");
};
const showCandt = () => {
  const guides = document.getElementById("candt");
  guides.classList.add("show");
  document.querySelector("#container").classList.add("blur");
};
const closeCandt = () => {
  const guides = document.getElementById("candt");
  guides.classList.remove("show");
  document.querySelector("#container").classList.remove("blur");
};
