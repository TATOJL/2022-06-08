let run = document.querySelector('#run-btn');
let ball = document.querySelector('#run-ball');

if (run && ball) {
    run.addEventListener('click', () => {
        if (hasGo(ball)) {
            ball.classList.add('back');
            ball.classList.remove('go');
        } else {
            ball.classList.add('go');
            ball.classList.remove('back');
        }
    })
}

function hasGo(ball) {
    let classes = ball.className.split(' ');
    return classes.indexOf('go') >= 0;
}