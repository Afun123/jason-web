/*=========================================== typing animation ===========================*/
const text = document.querySelector(".typing");
const textload = () => {
    setTimeout(() => {
        text.textContent = "Web Designer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Graphics Designer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Linkedin User"
    }, 8000);
    setTimeout(() => {
        text.textContent = "GitHub User"
    }, 12000);
    setTimeout(() => {
        text.textContent = "Youtuber"
    }, 16000);
    setTimeout(() => {
        text.textContent = "Whatsapp Tv Owner"
    }, 20000);
}
textload()