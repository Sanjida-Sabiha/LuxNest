const minRange = document.getElementById("minRange");
    const maxRange = document.getElementById("maxRange");
    const minPrice = document.getElementById("minPrice");
    const maxPrice = document.getElementById("maxPrice");
    const sliderRange = document.getElementById("sliderRange");

    const minGap = 5000;

    function formatPrice(num) {
      return "$" + num.toLocaleString();
    }

    function updateSlider() {
      let minVal = parseInt(minRange.value);
      let maxVal = parseInt(maxRange.value);

      if (maxVal - minVal <= minGap) {
        if (event.target.id === "minRange") {
          minRange.value = maxVal - minGap;
        } else {
          maxRange.value = minVal + minGap;
        }
      }
      minVal = parseInt(minRange.value);
      maxVal = parseInt(maxRange.value);

      minPrice.value = formatPrice(minVal);
      maxPrice.value = formatPrice(maxVal);

      // সবুজ track update হবে
      const percent1 = (minVal / minRange.max) * 100;
      const percent2 = (maxVal / maxRange.max) * 100;
      sliderRange.style.left = percent1 + "%";
      sliderRange.style.width = (percent2 - percent1) + "%";
    }

    minRange.addEventListener("input", updateSlider);
    maxRange.addEventListener("input", updateSlider);

    // Input change করলে slider move হবে
    minPrice.addEventListener("input", () => {
      let val = parseInt(minPrice.value.replace(/[^0-9]/g, "")) || 0;
      if (val >= +maxRange.value - minGap) val = +maxRange.value - minGap;
      minRange.value = val;
      updateSlider();
    });

    maxPrice.addEventListener("input", () => {
      let val = parseInt(maxPrice.value.replace(/[^0-9]/g, "")) || 0;
      if (val <= +minRange.value + minGap) val = +minRange.value + minGap;
      maxRange.value = val;
      updateSlider();
    });

    // প্রথম লোডে শুধু gray থাকবে (refresh করলে সবুজ যাবে)
    sliderRange.style.width = "0%";