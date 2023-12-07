const imageContainer = document.querySelector('.image__container');
let modal = document.querySelector('.modal')
const objImages = [
    {
      image: "./images/Без названия.jpeg",
      alt: "description",
      id: 1,
    },
    {
      image: "./images/Без названия (1).jpeg",
      alt: "description",
      id: 2,
    },
    {
      image: "./images/Без названия (2).jpeg",
      alt: "description",
      id: 3,
    },
    {
      image: "./images/Без названия (3).jpeg",
      alt: "description",
      id: 4,
    },
    {
      image: "./images/Без названия (4).jpeg",
      alt: "description",
      id: 5,
    },
    {
      image: "./images/Без названия (5).jpeg",
      alt: "description",
      id: 6,
    },
    {
      image: "./images/Без названия (6).jpeg",
      alt: "description",
      id: 7,
    },
    {
      image: "./images/Без названия (7).jpeg",
      alt: "description",
      id: 8,
    },
    {
      image: "./images/Без названия (8).jpeg",
      alt: "description",
      id: 9,
    },
    {
      image: "./images/Без названия (9).jpeg",
      alt: "description",
      id: 10,
    },
    {
      image: "./images/Без названия (10).jpeg",
      alt: "description",
      id: 11,
    },
    {
      image: "./images/Без названия (11).jpeg",
      alt: "description",
      id: 12,
    },
  ];


  objImages.forEach(obj => {
    let img = document.createElement('img');
    img.src = obj.image;
    img.alt = obj.alt;
    img.id = obj.id;
    imageContainer.appendChild(img)
    img.style.width = 200 + 'px'
    img.style.height = 200 + 'px'
  })

  let modalAppend = `
              <div class="modal-content" id='modal-cont'>
                <span id="closeModal">&times;</span>
              </div>
             `;
        modal.insertAdjacentHTML("beforeend", modalAppend);
        modal.classList.toggle("window__modal");

  objImages.forEach((modalka) => {
    imageContainer.addEventListener('click', () => {
      if (modalka.target.alt === "description") {
        modal.style.display = 'block'
      }
    })
  })

  let closeModal = document.querySelector('#closeModal')
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
  })

  

  
