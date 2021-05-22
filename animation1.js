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
