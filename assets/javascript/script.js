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
document.querySelector(".p1").addEventListener("click", function () {
    scrollPortfolio();
});
document.querySelector(".c1").addEventListener("click", function (){
    scrollContact();
});


/* funções */

function meio() {
    document.querySelector(".banner").classList.remove("b1", "b2");
    document.querySelector(".banner").classList.add("b3");
    setTimeout(direita, 2500);
};
function direita() {
    document.querySelector(".banner").classList.remove("b2", "b3");
    document.querySelector(".banner").classList.add("b1");
    setTimeout(esquerda, 2500);
}
function esquerda() {
    document.querySelector(".banner").classList.add("b2");
    document.querySelector(".banner").classList.remove("b3", "b1");
    setTimeout(meio, 2500);
}

function scrollar() {
    window.scrollTo({
        top: 1000,
        behavior: 'smooth',
    });
}
function scrollContact() {
    window.scrollTo({
        top: 2000,
        behavior: 'smooth',
    });
}
function scrollPortfolio() {
    window.scrollTo({
        top: 1000,
        behavior: 'smooth',
    });
}
meio();