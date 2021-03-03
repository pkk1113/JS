const header = document.querySelector("header");
const links = document.querySelectorAll("header a");

const apple = document.querySelector(".apple");
const ryuk = document.querySelector(".ryuk");

document.addEventListener("scroll", () => {
    const scrollY = document.body.scrollTop || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const ratio = scrollY / scrollHeight;

    apple.style.top = `calc(${100 * ratio}vh - ${apple.clientHeight}px)`;
    apple.style.transform = `rotateZ(${3.5 * 360 * ratio}deg)`;
    apple.style.opacity = `${ratio}`;

    if (ratio > 0.58 && ratio < 0.65) {
        ryuk.style.transform = `scale(${ratio * 5}, ${ratio * 5})`;
        ryuk.style.opacity = (ratio > 0.64) ? 0 : `${ratio}`;
    } else {
        ryuk.style.opacity = 0;
    }

    if (ratio > 0.99 - 0.166) {
        links[0].classList.remove('bigger');
        links[1].classList.remove('bigger');
        links[2].classList.remove('bigger');
        links[3].classList.add('bigger');
    }
    else if (ratio > 0.66 - 0.166) {
        links[0].classList.remove('bigger');
        links[1].classList.remove('bigger');
        links[2].classList.add('bigger');
        links[3].classList.remove('bigger');
    }
    else if (ratio > 0.33 - 0.166) {
        links[0].classList.remove('bigger');
        links[1].classList.add('bigger');
        links[2].classList.remove('bigger');
        links[3].classList.remove('bigger');
    }
    else {
        links[0].classList.add('bigger');
        links[1].classList.remove('bigger');
        links[2].classList.remove('bigger');
        links[3].classList.remove('bigger');
    }

    header.classList.toggle("scrolled", window.scrollY > 0);
    apple.classList.toggle("scrolled", window.scrollY > 0);
    ryuk.classList.toggle("scrolled", window.scrollY > 0);
});