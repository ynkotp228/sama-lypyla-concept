import type { ImageMetadata } from "astro";

// ─── 1. Імпорти картинок товарів ──────────────────────────────────
// Вареники
import varenikiPotato from "../assets/images/products-ready/varenuki/varenuki-potato.jpg";
import varenikiCabbage from "../assets/images/products-ready/varenuki/varenuki-capusta.jpg";
import varenikiPotatoCabbage from "../assets/images/products-ready/varenuki/varenuki-potato-capusta.jpg";
import varenikiLiver from "../assets/images/products-ready/varenuki/varenuki-lver.jpg";
import varenikiSaltCheese from "../assets/images/products-ready/varenuki/varenuki-solony-sur.jpg";
import varenikiCherry from "../assets/images/products-ready/varenuki/varenuki-vishya.jpg";

// Пельмені та хінкалі
import pelmeniPork from "../assets/images/products-ready/pelmeni-hinkali/penlemi-svunyna.jpg";
import pelmeniPorkChicken from "../assets/images/products-ready/pelmeni-hinkali/palmeny-svunyna-kuryatuna.jpg";
import pelmeniTurkey from "../assets/images/products-ready/pelmeni-hinkali/penlemi-induchka.jpg";
import pelmeniVeal from "../assets/images/products-ready/pelmeni-hinkali/pelmeny-telyatuna.jpg";
import hinkaliPork from "../assets/images/products-ready/pelmeni-hinkali/hinkaly-svunyna.jpg";
import hinkaliCheese from "../assets/images/products-ready/pelmeni-hinkali/hinkali-sur.jpg";

// Сирники та запіканки
import syrnikiClassic from "../assets/images/products-ready/syrniki/syrniki-classic.jpg";
import syrnikiRaisins from "../assets/images/products-ready/syrniki/syrniki-rodzunky.jpg";
import syrnikiBanana from "../assets/images/products-ready/syrniki/syrniki-banana.jpg";
import syrnikiCoconut from "../assets/images/products-ready/syrniki/syrniki-kokos.jpg";
import syrnikiChocolate from "../assets/images/products-ready/syrniki/syrniki-chocolad.jpg";
import syrnaZapikanka from "../assets/images/products-ready/syrniki/syrna-zapikanka.jpg";
import syrnaZapikankaRaisins from "../assets/images/products-ready/syrniki/syrna-zapikabka-rodzuny.jpg";

// Млинці солоні
import mlyntsiMeat from "../assets/images/products-ready/mlynckiSoloni/mlyncy-myaso.jpg";
import mlyntsiLiver from "../assets/images/products-ready/mlynckiSoloni/mlyncy-liver.jpg";
import mlyntsiChickenMushroom from "../assets/images/products-ready/mlynckiSoloni/mlyncy-kurka-gribu.jpg";
import mlyntsiHamCheese from "../assets/images/products-ready/mlynckiSoloni/mlyncy-shinka-sur.jpg";
import mlyntsiBrynza from "../assets/images/products-ready/mlynckiSoloni/mlyncy-brinza.jpg";

// Млинці солодкі
import mlyntsiSweetCheese from "../assets/images/products-ready/mlynckiSolodki/mlyncy-solodkiy-sur.jpg";
import mlyntsiChocolateCherry from "../assets/images/products-ready/mlynckiSolodki/mlyncy-vishnya.jpg";
import mlyntsiChocolateBanana from "../assets/images/products-ready/mlynckiSolodki/mlyncy-chocolade-banana.jpg";
import mlyntsiCheeseStrawberry from "../assets/images/products-ready/mlynckiSolodki/mlyntsi-sur-polynytsa.jpg";
import mlyntsiCheeseBlueberry from "../assets/images/products-ready/mlynckiSolodki/mlyntsi-sur-chornytsa.jpg";

