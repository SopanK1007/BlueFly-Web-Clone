import nav from "../components/navbar.js";
import footer from "../components/footer.js";

document.getElementById("render_navbar").innerHTML = nav();
document.getElementById("render_footer").innerHTML = footer();

const productData = JSON.parse(localStorage.getItem("product"));
console.log("productData", productData);

// const renderProduct = () => {
//     let container = document.
// };
