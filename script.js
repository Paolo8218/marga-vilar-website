function showOptions(category) {
    document.getElementById('main-buttons').style.display = 'none';
    document.getElementById(`${category}-options`).classList.remove('hidden');
}

function selectFood(food) {
    const selectedFoodDiv = document.getElementById('selected-food');
    selectedFoodDiv.innerHTML = `<h2>You selected: ${food}</h2>`;
    document.getElementById('rating').classList.remove('hidden');
}

let selectedRating = 0;

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('mouseover', () => highlightStars(parseInt(star.dataset.value)));
    star.addEventListener('mouseout', () => highlightStars(selectedRating));
    star.addEventListener('click', () => {
        selectedRating = parseInt(star.dataset.value);
        highlightStars(selectedRating);
    });
});

function highlightStars(rating) {
    document.querySelectorAll('.star').forEach(star => {
        star.classList.toggle('selected', parseInt(star.dataset.value) <= rating);
    });
}

function showFeedbackForm() {
    document.getElementById('feedback-form').classList.remove('hidden');
}

function submitFeedback() {
    const feedbackText = document.getElementById('feedback-text').value;
    if (feedbackText) {
        document.getElementById('feedback-response').innerHTML = 'Thank you for the feedback!';
        document.getElementById('feedback-response').classList.remove('hidden');
    }
}
