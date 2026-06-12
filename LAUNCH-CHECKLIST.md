ПОЧАТОК РОБОТИ:


npm install
npm run dev 

Сам сайт:

ОБОВ'ЯЗКОВО ЗМІНИТИ base на власний у astro.config.mjs:12
ЗМІНИТИ site на свій домен у astro.config.mjs:11

Тексти / SEO:

Layout.astro:12 — title (назва вкладки)
Layout.astro:13 — description
Layout.astro:33 — og:site_name

Навігація (один файл на весь сайт):

src/data/nav.ts:4-7 — пункти меню (name + href). Міняєш тут — змінюється і в шапці, і в бургері.

Футер:

Footer.astro:12 — alt лого
Footer.astro:20-24 — прибрати дисклеймер «навчальний проєкт» на клієнтських сайтах

Зображення:

Замінити logo.png, heroMainPage.webp, apple-touch-icon.png, favicon-32.png на власні.

Форма:

Змінити Form.astro:13 на свій лінк

Бургер меню:

Що міняти?
Файл `BurgerButton.astro` - Міняти лише `#@`
Файл `BurgerPanel.astro` - Класи виду(строки 37-40) та `#@` (
    ### А) Збоку (sidebar) — стоїть за замовчуванням
    
    h-full w-72 max-w-[85vw]
    left-0 top-0  
    -translate-x-full 
    is-open:translate-x-0
    
    ### Б) Зверху-вниз (dropdown зверху)
     
    w-full 
    left-0 top-0  
    -translate-y-full  
    is-open:translate-y-0  
    (для плавності можна додати `max-h-[80vh] overflow-y-auto`)
    
    ### В) Fullscreen (на весь екран, поява через прозорість)
    Тут замість `transition-transform` використовуй `transition-opacity`:
    inset-0
    opacity-0 
    pointer-events-none  
    is-open:opacity-100 
    is-open:pointer-events-auto
)
Файл  `DesktopNav.astro` - Міняти лише `#@`
Файл `BurgerPanel.astro:32` - `#@ Назва / лого` у шапці панелі


Під час запуску:

npm install — поставити залежності
npm run dev — перевірити локально
npm run build — переконатися, що збирається без помилок
Запушити в main → GitHub Pages задеплоїть автоматично (.github/workflows/deploy.yml)

