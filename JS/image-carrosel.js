document.addEventListener("DOMContentLoaded", () => {
    let currentIndex1 = 0;
    const interval1 = 5000;

    const inner1 = document.querySelector(".carossel-inner");
    const slides1 = inner1?.querySelectorAll("img") || [];
    const total1 = slides1.length;
    const indicators1 = document.querySelector(".carossel-indicators");

    if (!inner1 || slides1.length === 0) return;

    function moveCarrossel1(step) {
        currentIndex1 = (currentIndex1 + step + total1) % total1;
        const offset = -currentIndex1 * 100;
        inner1.style.transform = `translateX(${offset}%)`;
        updateIndicators1();
    }

    function createIndicators1() {
        if (!indicators1) return;
        indicators1.innerHTML = "";
        for (let i = 0; i < total1; i++) {
            const ind = document.createElement("div");
            ind.classList.add("carossel-indicator");
            ind.addEventListener("click", () => {
                moveCarrossel1(i - currentIndex1);
            });
            indicators1.appendChild(ind);
        }
        updateIndicators1();
    }

    function updateIndicators1() {
        const all = document.querySelectorAll(".carossel-indicator");
        all.forEach((ind, i) => {
            ind.classList.toggle("active", i === currentIndex1);
        });
    }

    function startAuto1() {
        setInterval(() => moveCarrossel1(1), interval1);
    }

    window.moveAutoSlide = moveCarrossel1;

    createIndicators1();
    startAuto1();
});
