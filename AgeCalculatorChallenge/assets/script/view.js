
const daysDisplay = document.querySelector('#days')
const monthsDisplay = document.querySelector('#months')
const yearsDisplay = document.querySelector('#years')

function renderResult(day, month, year) {
    daysDisplay.innerHTML = day; 
    monthsDisplay.innerHTML = month; 
    yearsDisplay.innerHTML = year; 
}

function resetResults() {
    daysDisplay.innerHTML = '--'; 
    monthsDisplay.innerHTML = '--'; 
    yearsDisplay.innerHTML = '--'; 
}


export const renderViews = {
    renderResult,
    resetResults
}