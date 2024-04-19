import { renderViews } from "./view.js";

const totalMonths = 12 
const totalDays = 31

let days; 
let months;
let years; 


export function calculate(dateObj) {
    const userDate = new Date(dateObj.year, dateObj.month - 1, dateObj.day); 
    const now = new Date(); 
    
    calculateMonths(now, userDate);
    calculateDays(now, userDate);
    renderViews.renderResult(days, months, years);
}


function calculateMonths(now, userDate) {
    if (now.getMonth() > userDate.getMonth()) {
        months =  now.getMonth() - userDate.getMonth(); 
        years = now.getFullYear() - userDate.getFullYear();
    } 

    if (now.getMonth() < userDate.getMonth()){
        years = now.getFullYear() - userDate.getFullYear() - 1;
        months = totalMonths -  (userDate.getMonth() - now.getMonth()); 
    }

    if(now.getMonth() == userDate.getMonth()) {
        months = 0

        if(now.getDate() > userDate.getDate() || now.getDate() == userDate.getDate()) {
            years = now.getFullYear() - userDate.getFullYear();
            
        } 

        if (now.getDate() < userDate.getDate()) {
            years = now.getFullYear() - userDate.getFullYear() - 1;
        }
    }
   
}

function calculateDays(now, userDate) {
    if (now.getDate() < userDate.getDate()) {
        days = totalDays - (userDate.getDate() - now.getDate())
    }

    if(now.getDate() > userDate.getDate()) {
        days = (now.getDate() - userDate.getDate())
    }

    if(now.getDate() == userDate.getDate()) {
        days = 0
    }
}