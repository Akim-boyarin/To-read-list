// Добавление книг при скролле
foundBooksContainer.addEventListener("scroll", function(event) {
    if (this.scrollTop !== this.scrollHeight - this.clientHeight) return;

    numPage++;
    url = `https://openlibrary.org/search.json?q=${searchValue}&page=${numPage}`;

    getAndDisplayBooks(url);
});