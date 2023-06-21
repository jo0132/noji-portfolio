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
        translateX: 700,
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

function goToSession1() {
    // 세션1의 ID를 사용하여 스크롤 이동
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: '#section01',
        },
    });
}

gsap.to(window, { scrollTo: '#section01' });

// 페이지 로드 시 실행되는 함수
window.addEventListener('load', function () {
    goToSession1();
});

// ScrollTrigger 플러그인 초기화
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: '#session01',
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: self => {
        self.scrollTrigger.disable(); // 스크롤 잠금
    },
});

// section02 스크롤 트리거 정의
ScrollTrigger.create({
    trigger: '#section02',
    start: 'top 50%', // 트리거 지점 설정
    end: 'bottom top', // 애니메이션이 실행될 범위 설정
    markers: true,
    onEnter: () => {
        // section02 진입 시 실행되는 코드
        console.log('Enter section02');
    },
    onLeaveBack: () => {
        // section02에서 뒤로 벗어날 때 실행되는 코드
        console.log('Leave section02');
        // section01로 스크롤 전환 애니메이션 실행
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: '#section01',
            },

            onComplete: () => {
                console.log('Scroll to section01 complete');
                // section01 진입 후 실행할 코드
            },
        });
    },
});
const ani02_1 = gsap.timeline();
ani02_1.to('#Section02 .right', { y: -400, opacity: 0 }).to('#Section02 .right', {
    y: 0,
    opacity: 1,
});

ScrollTrigger.create({
    animation: ani02_1,
    trigger: '#section2',
    start: 'top',
    end: '+=1000',
    scrub: true,
    pin: true,
    anticipatepin: 1,
    markers: false,
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
