'use strict';

const goodsArray = [
  {
    "id": 1,
    "title": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    "category": "mobile-phone",
    "discont": false,
    "count": 3,
    "units": "шт",
  },
  {
    "id": 2,
    "title": "Радиоуправляемый автомобиль Cheetan",
    "price": 4000,
    "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    "category": "toys",
    "discont": 5,
    "count": 1,
    "units": "шт",
  },
  {
    "id": 3,
    "title": "ТВ приставка MECOOL KI",
    "price": 12400,
    "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    "category": "tv-box",
    "discont": 15,
    "count": 4,
    "units": "шт",
  },
  {
    "id": 4,
    "title": "Витая пара PROConnect 01-0043-3-25",
    "price": 22,
    "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    "category": "cables",
    "discont": false,
    "count": 420,
    "units": "v",
  }
];


// №1
const overlay = document.querySelector('.overlay');
overlay.classList.remove('active');

// №2 
const createRow = (obj) => {
  const tableBody = document.querySelector('.table__body');
  const trCounter = tableBody.getElementsByTagName('tr');


  // создание ряда
  const tr = document.createElement('tr');


  // создание ячейки №
  const NumberTd = document.createElement('td');
  NumberTd.classList.add('table__cell');
  NumberTd.textContent = trCounter.length + 1;  
  tr.appendChild(NumberTd);


  // создание ячейки name
  const nameTd = document.createElement('td');
  nameTd.classList.add('table__cell', 'table__cell_left', 'table__cell_name');
  nameTd.dataset.id = obj.id; // присвоение свойства data-id
  tr.appendChild(nameTd);

  // создание дочернего <span>
  const nameSpan = document.createElement('span');
  nameSpan.classList.add('table__cell-id');
  nameSpan.textContent = 'ID: ' + obj.id;
  nameTd.appendChild(nameSpan);

  // название
  nameSpan.insertAdjacentText('afterend', obj.title);


  // создание ячейки category
  const categoryTd = document.createElement('td');
  categoryTd.classList.add('table__cell', 'table__cell_left');
  categoryTd.textContent = obj.category;
  tr.append(categoryTd);


  // создание ячейки units
  const unitsTd = document.createElement('td');
  unitsTd.classList.add('table__cell');
  unitsTd.textContent = obj.units;
  tr.append(unitsTd);


  // создание ячейки quantity
  const quantityTd = document.createElement('td');
  quantityTd.classList.add('table__cell');
  quantityTd.textContent = obj.count;
  tr.append(quantityTd);


  // создание ячейки price
  const priceTd = document.createElement('td');
  priceTd.classList.add('table__cell');
  priceTd.textContent = '$' + obj.price;
  tr.append(priceTd);


  // создание ячейки summary
  const summaryTd = document.createElement('td');
  summaryTd.classList.add('table__cell');
  summaryTd.textContent = '$' + obj.price * obj.count;
  tr.append(summaryTd);


  // создание ячейки btn-wrapper
  const btnWrapperTd = document.createElement('td');
  btnWrapperTd.classList.add('table__cell', 'table__cell_btn-wrapper');
  btnWrapperTd.style.display = 'flex';
  tr.append(btnWrapperTd);

  // создание кнопки 1
  const button1 = document.createElement('button');
  button1.classList.add('table__btn', 'table__btn_pic');

  // создание кнопки 2
  const button2 = document.createElement('button');
  button2.classList.add('table__btn', 'table__btn_edit');

  // создание кнопки 3
  const button3 = document.createElement('button');
  button3.classList.add('table__btn', 'table__btn_del');

  btnWrapperTd.append(button1, button2, button3);


  // добавление всей строки
  tableBody.append(tr);
};

const renderGoods = (arr) => {
  arr.forEach(element => {
    createRow(element);
  });
};

renderGoods(goodsArray);
