const menu = document.querySelector(".menu")
const navigationv = document.querySelector(".navigation")

menu.addEventListener('click', () => {
    menu.classList.toggle ('active');
    navigation.classList.toggle('active');
})