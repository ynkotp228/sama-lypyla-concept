const base = import.meta.env.BASE_URL;

export const links = [
	{ name: 'Головна', href: `${base}` },
	{ name: 'Про нас', href: '#about' },
	{ name: 'Меню', href: `${base}catalog` },
	{ name: 'Локаціі', href: `${base}locations` },
	{ name: 'Контакти', href: '#contacts' },
];
