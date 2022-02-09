const surface = document.querySelector('.surface')
const blocks = document.getElementsByClassName('blocks')
const block = document.getElementsByClassName('block')
// const clipa = document.querySelector('.clip1')
const clip2 = document.querySelector('.clip2')
const clip3 = document.querySelector('.clip3')

for (let i = 1; i < 400; i++) {
  surface.innerHTML += `<div class='blocks'></div>`
  // clip1.innerHTML += `<div class="block"></div>`
  // clip2.innerHTML += `<div class="block"></div>`
  // clip3.innerHTML += `<div class="block"></div>`
  blocks[i].style.animationDelay = `${i * 0.05}s`
  // block[i].style.animationDelay = `${i * 0.05}s`
}

// for click event ====================
// const clickEvent = ()=>{

// }
// const surface = document.querySelector('.surface')
const btnC = document.querySelector('.btnC')
const btnB = document.querySelector('.btnB')
const btnA = document.querySelector('.btnA')
// =================clip1==============
let no = 0
document.querySelector('.clip1').addEventListener('click', () => {
  document.querySelector('.clip1').classList.toggle('togglerA')
  // btnA.classList.toggle('btnToggler')
  block[0].classList.toggle('blockToggler')
  nom = 1
  if (nom === 1) {
    nom = 0
    document
      .querySelectorAll('.sbtn2')
      .forEach((s) => (s.style.transform = 'scale(0)'))
    document
      .querySelectorAll('.sbtn3')
      .forEach((s) => (s.style.transform = 'scale(0)'))
    document
      .querySelectorAll('.sbtn1')
      .forEach((s) => (s.style.transform = 'scale(1)'))

    document.querySelector('.btnC').style.transform = 'scale(0)'
    document.querySelector('.btnD').style.transform = 'scale(0)'
    document.querySelector('.btnE').style.transform = 'scale(0)'
    document.querySelector('.btnF').style.transform = 'scale(0)'
  } else if (nom === 0) {
    nom = 1
    document
      .querySelectorAll('.sbtn2')
      .forEach((s) => (s.style.transform = 'scale(0)'))
    document
      .querySelectorAll('.sbtn3')
      .forEach((s) => (s.style.transform = 'scale(0)'))
    document
      .querySelectorAll('.sbtn1')
      .forEach((s) => (s.style.transform = 'scale(0)'))

    document.querySelector('.btnC').style.transform = 'scale(0)'
    document.querySelector('.btnD').style.transform = 'scale(0)'
    document.querySelector('.btnE').style.transform = 'scale(0)'
    document.querySelector('.btnF').style.transform = 'scale(0)'
    document.querySelector('.btnA').style.transform = 'scale(0)'
    document.querySelector('.btnB').style.transform = 'scale(0)'
  }
})
// document.querySelector('.clip1').addEventListener('click', () => {
//   document.querySelector('.clip1').classList.toggle('togglerA')
//   // btnA.classList.toggle('btnToggler')
//   block[0].classList.toggle('blockToggler')

//   document
//     .querySelectorAll('.sbtn2')
//     .forEach((s) => (s.style.transform = 'scale(0)'))
//   document
//     .querySelectorAll('.sbtn3')
//     .forEach((s) => (s.style.transform = 'scale(0)'))
//   document
//     .querySelectorAll('.sbtn1')
//     .forEach((s) => (s.style.transform = 'scale(1)'))

//   document.querySelector('.btnC').style.transform = 'scale(0)'
//   document.querySelector('.btnD').style.transform = 'scale(0)'
//   document.querySelector('.btnE').style.transform = 'scale(0)'
//   document.querySelector('.btnF').style.transform = 'scale(0)'
// })

let num = 2

