addEventListener('load',()=>{
    initialize()
})
addEventListener('resize',()=>{
    initialize()
})
addEventListener('reset',()=>{
    initialize()
})

const initialize = ()=>{
    windowHeight = window.outerHeight
    history.scrollRestoration = "manual";
}

//viewLogo
const text = "HYUN HYEJU";
const titleElement = document.getElementById("title");
const caretElement = document.querySelector(".caret");

let index=0;
function typeText(){
    if(index <text.length){
        titleElement.innerHTML+=text.charAt(index);
        index++;
        setTimeout(typeText,120);
    }else {
        caretElement.style.display = "inline-block";
    }
}

window.onload=function(){
    typeText();
};


let windowHeight = window.innerHeight
initialize()

const homeText = document.querySelector('.home_text')
const homeIphone1 = document.querySelector('.home_image_container .iphone_wrap:first-of-type')
const homeIphone2 = document.querySelector('.home_image_container .iphone_wrap:last-of-type')
const homeText2 = document.querySelector('.home_text2')


// homeText가 50% 정도 뷰포트에 나왔을 경우 아래 함수 실행
let observer1 = new IntersectionObserver(entries=>{
    observer1cb(entries[0])
},{root: null, threshold:0.5})

const observer1cb = entry=>{
    if(entry.isIntersecting){
        homeText.style.opacity = 1
        homeText.style.animation = 'appear_from_bottom ease 1.5s'

        // 화면에 시간간격마다 차례대로 화면에 요소를 띄움, 띄어지는 요소는 CSS animation 이 걸려있어서 부드럽게 동작
        setTimeout(()=>{
            homeIphone1.style.opacity = 1
            homeIphone1.style.animation = 'appear_from_bottom ease 1.5s'
            setTimeout(()=>{
                homeIphone2.style.opacity = 1
                homeIphone2.style.animation = `appear_from_bottom ease 1.5s`
                setTimeout(()=>{
                    homeText2.style.opacity = 1
                    homeText2.style.animation = `appear_from_bottom ease 1.5s`
                    observer1.unobserve(homeText)
                },600)
            },600)
        },600)
    }
}
observer1.observe(homeText)


/*home 2*/
const home2Text = document.querySelector('.home2_textwrap')
const home2Contents = document.querySelectorAll('.home2_content')
const home2Images = document.querySelectorAll('.home2_image_container')

let observer2 = new IntersectionObserver(entries=>{
    observer2cb(entries[0])
},{threshold:0.5})

const observer2cb = entry=>{
    if(entry.isIntersecting){
        home2Text.style.animation = 'appear_from_bottom ease 1.5s'
        home2Text.style.opacity = 1

        setTimeout(()=>{
            home2Contents.forEach(item=>{
                item.style.animation = 'appear_from_bottom ease 1.5s'
                item.style.opacity = 1
            })

            setTimeout(()=>{
                home2Images.forEach(item=>{
                    item.style.animation = 'appear_from_bottom ease 1.5s'
                    item.style.opacity = 1
                })
            },600)
        },600)
        observer2.unobserve(home2Text)
    }
}
observer2.observe(home2Text)


/*home 3*/
const home3Text = document.querySelector('.home3_textwrap')
const home3ImageContainer = document.querySelector('.home3_image_container .iphone_wrap')
const home3P = document.querySelector('.home3_textwrap2 p')
const home3TextSpans = document.querySelectorAll('.home3_textwrap2 h3')

let observer3 = new IntersectionObserver(entries=>{
    observer3cb(entries[0])
})
const observer3cb = entry=>{
    if(entry.isIntersecting){
        home3Text.style.animation = 'appear_from_bottom ease 1.5s'
        home3Text.style.opacity = 1
        setTimeout(()=>{
            home3ImageContainer.style.animation = 'appear_from_bottom ease 1.5s'
            home3ImageContainer.style.opacity = 1
            setTimeout(()=>{
                home3P.style.animation = 'appear_from_bottom ease 1.5s'
                home3P.style.opacity = 1
                setTimeout(()=>{
                    home3TextSpans[0].style.animation = 'appear_from_bottom ease 1.5s'
                    home3TextSpans[0].style.opacity = 1
                    setTimeout(()=>{
                        home3TextSpans[1].style.animation = 'appear_from_bottom ease 1.5s'
                        home3TextSpans[1].style.opacity = 1
                        setTimeout(()=>{
                            home3TextSpans[2].style.animation = 'appear_from_bottom ease 1.5s'
                            home3TextSpans[2].style.opacity = 1
                        },600)
                    },600)
                },600)
            },600)
        },600)
        observer3.unobserve(home3Text)
    }
}
observer3.observe(home3Text)



/*home 4*/
const home4Text = document.querySelector('.home4_textwrap')
const home4Contents = document.querySelectorAll('.home4_content_textwrap')
const home4Images = document.querySelectorAll('.home4_content img')

let observer4 = new IntersectionObserver(entries=>{
    observer4cb(entries[0])
},{threshold:0.5})

const observer4cb = entry=>{
    if(entry.isIntersecting){
        home4Text.style.animation = 'appear_from_bottom ease 1.5s'
        home4Text.style.opacity = 1
        setTimeout(()=>{
            home4Contents.forEach(item=>{
                item.style.animation = 'appear_from_bottom ease 1.5s'
                item.style.opacity = 1
            })
            setTimeout(()=>{
                home4Images.forEach(item=>{
                    item.style.animation = 'appear_from_bottom ease 1.5s'
                    item.style.opacity = 1
                })
            },600)
        },600)
        observer4.unobserve(home4Text)
    }
}
observer4.observe(home4Text)




