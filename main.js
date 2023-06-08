import "./src/scss/index.scss";

import products from "./src/js/constants/productsData";

const createElement = (tag, attributes = {}, content = "") => {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  element.innerHTML = content;
  return element;
};

const carousel = document.querySelector(".app__container__carousel");

products.forEach((product) => {
  const productCard = createElement("a", {
    href: "#",
    target: "_blank",
    class: "app__container__carousel__product-card",
  });
  const arrowContainer = createElement("div", {
    class: "app__container__carousel__product-card__product-arrow-container",
  });
  const productImg = createElement("img", {
    class: "app__container__carousel__product-card__product-image",
    src: product.imgSrc,
    alt: product.imgAlt,
  });
  const productTitle = createElement(
    "h3",
    {
      class: "app__container__carousel__product-card__product-title",
    },
    product.name
  );
  const arrowIcon = createElement("img", {
    class:
      "app__container__carousel__product-card__product-arrow-container__product-arrow",
    src: "./icons/Arrow.svg",
    alt: "Arrow icon",
  });

  productCard.append(productImg, productTitle, arrowContainer);
  arrowContainer.append(arrowIcon);
  carousel.appendChild(productCard);
});
