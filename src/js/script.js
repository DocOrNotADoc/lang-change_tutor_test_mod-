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
	"about-me_descr-1": {
		en: "My previous job was in music. I am changing my field of work. For this I have learned and experienced a lot.",
		ru: "Моё предыдущее место работы связано с музыкой. Я меняю сферу работы. Для этого я много узнал и многому научился.",
	},
	"about-me_descr-2": {
		en: "HTML turned out to be no more difficult than musical notation. JS is more difficult :) And the React library is just a gem.",
		ru: "HTML оказался не сложнее нотной грамоты. JS сложнее :) А библиотека React - это просто конфетка.",
	},
	"about-me_skill-1": {
		en: "Web-development",
		ru: "Web-разработка",
	},
	"about-me_skill-1-descr": {
		en: "I can layout websites from a mockup(PSD/Figma). I can make adaptive layout. I can add interactivity via Javascript, or change page content via JS. I can write SPA on the React library. The projects in my practice are educational. And all of them are real and full-fledged.",
		ru: "Умею верстать сайты с макета. Умею делать адаптивную вёрстку. Умею добавлять интерактив посредством Javascript, или менять через JS содержимое страницы. Умею писать SPA на библиотеке React. Проекты в моей практике являются учебными. И все они реальны и полноценны.",
	},



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