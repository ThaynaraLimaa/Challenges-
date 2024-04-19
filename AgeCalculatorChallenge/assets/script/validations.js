function validateDay(field) {
    if(field.value > 31 || field.value < 1) {
        field.setCustomValidity('Day invalid');
        field.parentNode.querySelector('.form__erro-message').innerHTML = 'Must be a valid day';
        field.parentNode.querySelector('.form__labels').classList.add('text-erro');
        field.classList.add('input-erro');
    }

}

function validateMonth(field) {
    if(field.value > 12 || field.value < 1) {
        field.setCustomValidity('Month invalid');
        field.parentNode.querySelector('.form__erro-message').innerHTML = 'Must be a valid month';
        field.parentNode.querySelector('.form__labels').classList.add('text-erro');
        field.classList.add('input-erro');
    }
}

function validateYear(field) {
    const date = new Date();
    const currentYear = date.getFullYear(); 

    if(currentYear < field.value) {
       field.setCustomValidity('Year invalid.');
       field.parentNode.querySelector('.form__erro-message').innerHTML = 'Must be in the past';
       field.parentNode.querySelector('.form__labels').classList.add('text-erro');
       field.classList.add('input-erro');
    }
}



function validateDate(date) {
    const lastDay = new Date(date.year, date.month, 0).getDate()
    if(date.day > lastDay) {
        return false
    }

    return true
}

export const valiadtions = {
    validateYear, 
    validateMonth,
    validateDay,
    validateDate
}