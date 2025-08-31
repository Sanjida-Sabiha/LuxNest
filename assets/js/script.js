  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");
  const openIcon = document.getElementById("menuOpenIcon");
  const closeIcon = document.getElementById("menuCloseIcon");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  // Mobile dropdown toggle for "Pages"
  const mobileFeaturesToggle = document.getElementById("mobileFeaturesToggle");
  const mobileDropdownMenu = document.getElementById("mobileDropdownMenu");
  const mobileDropdownIcon = document.getElementById("mobileDropdownIcon");

  mobileFeaturesToggle.addEventListener("click", () => {
    mobileDropdownMenu.classList.toggle("hidden");
    mobileDropdownIcon.classList.toggle("rotate-180");
  });




  document.addEventListener('DOMContentLoaded', function () {
        var swiper = new Swiper('.swiper', {
            slidesPerView: 3,
            spaceBetween: 28,
            loop: true,
            centeredSlides: false,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },

            navigation: {
                nextEl: '#slider-previous-uniques',
                prevEl: '#slider-next-uniques',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.4,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 28,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 28,
                },
            },
        });

        // Custom Pagination
  const pagination = document.querySelector(".custom-pagination");
  const totalSlides = swiper.slides.length - swiper.loopedSlides * 2; // real slides count
  const parts = 3; // fixed pagination count
  const slidesPerPart = Math.ceil(totalSlides / parts);

  // Create 3 bullets
  for (let i = 0; i < parts; i++) {
    const bullet = document.createElement("span");
    if (i === 0) bullet.classList.add("active");
    bullet.dataset.index = i;
    pagination.appendChild(bullet);
  }

  const bullets = pagination.querySelectorAll("span");

  // Update bullets on slide change
  swiper.on("slideChange", () => {
    const currentIndex = swiper.realIndex;
    const activePart = Math.floor(currentIndex / slidesPerPart);

    bullets.forEach((b, i) => {
      b.classList.toggle("active", i === activePart);
    });
  });

  // Bullet click -> jump to part
  bullets.forEach((bullet, i) => {
    bullet.addEventListener("click", () => {
      swiper.slideToLoop(i * slidesPerPart, 500);
    });
  });
    });
    





    document.addEventListener('DOMContentLoaded', function () {
        var swiper = new Swiper('.swiperss', {
            slidesPerView: 6,
            spaceBetween: 28,
            loop: true,
            centeredSlides: false,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
              
            navigation: {
                nextEl: '#slider-previous-unique',
                prevEl: '#slider-next-unique',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.8,
                    spaceBetween: 16,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 28,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 28,
                },
                1280: {
                    slidesPerView: 6,
                    spaceBetween: 28,
                },
            },
        });

        // Custom Pagination
  const pagination = document.querySelector(".custom-paginations");
  const totalSlides = swiper.slides.length - swiper.loopedSlides * 2; // real slides count
  const parts = 3; // fixed pagination count
  const slidesPerPart = Math.ceil(totalSlides / parts);

  // Create 3 bullets
  for (let i = 0; i < parts; i++) {
    const bullet = document.createElement("span");
    if (i === 0) bullet.classList.add("active");
    bullet.dataset.index = i;
    pagination.appendChild(bullet);
  }

  const bullets = pagination.querySelectorAll("span");

  // Update bullets on slide change
  swiper.on("slideChange", () => {
    const currentIndex = swiper.realIndex;
    const activePart = Math.floor(currentIndex / slidesPerPart);

    bullets.forEach((b, i) => {
      b.classList.toggle("active", i === activePart);
    });
  });

  // Bullet click -> jump to part
  bullets.forEach((bullet, i) => {
    bullet.addEventListener("click", () => {
      swiper.slideToLoop(i * slidesPerPart, 500);
    });
  });
    });

    




  const btn = document.getElementById("dropdownBtn");
  const menu = document.getElementById("dropdownMenu");
  const icon = document.getElementById("dropdownIcon");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    icon.classList.toggle("rotate-180"); // rotate যোগ হলো
  });

  // বাইরে ক্লিক করলে dropdown বন্ধ হবে
  window.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add("hidden");
      icon.classList.remove("rotate-180"); // আবার normal অবস্থায় যাবে
    }
  });



  