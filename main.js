import "./style.css";

import products from "./src/js/constants/productsData";

const createElement = (tag, attributes = {}, content = "") => {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  element.innerHTML = content;
  return element;
};

const carousel = document.querySelector(".carousel");

products.forEach((product) => {
  const productCard = createElement("div", {
    key: product.id,
    class: "product-card",
  });
  const productImg = createElement("img", {
    class: "product-image",
    src: product.imgSrc,
    alt: product.imgAlt,
  });
  const productTitle = createElement(
    "h3",
    {
      class: "product-title",
    },
    product.name
  );
  const arrowIcon = createElement("img", {
    class: "arrow-icon",
    src: "./icons/Arrow.svg",
    alt: "Arrow icon",
  });

  productCard.appendChild(productImg);
  productCard.appendChild(productTitle);
  productCard.appendChild(arrowIcon);

  carousel.appendChild(productCard);
});
