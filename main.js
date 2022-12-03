// select items
const rotate1 = document.querySelector('.rotate1');
const btn = document.querySelector('.random-btn');
// colors to use
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// onclick of button
btn.addEventListener('click', () => {
    let randomColor = '#';
    // loop through 6 times starting with #
for(i = 0; i < 6; i++){
randomColor += colors[getRandomColor()];
}
rotate1.style.background = randomColor;
});
// random color function
const getRandomColor = () =>{
    return Math.floor(Math.random() * colors.length);
}