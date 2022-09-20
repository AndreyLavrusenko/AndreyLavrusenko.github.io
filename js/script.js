// Ссылки при нажатии на слайдер
const stage_1 = document.getElementById("stage-1");
const stage_2 = document.getElementById("stage-2");
const stage_3 = document.getElementById("stage-3");

const linkStage = (stage, link) => {
    stage.addEventListener('click', e => {
        e.preventDefault();

        window.open(link, "_blank");
    })
}


// linkStage(stage_1, "https://unionuniverse.one/");
linkStage(stage_2, "https://cryptodb-sn1pexx.vercel.app");
linkStage(stage_3, "http://i95239ig.beget.tech/");




const block = document.querySelector('.block__modal');
const email = document.querySelector('.email__img');
const close = document.querySelector('.block__items--close');
const block__items = document.querySelector('.block__items--modal');

email.addEventListener('click', () => {
    block.style.cssText = `
        display:block;
        visibility: visible;
        height: 100vh;
        width: 100vw;
        z-index: 4000;
        position: fixed;
        overflow: hidden;
        left: 0;
        background-color: #4831d4;
        top: 0;
    `;

    block__items.style.cssText = `
        left: 50%;
        top: 50%;
    `;

    setTimeout(() => {
        block__items.style.cssText = `
        transition: 1s;
        opacity: 1;
    `;
    }, 300)
})


close.addEventListener('click', (e) => {
    e.preventDefault();

    block.style.cssText = `
        transition: 1s !important;
        opacity: 0;
        overflow: visible;
        position: fixed;
        z-index: 0;
    `;

    block__items.style.cssText = `
         left: -5000px;
         top: -5000px;
    `;

    setTimeout(() => {
        block.style.cssText = `
         top: 100vh;
         opacity: 1;
    `;
    }, 600)
})


const clientHeight = document.documentElement.clientHeight;
const email__img_path = document.querySelector('.email__img--path');

window.addEventListener('scroll', () => {

    if (window.pageYOffset >= (clientHeight - 67)) {
        email__img_path.style.cssText = `
            fill: black !important;
            transition: .6s;
        `;
    } else {
        email__img_path.style.cssText = `
            fill: white !important;
            transition: .6s;
        `;
    }


    if (window.pageYOffset >= (clientHeight - 80) * 2) {
        email__img_path.style.cssText = `
            visibility: hidden;
        `;
    }
})