function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
}

function showSuggestions(query) {
    const suggestionsBox = document.getElementById('suggestions');
    if (query.trim() === '') {
        suggestionsBox.classList.add('hidden');
        suggestionsBox.innerHTML = '';
        return;
    }
    const suggestions = [
        'Philippine Independence',
        'World War II in the Philippines',
        'Edsa Revolution',
        'Philippine Presidents',
        'Spanish Colonization'
    ].filter(item => item.toLowerCase().includes(query.toLowerCase()));

    suggestionsBox.classList.remove('hidden');
    suggestionsBox.innerHTML = suggestions
        .map(item => <p onclick="selectSuggestion('${item}')">${item}</p>)
        .join('');
}

function selectSuggestion(value) {
    document.getElementById('search-bar').value = value;
    document.getElementById('suggestions').classList.add('hidden');
}

function toggleHamburgerMenu() {
    const menu = document.getElementById('hamburger-menu');
    menu.classList.toggle('show');
}