let nickname = 'BannedUser'


let [prizeAll, prizeMy] = document.getElementsByClassName('prizes-content')
let arrayAll = [{nickname: 'who?', prize: 'Золотой CZ Scorpion Evo3 A1 (1 дн.)', type: 'rare'}]
let arrayMy = [{prize: 'Золотой CZ Scorpion Evo3 A1 (1 дн.)', type: 'rare'}, {prize: 'Stoner LMG A1 (3 дн.)', type: ''}, {prize: 'H&K MP5 Special "Тень"', type: 'epic'}]
if (arrayAll.length == 0) {
    
} else {

}

if (arrayMy.length == 0) {
    let message = 'Смотрите трансляцию через любой плеер на этой странице и станете участником розыгрыша призов. Чем дольше вы смотрите, тем выше шанс получить награду. Вам обязательно повезет!'
    let text = document.createElement('div')
    text.classList.add('text')
    text.textContent = message
    prizeMy.appendChild(text)
} else {
    arrayMy.forEach( elem => {
        let div = document.createElement('div')
        let span = document.createElement('span')
        div.classList.add('item')
        elem.type?span.classList.add(elem.type):console.log('item has no type')

        if (elem.type == 'rare') {
            span.textContent = `${nickname} получил редкий предмет: ${elem.prize} !`
        } else if(elem.type == 'epic'){
            span.innerHTML = `${nickname} получил <u>эпический</u> предмет: ${elem.prize} !`
        } else {
            span.textContent = `${nickname} получил хороший предмет: ${elem.prize} !`

        }
        div.appendChild(span)
        prizeMy.appendChild(div)
    })
}






  let item = 'M4A1 Special "Тень"'
  // .epic .rare 
  let itemDiv = document.createElement('div')
  itemDiv.classList.add('item')
  let span = document.createElement('span')
  span.classList.add('rare')
  span.textContent = `${nickname} получил редкий предмет: ${item} !`
  itemDiv.appendChild(span)
  prizeAll.appendChild(itemDiv)