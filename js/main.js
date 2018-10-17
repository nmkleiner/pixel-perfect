'use strict'

function onHamburgerClick() {
    openScreen()
    openCanvas()
    showXBtn()
}

function onScreenClick() {
    closeCanvasAndScreen()

}

function onXClick() {
    closeCanvasAndScreen()
    
}   
function onNavClick(elBtn) {
    // func closeCanvasAndScreen verifies open canvas first
    closeCanvasAndScreen()
    
    // wide screen only
    var elBtns = document.querySelectorAll('.top-nav-item')
    // remove clicked from clicked item
    for (var i = 0; i < elBtns.length; i++) {
        removeClicked(elBtns[i])
    }
    // add clicked to this item
    var elA = elBtn.querySelector('a')
    elBtn.classList.add('clicked')
    elA.classList.add('clicked')    
}

function removeClicked(elBtn) {
    var elA = elBtn.querySelector('a')
    if (elA.classList.contains('clicked')) {
        
        elBtn.classList.remove('clicked')
        elA.classList.remove('clicked')
    }
}


function openScreen() {
    var elScreen = document.querySelector('.screen');
    elScreen.classList.add('open');
    
}

function closeScreen() {
    var elScreen = document.querySelector('.screen');
    elScreen.classList.remove('open');
}


function openCanvas() {
    var elCanvas = document.querySelector('.top-nav-buttons');
    elCanvas.classList.add('open');
}

function closeCanvas() {
    var elButtonsContainer = document.querySelector('.top-nav-buttons')
    elButtonsContainer.classList.remove('open')
}

function showXBtn() {
    var elXBTN = document.querySelector('.btn-x');
    elXBTN.style.display = 'block'
}
function hideXBtn() {
    var elXBTN = document.querySelector('.btn-x');
    elXBTN.style.display = 'none'
}

function closeCanvasAndScreen() {
    if (document.querySelector('.top-nav-buttons').classList.contains('open')) {
        closeCanvas()
        closeScreen()
        return;
    }
}