/*home 5*/
const home5Text = document.querySelector('.home5_textwrap')
const home5P1 = document.querySelector('.home5_content_text_inner p:first-of-type')
const home5P2 = document.querySelector('.home5_content_text_inner p:last-of-type')
const home5Text2 = document.querySelector('.home5_textwrap2')

let observer5 = new IntersectionObserver(entries=>{
    observer5cb(entries[0])
},{threshold:0.5})

const observer5cb = entry=>{
    if(entry.isIntersecting){
        home5Text.style.animation = 'appear_from_bottom ease 1.5s'
        home5Text.style.opacity = 1

        setTimeout(()=>{
            home5P1.style.animation = 'appear_from_bottom ease 1.5s'
            home5P1.style.opacity = 1
            setTimeout(()=>{
                home5P2.style.animation = 'appear_from_bottom ease 1.5s'
                home5P2.style.opacity = 1   
                setTimeout(()=>{
                    home5Text2.style.animation = 'appear_from_bottom ease 1.5s'
                    home5Text2.style.opacity = 1                    
                },600)
            },600)
        }, 600)
        observer5.unobserve(home5Text)
    }
}
observer5.unobserve(home5Text)

/* home5 스크롤에 따른 아이콘 등장 이벤트*/ 

/*home 6*/
const walls = doocument.querySelectorAll('.home6_wall')
const home6wall = document.querySelector('.home6_wallpaper')
let difference
const home6WidthControlHandler = ()=>{
    difference = windowHeight - home6wall.getBoundingClientRect().top

    if(difference<=150){
        walls.forEach(item=>
            item.style.width = '200px'
        )
    }else if(difference>150 && difference<700){
        walls.forEach(item=>
            item.style.width='${-(4/11)*difference + 255 }px'
        )
    }else if(difference>=700){
        walls.forEach(item=>
            item.style.width = '0px'
        )
    }
}

window.addEventListener('scroll', home6WidthControlHandler)

const home6Content1Img = document.querySelector('.home6_content1 img')
const home6Content1Text = document.querySelector('.home6_content1_textwrap')
const home6Content2Img = document.querySelector('.home6_content2 > img')
const home6Text = document.querySelector('.home6_textwrap h2')
const home6Content2Item = document.querySelector('.home6_content2_item')
const home6Content3Img = document.querySelector('.home6_content3 img')
const home6Text2 = document.querySelector('.home6_textwrap2')

const home6OpacityEvent = (item)=>{
    let difference = windowHeight - item.getBoundingClientRect().top
    if(difference > 150 && difference < item.offsetHeight+200){
        item.style.opacity = (difference-150)/(item.offsetHeight+50)
    }else if(difference > item.offsetHeight+200){
        item.style.opacity =1
    }else{
        item.style.opacity = 0
    }
}

const home6OpacityTransitionEvent = (item)=>{
    let difference = windowHeight - item.getBoundingClientRect().top
    if(difference > 150 && difference < item.offsetHeight+200){
        item.style.opacity = (difference-150)/(item.offsetHeight+50)
        item.style.transform = `translateY(${-100*(difference-150)/(item.offsetHeight+50)}px)`
    }else if(difference > item.offsetHeight+200){
        item.style.opacity =1
    }else{
        item.style.opacity = 0
    }
}

const home6ScrollHandler = ()=>{
    home6OpacityEvent(home6Content1Img)
    home6OpacityEvent(home6Content1Text)
    home6OpacityEvent(home6Content2Img)
    home6OpacityEvent(home6Text)
    home6OpacityEvent(home6Content3Img)
    home6OpacityEvent(home6Text2)
    home6OpacityTransitionEvent(home6Content2Item)
}

window.addEventListener('scroll', home6ScrollHandler)




/*home 7*/
const home7Text = document.querySelector('.home7_textwrap')
const home7Contents = document.querySelectorAll('.home7_content')

const observer7 = new IntersectionObserver(entries=>{
  observer7cb(entries[0])
},{threshold:0.5})

const observer7cb = entry=>{
    if(entry.isIntersecting){
        home7Text.style.animation = 'appear_from_bottom ease 1.5s'
        home7Text.style.opacity = 1
        
        setTimeout(()=>{
          home7Contents.forEach(item=>{
            item.style.animation = 'appear_from_bottom ease 1.5s'
            item.style.opacity = 1
          }) 
        },600)
        observer7.unobserve(home7Text)
      }
      observer7.observe(home7Text)
}
observer7.observe(home7Text)



/*home 8*/
const home8Img = document.querySelector('.home8_container img')
const home8Text = document.querySelector('.home8_textwrap')
const home8Content = document.querySelector('.home8_content')

let observer8 = new IntersectionObserver(entries=>{
  observer8cb(entries[0])
},{threshold:0.4})

const observer8cb = entry => {
  if(entry.isIntersecting){
    home8Img.style.animation = 'appear_from_bottom ease 1.5s'
    home8Img.style.opacity = 1
    
    setTimeout(()=>{
      home8Text.style.animation = 'appear_from_bottom ease 1.5s'
      home8Text.style.opacity = 1
  
      setTimeout(()=>{
        home8Content.style.animation = 'appear_from_bottom ease 1.5s'
        home8Content.style.opacity = 1
      },600)
    },600)
    observer8.unobserve(home8Img)
  }
}
observer8.observe(home8Img)