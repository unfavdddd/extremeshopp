// Создаем объект "корзина"
const basket = {
  items: [], // Массив для хранения товаров
  totalPrice: 0, // Общая стоимость всех товаров

  // Метод добавления товара в корзину
  addItem(item) {
    this.items.push(item);
    this.totalPrice += item.price;
  },

  // Метод удаления товара из корзины
  removeItem(itemId) {
    const index = this.items.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      const removedItem = this.items.splice(index, 1)[0];
      this.totalPrice -= removedItem.price;
    }
  },

  // Метод получения общей стоимости товаров
  getTotalPrice() {
    return this.totalPrice;
  },

  // Метод очистки корзины
  clearBasket() {
    this.items = [];
    this.totalPrice = 0;
  },
};

// Пример использования корзины

// Определяем несколько товаров
const apple = { id: 1, name: "Яблоко", price: 50 };
const banana = { id: 2, name: "Банан", price: 30 };
const orange = { id: 3, name: "Апельсин", price: 70 };

// Добавляем товары в корзину
basket.addItem(apple);
basket.addItem(banana);
basket.addItem(orange);

console.log("Товары в корзине:", basket.items);
console.log("Общая стоимость:", basket.getTotalPrice());

// Удаляем товар из корзины
basket.removeItem(2); // удаляем банан

console.log("Товары после удаления:", basket.items);
console.log("Новая общая стоимость:", basket.getTotalPrice());
