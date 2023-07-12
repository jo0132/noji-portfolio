let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

const sectionBg01 = document.getElementById('section01');
const sectionBg03 = document.getElementById('section03');
const sectionBg05 = document.getElementById('section05');

document
    .querySelectorAll('.go_btn')
    .forEach(
        button =>
            (button.innerHTML =
                '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>'),
    );

document
    .querySelectorAll('.go_btn02')
    .forEach(
        button =>
            (button.innerHTML =
                '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>'),
    );
// go_btn's

gsap.set(sectionBg01, { position: 'fixed' });
setTimeout(() => {
    const ani = gsap.timeline();
    ani.from('#section1 .text-wrap span', {
        autoAlpha: 0,
        y: -100,
        rotation: 360,
        ease: 'back.out(4)',
        duration: 3,
        stagger: {
            amount: 3,
            from: 'random',
        },
    });

    ani.from('.title-wrap .t1', { autoAlpha: 0, x: -100, duration: 0.5 });
    ani.from('.title-wrap .t2', { autoAlpha: 0, x: 100, duration: 0.5 });
    ani.from('.title-wrap .t3', { autoAlpha: 0, x: -100, duration: 0.5 });
}, 2000);

const ani1 = gsap.timeline();
ani1.to('#section1 .t1', { duration: 3, xPercent: 250, ease: 'expo.out' }, 'text')
    .to('#section1 .t2', { duration: 3, xPercent: -250, ease: 'expo.out' }, 'text')
    .to('#section1 .t3', { duration: 3, xPercent: 250, ease: 'expo.out' }, 'text')
    .to('#section1 .text-wrap span', { yPercent: 800, stagger: { amount: 3, from: 'random' } }, '-=1')
    .to('#section1 .bg-wrap .bg', { autoAlpha: 0, duration: 2 }, '-=2');

ScrollTrigger.create({
    animation: ani1,
    trigger: '#section1',
    start: 'top top',
    end: '+=8000',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: true,
});

gsap.set('.text-wrap .t1', { duration: 1, y: 100, autoAlpha: 0, ease: 'power2.out' });
gsap.set('.text-wrap .t2', { duration: 1, y: 100, autoAlpha: 0, ease: 'power2.out' });
gsap.set('.text-wrap .t3', { duration: 1, y: 100, autoAlpha: 0, ease: 'power2.out' });
gsap.set('.text-wrap .t4', { duration: 1, y: 100, autoAlpha: 0, ease: 'power2.out' });
gsap.set('.text-wrap .t5', { duration: 1, y: 100, autoAlpha: 0, ease: 'power2.out' });

const ani2 = gsap.timeline();
ani2.to('.img-wrap .i1', { duration: 2, top: '-100%', delay: 2 })
    .to('.text-wrap .t1', { duration: 1, y: 0, autoAlpha: 1, ease: 'power2.out' }, '-=1')
    .to('.text-wrap .t1', { duration: 1, y: -100, autoAlpha: 0, ease: 'power2.out', delay: 1 })

    .to('.img-wrap .i2', { duration: 2, top: '-100%' })
    .to('.text-wrap .t2', { duration: 1, y: 0, autoAlpha: 1, ease: 'power2.out' }, '-=1')
    .to('.text-wrap .t2', { duration: 1, y: -100, autoAlpha: 0, ease: 'power2.out', delay: 1 })

    .to('.img-wrap .i3', { duration: 2, top: '-100%' })
    .to('.text-wrap .t3', { duration: 1, y: 0, autoAlpha: 1, ease: 'power2.out' }, '-=1')
    .to('.text-wrap .t3', { duration: 1, y: -100, autoAlpha: 0, ease: 'power2.out', delay: 1 })

    .to('.img-wrap .i4', { duration: 2, top: '-100%' })
    .to('.text-wrap .t4', { duration: 1, y: 0, autoAlpha: 1, ease: 'power2.out' }, '-=1')
    .to('.text-wrap .t4', { duration: 1, y: -100, autoAlpha: 0, ease: 'power2.out', delay: 1 })

    .to('.img-wrap .i5', { duration: 2, top: '-100%' })
    .to('.text-wrap .t5', { duration: 1, y: 0, autoAlpha: 1, ease: 'power2.out' }, '-=1')
    .to('.text-wrap .t5', { duration: 1, y: -100, autoAlpha: 0, ease: 'power2.out', delay: 1 })

    .to('#section2 .name', { duration: 2, rotation: 360, scale: 1.5, left: '50%', top: '50%', x: '-50%', y: '-50%' })
    .to('#section2 .name', { duration: 4, scale: 50 })
    .to('#section2', { duration: 1, backgroundColor: '#000' }, '-=2');

