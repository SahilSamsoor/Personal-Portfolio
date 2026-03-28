let left = document.querySelector('.pro-left');
let right = document.querySelector('.pro-right');
let prj_list = document.querySelector('.projects-container');


right.addEventListener('click', () => {
    prj_list.scrollBy({
        left: 1570,
        right: 0,
        behavior: 'smooth'
    });
    console.log("right");
})

left.addEventListener('click', () => {
    prj_list.scrollBy({
        left: -1570,
        right: 0,
        behavior: 'smooth'
    });
    console.log("left");
})