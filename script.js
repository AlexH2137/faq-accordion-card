const details = document.querySelectorAll('details');

details.forEach(targetDetail => {
    targetDetail.addEventListener('click', function() {
        details.forEach(detail => {
            if (detail !== targetDetail) {
                detail.removeAttribute('open');
            }
        });
    });
});