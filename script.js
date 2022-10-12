// фильтр галлереи и кнопка load more
function Gallery() {
  const images = [{
      data: 'graphic_design',
      src: './img/graphicdesign/graphicdesign20.jpg'
    },
    {
      data: 'landing_pages',
      src: './img/landingpages/landingpages30.jpg'
    },
    {
      data: 'web_design',
      src: './img/webdesign/webdesign20.jpg'
    }, {
      data: 'wordpress',
      src: './img/wordpress/wordpress20.jpg'
    },
    {
      data: 'graphic_design',
      src: './img/graphicdesign/graphicdesign30.jpg'
    },
    {
      data: 'landing_pages',
      src: './img/landingpages/landingpages10.jpg'
    },
    {
      data: 'web_design',
      src: './img/webdesign/webdesign30.jpg'
    }, {
      data: 'wordpress',
      src: './img/wordpress/wordpress30.jpg'
    },
    {
      data: 'graphic_design',
      src: './img/graphicdesign/graphicdesign30.jpg'
    },
    {
      data: 'landing_pages',
      src: './img/landingpages/landingpages10.jpg'
    },
    {
      data: 'web_design',
      src: './img/webdesign/webdesign40.jpg'
    }, {
      data: 'wordpress',
      src: './img/wordpress/wordpress40.jpg'
    },
  ]
  // галлерея
  const galleryMenuWrapper = document.querySelector('.gallery-menu');
  //кнопка
  const loadMore = document.querySelector('.load_more');
  //контейнер с картинками
  const galleryContent = document.querySelector('.gallery-content')
  galleryMenuWrapper.addEventListener('click', (event) => {
    let dataMenu = null;
    const dataGallery = document.querySelectorAll('.image-item');
    if (event.target.nodeName === "BUTTON") {
      dataMenu = event.target.getAttribute('data-menu');
    }
    // активное состояние кнопок старт
    let menuItems = document.querySelectorAll('[data-menu]')
    menuItems.forEach(item => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });

    if (!event.target.classList.contains('active')) {
      event.target.classList.add('active')
    }
    // активное состояние кнопок конец
    dataGallery.forEach((item) => {
      if (dataMenu !== item.getAttribute('data-gallery') && dataMenu !== 'all') {
        item.style.display = 'none'
      } else {
        item.style.display = 'block'
      }
    })

  })
  // счетчик кнопки старт
  let counter = 0;
  // етчик кнопки конец
  loadMore.addEventListener('click', () => {

    counter++
    loadMore.classList.add('loader');
    setTimeout(() => {
      loadMore.classList.remove('loader');
    }, 1500)
    //счетчик удаления кнопки старт
    if (counter === 2) {
      loadMore.remove()
    }
    //счетчик удаления кнопки конец

    images.forEach((image, id) => {
      galleryContent.insertAdjacentHTML('beforeend', `<div class="image-item" data-gallery="${image.data}">
      <img src="${image.src}" alt="" />
    </div>`)
    })
  })








}
document.addEventListener('DOMContentLoaded', () => {
  Gallery();
});

// 1 находим враппер gallery-menu
// 2 Добавляем евентлиснер gallery-menu
// 3 Собираем колекцию data-gallery
// 4 Получаем значение data-memu у нажитой кнокбки
// 5 Отсортировать data-gallery по критерию из 4 пункта
// 6 все что не подходит дать элементам display: none;
// 7 Добавить условие для data-memu: all, нужно показать все картинки.
