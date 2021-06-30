let app = document.querySelector("#app");

// Колонка поиска книг
let searchingField = app.querySelector(".searching-form-block__field");
let searchButton = app.querySelector(".searching-form-block__button");
let foundBooksContainer = app.querySelector(".founded-books__list");

// Колонка информации о книге
let infoAboutBookContainer = app.querySelector(".info-about-book");
let emptyInfoContainer = app.querySelector(".empty-info");

let infoAboutBookTitle = infoAboutBookContainer.querySelector(".info-about-book__title");
let infoAboutBookSubtitle = infoAboutBookContainer.querySelector(".info-about-book__subtitle");

let languagesAvailableValue = infoAboutBookContainer.querySelector(".languages-available__value");
let fullTextAvailableValue = infoAboutBookContainer.querySelector(".full-text-available__value");
let firstPublishYearValue = infoAboutBookContainer.querySelector(".first-publish-year__value");
let yearsPublishedValue = infoAboutBookContainer.querySelector(".years-published__value");

let addToReadListButton = infoAboutBookContainer.querySelector(".add-to-read-list-button");

// Колонка книг, отобранных на прочтение
let allBooksInReadListValue = app.querySelector(".to-read-list__all-books-number");
let readBooksInReadListValue = app.querySelector(".to-read-list__read-books-number");

let booksListToRead = app.querySelector(".to-read-list__books-list");