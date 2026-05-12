const cardTitle = document.getElementById('card-title');
const cardText = document.getElementById('card-text');
const cardImage = document.getElementById('card-image');
const textButton = document.getElementById('text-button');
const imageButton = document.getElementById('image-button');
const themeButton = document.getElementById('theme-button');
const updateButton = document.getElementById('update-button');
const userInput = document.getElementById('user-input');
const body = document.body;

let isDarkTheme = false;

textButton.addEventListener('click', () => {
    cardTitle.textContent = 'Today is a great day!';
    cardText.textContent = 'Dynamic webpages can update headings, paragraphs, images, and layouts without reloading the page.';
    cardImage.style.display = 'none';
});

imageButton.addEventListener('click', () => {
    cardTitle.textContent = 'Here is an image';
    cardText.textContent = 'Images can be shown or hidden dynamically using JavaScript.';
    cardImage.src = 'https://via.placeholder.com/400x250.png?text=Dynamic+Image';
    cardImage.alt = 'Placeholder image';
    cardImage.style.display = 'block';
});

themeButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        body.style.backgroundColor = '#1a1a2e';
        body.style.color = '#f5f5f5';
    } else {
        body.style.backgroundColor = '#f4f4f4';
        body.style.color = '#222222';
    }
});

updateButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message === '') {
        cardText.textContent = 'Please type a message before updating the card.';
        return;
    }
    cardTitle.textContent = 'Your message:';
    cardText.textContent = message;
    cardImage.style.display = 'none';
});

userInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        updateButton.click();
    }
});