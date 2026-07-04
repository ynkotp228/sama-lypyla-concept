# CLAUDE.md — Сама Ліпила (concept redesign)

Указания для этого репозитория. Дополняют `c:\webdev\CLAUDE.md`.

## Что это

Концептуальный редизайн реального украинского бренда замороженных полуфабрикатов («Сама Ліпила», Львов и Винница). Учебный/портфолио-проект — **не** официальный сайт. Контент на украинском.

В отличие от остального `c:\webdev` (чистый HTML/CSS), это полноценный проект на **Astro 6 + Tailwind v4**. Статическая сборка (SSG), деплой на **GitHub Pages**.

## Стек и команды

- **Astro 6** (`.astro`-компоненты, файловая маршрутизация, `getStaticPaths` для динамических маршрутов).
- **Tailwind v4** через `@tailwindcss/vite` — конфигурация живёт в CSS (`src/styles/global.css` с `@theme` / `@custom-variant`), **без `tailwind.config.js`**.
- **Дизайн-токени** в `global.css` `@theme` (палитра брифа): `primary` (#E97817), `accent-red` (#C24A1F, CTA/hover), `accent-red-hover` (#A23C17, тёмный hover сплошных кнопок), `deep-blue` (#2B5F8C, бейдж «Новинка»/линки), `deep-blue-dark` (#0D2136, фон тёмных секций — B2B; на нём cream ~16:1, accent-red ~3.3:1 для крупного текста), `cream` (#FBF6EE, фон), `warm` (#2A1810, текст) → утилиты `bg-/text-/border-`. Вне брендовой палитры — служебный `success` (#15803D, green-700) + `success-soft` (#DCFCE7, green-100) для фидбека «успіх» (ОК-форма, `.is-added` в корзине). Базовый слой задаёт кремовый фон + тёплый текст + serif-заголовки. **Используй только эти токены — любой `bg-*/text-*` с именем, которого нет в `@theme`, молча даст пустой класс** (так был баг `bg-cream-light`).
- ⚠️ **Контраст (WCAG AA).** `primary` (#E97817) на светлом даёт лишь ~2.9:1 → **только декор**: заливки/тінти (`bg-primary/10`), бордеры, градиенты, `accent-color` радио. Для **текста/иконок/ссылок** и белого текста на заливке используй `accent-red` (4.9:1). Hover сплошных кнопок (`bg-accent-red text-white`) → `hover:bg-accent-red-hover` (не `hover:bg-primary` — белое на оранжевом ~2.9:1). Фокус-обводка и `focus:border/ring` в формах — тоже `accent-red`. Ссылка, у которой default уже `accent-red`, даёт hover-фидбек через `hover:underline`, а не сменой цвета.
- **Шрифты**: `font-display` = Lora (заголовки), `font-sans` = Inter (тело). Self-hosted через `@fontsource/lora` + `@fontsource/inter` (импорты весов в `Layout.astro`), **без Google Fonts CDN**.
- **TypeScript**, `astro/tsconfigs/strict`.
- Интеграции: `@astrojs/sitemap` + `astro-icon` (иконки Lucide из набора `@iconify-json/lucide`).
- **Иконки** — `astro-icon`: `import { Icon } from "astro-icon/components"` → `<Icon name="lucide:hand" class="h-5 w-5" aria-hidden="true" />`. Рендерятся инлайн-SVG со `stroke="currentColor"`, так что цвет задаётся через `text-*` на самой иконке или родителе (используем `accent-red`; размер — Tailwind `h-*/w-*`). Декоративные → `aria-hidden`. **Не все имена из lucide.dev есть в наборе** (напр. `snowflake-off` отсутствует — проверяй `@iconify-json/lucide/icons.json`). Раньше в проекте иконок не было (был emoji `🚚`); теперь единый паттерн — Lucide.

```
npm run dev      # localhost:4321
npm run build    # → ./dist (это же и шаг проверки — типизирует .astro)
npm run preview
```

Тестов нет. **Чтобы проверить изменение, запусти `npm run build`** и поищи (grep) по сгенерированному HTML в `dist/`.

## Подвох деплоя — BASE_URL

`astro.config.mjs`: `site: "https://ynkotp228.github.io"`, `base: "/sama-lypyla-concept/"`.

Из-за базового пути **каждая внутренняя ссылка/путь к ассету должны идти через `import.meta.env.BASE_URL`**:
```astro
const base = import.meta.env.BASE_URL;
<a href={`${base}catalog/${slug}`}>   // НЕ href="/catalog/..."
```
Жёстко прописанные абсолютные пути от корня (`/catalog`) ломаются на GitHub Pages. Централизованная навигация — в `src/data/nav.ts` (ссылки с завершающим `/`, чтобы избежать 301-редиректа).

⚠️ **Регистр имён файлов.** CI собирает на Linux (`ubuntu-latest`, `.github/workflows/deploy.yml`) — регистр в импортах ассетов должен **точно** совпадать с именем файла на диске (`HeroMainPage.webp`, не `heroMainPage.webp`). Локальная сборка на Windows регистронезависима и пропустит ошибку, а деплой упадёт.

## Структура

```
src/
  data/
    products.ts        # ← единственный источник правды по товарам/категориям (8 кат., 52 товара; см. ниже)
    locations.ts       # 23 точки самовывоза (5 Львов + 18 Винница): Point[] + getPointsByCity/getPointById.
                       #   Один источник и для /locations, и для <select> в чекауте корзины.
    nav.ts             # 6 ссылок хедера (Desktop.Nav читает отсюда); использует BASE_URL. Footer линкует руками.
  layouts/
    Layout.astro           # оболочка <html>: SEO/OG-мета (noindex!), шрифты (@fontsource), Header, <slot/>, Footer;
                           #   в конце <body> импортит ОБА скрипта: menu.js + cart.js
    ComingSoon.astro       # «сторінка в розробці»: лого + заголовок + <slot/> + CTA; проп title
  pages/
    index.astro              # главная = композиция из MainPageComponents (порядок см. ниже)
    catalog/index.astro      # лендинг «Меню» — PageHeader + Categories(showHeader=false) + Popular
    catalog/[category].astro # динамика: 8 страниц категорий через getStaticPaths + client-фильтры по тегам
    cart.astro               # ✅ РЕАЛЬНАЯ страница: корзина + <dialog> оформления заказа (data-state form/preview)
    locations.astro          # ✅ РЕАЛЬНАЯ: города из locations.ts, зоны доставки (mock) + точки → Google Maps
    contacts.astro           # ✅ РЕАЛЬНАЯ: PageHeader + ContactsBlock + SocialMedia + Form (2 колонки)
    about.astro              # ✅ РЕАЛЬНАЯ: PageHeader + 3 секции (принципы-checklist / контраст-card / локальность+CTA→/locations)
    wholesale.astro          # ✅ РЕАЛЬНАЯ (B2B): PageHeader + мини-блок «чому з нами» + тариф-сітка (3 карты) + Formspree-форма (data-state form/sent, БЕЗ <dialog>)
    privacy.astro            # 🚧 заглушка на ComingSoon (с title). ЕДИНСТВЕННАЯ оставшаяся заглушка.
    404.astro, robots.txt.ts
  components/
    PageHeader.astro   # mini-hero внутренних страниц (title + description + опц. secondary); на /catalog, /contacts, /cart, /locations
    LayoutComponents/  Header (лого+назва, Desktop.Nav, иконка корзины со счётчиком #cart-count), Footer (4 колонки)
    Menu/              BurgerButton, BurgerPanel, Desktop.Nav  (мобильный drawer + десктоп-навигация)
    MainPageComponents/ Hero, Categories(+CategoriesItems; проп showHeader), USP, Popular(+ProductCard),
                        HowToMakeOrder, Reviews, B2BTeaser, LocationsTeaser
    CatalogCategoryComponents/ ProductsCard (бейджи + <details> + кнопка «+ в кошик»), FilterButton
    ContactsComponents/ Form, ContactsBlock, SocialMedia
  scripts/  menu.js (drawer), cart.js (✅ полная логика корзины: localStorage + событие cart-updated + генерация заказа)
  assets/images/  products-ready/<category>/*.jpg, MainPageImages/(categories|USPimages)/*.webp, HeroMainPage.webp, b2b.webp, logoSL.png
public/   фавиконки
```

**Две разные карточки товара** (не путать):
- `CatalogCategoryComponents/ProductsCard.astro` — на страницах категорий. Полная: до 2 бейджей, `<details>`, кнопка «+ в кошик» (`data-product-id`).
- `MainPageComponents/ProductCard.astro` — в блоке Popular (главная + `/catalog/`). Тизер: ведёт на страницу категории (`/catalog/<slug>/`), только бейдж «Хіт», БЕЗ кнопки корзины и `<details>`.

**Порядок секций главной** (`index.astro`): Hero → Categories(title="Меню") → USP(#USP) → Popular → HowToMakeOrder → Reviews → B2BTeaser → LocationsTeaser.

## Слой данных — `src/data/products.ts`

Центральный узел. Всё (каталог, фильтры, хиты на главной) читает отсюда.

- Типы: `CategorySlug` (8 категорий), `ProductTag` (`pisne`, `dytyache`, `myasne`, `z-syrom`, `gostre`), `Product`, `Category`.
- Данные: массивы `categories` и `products`, оба `as const` → **только для чтения**. Перед `.sort()`/`.reverse()` копируй через spread.
- Подписи: `tagLabels: Record<ProductTag,string>` — текст для кнопок-фильтров; порядок ключей = порядок кнопок.
- Хелперы: `getProductsByCategory`, `getProductById`, `getHits(limit)`, `getCategoryBySlug`, `getTagsForCategory` (теги, реально присутствующие в категории, для построения её панели фильтров).
- Изображения товаров **импортируются как модули** (`ImageMetadata`), а не строковые пути — это требуется для оптимизации изображений в Astro.

## Соглашения / паттерны

- **`<Picture>`** (`astro:assets`) для адаптивных карточек каталога: `widths={[280,350,600]}` + `sizes` под брейкпоинты сетки + `formats={['avif','webp']}` + **`fallbackFormat="webp"`**. ⚠️ Без `fallbackFormat` Astro генерит `<img>`-фолбэк в **PNG** (по умолчанию), раздувая dist на мегабайты (hero был 1.7 МБ, b2b 2.9 МБ) — всегда ставь `fallbackFormat="webp"`. **`<Image>`** для ассетов фиксированного размера (логотип). ⚠️ **Стилизация внутреннего `<img>`.** В этой версии Astro `<Picture>`/`<Image>` вешают проп `class` **прямо на сгенерированный `<img>`** (у обёртки `<picture>` класса нет). Поэтому утилиты пиши **напрямую** — `class="w-full aspect-4/3 object-cover"`, — а **не** через `[&_img]:...`: селектор `[&_img]` означает «`<img>` *внутри* элемента с этим классом», т.е. ищет `<img>` внутри самого `<img>` и молча ни на что не матчится (no-op). Так и родился баг Hero: `[&_img]:object-cover` не применился, `<img>` остался с дефолтным `object-fit: fill` и плющил широкое фото на узком экране (фикс — прямой `object-cover object-center`). ⚠️ **Легаси:** карточки `ProductsCard`/`ProductCard`/`CategoriesItems`/`USP`/`B2BTeaser` до сих пор носят мёртвые `[&_img]:` классы — визуально терпимо (без прямого `h-full` картинка масштабируется дефолтом Preflight `max-width:100%; height:auto`), но `aspect-4/3`/`object-cover`/hover-`scale-105` там **не работают**; мигрируй на прямые утилиты, когда будешь эти файлы трогать.
- **Фильтры категорий** (каталог) — на стороне клиента, без фреймворка: карточки получают `class="product-card"` + `data-tags="tag1 tag2"`; кнопки получают `data-filter`; инлайновый `<script>` переключает `hidden` и `is-active`. Взаимоисключающие (как радио) + сброс «Усі». См. `pages/catalog/[category].astro` и `CatalogCategoryComponents/`.
- **Мобильное меню** — `menu.js` переключает `is-open` на `#sidebar`/`#sidebar-overlay`; `is-open` — это Tailwind `@custom-variant`, объявленный в `global.css`. Закрывается по Esc / клику по оверлею / клику по ссылке.
- Брейкпоинты сетки по всему проекту: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (каталог) / `lg:grid-cols-4` (главная). Цвета — только токены палитры (`primary/accent-red/deep-blue/cream/warm`), а **не** дефолтные `orange-*/gray-*`; распределение `primary` (декор) vs `accent-red` (текст/CTA/hover) — см. пункт про контраст выше.
- **Бейджи на карточке товара** (`CatalogCategoryComponents/ProductsCard.astro`): максимум 2, приоритет Хіт (`isHit`) → Новинка (`isNew`) → первый тег из `tags[]`. Описание товара — в `<details>` «Детальніше».
- **Внутренние страницы**: общий мини-герой `PageHeader` (title + description). «В розробці» — лейаут `ComingSoon` (проп `title`, есть `<slot/>`). Компонент `Categories` принимает `showHeader={false}`, когда заголовок даёт `PageHeader` (чтобы не было двух «Меню»).
- **Корзина** (`scripts/cart.js`) — vanilla-модуль, состояние в `localStorage` (ключ `sama-lipyla-cart`, массив `{id, quantity}[]`). Экспорты: `getCart / addToCart / removeFromCart / updateQuantity / getCartCount / getCartTotal(products) / generateOrderMessage(cart, products, formData) / buildViberLink / buildTelegramLink`. Любая мутация диспатчит `window` CustomEvent **`cart-updated`** — его слушают счётчик в Header и рендер `/cart`. Кросс-таб синк — через нативное `storage`-событие. `addToCart` вызывается делегированным листенером на `document` из `ProductsCard.astro` (по `data-product-id`), с временным фидбеком `.is-added` (1.2с).
- **Рендер списка `/cart`** — клиентский JS. Данные товаров приходят НЕ импортом `products` в клиентский `<script>` (это притащило бы в бандл ESM-импорты оригиналов картинок, до ~264 КБ), а готовым JSON `#cart-products` (`<script type="application/json">`), собранным во frontmatter `cart.astro`: только нужные поля + webp-мініатюра ~200px через `getImage()` (≈8 КБ). При добавлении поля в карточку кошика — расширяй и `cartProducts`, и тип `CartProduct` в клиентском скрипте.
- **Чекаут** (`cart.astro`) — нативный `<dialog>` с тремя состояниями через `data-state` (`form` / `preview` / `empty`, переключаются CSS'ом → прогрессивное улучшение). Форма: контакты + способ (самовывоз/доставка) + город → `<select>` точек из `locations.ts`; submit НЕ отправляет никуда, а генерит текст заказа + ссылки Viber/Telegram (это концепт-демо). Escape перехватывается внутри диалога, чтобы не всплыть в `menu.js`. **Edge case пустого кошика** (спорожнили в сусідній вкладке, пока диалог открыт): submit-хендлер **первым делом** проверяет `getCart().length === 0` → `showEmptyCartMessage()` показывает состояние `empty` (inline `aria-live`-сообщение, БЕЗ `alert`) и авто-закрывает диалог через 3.5с. Кейс только кросс-таб (диалог модальный — правку корзины в той же вкладке блокирует), поэтому `renderCart` слушает и `storage` (не только `cart-updated`), чтобы список под диалогом обновился. Фокус после `close` — на CTA пустого состояния `#browse-catalog-btn` (элемента-инициатора «Оформити замовлення» в пустом кошике уже нет).
- **Tailwind v4 — канонические утилиты**: градиенты `bg-linear-to-*` (не `bg-gradient-to-*`), data-варианты `data-[state=...]:` (не `[&[data-state=...]]:`).

## Текущее состояние

Актуально; подробная карта страниц/секций — в `concept-plan-info/site-arhitecrure.md` (v4).

- **Готово**: модель данных; вся вёрстка по брифу (палитра + Lora/Inter). Главная (8 секций), лендинг `/catalog/`, 8 страниц категорий (client-фильтры + бейджи + `<details>`), `404`.
- **Полностью рабочие страницы** (уже НЕ заглушки): **`/cart/`** — корзина + чекаут-диалог (`cart.js` реализован целиком); **`/locations/`** — точки из `locations.ts` + зоны доставки + Google Maps; **`/contacts/`** — контакты + соцсети + форма; **`/about/`** — PageHeader + 3 секции (принципы-checklist / контраст-card / локальность+CTA→`/locations`), иконки Lucide через `astro-icon`; **`/wholesale/`** — B2B: мини-блок «чому з нами» + тариф-сітка (3 карты, данные во frontmatter) + Formspree-форма (AJAX как на `/contacts`, состояния form/sent через `data-state`, БЕЗ `<dialog>`, honeypot `_gotcha`).
- **Оставшаяся заглушка** (`ComingSoon`): **`/privacy/`**.
- **Дальше**: текст `/privacy`.

## Заметки по работе здесь

- **Держи этот файл актуальным.** После любого структурного изменения — новой страницы, нового компонента, нового экспорта/хелпера в `products.ts`, переименованного маршрута или изменения общего паттерна/соглашения — обнови соответствующий раздел здесь в том же изменении, чтобы он не устарел. Рутинные правки (стили, текст, исправления багов внутри существующего файла) обновления не требуют.
- `teoriya-den-4.md` — собственные конспекты студента по урокам (getStaticPaths / `<Picture>` / фильтры) — это контекст, а не задача.
- Комментарии в компонентах на украинском; сохраняй этот стиль при редактировании.
- Не вводи `tailwind.config.js` — это Tailwind v4 (конфиг в CSS). Не добавляй React/острова — проект статический по задумке.
