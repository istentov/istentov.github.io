document.addEventListener('DOMContentLoaded', () => {
    const flashcards = document.querySelectorAll('.flashcard');
    let currentIndex = 0;

    document.getElementById('prev').addEventListener('click', () => {
        flashcards[currentIndex].classList.remove('active');
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : flashcards.length - 1;
        flashcards[currentIndex].classList.add('active');
    });

    document.getElementById('next').addEventListener('click', () => {
        flashcards[currentIndex].classList.remove('active');
        currentIndex = (currentIndex < flashcards.length - 1) ? currentIndex + 1 : 0;
        flashcards[currentIndex].classList.add('active');
    });
});
