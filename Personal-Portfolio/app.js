var typed = new Typed(".multiple-text", {
    strings : ["Front-End Developer", "Back-End Developer"],
    typeSpeedy : 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: "|",
    contentType: 'text',
});


var typed = new Typed(".main-text", {
    strings : ["I’m a passionate and driven developer with a strong foundation in web development, specializing in both front-end and back-end technologies. My core skill set includes HTML, CSS, JavaScript, React.js, and Tailwind CSS, which I use to craft responsive, user-friendly interfaces. On the backend, I work with Node.js and Express.js, enabling me to build robust APIs and full-stack applications.I’ve also expanded into cross-platform development using React Native for mobile apps and Electron for desktop applications, giving me the flexibility to develop solutions across various platforms. In addition to my practical development work, I'm deeply focused on improving my problem-solving and algorithmic thinking. I'm actively learning Data Structures and Algorithms (DSA) with C++ and consistently solving challenges on LeetCode to sharpen my logic and coding skills.I'm always eager to learn new technologies, build impactful projects, and collaborate on innovative ideas that push the boundaries of what's possible in tech."],
    typeSpeedy : 100,
    backSpeed: 10000,
    backDelay: 10000,
    loop: true,
    showCursor: false,
    cursorChar: "|",
    contentType: 'text',
});



let logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
    location.reload();
})