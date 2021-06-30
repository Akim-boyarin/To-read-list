// отображение книг на прочтение при загрузке браузера
document.addEventListener("DOMContentLoaded", event => {
    let bookKeys = Object.keys(localStorage);
    let readBooksCounter = 0;

    let undesiredKey = "activeDarkSite";
    bookKeys.splice(bookKeys.indexOf(undesiredKey), 1);
    let booksObjects = [];

    bookKeys.forEach(key => {
        let bookObject = JSON.parse(localStorage.getItem(key));
        if (bookObject.isRead) readBooksCounter++;

        booksObjects.push(bookObject);
    });


    booksObjects.sort((a, b) => a.addDate - b.addDate);
    booksObjects.forEach(bookObject => printBrowserBookToRead(bookObject));

    allBooksInReadListValue.textContent = `${bookKeys.length}`;
    readBooksInReadListValue.textContent = `${readBooksCounter}`;
});