// Піца
import pizza4Cheese from "../assets/images/products-ready/pizza/pizza-4-cheese.jpg";
import pizzaHawaii from "../assets/images/products-ready/pizza/pizza-hawaii.jpg";
import pizzaMeat from "../assets/images/products-ready/pizza/pizza-meat.jpg";
import pizzaMyslyvska from "../assets/images/products-ready/pizza/pizza-myslyvska.jpg";
import pizzaMushroom from "../assets/images/products-ready/pizza/pizza-gribna.jpg";
import pizzaDiablo from "../assets/images/products-ready/pizza/pizza-diablo.jpg";
import pizzaDomashnya from "../assets/images/products-ready/pizza/pizza-domashnya.jpg";

// М'ясопродукти
import kotletaBurger from "../assets/images/products-ready/kotleti/kotleta-burgerna.jpg";
import kotletaCordonBleu from "../assets/images/products-ready/kotleti/kotleta-kordon-blu.jpg";
import kotletaTurkey from "../assets/images/products-ready/kotleti/kotleta-induchka.jpg";
import kotletaChicken from "../assets/images/products-ready/kotleti/koitleta-chicken.jpg";
import kotletaDomashnya from "../assets/images/products-ready/kotleti/kotleta-domashnya.jpg";
import kovbaskiGrillChicken from "../assets/images/products-ready/kotleti/kovbaska-grill-chicken.jpg";
import kovbaskiGrillPork from "../assets/images/products-ready/kotleti/kovbaska-grill-svynyacha.jpg";

// Борошняні вироби з м'ясом
import benderykyChickenMozzarella from "../assets/images/products-ready/vupichkaZmyasom/benderiki-chicken-mozzarella.jpg";
import benderykyPork from "../assets/images/products-ready/vupichkaZmyasom/benderiki-svunyna.jpg";
import benderykyPea from "../assets/images/products-ready/vupichkaZmyasom/benderiki-goroh.jpg";
import cheburekyPork from "../assets/images/products-ready/vupichkaZmyasom/chebureki-svunyna.jpg";
import cheburekyPorkCheeseTomato from "../assets/images/products-ready/vupichkaZmyasom/chebureki-svunyna-sur-pomidor.jpg";
import cheburekyCheeseGreens from "../assets/images/products-ready/vupichkaZmyasom/chebureki-sur-zelen.jpg";
import lazanyaChicken from "../assets/images/products-ready/vupichkaZmyasom/lazanya-chicken.jpg";
import lazanyaPork from "../assets/images/products-ready/vupichkaZmyasom/lazanya-svunyna.jpg";

// ─── 2. Імпорти картинок категорій (для сітки на головній/каталозі) ─
import catVareniki from "../assets/images/MainPageImages/categories/varenuki.webp";
import catPelmeni from "../assets/images/MainPageImages/categories/pelmeni.webp";
import catSyrniki from "../assets/images/MainPageImages/categories/sirniki.webp";
import catMlyntsiSalt from "../assets/images/MainPageImages/categories/mlyntsi-soloni.webp";
import catMlyntsiSweet from "../assets/images/MainPageImages/categories/mlyntsi-solodki.webp";
import catPizza from "../assets/images/MainPageImages/categories/pizza.webp";
import catMyasoprodukty from "../assets/images/MainPageImages/categories/kotleti.webp";
import catVypichkaMyaso from "../assets/images/MainPageImages/categories/vupichka-z-myasom.webp";

// ─── 3. Типи ───────────────────────────────────────────────────────
export type CategorySlug =
  | "vareniki"
  | "pelmeni"
  | "syrniki"
  | "mlyntsi-salt"
  | "mlyntsi-sweet"
  | "pizza"
  | "myasoprodukty"
  | "vypichka-myaso";

export type ProductTag =
  | "pisne"
  | "dytyache"
  | "myasne"
  | "z-syrom"
  | "gostre";

export interface Product {
  id: string;             // унікальний slug: "vareniki-potato"
  name: string;           // "Вареники з картоплею"
  category: CategorySlug;
  weight: string;         // "500 г" — рядок, бо у тебе можуть бути "10 шт" або "0.5 кг"
  price: number;          // 95 — у гривнях, ціле число. Без копійок.
  image: ImageMetadata;
  alt: string;            // опис для screen readers та SEO — баланс назви товару й того, що на фото
  description?: string;   // показується в <details> на карточці
  tags?: ProductTag[];    // для фільтрів + видимий бейдж
  popularity: number;     // 1-100, не показується, тільки сортування
  isHit?: boolean;        // бейдж "Хіт"
  isNew?: boolean;        // бейдж "Новинка"
}

