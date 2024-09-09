//nav bar script

let navbtn = document.querySelector(".nav-btn i");

navbtn.addEventListener("click", function() {
    let slide = document.querySelector(".nav-text");
    slide.style.left = "0";
});

let navbtncoloe = document.querySelector(".nav-btn-coles i");

navbtncoloe.addEventListener("click", function() {
    let slide = document.querySelector(".nav-text");
    slide.style.left = "-100%";
});

// gsap animsen cod 
function slideLeft() {
    window.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0) {
            gsap.to(".left-side-dmove .marque", {
                // repeat: -1,
                duration: 10,
                ease: "none",
                transform: "translateX(-30%)",
            });
            gsap.to(".marque img", {
                rotate: 180
            })
            // console.log("up");
        } else {
            gsap.to(".left-side-dmove .marque", {
                // repeat: -1,
                duration: 10,
                ease: "none",
                transform: "translateX(30%)",
            });
            gsap.to(".marque img", {
                rotate: 0
            })

            // console.log("down");
        }
    });
}
slideLeft()
function buttonAnimate() {
    let buttons = document.querySelectorAll(".buy-btn ,.play-btn");

    buttons.forEach(button => {
        let hoverColor = button.querySelector(".mouse-coloser");

        button.addEventListener("mouseover", () => {
            // console.log("hi")
            gsap.to(hoverColor, {
                scale: 2,
                duration: 0.5,
                ease: "power1.out"
            });
        });

        button.addEventListener("mousemove", function (eve) {
            // Get the bounding rectangle of the button
            const rect = button.getBoundingClientRect();


            const x = eve.clientX - rect.left;
            const y = eve.clientY - rect.top;

            gsap.to(hoverColor, {
                x: x,
                y: y,
                scale: 2,
                duration: 0.2,
                ease: "power1.out"
            });
        });

        button.addEventListener("mouseout", () => {
            gsap.to(hoverColor, {
                scale: 0,
                duration: 0.5,
                ease: "power1.out"
            });
        });
    });
}


// new your    next big game


// gsap.from(".hedr-text h1 span:first-of-type",{
//     y:-100,
//     duration:1,
//     delay:1
// })


function breakTheText() {
    let h1Elements = document.querySelectorAll(".hedr-text h1 span");

    h1Elements.forEach(function (h1) {
        let h1text = h1.textContent;
        let splittedText = h1text.split("");
        let halfValue = Math.ceil(splittedText.length / 2);
        let clutter = "";

        splittedText.forEach(function (elem, idx) {
            if (idx < halfValue) {
                clutter += `<span class="left">${elem}</span>`;
            } else {
                clutter += `<span class="right">${elem}</span>`;
            }
        });

        h1.innerHTML = clutter;
    });
}







