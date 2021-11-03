let cardContainers = [...document.guerySelectorAll('.card-container-asia')];
let preBtns = [...document.querySelectorAll('.pre-asia-btn')];
let nxtBtn = [...document.querySelectorAll('.nxt-asia-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.containerWidth

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth + 200;
    })
})