export interface Category {
  slug: CategorySlug;
  name: string;
  image: ImageMetadata;
  alt: string;            // опис для screen readers та SEO — баланс назви категорії й того, що на фото
}

// ─── 4. Категорії ──────────────────────────────────────────────────
export const categories: readonly Category[] = [
  {
    slug: "vareniki",
    name: "Вареники",
    image: catVareniki,
    alt: "Порція вареників у мисці, полита олією та притрушена зеленню",
  },
  {
    slug: "pelmeni",
    name: "Пельмені та хінкалі",
    image: catPelmeni,
    alt: "Пельмені у мисці, притрушені зеленню, поряд сметана",
  },
  {
    slug: "syrniki",
    name: "Сирники та запіканки",
    image: catSyrniki,
    alt: "Сирники на сковорідці, притрушені цукровою пудрою, зі сметаною та ягодами",
  },
  {
    slug: "mlyntsi-salt",
    name: "Млинці солоні",
    image: catMlyntsiSalt,
    alt: "Тонкі млинці, загорнуті трубочкою, складені на тарілці",
  },
  {
    slug: "mlyntsi-sweet",
    name: "Млинці солодкі",
    image: catMlyntsiSweet,
    alt: "Солодкі млинці, политі шоколадом, зі свіжими ягодами",
  },
  {
    slug: "pizza",
    name: "Піца",
    image: catPizza,
    alt: "Кругла піца з розплавленим сиром та начинкою, нарізана скибками",
  },
  {
    slug: "myasoprodukty",
    name: "М'ясопродукти",
    image: catMyasoprodukty,
    alt: "М'ясні котлети в паніровці на тарілці з гарніром",
  },
  {
    slug: "vypichka-myaso",
    name: "Борошняні вироби з м'ясом",
    image: catVypichkaMyaso,
    alt: "Рум'яний смажений чебурек на тарілці з соусом",
  },
] as const;

