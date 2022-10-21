const defaultVal = true;

const darkMode = {
    // toggle function checks for all themed components and toggles class between dark mode and light mode
    toggle: (btnClicked) => {
        const themedElements = document.querySelectorAll('.themed');
        themedElements.forEach((item) => {
            if (item.classList.contains('content')) {
                item.classList.toggle('darkModeContent');
                item.classList.toggle('lightModeContent');
            } else if (item.classList.contains('text')) {
                item.classList.toggle('darkModeText');
                item.classList.toggle('lightModeText');
            } else if (item.classList.contains('list')) {
                item.classList.toggle('darkModeList');
                item.classList.toggle('lightModeList');
            } else {
                item.classList.toggle('darkMode');
                item.classList.toggle('lightMode');
            }
        })
        if (btnClicked) {
            (darkMode.state === "true" ? darkMode.state = "false" : darkMode.state = "true");
            (btnClicked ? window.localStorage.setItem('isDarkMode', JSON.stringify(darkMode.state)) : '')
        }
    },
    // checks if user left off in light or dark mode
    isActive: () => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem('isDarkMode') || String(defaultVal));
        } catch (e) {
            console.log(e);
            val = defaultVal;
        }
        return val;
    },
    // initializes the slider button
    button: () => {
        document.querySelector(".darkModeSlider").addEventListener('click', function () {
            darkMode.toggle(true);
            console.log('clicked')
        })
    },

    init: () => {
        darkMode.state = darkMode.isActive();
        // if user left off in light mode will toggle colours to to light mode
        (darkMode.state === "false" ? darkMode.toggle(false) : '');
        // sets the checkbox to checked if darkMode is active
        (darkMode.state === "true" ? document.querySelector('#checkbox').checked = true : '');
        darkMode.button();
    }
}


// this function creates slide in animations for selected elements on the page
function reveal() {
    // looks for all elements with the class reveal
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        // checks the height of the document
        let windowHeight = window.innerHeight;
        // checks elements relevant distance from the top. getBounding creates a rectangle element including padding & border to track
        let elementTop = reveals[i].getBoundingClientRect().top;
        // this determines how many pixels of the element need to be onscreen before loading in the element
        let elementVisible = 150;
        // will add active class list when 150px of element is visible when scrolling over, else removes the active class
        (elementTop < windowHeight - elementVisible) ? reveals[i].classList.add("active") : reveals[i].classList.remove("active");
    }
}

// when uers scrolls will call function reveal
window.addEventListener("scroll", reveal);
// initializes the reveal function
reveal();

darkMode.init();