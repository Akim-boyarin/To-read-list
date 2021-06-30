// работа с книгой в списке на прочтение
booksListToRead.addEventListener("click", event => {
    let desiredClasses = [
        "book-of-to-read-list__body",
        "book-of-to-read-list__name",
        "book-of-to-read-list__subtitle"
    ];

    let workingCondition = desiredClasses.includes(event.target.className);
    if (!workingCondition) return;

    let browserBook = event.target.closest(".book-of-to-read-list");
    let id = browserBook.dataset.id;

    let bookObject = JSON.parse(localStorage.getItem(id));
    fillInformationBlock(bookObject);

    removeSelection();
    browserBook.classList.add("book-of-to-read-list_emphasized");
});

// работа с кнопкой "Mark as read" / "Mark as unread"
booksListToRead.addEventListener("click", event => {
    if (event.target.className !== "book-of-to-read-list__mark-as-read-button") return;

    let browserBook = event.target.closest(".book-of-to-read-list");
    let id = browserBook.dataset.id;

    let bookObject = JSON.parse(localStorage.getItem(id));
    bookObject.isRead = !bookObject.isRead;

    let readBooksNumber = +readBooksInReadListValue.textContent;

    switch (bookObject.isRead) {
        case true:
            event.target.textContent = "Mark as unread";
            browserBook.classList.add("book-of-to-read-list_read");
            readBooksInReadListValue.textContent = `${readBooksNumber + 1}`;
            break;

        case false:
            event.target.textContent = "Mark as read";
            browserBook.classList.remove("book-of-to-read-list_read");
            readBooksInReadListValue.textContent = `${readBooksNumber - 1}`;
            break;
    }

    let convertedObject = JSON.stringify(bookObject);
    localStorage.setItem(id, convertedObject);
});

// работа с кнопкой "Remove from list"
booksListToRead.addEventListener("click", event => {
    if (event.target.className !== "book-of-to-read-list__remove-from-list-button") return;

    let browserBook = event.target.closest(".book-of-to-read-list");
    let id = browserBook.dataset.id;

    let bookObject = JSON.parse(localStorage.getItem(id));

    if (bookObject.isRead) {
        let readBooksNumber = +readBooksInReadListValue.textContent;
        readBooksInReadListValue.textContent = `${readBooksNumber - 1}`;
    }

    let allBooksNumber = +allBooksInReadListValue.textContent;
    allBooksInReadListValue.textContent = `${allBooksNumber - 1}`;

    localStorage.removeItem(id);

    browserBook.remove();
});