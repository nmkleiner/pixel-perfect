'use strict'

function onHamburgerClick() {
    openElement('.screen')
    openElement('.top-nav-buttons')
    
    showXBtn()
    hideCollapseBtn()
}

function onScreenClick() {
    closeCanvasAndScreen()
    
}

function onXClick() {
    closeElement('.screen')
    closeElement('.top-nav-buttons')
    showCollapseBtn()
    
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

function onContinueClick() {
    openElement('.modal')
    openElement('.screen')
}

function onCloseModal() {
    closeElement('.modal')
    closeElement('.screen')
}

function removeClicked(elBtn) {
    var elA = elBtn.querySelector('a')
    if (elA.classList.contains('clicked')) {
        
        elBtn.classList.remove('clicked')
        elA.classList.remove('clicked')
    }
}

function openElement(selector) {
    var el = document.querySelector(selector)
    el.classList.add('open');
}

function closeElement(selector) {
    var el = document.querySelector(selector)
    el.classList.remove('open');
}


function showCollapseBtn() {
    var elBtn = document.querySelector('.btn-collapse');
    elBtn.style.display = 'block'
}

function hideCollapseBtn() {
    var elBtn = document.querySelector('.btn-collapse');
    elBtn.style.display = 'none'
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
        closeElement('.screen')
        closeElement('.top-nav-buttons')

        showCollapseBtn()
        hideXBtn()
        return;
    }
}