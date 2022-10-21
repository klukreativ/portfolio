function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        (elementTop < windowHeight - elementVisible) ? reveals[i].classList.add("active") : reveals[i].classList.remove("active");
    }
}

window.addEventListener("scroll", reveal);

reveal();