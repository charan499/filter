function naming(card) {
    
    let studentName = card.querySelector('.name').innerText;
    let input = document.getElementById('myinput');

    input.value = studentName;
}
function handleSubmit() {
    let inputValue = document.getElementById('myinput').value.toLowerCase();
    let cards = Array.from(document.querySelectorAll('.card'));
    let matchedCards = cards.filter(card => {
        let studentName = card.querySelector('.name').innerText.toLowerCase();
        return studentName.includes(inputValue);
    });
    cards.forEach(card => card.style.display = "none");
    matchedCards.forEach(card => card.style.display = "");
}