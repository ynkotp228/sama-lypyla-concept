# CLAUDE.md — Сама Ліпила (concept redesign)

Указания для этого репозитория. Дополняют `c:\webdev\CLAUDE.md`.

## Что это

Концептуальный редизайн реального украинского бренда замороженных полуфабрикатов («Сама Ліпила», Львов и Винница). Учебный/портфолио-проект — **не** официальный сайт. Контент на украинском.

В отличие от остального `c:\webdev` (чистый HTML/CSS), это полноценный проект на **Astro 6 + Tailwind v4**. Статическая сборка (SSG), деплой на **GitHub Pages**.

## Стек и команды

- **Astro 6** (`.astro`-компоненты, файловая маршрутизация, `getStaticPaths` для динамических маршрутов).
- **Tailwind v4** через `@tailwindcss/vite` — конфигурация живёт в CSS (`src/styles/global.css` с `@theme` / `@custom-variant`), **без `tailwind.config.js`**.
- **Дизайн-токени** в `global.css` `@theme` (палитра брифа): `primary` (#E97817), `accent-red` (#C24A1F, CTA/hover), `deep-blue` (#2B5F8C), `cream` (#FBF6EE, фон), `warm` (#2A1810, текст) → утилиты `bg-/text-/border-`. Базовый слой задаёт кремовый фон + тёплый текст + serif-заголовки.
- **Шрифты**: `font-display` = Lora (заголовки), `font-sans` = Inter (тело). Self-hosted через `@fontsource/lora` + `@fontsource/inter` (импорты весов в `Layout.astro`), **без Google Fonts CDN**.
- **TypeScript**, `astro/tsconfigs/strict`.
- Интеграция `@astrojs/sitemap`.

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
    products.ts        # ← единственный источник правды (см. ниже)
    nav.ts             # ссылки навигации хедера/футера (использует BASE_URL)
  layouts/
    Layout.astro           # оболочка <html>: SEO/OG-мета, шрифты (@fontsource), Header, <slot/>, Footer, menu.js
    ComingSoon.astro       # «сторінка в розробці»: лого + заголовок + <slot/> + CTA; проп title
  pages/
    index.astro              # главная = композиция из MainPageComponents
    catalog/[category].astro # динамика: 8 страниц категорий через getStaticPaths + фильтры по тегам
    catalog/index.astro      # лендинг каталога — PageHeader + Categories(showHeader=false) + Popular
    about|cart|contacts|locations|privacy|wholesale.astro  # заглушки на ComingSoon (с title); contacts ещё рендерит Form
    404.astro, robots.txt.ts
  components/
    PageHeader.astro   # mini-hero для внутренних страниц (заголовок + описание); сейчас на /catalog
    LayoutComponents/  Header (лого+назва, nav, иконка корзины со счётчиком #cart-count), Footer
    Menu/              BurgerButton, BurgerPanel, Desktop.Nav  (мобильный drawer + десктоп-навигация)
    MainPageComponents/ Hero, Categories(+CategoriesItems; проп showHeader), USP, Popular(+ProductCard),
                        HowToMakeOrder, Reviews, B2BTeaser, LocationsTeaser, About
    CatalogCategoryComponents/ ProductsCard (бейджи + <details>), FilterButton
    Form.astro
  scripts/  menu.js (открытие/закрытие drawer), cart.js (заглушка)
  assets/images/  products-ready/<category>/*.jpg, MainPageImages/categories/*.webp, logoSL.png
public/   фавиконки
```

## Слой данных — `src/data/products.ts`

Центральный узел. Всё (каталог, фильтры, хиты на главной) читает отсюда.

- Типы: `CategorySlug` (8 категорий), `ProductTag` (`pisne`, `dytyache`, `myasne`, `z-syrom`, `gostre`), `Product`, `Category`.
- Данные: массивы `categories` и `products`, оба `as const` → **только для чтения**. Перед `.sort()`/`.reverse()` копируй через spread.
- Подписи: `tagLabels: Record<ProductTag,string>` — текст для кнопок-фильтров; порядок ключей = порядок кнопок.
- Хелперы: `getProductsByCategory`, `getProductById`, `getHits(limit)`, `getCategoryBySlug`, `getTagsForCategory` (теги, реально присутствующие в категории, для построения её панели фильтров).
- Изображения товаров **импортируются как модули** (`ImageMetadata`), а не строковые пути — это требуется для оптимизации изображений в Astro.

## Соглашения / паттерны

- **`<Picture>`** (`astro:assets`) для адаптивных карточек каталога: `widths={[280,350,600]}` + `sizes` под брейкпоинты сетки + `formats={['avif','webp']}`. **`<Image>`** для ассетов фиксированного размера (логотип). Стилизуй внутренний `<img>` через произвольный селектор Tailwind `[&_img]:...`.
- **Фильтры категорий** (каталог) — на стороне клиента, без фреймворка: карточки получают `class="product-card"` + `data-tags="tag1 tag2"`; кнопки получают `data-filter`; инлайновый `<script>` переключает `hidden` и `is-active`. Взаимоисключающие (как радио) + сброс «Усі». См. `pages/catalog/[category].astro` и `CatalogCategoryComponents/`.
- **Мобильное меню** — `menu.js` переключает `is-open` на `#sidebar`/`#sidebar-overlay`; `is-open` — это Tailwind `@custom-variant`, объявленный в `global.css`. Закрывается по Esc / клику по оверлею / клику по ссылке.
- Брейкпоинты сетки по всему проекту: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (каталог) / `lg:grid-cols-4` (главная). Акцентный цвет — токен `primary` (оранжевый бренда), hover/CTA — `accent-red`. Используй токены палитры (`primary/accent-red/deep-blue/cream/warm`), а **не** дефолтные `orange-*/gray-*`.
- **Бейджи на карточке товара** (`CatalogCategoryComponents/ProductsCard.astro`): максимум 2, приоритет Хіт (`isHit`) → Новинка (`isNew`) → первый тег из `tags[]`. Описание товара — в `<details>` «Детальніше».
- **Внутренние страницы**: общий мини-герой `PageHeader` (title + description). «В розробці» — лейаут `ComingSoon` (проп `title`, есть `<slot/>` для доп. контента вроде `Form`). Компонент `Categories` принимает `showHeader={false}`, когда заголовок даёт `PageHeader` (чтобы не было двух «Меню»).
- **Tailwind v4 — канонические утилиты**: градиенты `bg-linear-to-*` (не `bg-gradient-to-*`), data-варианты `data-[state=...]:` (не `[&[data-state=...]]:`).

## Текущее состояние (на неделю 7)

- **Готово**: модель данных; вся вёрстка/стилизация по брифу (палитра + Lora/Inter) — главная и её секции, лендинг каталога, страницы категорий (фильтры + бейджи + `<details>`), `ComingSoon`, `404`, форма контактов. Header по IA (+ иконка корзины), Footer оформлен.
- **Заглушки**: `about/cart/contacts/locations/privacy/wholesale.astro` теперь рендерят оформленный `ComingSoon` (не пустые; `contacts` показывает `Form`). `scripts/cart.js` всё ещё пустой — логика корзины (добавление по `data-product-id`, счётчик `#cart-count`, `localStorage`, страница `/cart`) не реализована.
- **Дальше**: корзина (`cart.js`), контент `/locations` (адреса + зоны доставки), `/about` и `/wholesale` (неделя 9).

## Заметки по работе здесь

- **Держи этот файл актуальным.** После любого структурного изменения — новой страницы, нового компонента, нового экспорта/хелпера в `products.ts`, переименованного маршрута или изменения общего паттерна/соглашения — обнови соответствующий раздел здесь в том же изменении, чтобы он не устарел. Рутинные правки (стили, текст, исправления багов внутри существующего файла) обновления не требуют.
- `teoriya-den-4.md` — собственные конспекты студента по урокам (getStaticPaths / `<Picture>` / фильтры) — это контекст, а не задача.
- Комментарии в компонентах на украинском; сохраняй этот стиль при редактировании.
- Не вводи `tailwind.config.js` — это Tailwind v4 (конфиг в CSS). Не добавляй React/острова — проект статический по задумке.
