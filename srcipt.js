// Function to toggle visibility of filter sections
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}

// Toggle colors section
document.getElementById('toggle-colors').addEventListener('click', function() {
    toggleSection('color-list');
});

// Toggle price section
document.getElementById('toggle-price').addEventListener('click', function() {
    toggleSection('price-list');
});

// Toggle categories section
document.getElementById('toggle-categories').addEventListener('click', function() {
    toggleSection('category-list');
});

function newFunction() {
    const hamburger = document.getElementById('hamburger')[0];
    const navLinks = document.getElementsByClassName('filters')[0];
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
newFunction();