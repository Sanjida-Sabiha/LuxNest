// Function to show a specific section and update button styles
function showSection(sectionId) {
    // Hide all sections with class 'collapsible'
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(collapsible => {
        collapsible.classList.add('hidden');
    });

    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.department-button');
    buttons.forEach(button => {
        button.classList.remove('active');
        button.style.backgroundColor = ""; // Reset background color to default
        button.style.color = "#000000";
    });

    // Show the section with the provided id
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
    }

    // Add 'active' class to the clicked button and change background color
    const activeButton = document.getElementById(sectionId + "-link");
    if (activeButton) {
        activeButton.classList.add('active');
        activeButton.style.backgroundColor = "#088868"; // Change background color to active color
        activeButton.style.color = "#FFFFFF";
    }

    // If 'All Department' section is clicked, set it as active with default background color
    if (sectionId === 'all') {
        const allButton = document.getElementById('all-link');
        if (allButton) {
            allButton.classList.add('active');
            allButton.style.backgroundColor = "#088868"; // Set background color to default
            allButton.style.color = "#FFFFFF";
        }
    }
}

// Initially show the 'All Department' section as active with default background color
document.addEventListener('DOMContentLoaded', function () {
    const firstSection = document.querySelector('.collapsible');
    firstSection.classList.remove('hidden');

    // Add active class and default background color to the 'All Department' button
    const allButton = document.getElementById('all-link');
    if (allButton) {
        allButton.classList.add('active');
        allButton.style.backgroundColor = "#088868"; // Set background color to default
        allButton.style.color = "#FFFFFF";
    }

    // Add event listeners to department buttons
    const buttons = document.querySelectorAll('.department-button');
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionId = button.getAttribute('data-section');
            showSection(sectionId);
        });
    });
});
