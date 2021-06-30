// Добавление книги в список прочитанных
addToReadListButton.addEventListener("click", event => {
    let bookObject = infoAboutBookContainer.sourceObject;
    
    if (bookObject.isInLocalStorage) return;

    // добавление в хранилище
    bookObject.isInLocalStorage = true;
    if (!bookObject.keyId) bookObject.keyId = generateId();
    bookObject.addDate = Date.now();
    bookObject.isRead = false;

    let convertedBookObject = JSON.stringify(bookObject);
    localStorage.setItem(bookObject.keyId, convertedBookObject);

    // отображение
    printBrowserBookToRead(bookObject);
    printBooksToReadNumber();
});