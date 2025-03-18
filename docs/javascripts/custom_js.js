document.addEventListener('DOMContentLoaded', function() {
    cleanElements(['nav', 'toc']);
});

function cleanElements(ids) {
    ids.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.classList.remove('text-nowrap');
            element.style.overflowX = 'hidden';
        }
    });
}