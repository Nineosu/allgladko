document.addEventListener('DOMContentLoaded', function () {
    const accordionTitles = document.querySelectorAll('.accordion-title');

    accordionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            title.classList.toggle('active');
            const arrowIcon = title.querySelector('img');
            arrowIcon.style.transform = content.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });
});
