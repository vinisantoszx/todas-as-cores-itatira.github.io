document.addEventListener("DOMContentLoaded", () => {
    let currentIndex2 = 0;
    const interval2 = 5000;

    const container2 = document.getElementById("carrossel");
    const slides2 = container2?.querySelectorAll("img") || [];
    const total2 = slides2.length;

    if (!container2 || slides2.length === 0) return;

    function updateSlide2() {
        const largura = slides2[0].clientWidth;
        container2.style.transform = `translateX(-${currentIndex2 * largura}px)`;
    }

    function moveCarrossel2(step) {
        currentIndex2 = (currentIndex2 + step + total2) % total2;
        updateSlide2();
    }

    function startAuto2() {
        setInterval(() => moveCarrossel2(1), interval2);
    }

    window.moveManualSlide = moveCarrossel2;

    window.addEventListener("resize", updateSlide2);
    updateSlide2();
    startAuto2();
});
