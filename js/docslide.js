document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".doctors__slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".doctors__next",
      prevEl: ".doctors__prev",
    },
    on: {
      slideChange: function () {
        document.querySelectorAll(".doctors__photo").forEach(function (photo) {
          photo.classList.remove("active-doctor");
        });

        var activePhoto =
          this.slides[this.activeIndex].querySelector(".doctors__photo");
        if (activePhoto) {
          activePhoto.classList.add("active-doctor");
        }
        // Обновляем информацию о враче
        updateDoctorInfo(this.slides[this.activeIndex]);
      },
    },
  });

  function updateDoctorInfo(slide) {
    var photoContainer = document.querySelector(
      ".doctors__info-photo-container"
    );
    var textContainer = document.querySelector(".doctors__info-text-container");

    // Извлекаем данные из data-атрибутов текущего активного слайда
    var name = slide.dataset.name;
    var specialty = slide.dataset.specialty;
    var experience = slide.dataset.experience;
    var description = slide.dataset.description;
    var education = slide.dataset.education;
    var photoSrc = slide.dataset.photo;

    // Формируем содержимое для блоков фото и текста
    photoContainer.innerHTML = `<img class="doctors__info-photo" src="${photoSrc}" alt="${name}">`;
    textContainer.innerHTML = `
      <h2 class="doctors__info-name">${name}</h2>
      <h2 class="doctors__info-specialty">${specialty}</h2>
      <h3 class="doctors__info-experience">${experience}</h3>
      <p class="doctors__info-description">${description}</p>
      <p class="doctors__info-education">${education}</p>
      <button class="doctors__info-appointment button">Запись к врачу</button>
    `;
  }

  // Первоначальное заполнение информации для первого врача при загрузке страницы
  updateDoctorInfo(swiper.slides[swiper.activeIndex]);
});