ScrollTrigger.create({
    animation: ani2,
    trigger: '#section2',
    start: 'top top',
    end: '+=8000',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: true,
});

//section02

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    function animate(item) {
        let delay = item.dataset.delay;
        let x = 0;
        let y = 0;
        if (item.classList.contains('s1')) {
            x = 200;
            y = 0;
        } else if (item.classList.contains('s2')) {
            x = 0;
            y = -200;
        } else if (item.classList.contains('s3')) {
            x = 200;
            y = 0;
        } else if (item.classList.contains('s4')) {
            x = 0;
            y = -200;
        } else if (item.classList.contains('s5')) {
            x = 200;
            y = 0;
        } else if (item.classList.contains('s6')) {
            x = 0;
            y = -200;
        } else if (item.classList.contains('s7')) {
            x = 200;
            y = 0;
        }

        gsap.fromTo(
            item,
            { autoAlpha: 0, x: x, y: y },
            {
                autoAlpha: 1,
                x: 0,
                y: 0,
                delay: delay,
                duration: 1.25,
                overwrite: 'auto',
                ease: 'expo',
            },
        );
    }

    gsap.utils.toArray('.site').forEach(item => {
        ScrollTrigger.create({
            trigger: item,
            start: 'top 80%',
            markers: false,
            onEnter: () => {
                animate(item);
            },
        });
        item.style.opacity = '0';
        gsap.to(item, {
            xPercent: -10,
            ease: 'none',
            duration: 0.5,
            scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: 'bottom top',
                markers: true,
                scrub: 0.5,
            },
        });
    });
});

let text = document.querySelector('.end_title > h2');
let splitText = text.innerText;
let splitWrap = splitText.split('').join('</span><span>');
text.innerHTML = splitWrap = '<span>' + splitWrap + '</span>';

gsap.from('.end_title span', {
    yPercent: 200,
    autoAlpha: 0,
    duration: 2,
    ease: 'circ.out',
    stagger: 0.1,

    scrollTrigger: {
        trigger: '.end_title',
        start: 'top center',
        end: '+=1300',
        pin: true,
        markers: true,
        scrub: 1,
    },
});

// section03

const sectionBg04 = document.getElementById('section04');
const sectionItem = gsap.utils.toArray('#section04 > div');

let scrollTween = gsap.to(sectionItem, {
    xPercent: -100 * (sectionItem.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: sectionBg04,
        start: 'top top',
        end: () => '+=' + (sectionBg04.offsetWidth - innerWidth),
        pin: true,
        anticipatepin: 1,
        scrub: 1,
        // snap: 1 / (section.length -1),
        snap: {
            snapTo: 1 / (sectionItem.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 },
        },
        invalidateOnRefresh: true,
        markers: false,
    },
});
gsap.timeline({
    scrollTrigger: {
        trigger: '.section04-00',
        start: 'left center',
        end: '+=3000',
        toggleActions: 'play none none reverse',

        markers: false,
        onEnter: () => {
            // .section04-00 트리거에 도착했을 때 실행할 애니메이션 코드
            gsap.set('.section04-00 > .section04_main > img', { width: 0 });
            gsap.from('.section04-00 > .section04_main > h1', { duration: 1, opacity: 0, x: 400 });
            gsap.to('.section04-00 > .section04_main > img', { duration: 1, width: '60vw' });
            gsap.from('.section04-00 > .section04_main > p', { duration: 1, opacity: 0, x: 400 });
        },
    },
});

