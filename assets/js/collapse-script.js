function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.collapsible').forEach(section => {
        section.classList.add('hidden');
    });

    // Remove active style from all buttons
    document.querySelectorAll('.department-button').forEach(button => {
        button.classList.remove('active');
        button.style.color = "#535353";
        button.parentElement.style.borderLeft = "2px solid #E0E0E0"; // Reset border on <li>
    });

    // Show selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
    }

    // Activate the clicked button
    const activeButton = document.querySelector(`.department-button[data-section="${sectionId}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
        activeButton.style.color = "#088868";
        activeButton.parentElement.style.borderLeft = "2px solid #088868"; // Set active border on <li>
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Show first section initially
    const firstSection = document.querySelector('.collapsible');
    if (firstSection) firstSection.classList.remove('hidden');

    // Make first button active
    const firstButton = document.querySelector('.department-button');
    if (firstButton) {
        firstButton.style.color = "#088868";
        firstButton.parentElement.style.borderLeft = "2px solid #088868"; // Set green border on parent <li>
    }

    // Add click events
    document.querySelectorAll('.department-button').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = button.getAttribute('data-section');
            showSection(sectionId);
        });
    });
});
