// Добавление книги в список сохранённых
addToReadListButton.addEventListener("click", event => {
    let bookObject = infoAboutBookContainer.sourceObject;

    if (isBookInLocalStorage(bookObject)) return;

    // добавление в хранилище
    bookObject.addDate = Date.now();
    let convertedBook = JSON.stringify(bookObject);
    localStorage.setItem(bookObject.key, convertedBook);

    // отображение
    printBrowserBookToRead(bookObject);
    printBooksToReadNumber();
});