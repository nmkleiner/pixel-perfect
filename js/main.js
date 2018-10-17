'use strict'

function onNavClick(elBtn) {
    // small screen only
    var elButtonsContainer = document.querySelector('.top-nav-buttons')
    if (elButtonsContainer.classList.contains('open')) {
        elButtonsContainer.classList.remove('open')
         
        closeScreen()
        return;
    }
    
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

function onHamburgerClick() {
    openScreen()
    openCanvas()
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