import indexData from "../data/index.json" assert { type: "json" };

let modalOpen = document.getElementById("cartOpen");
// console.dir(modalOpen);
let cartDiv = document.getElementById("cart");
let body = document.querySelector("body");
let close_modal = document.getElementById("close_modal");
let h2 = document.createElement("h2");
let disable_body = document.getElementById("disable_body");

// console.dir(modalOpen);

modalOpen.addEventListener("click", (event) => {
  event.preventDefault();
  body.className = "body_modal";
  cartDiv.className = "cartGo";
  h2.textContent = "CART";
  cartDiv.style.width = "40%";
  disable_body.style.display = "block";
});
cartDiv.append(h2);

const closeModal = (event) => {
  // console.log(event);
  cartDiv.className = "cart_popup";
  disable_body.style.display = "none";
  body.classList.remove("body_modal");
};
close_modal.addEventListener("click", closeModal);

disable_body.addEventListener("click", closeModal);

const textslider = [
  {
    id: 0,
    text: "WELCOME TO BLUEFLY: Luxury brands at discounted prices",
  },
  {
    id: 1,
    text: "FREE SHIPPING On Order Over $999",
  },
];

// text Slider

const renderTextslider = () => {
  let container = document.getElementById("welcome_textslider");
  let i = 0;
  container.style.width = `${textslider.length * 100}%`;
  textslider.map((elem) => {
    let p = document.createElement("p");
    p.innerText = elem.text;
    container.append(p);
  });

  const slideShow = () => {
    if (textslider.length > i) {
      container.style.transform = `translateX(${
        -i * (100 / textslider.length)
      }%)`;
      i++;
    } else {
      i = 0;
    }
  };

  setInterval(() => {
    slideShow();
  }, 2500);
};

renderTextslider();

//  render Footer three Image.

const renderFooterImage = () => {
  // console.log(indexData.bottomThreeImages);
  let footerImgContainer = document.getElementById("footer_three_img");
  indexData.bottomThreeImages.map((el) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.imgUrl;
    let h4 = document.createElement("h4");
    h4.innerText = el.title;
    let p = document.createElement("p");
    p.innerText = el.desc;
    let btn = document.createElement("button");
    btn.textContent = el.btnText;
    div.append(img, h4, p, btn);
    footerImgContainer.append(div);
  });
};

renderFooterImage();