gsap.timeline({
    scrollTrigger: {
        trigger: '.section04-01',
        containerAnimation: scrollTween,
        start: 'left center',
        end: '+=3000',
        toggleActions: 'play none none reverse',
        markers: false,

        onEnter: () => {
            // .section04-01 트리거에 도착했을 때 실행할 애니메이션 코드
            gsap.to('.section04-01 > h1', { duration: 0, opacity: 0, x: 200 });
            gsap.to('.section04-01 > .row_desc', { duration: 0, opacity: 0, x: -400 });

            gsap.to('.section04-01 > h1', { duration: 1, opacity: 1, x: 0 });
            gsap.to('.section04-01 > .row_desc', { duration: 1, opacity: 1, x: 0 });
        },
    },
});
gsap.timeline({
    scrollTrigger: {
        trigger: '.section04-02',
        containerAnimation: scrollTween,
        start: 'left center',
        end: '+=3000',
        toggleActions: 'play none none reverse',
        markers: false,

        onEnter: () => {
            // .section04-02 트리거에 도착했을 때 실행할 애니메이션 코드
            gsap.to('.section04-02 > h1', { duration: 0, opacity: 0, x: 200 });
            gsap.to('.section04-02 > .row_desc', { duration: 0, opacity: 0, x: -400 });

            gsap.to('.section04-02 > h1', { duration: 1, opacity: 1, x: 0 });
            gsap.to('.section04-02 > .row_desc', { duration: 1, opacity: 1, x: 0 });
        },
    },
});
gsap.timeline({
    scrollTrigger: {
        trigger: '.section04-03',
        containerAnimation: scrollTween,
        start: 'left center',
        end: '+=3000',
        toggleActions: 'play none none reverse',
        markers: false,

        onEnter: () => {
            // .section04-03 트리거에 도착했을 때 실행할 애니메이션 코드
            gsap.to('.section04-03 > h1', { duration: 0, opacity: 0, x: 200 });
            gsap.to('.section04-03 > .row_desc', { duration: 0, opacity: 0, x: -400 });

            gsap.to('.section04-03 > h1', { duration: 1, opacity: 1, x: 0 });
            gsap.to('.section04-03 > .row_desc', { duration: 1, opacity: 1, x: 0 });
        },
    },
});
gsap.timeline({
    scrollTrigger: {
        trigger: '.section04-04',
        containerAnimation: scrollTween,
        start: 'left center',
        end: '+=3000',
        toggleActions: 'play none none reverse',
        markers: false,

        onEnter: () => {
            // .section04-04 트리거에 도착했을 때 실행할 애니메이션 코드
            gsap.to('.section04-04 > h1', { duration: 0, opacity: 0, x: 200 });
            gsap.to('.section04-04 > .row_desc', { duration: 0, opacity: 0, x: -400 });

            gsap.to('.section04-04 > h1', { duration: 1, opacity: 1, x: 0 });
            gsap.to('.section04-04 > .row_desc', { duration: 1, opacity: 1, x: 0 });
        },
    },
});
gsap.timeline({
    scrollTrigger: {
        trigger: '.section04-05',
        containerAnimation: scrollTween,
        start: 'left center',
        end: '+=3000',
        toggleActions: 'play none none reverse',
        markers: false,

        onEnter: () => {
            // .section04-05 트리거에 도착했을 때 실행할 애니메이션 코드
            gsap.to('.section04-05 > h1', { duration: 0, opacity: 0, x: 200 });
            gsap.to('.section04-05 > .row_desc', { duration: 0, opacity: 0, x: -400 });

            gsap.to('.section04-05 > h1', { duration: 1, opacity: 1, x: 0 });
            gsap.to('.section04-05 > .row_desc', { duration: 1, opacity: 1, x: 0 });
        },
    },
});

// section04

new TypeIt('.section05_inner > .section05_title01', {
    waitUntilVisible: true,
    afterComplete: () => {
        // 첫 번째 애니메이션이 완료된 후에 실행될 콜백 함수를 추가합니다.
        new TypeIt('.section05_inner > .section05_title02', {}).type('please').break().type('contact me!').go();
    },
})
    .type('If you like my')
    .break()
    .type('portfolio')
    .go();

const ani05 = gsap.timeline();
ani05
    .set('.section05_img', { duration: 1, x: -300, opacity: 0 })
    .to('.section05_img', { delay: 6, duration: 1, x: 0, opacity: 1 });

ScrollTrigger.create({
    animation: ani05,
    trigger: sectionBg05,
    start: 'top top',
    end: '+=2000',
    // scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: false,
});

// section05

function scroll() {
    const parallaxCont = document.querySelector('body');
    let scrollTop = window.pageYOffset;

    let parallaxWidth = parallaxCont.offsetWidth;
    document.body.style.height = parallaxWidth + 'px';

    let viewWidth = parallaxWidth - window.innerWidth;
    let viewHeight = parallaxWidth - window.innerHeight;
    let goLeft = scrollTop * (viewWidth / viewHeight);

    gsap.to(parallaxCont, { left: -goLeft, ease: 'power2.out' });

    document.querySelectorAll('.parallax__item').forEach(item => {
        const target1 = item.querySelectorAll('.section05_img_item');

        let offset1 = (scrollTop - item.offsetTop) * 0.2;

        gsap.to(target1, { duration: 0.3, y: offset1, ease: 'expo.out' });
    });

    // document.querySelector('.scroll span').innerHTML = Math.round(scrollTop);
    requestAnimationFrame(scroll);
}
scroll();

//   스무스 효과
const lenis = new lenis();
lenis.on('scroll', e => {
    console.log(e);
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
