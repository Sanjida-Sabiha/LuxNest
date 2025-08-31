let filters = [];

// Store min/max temporarily
let sizeFilter = { min: "", max: "" };

function updateFilter(type, value, checked = true, subType = "") {
  if (type === "Size") {
    // Update min or max
    sizeFilter[subType] = value;

    // Only add if min or max is not empty
    if (sizeFilter.min || sizeFilter.max) {
      const key = `${type}: ${sizeFilter.min || "Min"} - ${sizeFilter.max || "Max"}`;
      // Remove old Size filter
      filters = filters.filter(f => !f.startsWith("Size:"));
      filters.push(key);
    } else {
      // If both empty, remove Size filter
      filters = filters.filter(f => !f.startsWith("Size:"));
    }
    renderFilters();
    return;
  }

  // Checkbox handling
  const key = `${type}: ${value}`;
  if (checked) {
    if (!filters.includes(key)) filters.push(key);
  } else {
    filters = filters.filter(f => f !== key);
  }

  renderFilters();
}

// Render filters as chips
function renderFilters() {
  const selectedFiltersDiv = document.getElementById("selectedFilters");
  selectedFiltersDiv.innerHTML = "";
  filters.forEach(f => {
    const chip = document.createElement("div");
    chip.style.backgroundColor = "#f5f5f5";
    chip.className =
    "flex items-center gap-1 text-primaryColor px-3 py-1 ml-2 mt-1 rounded-[4px] text-sm"; // bg-gray-100 / bg-green-100
    chip.innerHTML = `${f} <button onclick="removeFilter('${f}')" class="ml-1 text-primaryColor">✕</button>`;
    selectedFiltersDiv.appendChild(chip);

  });
}

// Remove filter
function removeFilter(filter) {
  filters = filters.filter(f => f !== filter);

  // Reset sizeFilter if Size
  if (filter.startsWith("Size:")) {
    sizeFilter = { min: "", max: "" };
    document.querySelectorAll("input[data-type='Size']").forEach(input => (input.value = ""));
  }

  // Uncheck checkboxes if necessary
  document.querySelectorAll("input[type=checkbox]").forEach(cb => {
    if (`${cb.closest("label").innerText.trim()}` === filter.split(": ")[1]) {
      cb.checked = false;
    }
  });

  renderFilters();
}

// Clear all
document.getElementById("clearAll").addEventListener("click", () => {
  filters = [];
  sizeFilter = { min: "", max: "" };
  document.querySelectorAll("input[type=checkbox]").forEach(cb => (cb.checked = false));
  document.querySelectorAll("input[type=text]").forEach(input => (input.value = ""));
  renderFilters();
});










    function toggleSection(id, btn) {
  const section = document.getElementById(id);
  section.classList.toggle("hidden");

  // rotate icon
  const expanded = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", !expanded);

  if (!expanded) {
    btn.querySelector("svg").classList.add("rotate-180");
  } else {
    btn.querySelector("svg").classList.remove("rotate-180");
  }
}



