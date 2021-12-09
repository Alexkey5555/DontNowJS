const books = document.querySelectorAll('.book');
const link = books[4].getElementsByTagName('a');
const banner = document.querySelector('.adv');
const listBook2 = books[0].querySelectorAll('li');
const listBook5 = books[5].querySelectorAll('li');
const listBook6 = books[2].querySelectorAll('li');
const part8 = document.createElement('li');

books[0].before(books[1])
books[5].after(books[2])
books[0].after(books[4])
document.body.style.backgroundImage = 'url(./image/book.jpg)';
link[0].innerHTML = 'Книга 3. this и Прототипы Объектов';
banner.remove()
listBook2[9].after(listBook2[2])
listBook2[3].after(listBook2[6])
listBook2[4].before(listBook2[8])
listBook5[1].after(listBook5[9])
listBook5[9].after(listBook5[3])
listBook5[3].after(listBook5[4])
listBook5[7].after(listBook5[5])
part8.textContent = 'Глава 8: За пределами ES6';
listBook6[8].append(part8);