function textherder() {
    // gsap.from(".hedr-text h1 span.left", {
    //     y: -50,
    //     stagger: 0.3,
    //     duration: 2,
    //     opacity: 0,
    //     delay: 0.2,
    //     ease: "elastic.out(1,0.3)",
    // })

    // gsap.from(".hedr-text h1 span.right", {
    //     y: 50,
    //     stagger: -0.3,
    //     duration: 2,
    //     opacity: 0,
    //     delay: 0.2,
    //     ease: "elastic.out(1,0.3)",
    // })

    // gsap.from(".hedr-text p",{
    //     y:300,
    //     duration: 2,
    //     delay: 2,


    // })
    let buttonleft = gsap.timeline()
    // buttonleft.from(".left-anime",{
    //     x:-200,
    //     opacity:0,
    //     duration: 2.5,

    // })
    // buttonleft.from(".left-anime button",{
    //     y:-100
    // })



    buttonleft.from(".left-anime", {
        x: -200,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
    })
    buttonleft.from(".left-anime button", {
        x: 150,
        durationL: 0.8,
        opacity: 0
    })




    let buttonright = gsap.timeline()

    // buttonright.from(".right-anime",{
    //     x:200,
    //     opacity:0,
    //     duration: 2.5,

    // })
    // buttonright.from(".right-anime button",{
    //     y:100
    // })

    buttonright.from(".right-anime", {
        x: 200,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
    })

    buttonright.from(".right-anime button", {
        x: -150,
        durationL: 0.8,
        opacity: 0

    })


    // const triggerSettings=  {
    //     trigger: ".detle-webs-text ",
    //     scroller: "body",
    //     // markers: true, // Uncomment for debugging
    //     start: "top 80%",
    //     end: "top 40%",
    // }

    // gsap.from(".detle-webs-text:first-of-type  h2 ",{
    //     x:130,
    //     duration: 2.5,
    //     ease: "bounce.out",
    //     scrollTrigger: triggerSettings


    // })
    // gsap.from(".detle-webs-text:first-of-type  p ",{
    //     x:-130,
    //     duration: 2.5,
    //     ease: "bounce.out",
    //     scrollTrigger: triggerSettings

    // })

    // gsap.from(".detle-webs-text:nth-of-type(2) h2 ",{
    //     y:100,
    //     duration: 2.5,
    //     ease: "bounce.out",
    //     scrollTrigger: triggerSettings

    // })
    // gsap.from(".detle-webs-text:nth-of-type(2)  p ",{
    //     y:-100,
    //     duration: 2.5,
    //     ease: "bounce.out",
    //     scrollTrigger: triggerSettings

    // })
    // gsap.from(".detle-webs-text:nth-of-type(3)  h2 ",{
    //     x:-130,
    //     duration: 2.5,
    //     ease: "bounce.out",
    //     scrollTrigger: triggerSettings

    // })
    // gsap.from(".detle-webs-text:nth-of-type(3)  p ",{
    //     x:140,
    //     duration: 2.5,
    //     ease: "bounce.out",
    //     scrollTrigger: triggerSettings

    // })
}

textherder()
//second button animsen
function breakTheTextsecond() {
    let h1Elements = document.querySelectorAll(".tile-animsen h1 span , .welcome-animsen h1 span");

    h1Elements.forEach(function (h1) {
        let h1text = h1.textContent;
        let splittedText = h1text.split("");
        let halfValue = Math.ceil(splittedText.length / 2);
        let clutter = "";

        splittedText.forEach(function (elem, idx) {
            if (idx < halfValue) {
                clutter += `<span class="left">${elem}</span>`;
            }
            else {
                clutter += `<span class="right">${elem}</span>`;
            }
        });

        h1.innerHTML = clutter;
    });


    const triggerheder = {
        trigger: ".tile-animsen",
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top 60%",
        end: "top -40%",
    };

    let hertext = gsap.timeline({
        scrollTrigger: triggerheder
    });

    hertext
        .from(".tile-animsen h1 .left", {
            x: -50,
            rotate: 180,
            stagger: 0.2,
            duration: 2.5,
            opacity: 0,
            delay: 0.2,
            ease: "elastic.out(1,0.3)"
        })
        .to(".tile-animsen h1 .left", {
            rotate: 360,
            duration: 2.5
        });

    let herright = gsap.timeline({
        scrollTrigger: triggerheder
    });

}





