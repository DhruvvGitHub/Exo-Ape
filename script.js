function lenis() {
    const lenis = new Lenis()
    
    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)
}
lenis();


function mouseFollowerAndHoverAnimations() {
    // Basic mouseFollower used for the whole website 
    let mouseMoveHandler;

    function enableMouseFollower() {
        mouseMoveHandler = (e) => {
            gsap.to("#cursor", {
                top: e.clientY - 45,
                left: e.clientX - 35
            });
            gsap.to("#cursor", {
                scale: 1
            });
        };
        document.addEventListener("mousemove", mouseMoveHandler);
    }

    function disableMouseFollower() {
        document.removeEventListener("mousemove", mouseMoveHandler);
    }

    enableMouseFollower();

    document.addEventListener("mouseleave", () => {
        gsap.to("#cursor", {
            scale: 0
        });
    });


    // Hover Animations which affect mouseFollower 
    const hoverTexts = document.querySelectorAll(".hoverText");

    hoverTexts.forEach((hoverText) => {
        const hoverLine = hoverText.querySelector(".hoverLine");

        hoverText.addEventListener("mouseenter", () => {
            disableMouseFollower();
            gsap.to("#cursor", {
                scale: 0
            });
            gsap.to(hoverLine, {
                scaleX: 1,
                transformOrigin: "left",
                ease: "power4.inOut",
                delay: 0.3
            });
        });

        hoverText.addEventListener("mouseleave", () => {
            gsap.to(hoverLine, {
                scaleX: 0,
                transformOrigin: "right",
                ease: "power4.inOut"
            });
            enableMouseFollower();
        });
    });
}
mouseFollowerAndHoverAnimations();



function page2HoverAnimation() {
    const cards = document.querySelectorAll("#page2 .card")

    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            const cardImg = card.querySelector("img")
            const cardVideo = card.querySelector("video")

            gsap.to(cardImg, {
                opacity: 0
            })
            gsap.to(cardVideo, {
                opacity: 1
            })
        })

        card.addEventListener("mouseleave", () => {
            const cardImg = card.querySelector("img")
            const cardVideo = card.querySelector("video")

            gsap.to(cardImg, {
                opacity: 1
            })
            gsap.to(cardVideo, {
                opacity: 0
            })
        })
    })
}
page2HoverAnimation();



function page3ScrollAnimation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            start: "50% 50%",
            end: "100% 50%",
            pin: true,
            scrub: 1,
            // markers: true
        }
    })

    tl
    .to("#page3 #mainbox #video", {
        width: "100vw",
        height: "100vh"
    },"a")
    .to("#page3 #mainbox #head-1", {
        left: "34%"
    },"a")
    .to("#page3 #mainbox #head-2", {
        left: "61%"
    },"a")
}
page3ScrollAnimation();