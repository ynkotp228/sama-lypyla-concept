// ШАБЛОН: універсальний скрипт відкриття/закриття меню.

const toggle = document.getElementById("menu-toggle");
const panel = document.getElementById("sidebar");
const overlay = document.getElementById("sidebar-overlay");
const closeBtn = document.getElementById("sidebar-close");

if (toggle && panel) {
  const setOpen = (open) => {
    panel.classList.toggle("is-open", open);
    overlay?.classList.toggle("is-open", open);
    panel.inert = !open; // знімає панель із Tab-порядку + з дерева доступності коли закрита
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () => setOpen(true));
  overlay?.addEventListener("click", () => setOpen(false));
  closeBtn?.addEventListener("click", () => setOpen(false));

  // Закрити по Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  // Закрити при кліку на будь-яке посилання в панелі
  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
}
