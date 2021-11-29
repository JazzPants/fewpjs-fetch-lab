function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h3'); //h2 node with a h3 header
    h2.innerHTML = book.name; //h2 node html throw in every book/json name
    main.appendChild(h2);
  });
}


//when page loads, call fetchBooks();
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


/*
function renderBooks(){
  const main = document.
data.forEach(book => {
  const p = document.createELement('p');
  p.innterHTML = book.name;
  main.append(p);
})
}
document.addEventListener('DOMContentLoaded', () =>

*/


