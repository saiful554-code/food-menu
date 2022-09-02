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


// For food menu
const contents = document.querySelectorAll('.tabs-contant .content')
const listItems = document.querySelectorAll('.tabs-wrapper ul li')

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContents()
    hideAllItems()

    item.classList.add('active')
    contents[idx].classList.add('show')
  })
})

function hideAllContents() {
  contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {
  listItems.forEach(item => item.classList.remove('active'))
}