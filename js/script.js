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




gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".stage");
let scrollContainer = document.querySelector("#hscroll");
let nav = document.getElementById("navmenu").getElementsByTagName("a");
let contact = document.querySelector("#btncontact");

ScrollTrigger.matchMedia({
    "(min-width: 992px)": function() {

        let scrollTween = gsap.to(sections, {
            // скорость прокрутки
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