function anismen() {

    herright
        .from(".tile-animsen h1 .right", {
            x: 50,
            stagger: -0.2,
            duration: 2.5,
            opacity: 0,
            delay: 0.1,
            ease: "elastic.out(1,0.3)",
            rotate: 180
        })
        .to(".tile-animsen h1 .right", {
            rotate: -360,
            duration: 2.5
        });

    gsap.from(".heder-tile-text p", {
        y: 500,
        duration: 1.8,
        ease: "circ.out",
        scrollTrigger: triggerheder
    });
    let ceollbtn = {
        trigger: ".button-view",
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top 70%",
        end: "top -40%",
    }
    let butnview = gsap.timeline({
        scrollTrigger: ceollbtn
    })
    butnview.to(".vies-btn", {
        duration: 2.5,
        rotate: 360,
        scale: 1.1,
        ease: "power3.out",
    })
    butnview.to(".vies-btn", {
        scale: 1,
        ease: "power3.out",
    })
    butnview.from(".vies-btn button", {
        y: 100,
        // delay:1
    })

    let butnply = gsap.timeline({
        scrollTrigger: ceollbtn
    })
    butnply.to(".ply-btn", {
        duration: 2.5,
        rotate: -360,
        scale: 1.1,
        ease: "power3.out",
    })
    butnply.to(".ply-btn", {
        scale: 1,
        ease: "power3.out",
    })
    butnply.from(".ply-btn button", {
        y: -100,
        delay: 1
    })

    gsap.from(".welcome-animsen h1 span .left", {
        stagger: 0.2,
        duration: 4.5,
        opacity: 0,
        delay: 0.2,
        ease: "elastic.out(1,0.3)",
        rotateX: 180,
        transformOrigin: "100% 100%",
        scrollTrigger: {
            trigger: ".welcome-animsen",
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top 60%",
            end: "top -40%",
        }

    })

    gsap.from(".welcome-animsen h1 span .right", {
        stagger: -0.2,
        duration: 4.5,
        opacity: 0,
        delay: 0.1,
        ease: "elastic.out(1,0.3)",
        rotateX: 180,
        transformOrigin: "100% 0%",
        scrollTrigger: {
            trigger: ".welcome-animsen",
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top 60%",
            end: "top -40%",
        }


    })

}


function breakTheTextthree() {
    let h1Elements = document.querySelectorAll(".Virtual-text h1 span");

    h1Elements.forEach(function (h1) {
        let h1text = h1.textContent;
        let splittedText = h1text.split("");
        let halfValue = Math.ceil(splittedText.length / 2);
        let clutter = "";

        splittedText.forEach(function (elem, idx) {
            if (idx < halfValue) {
                clutter += `<span class="left">${elem}</span>`;
            }
            else {
                clutter += `<span class="right">${elem}</span>`;
            }
        });

        h1.innerHTML = clutter;
    });




    const triggerbox = {
        trigger: ".tem-box",
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top 40%",
        end: "top -100%",
    };

    gsap.from(".Virtual-text h1 span .left", {
        x: 50,
        rotate: 180,
        stagger: 0.2,
        duration: 2.5,
        opacity: 0,
        delay: 0.2,
        ease: "elastic.out(1,0.4)",
        scrollTrigger: triggerbox
    })

    gsap.from(".Virtual-text h1 span .right", {
        x: 50,
        rotate: 180,
        stagger: 0.2,
        duration: 2.5,
        opacity: 0,
        delay: 0.2,
        ease: "elastic.out(1,0.4)",
        scrollTrigger: triggerbox

    })
    gsap.from(".Virtual-text p", {
        y: 500,
        delay: 1.5,
        duration: 3,
        ease: "power2.out",
        scrollTrigger: triggerbox

    })

    gsap.from(".gamer-img img", {
        y: 800,
        delay: 1,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: triggerbox

    })
    gsap.from(".vir-btn", {
        y: 500,
        delay: 1.8,
        duration: 2.5,
        scrollTrigger: triggerbox

    })
}




function damoanimsen() {

    const slider = {
        trigger: ".slide-card-box ",
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top 40%",
        end: "top -40%",
    }

    gsap.from(".card-slider ", {
        scale: 0,
        opacity: 0,
        duration: 2.5,
        scrollTrigger: slider
    })
    gsap.from(".slider-img-one", {
        x: 200,
        delay: 2.8,
        opacity: 0,
        scrollTrigger: slider

    })
    gsap.from(".slider-img-two", {
        x: -200,
        delay: 2.8,
        opacity: 0,
        scrollTrigger: slider

    })
    gsap.from(".slider-img-three", {
        y: -200,
        delay: 2.8,
        opacity: 0,
        scrollTrigger: slider

    })

    gsap.from(".top-round", {
        y: -200,
        delay: 3.8,
        opacity: 0,
        scrollTrigger: slider

    })

    gsap.from(".slide-feat .swipe-one .swiper-slide-active", {
        y: 800,
        delay: 4.3,
        opacity: 0,
        duration: 2,
        scrollTrigger: slider

    })

    gsap.from(".slide-feat .swipe-one .swiper-slide-next", {
        delay: 4.3,
        opacity: 0,
        duration: 2,
    })
}



