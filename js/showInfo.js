// Демонстрация информации о найденной книге
foundBooksContainer.addEventListener("click", function (event) {
    if (event.target.className === "founded-books__list") return

    let currentBrowserBook = event.target.closest(".founded-book");

    // антураж
    let highlightСlass = "founded-book_emphasized";
    removeSelection();
    currentBrowserBook.classList.add(highlightСlass);

    // суть
    let bookObject = currentBrowserBook.sourceObject;
    fillInformationBlock(bookObject);
});