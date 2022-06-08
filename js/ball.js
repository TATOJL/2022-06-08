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

// dataset
ball.dataset.id = 9999;

console.log(ball.dataset);

console.log(ball.dataset.id);

// 找爸爸
let body = getBody(run);
console.log(body);


function getBody(dom) {
    while (dom.tagName != 'BODY' && dom) {
        dom = dom.parentNode
    }
    return dom;
}

// 找兒子
console.log(body.childNodes);

let children = body.children;

for (let i in children) {
    let cdom = children[i];
    console.log(cdom);
}



let todo = document.querySelector('#todo');
let newLi = document.createElement('li');

// 異動內容
newLi.innerHTML = "I'm New Li";

// 新增兒子
todo.appendChild(newLi);

// 刪除兒子
todo.removeChild(newLi); // 等同 newLi.remove()