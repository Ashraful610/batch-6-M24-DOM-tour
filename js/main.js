const sections = document.querySelectorAll('section')
for(const section of sections){
   section.style.border = '2px solid tomato'
   section.style.background='steelblue'
   section.style.borderRadius = '5px'
   section.style.margin = '10px'
   section.style.padding = '10px'
}
const motivations = document.querySelectorAll('li')
for(const motivate of motivations){
    motivate.style.color = 'white'
}
const title = document.getElementById('section-title')
title.classList.add('color')
title.classList.remove('more-title')

const firstSection = document.querySelector('.first-section')
const ul = firstSection.childNodes[3]
const li = document.createElement('li')
li.innerText='Hi'
ul.appendChild(li)