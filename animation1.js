   'use strict';
const target = document.querySelectorAll('.animationTarget');
console.log('画面の高さ', window.innerHeight);
document.addEventListener('scroll',function(){
    for(let i = 0;i <target.length; i++){
        const distance = target[i].
        getBoundingClientRect().top + target[i].clientHeight * 0.6
        if(window.innerHeight > distance){
            target[i].classList.add('show');
        }
    }
    });
    // animation2↓
    const textAnimation = document.querySelectorAll('.textAnimation');
    for (let i = 0; i < textAnimation.length; i++) {
        const targetAnimation = textAnimation[i],
        texts = targetAnimation.textContent,
        // 空の配列を作る
        textsArray = [];

        targetAnimation.textContent = '';

        for (let j = 0; j < texts.split('').length; j++) {
            const ts = texts.split('')[j]; 
            // textArrayに下の配列を入れる
            if(ts === ' '){
                textsArray.push(' ');
            }else{
                textsArray.push('<span><span style="animation-delay: ' + ((j * .05) + .3) + 's;">' + ts + '</span></span>')
            }
        }
        for (let k = 0; k < textsArray.length; k++) {
            // HTMLにtextArrayを入れる
            targetAnimation.innerHTML += textsArray[k];
        }
    }
