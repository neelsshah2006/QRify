const input = document.querySelector("#qrInput");
const generateBtn = document.querySelector("#generateBtn");
const qrPopup = document.querySelector(".qrPop");
const qrImg = document.querySelector(".qrimg");
const download = document.querySelector(".download");
const close = document.querySelector(".closeBtn");
const main = document.querySelector(".main");

const url = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=";

generateBtn.addEventListener("click", () => {
  if (!input.value) {
    alert("Enter some Text or URL first");
  } else {
    const imgUrl = url + input.value;
    qrImg.setAttribute("src", imgUrl);
    qrImg.setAttribute("alt", input.value);
    setTimeout(() => {
      qrPopup.classList.add("show");
      main.classList.add("opacity");
    }, 1000);
  }
});

download.addEventListener("click", () => {
  const imgUrl = url + input.value;
  fetch(imgUrl)
    .then((res) => res.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "qr.jpg";
      link.click();
    });
});

close.addEventListener("click", () => {
  qrPopup.classList.remove("show");
  input.value = "";
  main.classList.remove("opacity");
});
