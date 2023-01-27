import nav from "../components/navbar.js";
import footer from "../components/footer.js";

document.getElementById("render_navbar").innerHTML = nav();
document.getElementById("render_footer").innerHTML = footer();

const productData = JSON.parse(localStorage.getItem("product"));
console.log("productData", productData);

const renderProduct = () => {
  let render_product = document.getElementById("render_product");
  let div1 = document.createElement("div");
  div1.classList.add("div1");

  let div2 = document.createElement("div");
  div2.classList.add("div2");
  let div3 = document.createElement("div");
  let div21 = document.createElement("div");
  let img1 = document.createElement("img");
  img1.src = productData.img1;
  div21.append(img1);

  let div22 = document.createElement("div");
  let img2 = document.createElement("img");
  img2.src = productData.img2;
  div22.append(img2);

  let div23 = document.createElement("div");
  let img3 = document.createElement("img");
  img3.src = productData.img3;
  div23.append(img3);
  img1.style.height = "100%"

  div21.classList.add("div21");
  div22.classList.add("div21");
  div23.classList.add("div21");
  div2.append(div21, div22, div23);

  div3.classList.add("div3");
  let avatar = document.createElement("img");
  avatar.src = productData.avatar;
  avatar.style.width = "100%";
  div3.append(avatar);

  div1.append(div2, div3);

  let div4 = document.createElement("div");

  let div41 = document.createElement("div");
  let h5 = document.createElement("h5");
  h5.textContent = productData.manufacturer;
  let h3 = document.createElement("h3");
  h3.textContent = productData.title;

  div41.append(h5, h3)
  div4.append(div41)
  div4.classList.add("div4");


  render_product.append(div1, div4);
};

renderProduct();
