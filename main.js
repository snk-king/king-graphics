import './style.css'
import viteLogo from '/vite.svg'

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.expanded').classList.toggle('visible');
  });
});
