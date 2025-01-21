const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["en", "ru"];

let userLang = localStorage.getItem("language") || checkBrowserLang();
let currentTexts = {};

// Проверка языка браузера
function checkBrowserLang() {
	const navLang = navigator.language.slice(0, 2).toLowerCase();
	const result = allLangs.some((elem) => {
		return elem === navLang;
	});
	if (result) {
		return navLang;
	}
}

//текты
const translatedTexts = {
	"sidepanel-descr": {
		en: "Social media",
		ru: "Социальные сети",
	},
	"menu_about-me": {
		en: "About me",
		ru: "Про меня",
	},
	"menu_my-experience": {
		en: "My experience",
		ru: "Мой опыт",
	},
	"menu_my-works": {
		en: "My works",
		ru: "Мои работы",
	},
	"menu_my-skills": {
		en: "My skills",
		ru: "Мои навыки",
	},
	"menu_contacts": {
		en: "Contacts",
		ru: "Контакты",
	},
	"portfolio_ttl": {
		en: "Portfolio",
		ru: "Портфолио",
	},
	"portfolio_ttl-1": {
		en: "Portfolio",
		ru: "Портфолио",
	},
	"about-me_ttl": {
		en: "Abut me",
		ru: "Про меня",
	},
	"about-me_ttl-1": {
		en: "Abut me",
		ru: "Про меня",
	},
	"about-me_name": {
		en: "My name is Viktor",
		ru: "Меня зовут Виктор",
	},
	// "about-me_descr": {
	// 	en: "Abut me",
	// 	ru: "Моё предыдущее место работы связано с музыкой. Я меняю сферу работы. Для этого я много узнал и многому научился.<br>
	// 	HTML оказался не сложнее нотной грамоты. JS сложнее :) А библиотека React - это просто конфетка.",
	// },


	"about-me_ttl": {
		en: "Abut me",
		ru: "Обо мне",
	},




	"home_page-1": {
		en: "Abut me",
		ru: "Моё предыдущее место работы связано с музыкой. Я меняю сферу работы. Для этого я много узнал и многому научился."
		// <br>
		// HTML оказался не сложнее нотной грамоты. JS сложнее :) А библиотека React - это просто конфетка.",
	},
	"home_page-2": {
		en: "Second paragraph",
		ru: "Второй параграф",
	},
	"home_page-3": {
		en: "Third paragraph",
		ru: "Третий параграф",
	},
};
currentTexts = translatedTexts;

// Изменение языка у текстов
function changeLang() {
	for (const key in currentTexts) {
		let elem = document.querySelector(`[data-lang=${key}]`);

		if (elem) {
			elem.textContent = currentTexts[key][userLang];
		}
	}
}
changeLang();

// Вешаем обработчики на каждую кнопку
langButtons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		userLang = event.target.dataset.btn;
		localStorage.setItem("language", event.target.dataset.btn);
		changeLang();
	});
});


// Dropdown список для выбора языка
function setLanguage(language, flagSrc) {
	const button = document.getElementById('language-button');
	button.innerHTML = `<img src="${flagSrc}" alt="${language}" class="flag">${language}`;
	
}

// ставим язык по умолчанию
window.onload = function() {
	switch (userLang) {
		case 'ru':
			setLanguage('ru', 'icons/ru-flag-icon.svg');
			break;
		case 'en':
			setLanguage('en', 'icons/en-flag-icon.svg');
		break;
		default:
			setLanguage('en', 'icons/en-flag-icon.svg');
			break;
	}
};