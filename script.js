const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input");
const productsList = document.querySelector(".content-main__list");

const array = [
  {
    id: 0,
    src: "./src/img/img.png",
    alt: "card-img",
    title: "Первый товар",
    price: "171 ₽",
    adress: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
  },
  {
    id: 1,
    src: "./src/img/img.png",
    alt: "card-img",
    title: "Второй товар",
    price: "172 ₽",
    text: "Казань, р-н Вахитовский",
    span: "10 июля 11:39",
  },
  {
    id: 2,
    src: "./src/img/img.png",
    alt: "card-img",
    title: "Третий товар",
    price: "173 ₽",
    adress: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
  },
  {
    id: 3,
    src: "./src/img/img.png",
    alt: "card-img",
    title: "Четвертый товар",
    price: "174 ₽",
    text: "Казань, р-н Вахитовский",
    span: "10 июля 11:39",
  },
  {
    id: 4,
    src: "./src/img/img.png",
    alt: "card-img",
    title: "Пятый товар",
    price: "175 ₽",
    adress: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
  },
  {
    id: 5,
    src: "./src/img/img.png",
    alt: "card-img",
    title: "Шестой товар",
    price: "176 ₽",
    text: "Казань, р-н Вахитовский",
    span: "10 июля 11:39",
  },
];

const render = (array) => {
  productsList.innerHTML = "";
  array.forEach((element) => {
    productsList.insertAdjacentHTML(
      "beforeend",
      `<a href="/product.html" class="content-main__list-item">
          <div class="content-main__list-item--img">
              <img src=${element.src} alt=${element.alt}>
          </div>
          <h5 class="content-main__list-item--title">${element.title}</h5>
          <strong class="content-main__list-item--price">${element.price}</strong>
          <div class="content-main__list-item--desc-box">
              <span class="content-main__list-item--desc">${element.adress}</span>
              <span class="content-main__list-item--desc">${element.date}</span>
          </div>
      </a> `
    );
  });
};

render(array);

const filtredArray = (array, value) => {
  console.log(array);
  console.log(value);
  return array.filter((item) => {
    return item.title.includes(value) || item.price.includes(value);
  });
};

productsList.style.justifyContent = "flex-start";
productsList.style.gap = "30px";

searchBtn.addEventListener("click", () => {
  render(filtredArray(array, searchInput.value));
});
