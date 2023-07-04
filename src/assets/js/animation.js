let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

const sectionBg01 = document.getElementById('section01');
// const sectionBg02 = document.getElementById('section02');    // 변경됨
const sectionBg03 = document.getElementById('section03');
const sectionBg04 = document.getElementById('section04');
// const sectionBg05 = document.getElementById('section05');
// const sectionBg06 = document.getElementById('section06');
const sectionBg07 = document.getElementById('section07');

setTimeout(() => {
    const ani = gsap.timeline();
    ani.from(
        '#section1 .text-wrap span',
        {
            autoAlpha: 0,
            y: -250,
            rotation: 360,
            ease: 'back.out(4)',
            duration: 4,
            stagger: {
                amount: 3,
                from: 'random',
            },
        },
        '<',
    ).to('#section1 .bg-wrap .bg', { backgroundColor: '#000' }, '-=4', '<');

    ani.from('.title-wrap .t1', { autoAlpha: 0, x: -100, duration: 0.5 });
    ani.from('.title-wrap .t2', { autoAlpha: 0, x: 100, duration: 0.5 });
    ani.from('.title-wrap .t3', { autoAlpha: 0, x: -100, duration: 0.5 });
}, 2000);

const ani1 = gsap.timeline();
ani1.to('#section1 .bg-wrap .bg', { opacity: 0 }, '-=2')
    .to('#section1 .t1', { duration: 3, xPercent: 250, ease: 'expo.out' }, 'text')
    .to('#section1 .t2', { duration: 3, xPercent: -250, ease: 'expo.out' }, 'text')
    .to('#section1 .t3', { duration: 3, xPercent: 250, ease: 'expo.out' }, 'text')
    .to(
        '#section1 .text-wrap span',
        {
            rotate: 2160,
            yPercent: 1500,
            ease: Bounce.easeOut,
            duration: 3,
            stagger: {
                amount: 3,
                from: 'random',
            },
        },
        '-=1',
    );

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

//section01
const ani02 = gsap.timeline();
ani02.to('.section02', { opacity: 1, y: 0 }, '+=.7');
ani02.from('.section02 .right', { opacity: 1, y: 0 }).to('.section02 .right', { opacity: 0, y: -200 });
ani02.from('.section02 .left', { delay: 0.3, opacity: 1 }, '<').to('.section02 .left', { opacity: 0 }, '<');
ani02.to('.section02', { opacity: 0 });

ScrollTrigger.create({
    animation: ani02,
    trigger: '.section02',
    start: 'top top',
    end: '+=11000',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: false,
});

//section01

const ani03 = gsap.timeline();

ani03
    .from('.section03_main_desc', { opacity: 1, y: 0 })
    .from('.section03_main_item', { opacity: 1 }, '<')
    .to('.section03_main_item', { duration: 3, opacity: 0 }, '<')
    .to('.section03_main_desc', { duration: 3, opacity: 0, y: -500 }, '<')
    .to(sectionBg03, { opacity: 0 });

ScrollTrigger.create({
    animation: ani03,
    trigger: sectionBg03,
    start: 'top top',
    end: '+=10000',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: false,
});
// section03

const ani04 = gsap.timeline();

const titleSpan = document.querySelectorAll('.title_span');

ani04
    .from(sectionBg04, { opacity: 0 })
    .to('.s4_t1', { duration: 0.6, y: '-33.5vw' })
    .from(titleSpan, { opacity: 0 }, '<')
    .to('.s4_t2', { duration: 0.6, y: '-33.5vw' })
    .to('.s4_t3', { duration: 0.6, y: '-33.5vw' })
    .to(titleSpan, { opacity: 1, marginRight: 0 }, '<')
    .to('.section04_main_title', { scale: 10 })
    .to(sectionBg04, { backgroundColor: '#000' }, '<')
    .to('#section04 > div', { display: 'none', opacity: 0 }, '<');

ScrollTrigger.create({
    animation: ani04,
    trigger: sectionBg04,
    start: 'top top',
    end: '+=200%', // 고정된 상태를 유지할 스크롤 범위를 설정합니다.
    pin: true, // 요소를 고정시킵니다.
    markers: false,
    onEnter: () => {
        // 스크롤이 해당 섹션으로 다시 들어왔을 때 애니메이션 재실행
        ani04.restart();
    },
});

//section04

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    function animate(item) {
        let delay = item.dataset.delay;
        let x = 0;
        let y = 0;
        if (item.classList.contains('section05-1')) {
            x = 0;
            y = 100;
        } else if (item.classList.contains('section05-2')) {
            x = 0;
            y = 100;
        } else if (item.classList.contains('section05-3')) {
            x = 0;
            y = 100;
        } else if (item.classList.contains('section05-4')) {
            x = 0;
            y = 100;
        } else if (item.classList.contains('section05-5')) {
            x = 0;
            y = 100;
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

    gsap.utils.toArray('.BTT').forEach(item => {
        ScrollTrigger.create({
            trigger: item,
            start: 'top 80%',
            markers: false,
            onEnter: () => {
                animate(item);
            },
        });
        item.style.opacity = '0';
    });
});

