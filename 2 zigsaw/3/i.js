let numberMVS = 0
function startGame() {
  const tabPosition = new Array()
  while (tabPosition.length < 4) {
    let numero = Math.round(Math.random() * 100)
    if (numero == 1 || numero == 2 || numero == 3 || numero == 4) {
      if (!tabPosition.includes(numero)) {
        tabPosition[tabPosition.length] = numero
      }
    }
  }

  document.getElementById('pic1').textContent = tabPosition[0]

  document
    .getElementById('pic1')
    .setAttribute(
      'style',
      `background:url(${tabPosition[0]}.jpeg) ;background-size: contain; background-position:center;`
    )

  document.getElementById('pic2').textContent = tabPosition[1]
  document
    .getElementById('pic2')
    .setAttribute(
      'style',
      `background:url(${tabPosition[1]}.jpeg) ;background-size: contain; background-position:center;`
    )

  document.getElementById('pic3').textContent = tabPosition[2]
  document
    .getElementById('pic3')
    .setAttribute(
      'style',
      `background:url(${tabPosition[2]}.jpeg) ;background-size: contain; background-position:center;`
    )

  document.getElementById('pic4').textContent = tabPosition[3]
  document
    .getElementById('pic4')
    .setAttribute(
      'style',
      `background:url(${tabPosition[3]}.jpeg) ;background-size: contain; background-position:center;`
    )
  document.querySelector('.moves').textContent = 'moves: 0'
  numberMVS = 0
  document.querySelector('.launch').textContent = 'restart game'
}

function checkWin() {
  let cell1 = document.getElementById('pic1').textContent
  let cell2 = document.getElementById('pic2').textContent
  let cell3 = document.getElementById('pic3').textContent
  let cell4 = document.getElementById('pic4').textContent

  if (cell1 == '1' && cell2 == '2' && cell3 == '3' && cell4 == '4') {
    return true
  } else {
    return false
  }
}

function resetImg() {
  document.getElementById('pic1').style.visibility = 'visible'
  document.getElementById('pic2').style.visibility = 'visible'
  document.getElementById('pic3').style.visibility = 'visible'
  document.getElementById('pic4').style.visibility = 'visible'

  document.querySelector('.launch').textContent = 'start game'
  document.querySelector('.moves').textContent = 'moves: 0'
  numberMVS = 0
}

function backToNormal() {
  document
    .querySelector('.grid')
    .setAttribute(
      'style',
      `background:url(doraemon.jpg) ;background-size: cover; background-position:center;`
    )
  setTimeout(resetImg, 5000)
}
function switching(cell) {
  if (document.getElementById(cell).textContent != '1') {
    switch (cell) {
      case 'pic1':
        if (document.getElementById('pic2').textContent == '1') {
          let tempVal = document.getElementById('pic2').textContent
          document.getElementById('pic2').textContent =
            document.getElementById('pic1').textContent
          document.getElementById('pic1').textContent = tempVal

          document
            .getElementById('pic1')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('pic1').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )
          document
            .getElementById('pic2')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('pic2').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )

          numberMVS++
          document.querySelector('.moves').textContent = `moves: ${numberMVS}`
        }
        if (document.getElementById('pic3').textContent == '1') {
          let tempVal = document.getElementById('pic3').textContent
          document.getElementById('pic3').textContent =
            document.getElementById('pic1').textContent
          document.getElementById('pic1').textContent = tempVal

          document
            .getElementById('pic1')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('pic1').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )
          document
            .getElementById('pic3')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('pic3').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )

          numberMVS++
          document.querySelector('.moves').textContent = `moves: ${numberMVS}`
        }

        if (checkWin()) {
          setTimeout(() => {
            document.getElementById('pic1').style.visibility = 'hidden'
            document.getElementById('pic2').style.visibility = 'hidden'
            document.getElementById('pic3').style.visibility = 'hidden'
            document.getElementById('pic4').style.visibility = 'hidden'

            document
              .querySelector('.grid')
              .setAttribute(
                'style',
                `background:url(giphy.gif) ;background-size: cover; background-position:center;`
              )

            setTimeout(backToNormal, 5000)
          }, 500)
        }
        break

      case 'pic2':
        if (document.getElementById('pic1').textContent == '1') {
          let tempVal = document.getElementById('pic1').textContent
          document.getElementById('pic1').textContent =
            document.getElementById('pic2').textContent
          document.getElementById('pic2').textContent = tempVal

          document
            .getElementById('pic1')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('pic1').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )
          document
            .getElementById('pic2')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('pic2').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )

          numberMVS++
          document.querySelector('.moves').textContent = `moves: ${numberMVS}`
        }
        if (document.getElementById('pic4').textContent == '1') {
          let tempVal = document.getElementById('pic4').textContent
          document.getElementById('pic4').textContent =
            document.getElementById('pic2').textContent
          document.getElementById('pic2').textContent = tempVal

          document
            .getElementById('pic4')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('pic4').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )
          document
            .getElementById('pic2')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('pic2').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )

          numberMVS++
          document.querySelector('.moves').textContent = `moves: ${numberMVS}`
        }
        break

      case 'pic3':
        if (document.getElementById('pic1').textContent == '1') {
          let tempVal = document.getElementById('pic1').textContent
          document.getElementById('pic1').textContent =
            document.getElementById('pic3').textContent
          document.getElementById('pic3').textContent = tempVal

          document
            .getElementById('pic1')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('pic1').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )
          document
            .getElementById('pic3')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('pic3').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )

          numberMVS++
          document.querySelector('.moves').textContent = `moves: ${numberMVS}`
        }
        if (document.getElementById('pic4').textContent == '1') {
          let tempVal = document.getElementById('pic4').textContent
          document.getElementById('pic4').textContent =
            document.getElementById('pic3').textContent
          document.getElementById('pic3').textContent = tempVal

          document
            .getElementById('pic4')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('pic4').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )
          document
            .getElementById('pic3')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('pic3').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )

          numberMVS++
          document.querySelector('.moves').textContent = `moves: ${numberMVS}`
        }
        break

      case 'pic4':
        if (document.getElementById('pic2').textContent == '1') {
          let tempVal = document.getElementById('pic2').textContent
          document.getElementById('pic2').textContent =
            document.getElementById('pic4').textContent
          document.getElementById('pic4').textContent = tempVal

          document
            .getElementById('pic2')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('pic2').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )
          document
            .getElementById('pic4')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('pic4').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )

          numberMVS++
          document.querySelector('.moves').textContent = `moves: ${numberMVS}`
        }
        if (document.getElementById('pic3').textContent == '1') {
          let tempVal = document.getElementById('pic3').textContent
          document.getElementById('pic3').textContent =
            document.getElementById('pic4').textContent
          document.getElementById('pic4').textContent = tempVal

          document
            .getElementById('pic3')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('pic3').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )
          document
            .getElementById('pic4')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('pic4').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )

          numberMVS++
          document.querySelector('.moves').textContent = `moves: ${numberMVS}`
        }
        break
    }
  }
}
