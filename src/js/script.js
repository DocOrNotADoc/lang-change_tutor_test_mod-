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
	"promo_btn-portfolio": {
		en: "Portfolio",
		ru: "Портфолио",
	},
	"promo_btn-about-me": {
		en: "Abut me",
		ru: "Про меня",
	},
	"about-me_ttl": {
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
		en: "I make up websites from a layout in Figma or Photoshop. I make adaptive layout of websites for different types of devices. I make them interactive using Javascript. I create SPA on the React library. The projects in my practice are educational. And all of them are real and full-fledged.",
		ru: "Верстаю сайты с макета в Figma или Photoshop. Делаю адаптивную вёрстку сайтов для разных типов устройств. Делаю интерактивными с помощью Javascript. Создаю SPA на библиотеке React. Проекты в моей практике являются учебными. И все они реальны и полноценны.",
	},
	"benefits-educations_ttl-1": {
		en: "Education",
		ru: "Образование",
	},
	"benefits-educations_ttl-2": {
		en: "How can i be useful",
		ru: "Чем я буду полезен",
	},
	"benefits-educations_column-1_ttl": {
		en: "Academic education",
		ru: "Академическое образование",
	},
	"benefits-educations_column-1_item-1_ttl": {
		en: "MPGU",
		ru: "МПГУ",
	},
	"benefits-educations_column-1_item-1_degree": {
		en: "Specialist diploma | Moscow (2005-2011)",
		ru: "Диплом специалиста | Москва (2005-2011)",
	},
	"benefits-educations_column-1_item-1_descr-1": {
		en: "Moscow State Pedagogical University. Faculty of music.",
		ru: "Московский педагогический государственный университет. Музыкальный факультет.",
	},
	"benefits-educations_column-1_item-1_descr-2": {
		en: "Moscow State Pedagogical University is the leading pedagogical university in Russia. I changed my professional field. Understanding the principles of the learning process helped me with this.",
		ru: "МПГУ - это ведущий педагогический университет в России. Я сменил сферу профессиональной деятельности. Понимание принципов процесса обучения помогло мне в этом.",
	},
	"benefits-educations_column-2_ttl": {
		en: "Courses",
		ru: "Курсы",
	},
	"benefits-educations_column-2_item-1_degree": {
		en: "Course \"Web Developer 2021\" by Ivan Petrichenko",
		ru: "Курс \"WEB-разработчик 2021\" от Ивана Петриченко",
	},
	"benefits-educations_column-2_item-1_descr": {
		en: "In this course I learned how to use HTML and CSS to develop websites. Also, during the course, I learned how to use modern software necessary for work in practice.",
		ru: "В этом курсе я научился использовать HTML и CSS для разработки сайтов. Так же, во время прохождения курса, я научился использовать на практике современное программное обеспечение, необходимое для работы.",
	},
	"benefits-educations_column-2_item-2_degree": {
		en: "JavaScript + React course by Ivan Petrichenko",
		ru: "Курс по JavaScript + React от Ивана Петриченко",
	},
	"benefits-educations_column-2_item-2_descr": {
		en: "In this course I learned how to use Javascript to make a website interact with visitors.",
		ru: "В этом курсе я научился использовать Javascript для того, чтобы сайт взаимодействовал с посетителями.",
	},
	"portfolio_ttl-1": {
		en: "Portfolio",
		ru: "Портфолио",
	},
	"portfolio_ttl-2": {
		en: "My works",
		ru: "Мои работы",
	},




	"about-me_ttl": {
		en: "Abut me",
		ru: "Обо мне",
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
		en: "Course \"Web Developer 2021\" by Ivan Petrichenko",
		ru: "Курс \"WEB-разработчик 2021\" от Ивана Петриченко",
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