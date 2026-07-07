
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
// ──────────────────────────────────────
// Order number generation
// ──────────────────────────────────────
// Генерує номер замовлення у форматі XY-YYMMDD-HHMM-SS, де:
//   XY — префікс зі способу отримання + міста: S (самовивіз) / D (доставка)
//        та L (Львів) / V (Вінниця). Напр. самовивіз Вінниця → SV, доставка Львів → DL.
//   YYMMDD-HHMM-SS — дата й час формування замовлення. Без сервера й спільної БД
//        це найпростіший спосіб дати кожному замовленню несхожий номер: у різних
//        юзерів (і в одного юзера в різні моменти) час майже завжди відрізняється.
/**
 * @param {{ method?: 'pickup' | 'delivery', city?: 'lviv' | 'vinnytsia', date?: Date }} [opts]
 * @returns {string}
 */
export function generateOrderNumber({ method, city, date = new Date() } = {}) {
  const prefix =
    (method === 'delivery' ? 'D' : 'S') + (city === 'vinnytsia' ? 'V' : 'L');

  const p2 = (n) => String(n).padStart(2, '0');
  const yy = String(date.getFullYear()).slice(-2);
  const datePart = `${yy}${p2(date.getMonth() + 1)}${p2(date.getDate())}`;
  const timePart = `${p2(date.getHours())}${p2(date.getMinutes())}`;

  return `${prefix}-${datePart}-${timePart}-${p2(date.getSeconds())}`;
}

// ──────────────────────────────────────
// Order message generation (week 8)
// ──────────────────────────────────────
export function generateOrderMessage(cart, products, formData) {
  const lines = ['Замовлення з сайту Сама Ліпила:'];
  // Номер замовлення (якщо переданий) — одразу під заголовком, щоб він потрапив
  // і в прев'ю, і в текст, що копіюється / йде у Viber-Telegram.
  if (formData.orderNumber) lines.push(`Номер замовлення: ${formData.orderNumber}`);
  lines.push('');
  let total = 0;

  for (const item of cart) {
    const product = products.find(p => p.id === item.id);
    if (!product) continue;
    const subtotal = product.price * item.quantity;
    total += subtotal;
    lines.push(`• ${product.name} × ${item.quantity}: ${subtotal} ₴`);
  }

  lines.push('', `Разом: ${total} ₴`, '');
  lines.push(`Ім'я: ${formData.name}`);
  lines.push(`Телефон: ${formData.phone}`);
  lines.push(`Місто: ${formData.city === 'lviv' ? 'Львів' : 'Вінниця'}`);

  if (formData.method === 'pickup') {
    lines.push(`Самовивіз: ${formData.pointAddress}`);
  } else {
    lines.push(`Доставка: ${formData.deliveryAddress}`);
  }

  if (formData.comment) lines.push(`Коментар: ${formData.comment}`);

  return lines.join('\n');
}

export function buildViberLink(phone, message) {
  const cleanPhone = '+' + phone.replace(/\D/g, '');
  return `viber://chat?number=${cleanPhone}&text=${encodeURIComponent(message)}`;
}
export function buildTelegramLink(username, message) {
  const cleanUsername = username.replace(/^@/, '');
  return `https://t.me/${cleanUsername}?text=${encodeURIComponent(message)}`;
}