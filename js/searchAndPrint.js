// Поиск книг и отображение
let foundBooksData = {};
let foundBooks = [];

let numPage = 1;
let searchValue;

let firstTimePoint = 0;
let secondTimePoint = 0;

searchButton.addEventListener("click", handler);

searchButton.addEventListener("keydown", event => {
    if (!["Enter", "NumpadEnter"].includes(event.code)) return; 
    event.preventDefault();
    
});

searchingField.addEventListener("keydown", event => {
    if (!["Enter", "NumpadEnter"].includes(event.code)) return; 
    event.preventDefault();
    handler(event);
});