const block = document.querySelector('.block');
const email = document.querySelector('.email__img');
const close = document.querySelector('.block--close');
const block__items = document.querySelector('.block__items');

email.addEventListener('click', () => {
    block.style.cssText = `
        visibility: visible;
        height: 100vh;
        width: 100vw;
        z-index: 2000;
        position: fixed;
        overflow: hidden;
        left: 0;
        top: 0;
    `

    setTimeout(() => {
        block__items.style.cssText = `
        transition: 1s;
        opacity: 1;
    `
    }, 400)
})


close.addEventListener('click', () => {
    block.style.cssText = `
        transition: 1s !important;
        top: -100vh;
        height: 0;
        width: 100vw;
        left: 0
        overflow: visible;
        position: fixed;
        z-index: 0;
    `

    block__items.style.cssText = `
        visibility: hidden;
    `

    setTimeout(() => {
        block.style.cssText = `
         top: 100vh;
    `
    }, 600)
})