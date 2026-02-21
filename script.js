function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth"});
}

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.computedStyleMap.opacity = 1;
            entry.target.computedStyleMap.transfrom = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.computedStyleMap.opacity = 0;
    card.computedStyleMap.transfrom = "translateY(40px)";
    observer.observe(card);
});