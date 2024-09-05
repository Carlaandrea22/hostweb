document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', event => {
        const imageSrc = event.currentTarget.getAttribute('data-image');
        document.getElementById('modalImage').setAttribute('src', imageSrc);
    });
});