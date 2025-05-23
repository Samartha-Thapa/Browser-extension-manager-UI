const toggleAll = document.getElementById('toggle-all');
const toggleActive = document.getElementById('toggle-active');
const toggleInactive = document.getElementById('toggle-inactive');

function allToogle() {
    toggleAll.classList.add('active');
    toggleActive.classList.remove('active');
    toggleInactive.classList.remove('active');
}

function activeToogle() {
    toggleAll.classList.remove('active');
    toggleActive.classList.add('active');
    toggleInactive.classList.remove('active');
}

function inactiveToggle() {
    toggleAll.classList.remove('active');
    toggleActive.classList.remove('active');
    toggleInactive.classList.add('active');
}

toggleAll.addEventListener("click", allToogle);
toggleActive.addEventListener("click", activeToogle);
toggleInactive.addEventListener("click", inactiveToggle);
