let scrollTop = window.pageYOffset;

const spanText = Array.from(document.getElementsByClassName('text'));
const sectionBg01 = document.getElementById('section01');
const sectionBg02 = document.getElementById('section02');
const sectionBg03 = document.getElementById('section03');
const sectionBg04 = document.getElementById('section04');
// const sectionBg05 = document.getElementById('section05');
const sectionBg06 = document.getElementById('section06');
const sectionBg07 = document.getElementById('section07');
const ani01 = gsap.timeline();

ani01.to(sectionBg01, {
    position: 'fixed',
    zIndex: 99999,
});

gsap.set(sectionBg02, {
    opacity: 0,
});

gsap.set(spanText, {
    y: '-500px',
    opacity: 0,
    color: '#fff',
});

ani01.to(spanText, {
    duration: 1,
    y: 0,
    rotation: 1080,
    opacity: 1,
    stagger: {
        amount: 3,
        from: 'random',
    },
});

gsap.to(sectionBg01, {
    delay: 0.3,
    duration: 0.5,
    backgroundColor: '#000',
});

// intro span
ani01.to('.img_wrap .i1', {
    display: 'block',
    rotation: 345,
});
ani01.to('.img_wrap .i2', {
    display: 'block',
    rotation: 360,
});
ani01.to('.img_wrap .i3', {
    display: 'block',
    rotation: 366.16,
});

// intro img
ani01.to('.img_wrap .i1 img', {
    display: 'block',
    rotation: 360,
});
ani01.to('.img_wrap .i2 img', {
    display: 'block',
    rotation: 360,
});
ani01.to('.img_wrap .i3 img', {
    display: 'block',
    rotation: 360,
});

// 인트로 마무리
ani01
    .to('.img_wrap .i2 img', {
        // scale: 10,
        delay: 1,
        translateX: '29vw',
    })
    .to('.img_wrap .i2 img', {
        duration: 0.5,
        scale: 6,
    });

ani01.to(sectionBg02, {
    opacity: 1,
});
ani01.to('#section01', {
    delay: -0.5,
    duration: 0.1,
    display: 'none',
    opacity: 0,
    ease: 'sine.out',
});

gsap.to('#section01', {
    y: '#section02',
});

// 페이지 로드 시 실행되는 함수

// ScrollTrigger 플러그인 초기화
gsap.registerPlugin(ScrollTrigger);

const ani02 = gsap.timeline();
ani02
    .from('#section02 .right', { opacity: 1, y: 0 })
    .to('#section02 .right', { opacity: 1, y: -350 })
    .from('#section02 .left', { opacity: 1 })
    .to('#section02 .right', { opacity: 0, y: -700 })
    .to('#section02 .left', { opacity: 0 });

ScrollTrigger.create({
    animation: ani02,
    trigger: sectionBg02,
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: true,
});

const ani03 = gsap.timeline();

ani03

    .from('.section03_main_desc', { opacity: 1, y: 0 })
    .from('.section03_main_item', { opacity: 1 })
    .to('.section03_main_desc', { opacity: 1, y: -250 })
    .to('.section03_main_item', { opacity: 0 })
    .to('.section03_main_desc', { opacity: 0, y: -500 })
    .to(sectionBg03, { opacity: 0 });

ScrollTrigger.create({
    animation: ani03,
    trigger: sectionBg03,
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: true,
});

// const sest = document.getElementById('section01');
const ani04 = gsap.timeline({});

const titleSpan = document.querySelectorAll('.title_span');

ani04
    .to('.s4_t1', { y: '-33.5vw' })
    .to('.s4_t2', { y: '-33.5vw' })
    .to('.s4_t3', { y: '-33.5vw' })
    .from(titleSpan, { opacity: 0 })
    .to(titleSpan, { opacity: 1, marginRight: 0 });

ScrollTrigger.create({
    animation: ani04,
    trigger: sectionBg04,
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    toggleClass: 'active',
    markers: true,
});

// const sectionBg05 = document.getElementById('section05');
// const section = gsap.utils.toArray('#section05 > div');

// gsap.to(section, {
//     xPercent: -100 * (section.length - 1),
//     ease: 'none',
//     scrollTrigger: {
//         trigger: horizon,
//         start: 'top top',
//         end: () => '+=' + (horizon.offsetWidth - innerWidth),
//         pin: true,
//         anticipatepin: 1,
//         scrub: 1,
//         // snap: 1 / (section.length -1),
//         snap: {
//             snapTo: 1 / (section.length - 1),
//             inertia: false,
//             duration: { min: 0.1, max: 0.1 },
//         },
//         invalidateOnRefresh: true,
//     },
// });

function scroll() {
    const parallaxCont = document.querySelector('body');
    let scrollTop = window.pageYOffset;

    let parallaxWidth = parallaxCont.offsetWidth;
    document.body.style.height = parallaxWidth + 'px';

    let viewWidth = parallaxWidth - window.innerWidth;
    let viewHeight = parallaxWidth - window.innerHeight;
    let goLeft = scrollTop * (viewWidth / viewHeight);

    gsap.to(parallaxCont, { left: -goLeft, ease: 'power2.out' });

    document.querySelector('.scroll span').innerHTML = Math.round(scrollTop);
    requestAnimationFrame(scroll);
}
scroll();

// //   스무스 효과
// const lenis = new Lenis();
// lenis.on('scroll', e => {
//     console.log(e);
// });
// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);
