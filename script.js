    document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const closeModal = document.querySelector('.close');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = thumbnail.src;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fecha imagem
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