let h1Elements = document.querySelectorAll(".gsamer .an-game,.gsamer .text-werap");

h1Elements.forEach(function (h1) {
    let h1text = h1.textContent;
    let splittedText = h1text.split("");
    // let halfValue = Math.ceil(splittedText.length / 2); // Divide by 2 to get the half value
    let clutter = ``;

    splittedText.forEach(function (elem,) {
        clutter += `<span class="left">${elem}</span>`;
    });

    h1.innerHTML = clutter;
});

let text = gsap.timeline({ repeat: -1, })

text.to(".text-werap .left", {
    stagger: 0.3,
    duration: 1,
    y: 80,
    delay: 1.8
})
text.to(".text-werap .left", {
    stagger: 0.3,
    duration: 1,
    y: 0,
    delay: 1.8
})
text.to(".text-werap  .left", {
    delay: 1
})

let text2 = gsap.timeline({ repeat: -1, })

text2.to(".an-game .left", {
    stagger: 0.3,
    duration: 1,
    y: 80,
    delay: 2
})
text2.to(".an-game .left", {
    stagger: 0.3,
    duration: 1,
    y: 0,
    delay: 2
})
text2.to(".an-game .left", {
    delay: 1.2
})



function hideanimse() {


    let starttextone = gsap.timeline()

    starttextone.from(".show-text h1 span:first-of-type", {
        x: -500,
        duration: 1.5,
    })
    starttextone.to(".show-text h1 span:first-of-type", {
        x: 50,
        duration: 0.3,
    })
    starttextone.to(".show-text h1 span:first-of-type", {
        x: 0,
        duration: 0.2,
    })
    starttextone.to(".show-text h1 span:first-of-type", {
        x: -500,
        duration: 0.2,
        delay: 3
    })

    let starttexttwo = gsap.timeline()

    starttexttwo.from(".show-text h1 span:nth-of-type(2)", {
        x: 500,
        delay: 1.8,
        duration: 0.3,
    })
    starttexttwo.to(".show-text h1 span:nth-of-type(2)", {
        y: -50,
        duration: 0.3,
    })
    starttexttwo.to(".show-text h1 span:nth-of-type(2)", {
        y: 80,
        duration: 0.3,
    })
    starttexttwo.to(".show-text h1 span:nth-of-type(2)", {
        x: -350,
        duration: 0.3,
    })
    starttexttwo.to(".show-text h1 span:nth-of-type(2)", {
        x: 0,
        duration: 0.4,
    })
    starttexttwo.to(".show-text h1 span:nth-of-type(2)", {
        y: 160,
        duration: 0.4,
    })
    starttexttwo.to(".show-text h1 span:nth-of-type(2)", {
        x: -80,
        duration: 0.3,
    })
    starttexttwo.to(".show-text h1 span:nth-of-type(2)", {
        x: 0,
        duration: 0.3,
    })
    starttexttwo.to(".show-text h1 span:nth-of-type(2)", {
        y: 0,
        duration: 0.4,
    })
    starttexttwo.to(".show-text h1 span:nth-of-type(2)", {
        y: -100,
        duration: 0.3,
        delay: 0.6
    })
    let starttextthree = gsap.timeline()
    starttextthree.from(".show-text h1 span:nth-of-type(3) ,.show-text h1 span:nth-of-type(4)", {
        x: -500,
        duration: 0.4,
        delay: 3,
    })
    starttextthree.to(".show-text h1 span:nth-of-type(3) ,.show-text h1 span:nth-of-type(4)", {
        x: -500,
        duration: 0.3,
        delay: 2.3,
    })

    let starttextfoure = gsap.timeline()
    starttextfoure.from(".show-text h1 span:nth-of-type(5)", {
        x: -500,
        duration: 0.4,
        delay: 4.1,
    })
    starttextfoure.to(".show-text h1 span:nth-of-type(5)", {
        y: 500,
        duration: 0.3,
        delay: 1.8,
    })


}
let startscondhed = gsap.timeline()

