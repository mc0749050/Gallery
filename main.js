let nextBtn = document.getElementById("nextBtn");
let backBtn = document.getElementById("backBtn");
let downloadBtn = document.getElementById("downloadBtn");
let img = document.getElementById("imgValue");

let information = [
  {
    img: "img1.jpg",
    url: "img1.jpg",
  },
  {
    img: "img2.jpg",
    url: "img2.jpg",
  },
  {
    img: "img3.jpg",
    url: "img3.jpg",
  },
  {
    img: "img4.jpg",
    url: "img4.jpg",
  },
  {
    img: "img5.jpg",
    url: "img5.jpg",
  },
  {
    img: "img6.jpg",
    url: "img6.jpg",
  },
  {
    img: "img7.jpg",
    url: "img7.jpg",
  },
  {
    img: "img8.jpg",
    url: "img8.jpg",
  },
  {
    img: "img9.jpg",
    url: "img9.jpg",
  },
  {
    img: "img10.jpg",
    url: "img10.jpg",
  },
  {
    img: "img11.jpg",
    url: "img11.jpg",
  },
  {
    img: "img12.jpg",
    url: "img12.jpg",
  },
  {
    img: "img13.jpg",
    url: "img13.jpg",
  },
  {
    img: "img14.jpg",
    url: "img14.jpg",
  },
  {
    img: "img15.jpg",
    url: "img15.jpg",
  },
  {
    img: "img16.jpg",
    url: "img16.jpg",
  },
  {
    img: "img17.jpg",
    url: "img17.jpg",
  },
  {
    img: "img18.jpg",
    url: "img18.jpg",
  },
  {
    img: "img19.jpg",
    url: "img19.jpg",
  },
  {
    img: "img20.jpg",
    url: "img20.jpg",
  },
  {
    img: "img21.jpg",
    url: "img21.jpg",
  },
  {
    img: "img22.jpg",
    url: "img22.jpg",
  },
  {
    img: "img23.jpg",
    url: "img23.jpg",
  },
  {
    img: "img24.jpg",
    url: "img24.jpg",
  },
  {
    img: "img25.jpg",
    url: "img25.jpg",
  },
  {
    img: "img26.jpg",
    url: "img26.jpg",
  },
  {
    img: "img27.jpg",
    url: "img27.jpg",
  },
  {
    img: "img28.jpg",
    url: "img28.jpg",
  },
  {
    img: "img29.jpg",
    url: "img29.jpg",
  },
  {
    img: "img30.jpg",
    url: "img30.jpg",
  },
  {
    img: "img31.jpg",
    url: "img31.jpg",
  },
  {
    img: "img32.jpg",
    url: "img32.jpg",
  },
  {
    img: "img33.jpg",
    url: "img33.jpg",
  },
  {
    img: "img34.jpg",
    url: "img34.jpg",
  },
  {
    img: "img35.jpg",
    url: "img35.jpg",
  },
  {
    img: "img36.jpg",
    url: "img36.jpg",
  },
  {
    img: "img37.jpg",
    url: "img37.jpg",
  },
  {
    img: "img38.jpg",
    url: "img38.jpg",
  },
  {
    img: "img39.jpg",
    url: "img39.jpg",
  },
  {
    img: "img40.jpg",
    url: "img40.jpg",
  },
  {
    img: "img41.jpg",
    url: "img41.jpg",
  },
  {
    img: "img42.jpg",
    url: "img42.jpg",
  },
  {
    img: "img43.jpg",
    url: "img43.jpg",
  },
  {
    img: "img44.jpg",
    url: "img44.jpg",
  },
  {
    img: "img45.jpg",
    url: "img45.jpg",
  },
  {
    img: "img46.jpg",
    url: "img46.jpg",
  },
  {
    img: "img47.jpg",
    url: "img47.jpg",
  },
  {
    img: "img48.jpg",
    url: "img48.jpg",
  },
  {
    img: "img49.jpg",
    url: "img49.jpg",
  },
  {
    img: "img50.jpg",
    url: "img50.jpg",
  },
  {
    img: "img51.jpg",
    url: "img51.jpg",
  },
  {
    img: "img52.jpg",
    url: "img52.jpg",
  },
  {
    img: "img53.jpg",
    url: "img53.jpg",
  },
  {
    img: "img54.jpg",
    url: "img54.jpg",
  },
  {
    img: "img55.jpg",
    url: "img55.jpg",
  },
  {
    img: "img56.jpg",
    url: "img56.jpg",
  },
  {
    img: "img57.jpg",
    url: "img57.jpg",
  },
  {
    img: "img58.jpg",
    url: "img58.jpg",
  },
  {
    img: "img59.jpg",
    url: "img59.jpg",
  },
  {
    img: "img60.jpg",
    url: "img60.jpg",
  },
  {
    img: "img61.jpg",
    url: "img61.jpg",
  },
  {
    img: "img62.jpg",
    url: "img62.jpg",
  },
  {
    img: "img63.jpg",
    url: "img63.jpg",
  },
  {
    img: "img64.jpg",
    url: "img64.jpg",
  },
  {
    img: "img65.jpg",
    url: "img65.jpg",
  },
  {
    img: "img66.jpg",
    url: "img66.jpg",
  },
  {
    img: "img67.jpg",
    url: "img67.jpg",
  },
    
]
let count = 0;

nextBtn.addEventListener("click", nextImgFun);
function nextImgFun(){
  count = (count + 1) % information.length;
  img.src = information[count].img;
  downloadBtn.href = information[count].url;
}
backBtn.addEventListener("click", backImgFun);
function backImgFun(){
  count = (count - 1 + information.length) % information.length;
  img.src = information[count].img;
  downloadBtn.href = information[count].url;
}
