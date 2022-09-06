// For top section
const listOpts = document.querySelectorAll('.col-1 .tab-title ul li')
const contants = document.querySelectorAll('.col-1 .tab-content .info')
const thumbnails = document.querySelectorAll('.col-2 .thumbnail')
const foodmenus = document.querySelectorAll('.section')

listOpts.forEach((opt, idx) => {
  opt.addEventListener('click', () => {
    hideAllContants()
    hideAllOpts()
    hideAllThumbnails()
    hideAllFoodmenus()

    opt.classList.add('on')
    contants[idx].classList.add('visible')
    thumbnails[idx].classList.add('open')
    foodmenus[idx].classList.add('watch')
  })
})

function hideAllContants() {
  contants.forEach(contant => contant.classList.remove('visible'))
}
function hideAllFoodmenus() {
  foodmenus.forEach(foodmenu => foodmenu.classList.remove('watch'))
}
function hideAllThumbnails() {
  thumbnails.forEach(thumbnail => thumbnail.classList.remove('open'))
}
function hideAllOpts() {
  listOpts.forEach(opt => opt.classList.remove('on'))
}

/*=============================================
===========only for food menu 01===============
===============================================*/

const content1s = document.querySelectorAll('#food-menu-01 .container .tabs-contant .content')
const listItem1s = document.querySelectorAll('#food-menu-01 .container .tabs-wrapper ul li')

listItem1s.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContent1s()
    hideAllItem1s()

    item.classList.add('active')
    content1s[idx].classList.add('show')
  })
})

function hideAllContent1s() {
  content1s.forEach(content => content.classList.remove('show'))
}

function hideAllItem1s() {
  listItem1s.forEach(item => item.classList.remove('active'))
}

/*=============================================
===========only for food menu 02===============
===============================================*/

const content2s = document.querySelectorAll('#food-menu-02 .container .tabs-contant .content')
const listItem2s = document.querySelectorAll('#food-menu-02 .container .tabs-wrapper ul li')

listItem2s.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContent2s()
    hideAllItem2s()

    item.classList.add('active')
    content2s[idx].classList.add('show')
  })
})

function hideAllContent2s() {
  content2s.forEach(content => content.classList.remove('show'))
}

function hideAllItem2s() {
  listItem2s.forEach(item => item.classList.remove('active'))
}

/*=============================================
===========only for food menu 03===============
===============================================*/

const content3s = document.querySelectorAll('#food-menu-03 .container .tabs-contant .content')
const listItem3s = document.querySelectorAll('#food-menu-03 .container .tabs-wrapper ul li')

listItem3s.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContent3s()
    hideAllItem3s()

    item.classList.add('active')
    content3s[idx].classList.add('show')
  })
})

function hideAllContent3s() {
  content3s.forEach(content => content.classList.remove('show'))
}

function hideAllItem3s() {
  listItem3s.forEach(item => item.classList.remove('active'))
}