import anime from 'animejs/anime';
import gsap from 'gsap';

var textWrapper = document.querySelector(".title");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

anime.timeline().add({
    targets: ".title .letter",
    translateY: [-200, 0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 6500 + 30 * i,
});

gsap.staggerFrom(".container > .block", 2, {
    y: "110%",
    ease: Expo.easeInOut,
    delay: 1
}, 0.4);
