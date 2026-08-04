tl1 = gsap.timeline();

tl1.from(".nav-logo", {
    opacity: 0,
    y: -50,
    duration: 0.8,
    delay: 0.2
})

tl1.from(".nav-text a", {
    opacity: 0,
    y: -50,
    duration: 0.8,
    stagger: {
        each: 0.2
    }

})

tl1.from(".hero-left h3", {
    opacity: 0,
    x: "-100%",
    duration: 0.8,

})
tl1.from(".hero-left p", {
    opacity: 0,
    x: "-100%",
    duration: 0.8,

})
tl1.from(".hero-right ", {
    opacity: 0,
    x: "100%",
    duration: 0.8,

})

tl1.from(".div-btn", {
    opacity: 0,
    x: "-100%",
    duration: 0.8,

})



tl1.from(".amazon ", {
    opacity: 0,
    y: -50,
    duration: 0.8,
    stagger: {
        each: 0.2
    }

})


let cards = document.getElementsByClassName("card");
for (let index = 0; index < cards.length; index++) {

    if (index % 2 == 0 || index == 0) {
        const element = cards[index];
        element.classList += " left"
        console.log(element, index);
    } else {
        const element = cards[index];
        element.classList += " right"
        console.log(element, index);

    }


}


tl1.from(".left", {
    opacity: 0,
    x: "-80%",
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".left",
        scroller: "body",
        // markers: true,
        start: "top 80% ",
        scrub: 2,


    },
})
tl1.from(".right", {
    opacity: 0,
    x: "80%",
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".left",
        scroller: "body",
        // markers: true,
        start: "top 80% ",
        scrub: 2,
    }
})