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

const profileTitle = document.querySelector('#profile')
const decoText = document.querySelector('#deco')
const profileBox = document.querySelector('.container #profileBox')

// profileTitle가 50% 정도 뷰포트에 나왔을 경우 아래 함수 실행
let observer1 = new IntersectionObserver(entries=>{
    observer1cb(entries[0])
},{root: null, threshold:0.5})

const observer1cb = entry=>{
    if(entry.isIntersecting){
        profileTitle.style.opacity = 1
        profileTitle.style.animation = 'appear_from_bottom ease 1.5s'
        profileBox.style.opacity = 1
        profileBox.style.animation = 'appear_from_bottom ease 1.5s'
        
        setTimeout(()=>{
            decoText.style.animation = `appear_fade ease 1.5s forwards`
            observer1.unobserve(profileTitle)
        },1200)
    }
}
observer1.observe(profileTitle)


/*viewIntroContent*/
const introTitle = document.querySelector('.introTitle')
const introContent = document.querySelectorAll('.introContent')
const home2Images = document.querySelectorAll('.home2_image_container')

let observer2 = new IntersectionObserver(entries=>{
    observer2cb(entries[0])
},{threshold:0.5})

const observer2cb = entry=>{
    if(entry.isIntersecting){
        introTitle.style.animation = 'appear_from_bottom ease 1.5s'
        introTitle.style.opacity = 1

        setTimeout(()=>{
            introContent.forEach(item=>{
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
        observer2.unobserve(introTitle)
    }
}
observer2.observe(introTitle)


/*viewEducation*/
const walls = document.querySelectorAll('.viewEdu_wall')
const viewEduWall = document.querySelector('.viewEdu_wallpaper')
let difference
const viewEduWidthControlHandler=()=>{
    difference = windowHeight - viewEduWall.getBoundingClientRect().top

    if(difference<=150){
        walls.forEach(item=>
            item.style.width = '200px'
        )
    }else if(difference>150 && difference<700){
        walls.forEach(item=>
            item.style.width = `${-(4/11)*difference + 255 }px`
        )
    }else if(difference>=700){
        walls.forEach(item=>
            item.style.width ='0px'
        )
    }
}

window.addEventListener('scroll',viewEduWidthControlHandler)

const eduText = document.querySelector('.viewEdu_content')
const kuText = document.querySelector('#KU')
const ctuText = document.querySelector('#CTU')

let observer3 = new IntersectionObserver(entries=>{
    observer3cb(entries[0])
})
const observer3cb = entry=>{
    if(entry.isIntersecting){
        eduText.style.animation = 'appear_from_bottom ease 1.5s'
        eduText.style.opacity = 1

        setTimeout(()=>{
            kuText.style.animation = 'appear_from_bottom ease 1.5s'
            kuText.style.opacity = 1
            setTimeout(() => {
                ctuText.style.animation = 'appear_from_bottom ease 1.5s'
                ctuText.style.opacity = 1
            }, 600);
        },600)
        observer3.unobserve(eduText)
    }
}
observer3.observe(eduText)



/*viewSkill*/
const skillTitle = document.querySelector('#skillTitle')
const skillList = document.querySelector('#skillWrapper')

let observer4 = new IntersectionObserver(entries=>{
    observer4cb(entries[0])
},{root: null, threshold:0.5})

const observer4cb = entry=>{
    if(entry.isIntersecting){
        skillTitle.style.opacity = 1
        skillTitle.style.animation = 'appear_from_bottom ease 1.5s'
        
        setTimeout(()=>{
            skillList.style.opacity = 1
            skillList.style.animation = 'appear_from_bottom ease 1.5s'
            decoText.style.animation = `appear_fade ease 1.5s forwards`
            observer4.unobserve(skillTitle)
        },1200)
    }
}
observer4.observe(skillTitle)

const menuItems = document.querySelectorAll('.s-menu-item');
const skillCategories = document.querySelectorAll('.skill-category');

menuItems.forEach(menuItem=>{
    menuItem.addEventListener('click',(e)=>{
        e.preventDefault();

        skillCategories.forEach(category=>{
            category.style.display = 'none';
        });

        const targetId = menuItem.getAttribute('href').substring(1);
        const targetCategory = document.getElementById(targetId);
        targetCategory.style.display = 'block';

        menuItems.forEach(item=>{
            item.classList.remove('selected');
        });
        menuItem.classList.add('selected');
    });
});

window.addEventListener('load', ()=>{
    const defaultMenu = document.getElementById('languageMenu');
    defaultMenu.classList.add('selected');
    const defaultCategory = document.getElementById('language');
    defaultCategory.style.display = 'block';
});
