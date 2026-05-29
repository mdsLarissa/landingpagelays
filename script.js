const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
    const batataGrande = slide.querySelector(".saco img:nth-child(1)"); 
    const batataPequena = slide.querySelector(".saco img:nth-child(2)"); 

    if (batataPequena) {
        batataPequena.onclick = () => {
            let proximoIndex = (index + 1) % slides.length;
            mudarSlide(index, proximoIndex);
        };
    }

    if (batataGrande) {
        batataGrande.onclick = () => {
            let anteriorIndex = (index - 1 + slides.length) % slides.length;
            mudarSlide(index, anteriorIndex);
        };
    }
});

function mudarSlide(indexAtual, novoIndex) {
    slides[indexAtual].classList.remove("ativo");
    slides[novoIndex].classList.add("ativo");
}