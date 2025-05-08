const shareButton = document.getElementById('shareButton');
const shareOverlay = document.getElementById('shareOverlay');
const closeOverlay = document.getElementById('closeOverlay');

shareButton.addEventListener('click', () => {
    shareOverlay.classList.add('active');
});

closeOverlay.addEventListener('click', () => {
    shareOverlay.classList.remove('active');
});