// startscondhed.from(".hed-one",{
//     opacity:0,
//     delay: 1
// })


startscondhed.from(".let-one", {
    x: -500,
    duration: 0.3,

})

startscondhed.from(".let-two", {
    y: -500,
    duration: 0.3,
})

startscondhed.from(".let-three", {
    x: -500,
    duration: 0.3,
})

startscondhed.from(".let-foure", {
    y: 500,
    duration: 0.3,
})
startscondhed.from(".let-five", {
    x: 500,
    duration: 0.3,
})

// gsap.from(".tile-animsen h1",{
//     y:800,
//     scale:1.5,
//     opacity:0,
//     duration: 0.8,
//     scrollTrigger:{
//         trigger: ".tile-animsen ",
//         scroller: "body",
//         // markers: true, // Uncomment for debugging
//         start: "top 80%",
//         end: "top -40%",
//     }

// })
// express action  feel
gsap.from(".tile-animsen p", {
    y: 800,
    scale: 1.5,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".tile-animsen ",
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top 60%",
        end: "top -40%",
    }

})


function fontanimse() {
    let h1Elements = document.querySelectorAll(".fellone span:first-of-type,.gamea");

    h1Elements.forEach(function (h1) {
        let h1text = h1.textContent;
        let splittedText = h1text.split("");
        let clutter = "";

        splittedText.forEach(function (elem) {
            clutter += `<span class="coose">${elem}</span>`;
        });

        h1.innerHTML = clutter;
    });


}
fontanimse()
let hertext = gsap.timeline({ repeat: -1 })

hertext.to(".fellone span:first-of-type .coose", {
    stagger: 0.3,
    rotateX: 180,
    duration: 0.5,

})
hertext.to(".gamea .coose", {
    stagger: 0.3,
    rotateX: 180,
    duration: 0.5,

})
hertext.to(".gamea .coose", {
    stagger: -0.3,
    rotateX: 0,
    duration: 0.5,
})
hertext.to(".fellone span:first-of-type .coose", {
    stagger: -0.3,
    rotateX: 0,
    duration: 0.5,

})
hertext.to(".fellone span:first-of-type .coose", {
    delay: 2

})


function scolltext() {
    let h1Elements = document.querySelectorAll(".free,.animsnvirtual,.animse-color");

    h1Elements.forEach(function (h1) {
        let h1text = h1.textContent;
        let splittedText = h1text.split("");
        let clutter = "";

        splittedText.forEach(function (elem) {
            clutter += `<span class="scoll">${elem}</span>`;
        });

        h1.innerHTML = clutter;
    });


}
scolltext()
let windo = window.innerWidth;
if (window.innerWidth > 1200) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".lol", {
        transform: "translateX(-180%)",
        scrollTrigger: {
            trigger: ".lol",
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top 0%",
            end: "top -1000%",
            scrub: 1,
            pin: true, // Content stays fixed in position while scrolling
        }
    });
} 

gsap.from(".free .scoll", {
    stagger: 0.3,
    duration: 3.5,
    ease: "elastic.out(1,0.5)",
    y: -500,
    scrollTrigger: {
        trigger: ".scollin-sol ",
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -10%",
        end: "top -1000%",
        // scrub: 1,
        // pin: true, //conten in full show in second in conten in scoller
    }
})
gsap.from(".fire ", {
    duration: 1.5,
    // ease: "elastic.out(1,0.5)",
    scale: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".scollin-sol ",
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -30%",
        end: "top -1000%",
        // scrub: 1,
        // pin: true, //conten in full show in second in conten in scoller
    }
})




