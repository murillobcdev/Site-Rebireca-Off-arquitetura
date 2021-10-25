document.querySelector(".menuLogo").addEventListener("click", function () {
    if (document.querySelector(".menuOculto").style.display == 'flex') {
        document.querySelector(".menuOculto").style.display = 'none';
    } else {
        document.querySelector(".menuOculto").style.display = 'flex';
    }
});
document.querySelector(".arrow-down").addEventListener("click", function () {
    scrollar();
    console.log("tentou escrollar");
});
function meio() {
    document.querySelector(".banner").classList.remove("b1", "b2");
    document.querySelector(".banner").classList.add("b3");
    setTimeout(direita, 3000);
};
function direita() {
    document.querySelector(".banner").classList.remove("b2", "b3");
    document.querySelector(".banner").classList.add("b1");
    setTimeout(esquerda, 3000);
}
function esquerda() {
    document.querySelector(".banner").classList.remove("b3", "b2");
    document.querySelector(".banner").classList.add("b2");
    setTimeout(meio, 3000);
}
function scrollar() {
    window.scrollTo({
        top: 1000,
        behavior: 'smooth',
    });
}
meio();