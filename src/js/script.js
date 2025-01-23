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
	"promo_my-name": {
		en: "My name is Viktor Malgin",
		ru: "Меня зовут Виктор Мальгин",
	},
	"promo_qualification": {
		en: "I am a web developer from Moscow",
		ru: "Я web-разработчик из города Москва",
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
		en: "My previous job was in music. I changed my field of work. For this I have learned and experienced a lot.",
		ru: "Моё предыдущее место работы связано с музыкой. Я поменял сферу работы. Для этого я много узнал и многому научился.",
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
		ru: "Верстаю сайты с макета Figma или Photoshop. Делаю адаптивную вёрстку сайтов для разных типов устройств. Делаю интерактивными с помощью Javascript. Создаю SPA на библиотеке React. Проекты в моей практике являются учебными. И все они реальны и полноценны.",
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
	"skills_ttl-1": {
		en: "Skills",
		ru: "Навыки",
	},
	"skills_ttl-2": {
		en: "What I use in my work",
		ru: "Что я использую в работе",
	},
	"skills_html5": {
		en: "It is what creates the framework of your website or application, and the fifth version will allow me to create a more SEO-optimized structure for your product.",
		ru: "Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта",
	},
	"skills_css3": {
		en: "This style language allows me to create absolutely any look for your website or application. The only limit is your imagination!",
		ru: "Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!",
	},
	"skills_javascript": {
		en: "This programming language allows you to animate anything: sliders, windows, tooltips, tabs, receiving data from the server and much more.",
		ru: "Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое",
	},
	"skills_jquery": {
		en: "The Jquery library will help speed up development. We won't integrate it into the project unless necessary, but we have the skill to work with it.",
		ru: "Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в проект мы её не будем, но навык работы с ней присутствует",
	},
	"skills_react": {
		en: "This library allows you to create web applications. We can create the most interactive product specifically for your purposes",
		ru: "Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели",
	},

	"contacts_ttl-1": {
		en: "Contacts",
		ru: "Контакты",
	},
	"contacts_ttl-2": {
		en: "Contact me",
		ru: "Свяжитесь со мной",
	},
	"contacts_how2": {
		en: "In any way convenient for you:",
		ru: "Любым удобным для вас способом:",
	},
	"contacts_inst-legal-RF": {
		en: "the Tverskoy District Court of Moscow recognized Meta as an extremist organization. After that, Meta, Facebook and Instagram were banned in Russia. They were included in the register of extremists and terrorists. Displaying their logos is also prohibited by Russia's anti-terrorist laws. Therefore, as a citizen of Russia, I cannot place the Instagram logo or a direct link to my page on my site. You can find an abstract line of Latin and some other symbols below. If it leads somewhere or points to something, then this is clearly a pure coincidence.",
		ru: "21 марта 2022 Тверской районный суд Москвы признал Meta экстремистсвой организацией. После этого Meta, Facebook и Instagram стали запрещены в России. Они внесены в реестр экстремистов и террористов. Демонстрация их логотипов так же запрещена анти-терротистическими законами России. Поэтому, как гражданин России, я не могу разместить на своём сайте логотип instagram или прямую ссылку на свою страницу. Вы можете найти ниже абстрактную строчку из латиницы и каких-то других символов. Если она куда-то ведёт или на что-то указывает, то это, явно, чистейшая случайность.",
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
			setLanguage('ru', 'icons/flags/ru-flag-icon.svg');
			break;
		case 'en':
			setLanguage('en', 'icons/flags/en-flag-icon.svg');
		break;
		default:
			setLanguage('en', 'icons/flags/en-flag-icon.svg');
			break;
	}
};