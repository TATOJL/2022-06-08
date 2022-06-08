let run = document.querySelector('#run-btn');

if (run) {
    run.addEventListener('click', () => {
        // 抓取需要的 DOM
        let content = document.querySelector('#content');
        let result = document.querySelector('#result');
        
        let value = content.value;

        contentClassName = content.className;

        contentClasses = contentClassName.split(' ');



        // 如果 [輸入框] 沒有值，不複製內容到 [執行結果]，並且將 [輸入框] 變成紅色背景
        if (value) {
            // 複製輸入框內容到執行結果
            result.innerHTML = value;
        
            // 清除輸入框內容
            content.value = '';

            if (hasClass(contentClasses, 'error')) {
                content.classList.remove('error');
            }

            // 白色背景
            // content.style.backgroundColor = '#fff';
        } else {
            // 紅色背景
            // content.style.backgroundColor = 'red';
            // content.classList.add('error');

            // 假設沒有 error 加入 error
            if (!hasClass(contentClasses, 'error')) {
                content.classList.add('error');
            }
        }  
        
        // 聚焦
        content.focus();
    });
}

function hasClass(classes, className) {
    return classes.indexOf(className) >= 0;
}