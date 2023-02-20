




//      date
let deadline = '2023-02-18'

function getTimeRemaining(deadline){
let time = new Date(deadline)-new Date(),
    days = Math.floor((time /  (1000 * 60 * 60 * 24))),
    hours = Math.floor((time /  (1000 * 60 * 60)%24)),
    minutes = Math.floor((time /  1000 / 60)%60),
    seconds = Math.floor((time /  1000)%60)
    return{
    'total':time,
    'days':days,
    'hours':hours,
    'minutes':minutes,
    'seconds':seconds,
    }
}
function setClock(element,deadline){
    let elem = document.querySelector(element),
        days = elem.querySelector('#days'),
        hours = elem.querySelector('#hours'),
        minutes = elem.querySelector('#minutes'),
        seconds = elem.querySelector('#seconds')
    setInterval(updateClock,1000)
    updateClock()
    function updateClock(){
        let time = getTimeRemaining(deadline)
        days.innerHTML = makeZero(time.days)
        hours.innerHTML = makeZero(time.hours)
        minutes.innerHTML = makeZero(time.minutes)
        seconds.innerHTML = makeZero(time.seconds)
    }
    function makeZero(num){
        if(num>=0 && num<10){
            return`0${num}`
        }else {
            return num
        }
    }
}
setClock('.timer',deadline)
//---------------------------------------------------------------------------------



let tabs = document.querySelectorAll('.tabheader__item')
let tabsParent = document.querySelector('.tabheader__items')
let tabContent = document.querySelectorAll('.tabcontent')
let counter = 0;
let four = 4;
let activity = document.querySelector('.tabheader__item_active')
let hideTabContent = ()=>{
    tabContent.forEach(item =>{
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}
let showTabContent = (i=0)=>{
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

let animation=(item,i)=> {
        hideTabContent()
        showTabContent(counter);
        counter++;
        if (counter >=four){
            counter=0;
        }
}
setInterval(animation,2000)
//-----------------------------------------------------
let modal = document.querySelector('.modal')
let modalTrigger = document.querySelector('.btn_white')
let closeModalBtn = document.querySelector('.modal__close')
let openModal = ()=>{
    modal.classList.add('show')
    closeModalBtn.classList.remove('hide')
    document.body.style.overflow = 'hidden'
let closeModal = ()=>{
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}
modalTrigger.onclick = () =>openModal()
closeModalBtn.onclick = () =>closeModal()
modal.onclick = (event)=>event.target === modal ? closeModal():false
modal.onkeydown = (event)=>event.code==='Escape' ? closeModal():false
}
//-------------------------------------------------------

let btnDark = document.querySelector('.btn_dark')
btnDark.onclick = ()=>openModal()
//----------------------------------
onscroll = function() {
    if (window.scrollY + 1 >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
        openModal()
    }
}
//1)сделать слайдер автоматическим
//2)вызывать модалку по скролу до конца страницы
// 3)добавить на вторую кнопку модалку