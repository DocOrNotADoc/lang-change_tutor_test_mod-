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
	"home_page-title": {
		en: "Homepage",
		ru: "Домашняя страница",
	},
	"home_page-1": {
		en: "First paragraph",
		ru: "Первый параграф",
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
		// console.log(event.target.dataset.btn);
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