// ─── 5. Товари ─────────────────────────────────────────────────────
export const products: readonly Product[] = [
  // ── Вареники ──────────────────────────────────────────────────
  {
    id: "vareniki-potato",
    name: "Вареники з картоплею",
    category: "vareniki",
    weight: "500 г",
    price: 89,
    image: varenikiPotato,
    alt: "Вареники з картоплею, підсмажені зі смаженою цибулею, на тарілці",
    description: "Класичні вареники ручної ліпки з картоплею та смаженою на олії цибулею.",
    tags: ["pisne", "dytyache"],
    popularity: 98,
    isHit: true,
  },
  {
    id: "vareniki-cabbage",
    name: "Вареники з капустою",
    category: "vareniki",
    weight: "500 г",
    price: 85,
    image: varenikiCabbage,
    alt: "Вареники з капустою на тарілці зі смаженою цибулею та сметаною",
    description: "Соковита тушкована капуста з морквою та цибулею в ніжному тісті.",
    tags: ["pisne"],
    popularity: 70,
  },
  {
    id: "vareniki-potato-cabbage",
    name: "Вареники з картоплею і капустою",
    category: "vareniki",
    weight: "500 г",
    price: 89,
    image: varenikiPotatoCabbage,
    alt: "Вареники з картоплею і капустою у мисці, притрушені зеленню",
    description: "Дует картоплі та тушкованої капусти в одному варенику.",
    tags: ["pisne"],
    popularity: 68,
  },
  {
    id: "vareniki-liver",
    name: "Вареники з ливером",
    category: "vareniki",
    weight: "500 г",
    price: 99,
    image: varenikiLiver,
    alt: "Вареники з ливером, підсмажені зі смаженою цибулею, на тарілці",
    description: "Ситна начинка з печінки та обсмаженої цибулі.",
    tags: ["myasne"],
    popularity: 60,
  },
  {
    id: "vareniki-salt-cheese",
    name: "Вареники з солоним сиром",
    category: "vareniki",
    weight: "500 г",
    price: 99,
    image: varenikiSaltCheese,
    alt: "Вареники з солоним сиром на тарілці зі смаженою цибулею та сметаною",
    description: "Домашній солоний сир у тонкому тісті ручної ліпки.",
    tags: ["z-syrom"],
    popularity: 74,
  },
  {
    id: "vareniki-cherry",
    name: "Вареники з вишнею",
    category: "vareniki",
    weight: "500 г",
    price: 95,
    image: varenikiCherry,
    alt: "Вареники з вишнею, политі ягідним сиропом, на тарілці",
    description: "Вареники ручної ліпки з начинкою із соковитої вишні.",
    tags: ["pisne", "dytyache"],
    popularity: 88,
  },

  // ── Пельмені та хінкалі ───────────────────────────────────────
  {
    id: "pelmeni-pork",
    name: "Пельмені зі свининою",
    category: "pelmeni",
    weight: "500 г",
    price: 119,
    image: pelmeniPork,
    alt: "Пельмені зі свининою у мисці, притрушені кропом",
    description: "Соковиті пельмені ручної ліпки з добірної свинини.",
    tags: ["myasne"],
    popularity: 95,
    isHit: true,
  },
  {
    id: "pelmeni-pork-chicken",
    name: "Пельмені зі свининою та курятиною",
    category: "pelmeni",
    weight: "500 г",
    price: 115,
    image: pelmeniPorkChicken,
    alt: "Пельмені зі свининою та курятиною на тарілці, притрушені кропом",
    description: "Збалансована начинка зі свинини та ніжної курятини.",
    tags: ["myasne"],
    popularity: 90,
  },
  {
    id: "pelmeni-turkey",
    name: "Пельмені з індичкою",
    category: "pelmeni",
    weight: "500 г",
    price: 129,
    image: pelmeniTurkey,
    alt: "Пельмені з індичкою у мисці, притрушені кропом",
    description: "Дієтична індичка в тонкому тісті — легше за свинину.",
    tags: ["myasne", "dytyache"],
    popularity: 72,
  },
  {
    id: "pelmeni-veal",
    name: "Пельмені з телятиною",
    category: "pelmeni",
    weight: "500 г",
    price: 145,
    image: pelmeniVeal,
    alt: "Пельмені з телятиною крупним планом із зеленою цибулею",
    description: "Преміальна телятина для насиченого м'ясного смаку.",
    tags: ["myasne"],
    popularity: 78,
  },
  {
    id: "hinkali-pork",
    name: "Хінкалі зі свининою",
    category: "pelmeni",
    weight: "500 г",
    price: 129,
    image: hinkaliPork,
    alt: "Хінкалі зі свининою на тарілці з соусом та зеленню",
    description: "Грузинські хінкалі з соковитою свининою та бульйоном усередині.",
    tags: ["myasne"],
    popularity: 80,
  },
  {
    id: "hinkali-cheese",
    name: "Хінкалі з сиром",
    category: "pelmeni",
    weight: "500 г",
    price: 119,
    image: hinkaliCheese,
    alt: "Хінкалі з сиром на тарілці",
    description: "Гарячі хінкалі з тягучим сиром усередині.",
    tags: ["z-syrom"],
    popularity: 70,
  },

  // ── Сирники та запіканки ──────────────────────────────────────
  {
    id: "syrniki-classic",
    name: "Сирники класичні",
    category: "syrniki",
    weight: "400 г",
    price: 95,
    image: syrnikiClassic,
    alt: "Сирники класичні на тарілці з кремом, ягодами та горішками",
    description: "Ніжні сирники зі справжнього кисломолочного сиру.",
    tags: ["dytyache"],
    popularity: 92,
    isHit: true,
  },
  {
    id: "syrniki-raisins",
    name: "Сирники з родзинками",
    category: "syrniki",
    weight: "400 г",
    price: 99,
    image: syrnikiRaisins,
    alt: "Сирники з родзинками, притрушені цукровою пудрою, зі свіжими ягодами",
    description: "Пухкі сирники з солодкими родзинками.",
    tags: ["dytyache"],
    popularity: 75,
  },
  {
    id: "syrniki-banana",
    name: "Сирники з бананом",
    category: "syrniki",
    weight: "400 г",
    price: 105,
    image: syrnikiBanana,
    alt: "Сирники з бананом на тарілці зі сметаною",
    description: "Сирники з кисломолочного сиру зі шматочками банана.",
    tags: ["dytyache"],
    popularity: 70,
  },
  {
    id: "syrniki-coconut",
    name: "Сирники з кокосом",
    category: "syrniki",
    weight: "400 г",
    price: 105,
    image: syrnikiCoconut,
    alt: "Сирники з кокосом на тарілці з кремом та ягодами",
    description: "Сирники з кисломолочного сиру та кокосовою стружкою.",
    tags: ["dytyache"],
    popularity: 64,
  },
  {
    id: "syrniki-chocolate",
    name: "Сирники з шоколадом",
    category: "syrniki",
    weight: "400 г",
    price: 109,
    image: syrnikiChocolate,
    alt: "Сирники з шоколадом, притрушені цукровою пудрою, зі свіжими ягодами",
    description: "Сирники з кисломолочного сиру зі шматочками шоколаду.",
    tags: ["dytyache"],
    popularity: 76,
  },
  {
    id: "syrna-zapikanka",
    name: "Сирна запіканка",
    category: "syrniki",
    weight: "400 г",
    price: 99,
    image: syrnaZapikanka,
    alt: "Кругла сирна запіканка із золотистою скоринкою",
    description: "Ніжна сирна запіканка, як у бабусі.",
    tags: ["dytyache"],
    popularity: 82,
  },
  {
    id: "syrna-zapikanka-raisins",
    name: "Сирна запіканка з родзинками",
    category: "syrniki",
    weight: "400 г",
    price: 105,
    image: syrnaZapikankaRaisins,
    alt: "Шматок сирної запіканки з родзинками з пишною текстурою",
    description: "Сирна запіканка з кисломолочного сиру та родзинок.",
    tags: ["dytyache"],
    popularity: 66,
  },

  // ── Млинці солоні ─────────────────────────────────────────────
  {
    id: "mlyntsi-meat",
    name: "Млинці з м'ясом",
    category: "mlyntsi-salt",
    weight: "400 г",
    price: 105,
    image: mlyntsiMeat,
    alt: "Млинці з м'ясом, загорнуті трубочкою, на тарілці зі сметаною",
    description: "Тонкі млинці з начинкою із соковитого відвареного м'яса.",
    tags: ["myasne"],
    popularity: 84,
  },
  {
    id: "mlyntsi-liver",
    name: "Млинці з лівером",
    category: "mlyntsi-salt",
    weight: "400 г",
    price: 95,
    image: mlyntsiLiver,
    alt: "Млинці з лівером, загорнуті трубочкою, на тарілці зі сметаною",
    description: "Млинці з ніжною печінковою начинкою та смаженою цибулею.",
    tags: ["myasne"],
    popularity: 58,
  },
  {
    id: "mlyntsi-chicken-mushroom",
    name: "Млинці з куркою та грибами",
    category: "mlyntsi-salt",
    weight: "400 г",
    price: 115,
    image: mlyntsiChickenMushroom,
    alt: "Млинці з куркою та грибами, подані у мисці з грибами",
    description: "Млинці з начинкою з курки та смажених печериць.",
    tags: ["myasne"],
    popularity: 78,
  },
  {
    id: "mlyntsi-ham-cheese",
    name: "Млинці з шинкою та сиром",
    category: "mlyntsi-salt",
    weight: "400 г",
    price: 109,
    image: mlyntsiHamCheese,
    alt: "Млинці з шинкою та сиром, загорнуті трубочкою, на тарілці зі сметаною",
    description: "Млинці з шинкою та тягучим сиром.",
    tags: ["myasne", "z-syrom"],
    popularity: 74,
  },
  {
    id: "mlyntsi-brynza",
    name: "Млинці з бринзою",
    category: "mlyntsi-salt",
    weight: "400 г",
    price: 105,
    image: mlyntsiBrynza,
    alt: "Млинці з бринзою, загорнуті трубочкою, подані у мисці",
    description: "Тонкі млинці з солонуватою бринзою та зеленню.",
    tags: ["z-syrom"],
    popularity: 60,
  },

  // ── Млинці солодкі ────────────────────────────────────────────
  {
    id: "mlyntsi-sweet-cheese",
    name: "Млинці з солодким сиром",
    category: "mlyntsi-sweet",
    weight: "400 г",
    price: 95,
    image: mlyntsiSweetCheese,
    alt: "Млинці з солодким сиром, загорнуті трубочкою, на тарілці зі сметаною",
    description: "Млинці з начинкою з ніжного солодкого сиру.",
    tags: ["dytyache"],
    popularity: 70,
  },
  {
    id: "mlyntsi-chocolate-cherry",
    name: "Млинці шоколадні з вишнею",
    category: "mlyntsi-sweet",
    weight: "400 г",
    price: 105,
    image: mlyntsiChocolateCherry,
    alt: "Шоколадні млинці з вишнею, загорнуті трубочкою, на тарілці зі сметаною",
    description: "Шоколадні млинці із соковитою вишнею.",
    tags: ["dytyache"],
    popularity: 72,
  },
  {
    id: "mlyntsi-chocolate-banana",
    name: "Млинці шоколадні з бананом",
    category: "mlyntsi-sweet",
    weight: "400 г",
    price: 105,
    image: mlyntsiChocolateBanana,
    alt: "Шоколадні млинці з бананом, загорнуті трубочкою, зі свіжими ягодами",
    description: "Шоколадні млинці з бананом — десерт для всієї родини.",
    tags: ["dytyache"],
    popularity: 74,
  },
  {
    id: "mlyntsi-cheese-strawberry",
    name: "Млинці з сиром та полуницею",
    category: "mlyntsi-sweet",
    weight: "400 г",
    price: 109,
    image: mlyntsiCheeseStrawberry,
    alt: "Млинці з сиром та полуницею, загорнуті трубочкою, зі свіжою полуницею",
    description: "Млинці з ніжним сиром і соковитою полуницею.",
    tags: ["dytyache"],
    popularity: 68,
  },
  {
    id: "mlyntsi-cheese-blueberry",
    name: "Млинці з сиром та чорницею",
    category: "mlyntsi-sweet",
    weight: "400 г",
    price: 109,
    image: mlyntsiCheeseBlueberry,
    alt: "Млинці з сиром та чорницею, загорнуті трубочкою, на тарілці зі сметаною",
    description: "Млинці з ніжним сиром і соковитою чорницею.",
    tags: ["dytyache"],
    popularity: 64,
  },

  // ── Піца ──────────────────────────────────────────────────────
  {
    id: "pizza-4-cheese",
    name: "Піца «Чотири сири»",
    category: "pizza",
    weight: "500 г",
    price: 175,
    image: pizza4Cheese,
    alt: "Піца «Чотири сири» з розплавленим сиром на дерев'яній дошці",
    description: "Піца з чотирма видами сиру для справжніх сироманів.",
    tags: ["z-syrom"],
    popularity: 89,
    isHit: true,
  },
  {
    id: "pizza-hawaii",
    name: "Піца гавайська",
    category: "pizza",
    weight: "500 г",
    price: 165,
    image: pizzaHawaii,
    alt: "Гавайська піца з розплавленим сиром та начинкою",
    description: "Шинка, соковитий ананас і сир моцарела.",
    tags: ["myasne"],
    popularity: 80,
  },
  {
    id: "pizza-meat",
    name: "Піца м'ясна",
    category: "pizza",
    weight: "500 г",
    price: 195,
    image: pizzaMeat,
    alt: "М'ясна піца з розплавленим сиром та м'ясною начинкою",
    description: "Щедра м'ясна начинка для ситного обіду.",
    tags: ["myasne"],
    popularity: 85,
  },
  {
    id: "pizza-myslyvska",
    name: "Піца мисливська",
    category: "pizza",
    weight: "500 г",
    price: 185,
    image: pizzaMyslyvska,
    alt: "Мисливська піца з м'ясною начинкою та оливками, нарізана скибками",
    description: "Мисливські ковбаски, цибуля та гриби.",
    tags: ["myasne"],
    popularity: 72,
  },
  {
    id: "pizza-mushroom",
    name: "Піца грибна",
    category: "pizza",
    weight: "500 г",
    price: 165,
    image: pizzaMushroom,
    alt: "Грибна піца з розплавленим сиром та начинкою",
    description: "Печериці та моцарела на томатній основі.",
    tags: ["z-syrom"],
    popularity: 66,
  },
  {
    id: "pizza-diablo",
    name: "Піца Діабло",
    category: "pizza",
    weight: "500 г",
    price: 185,
    image: pizzaDiablo,
    alt: "Гостра піца Діабло з м'ясною начинкою та сиром",
    description: "Гостра піца з пепероні та перцем чилі для любителів вогника.",
    tags: ["myasne", "gostre"],
    popularity: 76,
  },
  {
    id: "pizza-domashnya",
    name: "Піца домашня",
    category: "pizza",
    weight: "500 г",
    price: 159,
    image: pizzaDomashnya,
    alt: "Домашня піца з м'ясною начинкою, нарізана скибками",
    description: "Класична домашня піца зі збалансованим набором начинки.",
    tags: ["myasne"],
    popularity: 70,
  },

  // ── М'ясопродукти ─────────────────────────────────────────────
  {
    id: "kotleta-burger",
    name: "Котлета бургерна",
    category: "myasoprodukty",
    weight: "400 г",
    price: 109,
    image: kotletaBurger,
    alt: "Котлети для бургера на сковороді-гриль, одна зі скибкою сиру",
    description: "Соковита яловича котлета для домашнього бургера.",
    tags: ["myasne"],
    popularity: 72,
  },
  {
    id: "kotleta-cordon-bleu",
    name: "Котлета кордон блю",
    category: "myasoprodukty",
    weight: "400 г",
    price: 129,
    image: kotletaCordonBleu,
    alt: "Котлета кордон блю в паніровці на тарілці з пюре та салатом",
    description: "Куряча котлета з шинкою та сиром усередині.",
    tags: ["myasne", "z-syrom"],
    popularity: 70,
  },
  {
    id: "kotleta-turkey",
    name: "Котлета з індички",
    category: "myasoprodukty",
    weight: "400 г",
    price: 119,
    image: kotletaTurkey,
    alt: "Котлета з індички в паніровці на тарілці з гарніром та салатом",
    description: "Дієтична котлета з ніжного м'яса індички.",
    tags: ["myasne", "dytyache"],
    popularity: 60,
  },
  {
    id: "kotleta-chicken",
    name: "Котлета з курятини",
    category: "myasoprodukty",
    weight: "400 г",
    price: 105,
    image: kotletaChicken,
    alt: "Котлета з курятини в паніровці на тарілці з овочевим салатом",
    description: "Соковита котлета з курячого філе в паніровці.",
    tags: ["myasne", "dytyache"],
    popularity: 78,
  },
  {
    id: "kotleta-domashnya",
    name: "Котлета домашня",
    category: "myasoprodukty",
    weight: "400 г",
    price: 99,
    image: kotletaDomashnya,
    alt: "Домашні котлети, обсмажені до рум'яної скоринки, на тарілці",
    description: "Класична домашня котлета зі змішаного фаршу.",
    tags: ["myasne"],
    popularity: 80,
  },
  {
    id: "kovbaski-grill-chicken",
    name: "Ковбаски гриль курячі",
    category: "myasoprodukty",
    weight: "300 г",
    price: 115,
    image: kovbaskiGrillChicken,
    alt: "Курячі ковбаски для гриля на решітці",
    description: "Курячі ковбаски для гриля — соковиті всередині.",
    tags: ["myasne"],
    popularity: 74,
  },
  {
    id: "kovbaski-grill-pork",
    name: "Ковбаски гриль свинячі",
    category: "myasoprodukty",
    weight: "300 г",
    price: 119,
    image: kovbaskiGrillPork,
    alt: "Свинячі ковбаски для гриля на решітці",
    description: "Свинячі ковбаски для гриля та пікніка.",
    tags: ["myasne"],
    popularity: 76,
  },

  // ── Борошняні вироби з м'ясом ─────────────────────────────────
  {
    id: "benderyky-chicken-mozzarella",
    name: "Бендерики з куркою та моцарелою",
    category: "vypichka-myaso",
    weight: "400 г",
    price: 99,
    image: benderykyChickenMozzarella,
    alt: "Бендерики з куркою та моцарелою, складені трикутником, на тарілці",
    description: "Бендерики з начинкою з курки та сиру моцарела.",
    tags: ["myasne", "z-syrom"],
    popularity: 72,
  },
  {
    id: "benderyky-pork",
    name: "Бендерики зі свининою",
    category: "vypichka-myaso",
    weight: "400 г",
    price: 95,
    image: benderykyPork,
    alt: "Бендерики зі свининою на тарілці з соусами",
    description: "Бендерики з соковитою свининою в тонкому тісті.",
    tags: ["myasne"],
    popularity: 70,
  },
  {
    id: "benderyky-pea",
    name: "Бендерики з горохом",
    category: "vypichka-myaso",
    weight: "400 г",
    price: 85,
    image: benderykyPea,
    alt: "Бендерики з горохом, складені трикутником, на тарілці",
    description: "Пісні бендерики з начинкою з горохового пюре.",
    tags: ["pisne"],
    popularity: 50,
  },
  {
    id: "chebureky-pork",
    name: "Чебуреки зі свининою",
    category: "vypichka-myaso",
    weight: "400 г",
    price: 99,
    image: cheburekyPork,
    alt: "Рум'яні чебуреки зі свининою на тарілці з соусом",
    description: "Класичні чебуреки з начинкою із соковитої свинини.",
    tags: ["myasne"],
    popularity: 85,
  },
  {
    id: "chebureky-pork-cheese-tomato",
    name: "Чебуреки зі свининою, сиром та помідорами",
    category: "vypichka-myaso",
    weight: "400 г",
    price: 115,
    image: cheburekyPorkCheeseTomato,
    alt: "Чебуреки зі свининою, сиром та помідорами на тарілці з соусом",
    description: "Чебуреки з начинкою зі свинини, сиру та помідорів.",
    tags: ["myasne", "z-syrom"],
    popularity: 74,
  },
  {
    id: "chebureky-cheese-greens",
    name: "Чебуреки з сиром та зеленню",
    category: "vypichka-myaso",
    weight: "400 г",
    price: 99,
    image: cheburekyCheeseGreens,
    alt: "Рум'яні чебуреки з сиром та зеленню на тарілці з соусом",
    description: "Чебуреки з начинкою із сиру та зелені.",
    tags: ["z-syrom"],
    popularity: 60,
  },
  {
    id: "lazanya-chicken",
    name: "Лазанья з куркою",
    category: "vypichka-myaso",
    weight: "400 г",
    price: 139,
    image: lazanyaChicken,
    alt: "Лазанья з куркою, запечена під розплавленим сиром",
    description: "Лазанья з начинкою з курки та сиру — достатньо запекти в духовці.",
    tags: ["myasne", "z-syrom"],
    popularity: 70,
  },
  {
    id: "lazanya-pork",
    name: "Лазанья зі свининою",
    category: "vypichka-myaso",
    weight: "400 г",
    price: 145,
    image: lazanyaPork,
    alt: "Шматок лазаньї зі свининою з м'ясом та розплавленим сиром",
    description: "Ситна лазанья з начинкою зі свинини та сиру — достатньо запекти в духовці.",
    tags: ["myasne", "z-syrom"],
    popularity: 68,
  },
] as const;

// ─── 6. Helper-функції ─────────────────────────────────────────────
export function getProductsByCategory(slug: CategorySlug): Product[] {
  return products.filter(p => p.category === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getHits(limit = 4): Product[] {
  return [...products]                          // копія, щоб не мутувати readonly
    .filter(p => p.isHit)
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, limit);
}

export function getCategoryBySlug(slug: CategorySlug): Category | undefined {
  return categories.find(c => c.slug === slug);
}
