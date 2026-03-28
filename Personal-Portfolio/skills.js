let left = document.querySelector('.left');
let right = document.querySelector('.right');
let skills_list = document.querySelector('.skills');


right.addEventListener('click', () => {
    skills_list.scrollBy({
        left: 1350,
        right: 0,
        behavior: 'smooth'
    });
    console.log("right");
})

left.addEventListener('click', () => {
    skills_list.scrollBy({
        left: -1350,
        right: 0,
        behavior: 'smooth'
    });
    console.log("left");
})