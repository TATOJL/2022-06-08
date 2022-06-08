let run = document.querySelector('#run-btn');
let ball = document.querySelector('#run-ball');

if (run && ball) {
    run.addEventListener('click', () => {
        let classes = ball.className.split(' ');
        let go = classes.indexOf('go') >= 0;

        if (go) {
            ball.classList.add('back');
            ball.classList.remove('go');
        } else {
            ball.classList.add('go');
            ball.classList.remove('back');
        }
    })
}