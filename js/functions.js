// Функции, используемые в приложении

// функция, обрабатывающая изменение в форме
function handler(event) {
    searchValue = searchingField.value;

    foundBooks = [];
    foundBooksContainer.innerHTML = "";

    url = `https://openlibrary.org/search.json?q=${searchValue}&page=${numPage}`;

    getAndDisplayBooks(url);
}

// осуществление запроса
async function getAndDisplayBooks(url) {
    foundBooksData = await fetch(url).then(result => result.json());

    let currentFoundBooks = foundBooksData.docs;

    for (let i = 0; i < currentFoundBooks.length; i++) {
        currentFoundBooks.isConvertedPublishYearsList = false;
        foundBooks.push(currentFoundBooks[i]);
    }

    displayBooks(currentFoundBooks);
}

// отрисовать список найденных книг
function displayBooks(books) {
    books.forEach(book => {
        let title = book.title;
        let shownLanguage = !!book.language ? `(${book.language[book.language.length - 1]})` : "";
        let subtitle = !!book.subtitle ? book.subtitle : "";

        let browserBook = document.createElement("div");
        browserBook.className = "founded-books__book founded-book";
        browserBook.innerHTML += `
                    <p class="founded-book__name">${title} ${shownLanguage}</p>
                    <p class="founded-book__subtitle ${!!book.subtitle ? "" : "none"}">${subtitle}</p>
                `;

        browserBook.sourceObject = book;

        foundBooksContainer.append(browserBook);
    });
}

// убрать выделение
function removeSelection() {
    // столбец поиска книг
    let selectionSearchСlass = "founded-book_emphasized";
    let foundBooksCollection = app.querySelectorAll(".founded-book");
    Array.from(foundBooksCollection).forEach(browserBook => {
        browserBook.classList.remove(selectionSearchСlass);
    });

    // столбец книг на прочтение
    let selectionReadClass = "book-of-to-read-list_emphasized";
    let readBookCollection = app.querySelectorAll(".book-of-to-read-list");
    Array.from(readBookCollection).forEach(browserBook => {
        browserBook.classList.remove(selectionReadClass);
    });
}

// заполнить контентом блок информации
function fillInformationBlock(bookWithInfo) {
    // Заголовок
    infoAboutBookTitle.textContent = bookWithInfo.title;
    // Подпись
    infoAboutBookSubtitle.textContent = !!bookWithInfo.subtitle ? bookWithInfo.subtitle : "";
    if (!bookWithInfo.subtitle) infoAboutBookSubtitle.classList.add("none");
    if (!!bookWithInfo.subtitle) infoAboutBookSubtitle.classList.remove("none");

    // Языки
    languagesAvailableValue.textContent = !!bookWithInfo.language ? bookWithInfo.language.join(", ") : "-";
    // Наличие полного текста 
    fullTextAvailableValue.textContent = bookWithInfo.has_fulltext ? "yes" : "no";
    // Год первой публикации
    firstPublishYearValue.textContent = !!bookWithInfo.first_publish_year ? bookWithInfo.first_publish_year : "-";
    // Года публикации
    yearsPublishedValue.textContent = !!bookWithInfo.publish_year ? bookWithInfo.publish_year.sort((a, b) => a - b).join(", ") : "-";


    infoAboutBookContainer.sourceObject = bookWithInfo;

    emptyInfoContainer.classList.add("none");
    infoAboutBookContainer.classList.remove("none");
}

function printBooksToReadNumber() {
    let keys = Object.keys(localStorage);
    let allBooksNumber = keys.length;
    if (keys.includes("activeDarkSite")) allBooksNumber--;

    allBooksInReadListValue.textContent = `${allBooksNumber}`;
}

function printBrowserBookToRead(bookData) {
    let bookToReadTitle = bookData.title;
    let bookToReadShownLanguage = !!bookData.language ? `(${bookData.language[bookData.language.length - 1]})` : "";
    let bookToReadSubtitle = !!bookData.subtitle ? bookData.subtitle : "";

    let newBrowserBookToRead = document.createElement("div");
    newBrowserBookToRead.className = "book-of-to-read-list";
    if (bookData.isRead) newBrowserBookToRead.classList.add("book-of-to-read-list_read");
    newBrowserBookToRead.innerHTML += `
        <!-- тело книги -->
        <div class="book-of-to-read-list__body">
            <p class="book-of-to-read-list__name">${bookToReadTitle} ${bookToReadShownLanguage}</p>
            <p class="book-of-to-read-list__subtitle ${!!bookData.subtitle ? "" : "none"}">${bookToReadSubtitle}</p>
        </div>
        <!-- кнопки по работе с книгой -->
        <div class="book-of-to-read-list__work-with-book">
            <div class="book-of-to-read-list__mark-as-read-function">
                <button class="book-of-to-read-list__mark-as-read-button" type="button">${!bookData.isRead ? "Mark as read" : "Mark as unread"}</button>
            </div>
            <div class="book-of-to-read-list__remove-from-list-function">
                <button class="book-of-to-read-list__remove-from-list-button" type="button">Remove from list</button>
            </div>
        </div>
    `;

    newBrowserBookToRead.setAttribute("data-id", bookData.keyId);
    booksListToRead.append(newBrowserBookToRead);
}

// также часть функций лежит в файле idGenerator.js