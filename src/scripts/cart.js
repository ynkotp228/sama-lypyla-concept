
const STORAGE_KEY = 'sama-lipyla-cart';
const UPDATE_EVENT = 'cart-updated';

// 1. Читання з localStorage з захистом
export function getCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return []; // захист від мусора в LS
    return parsed;
  } catch {
    return []; // приватний режим, поламаний JSON, etc.
  }
}

// 2. Запис у localStorage + диспатч події
function saveCart(cart) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent(UPDATE_EVENT, { detail: { cart } }));
  } catch {
    // приватний режим — корзина працює тільки в межах сесії, не зберігається
  }
}

// 3. Додавання товару
export function addToCart(productId) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  saveCart(cart);
}

// 4. Видалення товару
export function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
}

// 5. Зміна кількості
export function updateQuantity(productId, quantity) {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }
}

// 6. Підрахунок загальної кількості (для лічильника в Header)
export function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

// 7. Підрахунок суми (потребує products.ts)
export function getCartTotal(products) {
  return getCart().reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return product ? sum + (product.price * item.quantity) : sum;
  }, 0);
}