document.querySelectorAll('.sbtn1').forEach((s) =>
  s.addEventListener('click', function () {
    // let num = 2
    if (num === 2) {
      num = 3
      document.querySelector('.btn1').style.transform = ' translateX(100%)'
      document.querySelector('.btn1').innerHTML = '<h2>3x3</h2>'

      document.querySelector('.btnA').style.transform = 'scale(0)'
      document.querySelector('.btnB').style.transform = 'scale(1)'
    } else if (num === 3) {
      num = 2
      document.querySelector('.btn1').style.transform = ' translateX(0%)'
      document.querySelector('.btn1').innerHTML = '<h2>2x2</h2>'

      document.querySelector('.btnA').style.transform = 'scale(1)'
      document.querySelector('.btnB').style.transform = 'scale(0)'
    }
  })
)

// end of clip1========================

// clip2================================
document.querySelector('.clip2').addEventListener('click', () => {
  document.querySelector('.clip2').classList.toggle('togglerB')
  // btnB.classList.toggle('btnToggler')
  block[1].classList.toggle('blockToggler')

  document
    .querySelectorAll('.sbtn1')
    .forEach((s) => (s.style.transform = 'scale(0)'))
  document
    .querySelectorAll('.sbtn3')
    .forEach((s) => (s.style.transform = 'scale(0)'))
  document
    .querySelectorAll('.sbtn2')
    .forEach((s) => (s.style.transform = 'scale(1)'))

  document.querySelector('.btnA').style.transform = 'scale(0)'
  document.querySelector('.btnB').style.transform = 'scale(0)'
  document.querySelector('.btnE').style.transform = 'scale(0)'
  document.querySelector('.btnF').style.transform = 'scale(0)'
})

let numTwo = 2

document.querySelectorAll('.sbtn2').forEach((s) =>
  s.addEventListener('click', function () {
    // let num = 2
    if (numTwo === 2) {
      numTwo = 3
      document.querySelector('.btn2').style.transform = ' translateX(100%)'
      document.querySelector('.btn2').innerHTML = '<h2>3x3</h2>'

      document.querySelector('.btnC').style.transform = 'scale(0)'

      document.querySelector('.btnD').style.transform = 'scale(1)'
    } else if (numTwo === 3) {
      numTwo = 2
      document.querySelector('.btn2').style.transform = ' translateX(0%)'
      document.querySelector('.btn2').innerHTML = '<h2>2x2</h2>'

      document.querySelector('.btnC').style.transform = 'scale(1)'
      document.querySelector('.btnD').style.transform = 'scale(0)'
    }
  })
)

// clip2 end ==============================

// clip3=================================
document.querySelector('.clip3').addEventListener('click', () => {
  document.querySelector('.clip3').classList.toggle('togglerC')
  // btnC.classList.toggle('btnToggler')
  block[2].classList.toggle('blockToggler')

  document
    .querySelectorAll('.sbtn1')
    .forEach((s) => (s.style.transform = 'scale(0)'))
  document
    .querySelectorAll('.sbtn2')
    .forEach((s) => (s.style.transform = 'scale(0)'))
  document
    .querySelectorAll('.sbtn3')
    .forEach((s) => (s.style.transform = 'scale(1)'))

  document.querySelector('.btnA').style.transform = 'scale(0)'
  document.querySelector('.btnB').style.transform = 'scale(0)'
  document.querySelector('.btnC').style.transform = 'scale(0)'
  document.querySelector('.btnD').style.transform = 'scale(0)'
})
let numThree = 2

document.querySelectorAll('.sbtn3').forEach((s) =>
  s.addEventListener('click', function () {
    // let num = 2
    if (numThree === 2) {
      numThree = 3
      document.querySelector('.btn3').style.transform = ' translateX(100%)'
      document.querySelector('.btn3').innerHTML = '<h2>3x3</h2>'

      document.querySelector('.btnE').style.transform = 'scale(0)'

      document.querySelector('.btnF').style.transform = 'scale(1)'
    } else if (numThree === 3) {
      numThree = 2
      document.querySelector('.btn3').style.transform = ' translateX(0%)'
      document.querySelector('.btn3').innerHTML = '<h2>2x2</h2>'

      document.querySelector('.btnE').style.transform = 'scale(1)'
      document.querySelector('.btnF').style.transform = 'scale(0)'
    }
  })
)

// clip3 end =============================
