// Проверка пути страницы сайта
function checkPagePathName() {
	switch (currentPathName) {
		case "/index.html":
		case "/index.html":
			currentTexts = homeTexts;
			break;
		// case "/another_page.html":
		// 	currentTexts = anotherTexts;
		// 	break;
		default:
			currentTexts = homeTexts;
			break;
	}
}
