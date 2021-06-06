   'use strict';
// animation3

    // 先に実行したい処理…ローディングのアニメーションをここに入れる
    // function loaded(){
    //     document.getElementById('loading').classList.remove('active');
    // }
    
    // // window.addEventListener('load', function(){
    // //     setTimeout(loaded, 500)
    // // })
    
    // setTimeout(loaded, 500)
    

    $(window).load(function(){
        document.getElementById('loading').classList.remove('active');
    });
    

    // 後に実行したい処理…メインのwebページのアニメーションの為の処理を入れる
    const hov = document.querySelectorAll(".hov");
document.addEventListener('DOMContentLoaded',function(){
document.getElementById("menuButton").addEventListener("click", function(){
    this.classList.toggle("active");
    document.getElementById("menu02").classList.toggle("active");
    for (let i = 0; i < hov.length; i++){
        // hov[i].classList.add('active');
        hov[i].classList.toggle("active");
    }
})

    const target = document.querySelectorAll('.animationTarget');
console.log('画面の高さ', window.innerHeight);
document.addEventListener('scroll',function(){
    for(let i = 0;i <target.length; i++){
        const distance = target[i].
        getBoundingClientRect().top + target[i].clientHeight * 0.6
        if(window.innerHeight > distance){
            target[i].classList.add('show');
        }
}})

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
    

    // animation2↓
    const swiper1 = new Swiper('.slider1', {
        // Optional parameters
        // direction: 'vertical',
        
        slidesPerView: 1,
          centeredSlides: true,
        speed:1000,
        loop: true,
      
        autoplay:{
            delay: 2500
        },
        
        breakpoints: {
            769: {
                slidesPerView: 2,
            }
        },

        // スライダー下の丸いアイコン
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      
        // 端の矢印
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        on: {
            init: function(){
                const self = this;
                setTimeout(function(){
                    const slideElements = this.slides;
                    for(let i = 0; i < slideElements.length; i++) {
                        slideElements[i].style.transition = '.5s'
                    }

                }, 10)
            }
        }
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });
      const swiper2 = new Swiper('.slider2',{
          
          effect:'fade',
          
        speed:1000,
        loop: true,
      
        autoplay:{
            delay: 2500
        },
        
        // スライダー下の丸いアイコン
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      
        // 端の矢印
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
       

      });
const showElements = document.querySelectorAll(".animation-target2");
window.addEventListener("scroll", function(){
    for (let i = 0; i < showElements.length; i++){
        const distance = showElements[i].
        getBoundingClientRect().top + showElements[i].clientHeight * 0.6
        if(window.innerHeight > distance){
            showElements[i].classList.add('show');
        }     
    }
})
})