let img = gsap.timeline()

img.from(".gamer-img img", {
    y: 500,
    scrollTrigger: {
        trigger: ".gamer-img ",
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top 80%",
        end: "top 0%",
        scrub: 1,

        // pin: true, //conten in full show in second in conten in scoller
    }
})

gsap.to(".animsnvirtual .scoll", {
    rotateX: 360,
    stagger: 0.1,
    repeat: -1, // in run in 1 time 2 rime in used in unlimeted time in run in -1 in used
    duration: 6.5, // time in 2s in leet 
    ease: "elastic.out(1,0.75)",

    // scrollTrigger: {
    //     trigger: ".gamer-img ",
    //     scroller: "body",
    //     markers: true, // Uncomment for debugging
    //     start: "top 50%",
    //     end: "top 0%",
    //     // scrub: 1,

    //     // pin: true, //conten in full show in second in conten in scoller
    // }
})


const cardtricer = {
    trigger: ".all-card ",
    scroller: "body",
    // markers: true, // Uncomment for debugging
    start: "top 50%",
    end: "top 30%",
    scrub: 1,

    // pin: true, //conten in full show in second in conten in scoller
}

gsap.from(".card-one", {
    x: -300,
    opacity: 0,
    y: 200,
    rotate: -90,
    ease: "expo.out",
    duration: 1.5, // time in 2s in leet 
    scrollTrigger: cardtricer

})

gsap.from(".card-two", {
    // x:300,
    opacity: 0,
    y: 200,
    ease: "expo.out",
    duration: 1.5, // time in 2s in leet 
    scrollTrigger: cardtricer
    // rotate:90
})

gsap.from(".card-three", {
    x: 300,
    opacity: 0,
    y: 200,
    rotate: 90,
    ease: "expo.out",
    duration: 1.5, // time in 2s in leet 
    scrollTrigger: cardtricer

})


let welcome = gsap.timeline({ repeat: -1 })

welcome.from(".animse-color .scoll", {
    y: -10,
    stagger: 0.1,
})
welcome.to(".animse-color .scoll", {
    y: -10,
    stagger: -0.1,
    delay: 1.5
})

welcome.to(".animse-color .scoll", {
    delay: 1
})

let barenone = gsap.timeline({repeat: -1 })

barenone.from(".bran-one img:first-of-type", {
    x: -500,
})

barenone.to(".bran-one img:first-of-type", {
    y: -500,
    delay: 2,
    duration: 1.5


})
barenone.from(".bran-one img:nth-of-type(2)", {
    x: -500,
})
barenone.to(".bran-one img:nth-of-type(2)", {
    y: -500,
    delay: 2,
    duration: 1.5

})

barenone.from(".bran-one img:nth-of-type(3)", {
    x: -500,
})
barenone.to(".bran-one img:nth-of-type(3)", {
    y: -500,
    delay: 2,
    duration: 1.5

})
barenone.from(".bran-one img:nth-of-type(4)", {
    x: -500,
})
barenone.to(".bran-one img:nth-of-type(4)", {
    y: -500,
    delay: 2,
    duration: 1.5

})
barenone.from(".bran-one img:nth-of-type(5)", {
    x: -500,
})
barenone.to(".bran-one img:nth-of-type(5)", {
    y: -500,
    delay: 2,
    duration: 1.5

})


let barentwo = gsap.timeline({repeat: -1 })


barentwo.from(".bran-two img:nth-of-type(2)", {
    y: -500,
})
barentwo.to(".bran-two img:nth-of-type(2)", {
    x: -500,
    delay: 2,
    duration: 1.5
})

barentwo.from(".bran-two img:nth-of-type(3)", {
    y: -500,
})
barentwo.to(".bran-two img:nth-of-type(3)", {
    x: -500,
    delay: 2,
    duration: 1.5

})
barentwo.from(".bran-two img:nth-of-type(4)", {
    y: -500,
})
barentwo.to(".bran-two img:nth-of-type(4)", {
    x: -500,
    delay: 2,
    duration: 1.5

})
barentwo.from(".bran-two img:nth-of-type(5)", {
    y: -500,
})
barentwo.to(".bran-two img:nth-of-type(5)", {
    x: -500,
    delay: 2,
    duration: 1.5

})

