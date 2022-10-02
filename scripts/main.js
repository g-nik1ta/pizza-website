window.addEventListener("load", () => {
    const btnsControls = document.querySelectorAll(".btn-control");
    const sliderItems = document.querySelectorAll(".slider-item");
    let sliderCounter = 1;

    btnsControls.forEach(element => {
        element.addEventListener("click", (e) => {
            for (let i = 0; i < btnsControls.length; i++) {
                btnsControls[i].classList.remove('btn-control-active');
                sliderItems[i].classList.remove('slider-item-active');
            }
            element.classList.toggle('btn-control-active');

            let nthActiveBtn = 0;
            for (let i = 0; i < btnsControls.length; i++) {
                if (btnsControls[i].classList.contains("btn-control-active")) {
                    nthActiveBtn = i;
                    break;
                }
            }
            sliderItems[nthActiveBtn].classList.toggle('slider-item-active');
            
            headerBackground(nthActiveBtn);
            // if (nthActiveBtn == 2) {
            //     document.querySelector("header").classList.remove("headerBackgroundSlider");
            //     document.querySelector("header").classList.add("headerBackgroundSlider3");
            // } else {
            //     document.querySelector("header").classList.remove("headerBackgroundSlider3");
            //     document.querySelector("header").classList.add("headerBackgroundSlider");
            // }
        });
    });

    setInterval(() => {
        for (let i = 0; i < btnsControls.length; i++) {
            btnsControls[i].classList.remove('btn-control-active');
            sliderItems[i].classList.remove('slider-item-active');
        }
        btnsControls[sliderCounter].classList.toggle('btn-control-active');
        sliderItems[sliderCounter].classList.toggle('slider-item-active');
        headerBackground(sliderCounter);
        sliderCounter + 1 > sliderItems.length - 1 ? sliderCounter = 0 : sliderCounter++;
    }, 5000);
});

function headerBackground(value) {
    if (value == 2) {
        document.querySelector(".headerBackground").classList.add("headerBackground2");
    } else {
        document.querySelector(".headerBackground").classList.remove("headerBackground2");
    }
}