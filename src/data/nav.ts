const base = import.meta.env.BASE_URL;

export const links = [
	{ name: 'Головна', href: `${base}` },
	{ name: 'Як ми робимо', href: '/#USP' },
	{ name: 'Меню', href: `${base}catalog/` },
	{ name: 'Локації', href: `${base}locations/` },
	{ name: 'Про нас', href: `${base}about/` },
	{ name: 'Контакти', href: `${base}contacts/` },
];