barentwo.from(".bran-two img:first-of-type", {
    y: -500,
})

barentwo.to(".bran-two img:first-of-type", {
    x: -500,
    delay: 2
})




let barenthree = gsap.timeline({repeat: -1 })


barenthree.from(".bran-three img:nth-of-type(3)", {
    x: 500,
})
barenthree.to(".bran-three img:nth-of-type(3)", {
    y: 500,
    delay: 2,
    duration: 1.5

})
barenthree.from(".bran-three img:nth-of-type(4)", {
    x: 500,
})
barenthree.to(".bran-three img:nth-of-type(4)", {
    y: 500,
    delay: 2,
    duration: 1.5

})
barenthree.from(".bran-three img:nth-of-type(5)", {
    x: 500,
})
barenthree.to(".bran-three img:nth-of-type(5)", {
    y: 500,
    delay: 2,
    duration: 1.5

})

barenthree.from(".bran-three img:first-of-type", {
    x: 500,
})

barenthree.to(".bran-three img:first-of-type", {
    y: 500,
    delay: 2,
    duration: 1.5

})

barenthree.from(".bran-three img:nth-of-type(2)", {
    x: 500,
})
barenthree.to(".bran-three img:nth-of-type(2)", {
    y: 500,
    delay: 2,
    duration: 1.5

})



let barenfour = gsap.timeline({repeat: -1 })

barenfour.from(".bran-four img:nth-of-type(4)", {
    y: 500,
})
barenfour.to(".bran-four img:nth-of-type(4)", {
    x: -500,
    delay: 2,
    duration: 1.5

})
barenfour.from(".bran-four img:nth-of-type(5)", {
    y: 500,
})
barenfour.to(".bran-four img:nth-of-type(5)", {
    x: -500,
    delay: 2,
    duration: 1.5

})

barenfour.from(".bran-four img:first-of-type", {
    y: 500,
})

barenfour.to(".bran-four img:first-of-type", {
    x: -500,
    delay: 2,
    duration: 1.5

})

barenfour.from(".bran-four img:nth-of-type(2)", {
    y: 500,
})
barenfour.to(".bran-four img:nth-of-type(2)", {
    x: -500,
    delay: 2,
    duration: 1.5

})
barenfour.from(".bran-four img:nth-of-type(3)", {
    y: 500,
})
barenfour.to(".bran-four img:nth-of-type(3)", {
    x: -500,
    delay: 2,
    duration: 1.5

})




let barenfive = gsap.timeline({repeat: -1 })

barenfive.from(".bran-five img:nth-of-type(5)", {
    x: 500,
})
barenfive.to(".bran-five img:nth-of-type(5)", {
    y: 500,
    delay: 2,
    duration: 1.5

})

barenfive.from(".bran-five img:first-of-type", {
    y: 500,
})

barenfive.to(".bran-five img:first-of-type", {
    y: 500,
    delay: 2,
    duration: 1.5

})

barenfive.from(".bran-five img:nth-of-type(2)", {
    x: 500,
})
barenfive.to(".bran-five img:nth-of-type(2)", {
    y: 500,
    delay: 2,
    duration: 1.5

})
barenfive.from(".bran-five img:nth-of-type(3)", {
    x: 500,
})
barenfive.to(".bran-five img:nth-of-type(3)", {
    y: 500,
    delay: 2,
    duration: 1.5

})
barenfive.from(".bran-five img:nth-of-type(4)", {
    x: 500,
})
barenfive.to(".bran-five img:nth-of-type(4)", {
    y: 500,
    delay: 2,
    duration: 1.5

})
// buttonAnimate()


// breakTheTextthree()
// breakTheTextsecond()
// breakTheText();
// slideLeft();
// damoanimsen()
