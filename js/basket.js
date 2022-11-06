let d = document,
  pizzaItem = d.querySelectorAll(".pizza__item"), // блок каждого товара
  basketWrapper = d.querySelector(".basket-wrapper"); // блок вывода данных корзины

// Функция кроссбраузерной установки обработчика событий
function addEvent(elem, type, handler) {
  if (elem.addEventListener) {
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent("on" + type, function () {
      handler.call(elem);
    });
  }
  return false;
}

// Получаем данные из LocalStorage
function getCartData() {
  return JSON.parse(localStorage.getItem("cart"));
}

// Записываем данные в LocalStorage
function setCartData(o) {
  localStorage.setItem("cart", JSON.stringify(o));
  return false;
}

// Добавляем товар в корзину
function addToCart(e) {
  this.disabled = true; // блокируем кнопку на время операции с корзиной
  let cartData = getCartData() || {}; // получаем данные корзины или создаём новый объект, если данных еще нет
  parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
    itemId = this.getAttribute("data-id"), // ID товара
    itemTitle = parentBox.querySelector(".pizza__item-title").innerHTML, // название товара
    itemPrice = parentBox.querySelector(".pizza__item-price").innerHTML; // стоимость товара
  if (cartData.hasOwnProperty(itemId)) {
    // если такой товар уже в корзине, то добавляем +1 к его количеству
    cartData[itemId][2] += 1;
  } else {
    // если товара в корзине еще нет, то добавляем в объект
    cartData[itemId] = [itemTitle, itemPrice, 1];
  }
  if (!setCartData(cartData)) {
    // Обновляем данные в LocalStorage
    this.disabled = false; // разблокируем кнопку после обновления LS
  }
  return false;
}

// Устанавливаем обработчик события на каждую кнопку "Добавить в корзину"
for (let i = 0; i < pizzaItem.length; i++) {
  addEvent(pizzaItem[i].querySelector(".pizza__item-add"), "click", addToCart);
}

// Открываем корзину со списком добавленных товаров
function openCart(e) {
  d.querySelector(".basket-wrapper").style.display = "block";
  let cartData = getCartData(), // вытаскиваем все данные корзины
    totalItems = "";
  // если что-то в корзине уже есть, начинаем формировать данные для вывода
  if (cartData !== null) {
    totalItems =
      '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
    for (let items in cartData) {
      totalItems += "<tr>";
      for (let i = 0; i < cartData[items].length; i++) {
        totalItems += "<td>" + cartData[items][i] + "</td>";
      }
      totalItems += "</tr>";
    }
    totalItems += "</table>";
    basketWrapper.innerHTML = totalItems;
  } else {
    // если в корзине пусто, то сигнализируем об этом
    basketWrapper.innerHTML = "В корзине пусто!";
  }
  return false;
}
/* Открыть корзину */
addEvent(d.getElementById("checkout"), "click", openCart);
/* Очистить корзину */
addEvent(d.getElementById("clear_cart"), "click", function (e) {
  localStorage.removeItem("cart");
  basketWrapper.innerHTML = "Корзина очишена.";
});
