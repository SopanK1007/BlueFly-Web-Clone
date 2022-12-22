import nav from "../components/navbar.js";
import footer from "../components/footer.js";
import productsData from "../data/productsData.json" assert { type: "json" };
console.log("productsData", productsData.womensClothing);

document.getElementById("render_navbar").innerHTML = nav();
document.getElementById("render_footer").innerHTML = footer();

document.getElementById("myP1").addEventListener("click", () => {
  document.getElementById("myDiv1").classList.toggle("hide");
});
document.getElementById("myP2").addEventListener("click", () => {
  document.getElementById("myDiv2").classList.toggle("hide");
});
document.getElementById("myP3").addEventListener("click", () => {
  document.getElementById("myDiv3").classList.toggle("hide");
});
document.getElementById("myP4").addEventListener("click", () => {
  document.getElementById("myDiv4").classList.toggle("hide");
});
document.getElementById("myP5").addEventListener("click", () => {
  document.getElementById("myDiv5").classList.toggle("hide");
});

const renderData = () => {
  let container = document.getElementById("render_all_products");
  container.innerHTML = "";
  productsData.womensClothing.forEach((el) => {
    let div = document.createElement("div");
    div.classList.add("append_product");
    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img1;
    div.addEventListener("mouseover", () => {
      if (el.img1 === el.img2) {
        img.src = el.img3;
      } else {
        img.src = el.img2;
      }
    });
    div.addEventListener("mouseout", () => {
      img.src = el.img1;
    });
    div.addEventListener("click", () => {
      sentProductData(el)
    });
    div1.classList.add("img_div");
    div1.append(img);
    let div2 = document.createElement("div");
    div2.classList.add("append_info");
    let p1 = document.createElement("p");
    p1.textContent = el.manufacturer;
    p1.classList.add("manufacturer");
    let p2 = document.createElement("p");
    p2.textContent = el.title;
    p2.classList.add("title");
    let p3 = document.createElement("p");
    let sp1 = document.createElement("span");
    sp1.textContent = el.strPrice;
    sp1.classList.add("strPrice");
    let sp2 = document.createElement("span");
    sp2.textContent = el.price;
    sp2.classList.add("price");
    p3.append(sp1, sp2);
    div2.append(p1, p2, p3);
    div.append(div1, div2);
    container.append(div);
  });
};

renderData();

function sentProductData(el){
  localStorage.setItem("product", JSON.stringify(el));
  window.location.href = "product.html"
}