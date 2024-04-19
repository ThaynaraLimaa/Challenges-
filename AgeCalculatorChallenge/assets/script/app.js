import { valiadtions } from "./validations.js";
import { calculate } from "./calculateDate.js";
import { renderViews } from "./view.js";

const form = document.querySelector('[data-form]');
const formInputs = form.querySelectorAll('input');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    renderViews.resetResults();
    const userDate = {
        day: e.target.day.value,
        month: e.target.month.value,
        year: e.target.year.value   
    }

    if(!valiadtions.validateDate(userDate)) {
        formInputs[0].parentNode.querySelector('.form__erro-message').innerHTML = 'Must be a valid date'

        formInputs.forEach(input => {
            input.setCustomValidity('Date invalid.');
            input.parentNode.querySelector('.form__labels').classList.add('text-erro');
            input.classList.add('input-erro');
            console.log(input)
        })

        return;
    };

    calculate(userDate);


})

formInputs.forEach(input => {
    input.addEventListener('focusout', () => {
        checkField(input)
    })
})

function checkField(field) {
    field.setCustomValidity(''); 
    field.parentNode.querySelector('.form__labels').classList.remove('text-erro');


    let erroDisplay = field.parentNode.querySelector('.form__erro-message');
    erroDisplay.innerHTML = ''; 

    if(field.value == '') {
        erroDisplay.innerHTML = 'This field is required'
        field.parentNode.querySelector('.form__labels').classList.add('text-erro');
        field.classList.add('input-erro');
        return
    }

    if(field.name == "day") {
        valiadtions.validateDay(field);
    }

    if(field.name == "month") {
        valiadtions.validateMonth(field);
    }

    if(field.name == "year") {
        valiadtions.validateYear(field);
    }
}