// section05

const sectionBg06 = document.getElementById('section06');
const sectionItem = gsap.utils.toArray('#section06 > div');

let scrollTween = gsap.to(sectionItem, {
    xPercent: -100 * (sectionItem.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: sectionBg06,
        start: 'top top',
        end: () => '+=' + (sectionBg06.offsetWidth - innerWidth),
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
        markers: true,
    },
});
gsap.timeline({
    scrollTrigger: {
        trigger: '.section06-00',
        start: 'left center',
        end: 'right center',
        toggleActions: 'play none none reverse',

        markers: true,
        onEnter: () => {
            // .section06-00 트리거에 도착했을 때 실행할 애니메이션 코드
            gsap.set('.section06-00 > .section06_main > img', { width: 0 });
            gsap.from('.section06-00 > .section06_main > h1', { duration: 1, opacity: 0, x: 400 });
            gsap.to('.section06-00 > .section06_main > img', { duration: 1, width: '60vw' });
            gsap.from('.section06-00 > .section06_main > p', { duration: 1, opacity: 0, x: 400 });
        },
    },
});

gsap.timeline({
    scrollTrigger: {
        trigger: '.section06-01',
        containerAnimation: scrollTween,
        start: 'left center',
        end: 'right center',
        toggleActions: 'play none none reverse',
        markers: true,

        onEnter: () => {
            // .section06-01 트리거에 도착했을 때 실행할 애니메이션 코드
            gsap.from('.section06-01 > h1', { duration: 1, opacity: 0, x: 200 });
            gsap.from('.section06-01 > .row_desc', { duration: 1, opacity: 0, x: -400 });
        },
    },
});
gsap.timeline({
    scrollTrigger: {
        trigger: '.section06-02',
        containerAnimation: scrollTween,
        start: 'left center',
        end: 'right center',
        toggleActions: 'play none none reverse',
        markers: false,

        onEnter: () => {
            // .section06-02 트리거에 도착했을 때 실행할 애니메이션 코드
            gsap.from('.section06-02 > h1', { duration: 1, opacity: 0, x: 200 });
            gsap.from('.section06-02 > .row_desc', { duration: 1, opacity: 0, x: -400 });
        },
    },
});
gsap.timeline({
    scrollTrigger: {
        trigger: '.section06-03',
        containerAnimation: scrollTween,
        start: 'left center',
        end: 'right center',
        toggleActions: 'play none none reverse',
        markers: false,

        onEnter: () => {
            // .section06-03 트리거에 도착했을 때 실행할 애니메이션 코드
            gsap.from('.section06-03 > h1', { duration: 1, opacity: 0, x: 200 });
            gsap.from('.section06-03 > .row_desc', { duration: 1, opacity: 0, x: -400 });
        },
    },
});
gsap.timeline({
    scrollTrigger: {
        trigger: '.section06-04',
        containerAnimation: scrollTween,
        start: 'left center',
        end: 'right center',
        toggleActions: 'play none none reverse',
        markers: false,

        onEnter: () => {
            // .section06-04 트리거에 도착했을 때 실행할 애니메이션 코드
            gsap.from('.section06-04 > h1', { duration: 1, opacity: 0, x: 200 });
            gsap.from('.section06-04 > .row_desc', { duration: 1, opacity: 0, x: -400 });
        },
    },
});
gsap.timeline({
    scrollTrigger: {
        trigger: '.section06-05',
        containerAnimation: scrollTween,
        start: 'left center',
        end: 'right center',
        toggleActions: 'play none none reverse',
        markers: false,

        onEnter: () => {
            // .section06-05 트리거에 도착했을 때 실행할 애니메이션 코드
            gsap.from('.section06-05 > h1', { duration: 1, opacity: 0, x: 200 });
            gsap.from('.section06-05 > .row_desc', { duration: 1, opacity: 0, x: -400 });
        },
    },
});

// section06

const ani07 = gsap.timeline();

ani07

    .set('.section07_inner > h2', { duration: 1, opacity: 0 })
    .to('.section07_inner > h2', { duration: 1, opacity: 1 });

ScrollTrigger.create({
    animation: ani07,
    trigger: sectionBg07,
    start: 'top top',
    end: '+=5000',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: false,
});
// section07

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

    document.querySelector('.scroll span').innerHTML = Math.round(scrollTop);
    requestAnimationFrame(scroll);
}
scroll();

//   스무스 효과
const lenis = new Lenis();
lenis.on('scroll', e => {
    console.log(e);
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
