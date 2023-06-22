const spanText = Array.from(document.getElementsByClassName('text'));
const sectionBg01 = document.getElementById('section01');
const ani01 = gsap.timeline();

gsap.set(spanText, {
    y: '-500px',
    opacity: 0,
    color: '#fff',
});

ani01.to(spanText, {
    duration: 0.5,
    y: 0,
    rotation: 1080,
    opacity: 1,
    stagger: {
        each: 0.2,
        from: 'random',
        grid: 'auto',
        totalDuration: 1300,
    },
});

gsap.to(sectionBg01, {
    delay: 0.9,
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
        translateX: 600,
    })
    .to('.img_wrap .i2 img', {
        scale: 6,
    });
ani01.to('#section01', {
    duration: 0.5,
    display: 'none',
    opacity: 0,
    ease: 'sine.out',
});
gsap.to('#section01', {
    y: '#section02',
});

// ScrollTrigger 플러그인 초기화
gsap.registerPlugin(ScrollTrigger);

const ani02_1 = gsap.timeline();
ani02_1.from('#section2 > .left', { opacity: 1 }, 'a');

ScrollTrigger.create({
    animation: ani02_1,
    trigger: '#section2',
    start: 'top top',
    end: '+=3000',
    scrub: true,
    pin: '#section2 > .left',
    anticipatePin: 1,
    pinSpacing: false, // 추가된 부분: pin 요소와 다른 컨텐츠 사이의 간격을 없앰
    markers: true,
});

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
