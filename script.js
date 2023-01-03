var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        scrub: 1,
        pin: true,
        markers: true
    }
});

tl
.to("#circle", {
    scale: .2,
    ease: Power1
}, 'same')
.to("#overlay #purple", {
    top: '50%',
    ease: Power1
}, 'same')
.to("#overlay #mainh1", {
    top: '150%',
    ease: Power1
}, 'same')
.to("#overlay #centerimg img", {
    scale: 0,
    ease: Power1
}, 'same')
.to("#overlay #centerimg span", {
    opacity: 0,
    ease: Expo.easeInOut
}, 'same')
.to("#smcircle", {
    scale: .6,
    ease: Power1
}, 'same')
.to("#circle #btm img", {
    rotate: "-180deg",
    ease: Power1,
    stagger: .05
}, 'same')