// For top section
const listOpts = document.querySelectorAll('.col-1 .tab-title ul li')
const contants = document.querySelectorAll('.col-1 .tab-content .info')
var menu = document.getElementById('preview2')

listOpts.forEach((opt, idx) => {
  opt.addEventListener('click', () => {
    hideAllContants()
    hideAllOpts()

    opt.classList.add('on')
    contants[idx].classList.add('visible')
  })
})

function hideAllContants() {
  contants.forEach(contant => contant.classList.remove('visible'))
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