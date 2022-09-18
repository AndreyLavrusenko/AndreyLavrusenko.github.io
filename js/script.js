// const block = document.querySelector('.block');
// const email = document.querySelector('.email__img');
// const close = document.querySelector('.block--close');
// const block__items = document.querySelector('.block__items');
//
// email.addEventListener('click', () => {
//     block.style.cssText = `
//         visibility: visible;
//         height: 100vh;
//         width: 100vw;
//         z-index: 2000;
//         position: fixed;
//         overflow: hidden;
//         left: 0;
//         top: 0;
//     `;
//
//     block__items.style.cssText = `
//         left: 50%;
//         top: 50%;
//         transform: translate(-50%, -50%);
//     `;
//
//     setTimeout(() => {
//         block__items.style.cssText = `
//         transition: 1s;
//         opacity: 1;
//         left: 50%;
//         top: 50%;
//         transform: translate(-50%, -50%);
//     `;
//     }, 400)
// })
//
//
// close.addEventListener('click', () => {
//     block.style.cssText = `
//         transition: 1s !important;
//         top: -100vh;
//         height: 0;
//         width: 100vw;
//         left: 0
//         overflow: visible;
//         position: fixed;
//         z-index: 0;
//     `;
//
//     block__items.style.cssText = `
//          left: -5000px;
//         top: -5000px;
//     `;
//
//     setTimeout(() => {
//         block.style.cssText = `
//          top: 100vh;
//     `;
//     }, 600)
// })


gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".stage");
let scrollContainer = document.querySelector("#hscroll");
let nav = document.getElementById("navmenu").getElementsByTagName("a");
let contact = document.querySelector("#btncontact");

ScrollTrigger.matchMedia({
    "(min-width: 992px)": function() {

        let scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none"
        });

        let horizontalScroll = ScrollTrigger.create({
            animation: scrollTween,
            trigger: scrollContainer,
            pin: true,
            scrub: 1,
            end: () => "+=" + scrollContainer.offsetWidth,
        });

        var dragRatio = scrollContainer.offsetWidth / (window.innerWidth * (sections.length - 1));
        var drag = Draggable.create(".proxy", {
            trigger: scrollContainer,
            type: "x",
            onPress() {
                this.startScroll = horizontalScroll.scroll();
            },
            onDrag() {
                horizontalScroll.scroll(this.startScroll - (this.x - this.startX) * dragRatio);
            }
        })[0];

    },
    "all": function() {

    }
});



const wideViewport = window.matchMedia("(min-width: 992px)");

document.querySelectorAll("#navmenu a").forEach(element => {

    element.addEventListener('click', function(e) {

        e.preventDefault();
        const id = this.getAttribute('href').split('#')[1];

        const targetElement = document.getElementById(id)
        const navBar = document.getElementById('masthead')


        if(wideViewport.matches) {
            gsap.to(window, {
                scrollTo: ( (targetElement.offsetLeft + navBar.offsetWidth*sections.indexOf(targetElement)) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - targetElement.offsetWidth)) ),
                duration: 2
            })
        } else {
            gsap.to(window, {
                scrollTo: targetElement,
                duration: 2
            })
        }

    });

});