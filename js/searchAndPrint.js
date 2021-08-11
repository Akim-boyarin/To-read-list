// Поиск книг и отображение
let foundBooksData = {};
let foundBooks = [];

let numPage = 1;
let searchValue;

searchButton.addEventListener("click", handler);

searchButton.addEventListener("keydown", event => {
    if (!["Enter", "NumpadEnter"].includes(event.code)) return;
    event.preventDefault();
    app.querySelectorAll(".founded-book");

});

searchingField.addEventListener("keydown", event => {
    if (!["Enter", "NumpadEnter"].includes(event.code)) return;
    event.preventDefault();
    handler(event);
});