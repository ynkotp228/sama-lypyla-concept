// ─── Точки самовивозу (Львів + Вінниця) ───────────────────────────
// Єдине джерело правди: сторінка /locations і <select> вибору точки
// у чекауті (тиждень 8) читають звідси, щоб списки не розʼїхались.

export type CityId = "lviv" | "vinnytsia";

export interface Point {
  id: string; // стабільний slug, напр. "lviv-vyhody-29" — value у <select>, не міняти
  address: string; // як показуємо на картці / в опції
  note?: string; // орієнтир (ЖК, ТОЦ, район тощо)
  city: CityId;
}

// Порядок у масиві = порядок показу (getPointsByCity його зберігає).
export const points: Point[] = [
  // ── Львів ─────────────────────────────────────────────────
  { id: "lviv-vyhody-29", address: "вул. Вигоди, 29", note: "Левандівка", city: "lviv" },
  { id: "lviv-porokhova-20a", address: "вул. Порохова, 20А", city: "lviv" },
  { id: "lviv-horodotska-86", address: "вул. Городоцька, 86", city: "lviv" },
  { id: "lviv-maloholoskivska-16", address: "вул. Малоголосківська, 16", city: "lviv" },
  { id: "lviv-tychyny-18", address: "вул. Тичини, 18", city: "lviv" },

  // ── Вінниця ───────────────────────────────────────────────
  { id: "vinnytsia-yunosti-21", address: "просп. Юності, 21", city: "vinnytsia" },
  { id: "vinnytsia-yunosti-44", address: "просп. Юності, 44", city: "vinnytsia" },
  { id: "vinnytsia-pyrohova-105", address: "вул. Пирогова, 105", city: "vinnytsia" },
  { id: "vinnytsia-poryka-14", address: "вул. Порика, 14", city: "vinnytsia" },
  { id: "vinnytsia-yanhelia-12", address: "вул. Ак. Янгеля, 12", city: "vinnytsia" },
  { id: "vinnytsia-koriatovychiv-172", address: "вул. Князів Коріатовичів, 172", city: "vinnytsia" },
  { id: "vinnytsia-artynova-6", address: "вул. Архітектора Артинова, 6", city: "vinnytsia" },
  { id: "vinnytsia-vatutina-18a", address: "вул. Ватутіна, 18а", city: "vinnytsia" },
  { id: "vinnytsia-shyrotskoho-8", address: "вул. Костя Широцького, 8", city: "vinnytsia" },
  { id: "vinnytsia-nemyrivske-shose-76", address: "вул. Немирівське шосе, 76", city: "vinnytsia" },
  { id: "vinnytsia-tramvaina-3", address: "вул. Трамвайна, 3", note: "ЖК Авалон", city: "vinnytsia" },
  { id: "vinnytsia-keletska-126a", address: "вул. Келецька, 126а", city: "vinnytsia" },
  { id: "vinnytsia-kotsiubynskoho-28", address: "просп. Коцюбинського, 28", city: "vinnytsia" },
  { id: "vinnytsia-pryvokzalna", address: "Зупинка Привокзальна", note: "у бік району Бучмі", city: "vinnytsia" },
  { id: "vinnytsia-khmelnytske-shose-114v", address: "вул. Хмельницьке шосе, 114В", note: "ТОЦ The Mall", city: "vinnytsia" },
  { id: "vinnytsia-vynnychenka-2", address: "вул. Винниченка, 2", city: "vinnytsia" },
  { id: "vinnytsia-antonova-40a", address: "вул. Олега Антонова, 40а", city: "vinnytsia" },
  { id: "vinnytsia-zodchykh-13", address: "вул. Зодчих, 13", city: "vinnytsia" },
];

// ─── Хелпери ───────────────────────────────────────────────────────
export const getPointsByCity = (city: CityId): Point[] =>
  points.filter((p) => p.city === city);

export const getPointById = (id: string): Point | undefined =>
  points.find((p) => p.id === id);
