import indexData from "../data/index.json" assert { type: "json" };
import nav from "../components/navbar.js";
import footer from "../components/footer.js";
// console.log(indexData);

document.getElementById("render_navbar").innerHTML = nav();
document.getElementById("render_footer").innerHTML = footer();

// threeimages

const renderTreeImages = () => {
  let threeimages = document.getElementById("threeimages");
  let div = document.createElement("div");
  div.classList.add("three_div");
  indexData.threeimages.map((el) => {
    // console.log(el);
    let div = document.createElement("div");
    div.classList.add("each_image");
    let img = document.createElement("img");
    img.src = el.imgUrl;
    img.classList.add("render_img");
    let div2 = document.createElement("div");
    let h4_1 = document.createElement("h4");
    h4_1.textContent = el.title;
    h4_1.classList.add("h4_1");
    let h1 = document.createElement("h1");
    h1.textContent = el.desc;
    let h4_2 = document.createElement("h4");
    h4_2.textContent = el.feature;
    let btn = document.createElement("button");
    btn.innerHTML = el.btnText;
    div2.append(h4_1, h1, h4_2, btn);
    div.append(img, div2);
    threeimages.append(div);
  });
};

renderTreeImages();

// shop by category

// console.log(indexData.shopByCategory);

const renderShopByCtg = () => {
  let renderCategory = document.getElementById("render_by_cat");
  indexData.shopByCategory.map((el) => {
    // console.log(el);
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.imgUrl;
    let h5 = document.createElement("h5");
    h5.textContent = el.title;
    div.append(img, h5);
    renderCategory.append(div);
    div.addEventListener("click", () => {
      if (el.title === "DRESSES") {
        window.location = "#";
      }
    });
  });
};

renderShopByCtg();

// New Arrivals

// console.log(indexData.newArrivals);

const renderingNewrrivals = () => {
  let renderNewArrivals = document.getElementById("render_New_arrivals");
  indexData.newArrivals.map((el) => {
    renderElementTrendandArrivals(renderNewArrivals, el);
  });
};

renderingNewrrivals();
// Trending Now

const renderTrending = () => {
  let trendingNow = document.getElementById("trending_Now");
  indexData.trendingNow.map((el) => {
    renderElementTrendandArrivals(trendingNow, el);
  });
};

renderTrending();

function renderElementTrendandArrivals(trendingNow, el) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = el.img1;
  let p1 = document.createElement("p");
  p1.textContent = el.title;
  let span1 = document.createElement("span");
  span1.textContent = el.strPrice;
  span1.classList.add("sp1");
  let span2 = document.createElement("span");
  span2.textContent = el.price;
  span2.classList.add("sp2");
  let span3 = document.createElement("span");
  span3.textContent = el.discount;
  span3.classList.add("sp3");
  let btn = document.createElement("button");
  btn.textContent = "Quick View";
  btn.classList.add("quick_view");
  div.append(img, p1, span1, span2, span3, btn);
  trendingNow.append(div);
}

// render Left Right ClickSlider

const renderLeftRightClickSlider = () => {
  let container = document.getElementById("renderLeftRightImages");

  indexData.slideLeftRightImages.map((el, index, array) => {
    // console.log(el);
    let main_div = document.createElement("div");
    main_div.addEventListener("click", () => {
      openThisModal(el, index, array);
    });
    let img_div = document.createElement("div");
    let main_img = document.createElement("img");
    main_img.classList.add("main_img");
    main_img.src = el.imgUrl;
    let img2 = document.createElement("img");
    img2.classList.add("small_logo_img");
    img2.src =
      "https://media.tagembed.com/post/46588/57802/87415/profile/87415.jpg";
    let p_div = document.createElement("div");
    p_div.classList.add("p_div");
    let p = document.createElement("p");
    p.textContent = el.desc;
    img_div.append(main_img);
    p_div.append(p);
    main_div.append(img_div, img2, p_div);
    container.append(main_div);
  });

  function openThisModal(el, index, array) {
    // let body_blur = document.querySelector("body");
    // body_blur.style.overflow = "hidden";
    let disable_body1 = document.getElementById("disable_body_022");
    disable_body1.style.display = "block";
    let disable_body = document.getElementById("disable_body_02");
    disable_body.style.display = "block";
    disable_body1.addEventListener("click", () => {
      disable_body1.style.display = "none";
      disable_body.style.display = "none";
      document.getElementById("render_popup").innerHTML = "";
    });
    let close_popup = document.getElementById("close_popup");
    close_popup.addEventListener("click", () => {
      document.getElementById("render_popup").innerHTML = "";
      disable_body1.style.display = "none";
      disable_body.style.display = "none";
    });

    renderMidPopup(index, array);

    document.getElementById("left").addEventListener("click", () => {
      if (index > 0) {
        document.getElementById("render_popup").innerHTML = "";
        index--;
        document.getElementById("right").style.color = "white";
        renderMidPopup(index, array);
      } else if (index === 0) {
        document.getElementById("left").style.color = "rgb(194, 188, 188)";
      }
    });
    document.getElementById("right").addEventListener("click", () => {
      if (index < array.length - 1) {
        document.getElementById("render_popup").innerHTML = "";
        index++;
        document.getElementById("left").style.color = "white";
        renderMidPopup(index, array);
      } else if (index === array.length - 1) {
        document.getElementById("right").style.color = "rgb(194, 188, 188)";
      }
    });
  }

  function renderMidPopup(index, array) {
    let render_popup = document.getElementById("render_popup");
    let div = document.createElement("div");
    let img_div = document.createElement("div");
    img_div.classList.add("img_div");
    let desc_div = document.createElement("div");
    desc_div.classList.add("desc_div");
    let img = document.createElement("img");
    img.src = array[index].imgUrl;
    img_div.append(img);
    let img2 = document.createElement("img");
    img2.src =
      "https://media.tagembed.com/post/46588/57802/87415/profile/87415.jpg";
    img2.classList.add("small_logo_img2");
    let left_top = document.createElement("div");
    left_top.classList.add("left_top");
    let pT = document.createElement("p");
    pT.classList.add("pT");
    let p1 = document.createElement("p");
    p1.innerText = "BLUEFLY";
    let p2 = document.createElement("p");
    p2.innerText = "@bluefly";
    pT.append(p1, p2);
    left_top.append(img2, pT);
    let desc = document.createElement("p");
    desc.textContent = array[index].desc;
    desc.className = "description";
    desc_div.append(left_top, desc);
    div.append(img_div, desc_div);
    render_popup.append(div);
  }

  let clickCalc = 0;
  function reRender() {
    if (clickCalc > Math.floor(indexData.slideLeftRightImages.length / 2)) {
      clickCalc = Math.floor(indexData.slideLeftRightImages.length / 2);
      return;
    } else if (clickCalc < 0) {
      clickCalc = 0;
      return;
    }
    changeimage.style.transform = `translateX(${-12.5 * clickCalc}%)`;
  }
  let nextImg = document.querySelector(".clickLeft");
  let prevImg = document.querySelector(".clickRight");
  let changeimage = document.querySelector(".checkProduct");
  nextImg.addEventListener("click", () => {
    clickCalc++;
    reRender();
  });
  prevImg.addEventListener("click", () => {
    clickCalc--;
    reRender();
  });
};

renderLeftRightClickSlider();
