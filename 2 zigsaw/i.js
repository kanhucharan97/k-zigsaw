let numberMVSA = 0

function startGameA() {
  const tabPositionA = new Array()
  while (tabPositionA.length < 4) {
    let numeroA = Math.round(Math.random() * 100)
    if (numeroA == 11 || numeroA == 12 || numeroA == 13 || numeroA == 14) {
      if (!tabPositionA.includes(numeroA)) {
        tabPositionA[tabPositionA.length] = numeroA
      }
    }
  }
  document.getElementById('picA1').textContent = tabPositionA[0]

  document
    .getElementById('picA1')
    .setAttribute(
      'style',
      `background:url(${tabPositionA[0]}.jpeg) ;background-size: contain; background-position:center;`
    )
  document.getElementById('picA2').textContent = tabPositionA[1]
  document
    .getElementById('picA2')
    .setAttribute(
      'style',
      `background:url(${tabPositionA[1]}.jpeg) ;background-size: contain; background-position:center;`
    )

  document.getElementById('picA3').textContent = tabPositionA[2]
  document
    .getElementById('picA3')
    .setAttribute(
      'style',
      `background:url(${tabPositionA[2]}.jpeg) ;background-size: contain; background-position:center;`
    )

  document.getElementById('picA4').textContent = tabPositionA[3]
  document
    .getElementById('picA4')
    .setAttribute(
      'style',
      `background:url(${tabPositionA[3]}.jpeg) ;background-size: contain; background-position:center;`
    )
  document.querySelector('.movesA').textContent = 'movesA: 0'
  numberMVSA = 0
  document.querySelector('.launchA').textContent = 'restart game'
}

function checkWinA() {
  let cellA1 = document.getElementById('picA1').textContent
  let cellA2 = document.getElementById('picA2').textContent
  let cellA3 = document.getElementById('picA3').textContent
  let cellA4 = document.getElementById('picA4').textContent

  if (cellA1 == '1' && cellA2 == '2' && cellA3 == '3' && cellA4 == '4') {
    return true
  } else {
    return false
  }
}
function resetImgA() {
  document.getElementById('picA1').style.visibility = 'visible'
  document.getElementById('picA2').style.visibility = 'visible'
  document.getElementById('picA3').style.visibility = 'visible'
  document.getElementById('picA4').style.visibility = 'visible'

  document.querySelector('.launchA').textContent = 'start game'
  document.querySelector('.movesA').textContent = 'movesA: 0'
  numberMVSA = 0
}

function backToNormalA() {
  document
    .querySelector('.gridA')
    .setAttribute(
      'style',
      `background:url(doraemon.jpg) ;background-size: cover; background-position:center;`
    )
  setTimeout(resetImgA, 5000)
}

function shifting(cellA) {
  if (document.getElementById(cellA).textContent != '1') {
    switch (cellA) {
      case 'picA1':
        if (document.getElementById('picA2').textContent == '1') {
          let tempValA = document.getElementById('picA2').textContent
          document.getElementById('picA2').textContent =
            document.getElementById('picA1').textContent
          document.getElementById('picA1').textContent = tempValA

          document
            .getElementById('picA1')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('picA1').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )
          document
            .getElementById('picA2')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('picA2').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )

          numberMVSA++
          document.querySelector(
            '.movesA'
          ).textContent = `movesA: ${numberMVSA}`
        }
        if (document.getElementById('picA3').textContent == '1') {
          let tempValA = document.getElementById('picA3').textContent
          document.getElementById('picA3').textContent =
            document.getElementById('picA1').textContent
          document.getElementById('picA1').textContent = tempValA

          document
            .getElementById('picA1')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('picA1').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )
          document
            .getElementById('picA3')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('picA3').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )

          numberMVSA++
          document.querySelector(
            '.movesA'
          ).textContent = `movesA: ${numberMVSA}`
        }

        if (checkWinA()) {
          setTimeout(() => {
            document.getElementById('picA1').style.visibility = 'hidden'
            document.getElementById('picA2').style.visibility = 'hidden'
            document.getElementById('picA3').style.visibility = 'hidden'
            document.getElementById('picA4').style.visibility = 'hidden'

            document
              .querySelector('.gridA')
              .setAttribute(
                'style',
                `background:url(giphy.gif) ;background-size: cover; background-position:center;`
              )

            setTimeout(backToNormalA, 5000)
          }, 500)
        }
        break

      case 'picA2':
        if (document.getElementById('picA1').textContent == '1') {
          let tempValA = document.getElementById('picA1').textContent
          document.getElementById('picA1').textContent =
            document.getElementById('picA2').textContent
          document.getElementById('picA2').textContent = tempValA

          document
            .getElementById('picA1')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('picA1').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )
          document
            .getElementById('picA2')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('picA2').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )

          numberMVSA++
          document.querySelector('.movesA').textContent = `moves: ${numberMVSA}`
        }
        if (document.getElementById('picA4').textContent == '1') {
          let tempValA = document.getElementById('picA4').textContent
          document.getElementById('picA4').textContent =
            document.getElementById('picA2').textContent
          document.getElementById('picA2').textContent = tempValA

          document
            .getElementById('picA4')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('picA4').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )
          document
            .getElementById('picA2')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('picA2').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )

          numberMVSA++
          document.querySelector('.movesA').textContent = `moves: ${numberMVSA}`
        }
        break

      case 'picA3':
        if (document.getElementById('picA1').textContent == '1') {
          let tempValA = document.getElementById('picA1').textContent
          document.getElementById('picA1').textContent =
            document.getElementById('picA3').textContent
          document.getElementById('picA3').textContent = tempValA

          document
            .getElementById('picA1')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('picA1').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )
          document
            .getElementById('picA3')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('picA3').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )

          numberMVSA++
          document.querySelector(
            '.movesA'
          ).textContent = `movesA: ${numberMVSA}`
        }
        if (document.getElementById('picA4').textContent == '1') {
          let tempValA = document.getElementById('picA4').textContent
          document.getElementById('picA4').textContent =
            document.getElementById('picA3').textContent
          document.getElementById('picA3').textContent = tempValA

          document
            .getElementById('picA4')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('picA4').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )
          document
            .getElementById('picA3')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('picA3').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )

          numberMVSA++
          document.querySelector(
            '.movesA'
          ).textContent = `movesA: ${numberMVSA}`
        }
        break

      case 'picA4':
        if (document.getElementById('picA2').textContent == '1') {
          let tempValA = document.getElementById('picA2').textContent
          document.getElementById('picA2').textContent =
            document.getElementById('picA4').textContent
          document.getElementById('picA4').textContent = tempValA

          document
            .getElementById('picA2')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('picA2').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )
          document
            .getElementById('picA4')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('picA4').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )

          numberMVSA++
          document.querySelector(
            '.movesA'
          ).textContent = `movesA: ${numberMVSA}`
        }
        if (document.getElementById('picA3').textContent == '1') {
          let tempValA = document.getElementById('picA3').textContent
          document.getElementById('picA3').textContent =
            document.getElementById('picA4').textContent
          document.getElementById('picA4').textContent = tempValA

          document
            .getElementById('picA3')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('picA3').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )
          document
            .getElementById('picA4')
            .setAttribute(
              'style',
              `background:url(${
                document.getElementById('picA4').textContent
              }.jpeg) ;background-size: contain; background-position:center;`
            )

          numberMVSA++
          document.querySelector(
            '.movesA'
          ).textContent = `movesA: ${numberMVSA}`
        }
        break
    }
  }
}
